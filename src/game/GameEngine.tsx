import { useEffect, useRef, useState, type ReactNode } from "react";
import { gunMelee, playNote, shootAimed, tryJump, useSecret, worldFromMouse } from "./actions";
import { initAudio } from "./audio";
import { INSTRUMENTS, NOTES } from "./data";
import { ActionButton, MovePad, Piano } from "./hud";
import { bindProbe } from "./probe";
import { step } from "./sim";
import { CustomEnemySVG, CustomPlayerSVG, RenderShape, TeacherSVG, entityFacingDeg, projectileFacingDeg } from "./sprites";
import type { CharacterDef, CharUpgrade, GameStats, LevelDef, Upgrade } from "./types";
import { createEngine, type Engine } from "./world";

const NOTE_DIGITS = new Set(["Digit5", "Digit6", "Digit8", "Digit9", "Digit0"]);

function maxHp(character: CharacterDef, cu: CharUpgrade) {
  return Math.round(100 * character.stats.hpMultiplier + cu.hp * 50);
}

export function GameEngine({
  level,
  character,
  instrumentIds,
  upgrades,
  charUpgrade,
  cheats,
  horror = false,
  reeds,
  onReeds,
  onEnd,
  onExit,
  shop,
}: {
  level: LevelDef;
  character: CharacterDef;
  instrumentIds: string[];
  upgrades: Record<string, Upgrade>;
  charUpgrade: CharUpgrade;
  cheats: boolean;
  horror?: boolean;
  reeds: number;
  onReeds: (n: number) => void;
  onEnd: (result: "win" | "lose", stats: GameStats) => void;
  onExit: () => void;
  shop: ReactNode;
}) {
  const viewRef = useRef<HTMLDivElement>(null);
  const engine = useRef<Engine | null>(null);
  if (!engine.current) engine.current = createEngine(level, character, maxHp(character, charUpgrade));
  const sim = engine.current;

  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [activeId, setActiveId] = useState(level.id === "m_eason_1" ? "egg" : (instrumentIds[0] ?? "toot"));
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());
  const [combo, setCombo] = useState<string | null>(null);
  const [special, setSpecial] = useState<string | null>(null);
  const [hud, setHud] = useState({ hp: sim.player.hp, breath: sim.player.breath, boss: level.hp });

  const activeRef = useRef(activeId);
  activeRef.current = activeId;
  const pausedRef = useRef(paused);
  pausedRef.current = paused;
  const idsRef = useRef(instrumentIds);
  idsRef.current = instrumentIds;
  const upRef = useRef(upgrades);
  upRef.current = upgrades;
  const cuRef = useRef(charUpgrade);
  cuRef.current = charUpgrade;
  const charRef = useRef(character);
  charRef.current = character;
  const onEndRef = useRef(onEnd);
  onEndRef.current = onEnd;
  const onReedsRef = useRef(onReeds);
  onReedsRef.current = onReeds;

  useEffect(() => {
    const hp = maxHp(charRef.current, cuRef.current);
    const p = sim.player;
    const gain = hp - p.maxHp;
    p.maxHp = hp;
    if (gain > 0) p.hp = Math.min(hp, p.hp + gain);
  }, [charUpgrade, sim]);

  useEffect(() => {
    const eng = sim;
    let last = 0;
    let raf = 0;
    let alive = true;
    const loop = (t: number) => {
      if (!alive) return;
      if (!last) {
        last = t;
        raf = requestAnimationFrame(loop);
        return;
      }
      const dt = Math.min(0.05, (t - last) / 1000);
      last = t;
      const el = viewRef.current;
      if (el) {
        eng.viewW = el.clientWidth || 900;
        eng.viewH = el.clientHeight || 480;
      }
      eng.paused = pausedRef.current;
      if (!eng.paused && !eng.ended) {
        const inst = INSTRUMENTS[activeRef.current];
        const aim = inst?.family === "gun" || inst?.family === "throwable";
        if (aim) {
          const w = worldFromMouse(eng);
          eng.player.angle = Math.atan2(w.y - eng.player.y, w.x - eng.player.x);
        }
        const result = step(eng, dt, level, charRef.current.stats.breathRegen, aim);
        if (eng.reedsPending) {
          const n = eng.reedsPending;
          eng.reedsPending = 0;
          onReedsRef.current(n);
        }
        if (eng.eggTriggered) {
          eng.eggTriggered = false;
          const next = idsRef.current.find((id) => id !== "egg");
          if (next) setActiveId(next);
        }
        if (result === "win" || result === "lose") {
          alive = false;
          cancelAnimationFrame(raf);
          onEndRef.current(result, { ...eng.stats });
          return;
        }
        const boss = eng.boss && eng.enemies.includes(eng.boss) ? eng.boss.hp : 0;
        setHud({ hp: eng.player.hp, breath: eng.player.breath, boss });
      }
      setTick((n) => (n + 1) % 100000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const unbind = bindProbe({
      getYaw: () => eng.player.angle,
      getSpeed: () => eng.lastSpeed,
      getX: () => eng.player.x,
      getY: () => eng.player.y,
      setKeys: (codes) => {
        eng.keys = {};
        for (const c of codes) eng.keys[c] = true;
      },
      setPos: (x, y) => {
        eng.player.x = x;
        eng.player.y = y;
      },
    });
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      unbind();
    };
  }, [level, sim]);

  useEffect(() => {
    const eng = sim;
    const down = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setPaused((p) => !p);
        setShowShop(false);
        return;
      }
      eng.keys[e.code] = true;
      if (e.repeat || pausedRef.current) return;
      const speaking = level.id === "m_eason_1" && eng.boss?.behavior === "speech";
      if (e.code.startsWith("Digit") && !NOTE_DIGITS.has(e.code)) {
        const n = Number(e.key);
        const ids = idsRef.current;
        if (!speaking && n >= 1 && n <= ids.length) setActiveId(ids[n - 1] ?? ids[0] ?? "toot");
        return;
      }
      if (e.code === "KeyQ") {
        if (speaking) return;
        initAudio();
        const name = useSecret(eng, charRef.current, cuRef.current);
        if (name) setSpecial(name);
        return;
      }
      if (e.code === "Space") {
        e.preventDefault();
        if (speaking) return;
        const inst = INSTRUMENTS[activeRef.current];
        if (inst?.family === "gun") gunMelee(eng);
        else tryJump(eng);
        return;
      }
      if (speaking) return;
      const note = NOTES.find((n) => n.key === e.key.toLowerCase());
      if (!note) return;
      initAudio();
      const upg = upRef.current[activeRef.current] ?? { damageLvl: 0, breathLvl: 0, hitsLvl: 0, speedLvl: 0 };
      const name = playNote(eng, note.name, note.freq, activeRef.current, charRef.current, upg, cuRef.current);
      setActiveKeys((prev) => new Set(prev).add(note.key));
      window.setTimeout(() => {
        setActiveKeys((prev) => {
          const next = new Set(prev);
          next.delete(note.key);
          return next;
        });
      }, 120);
      if (name) setCombo(name);
    };
    const up = (e: KeyboardEvent) => {
      eng.keys[e.code] = false;
      if (NOTES.some((n) => n.key === e.key.toLowerCase())) eng.player.isRooted = false;
    };
    const blur = () => {
      eng.keys = {};
      eng.stick = { x: 0, y: 0 };
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", blur);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", blur);
    };
  }, [level.id, sim]);

  useEffect(() => {
    if (!combo) return;
    const t = window.setTimeout(() => setCombo(null), 1600);
    return () => window.clearTimeout(t);
  }, [combo]);
  useEffect(() => {
    if (!special) return;
    const t = window.setTimeout(() => setSpecial(null), 1200);
    return () => window.clearTimeout(t);
  }, [special]);

  void tick;
  const camX = sim.camera.x - sim.viewW / 2;
  const camY = sim.camera.y - sim.viewH / 2;
  const inst = INSTRUMENTS[activeId] ?? INSTRUMENTS.toot!;
  const hotbar = level.id === "m_eason_1" ? ["egg", ...instrumentIds.filter((id) => id !== "egg")] : instrumentIds;
  idsRef.current = hotbar;
  const bossAlive = Boolean(sim.boss && sim.boss.hp > 0);
  const speechNow = level.id === "m_eason_1" && sim.boss?.behavior === "speech";

  const fire = () => {
    if (pausedRef.current) return;
    if (speechNow && activeRef.current !== "egg") return;
    initAudio();
    const w = worldFromMouse(sim);
    const upg = upRef.current[activeRef.current] ?? { damageLvl: 0, breathLvl: 0, hitsLvl: 0, speedLvl: 0 };
    shootAimed(sim, activeRef.current, charRef.current, upg, cuRef.current, w.x, w.y);
  };

  const play = (note: (typeof NOTES)[number]) => {
    if (pausedRef.current || speechNow) return;
    initAudio();
    const upg = upRef.current[activeRef.current] ?? { damageLvl: 0, breathLvl: 0, hitsLvl: 0, speedLvl: 0 };
    const name = playNote(sim, note.name, note.freq, activeRef.current, charRef.current, upg, cuRef.current);
    setActiveKeys((prev) => new Set(prev).add(note.key));
    window.setTimeout(() => {
      setActiveKeys((prev) => {
        const next = new Set(prev);
        next.delete(note.key);
        return next;
      });
    }, 120);
    if (name) setCombo(name);
  };

  return (
    <div className="relative flex h-full min-h-0 flex-col">
      {combo && (
        <div className="pointer-events-none absolute top-[18%] left-1/2 z-40 -translate-x-1/2">
          <p className="font-display text-4xl text-amber-300 drop-shadow sm:text-5xl">COMBO: {combo}</p>
        </div>
      )}
      {special && (
        <div className="animate-flash-text pointer-events-none absolute top-[30%] left-1/2 z-40">
          <p className="font-display text-5xl text-rose-400">{special}</p>
        </div>
      )}
      {paused && (
        <div className="absolute inset-0 z-50 flex flex-col items-center overflow-y-auto bg-slate-950/95 p-4">
          <div className="mb-4 flex w-full max-w-3xl flex-wrap items-center justify-between gap-2">
            <h2 className="font-display text-3xl text-slate-50">Paused</h2>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setPaused(false)} className="rounded-full bg-emerald-500 px-4 py-2 font-extrabold text-slate-950">
                Resume
              </button>
              <button type="button" onClick={() => setShowShop((v) => !v)} className="rounded-full bg-amber-400 px-4 py-2 font-extrabold text-slate-950">
                {showShop ? "Close shop" : "Shop"}
              </button>
              <button type="button" onClick={onExit} className="rounded-full bg-slate-700 px-4 py-2 font-extrabold text-slate-100">
                Quit
              </button>
            </div>
          </div>
          {showShop ? <div className="w-full max-w-3xl">{shop}</div> : <p className="text-slate-400">Esc resumes. Shop buys apply to the next note.</p>}
        </div>
      )}
      {cheats && (
        <div className="absolute right-3 bottom-52 z-30 flex w-40 flex-col gap-1 rounded-xl border border-rose-500 bg-slate-950/90 p-2 text-[11px] text-slate-100">
          <p className="text-center font-extrabold text-rose-300">Cheats</p>
          <label className="flex items-center gap-2">
            <input type="checkbox" onChange={(e) => (sim.godMode = e.target.checked)} /> God mode
          </label>
          <button type="button" className="rounded bg-rose-900 py-1" onClick={() => onReeds(10000)}>
            +10k reeds
          </button>
          <button
            type="button"
            className="rounded bg-orange-900 py-1"
            onClick={() => {
              for (const e of sim.enemies) e.hp = 0;
            }}
          >
            Clear enemies
          </button>
        </div>
      )}
      <div
        ref={viewRef}
        className={`relative min-h-0 flex-1 cursor-crosshair overflow-hidden ${horror ? "bg-[#12060e]" : "bg-slate-900"}`}
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          sim.mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
        }}
        onPointerDown={(e) => {
          if (e.target !== e.currentTarget && !(e.target as HTMLElement).dataset?.arena) return;
          fire();
        }}
      >
        <div data-arena="1" className="absolute inset-0" onPointerDown={fire} />
        {horror && (
          <div
            className="pointer-events-none absolute inset-0 z-20"
            style={{ background: "radial-gradient(circle at center, transparent 42%, rgba(24,0,16,0.78) 100%)" }}
          />
        )}
        <div className="pointer-events-none absolute top-0 left-0" style={{ width: sim.mapW, height: sim.mapH, transform: `translate(${Math.round(-camX)}px, ${Math.round(-camY)}px)` }}>
          <div
            className="absolute opacity-60"
            style={{
              width: sim.mapW,
              height: sim.mapH,
              backgroundImage: horror
                ? "linear-gradient(#4a1230 1px, transparent 1px), linear-gradient(90deg, #4a1230 1px, transparent 1px)"
                : "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {sim.walls.map((w) => (
            <div key={w.id} className="absolute border border-slate-600 bg-slate-700" style={{ left: w.x, top: w.y, width: w.w, height: w.h }}>
              {!w.isBorder && w.hp < w.maxHp && <div className="absolute inset-0 bg-rose-500/40" style={{ opacity: 1 - w.hp / w.maxHp }} />}
            </div>
          ))}
          {sim.door && (
            <div className="absolute" style={{ left: sim.door.x - 36, top: sim.door.y - 36, width: 72, height: 72 }}>
              <RenderShape shape="door" />
            </div>
          )}
          {sim.enemies.map((e) =>
            e.isBoss ? (
              <div key={e.id} className="absolute" style={{ left: e.x - e.radius, top: e.y - e.radius, width: e.radius * 2, height: e.radius * 2 }}>
                <div className="absolute inset-0" style={{ transform: `rotate(${entityFacingDeg(e.angle)}deg)` }}>
                  <TeacherSVG glasses={level.glassesType} shirt={level.shirtColor} isHit={e.hitFlash > 0} monster={horror} />
                </div>
                <Bar value={e.hp / e.maxHp} />
              </div>
            ) : (
              <div key={e.id} className="absolute" style={{ left: e.x - e.radius, top: e.y - e.radius, width: e.radius * 2, height: e.radius * 2 }}>
                <div className="absolute inset-0" style={{ transform: `rotate(${entityFacingDeg(e.angle)}deg)` }}>
                  <CustomEnemySVG typeId={e.typeId} isHit={e.hitFlash > 0} monster={horror} />
                </div>
                <Bar value={e.hp / e.maxHp} />
              </div>
            ),
          )}
          {sim.allies.map((a) => (
            <div key={a.id} className="absolute" style={{ left: a.x - a.radius, top: a.y - a.radius, width: a.radius * 2, height: a.radius * 2 }}>
              <div className="absolute inset-0" style={{ transform: `rotate(${entityFacingDeg(a.angle)}deg)` }}>
                <CustomEnemySVG typeId="ally" />
              </div>
              <Bar value={a.hp / a.maxHp} tone="bg-sky-400" />
            </div>
          ))}
          <div
            className="absolute"
            style={{
              left: sim.player.x - 40,
              top: sim.player.y - 40,
              width: 80,
              height: 80,
              transform: `rotate(${entityFacingDeg(sim.player.angle)}deg)`,
            }}
          >
            {sim.time < sim.player.invincibleUntil && <div className="absolute inset-0 rounded-full border-4 border-amber-300" />}
            <CustomPlayerSVG character={character} instrumentId={activeId} isPlaying={sim.player.isPlaying} isWalking={sim.player.isWalking} z={sim.player.z} />
          </div>
          {sim.projectiles.map((pr) => (
            <div
              key={pr.id}
              className="absolute"
              style={{
                left: pr.x - 16,
                top: pr.y - 16,
                width: 32,
                height: 32,
                transform: `rotate(${projectileFacingDeg(pr.shape, pr.angle)}deg)`,
              }}
            >
              <RenderShape shape={pr.shape} hex={pr.hex} />
            </div>
          ))}
          {sim.enemyShots.map((pr) => (
            <div
              key={pr.id}
              className="absolute"
              style={{
                left: pr.x - 12,
                top: pr.y - 12,
                width: 24,
                height: 24,
                transform: `rotate(${projectileFacingDeg(pr.football ? "football" : "note", pr.angle)}deg)`,
              }}
            >
              <RenderShape shape={pr.football ? "football" : "note"} hex="#ef4444" />
            </div>
          ))}
          {sim.particles.map((pr) => (
            <div key={pr.id} className="absolute" style={{ left: pr.x - 16, top: pr.y - 16, width: 32, height: 32, opacity: Math.max(0, pr.life), transform: `scale(${pr.scale})` }}>
              <RenderShape shape={pr.shape} hex={pr.hex} />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute top-3 right-3 left-3 flex items-start justify-between gap-2">
          <div className="w-44 rounded-2xl border border-slate-600 bg-slate-950/90 p-3">
            <p className="text-xs font-bold text-emerald-300">HP {Math.ceil(hud.hp)} / {Math.ceil(sim.player.maxHp)}</p>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full bg-emerald-400" style={{ width: `${Math.max(0, (hud.hp / sim.player.maxHp) * 100)}%` }} />
            </div>
            <p className="mt-2 text-xs font-bold text-cyan-300">Breath {Math.ceil(hud.breath)}</p>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full bg-cyan-300" style={{ width: `${Math.max(0, (hud.breath / sim.player.maxBreath) * 100)}%` }} />
            </div>
          </div>
          <div className="max-w-[14rem] rounded-2xl border border-slate-600 bg-slate-950/90 px-3 py-2 text-right text-xs font-bold text-amber-200">
            {speechNow ? "Throw the egg at Kashu!" : sim.door ? "Step into the door." : bossAlive ? `Defeat ${level.teacher}` : `Henchmen left to spawn: ${Math.max(0, level.henchmenCount - sim.henchmenSpawned)}`}
            <span className="mt-1 block font-medium text-slate-400">{reeds} reeds · Esc pauses</span>
          </div>
        </div>
        {bossAlive && sim.boss && (
          <div className="pointer-events-none absolute top-3 left-1/2 w-56 -translate-x-1/2 rounded-2xl border border-rose-900 bg-slate-950/90 p-2 text-center">
            <p className="text-sm font-extrabold text-rose-300">{level.teacher}</p>
            <p className="text-[11px] text-slate-400">{level.subject}</p>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full bg-rose-500" style={{ width: `${Math.max(0, (hud.boss / level.hp) * 100)}%` }} />
            </div>
          </div>
        )}
        <div className="absolute bottom-3 left-3 z-20">
          <MovePad onStick={(x, y) => (sim.stick = { x, y })} />
        </div>
        <div className="absolute right-3 bottom-3 z-20 flex gap-2">
          <ActionButton label="Jump" onPress={() => (inst.family === "gun" ? gunMelee(sim) : tryJump(sim))} />
          <ActionButton
            label="Power"
            onPress={() => {
              if (speechNow) return;
              initAudio();
              const name = useSecret(sim, charRef.current, cuRef.current);
              if (name) setSpecial(name);
            }}
          />
          {(inst.family === "gun" || inst.family === "throwable") && <ActionButton label={inst.family === "throwable" ? "Throw" : "Fire"} onPress={fire} />}
        </div>
      </div>
      <div className="shrink-0 border-t border-slate-700 bg-slate-950 px-3 pt-2 pb-3">
        <div className="mb-2 flex gap-2 overflow-x-auto">
          {hotbar.map((id, idx) => {
            const item = INSTRUMENTS[id];
            if (!item) return null;
            if (item.family === "throwable" && level.id !== "m_eason_1") return null;
            const on = activeId === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  if (speechNow) return;
                  setActiveId(id);
                }}
                className={`relative h-14 w-14 shrink-0 rounded-xl ${on ? `ring-2 ring-cyan-200 ${item.color}` : "bg-slate-800"}`}
                title={item.name}
              >
                <span className="absolute top-0.5 right-1 text-[10px] font-bold text-slate-900">{idx + 1}</span>
                <div className="mx-auto h-8 w-8">
                  <RenderShape shape={item.family === "gun" ? "gun" : item.family} hex={item.hex} />
                </div>
              </button>
            );
          })}
          <p className="self-center pl-2 text-xs text-slate-400">
            {inst.name}
            {inst.family !== "gun" && inst.family !== "throwable" ? ` · ${inst.breathCost} breath` : " · click the field"}
            <span className="mt-1 block text-slate-500">Tap a horn or press 1-4 to switch.</span>
          </p>
        </div>
        <Piano onPlay={play} active={activeKeys} />
      </div>
    </div>
  );
}

function Bar({ value, tone = "bg-rose-500" }: { value: number; tone?: string }) {
  return (
    <div className="absolute -top-2 left-1/2 h-1.5 w-10 -translate-x-1/2 overflow-hidden rounded-full bg-slate-900">
      <div className={`h-full ${tone}`} style={{ width: `${Math.max(0, Math.min(1, value)) * 100}%` }} />
    </div>
  );
}
