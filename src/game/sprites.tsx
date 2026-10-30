import { INSTRUMENTS } from "./data";
import type { CharacterDef } from "./types";

export function SvgDefs() {
  const glows: [string, string, string][] = [
    ["goon", "#fca5a5", "#b91c1c"],
    ["thug", "#c4b5fd", "#5b21b6"],
    ["linebacker", "#93c5fd", "#1e3a8a"],
    ["quarterback", "#7dd3fc", "#0369a1"],
    ["angry_student", "#fdba74", "#ea580c"],
    ["minion", "#fcd34d", "#b45309"],
    ["soundproofer", "#cbd5e1", "#334155"],
    ["ally", "#93c5fd", "#2563eb"],
    ["brainrot_kid", "#bef264", "#4d7c0f"],
    ["boss", "#fecaca", "#991b1b"],
  ];
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        {glows.map(([id, a, b]) => (
          <radialGradient key={id} id={`glow-${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} />
            <stop offset="100%" stopColor={b} />
          </radialGradient>
        ))}
      </defs>
    </svg>
  );
}

export function RenderShape({ shape, hex = "#fff" }: { shape: string; hex?: string }) {
  if (shape === "flute") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect x="8" y="44" width="84" height="12" rx="6" fill={hex} />
        <circle cx="22" cy="50" r="3" fill="#0f172a" />
        <circle cx="40" cy="50" r="3" fill="#0f172a" />
        <circle cx="58" cy="50" r="3" fill="#0f172a" />
      </svg>
    );
  }
  if (["clarinet", "oboe", "bassoon", "bassClarinet", "contrabassOboe", "contrabassBassoon"].includes(shape)) {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect x="44" y="8" width="12" height="78" rx="4" fill={hex} />
        <polygon points="40,86 60,86 50,100" fill={hex} />
        <rect x="40" y="30" width="20" height="4" fill="#f8fafc" opacity="0.7" />
        <rect x="40" y="48" width="20" height="4" fill="#f8fafc" opacity="0.7" />
      </svg>
    );
  }
  if (shape === "sax" || shape === "sax_straight" || shape === "contrabassSax") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <path d="M50 8 C50 48 50 68 50 74 C50 92 28 92 28 92" fill="none" stroke={hex} strokeWidth="14" strokeLinecap="round" />
        <ellipse cx="28" cy="90" rx="16" ry="12" fill={hex} />
      </svg>
    );
  }
  if (shape === "trumpet") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect x="16" y="42" width="48" height="14" rx="4" fill={hex} />
        <polygon points="64,34 92,24 92,74 64,64" fill={hex} />
        <rect x="34" y="30" width="8" height="16" rx="2" fill={hex} />
      </svg>
    );
  }
  if (shape === "horn" || shape === "mellophone") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="48" cy="46" r="26" fill="none" stroke={hex} strokeWidth="10" />
        <path d="M26 58 Q16 78 34 92" fill="none" stroke={hex} strokeWidth="10" strokeLinecap="round" />
        <ellipse cx="36" cy="92" rx="12" ry="8" fill={hex} />
      </svg>
    );
  }
  if (shape === "tuba" || shape === "sousaphone") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect x="28" y="38" width="36" height="48" rx="18" fill="none" stroke={hex} strokeWidth="10" />
        <path d="M64 52 Q88 46 88 22" fill="none" stroke={hex} strokeWidth="12" strokeLinecap="round" />
        <ellipse cx="88" cy="18" rx="16" ry="10" fill={hex} />
      </svg>
    );
  }
  if (shape === "trombone" || shape === "contrabassTrombone") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect x="28" y="42" width="62" height="12" rx="6" fill={hex} />
        <polygon points="6,34 30,42 30,54 6,62" fill={hex} />
      </svg>
    );
  }
  if (shape === "triangle") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <polygon points="50,16 86,84 14,84" fill="none" stroke={hex} strokeWidth="8" />
        <line x1="78" y1="28" x2="78" y2="70" stroke={hex} strokeWidth="5" />
      </svg>
    );
  }
  if (shape === "gun" || shape === "bullet") {
    return (
      <svg viewBox="0 0 40 20" className="h-full w-full">
        <rect x="2" y="6" width="22" height="8" rx="2" fill={hex} />
        <path d="M24 6 L36 10 L24 14 Z" fill="#f59e0b" />
      </svg>
    );
  }
  if (shape === "egg") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <ellipse cx="50" cy="52" rx="28" ry="36" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
      </svg>
    );
  }
  if (shape === "football") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="42" fill="#f8fafc" stroke="#0f172a" strokeWidth="3" />
        <polygon points="50,22 61,32 57,46 43,46 39,32" fill="#0f172a" />
        <polygon points="50,78 39,68 43,54 57,54 61,68" fill="#0f172a" />
        <polygon points="22,50 32,39 46,43 46,57 32,61" fill="#0f172a" />
        <polygon points="78,50 68,61 54,57 54,43 68,39" fill="#0f172a" />
        <polygon points="30,28 40,22 46,32 36,38" fill="#0f172a" />
        <polygon points="70,28 60,22 54,32 64,38" fill="#0f172a" />
        <polygon points="30,72 36,62 46,68 40,78" fill="#0f172a" />
        <polygon points="70,72 64,62 54,68 60,78" fill="#0f172a" />
      </svg>
    );
  }
  if (shape === "explosion") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <path d="M50 4 L62 36 L96 28 L70 52 L92 90 L54 70 L18 96 L34 58 L4 40 L40 44 Z" fill={hex} />
      </svg>
    );
  }
  if (shape === "splat") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <path d="M50 16 Q72 10 82 32 Q100 50 80 70 Q68 92 50 80 Q30 94 18 70 Q2 48 22 30 Q32 8 50 16 Z" fill={hex} />
      </svg>
    );
  }
  if (shape === "hit") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <path d="M20 20 L80 80 M80 20 L20 80" stroke={hex} strokeWidth="12" strokeLinecap="round" />
      </svg>
    );
  }
  if (shape === "slash") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <path d="M15 70 Q50 10 85 40" fill="none" stroke={hex} strokeWidth="10" strokeLinecap="round" />
        <path d="M20 78 Q55 28 88 52" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (shape === "dog") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <ellipse cx="50" cy="68" rx="18" ry="22" fill="#78350f" />
        <circle cx="50" cy="36" r="16" fill="#78350f" />
        <ellipse cx="50" cy="22" rx="7" ry="8" fill="#451a03" />
        <circle cx="44" cy="32" r="2.4" fill="#0f172a" />
        <circle cx="56" cy="32" r="2.4" fill="#0f172a" />
        <ellipse cx="40" cy="16" rx="5" ry="9" fill="#451a03" />
        <ellipse cx="60" cy="16" rx="5" ry="9" fill="#451a03" />
      </svg>
    );
  }
  if (shape === "drum") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <ellipse cx="50" cy="62" rx="34" ry="16" fill={hex} stroke="#0f172a" strokeWidth="3" />
        <rect x="16" y="40" width="68" height="22" fill={hex} stroke="#0f172a" strokeWidth="3" />
        <ellipse cx="50" cy="40" rx="34" ry="16" fill="#f8fafc" stroke="#0f172a" strokeWidth="3" />
        <line x1="28" y1="18" x2="40" y2="40" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
        <line x1="72" y1="18" x2="60" y2="40" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (shape === "cymbal") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <ellipse cx="34" cy="54" rx="28" ry="12" fill={hex} stroke="#0f172a" strokeWidth="3" transform="rotate(-28 34 54)" />
        <ellipse cx="66" cy="46" rx="28" ry="12" fill="#fef9c3" stroke="#0f172a" strokeWidth="3" transform="rotate(24 66 46)" />
      </svg>
    );
  }
  if (shape === "tambourine") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="32" fill="none" stroke={hex} strokeWidth="12" />
        <circle cx="50" cy="50" r="16" fill="#f8fafc" stroke="#0f172a" strokeWidth="3" />
        <circle cx="22" cy="36" r="5" fill="#fbbf24" />
        <circle cx="78" cy="36" r="5" fill="#fbbf24" />
        <circle cx="22" cy="66" r="5" fill="#fbbf24" />
        <circle cx="78" cy="66" r="5" fill="#fbbf24" />
      </svg>
    );
  }
  if (shape === "cowbell") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <path d="M32 28 H68 L78 82 H22 Z" fill={hex} stroke="#0f172a" strokeWidth="3" />
        <rect x="40" y="16" width="20" height="14" rx="3" fill="#44403c" />
        <rect x="28" y="74" width="44" height="8" rx="2" fill="#1c1917" />
      </svg>
    );
  }
  if (shape === "mallet") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect x="18" y="62" width="64" height="14" rx="4" fill={hex} stroke="#0f172a" strokeWidth="3" />
        <rect x="18" y="40" width="64" height="14" rx="4" fill="#f8fafc" stroke="#0f172a" strokeWidth="3" />
        <line x1="36" y1="18" x2="30" y2="40" stroke="#0f172a" strokeWidth="4" />
        <circle cx="38" cy="16" r="6" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
      </svg>
    );
  }
  if (shape === "harmonica") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect x="12" y="36" width="76" height="28" rx="6" fill={hex} stroke="#0f172a" strokeWidth="3" />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x={20 + i * 8} y="46" width="4" height="10" fill="#0f172a" />
        ))}
      </svg>
    );
  }
  if (shape === "whistle") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect x="18" y="44" width="46" height="12" rx="6" fill={hex} stroke="#0f172a" strokeWidth="3" />
        <circle cx="70" cy="50" r="14" fill={hex} stroke="#0f172a" strokeWidth="3" />
        <circle cx="74" cy="46" r="4" fill="#0f172a" />
      </svg>
    );
  }
  if (shape === "accordion") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect x="8" y="28" width="22" height="44" rx="4" fill={hex} stroke="#0f172a" strokeWidth="3" />
        <rect x="70" y="28" width="22" height="44" rx="4" fill={hex} stroke="#0f172a" strokeWidth="3" />
        <path d="M30 34 H70 M30 44 H70 M30 54 H70 M30 64 H70" stroke="#0f172a" strokeWidth="4" />
      </svg>
    );
  }
  if (shape === "bagpipe") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <ellipse cx="48" cy="58" rx="22" ry="16" fill={hex} stroke="#0f172a" strokeWidth="3" />
        <rect x="40" y="18" width="8" height="36" fill="#1c1917" />
        <rect x="54" y="22" width="6" height="30" fill="#1c1917" />
        <rect x="28" y="26" width="6" height="26" fill="#1c1917" />
        <path d="M64 62 Q86 70 80 88" fill="none" stroke="#1c1917" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }
  if (shape === "violin" || shape === "uke") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <ellipse cx="50" cy="62" rx="18" ry="22" fill={hex} stroke="#0f172a" strokeWidth="3" />
        <rect x="46" y="16" width="8" height="32" fill="#44403c" />
        <circle cx="50" cy="64" r="4" fill="#0f172a" />
        <line x1="70" y1="20" x2="78" y2="78" stroke="#0f172a" strokeWidth="3" />
      </svg>
    );
  }
  if (shape === "harp") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <path d="M30 82 Q18 40 48 16 L62 16 Q40 40 46 82 Z" fill={hex} stroke="#0f172a" strokeWidth="3" />
        <path d="M40 28 V74 M48 24 V76 M56 28 V72" stroke="#0f172a" strokeWidth="2" />
      </svg>
    );
  }
  if (shape === "megaphone") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect x="12" y="42" width="36" height="16" rx="4" fill={hex} stroke="#0f172a" strokeWidth="3" />
        <polygon points="48,36 86,22 86,78 48,64" fill={hex} stroke="#0f172a" strokeWidth="3" />
      </svg>
    );
  }
  if (shape === "synth") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect x="14" y="28" width="72" height="44" rx="8" fill="#0f172a" stroke={hex} strokeWidth="4" />
        {Array.from({ length: 7 }).map((_, i) => (
          <rect key={i} x={22 + i * 8} y="48" width="5" height="16" rx="1" fill={i % 2 ? "#334155" : hex} />
        ))}
        <circle cx="28" cy="38" r="4" fill={hex} />
        <circle cx="42" cy="38" r="4" fill="#f8fafc" />
      </svg>
    );
  }
  if (shape === "door") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect x="22" y="8" width="56" height="88" rx="4" fill="#78350f" />
        <rect x="30" y="18" width="40" height="28" fill="#451a03" />
        <rect x="30" y="52" width="40" height="32" fill="#451a03" />
        <circle cx="62" cy="58" r="3" fill="#fbbf24" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 50 50" className="h-full w-full">
      <ellipse cx="14" cy="34" rx="8" ry="6" fill={hex} transform="rotate(-20 14 34)" />
      <rect x="20" y="10" width="3" height="24" fill={hex} />
      <path d="M22 10 Q36 8 34 22 Q26 16 23 16" fill={hex} />
    </svg>
  );
}

const POINTS_RIGHT = new Set([
  "flute",
  "trumpet",
  "trombone",
  "contrabassTrombone",
  "gun",
  "bullet",
  "whistle",
  "harmonica",
  "violin",
  "uke",
  "megaphone",
  "accordion",
]);

/** Sprites face up in local space. Add 90° so the nose matches atan2 movement. */
export function entityFacingDeg(angle: number) {
  return (angle * 180) / Math.PI + 90;
}

export function projectileFacingDeg(shape: string, angle: number) {
  const deg = (angle * 180) / Math.PI;
  return POINTS_RIGHT.has(shape) ? deg : deg + 90;
}

type Look = {
  skin: string;
  hair: string;
  hairStyle: string;
  shirt: string;
  pants: string;
  shoes: string;
  trim: string;
};

const LOOKS: Record<string, Look> = {
  rocky: { skin: "#f6c28b", hair: "#3b2416", hairStyle: "spiky", shirt: "#ef4444", pants: "#1e293b", shoes: "#0f172a", trim: "#fecaca" },
  melody: { skin: "#f3c7a3", hair: "#db2777", hairStyle: "twin", shirt: "#fb7185", pants: "#4c1d95", shoes: "#f8fafc", trim: "#fbcfe8" },
  harmony: { skin: "#e8b48a", hair: "#1e3a8a", hairStyle: "bob", shirt: "#3b82f6", pants: "#1e293b", shoes: "#0f172a", trim: "#bfdbfe" },
  rhythm: { skin: "#c68642", hair: "#1c1917", hairStyle: "buzz", shirt: "#fb923c", pants: "#44403c", shoes: "#111827", trim: "#fdba74" },
  treble: { skin: "#f6d0b1", hair: "#ca8a04", hairStyle: "ponytail", shirt: "#facc15", pants: "#854d0e", shoes: "#fff7ed", trim: "#fef08a" },
  bass: { skin: "#8d5524", hair: "#0f172a", hairStyle: "buzz", shirt: "#57534e", pants: "#1c1917", shoes: "#111827", trim: "#d6d3d1" },
  keli: { skin: "#f1c27d", hair: "#b45309", hairStyle: "curly", shirt: "#f59e0b", pants: "#78350f", shoes: "#fef3c7", trim: "#fde68a" },
  kai: { skin: "#e0ac69", hair: "#111827", hairStyle: "cap", shirt: "#ca8a04", pants: "#1f2937", shoes: "#111827", trim: "#fde68a" },
  kashu: { skin: "#f6c28b", hair: "#854d0e", hairStyle: "afro", shirt: "#eab308", pants: "#422006", shoes: "#fef3c7", trim: "#facc15" },
  eason: { skin: "#f3d2b5", hair: "#cbd5e1", hairStyle: "long", shirt: "#e2e8f0", pants: "#334155", shoes: "#0f172a", trim: "#67e8f9" },
  thomas: { skin: "#d4a574", hair: "#7c2d12", hairStyle: "spiky", shirt: "#eab308", pants: "#1c1917", shoes: "#111827", trim: "#fde047" },
  javis: { skin: "#c68642", hair: "#27272a", hairStyle: "bangs", shirt: "#71717a", pants: "#18181b", shoes: "#111827", trim: "#e4e4e7" },
  alton: { skin: "#f6c28b", hair: "#7f1d1d", hairStyle: "mohawk", shirt: "#b91c1c", pants: "#111827", shoes: "#111827", trim: "#fecaca" },
  socialist_rocky: { skin: "#f6c28b", hair: "#3b2416", hairStyle: "spiky", shirt: "#e11d48", pants: "#1e293b", shoes: "#0f172a", trim: "#fda4af" },
  harry: { skin: "#e8b48a", hair: "#44403c", hairStyle: "beanie", shirt: "#a8a29e", pants: "#44403c", shoes: "#1c1917", trim: "#d6d3d1" },
  tacops: { skin: "#c4a484", hair: "#14532d", hairStyle: "hood", shirt: "#065f46", pants: "#022c22", shoes: "#111827", trim: "#34d399" },
  quinn: { skin: "#f3c7a3", hair: "#0f766e", hairStyle: "bob", shirt: "#14b8a6", pants: "#134e4a", shoes: "#f8fafc", trim: "#99f6e4" },
  nora: { skin: "#e0ac69", hair: "#be123c", hairStyle: "ponytail", shirt: "#fb7185", pants: "#1e1b4b", shoes: "#f8fafc", trim: "#fda4af" },
  piper: { skin: "#f6d0b1", hair: "#0284c7", hairStyle: "twin", shirt: "#7dd3fc", pants: "#0c4a6e", shoes: "#f8fafc", trim: "#e0f2fe" },
  milo: { skin: "#8d5524", hair: "#312e81", hairStyle: "curly", shirt: "#a78bfa", pants: "#312e81", shoes: "#eef2ff", trim: "#ddd6fe" },
  sage: { skin: "#f1c27d", hair: "#334155", hairStyle: "bun", shirt: "#0f172a", pants: "#1e293b", shoes: "#111827", trim: "#f8fafc" },
  luna: { skin: "#f6c28b", hair: "#6d28d9", hairStyle: "long", shirt: "#818cf8", pants: "#312e81", shoes: "#f8fafc", trim: "#e0e7ff" },
  otto: { skin: "#d4a574", hair: "#44403c", hairStyle: "bangs", shirt: "#44403c", pants: "#1c1917", shoes: "#111827", trim: "#d6d3d1" },
  riley: { skin: "#c68642", hair: "#1c1917", hairStyle: "buzz", shirt: "#fbbf24", pants: "#78350f", shoes: "#111827", trim: "#fde68a" },
  coco: { skin: "#6b3a1f", hair: "#ea580c", hairStyle: "afro", shirt: "#ea580c", pants: "#431407", shoes: "#fff7ed", trim: "#fdba74" },
  bea: { skin: "#e8b48a", hair: "#7f1d1d", hairStyle: "braids", shirt: "#7f1d1d", pants: "#1c1917", shoes: "#111827", trim: "#fecaca" },
  nova: { skin: "#d7f7ff", hair: "#0891b2", hairStyle: "mohawk", shirt: "#082f49", pants: "#0e7490", shoes: "#ecfeff", trim: "#67e8f9" },
};

function lookOf(character: CharacterDef): Look {
  return (
    LOOKS[character.id] ?? {
      skin: "#f6c28b",
      hair: "#1c1917",
      hairStyle: "spiky",
      shirt: character.hex,
      pants: "#1e293b",
      shoes: "#0f172a",
      trim: "#ffffff",
    }
  );
}

function HairAccent({ kind, color, cx, cy, r }: { kind: string; color: string; cx: number; cy: number; r: number }) {
  if (kind === "spiky") {
    return (
      <g fill={color}>
        <polygon points={`${cx},${cy - r - 8} ${cx - 6},${cy - 2} ${cx + 6},${cy - 2}`} />
        <polygon points={`${cx - 12},${cy - r + 2} ${cx - 16},${cy + 4} ${cx - 4},${cy}`} />
        <polygon points={`${cx + 12},${cy - r + 2} ${cx + 16},${cy + 4} ${cx + 4},${cy}`} />
      </g>
    );
  }
  if (kind === "ponytail") return <ellipse cx={cx + r * 0.2} cy={cy + r * 1.35} rx="6" ry="12" fill={color} />;
  if (kind === "mohawk") return <polygon points={`${cx},${cy - r - 12} ${cx - 5},${cy - 2} ${cx + 5},${cy - 2}`} fill={color} />;
  if (kind === "twin") {
    return (
      <g fill={color}>
        <circle cx={cx - r - 1} cy={cy + 2} r="7" />
        <circle cx={cx + r + 1} cy={cy + 2} r="7" />
      </g>
    );
  }
  if (kind === "bun") return <circle cx={cx} cy={cy + r + 4} r="7" fill={color} />;
  if (kind === "long" || kind === "braids") {
    return (
      <g fill={color}>
        <rect x={cx - r - 1} y={cy} width="6" height={r + 12} rx="3" />
        <rect x={cx + r - 5} y={cy} width="6" height={r + 12} rx="3" />
      </g>
    );
  }
  if (kind === "cap") {
    return <path d={`M${cx - r} ${cy - 4} Q${cx} ${cy - r - 10} ${cx + r} ${cy - 4} L${cx + r + 8} ${cy} L${cx - r - 2} ${cy} Z`} fill={color} stroke="#0f172a" strokeWidth="1.5" />;
  }
  if (kind === "beanie") return <path d={`M${cx - r + 2} ${cy - 2} Q${cx} ${cy - r - 14} ${cx + r - 2} ${cy - 2} Z`} fill={color} stroke="#0f172a" strokeWidth="1.5" />;
  if (kind === "hood") return <path d={`M${cx - r - 6} ${cy + 8} Q${cx} ${cy - r - 16} ${cx + r + 6} ${cy + 8} Z`} fill={color} stroke="#0f172a" strokeWidth="1.5" />;
  if (kind === "bob" || kind === "bangs") {
    return <path d={`M${cx - r - 1} ${cy - 6} Q${cx} ${cy - r - 6} ${cx + r + 1} ${cy - 6}`} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" />;
  }
  if (kind === "afro") return null;
  if (kind === "curly") {
    return (
      <g fill={color}>
        <circle cx={cx - 10} cy={cy - r + 2} r="5" />
        <circle cx={cx + 10} cy={cy - r + 2} r="5" />
        <circle cx={cx} cy={cy - r - 1} r="5" />
      </g>
    );
  }
  return null;
}

function HornForward({ family, hex, playing }: { family: string; hex: string; playing: boolean }) {
  const wide = ["trumpet", "trombone", "horn", "tuba", "sousaphone", "megaphone", "sax", "sax_straight"].includes(family);
  const round = family === "drum" || family === "cymbal" || family === "tambourine";
  return (
    <g transform={`translate(50 12) scale(${playing ? 1.1 : 1})`}>
      {round ? (
        <ellipse cx="0" cy="4" rx="14" ry="7" fill={hex} stroke="#0f172a" strokeWidth="2" />
      ) : (
        <>
          <rect x="-4" y="4" width="8" height="20" rx="3" fill={hex} stroke="#0f172a" strokeWidth="1.6" />
          <ellipse cx="0" cy="3" rx={wide ? 12 : 7} ry="5" fill={hex} stroke="#0f172a" strokeWidth="1.6" />
        </>
      )}
    </g>
  );
}

export function CustomPlayerSVG({
  character,
  instrumentId,
  isPlaying,
  isWalking,
  z = 0,
  view = "play",
}: {
  character: CharacterDef;
  instrumentId: string;
  isPlaying: boolean;
  isWalking: boolean;
  z?: number;
  view?: "play" | "card";
}) {
  const inst = INSTRUMENTS[instrumentId];
  const look = lookOf(character);
  const lift = Math.min(22, z / 8);
  const swing = isWalking ? Math.sin(Date.now() / 120) * 5 : 0;
  const family = inst?.family ?? "clarinet";
  const hex = inst?.hex ?? character.hex;
  const body = (
    <>
      <ellipse cx="50" cy="84" rx="26" ry="9" fill="rgba(0,0,0,0.35)" />
      <ellipse cx={40 - swing} cy="74" rx="9" ry="5" fill={look.shoes} stroke="#0f172a" strokeWidth="1.4" />
      <ellipse cx={60 + swing} cy="74" rx="9" ry="5" fill={look.shoes} stroke="#0f172a" strokeWidth="1.4" />
      <rect x={34 - swing} y="62" width="12" height="14" rx="5" fill={look.pants} stroke="#0f172a" strokeWidth="1.4" />
      <rect x={54 + swing} y="62" width="12" height="14" rx="5" fill={look.pants} stroke="#0f172a" strokeWidth="1.4" />
      <ellipse cx="22" cy="48" rx="10" ry="6" fill={look.skin} stroke="#0f172a" strokeWidth="1.5" transform="rotate(-18 22 48)" />
      <ellipse cx="78" cy="48" rx="10" ry="6" fill={look.skin} stroke="#0f172a" strokeWidth="1.5" transform="rotate(18 78 48)" />
      <ellipse cx="50" cy="50" rx="24" ry="16" fill={look.shirt} stroke="#0f172a" strokeWidth="2" />
      <ellipse cx="50" cy="46" rx="8" ry="4" fill={look.trim} />
      <path d="M34 56 H66" stroke={look.pants} strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="32" r="16" fill={look.hair} stroke="#0f172a" strokeWidth="1.5" />
      <circle cx="50" cy="28" r="12" fill={look.skin} stroke="#0f172a" strokeWidth="1.6" />
      <path d="M36 34 Q50 50 64 34 Q50 42 36 34" fill={look.hair} />
      <HairAccent kind={look.hairStyle} color={look.hair} cx={50} cy={40} r={12} />
      <ellipse cx="50" cy="18" rx="3" ry="4" fill="#c4845a" stroke="#0f172a" strokeWidth="1" />
      <HornForward family={family} hex={hex} playing={isPlaying} />
    </>
  );

  if (view === "card") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
        <g transform={`translate(0 ${-lift * 0.3})`}>{body}</g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
      <g transform={`translate(0 ${-lift})`}>{body}</g>
    </svg>
  );
}

const ENEMY_LOOK: Record<string, { body: string; skin: string; hair: string; mark: string }> = {
  goon: { body: "#ef4444", skin: "#f6c28b", hair: "#7f1d1d", mark: "ears" },
  thug: { body: "#6d28d9", skin: "#e0ac69", hair: "#1e1b4b", mark: "spike" },
  soundproofer: { body: "#64748b", skin: "#f3d2b5", hair: "#334155", mark: "foam" },
  linebacker: { body: "#1d4ed8", skin: "#d4a574", hair: "#1e3a8a", mark: "helmet" },
  quarterback: { body: "#0284c7", skin: "#f6d0b1", hair: "#0c4a6e", mark: "stripe" },
  striker: { body: "#16a34a", skin: "#f6c28b", hair: "#14532d", mark: "band" },
  kicker: { body: "#1d4ed8", skin: "#e0ac69", hair: "#1e3a8a", mark: "kick" },
  angry_student: { body: "#ea580c", skin: "#f6c28b", hair: "#9a3412", mark: "none" },
  minion: { body: "#f59e0b", skin: "#fde68a", hair: "#92400e", mark: "badge" },
  ally: { body: "#2563eb", skin: "#f3c7a3", hair: "#1e3a8a", mark: "none" },
  brainrot_kid: { body: "#65a30d", skin: "#f6c28b", hair: "#84cc16", mark: "wild" },
};

function MonsterSVG({ kind, isHit }: { kind: string; isHit?: boolean }) {
  const bob = isHit ? "translate(2 0)" : undefined;
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
      <g transform={bob}>
        <ellipse cx="50" cy="86" rx="24" ry="8" fill="rgba(0,0,0,0.4)" />
        {kind === "bat" && (
          <>
            <ellipse cx="22" cy="50" rx="16" ry="8" fill="#4c1d95" stroke="#0f172a" strokeWidth="1.6" transform="rotate(-20 22 50)" />
            <ellipse cx="78" cy="50" rx="16" ry="8" fill="#4c1d95" stroke="#0f172a" strokeWidth="1.6" transform="rotate(20 78 50)" />
            <ellipse cx="50" cy="54" rx="20" ry="16" fill="#6d28d9" stroke="#0f172a" strokeWidth="2" />
            <circle cx="50" cy="32" r="14" fill="#5b21b6" stroke="#0f172a" strokeWidth="1.6" />
            <polygon points="32,30 24,8 40,24" fill="#4c1d95" stroke="#0f172a" strokeWidth="1.3" />
            <polygon points="68,30 76,8 60,24" fill="#4c1d95" stroke="#0f172a" strokeWidth="1.3" />
            <circle cx="44" cy="30" r="3" fill="#fde68a" />
            <circle cx="56" cy="30" r="3" fill="#fde68a" />
            <path d="M46 38 L50 42 L54 38" fill="none" stroke="#f8fafc" strokeWidth="1.6" />
          </>
        )}
        {kind === "ghost" && (
          <>
            <path d="M28 78 Q22 50 34 36 Q50 16 66 36 Q78 50 72 78 Q64 70 58 80 Q50 68 42 80 Q36 70 28 78 Z" fill="#e9d5ff" stroke="#0f172a" strokeWidth="2" />
            <ellipse cx="42" cy="42" rx="4" ry="6" fill="#1e1b4b" />
            <ellipse cx="58" cy="42" rx="4" ry="6" fill="#1e1b4b" />
            <ellipse cx="50" cy="54" rx="5" ry="4" fill="#1e1b4b" />
          </>
        )}
        {kind === "mummy" && (
          <>
            <ellipse cx="36" cy="74" rx="8" ry="5" fill="#e7e5e4" stroke="#0f172a" strokeWidth="1.3" />
            <ellipse cx="64" cy="74" rx="8" ry="5" fill="#e7e5e4" stroke="#0f172a" strokeWidth="1.3" />
            <ellipse cx="50" cy="54" rx="22" ry="16" fill="#d6d3d1" stroke="#0f172a" strokeWidth="2" />
            <circle cx="50" cy="30" r="14" fill="#e7e5e4" stroke="#0f172a" strokeWidth="1.6" />
            <path d="M32 48 H68 M34 58 H66 M36 34 H64 M38 24 H62" stroke="#a8a29e" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="44" cy="30" rx="3" ry="2" fill="#0f172a" />
            <ellipse cx="56" cy="30" rx="3" ry="2" fill="#0f172a" />
          </>
        )}
        {kind === "wolf" && (
          <>
            <ellipse cx="50" cy="78" rx="8" ry="5" fill="#94a3b8" stroke="#0f172a" strokeWidth="1.2" />
            <ellipse cx="50" cy="56" rx="22" ry="16" fill="#64748b" stroke="#0f172a" strokeWidth="2" />
            <circle cx="50" cy="34" r="14" fill="#94a3b8" stroke="#0f172a" strokeWidth="1.6" />
            <polygon points="30,32 22,12 40,26" fill="#475569" stroke="#0f172a" strokeWidth="1.3" />
            <polygon points="70,32 78,12 60,26" fill="#475569" stroke="#0f172a" strokeWidth="1.3" />
            <ellipse cx="50" cy="18" rx="6" ry="8" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.3" />
            <circle cx="44" cy="32" r="2.4" fill="#0f172a" />
            <circle cx="56" cy="32" r="2.4" fill="#0f172a" />
            <circle cx="50" cy="16" r="2" fill="#0f172a" />
          </>
        )}
        {kind === "skull" && (
          <>
            <ellipse cx="50" cy="58" rx="20" ry="14" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2" />
            <path d="M40 52 H46 M54 52 H60 M42 62 H58" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="50" cy="30" r="16" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.8" />
            <ellipse cx="43" cy="30" rx="4" ry="5" fill="#0f172a" />
            <ellipse cx="57" cy="30" rx="4" ry="5" fill="#0f172a" />
            <path d="M46 40 H54" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
          </>
        )}
        {kind === "pumpkin" && (
          <>
            <ellipse cx="50" cy="56" rx="24" ry="20" fill="#f97316" stroke="#0f172a" strokeWidth="2" />
            <path d="M50 36 V22" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="50" cy="20" rx="6" ry="3" fill="#16a34a" stroke="#0f172a" strokeWidth="1" />
            <path d="M38 48 L44 56 L38 56 Z M62 48 L56 56 L62 56 Z" fill="#0f172a" />
            <path d="M42 66 Q50 58 58 66" fill="none" stroke="#0f172a" strokeWidth="2" />
          </>
        )}
        {kind === "imp" && (
          <>
            <path d="M70 78 Q86 70 78 58" fill="none" stroke="#b91c1c" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="50" cy="56" rx="20" ry="15" fill="#ef4444" stroke="#0f172a" strokeWidth="2" />
            <circle cx="50" cy="32" r="13" fill="#f87171" stroke="#0f172a" strokeWidth="1.6" />
            <polygon points="36,26 32,10 44,22" fill="#fecaca" stroke="#0f172a" strokeWidth="1.2" />
            <polygon points="64,26 68,10 56,22" fill="#fecaca" stroke="#0f172a" strokeWidth="1.2" />
            <circle cx="45" cy="32" r="2.4" fill="#0f172a" />
            <circle cx="55" cy="32" r="2.4" fill="#0f172a" />
            <path d="M44 40 Q50 46 56 40" fill="none" stroke="#0f172a" strokeWidth="1.6" />
          </>
        )}
        {kind !== "bat" && kind !== "ghost" && kind !== "mummy" && kind !== "wolf" && kind !== "skull" && kind !== "pumpkin" && kind !== "imp" && (
          <>
            <ellipse cx="50" cy="52" rx="28" ry="24" fill="#84cc16" stroke="#0f172a" strokeWidth="2" />
            <ellipse cx="36" cy="64" rx="6" ry="4" fill="#65a30d" />
            <ellipse cx="66" cy="70" rx="5" ry="3" fill="#65a30d" />
            <circle cx="50" cy="46" r="8" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.4" />
            <circle cx="50" cy="46" r="3.5" fill="#0f172a" />
            <path d="M42 60 Q50 68 58 60" fill="none" stroke="#0f172a" strokeWidth="1.8" />
          </>
        )}
      </g>
    </svg>
  );
}

export function CustomEnemySVG({ typeId, isHit, monster }: { typeId: string; isHit?: boolean; monster?: boolean }) {
  const monsterKind: Record<string, string> = {
    goon: "bat",
    thug: "ghost",
    soundproofer: "mummy",
    linebacker: "wolf",
    quarterback: "skull",
    striker: "pumpkin",
    kicker: "imp",
    angry_student: "slime",
    minion: "imp",
    brainrot_kid: "slime",
  };
  if (monster && typeId !== "ally") return <MonsterSVG kind={monsterKind[typeId] ?? "ghost"} isHit={isHit} />;
  const look = ENEMY_LOOK[typeId] ?? { body: "#ef4444", skin: "#fcd34d", hair: "#7f1d1d", mark: "none" };
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
      <g transform={isHit ? "translate(2 0)" : undefined}>
        <ellipse cx="50" cy="84" rx="24" ry="8" fill="rgba(0,0,0,0.3)" />
        <ellipse cx="38" cy="74" rx="8" ry="5" fill="#0f172a" />
        <ellipse cx="62" cy="74" rx="8" ry="5" fill="#0f172a" />
        <ellipse cx="20" cy="50" rx="9" ry="5" fill={look.skin} stroke="#0f172a" strokeWidth="1.4" />
        <ellipse cx="80" cy="50" rx="9" ry="5" fill={look.skin} stroke="#0f172a" strokeWidth="1.4" />
        <ellipse cx="50" cy="52" rx="22" ry="15" fill={look.body} stroke="#0f172a" strokeWidth="2" />
        <circle cx="50" cy="32" r="15" fill={look.hair} stroke="#0f172a" strokeWidth="1.4" />
        <circle cx="50" cy="28" r="11" fill={look.skin} stroke="#0f172a" strokeWidth="1.5" />
        <path d="M37 34 Q50 48 63 34 Q50 40 37 34" fill={look.hair} />
        <ellipse cx="50" cy="18" rx="2.6" ry="3.4" fill="#c4845a" stroke="#0f172a" strokeWidth="0.8" />
        <rect x="47" y="4" width="6" height="12" rx="2" fill="#94a3b8" stroke="#0f172a" strokeWidth="1" />
        {look.mark === "ears" && (
          <g>
            <rect x="18" y="26" width="10" height="12" rx="3" fill={look.body} stroke="#0f172a" strokeWidth="1.3" />
            <rect x="72" y="26" width="10" height="12" rx="3" fill={look.body} stroke="#0f172a" strokeWidth="1.3" />
          </g>
        )}
        {look.mark === "spike" && <polygon points="50,6 40,22 60,22" fill="#4c1d95" stroke="#0f172a" strokeWidth="1.3" />}
        {look.mark === "foam" && (
          <g fill="#e2e8f0" stroke="#0f172a" strokeWidth="1">
            <rect x="38" y="46" width="8" height="8" />
            <rect x="48" y="46" width="8" height="8" />
            <rect x="43" y="56" width="8" height="8" />
          </g>
        )}
        {look.mark === "helmet" && <path d="M34 30 Q50 14 66 30 L64 36 Q50 26 36 36 Z" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1.4" />}
        {look.mark === "stripe" && <path d="M36 48 H64" stroke="#f8fafc" strokeWidth="4" />}
        {look.mark === "band" && <path d="M34 50 H66" stroke="#f8fafc" strokeWidth="5" />}
        {look.mark === "kick" && <circle cx="68" cy="20" r="6" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.3" />}
        {look.mark === "badge" && <circle cx="50" cy="54" r="5" fill="#fde68a" stroke="#0f172a" strokeWidth="1" />}
        {look.mark === "wild" && (
          <g fill="#bef264">
            <circle cx="36" cy="24" r="5" />
            <circle cx="50" cy="16" r="5" />
            <circle cx="64" cy="24" r="5" />
          </g>
        )}
      </g>
    </svg>
  );
}

export function TeacherSVG({ glasses, shirt, isHit, monster }: { glasses: string; shirt: string; isHit?: boolean; monster?: boolean }) {
  if (monster) {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
        <g transform={isHit ? "translate(2 0)" : undefined}>
          <ellipse cx="50" cy="88" rx="30" ry="9" fill="rgba(0,0,0,0.4)" />
          <path d="M22 80 Q18 48 36 36 Q50 22 64 36 Q82 48 78 80 Q64 70 50 84 Q36 70 22 80 Z" fill="#3b0764" stroke="#0f172a" strokeWidth="2" />
          <ellipse cx="50" cy="48" rx="16" ry="12" fill={shirt} stroke="#0f172a" strokeWidth="1.5" />
          <circle cx="50" cy="30" r="14" fill="#d9f99d" stroke="#0f172a" strokeWidth="1.6" />
          <polygon points="34,26 28,8 42,22" fill="#4c1d95" stroke="#0f172a" strokeWidth="1.2" />
          <polygon points="66,26 72,8 58,22" fill="#4c1d95" stroke="#0f172a" strokeWidth="1.2" />
          <ellipse cx="44" cy="30" rx="3.2" ry="4" fill="#fde68a" stroke="#0f172a" strokeWidth="0.8" />
          <ellipse cx="56" cy="30" rx="3.2" ry="4" fill="#fde68a" stroke="#0f172a" strokeWidth="0.8" />
          <path d="M44 38 Q50 44 56 38" fill="none" stroke="#0f172a" strokeWidth="1.6" />
          <rect x="47" y="8" width="6" height="14" rx="2" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
      <g transform={isHit ? "translate(2 0)" : undefined}>
        <ellipse cx="50" cy="86" rx="28" ry="9" fill="rgba(0,0,0,0.32)" />
        <ellipse cx="36" cy="76" rx="9" ry="5" fill="#0f172a" />
        <ellipse cx="64" cy="76" rx="9" ry="5" fill="#0f172a" />
        <ellipse cx="18" cy="52" rx="10" ry="6" fill="#fcd34d" stroke="#0f172a" strokeWidth="1.4" />
        <ellipse cx="82" cy="52" rx="10" ry="6" fill="#fcd34d" stroke="#0f172a" strokeWidth="1.4" />
        <ellipse cx="50" cy="54" rx="26" ry="17" fill={shirt} stroke="#0f172a" strokeWidth="2" />
        <ellipse cx="50" cy="50" rx="7" ry="4" fill="#f8fafc" />
        <circle cx="50" cy="32" r="16" fill="#334155" stroke="#0f172a" strokeWidth="1.5" />
        <circle cx="50" cy="28" r="12" fill="#fcd34d" stroke="#0f172a" strokeWidth="1.6" />
        <path d="M36 34 Q50 50 64 34 Q50 42 36 34" fill="#334155" />
        <ellipse cx="50" cy="18" rx="3" ry="4" fill="#d9a066" stroke="#0f172a" strokeWidth="1" />
        <rect x="46" y="2" width="8" height="14" rx="2" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.2" />
        <circle cx="50" cy="2" r="3.5" fill="#fbbf24" stroke="#0f172a" strokeWidth="1" />
        <g fill="none" stroke="#0f172a" strokeWidth={glasses === "thick" ? 3 : 1.8}>
          <path d="M40 24 H60" />
          {glasses !== "sport" && (
            <>
              <circle cx="44" cy="24" r="3.2" />
              <circle cx="56" cy="24" r="3.2" />
            </>
          )}
          {glasses === "sport" && <path d="M38 22 H62" strokeWidth="4" />}
        </g>
      </g>
    </svg>
  );
}
