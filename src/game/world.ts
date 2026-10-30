import { findOpenSpot, getMapWalls, MAP_HEIGHT, MAP_WIDTH } from "./collision";
import { henchTemplate } from "./data";
import type { CharacterDef, GameStats, LevelDef, Wall } from "./types";

export type Player = {
  x: number;
  y: number;
  radius: number;
  hp: number;
  maxHp: number;
  breath: number;
  maxBreath: number;
  baseSpeed: number;
  speed: number;
  speedBuffMul: number;
  speedBuffUntil: number;
  invincibleUntil: number;
  isRooted: boolean;
  lastHit: number;
  angle: number;
  isWalking: boolean;
  isPlaying: boolean;
  playTimer: number;
  lastNoteTime: number;
  lastMeleeTime: number;
  noteHistory: string[];
  z: number;
  vz: number;
  breathRegenPause: number;
};

export type Enemy = {
  id: number;
  typeId: string;
  name?: string;
  x: number;
  y: number;
  hp: number;
  maxHp: number;
  speed: number;
  originalSpeed: number;
  damage: number;
  radius: number;
  isBoss?: boolean;
  isBossMinion?: boolean;
  isBrainrot?: boolean;
  behavior?: string;
  attackTimer: number;
  chargeState?: "idle" | "charging" | "cooldown";
  timer: number;
  chargeAngle: number;
  hitFlash: number;
  frozenUntil: number;
  angle: number;
};

export type Ally = {
  id: number;
  x: number;
  y: number;
  hp: number;
  maxHp: number;
  speed: number;
  radius: number;
  attackTimer: number;
  angle: number;
};

export type Projectile = {
  id: number;
  x: number;
  y: number;
  angle: number;
  damage: number;
  speed: number;
  hex: string;
  shape: string;
  hits: number;
  hitCooldowns: Map<number, number>;
  passWalls: boolean;
  homing: boolean;
  pierce: number;
  knockback: number;
  aoe: number;
  targetId: number | null;
  orbiter?: boolean;
  orbiterAngle?: number;
  expireAt?: number;
};

export type EnemyShot = {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  damage: number;
  football?: boolean;
};

export type Particle = {
  id: number;
  x: number;
  y: number;
  life: number;
  shape: string;
  hex: string;
  scale: number;
};

export type Door = { x: number; y: number; radius: number };

export type Engine = {
  player: Player;
  enemies: Enemy[];
  allies: Ally[];
  projectiles: Projectile[];
  enemyShots: EnemyShot[];
  particles: Particle[];
  walls: Wall[];
  camera: { x: number; y: number };
  mouse: { x: number; y: number };
  keys: Record<string, boolean>;
  stick: { x: number; y: number };
  viewW: number;
  viewH: number;
  time: number;
  nextId: number;
  henchmenSpawned: number;
  bossSpawned: boolean;
  boss: Enemy | null;
  door: Door | null;
  lastSpawnTime: number;
  stats: GameStats;
  eggTriggered: boolean;
  godMode: boolean;
  paused: boolean;
  ended: boolean;
  lastSpeed: number;
  mapW: number;
  mapH: number;
  reedsPending: number;
};

export function blankStats(): GameStats {
  return { goonsKilled: 0, thugsKilled: 0, soundproofersKilled: 0, bossesDefeated: 0 };
}

export function makePlayer(character: CharacterDef, maxHp: number): Player {
  const base = 5 * character.stats.speedMultiplier;
  return {
    x: MAP_WIDTH / 2,
    y: MAP_HEIGHT / 2,
    radius: 25,
    hp: maxHp,
    maxHp,
    breath: 100,
    maxBreath: 100,
    baseSpeed: base,
    speed: base,
    speedBuffMul: 1,
    speedBuffUntil: 0,
    invincibleUntil: 0,
    isRooted: false,
    lastHit: -9999,
    angle: -Math.PI / 2,
    isWalking: false,
    isPlaying: false,
    playTimer: 0,
    lastNoteTime: -9999,
    lastMeleeTime: -9999,
    noteHistory: [],
    z: 0,
    vz: 0,
    breathRegenPause: 0,
  };
}

export function createEngine(level: LevelDef, character: CharacterDef, maxHp: number): Engine {
  const player = makePlayer(character, maxHp);
  if (level.id === "m_eason_1") player.y = MAP_HEIGHT - 220;
  const engine: Engine = {
    player,
    enemies: [],
    allies: [],
    projectiles: [],
    enemyShots: [],
    particles: [],
    walls: getMapWalls(level.id),
    camera: { x: player.x, y: player.y },
    mouse: { x: 0, y: 0 },
    keys: {},
    stick: { x: 0, y: 0 },
    viewW: 900,
    viewH: 520,
    time: 0,
    nextId: 1,
    henchmenSpawned: 0,
    bossSpawned: false,
    boss: null,
    door: null,
    lastSpawnTime: -9999,
    stats: blankStats(),
    eggTriggered: false,
    godMode: false,
    paused: false,
    ended: false,
    lastSpeed: 0,
    mapW: MAP_WIDTH,
    mapH: MAP_HEIGHT,
    reedsPending: 0,
  };
  if (level.bossSpawnsImmediately) spawnBoss(engine, level);
  if (level.isDLC) {
    for (let i = 0; i < 3; i++) {
      const spot = findOpenSpot(player.x + (i - 1) * 80, player.y + 70, 20, engine.walls, MAP_WIDTH, MAP_HEIGHT);
      engine.allies.push({ id: engine.nextId++, x: spot.x, y: spot.y, hp: 500, maxHp: 500, speed: 4, radius: 20, attackTimer: 0, angle: -Math.PI / 2 });
    }
  }
  return engine;
}

export function spawnBoss(engine: Engine, level: LevelDef) {
  if (engine.bossSpawned) return;
  engine.bossSpawned = true;
  const spot = findOpenSpot(MAP_WIDTH / 2, level.bossBehavior === "speech" ? 320 : MAP_HEIGHT / 2 - 300, 40, engine.walls, MAP_WIDTH, MAP_HEIGHT);
  const boss: Enemy = {
    id: engine.nextId++,
    typeId: "boss",
    name: level.teacher,
    x: spot.x,
    y: spot.y,
    hp: level.hp,
    maxHp: level.hp,
    speed: level.speed || 1.5,
    originalSpeed: level.speed || 1.5,
    damage: level.damage,
    radius: 40,
    isBoss: true,
    attackTimer: 0,
    timer: 0,
    chargeAngle: 0,
    hitFlash: 0,
    frozenUntil: 0,
    behavior: level.bossBehavior,
    angle: Math.PI / 2,
  };
  engine.enemies.push(boss);
  engine.boss = boss;
}

export function spawnHench(engine: Engine, typeId: string, x: number, y: number) {
  const type = henchTemplate(typeId);
  const spot = findOpenSpot(x, y, type.radius, engine.walls, engine.mapW, engine.mapH);
  const enemy: Enemy = {
    id: engine.nextId++,
    typeId: type.typeId,
    x: spot.x,
    y: spot.y,
    hp: type.hp,
    maxHp: type.hp,
    speed: type.speed,
    originalSpeed: type.speed,
    damage: type.damage,
    radius: type.radius,
    isBrainrot: "isBrainrot" in type ? Boolean(type.isBrainrot) : false,
    attackTimer: 0,
    timer: typeId === "quarterback" || typeId === "kicker" ? 2 : 1,
    chargeAngle: 0,
    hitFlash: 0,
    frozenUntil: 0,
    chargeState: typeId === "linebacker" || typeId === "striker" ? "idle" : undefined,
    angle: -Math.PI / 2,
  };
  engine.enemies.push(enemy);
  return enemy;
}

export function pushParticle(engine: Engine, p: Omit<Particle, "id">) {
  engine.particles.push({ ...p, id: engine.nextId++ });
  if (engine.particles.length > 70) engine.particles.splice(0, engine.particles.length - 70);
}

export function held(source: { keys: Record<string, boolean> }, ...codes: string[]) {
  return codes.some((c) => source.keys[c]);
}
