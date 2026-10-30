import { isInvincible } from "./actions";
import { distance, moveCircle, overlaps } from "./collision";
import { henchTemplate } from "./data";
import type { LevelDef } from "./types";
import { pushParticle, spawnBoss, spawnHench, held, type Engine, type Enemy } from "./world";

export type StepResult = "play" | "win" | "lose";

const FRAME = 60;

function reap(engine: Engine) {
  let door: { x: number; y: number } | null = null;
  for (let j = engine.enemies.length - 1; j >= 0; j--) {
    const e = engine.enemies[j]!;
    if (e.hp > 0) continue;
    if (e.typeId === "goon") engine.stats.goonsKilled++;
    else if (e.typeId === "thug") engine.stats.thugsKilled++;
    else if (e.typeId === "soundproofer") engine.stats.soundproofersKilled++;
    if (!e.isBoss) engine.reedsPending += 5;
    pushParticle(engine, {
      x: e.x,
      y: e.y,
      life: 0.55,
      shape: "explosion",
      hex: e.isBoss ? "#f87171" : "#94a3b8",
      scale: e.isBoss ? 3 : 1.4,
    });
    if (e.isBoss) {
      engine.stats.bossesDefeated++;
      engine.boss = null;
      door = { x: e.x, y: e.y };
    }
    engine.enemies.splice(j, 1);
  }
  if (door) {
    engine.door = { ...door, radius: 42 };
    engine.enemies = engine.enemies.filter((en) => !en.isBossMinion && en.typeId !== "angry_student");
  }
}

export function step(engine: Engine, dt: number, level: LevelDef, breathRegen: number, aimWithMouse: boolean): StepResult {
  if (engine.ended) return "play";
  const stepN = dt * FRAME;
  engine.time += dt * 1000;
  const p = engine.player;
  if (engine.godMode) p.hp = p.maxHp;
  if (p.hp <= 0) {
    engine.ended = true;
    return "lose";
  }

  if (engine.time > p.speedBuffUntil) p.speed = p.baseSpeed;
  if (p.playTimer > 0) p.playTimer -= dt;
  else p.isPlaying = false;

  if (p.z > 0 || p.vz !== 0) {
    p.z += p.vz * dt;
    p.vz -= 1400 * dt;
    if (p.z <= 0) {
      p.z = 0;
      p.vz = 0;
    }
  }
  const airborne = p.z > 18;

  let ix = engine.stick.x;
  let iy = engine.stick.y;
  if (held(engine, "KeyA", "ArrowLeft")) ix -= 1;
  if (held(engine, "KeyD", "ArrowRight")) ix += 1;
  if (held(engine, "KeyW", "ArrowUp")) iy -= 1;
  if (held(engine, "KeyS", "ArrowDown")) iy += 1;
  const mag = Math.hypot(ix, iy);
  if (mag > 1) {
    ix /= mag;
    iy /= mag;
  }
  let speed = p.speed * stepN;
  const sprint = held(engine, "ShiftLeft", "ShiftRight") && p.breath > 0;
  if (sprint) {
    speed *= 1.55;
    p.breath = Math.max(0, p.breath - 18 * dt);
    p.breathRegenPause = 0.35;
  }
  const dx = p.isRooted ? 0 : ix * speed;
  const dy = p.isRooted ? 0 : iy * speed;
  const moved = moveCircle(p.x, p.y, dx, dy, p.radius, engine.walls, engine.mapW, engine.mapH);
  p.x = moved.x;
  p.y = moved.y;
  p.isWalking = dx !== 0 || dy !== 0;
  engine.lastSpeed = dt > 0 ? Math.hypot(dx, dy) / dt : 0;

  let nearest: Enemy | null = null;
  let nearestD = Infinity;
  for (const e of engine.enemies) {
    if (e.behavior === "speech" || e.hp <= 0) continue;
    const d = distance(p.x, p.y, e.x, e.y);
    if (d < nearestD) {
      nearestD = d;
      nearest = e;
    }
  }
  if (!aimWithMouse) {
    if (nearest) p.angle = Math.atan2(nearest.y - p.y, nearest.x - p.x);
    else if (p.isWalking) p.angle = Math.atan2(dy, dx);
  }

  if (p.breathRegenPause > 0) p.breathRegenPause -= dt;
  else p.breath = Math.min(p.maxBreath, p.breath + 30 * breathRegen * dt);

  if (engine.henchmenSpawned < level.henchmenCount && engine.time - engine.lastSpawnTime > 1400) {
    const pool = level.isDLC ? ["brainrot_kid"] : level.customHenchmen?.length ? level.customHenchmen : ["goon", "thug", "soundproofer"];
    const typeId = pool[Math.floor(Math.random() * pool.length)] ?? "goon";
    const type = henchTemplate(typeId);
    const ang = Math.random() * Math.PI * 2;
    const ex = p.x + Math.cos(ang) * 560;
    const ey = p.y + Math.sin(ang) * 560;
    spawnHench(engine, type.typeId, ex, ey);
    engine.henchmenSpawned++;
    engine.lastSpawnTime = engine.time;
  } else if (!engine.bossSpawned && engine.henchmenSpawned >= level.henchmenCount && engine.enemies.length === 0) {
    spawnBoss(engine, level);
  }

  for (let a = engine.allies.length - 1; a >= 0; a--) {
    const ally = engine.allies[a]!;
    if (ally.hp <= 0) {
      engine.allies.splice(a, 1);
      continue;
    }
    let targ: Enemy | null = null;
    let td = Infinity;
    for (const e of engine.enemies) {
      if (e.hp <= 0) continue;
      const d = distance(ally.x, ally.y, e.x, e.y);
      if (d < td) {
        td = d;
        targ = e;
      }
    }
    if (targ) {
      const ang = Math.atan2(targ.y - ally.y, targ.x - ally.x);
      ally.angle = ang;
      if (td > 190) {
        ally.x += Math.cos(ang) * ally.speed * stepN;
        ally.y += Math.sin(ang) * ally.speed * stepN;
      }
      ally.attackTimer += dt;
      if (ally.attackTimer > 1) {
        ally.attackTimer = 0;
        engine.projectiles.push({
          id: engine.nextId++,
          x: ally.x,
          y: ally.y,
          angle: ang,
          damage: 80,
          speed: 11,
          hex: "#60a5fa",
          shape: "note",
          hits: 1,
          hitCooldowns: new Map(),
          passWalls: false,
          homing: true,
          pierce: 0,
          knockback: 0,
          aoe: 0,
          targetId: targ.id,
        });
      }
    }
    ally.x = Math.max(50, Math.min(engine.mapW - 50, ally.x));
    ally.y = Math.max(50, Math.min(engine.mapH - 50, ally.y));
  }

  const count = engine.enemies.length;
  for (let i = 0; i < count; i++) {
    const enemy = engine.enemies[i];
    if (!enemy || enemy.hp <= 0) continue;
    const frozen = engine.time < enemy.frozenUntil;
    const speed = frozen ? enemy.originalSpeed * 0.08 : enemy.speed;
    const dist = distance(p.x, p.y, enemy.x, enemy.y);
    const ang = Math.atan2(p.y - enemy.y, p.x - enemy.x);
    let edx = 0;
    let edy = 0;
    if (enemy.isBoss) {
      if (enemy.behavior === "speech") {
        /* stands still until the egg lands */
      } else {
        enemy.attackTimer += dt;
        if (enemy.attackTimer > 2.4) {
          enemy.attackTimer = 0;
          if (Math.random() > 0.45) {
            for (let s = -1; s <= 1; s++) {
              engine.enemyShots.push({
                id: engine.nextId++,
                x: enemy.x,
                y: enemy.y,
                angle: ang + s * 0.22,
                speed: 7,
                damage: level.damage,
              });
            }
          } else {
            spawnHench(engine, "goon", enemy.x + 70, enemy.y);
            const minion = engine.enemies[engine.enemies.length - 1];
            if (minion && !minion.isBoss) {
              minion.typeId = "minion";
              minion.isBossMinion = true;
              minion.hp = 30;
              minion.maxHp = 30;
              minion.speed = 4.2;
              minion.originalSpeed = 4.2;
              minion.radius = 14;
              minion.damage = Math.max(8, level.damage / 3);
            }
            spawnHench(engine, "goon", enemy.x - 70, enemy.y);
            const minion2 = engine.enemies[engine.enemies.length - 1];
            if (minion2 && minion2 !== minion && !minion2.isBoss) {
              minion2.typeId = "minion";
              minion2.isBossMinion = true;
              minion2.hp = 30;
              minion2.maxHp = 30;
              minion2.speed = 4.2;
              minion2.originalSpeed = 4.2;
              minion2.radius = 14;
              minion2.damage = Math.max(8, level.damage / 3);
            }
          }
        }
        edx = Math.cos(ang) * speed;
        edy = Math.sin(ang) * speed;
      }
    } else if (enemy.typeId === "linebacker" || enemy.typeId === "striker") {
      if (!enemy.chargeState) enemy.chargeState = "idle";
      enemy.timer -= dt;
      if (enemy.chargeState === "idle" && enemy.timer <= 0 && dist < 420) {
        enemy.chargeState = "charging";
        enemy.timer = 0.7;
        enemy.chargeAngle = ang;
      } else if (enemy.chargeState === "charging") {
        edx = Math.cos(enemy.chargeAngle) * speed * 2.8;
        edy = Math.sin(enemy.chargeAngle) * speed * 2.8;
        if (enemy.timer <= 0) {
          enemy.chargeState = "cooldown";
          enemy.timer = 1.2;
        }
      } else if (enemy.chargeState === "cooldown") {
        edx = Math.cos(ang) * speed * 0.45;
        edy = Math.sin(ang) * speed * 0.45;
        if (enemy.timer <= 0) {
          enemy.chargeState = "idle";
          enemy.timer = 0.8;
        }
      } else {
        edx = Math.cos(ang) * speed;
        edy = Math.sin(ang) * speed;
      }
    } else if (enemy.typeId === "quarterback" || enemy.typeId === "kicker") {
      if (dist < 280) {
        edx = -Math.cos(ang) * speed;
        edy = -Math.sin(ang) * speed;
      } else if (dist > 420) {
        edx = Math.cos(ang) * speed;
        edy = Math.sin(ang) * speed;
      }
      enemy.timer -= dt;
      if (enemy.timer <= 0) {
        engine.enemyShots.push({
          id: engine.nextId++,
          x: enemy.x,
          y: enemy.y,
          angle: ang,
          speed: 8,
          damage: enemy.damage,
          football: true,
        });
        enemy.timer = 2.3;
      }
    } else {
      edx = Math.cos(ang) * speed;
      edy = Math.sin(ang) * speed;
    }

    enemy.angle = Math.hypot(edx, edy) > 0.02 ? Math.atan2(edy, edx) : ang;

    const next = moveCircle(enemy.x, enemy.y, edx * stepN, edy * stepN, enemy.radius, engine.walls, engine.mapW, engine.mapH);
    if (next.x === enemy.x) {
      for (const w of engine.walls) {
        if (!w.isBorder && overlaps(enemy.x + edx * stepN, enemy.y, enemy.radius, w)) w.hp -= enemy.damage * dt;
      }
    } else enemy.x = next.x;
    if (next.y === enemy.y) {
      for (const w of engine.walls) {
        if (!w.isBorder && overlaps(enemy.x, enemy.y + edy * stepN, enemy.radius, w)) w.hp -= enemy.damage * dt;
      }
    } else enemy.y = next.y;

    if (!airborne && !isInvincible(engine) && dist < enemy.radius + p.radius && engine.time - p.lastHit > 520) {
      const mul = (enemy.typeId === "linebacker" || enemy.typeId === "striker") && enemy.chargeState === "charging" ? 2 : 1;
      p.hp -= enemy.damage * mul;
      p.lastHit = engine.time;
      const push = moveCircle(p.x, p.y, Math.cos(ang) * 36, Math.sin(ang) * 36, p.radius, engine.walls, engine.mapW, engine.mapH);
      p.x = push.x;
      p.y = push.y;
    }

    if (enemy.isBrainrot) {
      for (let a = engine.allies.length - 1; a >= 0; a--) {
        const ally = engine.allies[a]!;
        if (distance(enemy.x, enemy.y, ally.x, ally.y) < enemy.radius + ally.radius) {
          pushParticle(engine, { x: ally.x, y: ally.y, life: 0.5, shape: "splat", hex: "#84cc16", scale: 1.4 });
          spawnHench(engine, "brainrot_kid", ally.x, ally.y);
          engine.allies.splice(a, 1);
        }
      }
    }
    if (enemy.hitFlash > 0) enemy.hitFlash -= dt;
  }

  engine.walls = engine.walls.filter((w) => w.isBorder || w.hp > 0);

  for (let i = engine.enemyShots.length - 1; i >= 0; i--) {
    const ep = engine.enemyShots[i]!;
    ep.x += Math.cos(ep.angle) * ep.speed * stepN;
    ep.y += Math.sin(ep.angle) * ep.speed * stepN;
    let gone = false;
    for (const w of engine.walls) {
      if (overlaps(ep.x, ep.y, 8, w)) {
        gone = true;
        break;
      }
    }
    if (!gone && !airborne && !isInvincible(engine) && distance(ep.x, ep.y, p.x, p.y) < p.radius + 8) {
      if (engine.time - p.lastHit > 520) {
        p.hp -= ep.damage;
        p.lastHit = engine.time;
      }
      pushParticle(engine, { x: ep.x, y: ep.y, life: 0.35, shape: "hit", hex: "#ef4444", scale: 1 });
      gone = true;
    }
    if (gone || ep.x < -40 || ep.y < -40 || ep.x > engine.mapW + 40 || ep.y > engine.mapH + 40) engine.enemyShots.splice(i, 1);
  }

  for (let i = engine.projectiles.length - 1; i >= 0; i--) {
    const pr = engine.projectiles[i]!;
    if (pr.orbiter) {
      pr.orbiterAngle = (pr.orbiterAngle ?? 0) + dt * 3.2;
      pr.x = p.x + Math.cos(pr.orbiterAngle) * 86;
      pr.y = p.y + Math.sin(pr.orbiterAngle) * 86;
      if (pr.expireAt && engine.time > pr.expireAt) {
        engine.projectiles.splice(i, 1);
        continue;
      }
    } else {
      let target = engine.enemies.find((e) => e.id === pr.targetId && e.hp > 0 && e.behavior !== "speech");
      if (target && engine.time - (pr.hitCooldowns.get(target.id) ?? -9999) < 420) target = undefined;
      if (!target && pr.homing) {
        let best: Enemy | null = null;
        let bd = Infinity;
        for (const e of engine.enemies) {
          if (e.hp <= 0 || e.behavior === "speech") continue;
          if (engine.time - (pr.hitCooldowns.get(e.id) ?? -9999) < 420) continue;
          const d = distance(pr.x, pr.y, e.x, e.y);
          if (d < bd) {
            bd = d;
            best = e;
          }
        }
        target = best ?? undefined;
        if (target) pr.targetId = target.id;
      }
      if (target) {
        const ta = Math.atan2(target.y - pr.y, target.x - pr.x);
        const diff = Math.atan2(Math.sin(ta - pr.angle), Math.cos(ta - pr.angle));
        pr.angle += diff * Math.min(1, dt * 8);
      }
      pr.x += Math.cos(pr.angle) * pr.speed * stepN;
      pr.y += Math.sin(pr.angle) * pr.speed * stepN;
      if (!pr.passWalls) {
        let blocked = false;
        for (const w of engine.walls) {
          if (overlaps(pr.x, pr.y, 8, w)) {
            blocked = true;
            break;
          }
        }
        if (blocked) {
          engine.projectiles.splice(i, 1);
          continue;
        }
      }
    }

    let consumed = false;
    for (const e of engine.enemies) {
      if (e.hp <= 0) continue;
      if (distance(pr.x, pr.y, e.x, e.y) > e.radius + 16) continue;
      if (e.behavior === "speech") {
        if (pr.shape === "egg") {
          e.behavior = "chase";
          engine.eggTriggered = true;
          pushParticle(engine, { x: e.x, y: e.y, life: 0.8, shape: "splat", hex: "#fde047", scale: 2.4 });
          for (let k = 0; k < 16; k++) {
            spawnHench(engine, "angry_student", e.x + (Math.random() - 0.5) * 700, e.y + (Math.random() - 0.5) * 500);
          }
          consumed = true;
          pr.hits = 0;
        }
        continue;
      }
      if (engine.time - (pr.hitCooldowns.get(e.id) ?? -9999) < 420) continue;
      e.hp -= pr.damage;
      e.hitFlash = 0.12;
      pr.hitCooldowns.set(e.id, engine.time);
      if (!pr.orbiter) pr.hits -= 1;
      if (pr.knockback) {
        const next = moveCircle(
          e.x,
          e.y,
          Math.cos(pr.angle) * pr.knockback,
          Math.sin(pr.angle) * pr.knockback,
          e.radius,
          engine.walls,
          engine.mapW,
          engine.mapH,
        );
        e.x = next.x;
        e.y = next.y;
      }
      if (pr.aoe) {
        for (const other of engine.enemies) {
          if (other.id !== e.id && distance(e.x, e.y, other.x, other.y) < pr.aoe) other.hp -= pr.damage * 0.5;
        }
      }
      pushParticle(engine, { x: e.x, y: e.y, life: 0.35, shape: pr.shape === "egg" ? "splat" : "hit", hex: pr.hex, scale: 1 });
      consumed = true;
      if (pr.hits <= 0 && !pr.orbiter) break;
    }
    if ((consumed && pr.hits <= 0 && !pr.orbiter) || pr.x < -200 || pr.y < -200 || pr.x > engine.mapW + 200 || pr.y > engine.mapH + 200) {
      engine.projectiles.splice(i, 1);
    }
  }

  reap(engine);

  for (let i = engine.particles.length - 1; i >= 0; i--) {
    const part = engine.particles[i]!;
    part.life -= dt * 1.6;
    part.y -= 28 * dt;
    if (part.life <= 0) engine.particles.splice(i, 1);
  }

  if (engine.door && distance(p.x, p.y, engine.door.x, engine.door.y) < p.radius + engine.door.radius) {
    engine.ended = true;
    return "win";
  }

  engine.camera.x += (p.x - engine.camera.x) * Math.min(1, dt * 8);
  engine.camera.y += (p.y - engine.camera.y) * Math.min(1, dt * 8);
  if (p.hp <= 0) {
    engine.ended = true;
    return "lose";
  }
  return "play";
}
