import type { Wall } from "./types";

export const TOWN_W = 2000;
export const TOWN_H = 1500;
export const SPAWN = { x: 1000, y: 760 };

export type PortalKind = "menu" | "shop" | "blackmarket" | "training" | "missions" | "levelSelect" | "arcade";

export type Portal = {
  id: string;
  title: string;
  subtitle: string;
  x: number;
  y: number;
  kind: PortalKind;
  hex: string;
};

export const PORTALS: Portal[] = [
  { id: "class", title: "Class Hall", subtitle: "Pick a detention", x: 1000, y: 200, kind: "levelSelect", hex: "#22d3ee" },
  { id: "store", title: "Music Store", subtitle: "Instruments and upgrades", x: 300, y: 560, kind: "shop", hex: "#34d399" },
  { id: "market", title: "Black Market", subtitle: "Rare gear", x: 1700, y: 560, kind: "blackmarket", hex: "#f472b6" },
  { id: "train", title: "Training Camp", subtitle: "Upgrade your hero", x: 300, y: 1040, kind: "training", hex: "#fbbf24" },
  { id: "missions", title: "Mission Board", subtitle: "Jobs and quests", x: 1700, y: 1040, kind: "missions", hex: "#fb923c" },
  { id: "arcade", title: "Band Arcade", subtitle: "Minigames", x: 1000, y: 980, kind: "arcade", hex: "#a78bfa" },
  { id: "exit", title: "Town Gate", subtitle: "Back to the menu", x: 1000, y: 1320, kind: "menu", hex: "#94a3b8" },
];

export const NPCS = [
  { id: "registrar", name: "Registrar", x: 1000, y: 400, hex: "#67e8f9", line: "Class Hall is the cyan pad north of me. Step on it and you'll teleport to the schedule." },
  { id: "shop", name: "Melody", x: 480, y: 420, hex: "#f472b6", line: "The green pad is the Music Store. Walk onto the ring — don't stop short of it." },
  { id: "dealer", name: "Kai", x: 1520, y: 420, hex: "#fbbf24", line: "Black Market pad is the pink ring. Rare instruments live through that teleport." },
  { id: "coach", name: "Coach", x: 480, y: 1220, hex: "#fdba74", line: "Training Camp is the gold ring. It spends reeds on your hero, not just the horn." },
  { id: "board", name: "Kashu", x: 1520, y: 1220, hex: "#facc15", line: "Mission Board is the orange pad. Quests only count after you finish a class or a job." },
  { id: "guard", name: "Janitor Joe", x: 1000, y: 1120, hex: "#86efac", line: "Town Gate is the big grey ring south. The purple ring above me is the Band Arcade." },
];

export function townWalls(): Wall[] {
  const buildings: Wall[] = [
    { id: "nw", x: 80, y: 80, w: 620, h: 280, hp: 9999, maxHp: 9999 },
    { id: "ne", x: 1300, y: 80, w: 620, h: 280, hp: 9999, maxHp: 9999 },
    { id: "sw", x: 80, y: 1220, w: 620, h: 200, hp: 9999, maxHp: 9999 },
    { id: "se", x: 1300, y: 1220, w: 620, h: 200, hp: 9999, maxHp: 9999 },
  ];
  const borders: Wall[] = [
    { id: "tb", x: 0, y: 0, w: TOWN_W, h: 36, hp: 1, maxHp: 1, isBorder: true },
    { id: "bb", x: 0, y: TOWN_H - 36, w: TOWN_W, h: 36, hp: 1, maxHp: 1, isBorder: true },
    { id: "lb", x: 0, y: 0, w: 36, h: TOWN_H, hp: 1, maxHp: 1, isBorder: true },
    { id: "rb", x: TOWN_W - 36, y: 0, w: 36, h: TOWN_H, hp: 1, maxHp: 1, isBorder: true },
  ];
  return [...borders, ...buildings];
}

/** How close the player must be for a pad to fire. Larger than the painted ring so it can't be missed. */
export const PORTAL_TRIGGER = 78;
export const PORTAL_ENTER_KEY = 150;
