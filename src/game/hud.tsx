import { useRef } from "react";
import { NOTES } from "./data";
import type { NoteDef } from "./types";

export function MovePad({ onStick }: { onStick: (x: number, y: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const point = (ev: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    let x = (ev.clientX - (r.left + r.width / 2)) / (r.width / 2);
    let y = (ev.clientY - (r.top + r.height / 2)) / (r.height / 2);
    const m = Math.hypot(x, y);
    if (m > 1) {
      x /= m;
      y /= m;
    }
    onStick(x, y);
  };
  return (
    <div
      ref={ref}
      className="relative h-28 w-28 shrink-0 touch-none rounded-full border-2 border-cyan-400/50 bg-slate-950/80 shadow-lg"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        e.stopPropagation();
        point(e);
      }}
      onPointerMove={(e) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) point(e);
      }}
      onPointerUp={() => onStick(0, 0)}
      onPointerCancel={() => onStick(0, 0)}
      role="slider"
      aria-label="Move"
      aria-valuemin={-1}
      aria-valuemax={1}
      aria-valuenow={0}
    >
      <div className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/80" />
    </div>
  );
}

const WHITES = NOTES.filter((n) => !n.isBlack);
const BLACK_AFTER = [0, 1, 3, 4, 5];
const BLACKS = NOTES.filter((n) => n.isBlack);

export function Piano({ onPlay, active }: { onPlay: (n: NoteDef) => void; active: Set<string> }) {
  return (
    <div className="relative mx-auto h-24 w-full max-w-3xl sm:h-28">
      <div className="flex h-full gap-1">
        {WHITES.map((n) => (
          <button
            key={n.name}
            type="button"
            onPointerDown={(e) => {
              e.preventDefault();
              onPlay(n);
            }}
            className={`relative min-w-0 flex-1 rounded-b-md border border-slate-300 text-xs font-extrabold text-slate-600 ${active.has(n.key) ? "bg-cyan-200" : "bg-slate-100"}`}
          >
            <span className="absolute right-0 bottom-1 left-0">{n.key.toUpperCase()}</span>
          </button>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex h-[58%] gap-1">
        {WHITES.slice(0, -1).map((n, i) => {
          const bi = BLACK_AFTER.indexOf(i);
          const black = bi >= 0 ? BLACKS[bi] : undefined;
          return (
            <div key={n.name} className="relative flex-1">
              {black && (
                <button
                  type="button"
                  onPointerDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onPlay(black);
                  }}
                  className={`pointer-events-auto absolute top-0 -right-[36%] z-10 h-full w-[72%] rounded-b-md border border-slate-950 text-[10px] font-bold text-slate-300 ${active.has(black.key) ? "bg-cyan-800" : "bg-slate-900"}`}
                >
                  <span className="absolute right-0 bottom-1 left-0">{black.key.toUpperCase()}</span>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ActionButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <button
      type="button"
      onPointerDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onPress();
      }}
      className="h-14 min-w-14 rounded-2xl border border-slate-600 bg-slate-800 px-3 text-sm font-extrabold text-slate-100 shadow-lg"
    >
      {label}
    </button>
  );
}
