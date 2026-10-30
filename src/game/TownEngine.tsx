import { useEffect, useRef, useState } from "react";
import { distance, moveCircle } from "./collision";
import { bindProbe } from "./probe";
import { CustomPlayerSVG, TeacherSVG, entityFacingDeg } from "./sprites";
import { NPCS, PORTAL_ENTER_KEY, PORTAL_TRIGGER, PORTALS, SPAWN, TOWN_H, TOWN_W, townWalls, type Portal } from "./town";
import { MovePad } from "./hud";
import { held, type Player } from "./world";
import type { CharacterDef } from "./types";

const WALLS = townWalls();

export function TownEngine({
  character,
  instrumentId,
  horror = false,
  onTeleport,
}: {
  character: CharacterDef;
  instrumentId: string;
  horror?: boolean;
  onTeleport: (portal: Portal) => void;
}) {
  const viewRef = useRef<HTMLDivElement>(null);
  const [tick, setTick] = useState(0);
  const [nearId, setNearId] = useState<string | null>(null);
  const [talk, setTalk] = useState<string | null>(null);
  const fired = useRef(false);
  const player = useRef<Player>({
    x: SPAWN.x,
    y: SPAWN.y,
    radius: 22,
    hp: 100,
    maxHp: 100,
    breath: 100,
    maxBreath: 100,
    baseSpeed: 5.2 * character.stats.speedMultiplier,
    speed: 5.2 * character.stats.speedMultiplier,
    speedBuffMul: 1,
    speedBuffUntil: 0,
    invincibleUntil: 0,
    isRooted: false,
    lastHit: 0,
    angle: -Math.PI / 2,
    isWalking: false,
    isPlaying: false,
    playTimer: 0,
    lastNoteTime: 0,
    lastMeleeTime: 0,
    noteHistory: [],
    z: 0,
    vz: 0,
    breathRegenPause: 0,
  });
  const keys = useRef<Record<string, boolean>>({});
  const stick = useRef({ x: 0, y: 0 });
  const cam = useRef({ x: SPAWN.x, y: SPAWN.y });
  const speedRef = useRef(0);
  const view = useRef({ w: 900, h: 600 });

  const go = (portal: Portal) => {
    if (fired.current) return;
    fired.current = true;
    onTeleport(portal);
  };

  useEffect(() => {
    const engineLike = {
      get keys() {
        return keys.current;
      },
      set keys(v: Record<string, boolean>) {
        keys.current = v;
      },
    };
    const down = (e: KeyboardEvent) => {
      keys.current[e.code] = true;
      if (e.code === "Enter") {
        const hit = closest(player.current.x, player.current.y);
        if (hit && hit.dist < PORTAL_ENTER_KEY) go(hit.portal);
      }
    };
    const up = (e: KeyboardEvent) => {
      keys.current[e.code] = false;
    };
    const blur = () => {
      keys.current = {};
      stick.current = { x: 0, y: 0 };
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", blur);
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
      const p = player.current;
      const el = viewRef.current;
      if (el) view.current = { w: el.clientWidth || 900, h: el.clientHeight || 600 };
      let ix = stick.current.x;
      let iy = stick.current.y;
      if (held(engineLike, "KeyA", "ArrowLeft")) ix -= 1;
      if (held(engineLike, "KeyD", "ArrowRight")) ix += 1;
      if (held(engineLike, "KeyW", "ArrowUp")) iy -= 1;
      if (held(engineLike, "KeyS", "ArrowDown")) iy += 1;
      const mag = Math.hypot(ix, iy);
      if (mag > 1) {
        ix /= mag;
        iy /= mag;
      }
      let spd = p.baseSpeed * dt * 60;
      if (held(engineLike, "ShiftLeft", "ShiftRight")) spd *= 1.5;
      const next = moveCircle(p.x, p.y, ix * spd, iy * spd, p.radius, WALLS, TOWN_W, TOWN_H);
      p.isWalking = next.x !== p.x || next.y !== p.y;
      if (p.isWalking) p.angle = Math.atan2(next.y - p.y, next.x - p.x);
      p.x = next.x;
      p.y = next.y;
      speedRef.current = dt > 0 ? Math.hypot(ix * spd, iy * spd) / dt : 0;
      cam.current.x += (p.x - cam.current.x) * Math.min(1, dt * 8);
      cam.current.y += (p.y - cam.current.y) * Math.min(1, dt * 8);
      if (fired.current) return;
      const hit = closest(p.x, p.y);
      if (hit && hit.dist <= PORTAL_TRIGGER) {
        go(hit.portal);
        return;
      }
      setNearId(hit && hit.dist < PORTAL_ENTER_KEY ? hit.portal.id : null);
      const npc = NPCS.find((n) => distance(p.x, p.y, n.x, n.y) < 110);
      setTalk(npc ? `${npc.name}: ${npc.line}` : null);
      setTick((n) => (n + 1) % 100000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const unbind = bindProbe({
      getYaw: () => player.current.angle,
      getSpeed: () => speedRef.current,
      getX: () => player.current.x,
      getY: () => player.current.y,
      setKeys: (codes) => {
        keys.current = {};
        for (const c of codes) keys.current[c] = true;
      },
      setPos: (x, y) => {
        player.current.x = x;
        player.current.y = y;
      },
    });
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      unbind();
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", blur);
    };
    // Teleport handler is stable enough for this mount; town remounts per visit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  void tick;
  const p = player.current;
  const camX = cam.current.x - view.current.w / 2;
  const camY = cam.current.y - view.current.h / 2;
  const near = PORTALS.find((portal) => portal.id === nearId);

  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <div className="pointer-events-none absolute top-3 right-3 left-3 z-20 flex items-start justify-between gap-2">
        <div className="pointer-events-auto max-w-md rounded-2xl border border-slate-600 bg-slate-950/90 px-4 py-3 shadow-xl">
          <p className={`font-display text-lg ${horror ? "text-fuchsia-300" : "text-cyan-300"}`}>{horror ? "Spooky Town" : "Band Town"}</p>
          <p className="text-sm text-slate-300">Walk into a glowing ring to teleport. Press Enter when you're close, or tap the ring.</p>
          {near && <p className="mt-1 text-sm font-extrabold text-amber-300">Ready: {near.title}. Press Enter.</p>}
          {talk && <p className="mt-2 text-sm text-slate-100">{talk}</p>}
        </div>
      </div>
      <div ref={viewRef} className={`relative min-h-0 flex-1 overflow-hidden ${horror ? "bg-[#140810]" : "bg-emerald-950"}`}>
        {horror && (
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{ background: "radial-gradient(circle at center, transparent 40%, rgba(24,0,16,0.7) 100%)" }}
          />
        )}
        <div className="absolute top-0 left-0" style={{ transform: `translate(${Math.round(-camX)}px, ${Math.round(-camY)}px)` }}>
          <div className={`absolute ${horror ? "bg-[#24101c]" : "bg-emerald-900"}`} style={{ width: TOWN_W, height: TOWN_H }} />
          <div className="absolute bg-slate-700/90" style={{ left: 780, top: 36, width: 440, height: TOWN_H - 72 }} />
          <div className="absolute bg-slate-700/90" style={{ left: 36, top: 430, width: TOWN_W - 72, height: 260 }} />
          <div className="absolute bg-slate-700/90" style={{ left: 36, top: 900, width: TOWN_W - 72, height: 250 }} />
          {WALLS.filter((w) => !w.isBorder).map((w) => (
            <div key={w.id} className="absolute rounded-md border border-slate-500 bg-slate-800 shadow-lg" style={{ left: w.x, top: w.y, width: w.w, height: w.h }} />
          ))}
          {NPCS.map((n) => {
            const face = Math.atan2(p.y - n.y, p.x - n.x);
            return (
              <div key={n.id} className="pointer-events-none absolute" style={{ left: n.x - 28, top: n.y - 36, width: 56, height: 56 }}>
                <div className="absolute inset-0" style={{ transform: `rotate(${entityFacingDeg(face)}deg)` }}>
                  <TeacherSVG glasses="round" shirt={n.hex} />
                </div>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-slate-950/90 px-2 text-[10px] font-bold whitespace-nowrap text-slate-100">{n.name}</div>
              </div>
            );
          })}
          {PORTALS.map((portal) => (
            <button
              key={portal.id}
              type="button"
              onPointerDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                go(portal);
              }}
              className="absolute flex items-center justify-center rounded-full border-4 bg-slate-950/40 animate-portal"
              style={{
                left: portal.x - 70,
                top: portal.y - 70,
                width: 140,
                height: 140,
                borderColor: portal.hex,
                boxShadow: `0 0 24px ${portal.hex}`,
              }}
              aria-label={`Teleport to ${portal.title}`}
            >
              <span className="pointer-events-none rounded-xl bg-slate-950/90 px-2 py-1 text-center text-xs font-extrabold text-slate-50">
                {portal.title}
                <span className="block font-medium text-slate-300">{portal.subtitle}</span>
              </span>
            </button>
          ))}
          <div
            className="pointer-events-none absolute"
            style={{
              left: p.x - 36,
              top: p.y - 36,
              width: 72,
              height: 72,
              transform: `rotate(${entityFacingDeg(p.angle)}deg)`,
            }}
          >
            <CustomPlayerSVG character={character} instrumentId={instrumentId} isPlaying={false} isWalking={p.isWalking} />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 border-t border-slate-700 bg-slate-950 px-3 py-3">
        <MovePad onStick={(x, y) => (stick.current = { x, y })} />
        <p className="text-sm text-slate-400">WASD to walk. The rings are teleports — step in the middle. Shift sprints.</p>
      </div>
    </div>
  );
}

function closest(x: number, y: number) {
  let portal = PORTALS[0]!;
  let dist = distance(x, y, portal.x, portal.y);
  for (const candidate of PORTALS) {
    const d = distance(x, y, candidate.x, candidate.y);
    if (d < dist) {
      portal = candidate;
      dist = d;
    }
  }
  return { portal, dist };
}
