import { playSynthesizer } from "./audio";
import { distance, hitsWall, moveCircle } from "./collision";
import { COMBOS, INSTRUMENTS } from "./data";
import type { CharacterDef, CharUpgrade, InstrumentDef, Upgrade } from "./types";
import { pushParticle, type Engine, type Projectile } from "./world";

function shot(
  engine: Engine,
  angle: number,
  damage: number,
  inst: InstrumentDef,
  hits: number,
  extra: Partial<Projectile> = {},
) {
  const shape = extra.shape ?? inst.shape ?? (inst.family === "gun" ? "bullet" : "note");
  const proj: Projectile = {
    id: engine.nextId++,
    x: engine.player.x,
    y: engine.player.y,
    angle,
    damage,
    speed: extra.speed ?? inst.projSpeed,
    hex: inst.hex,
    hits,
    hitCooldowns: new Map(),
    passWalls: extra.passWalls ?? inst.passWalls ?? inst.family !== "gun",
    homing: extra.homing ?? (inst.family !== "gun" && inst.family !== "throwable"),
    pierce: inst.pierce ?? 0,
    knockback: inst.knockback ?? 0,
    aoe: inst.aoe ?? 0,
    targetId: null,
    ...extra,
    shape,
  };
  engine.projectiles.push(proj);
  if (engine.projectiles.length > 90) engine.projectiles.splice(0, engine.projectiles.length - 90);
}

export function noteDamage(inst: InstrumentDef, character: CharacterDef, upg: Upgrade, cu: CharUpgrade) {
  return inst.baseDamage * character.stats.damageMultiplier * (1 + upg.damageLvl * 0.1) + cu.dmg * 10;
}

export function noteSpeed(inst: InstrumentDef, upg: Upgrade) {
  return inst.projSpeed * (1 + (upg.speedLvl || 0) * 0.15);
}

export function noteBreath(inst: InstrumentDef, upg: Upgrade, cu: CharUpgrade) {
  const eff = Math.max(0.25, 1 - upg.breathLvl * 0.05);
  return inst.breathCost * eff * 0.95 ** cu.breath;
}

export function playNote(
  engine: Engine,
  noteName: string,
  freq: number,
  instId: string,
  character: CharacterDef,
  upg: Upgrade,
  cu: CharUpgrade,
): string | null {
  const inst = INSTRUMENTS[instId];
  if (!inst || inst.family === "gun" || inst.family === "throwable") return null;
  if (engine.time - engine.player.lastNoteTime < (inst.cooldown ?? 180)) return null;
  const cost = noteBreath(inst, upg, cu);
  if (engine.player.breath < cost || engine.player.hp <= 0) return null;
  const damage = noteDamage(inst, character, upg, cu);
  const hits = Math.max(2, inst.hits || 2) + (upg.hitsLvl || 0);
  engine.player.breath -= cost;
  engine.player.lastNoteTime = engine.time;
  engine.player.isPlaying = true;
  engine.player.playTimer = 0.18;
  engine.player.breathRegenPause = 0.45;
  if (inst.rootPlayer) engine.player.isRooted = true;
  playSynthesizer(freq, instId);
  engine.player.noteHistory.push(noteName);
  if (engine.player.noteHistory.length > 3) engine.player.noteHistory.shift();
  let comboName: string | null = null;
  const combo = COMBOS[character.id];
  if (combo && engine.player.noteHistory.join(",") === combo.seq.join(",")) {
    applyCombo(character.id, engine);
    comboName = combo.name;
    engine.player.noteHistory = [];
  }
  const burst = inst.burst ?? 1;
  const spread = inst.spread ?? 0.15;
  const start = -((burst - 1) / 2) * spread;
  for (let i = 0; i < burst; i++) shot(engine, engine.player.angle + start + i * spread, damage, inst, hits, { speed: noteSpeed(inst, upg) });
  return comboName;
}

export function shootAimed(
  engine: Engine,
  instId: string,
  character: CharacterDef,
  upg: Upgrade,
  cu: CharUpgrade,
  worldX: number,
  worldY: number,
) {
  const inst = INSTRUMENTS[instId];
  if (!inst || (inst.family !== "gun" && inst.family !== "throwable")) return false;
  if (engine.time - engine.player.lastNoteTime < 180) return false;
  const angle = Math.atan2(worldY - engine.player.y, worldX - engine.player.x);
  engine.player.angle = angle;
  engine.player.lastNoteTime = engine.time;
  engine.player.isPlaying = true;
  engine.player.playTimer = 0.12;
  const damage = inst.baseDamage * character.stats.damageMultiplier + cu.dmg * 10;
  playSynthesizer(inst.family === "gun" ? 90 : 700, instId);
  shot(engine, angle, damage, inst, Math.max(2, inst.hits || 2) + (upg.hitsLvl || 0), {
    speed: noteSpeed(inst, upg),
    homing: false,
    passWalls: inst.family === "throwable" ? false : true,
    shape: inst.shape ?? (inst.family === "throwable" ? "egg" : "bullet"),
  });
  return true;
}

export function tryJump(engine: Engine) {
  if (engine.player.z <= 0.5 && engine.player.breath >= 15) {
    engine.player.vz = 430;
    engine.player.breath -= 15;
    engine.player.breathRegenPause = 0.4;
    return true;
  }
  return false;
}

export function gunMelee(engine: Engine) {
  if (engine.time - engine.player.lastMeleeTime < 500) return;
  engine.player.lastMeleeTime = engine.time;
  pushParticle(engine, { x: engine.player.x, y: engine.player.y, life: 0.45, shape: "explosion", hex: "#fb923c", scale: 2.2 });
  for (const en of engine.enemies) {
    if (distance(engine.player.x, engine.player.y, en.x, en.y) < 150) {
      en.hp = en.isBoss ? en.hp - 300 : 0;
      const a = Math.atan2(en.y - engine.player.y, en.x - engine.player.x);
      const next = moveCircle(en.x, en.y, Math.cos(a) * 150, Math.sin(a) * 150, en.radius, engine.walls, engine.mapW, engine.mapH);
      en.x = next.x;
      en.y = next.y;
    }
  }
}

function buffSpeed(engine: Engine, mul: number, ms: number) {
  engine.player.speedBuffMul = mul;
  engine.player.speedBuffUntil = engine.time + ms;
  engine.player.speed = engine.player.baseSpeed * mul;
}

function nova(engine: Engine, count: number, damage: number) {
  const inst = INSTRUMENTS.toot!;
  for (let i = 0; i < count; i++) {
    shot(engine, (i / count) * Math.PI * 2, damage, inst, 5, {
      hex: "#facc15",
      speed: 8,
      homing: true,
      passWalls: true,
      pierce: 5,
      shape: "note",
    });
  }
}

export function applyCombo(id: string, engine: Engine) {
  const p = engine.player;
  switch (id) {
    case "rocky":
      buffSpeed(engine, 1.2, 3000);
      p.breath = Math.min(p.maxBreath, p.breath + 30);
      break;
    case "melody":
      p.hp = Math.min(p.maxHp, p.hp + 50);
      break;
    case "harmony":
      p.breath = p.maxBreath;
      break;
    case "rhythm":
      nova(engine, 8, 80);
      break;
    case "treble":
      buffSpeed(engine, 1.5, 5000);
      break;
    case "bass":
      p.invincibleUntil = engine.time + 3000;
      break;
    case "keli":
      nova(engine, 3, 400);
      break;
    case "kai":
      boom(engine, p.x, p.y, 300, 200);
      break;
    case "kashu":
      p.breath = Math.min(p.maxBreath, p.breath + 50);
      break;
    case "eason":
      halo(engine, "#67e8f9");
      break;
    case "thomas":
      nova(engine, 12, 90);
      break;
    case "javis":
      for (const pr of engine.projectiles) pr.damage *= 2;
      break;
    case "quinn":
      p.hp = Math.min(p.maxHp, p.hp + 25);
      nova(engine, 4, 50);
      break;
    case "nora":
      for (const e of engine.enemies) e.frozenUntil = engine.time + 800;
      break;
    case "piper":
      buffSpeed(engine, 1.45, 2500);
      break;
    case "milo":
      boom(engine, p.x, p.y, 180, 90);
      break;
    case "bea":
      p.breath = Math.min(p.maxBreath, p.breath + 40);
      break;
    case "luna":
      halo(engine, "#c4b5fd");
      break;
    case "coco":
      shove(engine, 80);
      break;
    case "otto":
      nova(engine, 5, 110);
      break;
    case "sage":
      for (const e of engine.enemies) e.frozenUntil = engine.time + 1200;
      break;
    case "riley":
      shove(engine, 140);
      break;
    case "nova":
      boom(engine, p.x, p.y, 220, 160);
      buffSpeed(engine, 1.3, 2000);
      break;
    default:
      break;
  }
}

function boom(engine: Engine, x: number, y: number, radius: number, dmg: number) {
  pushParticle(engine, { x, y, life: 0.6, shape: "explosion", hex: "#fb923c", scale: 3 });
  for (const e of engine.enemies) {
    if (distance(x, y, e.x, e.y) < radius) e.hp -= dmg;
  }
}

function shove(engine: Engine, dist: number) {
  const p = engine.player;
  for (const e of engine.enemies) {
    const a = Math.atan2(e.y - p.y, e.x - p.x);
    const next = moveCircle(e.x, e.y, Math.cos(a) * dist, Math.sin(a) * dist, e.radius, engine.walls, engine.mapW, engine.mapH);
    e.x = next.x;
    e.y = next.y;
  }
}

function dash(engine: Engine, dist: number) {
  const p = engine.player;
  let left = dist;
  while (left > 0) {
    const bit = Math.min(20, left);
    const next = moveCircle(p.x, p.y, Math.cos(p.angle) * bit, Math.sin(p.angle) * bit, p.radius, engine.walls, engine.mapW, engine.mapH);
    if (next.x === p.x && next.y === p.y) break;
    p.x = next.x;
    p.y = next.y;
    left -= bit;
  }
}

function halo(engine: Engine, hex: string) {
  for (let i = 0; i < 4; i++) {
    shot(engine, 0, 150, INSTRUMENTS.toot!, 99, {
      orbiter: true,
      orbiterAngle: (i * Math.PI) / 2,
      expireAt: engine.time + 5000,
      speed: 0,
      homing: false,
      hex,
      shape: "note",
    });
  }
}

export function useSecret(engine: Engine, character: CharacterDef, cu: CharUpgrade): string | null {
  const ability = character.secret;
  const cost = ability.cost * 0.95 ** cu.breath;
  if (engine.player.breath < cost) return null;
  engine.player.breath -= cost;
  engine.player.breathRegenPause = 0.8;
  const p = engine.player;
  switch (character.id) {
    case "rocky":
      p.hp = Math.min(p.maxHp, p.hp + 50);
      break;
    case "melody":
      for (const e of engine.enemies) e.frozenUntil = engine.time + 2000;
      break;
    case "harmony":
      engine.enemyShots = [];
      break;
    case "rhythm":
      shove(engine, 280);
      break;
    case "treble":
      dash(engine, 380);
      break;
    case "bass":
      p.invincibleUntil = engine.time + 5000;
      break;
    case "keli":
      nova(engine, 8, 200);
      break;
    case "kai":
      pushParticle(engine, { x: p.x, y: p.y, life: 0.7, shape: "explosion", hex: "#facc15", scale: 4 });
      for (const e of engine.enemies) {
        if (distance(p.x, p.y, e.x, e.y) < 400) e.hp = e.isBoss ? e.hp - 1500 : 0;
      }
      break;
    case "kashu":
      buffSpeed(engine, 2, 4000);
      break;
    case "eason":
      for (const pr of engine.projectiles) pr.damage *= 2;
      break;
    case "thomas":
      p.maxBreath += 100;
      p.breath = p.maxBreath;
      break;
    case "javis":
      for (const e of engine.enemies) e.hp = e.isBoss ? e.hp - 500 : 0;
      break;
    case "quinn":
      p.hp = Math.min(p.maxHp, p.hp + 40);
      nova(engine, 6, 70);
      break;
    case "nora":
      for (const e of engine.enemies) e.frozenUntil = engine.time + 1500;
      shove(engine, 160);
      break;
    case "piper":
      dash(engine, 240);
      buffSpeed(engine, 1.8, 2500);
      break;
    case "milo":
      boom(engine, p.x, p.y, 240, 180);
      break;
    case "bea":
      p.invincibleUntil = engine.time + 2000;
      p.breath = Math.min(p.maxBreath, p.breath + 40);
      break;
    case "luna":
      halo(engine, "#c4b5fd");
      break;
    case "coco":
      boom(engine, p.x, p.y, 180, 140);
      shove(engine, 120);
      break;
    case "otto":
      nova(engine, 5, 240);
      break;
    case "sage":
      for (const e of engine.enemies) e.frozenUntil = engine.time + 3000;
      p.hp = Math.min(p.maxHp, p.hp + 30);
      break;
    case "riley":
      shove(engine, 320);
      boom(engine, p.x, p.y, 160, 80);
      break;
    case "nova":
      boom(engine, p.x, p.y, 360, 420);
      buffSpeed(engine, 1.4, 3000);
      break;
    case "alton":
      pushParticle(engine, {
        x: p.x + Math.cos(p.angle) * 90,
        y: p.y + Math.sin(p.angle) * 90,
        life: 0.55,
        shape: "explosion",
        hex: "#ef4444",
        scale: 3.4,
      });
      for (const e of engine.enemies) {
        if (distance(p.x, p.y, e.x, e.y) < 250) e.hp = e.isBoss ? e.hp - 2000 : 0;
      }
      break;
    case "socialist_rocky":
      pushParticle(engine, { x: p.x, y: p.y, life: 0.7, shape: "slash", hex: "#e11d48", scale: 3 });
      for (const e of engine.enemies) {
        if (distance(p.x, p.y, e.x, e.y) < 210) e.hp = e.isBoss ? e.hp - 1500 : 0;
      }
      break;
    case "harry":
      for (let i = 0; i < 2; i++) {
        shot(engine, p.angle + (i === 0 ? -0.45 : 0.45), 700, INSTRUMENTS.toot!, 5, {
          shape: "dog",
          hex: "#a8a29e",
          speed: 7,
          homing: true,
          passWalls: true,
          pierce: 4,
        });
      }
      break;
    case "tacops":
      for (const e of engine.enemies) {
        pushParticle(engine, { x: e.x, y: e.y, life: 0.55, shape: "explosion", hex: "#fb923c", scale: 2.4 });
        e.hp = e.isBoss ? e.hp - 5000 : 0;
      }
      break;
    default:
      break;
  }
  return ability.name;
}

export function worldFromMouse(engine: Engine) {
  const camX = engine.camera.x - engine.viewW / 2;
  const camY = engine.camera.y - engine.viewH / 2;
  return { x: engine.mouse.x + camX, y: engine.mouse.y + camY };
}

export function isInvincible(engine: Engine) {
  return engine.godMode || engine.time < engine.player.invincibleUntil;
}

export function shotBlocked(x: number, y: number, walls: Engine["walls"], mapW: number, mapH: number) {
  return hitsWall(x, y, 6, walls, mapW, mapH);
}
