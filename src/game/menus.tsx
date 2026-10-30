import { useEffect, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CircleHelp,
  ClipboardList,
  KeyRound,
  Map,
  Music,
  Play,
  Gamepad2,
  Store,
  Wind,
} from "lucide-react";
import {
  BLACK_MARKET_IDS,
  CHARACTERS,
  COMBOS,
  DLC_LEVELS,
  INSTRUMENTS,
  MISSIONS,
  NOTES,
  QUESTS,
  STANDARD_LEVELS,
  breathCost,
  characterById,
  comboLabel,
  dmgCost,
  hitsCost,
  speedCost,
  gearGrade,
  trainCost,
} from "./data";
import { RenderShape, CustomPlayerSVG } from "./sprites";
import type { CharacterDef, LevelDef, QuestDef, SaveData } from "./types";

const HORN: Record<string, string> = {
  rocky: "kazoo",
  melody: "flute",
  harmony: "clarinet",
  rhythm: "trumpet",
  treble: "piccolo",
  bass: "tuba",
  keli: "trombone",
  kai: "euphonium",
  kashu: "altoSax",
  eason: "flute",
  thomas: "trumpet",
  javis: "clarinet",
  alton: "trombone",
  socialist_rocky: "trumpet",
  harry: "frenchHorn",
  tacops: "desertEagle",
  quinn: "mellophone",
  nora: "snare",
  piper: "piccolo",
  milo: "marimba",
  sage: "frenchHorn",
  luna: "glockenspiel",
  otto: "oboe",
  riley: "sousaphone",
  coco: "bassDrum",
  bea: "bassoon",
  nova: "synth",
};

function Portrait({ character }: { character: CharacterDef }) {
  return (
    <div className="h-16 w-14 shrink-0 overflow-hidden rounded-2xl border border-slate-600 bg-slate-950">
      <CustomPlayerSVG character={character} instrumentId={HORN[character.id] ?? "toot"} isPlaying={false} isWalking={false} view="card" />
    </div>
  );
}

export type View =
  | "menu"
  | "tutorial"
  | "lore"
  | "chars"
  | "shop"
  | "missions"
  | "levelSelect"
  | "gear"
  | "game"
  | "town"
  | "arcade"
  | "secret"
  | "win"
  | "lose";

export type ShopTab = "instruments" | "upgrades" | "characters" | "training";
export type BuyKind = "instrument" | "character" | "upgradeDmg" | "upgradeBrth" | "upgradeHits" | "upgradeSpeed" | "charHp" | "charDmg" | "charBreath";

function PriceButton({ ok, cost, onClick }: { ok: boolean; cost: number; onClick: () => void }) {
  return (
    <button
      type="button"
      disabled={!ok}
      onClick={onClick}
      className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-extrabold ${ok ? "bg-emerald-500 text-slate-950" : "bg-slate-700 text-slate-500"}`}
    >
      <Wind size={14} /> {cost}
    </button>
  );
}

export function MainMenu({ onNavigate, horror, onToggleHorror }: { onNavigate: (v: View) => void; horror: boolean; onToggleHorror: () => void }) {
  const items: { v: View; label: string; icon: typeof Play; className: string }[] = [
    { v: "chars", label: "Start Detention", icon: Play, className: "bg-cyan-500 text-slate-950" },
    { v: "town", label: "Visit Town", icon: Map, className: "bg-emerald-500 text-slate-950" },
    { v: "levelSelect", label: "Class Schedule", icon: BookOpen, className: "bg-slate-800 text-cyan-200" },
    { v: "shop", label: "Music Store", icon: Store, className: "bg-amber-400 text-slate-950" },
    { v: "missions", label: "Mission Board", icon: ClipboardList, className: "bg-slate-800 text-amber-200" },
    { v: "arcade", label: "Band Arcade", icon: Gamepad2, className: "bg-violet-400 text-slate-950" },
    { v: "tutorial", label: "How to Play", icon: CircleHelp, className: "bg-slate-800 text-slate-100" },
  ];
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-2 py-6">
      <p className="font-display text-center text-4xl text-slate-50 sm:text-6xl">{horror ? "Spooky Detention" : "Battle of the Band"}</p>
      <p className="mt-3 max-w-md text-center text-slate-400">
        {horror ? "The lights are out. Same classes, darker halls, cartoon shadows." : "Detention is a battlefield. Play notes, dodge teachers, and use the town teleports."}
      </p>
      <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <button key={item.v} type="button" onClick={() => onNavigate(item.v)} className={`flex items-center justify-center gap-2 rounded-2xl px-4 py-4 text-base font-extrabold ${item.className}`}>
            <item.icon size={22} /> {item.label}
          </button>
        ))}
      </div>
      <button type="button" onClick={onToggleHorror} className={`mt-4 rounded-full px-5 py-2 text-sm font-extrabold ${horror ? "bg-fuchsia-500 text-slate-950" : "bg-slate-800 text-fuchsia-200"}`}>
        {horror ? "Horror mode on" : "Horror mode"}
      </button>
      <button type="button" onClick={() => onNavigate("lore")} className="mt-3 text-sm font-bold text-cyan-300">
        Band lore and combos
      </button>
      <button type="button" onClick={() => onNavigate("secret")} className="mt-6 text-xs tracking-widest text-slate-500 uppercase">
        Secret access code
      </button>
    </div>
  );
}

export function Tutorial({ onBack }: { onBack: () => void }) {
  return (
    <div className="mx-auto max-w-2xl space-y-4 py-4">
      <h2 className="font-display text-4xl text-cyan-300">How to Play</h2>
      <div className="space-y-3 rounded-2xl border border-slate-600 bg-slate-800 p-5 text-slate-300">
        <p><span className="font-extrabold text-slate-50">Move.</span> WASD or arrows. The on-screen pad works too. Shift sprints and spends breath. Space jumps. A moves left, D moves right. Your horn points the way you face.</p>
        <p><span className="font-extrabold text-slate-50">Pack your case.</span> Before detention you pick up to four instruments. Slot 1 is the one in your hands. During class, tap a horn or press 1-4 to switch.</p>
        <p><span className="font-extrabold text-slate-50">Play.</span> The T-row piano shoots homing notes. Match your hero's 3-note combo from the lore page. Q, or Power, spends breath on a secret.</p>
        <p><span className="font-extrabold text-slate-50">Town teleports.</span> Walk into the middle of a glowing ring. You can also tap the ring, or press Enter when the banner says Ready. The grey ring is the way back to the menu.</p>
        <p><span className="font-extrabold text-slate-50">Arcade.</span> Eight rooms: memory, rhythm, notes, sorting, balance, count-ins, hall dodge, and bar holds.</p>
        <p><span className="font-extrabold text-slate-50">Horror mode.</span> Teachers turn into cloaked monsters, and the other students become cartoon bats, ghosts, mummies, wolves, skulls, pumpkins, imps, and slimes.</p>
        <p><span className="font-extrabold text-slate-50">Reeds.</span> Defeat enemies, then spend them in the store, the black market, or training camp.</p>
      </div>
      <button type="button" onClick={onBack} className="rounded-full bg-cyan-400 px-6 py-3 font-extrabold text-slate-950">Back to menu</button>
    </div>
  );
}

export function LoreView({ save }: { save: SaveData }) {
  return (
    <div className="mx-auto max-w-3xl space-y-4 py-2">
      <h2 className="font-display text-center text-4xl text-cyan-300">Band Lore</h2>
      <div className="grid gap-3">
        {CHARACTERS.filter((c) => save.unlockedCharacters.includes(c.id)).map((c) => (
          <article key={c.id} className="flex gap-3 rounded-2xl border border-slate-600 bg-slate-800 p-4">
            <Portrait character={c} />
            <div>
            <h3 className={`text-lg font-extrabold ${c.color}`}>{c.name}</h3>
            <p className="text-sm text-slate-400">{c.lore}</p>
            <p className="mt-2 text-sm text-slate-200">Secret (Q): {c.secret.name} — {c.secret.desc} Costs {c.secret.cost} breath.</p>
            <p className="text-sm text-amber-200">{comboLabel(c.id)}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function CharSelect({ save, onSelect, onSchedule }: { save: SaveData; onSelect: (id: string) => void; onSchedule: () => void }) {
  const active = characterById(save.activeCharId);
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-4 py-2">
      <h2 className="font-display text-center text-4xl text-cyan-300">Pick Your Player</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CHARACTERS.map((c) => {
          const owned = save.unlockedCharacters.includes(c.id);
          const on = save.activeCharId === c.id;
          return (
            <button
              key={c.id}
              type="button"
              disabled={!owned}
              onClick={() => onSelect(c.id)}
              className={`flex items-center gap-3 rounded-2xl border p-3 text-left ${on ? "border-cyan-300 bg-slate-700" : "border-slate-600 bg-slate-800"} ${owned ? "" : "opacity-50"}`}
            >
              <Portrait character={c} />
              <span>
              <p className={`font-extrabold ${c.color}`}>{c.name}</p>
              <p className="text-sm text-slate-400">{owned ? c.lore : `Locked · ${c.cost} reeds in the store`}</p>
              <p className="mt-1 text-xs text-slate-300">HP {c.stats.hpMultiplier}x · Speed {c.stats.speedMultiplier}x · Damage {c.stats.damageMultiplier}x</p>
              </span>
            </button>
          );
        })}
      </div>
      <div className="rounded-2xl border border-slate-600 bg-slate-900 p-4 text-sm text-slate-300">
        <p className="font-extrabold text-slate-50">Selected: {active.name}</p>
        <p>{comboLabel(active.id)}</p>
        {COMBOS[active.id] && <p className="text-slate-400">Notes: {COMBOS[active.id]!.seq.map((n) => `${n} (${NOTES.find((note) => note.name === n)?.key.toUpperCase()})`).join(", ")}</p>}
      </div>
      <button type="button" onClick={onSchedule} className="mx-auto rounded-full bg-cyan-400 px-8 py-3 font-extrabold text-slate-950">
        Take {active.name.split(" ")[0]} to class
      </button>
    </div>
  );
}

export function LevelSelect({ save, onStart }: { save: SaveData; onStart: (level: LevelDef) => void }) {
  return (
    <div className="mx-auto max-w-4xl space-y-6 py-2">
      <h2 className="font-display text-center text-4xl text-cyan-300">Class Schedule</h2>
      <LevelGrid title="Regular classes" levels={STANDARD_LEVELS} max={save.maxLevelUnlocked} onStart={onStart} />
      <LevelGrid title="DLC — overtime detention" levels={DLC_LEVELS} max={save.maxLevelUnlocked} onStart={onStart} />
    </div>
  );
}

export function GearView({
  save,
  level,
  onBack,
  onStart,
}: {
  save: SaveData;
  level: LevelDef;
  onBack: () => void;
  onStart: (loadout: string[]) => void;
}) {
  const owned = save.unlockedInstruments.filter((id) => id !== "egg" && INSTRUMENTS[id]);
  const starter = (save.loadout ?? []).filter((id) => owned.includes(id));
  const [picked, setPicked] = useState<string[]>(starter.length ? starter.slice(0, 4) : owned.slice(0, 4));
  const toggle = (id: string) => {
    setPicked((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 4) return prev;
      return [...prev, id];
    });
  };
  return (
    <div className="mx-auto max-w-3xl space-y-4 py-2">
      <h2 className="font-display text-center text-4xl text-cyan-300">Pack your case</h2>
      <p className="text-center text-slate-300">
        {level.subject} with {level.teacher}. Pick up to four horns. Slot 1 is what you start holding. Tap again to remove one.
      </p>
      {level.id === "m_eason_1" && <p className="text-center text-sm font-bold text-amber-200">This job also puts an egg in your case.</p>}
      <div className="flex flex-wrap justify-center gap-2">
        {picked.map((id, i) => (
          <button key={id} type="button" onClick={() => toggle(id)} className="rounded-2xl border border-cyan-300 bg-slate-800 px-3 py-2 text-left">
            <p className="text-[10px] font-bold text-cyan-200">Slot {i + 1}</p>
            <p className="font-extrabold text-slate-50">{INSTRUMENTS[id]?.name}</p>
          </button>
        ))}
        {picked.length === 0 && <p className="text-sm text-rose-300">Pick at least one instrument.</p>}
      </div>
      <div className="grid max-h-[26rem] grid-cols-2 gap-2 overflow-y-auto sm:grid-cols-3">
        {owned.map((id) => {
          const inst = INSTRUMENTS[id]!;
          const slot = picked.indexOf(id);
          return (
            <button
              key={id}
              type="button"
              onClick={() => toggle(id)}
              className={`flex items-center gap-2 rounded-2xl border p-2 text-left ${slot >= 0 ? "border-cyan-300 bg-slate-700" : "border-slate-600 bg-slate-800"}`}
            >
              <div className={`h-10 w-10 shrink-0 rounded-full ${inst.color}`}>
                <RenderShape shape={inst.family === "gun" ? "gun" : inst.family} hex={inst.hex} />
              </div>
              <span>
                <p className="text-sm font-extrabold text-slate-50">{inst.name}</p>
                <p className="text-[11px] text-slate-400">{slot >= 0 ? `In slot ${slot + 1}` : "Tap to pack"}</p>
              </span>
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <button type="button" onClick={onBack} className="rounded-full bg-slate-700 px-5 py-3 font-extrabold text-slate-100">Back</button>
        <button
          type="button"
          disabled={picked.length === 0}
          onClick={() => onStart(picked)}
          className="rounded-full bg-cyan-400 px-6 py-3 font-extrabold text-slate-950 disabled:opacity-40"
        >
          Start detention
        </button>
      </div>
    </div>
  );
}

function LevelGrid({ title, levels, max, onStart }: { title: string; levels: LevelDef[]; max: number; onStart: (level: LevelDef) => void }) {
  return (
    <section>
      <h3 className="mb-2 font-extrabold text-slate-200">{title}</h3>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
        {levels.map((level) => {
          const id = Number(level.id);
          const open = id <= max;
          return (
            <button
              key={level.id}
              type="button"
              disabled={!open}
              onClick={() => onStart(level)}
              className={`h-12 rounded-xl text-sm font-extrabold ${open ? "bg-slate-700 text-cyan-100" : "bg-slate-900 text-slate-600"} ${id === max ? "ring-2 ring-amber-300" : ""}`}
            >
              {id}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export function MissionsView({
  save,
  onStart,
  onClaim,
}: {
  save: SaveData;
  onStart: (level: LevelDef) => void;
  onClaim: (quest: QuestDef) => void;
}) {
  const [tab, setTab] = useState<"missions" | "quests">("missions");
  return (
    <div className="mx-auto max-w-4xl space-y-4 py-2">
      <h2 className="font-display text-center text-4xl text-amber-300">Mission Board</h2>
      <div className="flex justify-center gap-2">
        <button type="button" onClick={() => setTab("missions")} className={`rounded-full px-4 py-2 font-extrabold ${tab === "missions" ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-slate-300"}`}>Missions</button>
        <button type="button" onClick={() => setTab("quests")} className={`rounded-full px-4 py-2 font-extrabold ${tab === "quests" ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-slate-300"}`}>Quests</button>
      </div>
      {tab === "missions" && (
        <div className="grid max-h-[34rem] gap-3 overflow-y-auto pr-1 sm:grid-cols-2">
          {MISSIONS.map((m) => (
            <article key={m.id} className="flex flex-col rounded-2xl border border-slate-600 bg-slate-800 p-4">
              <p className="text-[10px] font-bold tracking-wider text-amber-300">CLIENT: {m.giver}</p>
              <h3 className="text-lg font-extrabold text-slate-50">{m.title}</h3>
              <p className="flex-1 text-sm text-slate-400">{m.desc}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-bold text-amber-200">{m.rewardText}</span>
                <button type="button" onClick={() => onStart(m.levelData)} className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-extrabold text-slate-950">Start</button>
              </div>
            </article>
          ))}
        </div>
      )}
      {tab === "quests" && (
        <div className="grid gap-3 sm:grid-cols-2">
          {QUESTS.map((q) => {
            const progress = Math.min(save.gameStats[q.metric] || 0, q.target);
            const done = progress >= q.target;
            const claimed = save.claimedQuests.includes(q.id);
            return (
              <article key={q.id} className="rounded-2xl border border-slate-600 bg-slate-800 p-4">
                <p className="text-[10px] font-bold text-amber-300">CLIENT: {q.giver}</p>
                <h3 className="font-extrabold text-slate-50">{q.title}</h3>
                <p className="text-sm text-slate-400">{q.desc}</p>
                <p className="mt-2 text-sm text-slate-200">{progress} / {q.target}</p>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-900">
                  <div className={`h-full ${done ? "bg-emerald-400" : "bg-slate-500"}`} style={{ width: `${(progress / q.target) * 100}%` }} />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-amber-200">{q.rewardText}</span>
                  {claimed ? <span className="text-sm font-bold text-emerald-300">Claimed</span> : done ? (
                    <button type="button" onClick={() => onClaim(q)} className="rounded-full bg-amber-400 px-3 py-2 text-sm font-extrabold text-slate-950">Claim</button>
                  ) : <span className="text-sm text-slate-500">In progress</span>}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function ShopView({
  save,
  blackMarket,
  tab,
  onTab,
  onBuy,
}: {
  save: SaveData;
  blackMarket: boolean;
  tab: ShopTab;
  onTab: (tab: ShopTab) => void;
  onBuy: (kind: BuyKind, id: string, cost: number) => void;
}) {
  const active = characterById(save.activeCharId);
  const tabs: ShopTab[] = ["instruments", "upgrades", "characters", "training"];
  return (
    <div className="mx-auto max-w-4xl space-y-4 py-2">
      <h2 className="font-display text-center text-4xl text-emerald-300">{blackMarket ? "Black Market" : "Music Store"}</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button key={t} type="button" onClick={() => onTab(t)} className={`rounded-full px-4 py-2 text-sm font-extrabold capitalize ${tab === t ? "bg-emerald-400 text-slate-950" : "bg-slate-800 text-slate-300"}`}>{t}</button>
        ))}
      </div>
      {tab === "instruments" && (
        <>
        <p className="text-center text-sm text-slate-400">Kazoo, dood, and toot are Weak. A kazoo drops a hall monitor in two notes. Strong horns still take a lot of classes.</p>
        <div className="grid max-h-[28rem] gap-2 overflow-y-auto pr-1">
          {Object.entries(INSTRUMENTS)
            .filter(([id, inst]) => id !== "egg" && inst.cost !== "Quest" && (inst.cost !== 0 || id === "kazoo"))
            .sort((a, b) => Number(a[1].cost) - Number(b[1].cost))
            .map(([id, inst]) => {
            const rare = BLACK_MARKET_IDS.includes(id);
            if (blackMarket !== rare) return null;
            const owned = save.unlockedInstruments.includes(id);
            const reqMet = !inst.req || save.unlockedInstruments.includes(inst.req);
            const cost = typeof inst.cost === "number" ? inst.cost : 0;
            return (
              <div key={id} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-600 bg-slate-800 p-3">
                <div className="flex items-center gap-3">
                  <div className={`h-12 w-12 rounded-full ${inst.color}`}>
                    <RenderShape shape={inst.family === "gun" ? "gun" : inst.family} hex={inst.hex} />
                  </div>
                  <div>
                    <p className="font-extrabold">{inst.name} <span className="text-xs font-bold text-amber-200">{gearGrade(inst.cost, id)}</span></p>
                    <p className="text-xs text-slate-400">{inst.baseDamage} dmg · {inst.breathCost} breath · {inst.hits} hits</p>
                    {!reqMet && inst.req && <p className="text-xs text-rose-300">Requires {INSTRUMENTS[inst.req]?.name}</p>}
                  </div>
                </div>
                {owned ? <span className="text-sm font-bold text-emerald-300">Owned</span> : (
                  <PriceButton ok={save.reeds >= cost && reqMet} cost={cost} onClick={() => onBuy("instrument", id, cost)} />
                )}
              </div>
            );
          })}
        </div>
        </>
      )}
      {tab === "upgrades" && (
        <div className="grid max-h-[28rem] gap-3 overflow-y-auto sm:grid-cols-2">
          {save.unlockedInstruments.filter((id) => id !== "egg").map((id) => {
            const inst = INSTRUMENTS[id];
            if (!inst) return null;
            const upg = save.upgrades[id] ?? { damageLvl: 0, breathLvl: 0, hitsLvl: 0, speedLvl: 0 };
            const rows = [
              { kind: "upgradeDmg" as const, label: "Damage", lvl: upg.damageLvl, cost: dmgCost(upg.damageLvl) },
              ...(inst.family === "gun" ? [] : [{ kind: "upgradeBrth" as const, label: "Breath", lvl: upg.breathLvl, cost: breathCost(upg.breathLvl) }]),
              { kind: "upgradeHits" as const, label: "Hits", lvl: upg.hitsLvl, cost: hitsCost(upg.hitsLvl) },
              { kind: "upgradeSpeed" as const, label: "Note speed", lvl: upg.speedLvl || 0, cost: speedCost(upg.speedLvl || 0) },
            ];
            return (
              <article key={id} className="rounded-2xl border border-slate-600 bg-slate-800 p-3">
                <p className="mb-2 font-extrabold">{inst.name}</p>
                {rows.map((row) => (
                  <div key={row.kind} className="mb-2 flex items-center justify-between rounded-xl bg-slate-900 px-3 py-2">
                    <span className="text-sm">{row.label} {row.lvl}</span>
                    <PriceButton ok={save.reeds >= row.cost} cost={row.cost} onClick={() => onBuy(row.kind, id, row.cost)} />
                  </div>
                ))}
              </article>
            );
          })}
        </div>
      )}
      {tab === "characters" && (
        <div className="grid max-h-[28rem] gap-2 overflow-y-auto">
          {CHARACTERS.map((c) => {
            if (c.cost === 0) return null;
            const rare = BLACK_MARKET_IDS.includes(c.id);
            if (blackMarket !== rare) return null;
            const owned = save.unlockedCharacters.includes(c.id);
            return (
              <div key={c.id} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-600 bg-slate-800 p-3">
                <div className="flex items-center gap-3">
                  <Portrait character={c} />
                  <div>
                    <p className={`font-extrabold ${c.color}`}>{c.name}</p>
                    <p className="text-xs text-slate-400">{c.lore}</p>
                    <p className="text-xs text-slate-300">HP {c.stats.hpMultiplier}x · Speed {c.stats.speedMultiplier}x · Damage {c.stats.damageMultiplier}x</p>
                  </div>
                </div>
                {owned ? <span className="text-sm font-bold text-emerald-300">Owned</span> : (
                  <PriceButton ok={save.reeds >= c.cost} cost={c.cost} onClick={() => onBuy("character", c.id, c.cost)} />
                )}
              </div>
            );
          })}
        </div>
      )}
      {tab === "training" && (
        <div className="mx-auto max-w-lg space-y-3 rounded-2xl border border-slate-600 bg-slate-800 p-4">
          <p className="text-center text-sm text-slate-400">Training sticks to {active.name}.</p>
          {([
            ["charHp", "Max health", "hp"],
            ["charDmg", "Damage", "dmg"],
            ["charBreath", "Breath", "breath"],
          ] as const).map(([kind, label, key]) => {
            const lvl = save.charUpgrades[active.id]?.[key] ?? 0;
            const cost = trainCost(lvl);
            return (
              <div key={kind} className="flex items-center justify-between rounded-xl bg-slate-900 px-3 py-3">
                <span className="font-bold text-slate-100">{label} {lvl}</span>
                <PriceButton ok={save.reeds >= cost} cost={cost} onClick={() => onBuy(kind, active.id, cost)} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function SecretView({
  onBack,
  onReeds,
  onUnlock,
  onLevels,
}: {
  onBack: () => void;
  onReeds: () => void;
  onUnlock: () => void;
  onLevels: () => void;
}) {
  const [code, setCode] = useState("");
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 py-10">
      {!open ? (
        <>
          <h2 className="flex items-center gap-2 font-display text-3xl text-rose-400"><KeyRound /> Developer access</h2>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full rounded-xl border border-rose-900 bg-slate-900 px-4 py-3 text-center text-xl tracking-widest text-slate-50"
            placeholder="Enter code"
            autoComplete="off"
          />
          {msg && <p className="text-sm text-rose-300">{msg}</p>}
          <button
            type="button"
            onClick={() => {
              if (code === "2049") setOpen(true);
              else setMsg("Access denied");
            }}
            className="rounded-full bg-rose-500 px-6 py-3 font-extrabold text-slate-50"
          >
            Submit
          </button>
        </>
      ) : (
        <>
          <h2 className="font-display text-3xl text-emerald-300">Cheats on</h2>
          {msg && <p className="text-sm text-emerald-200">{msg}</p>}
          <button type="button" onClick={() => { onReeds(); setMsg("Added 10,000 reeds."); }} className="w-full rounded-2xl border border-emerald-500 px-4 py-3 font-extrabold text-emerald-300">+10,000 reeds</button>
          <button type="button" onClick={() => { onUnlock(); setMsg("Everything unlocked, including every class."); }} className="w-full rounded-2xl border border-amber-400 px-4 py-3 font-extrabold text-amber-200">Unlock everything</button>
          <button type="button" onClick={() => { onLevels(); setMsg("Every class is open, from 1 through the overtime set."); }} className="w-full rounded-2xl border border-cyan-400 px-4 py-3 font-extrabold text-cyan-200">Play any class</button>
        </>
      )}
      <button type="button" onClick={onBack} className="text-sm font-bold text-slate-400"><ArrowLeft className="mr-1 inline" size={16} /> Back</button>
    </div>
  );
}

export function WinView({ level, onNext }: { level: LevelDef | null; onNext: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
      <Music className="text-emerald-300" size={48} />
      <h2 className="font-display text-5xl text-slate-50">Class dismissed</h2>
      <p className="text-slate-300">You finished {level?.subject ?? "detention"}.</p>
      <p className="text-3xl font-extrabold text-emerald-300">+{level?.reward ?? 0} reeds</p>
      <button type="button" onClick={onNext} className="rounded-full bg-cyan-400 px-6 py-3 font-extrabold text-slate-950">Next class</button>
    </div>
  );
}

export function LoseView({ level, onRetry, onMenu }: { level: LevelDef | null; onRetry: () => void; onMenu: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
      <h2 className="font-display text-5xl text-rose-400">Detention extended</h2>
      <p className="text-slate-300">You failed {level?.subject ?? "class"}.</p>
      <button type="button" onClick={onRetry} className="rounded-full bg-rose-500 px-6 py-3 font-extrabold text-slate-50">Try again</button>
      <button type="button" onClick={onMenu} className="text-sm font-bold text-slate-400">Back to menu</button>
    </div>
  );
}

export function useShopTab(initial: ShopTab) {
  const [tab, setTab] = useState<ShopTab>(initial);
  useEffect(() => setTab(initial), [initial]);
  return [tab, setTab] as const;
}
