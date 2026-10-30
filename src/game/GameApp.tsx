import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, Music, Wind } from "lucide-react";
import { blankUpgrade, CHARACTERS, characterById, INSTRUMENTS, MAX_LEVEL_ID } from "./data";
import { GameEngine } from "./GameEngine";
import { initAudio } from "./audio";
import {
  CharSelect,
  GearView,
  LevelSelect,
  LoreView,
  LoseView,
  MainMenu,
  MissionsView,
  SecretView,
  ShopView,
  Tutorial,
  WinView,
  type BuyKind,
  type ShopTab,
  type View,
} from "./menus";
import { ArcadeView } from "./minigames";
import { defaultSave, loadSave, writeSave } from "./save";
import { SvgDefs } from "./sprites";
import { TownEngine } from "./TownEngine";
import type { LevelDef, QuestDef, SaveData } from "./types";
import type { Portal } from "./town";

const EMPTY_CU = { hp: 0, dmg: 0, breath: 0 };

export function GameApp() {
  const [save, setSave] = useState<SaveData>(defaultSave);
  const [view, setView] = useState<View>("menu");
  const [level, setLevel] = useState<LevelDef | null>(null);
  const [attempt, setAttempt] = useState(0);
  const [fromTown, setFromTown] = useState(false);
  const [blackMarket, setBlackMarket] = useState(false);
  const [shopTab, setShopTab] = useState<ShopTab>("instruments");
  const [ready, setReady] = useState(false);
  const [pending, setPending] = useState<LevelDef | null>(null);
  const [bag, setBag] = useState<string[] | null>(null);

  useEffect(() => {
    setSave(loadSave());
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) writeSave(save);
  }, [save, ready]);
  useEffect(() => {
    const flush = () => {
      if (ready) writeSave(save);
    };
    window.addEventListener("pagehide", flush);
    return () => window.removeEventListener("pagehide", flush);
  }, [save, ready]);
  useEffect(() => {
    const wake = () => initAudio();
    window.addEventListener("pointerdown", wake);
    return () => window.removeEventListener("pointerdown", wake);
  }, []);

  const character = characterById(save.activeCharId);
  const charUpgrade = save.charUpgrades[character.id] ?? EMPTY_CU;

  const onReeds = useCallback((n: number) => {
    setSave((s) => ({ ...s, reeds: s.reeds + n }));
  }, []);

  const finish = useCallback((result: "win" | "lose", stats: { goonsKilled: number; thugsKilled: number; soundproofersKilled: number; bossesDefeated: number }) => {
    setSave((s) => {
      const numeric = level && typeof level.id === "number" ? level.id : null;
      const unlock = result === "win" && numeric !== null && numeric === s.maxLevelUnlocked && numeric < MAX_LEVEL_ID;
      return {
        ...s,
        reeds: s.reeds + (result === "win" && level ? level.reward : 0),
        maxLevelUnlocked: unlock ? s.maxLevelUnlocked + 1 : s.maxLevelUnlocked,
        gameStats: {
          goonsKilled: s.gameStats.goonsKilled + stats.goonsKilled,
          thugsKilled: s.gameStats.thugsKilled + stats.thugsKilled,
          soundproofersKilled: s.gameStats.soundproofersKilled + stats.soundproofersKilled,
          bossesDefeated: s.gameStats.bossesDefeated + stats.bossesDefeated,
        },
      };
    });
    setView(result);
  }, [level]);

  const buy = useCallback((kind: BuyKind, id: string, cost: number) => {
    setSave((s) => {
      if (s.reeds < cost) return s;
      if (kind === "instrument") {
        const inst = INSTRUMENTS[id];
        if (!inst || s.unlockedInstruments.includes(id)) return s;
        if (inst.req && !s.unlockedInstruments.includes(inst.req)) return s;
        return {
          ...s,
          reeds: s.reeds - cost,
          unlockedInstruments: [...s.unlockedInstruments, id],
          upgrades: { ...s.upgrades, [id]: s.upgrades[id] ?? blankUpgrade() },
        };
      }
      if (kind === "character") {
        if (s.unlockedCharacters.includes(id)) return s;
        return { ...s, reeds: s.reeds - cost, unlockedCharacters: [...s.unlockedCharacters, id] };
      }
      if (kind === "upgradeDmg" || kind === "upgradeBrth" || kind === "upgradeHits" || kind === "upgradeSpeed") {
        const prev = s.upgrades[id] ?? blankUpgrade();
        const next = { ...prev, speedLvl: prev.speedLvl || 0 };
        if (kind === "upgradeDmg") next.damageLvl += 1;
        if (kind === "upgradeBrth") next.breathLvl += 1;
        if (kind === "upgradeHits") next.hitsLvl += 1;
        if (kind === "upgradeSpeed") next.speedLvl += 1;
        return { ...s, reeds: s.reeds - cost, upgrades: { ...s.upgrades, [id]: next } };
      }
      const prev = s.charUpgrades[id] ?? { hp: 0, dmg: 0, breath: 0 };
      const next = { ...prev };
      if (kind === "charHp") next.hp += 1;
      if (kind === "charDmg") next.dmg += 1;
      if (kind === "charBreath") next.breath += 1;
      return { ...s, reeds: s.reeds - cost, charUpgrades: { ...s.charUpgrades, [id]: next } };
    });
  }, []);

  const claim = useCallback((quest: QuestDef) => {
    setSave((s) => {
      if (s.claimedQuests.includes(quest.id)) return s;
      if ((s.gameStats[quest.metric] || 0) < quest.target) return s;
      const claimedQuests = [...s.claimedQuests, quest.id];
      if (quest.rewardType === "instrument" && quest.rewardId) {
        const id = quest.rewardId;
        return {
          ...s,
          claimedQuests,
          unlockedInstruments: s.unlockedInstruments.includes(id) ? s.unlockedInstruments : [...s.unlockedInstruments, id],
          upgrades: { ...s.upgrades, [id]: s.upgrades[id] ?? blankUpgrade() },
        };
      }
      return { ...s, claimedQuests, reeds: s.reeds + (quest.rewardAmount ?? 0) };
    });
  }, []);

  const openPortal = useCallback((portal: Portal) => {
    initAudio();
    if (portal.kind === "menu") {
      setFromTown(false);
      setView("menu");
      return;
    }
    setFromTown(true);
    if (portal.kind === "shop") {
      setBlackMarket(false);
      setShopTab("instruments");
      setView("shop");
    } else if (portal.kind === "blackmarket") {
      setBlackMarket(true);
      setShopTab("instruments");
      setView("shop");
    } else if (portal.kind === "training") {
      setBlackMarket(false);
      setShopTab("training");
      setView("shop");
    } else if (portal.kind === "missions") setView("missions");
    else if (portal.kind === "levelSelect") setView("levelSelect");
    else if (portal.kind === "arcade") setView("arcade");
  }, []);

  const go = (next: View) => {
    initAudio();
    if (next === "menu" || next === "town") setFromTown(false);
    if (next === "shop") {
      setBlackMarket(false);
      setShopTab("instruments");
    }
    setView(next);
  };

  const openGear = (next: LevelDef) => {
    initAudio();
    setPending(next);
    setView("gear");
  };

  const begin = (next: LevelDef, loadout?: string[]) => {
    initAudio();
    if (loadout) setBag(loadout);
    setLevel(next);
    setAttempt((n) => n + 1);
    setView("game");
  };

  const packed = (bag && bag.length ? bag : save.loadout).filter((id) => save.unlockedInstruments.includes(id) && id !== "egg");
  const horns = packed.length ? packed : save.unlockedInstruments.filter((id) => id !== "egg").slice(0, 4);

  const shop = useMemo(
    () => <ShopView save={save} blackMarket={blackMarket} tab={shopTab} onTab={setShopTab} onBuy={buy} />,
    [save, blackMarket, shopTab, buy],
  );

  const showMenu = view !== "menu" && view !== "game" && view !== "town";
  const showTown = view !== "menu" && view !== "game" && view !== "town" && fromTown;

  return (
    <div className={`flex h-dvh items-stretch justify-center sm:items-center sm:p-4 ${save.horrorMode ? "bg-[#14060f]" : "bg-slate-950"}`}>
      <SvgDefs />
      <div className={`flex h-full w-full max-w-6xl flex-col overflow-hidden sm:h-[min(100%,940px)] sm:rounded-3xl sm:border ${save.horrorMode ? "border-fuchsia-950 bg-[#1a0b14]" : "border-slate-700 bg-slate-900"}`}>
        <header className={`flex shrink-0 items-center justify-between gap-3 border-b px-4 py-3 ${save.horrorMode ? "border-fuchsia-950 bg-[#10060d]" : "border-slate-700 bg-slate-950"}`}>
          <div className="flex items-center gap-2">
            <Music className={save.horrorMode ? "text-fuchsia-300" : "text-cyan-300"} size={20} />
            <h1 className={`font-display text-sm tracking-wide sm:text-xl ${save.horrorMode ? "text-fuchsia-200" : "text-cyan-200"}`}>
              {save.horrorMode ? "Spooky Detention" : "Symphonic Detention"}
            </h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1 rounded-full border border-emerald-900 bg-slate-900 px-3 py-1 text-sm font-extrabold text-emerald-300">
              <Wind size={14} /> {save.reeds}
            </div>
            {showTown && (
              <button type="button" onClick={() => go("town")} className="text-sm font-bold text-emerald-300">
                Town
              </button>
            )}
            {showMenu && (
              <button type="button" onClick={() => go("menu")} className="flex items-center gap-1 text-sm font-bold text-slate-300">
                <ArrowLeft size={16} /> Menu
              </button>
            )}
          </div>
        </header>
        <main className={`min-h-0 flex-1 ${view === "game" || view === "town" ? "overflow-hidden" : "overflow-y-auto custom-scrollbar p-4"}`}>
          {view === "menu" && (
            <MainMenu
              onNavigate={go}
              horror={save.horrorMode}
              onToggleHorror={() => setSave((s) => ({ ...s, horrorMode: !s.horrorMode }))}
            />
          )}
          {view === "tutorial" && <Tutorial onBack={() => go("menu")} />}
          {view === "lore" && <LoreView save={save} />}
          {view === "chars" && <CharSelect save={save} onSelect={(id) => setSave((s) => ({ ...s, activeCharId: id }))} onSchedule={() => go("levelSelect")} />}
          {view === "shop" && shop}
          {view === "missions" && <MissionsView save={save} onStart={openGear} onClaim={claim} />}
          {view === "arcade" && (
            <ArcadeView
              save={save}
              onBack={() => go(fromTown ? "town" : "menu")}
              onEarn={(id, amount) =>
                setSave((s) => {
                  const day = new Date().toISOString().slice(0, 10);
                  const earned = s.arcade?.[id]?.day === day ? s.arcade[id]!.earned : 0;
                  const add = Math.max(0, Math.min(amount, 120 - earned));
                  if (!add) return s;
                  return { ...s, reeds: s.reeds + add, arcade: { ...s.arcade, [id]: { day, earned: earned + add } } };
                })
              }
            />
          )}
          {view === "levelSelect" && <LevelSelect save={save} onStart={openGear} />}
          {view === "gear" && pending && (
            <GearView
              save={save}
              level={pending}
              onBack={() => setView(typeof pending.id === "string" ? "missions" : "levelSelect")}
              onStart={(loadout) => {
                setSave((s) => ({ ...s, loadout }));
                begin(pending, loadout);
              }}
            />
          )}
          {view === "town" && (
            <TownEngine
              character={character}
              instrumentId={[...save.unlockedInstruments].reverse().find((id) => id !== "egg") ?? "toot"}
              horror={save.horrorMode}
              onTeleport={openPortal}
            />
          )}
          {view === "game" && level && (
            <GameEngine
              key={attempt}
              level={level}
              character={character}
              instrumentIds={horns}
              upgrades={save.upgrades}
              charUpgrade={charUpgrade}
              cheats={save.cheatsEnabled}
              horror={save.horrorMode}
              reeds={save.reeds}
              onReeds={onReeds}
              onEnd={finish}
              onExit={() => go("menu")}
              shop={shop}
            />
          )}
          {view === "secret" && (
            <SecretView
              onBack={() => go("menu")}
              onReeds={() => setSave((s) => ({ ...s, reeds: s.reeds + 10000, cheatsEnabled: true }))}
              onUnlock={() =>
                setSave((s) => {
                  const ids = Object.keys(INSTRUMENTS).filter((id) => id !== "egg");
                  const upgrades = { ...s.upgrades };
                  for (const id of ids) upgrades[id] = upgrades[id] ?? blankUpgrade();
                  return {
                    ...s,
                    maxLevelUnlocked: MAX_LEVEL_ID,
                    cheatsEnabled: true,
                    unlockedCharacters: CHARACTERS.map((c) => c.id),
                    unlockedInstruments: ids,
                    upgrades,
                  };
                })
              }
              onLevels={() => setSave((s) => ({ ...s, cheatsEnabled: true, maxLevelUnlocked: MAX_LEVEL_ID }))}
            />
          )}
          {view === "win" && (
            <WinView
              level={level}
              onNext={() => {
                if (level && typeof level.id === "string") go("missions");
                else go("levelSelect");
              }}
            />
          )}
          {view === "lose" && <LoseView level={level} onRetry={() => level && begin(level)} onMenu={() => go("menu")} />}
        </main>
      </div>
    </div>
  );
}
