import { blankUpgrade } from "./data";
import type { SaveData, Upgrade } from "./types";

const KEY = "symphonic-detention-v1";

function isFresh(save: SaveData): boolean {
  return (
    save.reeds === 0 &&
    save.maxLevelUnlocked <= 1 &&
    !save.cheatsEnabled &&
    save.claimedQuests.length === 0 &&
    save.gameStats.goonsKilled === 0 &&
    save.gameStats.thugsKilled === 0 &&
    save.gameStats.soundproofersKilled === 0 &&
    save.gameStats.bossesDefeated === 0 &&
    save.unlockedInstruments.every((id) => id === "kazoo" || id === "toot" || id === "dood") &&
    save.unlockedInstruments.length <= 3 &&
    save.unlockedCharacters.every((id) => id === "rocky" || id === "melody" || id === "harmony" || id === "rhythm") &&
    save.unlockedCharacters.length <= 4 &&
    Object.values(save.charUpgrades).every((u) => u.hp + u.dmg + u.breath === 0) &&
    Object.values(save.upgrades).every((u) => u.damageLvl + u.breathLvl + u.hitsLvl + (u.speedLvl || 0) === 0)
  );
}

const STARTERS = ["kazoo", "dood", "toot"];

export function defaultSave(): SaveData {
  return {
    reeds: 0,
    unlockedInstruments: [...STARTERS],
    unlockedCharacters: ["rocky"],
    maxLevelUnlocked: 1,
    activeCharId: "rocky",
    gameStats: { goonsKilled: 0, thugsKilled: 0, soundproofersKilled: 0, bossesDefeated: 0 },
    claimedQuests: [],
    upgrades: { kazoo: blankUpgrade(), dood: blankUpgrade(), toot: blankUpgrade() },
    charUpgrades: {},
    cheatsEnabled: false,
    loadout: [...STARTERS],
    arcade: {},
    horrorMode: false,
  };
}

function packUpgrades(raw: Record<string, Partial<Upgrade>>): SaveData["upgrades"] {
  const out: SaveData["upgrades"] = {};
  for (const [id, upg] of Object.entries(raw)) {
    out[id] = {
      damageLvl: upg.damageLvl ?? 0,
      breathLvl: upg.breathLvl ?? 0,
      hitsLvl: upg.hitsLvl ?? 0,
      speedLvl: upg.speedLvl ?? 0,
    };
  }
  return out;
}

function withStarters(unlocked: string[]): string[] {
  const next = [...unlocked];
  for (const id of STARTERS) if (!next.includes(id)) next.push(id);
  return next;
}

function packLoadout(raw: unknown, unlocked: string[]): string[] {
  const picked = Array.isArray(raw) ? raw.filter((id): id is string => typeof id === "string" && id !== "egg" && unlocked.includes(id)) : [];
  const unique = [...new Set(picked)].slice(0, 4);
  if (unique.length) return unique;
  return unlocked.filter((id) => id !== "egg").slice(0, 4);
}

export function loadSave(): SaveData {
  if (typeof window === "undefined") return defaultSave();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultSave();
    const parsed = JSON.parse(raw) as Partial<SaveData>;
    const base = defaultSave();
    const unlockedInstruments = withStarters(Array.isArray(parsed.unlockedInstruments) ? parsed.unlockedInstruments : base.unlockedInstruments);
    const oldLoadout = Array.isArray(parsed.loadout) ? parsed.loadout.filter((id): id is string => typeof id === "string") : [];
    const untouched = oldLoadout.length === 0 || (oldLoadout.length === 1 && oldLoadout[0] === "kazoo");
    return {
      ...base,
      ...parsed,
      gameStats: { ...base.gameStats, ...(parsed.gameStats ?? {}) },
      upgrades: packUpgrades({ ...base.upgrades, ...(parsed.upgrades ?? {}) }),
      charUpgrades: parsed.charUpgrades ?? {},
      unlockedInstruments,
      unlockedCharacters: Array.isArray(parsed.unlockedCharacters) ? parsed.unlockedCharacters : base.unlockedCharacters,
      claimedQuests: Array.isArray(parsed.claimedQuests) ? parsed.claimedQuests : [],
      loadout: untouched ? [...STARTERS] : packLoadout(parsed.loadout, unlockedInstruments),
      arcade: parsed.arcade && typeof parsed.arcade === "object" ? parsed.arcade : {},
      horrorMode: Boolean(parsed.horrorMode),
    };
  } catch {
    return defaultSave();
  }
}

export function writeSave(save: SaveData) {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw && isFresh(save)) {
      const existing = JSON.parse(raw) as Partial<SaveData>;
      const progressed =
        (existing.reeds ?? 0) > 0 ||
        (existing.maxLevelUnlocked ?? 1) > 1 ||
        (existing.claimedQuests?.length ?? 0) > 0 ||
        (existing.unlockedInstruments?.length ?? 0) > 3 ||
        (existing.unlockedCharacters?.length ?? 0) > 4 ||
        (existing.gameStats?.bossesDefeated ?? 0) > 0 ||
        (existing.gameStats?.goonsKilled ?? 0) > 0;
      if (progressed) return;
    }
    localStorage.setItem(KEY, JSON.stringify(save));
  } catch {
    /* private mode / full storage — play continues for this visit */
  }
}
