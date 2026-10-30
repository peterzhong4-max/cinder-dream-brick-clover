export type CharStats = {
  hpMultiplier: number;
  breathRegen: number;
  damageMultiplier: number;
  speedMultiplier: number;
};

export type CharacterDef = {
  id: string;
  name: string;
  lore: string;
  stats: CharStats;
  color: string;
  hex: string;
  cost: number;
  secret: { name: string; desc: string; cost: number; duration: number };
};

export type InstrumentDef = {
  name: string;
  family: string;
  baseDamage: number;
  breathCost: number;
  color: string;
  hex: string;
  scale: number;
  projSpeed: number;
  hits: number;
  cost: number | "Quest";
  knockback?: number;
  moveSpeedMod?: number;
  req?: string;
  aoe?: number;
  rootPlayer?: boolean;
  burst?: number;
  spread?: number;
  passWalls?: boolean;
  shape?: string;
  pierce?: number;
  cooldown?: number;
};

export type LevelDef = {
  id: number | string;
  teacher: string;
  subject: string;
  hp: number;
  damage: number;
  henchmenCount: number;
  reward: number;
  speed: number;
  glassesType: string;
  shirtColor: string;
  isDLC?: boolean;
  bossSpawnsImmediately?: boolean;
  bossBehavior?: string;
  customHenchmen?: string[];
};

export type Wall = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  hp: number;
  maxHp: number;
  isBorder?: boolean;
};

export type Upgrade = { damageLvl: number; breathLvl: number; hitsLvl: number; speedLvl: number };
export type CharUpgrade = { hp: number; dmg: number; breath: number };

export type GameStats = {
  goonsKilled: number;
  thugsKilled: number;
  soundproofersKilled: number;
  bossesDefeated: number;
};

export type NoteDef = { name: string; freq: number; key: string; isBlack: boolean };

export type SaveData = {
  reeds: number;
  unlockedInstruments: string[];
  unlockedCharacters: string[];
  maxLevelUnlocked: number;
  activeCharId: string;
  gameStats: GameStats;
  claimedQuests: string[];
  upgrades: Record<string, Upgrade>;
  charUpgrades: Record<string, CharUpgrade>;
  cheatsEnabled: boolean;
  loadout: string[];
  arcade: Record<string, { day: string; earned: number }>;
  horrorMode: boolean;
};

export type QuestDef = {
  id: string;
  giver: string;
  title: string;
  desc: string;
  target: number;
  metric: keyof GameStats;
  rewardType: "reeds" | "instrument";
  rewardAmount?: number;
  rewardId?: string;
  rewardText: string;
};

export type MissionDef = {
  id: string;
  giver: string;
  title: string;
  desc: string;
  rewardText: string;
  levelData: LevelDef;
};
