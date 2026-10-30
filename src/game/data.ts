import type { CharacterDef, InstrumentDef, LevelDef, MissionDef, NoteDef, QuestDef } from "./types";

export const CHARACTERS: CharacterDef[] = [
  { id: "rocky", name: 'Rocky "The Starter"', lore: "Starts with a kazoo, a dood, and a toot. Everything better is earned.", stats: { hpMultiplier: 1, breathRegen: 1, damageMultiplier: 1, speedMultiplier: 1 }, color: "text-red-400", hex: "#ef4444", cost: 0, secret: { name: "Starter Resolve", desc: "Heals 50 HP.", cost: 30, duration: 2 } },
  { id: "melody", name: 'Melody "The Metronome"', lore: "Hears rhythm in the ticking clock.", stats: { hpMultiplier: 0.8, breathRegen: 1.5, damageMultiplier: 1, speedMultiplier: 1.2 }, color: "text-pink-400", hex: "#f472b6", cost: 2500, secret: { name: "Tempo Freeze", desc: "Freezes enemies for 2s.", cost: 40, duration: 2 } },
  { id: "harmony", name: 'Harmony "Perfect Pitch"', lore: "Surviving finals.", stats: { hpMultiplier: 1.2, breathRegen: 1, damageMultiplier: 1, speedMultiplier: 1 }, color: "text-blue-400", hex: "#60a5fa", cost: 3200, secret: { name: "Pitch Perfect", desc: "Destroys enemy projectiles.", cost: 30, duration: 2 } },
  { id: "rhythm", name: 'Rhythm "Brass Lungs"', lore: "Carries the marching band.", stats: { hpMultiplier: 1, breathRegen: 0.7, damageMultiplier: 1.5, speedMultiplier: 0.8 }, color: "text-orange-400", hex: "#fb923c", cost: 3800, secret: { name: "Marching Stomp", desc: "Massive knockback.", cost: 50, duration: 2 } },
  { id: "treble", name: 'Treble "The Swift"', lore: "Moves at presto tempo.", stats: { hpMultiplier: 0.6, breathRegen: 2, damageMultiplier: 0.8, speedMultiplier: 1.5 }, color: "text-yellow-300", hex: "#fde047", cost: 5200, secret: { name: "Presto Dash", desc: "Lightning dash forward.", cost: 20, duration: 1 } },
  { id: "bass", name: 'Bass "The Wall"', lore: "Practically indestructible.", stats: { hpMultiplier: 2, breathRegen: 0.5, damageMultiplier: 1.2, speedMultiplier: 0.6 }, color: "text-stone-400", hex: "#78716c", cost: 9000, secret: { name: "Wall Shield", desc: "Invincible for 5s.", cost: 50, duration: 5 } },
  { id: "keli", name: 'Keli "Jelly King"', lore: "Trombone expert.", stats: { hpMultiplier: 2, breathRegen: 1.5, damageMultiplier: 2, speedMultiplier: 1 }, color: "text-amber-500", hex: "#f59e0b", cost: 16000, secret: { name: "Jelly Bounce", desc: "Fires 8 massive notes.", cost: 40, duration: 2 } },
  { id: "kai", name: 'Kai "From Dubai"', lore: "Euphonium area blasts.", stats: { hpMultiplier: 1.8, breathRegen: 1.5, damageMultiplier: 1, speedMultiplier: 0.7 }, color: "text-yellow-600", hex: "#ca8a04", cost: 18000, secret: { name: "Dubai Wealth", desc: "A massive explosion. Flattens henchmen.", cost: 60, duration: 3 } },
  { id: "kashu", name: 'Kashu "The Jazzy"', lore: "Alto sax improv.", stats: { hpMultiplier: 0.9, breathRegen: 1.2, damageMultiplier: 1.3, speedMultiplier: 1.3 }, color: "text-yellow-400", hex: "#facc15", cost: 11000, secret: { name: "Jazz Improv", desc: "Doubles speed for 4s.", cost: 30, duration: 4 } },
  { id: "eason", name: 'Eason "Wind Rider"', lore: "Flute master.", stats: { hpMultiplier: 0.8, breathRegen: 3, damageMultiplier: 1.8, speedMultiplier: 2 }, color: "text-slate-200", hex: "#e2e8f0", cost: 22000, secret: { name: "Tornado Sweep", desc: "Doubles projectile damage.", cost: 40, duration: 3 } },
  { id: "thomas", name: 'Thomas "The Herald"', lore: "Trumpet burst damage.", stats: { hpMultiplier: 1, breathRegen: 0.8, damageMultiplier: 1.6, speedMultiplier: 1 }, color: "text-yellow-500", hex: "#eab308", cost: 10000, secret: { name: "Herald Call", desc: "+100 max breath.", cost: 45, duration: 4 } },
  { id: "javis", name: 'Javis "The Snake Charmer"', lore: "Clarinet tracking.", stats: { hpMultiplier: 1.1, breathRegen: 1.4, damageMultiplier: 1.1, speedMultiplier: 1.1 }, color: "text-zinc-400", hex: "#a1a1aa", cost: 8500, secret: { name: "Snake Bite", desc: "Hits every enemy on the map.", cost: 35, duration: 2 } },
  { id: "alton", name: 'Alton "The Soloist"', lore: "Quiet, sharp, and plays a mean trombone.", stats: { hpMultiplier: 1.2, breathRegen: 1.5, damageMultiplier: 2, speedMultiplier: 1.3 }, color: "text-red-500", hex: "#b91c1c", cost: 20000, secret: { name: "Red Flash", desc: "A close-range shockwave.", cost: 40, duration: 4 } },
  { id: "socialist_rocky", name: "Rally Rocky", lore: "Brings the whole band in on the downbeat.", stats: { hpMultiplier: 1.5, breathRegen: 1.2, damageMultiplier: 1.5, speedMultiplier: 0.9 }, color: "text-rose-500", hex: "#e11d48", cost: 24000, secret: { name: "Downbeat Slash", desc: "A wide slash around you.", cost: 60, duration: 3 } },
  { id: "harry", name: 'Harry "The Beastmaster"', lore: "Has treats in his pockets.", stats: { hpMultiplier: 1.1, breathRegen: 1.2, damageMultiplier: 1, speedMultiplier: 1.1 }, color: "text-stone-400", hex: "#a8a29e", cost: 19000, secret: { name: "Hound Swarm", desc: "Summons hunting dogs.", cost: 50, duration: 2 } },
  { id: "tacops", name: "Tactical Operation Soldier", lore: "An over-prepared band operative.", stats: { hpMultiplier: 5, breathRegen: 3, damageMultiplier: 4, speedMultiplier: 1.8 }, color: "text-emerald-400", hex: "#34d399", cost: 100000, secret: { name: "Airstrike", desc: "A huge blast on every enemy.", cost: 80, duration: 3 } },
  { id: "quinn", name: 'Quinn "Section Leader"', lore: "Keeps the whole row in time.", stats: { hpMultiplier: 1.15, breathRegen: 1.2, damageMultiplier: 1.15, speedMultiplier: 1.1 }, color: "text-teal-300", hex: "#5eead4", cost: 4500, secret: { name: "Count Off", desc: "Heals you and fires a ring of notes.", cost: 35, duration: 2 } },
  { id: "nora", name: 'Nora "Snare Fire"', lore: "The backbeat nobody skips.", stats: { hpMultiplier: 0.95, breathRegen: 1.3, damageMultiplier: 1.1, speedMultiplier: 1.25 }, color: "text-rose-400", hex: "#fb7185", cost: 5600, secret: { name: "Drum Roll", desc: "Freezes the room, then shoves it back.", cost: 40, duration: 2 } },
  { id: "piper", name: 'Piper "Piccolo"', lore: "Small horn, huge tempo.", stats: { hpMultiplier: 0.7, breathRegen: 1.8, damageMultiplier: 0.95, speedMultiplier: 1.65 }, color: "text-sky-300", hex: "#7dd3fc", cost: 6200, secret: { name: "Piccolo Dash", desc: "Dashes forward and speeds you up.", cost: 25, duration: 2 } },
  { id: "milo", name: 'Milo "Mallet"', lore: "Hears chords in wooden bars.", stats: { hpMultiplier: 1.1, breathRegen: 1.2, damageMultiplier: 1.25, speedMultiplier: 1 }, color: "text-violet-300", hex: "#c4b5fd", cost: 7000, secret: { name: "Ripple", desc: "A mallet shockwave around you.", cost: 40, duration: 2 } },
  { id: "bea", name: 'Bea "Low Reed"', lore: "Bassoon lines that hold the chord.", stats: { hpMultiplier: 1.35, breathRegen: 1.1, damageMultiplier: 1.2, speedMultiplier: 0.9 }, color: "text-red-300", hex: "#fca5a5", cost: 9800, secret: { name: "Anchor Note", desc: "A short shield and a breath refill.", cost: 40, duration: 2 } },
  { id: "luna", name: 'Luna "Bell Choir"', lore: "Every hit rings clean.", stats: { hpMultiplier: 0.9, breathRegen: 2.2, damageMultiplier: 1.05, speedMultiplier: 1.05 }, color: "text-indigo-300", hex: "#a5b4fc", cost: 11000, secret: { name: "Bell Halo", desc: "Notes orbit around you.", cost: 45, duration: 4 } },
  { id: "coco", name: 'Coco "Cajon"', lore: "The beat you feel in the floor.", stats: { hpMultiplier: 1.25, breathRegen: 1, damageMultiplier: 1.15, speedMultiplier: 1 }, color: "text-orange-400", hex: "#fb923c", cost: 12000, secret: { name: "Floor Stomp", desc: "A close blast that shoves enemies.", cost: 45, duration: 2 } },
  { id: "otto", name: 'Otto "Double Reed"', lore: "Oboe, in tune, on purpose.", stats: { hpMultiplier: 1, breathRegen: 1.15, damageMultiplier: 1.55, speedMultiplier: 1 }, color: "text-stone-300", hex: "#d6d3d1", cost: 14000, secret: { name: "Piercing Tone", desc: "Five heavy notes in every direction.", cost: 45, duration: 2 } },
  { id: "sage", name: 'Sage "Conductor"', lore: "One hand, and the room waits.", stats: { hpMultiplier: 1.05, breathRegen: 1.4, damageMultiplier: 0.9, speedMultiplier: 1 }, color: "text-slate-200", hex: "#e2e8f0", cost: 16500, secret: { name: "Fermata", desc: "Freezes enemies and patches you up.", cost: 50, duration: 3 } },
  { id: "riley", name: 'Riley "Sousaphone"', lore: "Wraps the whole band in brass.", stats: { hpMultiplier: 1.8, breathRegen: 0.7, damageMultiplier: 1.3, speedMultiplier: 0.65 }, color: "text-amber-300", hex: "#fcd34d", cost: 21000, secret: { name: "Brass Wave", desc: "Knocks the whole field backward.", cost: 55, duration: 2 } },
  { id: "nova", name: 'Nova "Pocket Synth"', lore: "A hallway concert with extra cables.", stats: { hpMultiplier: 1.2, breathRegen: 1.6, damageMultiplier: 1.7, speedMultiplier: 1.25 }, color: "text-cyan-300", hex: "#22d3ee", cost: 45000, secret: { name: "Drop", desc: "A huge blast and a speed kick.", cost: 60, duration: 3 } },
];

export const INSTRUMENTS: Record<string, InstrumentDef> = {
  kazoo: { name: "Kazoo", family: "clarinet", baseDamage: 6, breathCost: 4, color: "bg-orange-200", hex: "#fdba74", scale: 0.35, projSpeed: 6, hits: 2, cost: 0 },
  partyHorn: { name: "Party Horn", family: "whistle", baseDamage: 7, breathCost: 4, color: "bg-pink-200", hex: "#fbcfe8", scale: 0.4, projSpeed: 7, hits: 2, cost: 450 },
  claves: { name: "Claves", family: "cowbell", baseDamage: 8, breathCost: 5, color: "bg-amber-800", hex: "#92400e", scale: 0.4, projSpeed: 7, hits: 2, cost: 650 },
  toyDrum: { name: "Toy Drum", family: "drum", baseDamage: 9, breathCost: 5, color: "bg-red-300", hex: "#fca5a5", scale: 0.5, projSpeed: 6, hits: 2, cost: 800 },
  slideWhistle: { name: "Slide Whistle", family: "flute", baseDamage: 10, breathCost: 6, color: "bg-lime-200", hex: "#d9f99d", scale: 0.45, projSpeed: 8, hits: 2, cost: 1000 },
  whistle: { name: "Whistle", family: "whistle", baseDamage: 12, breathCost: 5, color: "bg-slate-200", hex: "#e2e8f0", scale: 0.4, projSpeed: 11, hits: 2, cost: 1300 },
  recorder: { name: "Recorder", family: "flute", baseDamage: 13, breathCost: 7, color: "bg-lime-300", hex: "#bef264", scale: 0.7, projSpeed: 9, hits: 2, cost: 1500 },
  plasticHorn: { name: "Plastic Horn", family: "trumpet", baseDamage: 14, breathCost: 8, color: "bg-yellow-200", hex: "#fef08a", scale: 0.6, projSpeed: 8, burst: 2, spread: 0.45, hits: 2, cost: 1800 },
  toot: { name: "Toot", family: "clarinet", baseDamage: 18, breathCost: 8, color: "bg-cyan-200", hex: "#a5f3fc", scale: 0.5, projSpeed: 8, hits: 2, cost: 2100 },
  dood: { name: "Dood", family: "clarinet", baseDamage: 22, breathCost: 12, color: "bg-green-300", hex: "#86efac", scale: 0.6, projSpeed: 5, knockback: 16, hits: 2, cost: 2400 },
  tambourine: { name: "Tambourine", family: "tambourine", baseDamage: 20, breathCost: 6, color: "bg-amber-200", hex: "#fde68a", scale: 0.6, projSpeed: 8, hits: 2, cost: 3000 },
  snare: { name: "Snare", family: "drum", baseDamage: 24, breathCost: 8, color: "bg-rose-300", hex: "#fda4af", scale: 0.8, projSpeed: 9, hits: 2, cost: 3600 },
  cowbell: { name: "Cowbell", family: "cowbell", baseDamage: 26, breathCost: 9, color: "bg-yellow-600", hex: "#ca8a04", scale: 0.6, projSpeed: 8, knockback: 16, hits: 2, cost: 3900 },
  harmonica: { name: "Harmonica", family: "harmonica", baseDamage: 24, breathCost: 7, color: "bg-zinc-400", hex: "#a1a1aa", scale: 0.5, projSpeed: 10, hits: 3, cost: 4200 },
  bongos: { name: "Bongos", family: "drum", baseDamage: 28, breathCost: 9, color: "bg-orange-400", hex: "#fb923c", scale: 0.7, projSpeed: 8, hits: 2, cost: 4400 },
  ukulele: { name: "Ukulele", family: "uke", baseDamage: 26, breathCost: 8, color: "bg-orange-300", hex: "#fdba74", scale: 0.7, projSpeed: 9, hits: 3, cost: 4800 },
  megaphone: { name: "Megaphone", family: "megaphone", baseDamage: 18, breathCost: 10, color: "bg-red-500", hex: "#ef4444", scale: 0.8, projSpeed: 9, burst: 4, spread: 0.35, hits: 2, cost: 5000 },
  melodica: { name: "Melodica", family: "harmonica", baseDamage: 30, breathCost: 10, color: "bg-red-400", hex: "#f87171", scale: 0.7, projSpeed: 8, hits: 3, cost: 5400 },
  oboe: { name: "Oboe", family: "oboe", baseDamage: 30, breathCost: 16, color: "bg-stone-700", hex: "#44403c", scale: 0.9, projSpeed: 6, hits: 3, cost: 5600 },
  panFlute: { name: "Pan Flute", family: "flute", baseDamage: 32, breathCost: 11, color: "bg-amber-300", hex: "#fcd34d", scale: 0.7, projSpeed: 9, hits: 3, cost: 6000 },
  clarinet: { name: "Clarinet", family: "clarinet", baseDamage: 32, breathCost: 14, color: "bg-zinc-700", hex: "#3f3f46", scale: 1, projSpeed: 6, hits: 3, cost: 6400 },
  flute: { name: "Flute", family: "flute", baseDamage: 34, breathCost: 12, color: "bg-slate-200", hex: "#e2e8f0", scale: 1, projSpeed: 10, moveSpeedMod: 1.2, hits: 3, cost: 6800 },
  xylophone: { name: "Xylophone", family: "mallet", baseDamage: 30, breathCost: 11, color: "bg-pink-300", hex: "#f9a8d4", scale: 0.9, projSpeed: 10, hits: 3, cost: 7000 },
  banjo: { name: "Banjo", family: "uke", baseDamage: 34, breathCost: 12, color: "bg-yellow-700", hex: "#a16207", scale: 0.9, projSpeed: 8, hits: 3, cost: 7400 },
  frenchHorn: { name: "French Horn", family: "horn", baseDamage: 36, breathCost: 18, color: "bg-amber-400", hex: "#fbbf24", scale: 1, projSpeed: 7, hits: 3, cost: 7800 },
  mandolin: { name: "Mandolin", family: "violin", baseDamage: 36, breathCost: 12, color: "bg-orange-800", hex: "#9a3412", scale: 0.8, projSpeed: 10, hits: 3, cost: 8200 },
  altoSax: { name: "Alto Sax", family: "sax", baseDamage: 38, breathCost: 18, color: "bg-yellow-400", hex: "#facc15", scale: 1, projSpeed: 6, hits: 3, cost: 8600 },
  violin: { name: "Violin", family: "violin", baseDamage: 40, breathCost: 14, color: "bg-amber-800", hex: "#92400e", scale: 0.9, projSpeed: 11, hits: 3, cost: 9200 },
  piccolo: { name: "Piccolo", family: "flute", baseDamage: 28, breathCost: 12, color: "bg-slate-100", hex: "#f1f5f9", scale: 0.5, projSpeed: 13, moveSpeedMod: 1.35, hits: 4, cost: 9800, req: "flute" },
  conga: { name: "Conga", family: "drum", baseDamage: 44, breathCost: 16, color: "bg-red-800", hex: "#991b1b", scale: 1, projSpeed: 6, knockback: 24, hits: 3, cost: 10400 },
  cymbals: { name: "Cymbals", family: "cymbal", baseDamage: 42, breathCost: 16, color: "bg-amber-300", hex: "#fcd34d", scale: 1, projSpeed: 7, knockback: 28, aoe: 36, hits: 2, cost: 11000 },
  bassoon: { name: "Bassoon", family: "bassoon", baseDamage: 46, breathCost: 22, color: "bg-red-900", hex: "#7f1d1d", scale: 1.2, projSpeed: 5, knockback: 36, hits: 4, cost: 12000 },
  trumpet: { name: "Trumpet", family: "trumpet", baseDamage: 50, breathCost: 22, color: "bg-yellow-500", hex: "#eab308", scale: 1, projSpeed: 10, burst: 3, spread: 0.15, hits: 2, cost: 13000 },
  marimba: { name: "Marimba", family: "mallet", baseDamage: 44, breathCost: 15, color: "bg-violet-400", hex: "#a78bfa", scale: 1.1, projSpeed: 8, hits: 4, cost: 12500, req: "xylophone" },
  sopranoSax: { name: "Soprano Sax", family: "sax_straight", baseDamage: 40, breathCost: 16, color: "bg-yellow-300", hex: "#fde047", scale: 0.8, projSpeed: 8, hits: 3, cost: 14000, req: "altoSax" },
  mellophone: { name: "Mellophone", family: "horn", baseDamage: 52, breathCost: 20, color: "bg-yellow-400", hex: "#facc15", scale: 1.1, projSpeed: 9, hits: 3, cost: 14500, req: "frenchHorn" },
  accordion: { name: "Accordion", family: "accordion", baseDamage: 48, breathCost: 20, color: "bg-red-600", hex: "#dc2626", scale: 1.1, projSpeed: 6, burst: 3, spread: 0.4, hits: 3, cost: 15000 },
  glockenspiel: { name: "Glockenspiel", family: "mallet", baseDamage: 54, breathCost: 16, color: "bg-cyan-200", hex: "#a5f3fc", scale: 0.7, projSpeed: 13, hits: 4, cost: 16000, req: "xylophone" },
  englishHorn: { name: "English Horn", family: "horn", baseDamage: 62, breathCost: 20, color: "bg-stone-600", hex: "#57534e", scale: 1, projSpeed: 7, hits: 4, cost: 17000 },
  bassClarinet: { name: "Bass Clarinet", family: "bassClarinet", baseDamage: 56, breathCost: 22, color: "bg-zinc-800", hex: "#27272a", scale: 1.3, projSpeed: 5, hits: 4, cost: 15500, req: "clarinet" },
  flugelhorn: { name: "Flugelhorn", family: "trumpet", baseDamage: 48, breathCost: 20, color: "bg-yellow-600", hex: "#ca8a04", scale: 1.2, projSpeed: 7, burst: 5, spread: 0.25, hits: 3, cost: 16500, req: "trumpet" },
  cello: { name: "Cello", family: "violin", baseDamage: 64, breathCost: 22, color: "bg-orange-900", hex: "#7c2d12", scale: 1.3, projSpeed: 7, hits: 4, cost: 18000, req: "violin" },
  tenorSax: { name: "Tenor Sax", family: "sax", baseDamage: 60, breathCost: 24, color: "bg-yellow-500", hex: "#eab308", scale: 1.3, projSpeed: 5, knockback: 28, hits: 4, cost: 19000, req: "altoSax" },
  bagpipes: { name: "Bagpipes", family: "bagpipe", baseDamage: 58, breathCost: 24, color: "bg-emerald-700", hex: "#047857", scale: 1.2, projSpeed: 6, aoe: 46, hits: 4, cost: 20000 },
  contrabassOboe: { name: "C. Oboe", family: "oboe", baseDamage: 70, breathCost: 28, color: "bg-stone-900", hex: "#1c1917", scale: 1.4, projSpeed: 5, hits: 5, cost: 21000, req: "oboe" },
  bassDrum: { name: "Bass Drum", family: "drum", baseDamage: 78, breathCost: 28, color: "bg-rose-800", hex: "#9f1239", scale: 1.4, projSpeed: 5, knockback: 55, aoe: 64, hits: 3, cost: 22000, req: "snare" },
  bassTrumpet: { name: "Bass Trumpet", family: "trumpet", baseDamage: 82, breathCost: 28, color: "bg-amber-700", hex: "#b45309", scale: 1.2, projSpeed: 8, burst: 2, spread: 0.12, hits: 4, cost: 24000, req: "trumpet" },
  trombone: { name: "Trombone", family: "trombone", baseDamage: 68, breathCost: 32, color: "bg-amber-600", hex: "#d97706", scale: 1.5, projSpeed: 7, rootPlayer: true, hits: 5, cost: "Quest" },
  contrabassoon: { name: "Contrabassoon", family: "bassoon", baseDamage: 88, breathCost: 36, color: "bg-orange-900", hex: "#7c2d12", scale: 1.6, projSpeed: 4, knockback: 60, aoe: 48, hits: 5, cost: 26000, req: "bassoon" },
  baritoneSax: { name: "Baritone Sax", family: "sax", baseDamage: 84, breathCost: 32, color: "bg-yellow-700", hex: "#a16207", scale: 1.7, projSpeed: 4, burst: 3, spread: 0.28, hits: 5, cost: 27000, req: "tenorSax" },
  euphonium: { name: "Euphonium", family: "tuba", baseDamage: 96, breathCost: 42, color: "bg-yellow-600", hex: "#ca8a04", scale: 0.9, projSpeed: 3, aoe: 90, hits: 2, cost: 28000 },
  harp: { name: "Concert Harp", family: "harp", baseDamage: 90, breathCost: 20, color: "bg-yellow-200", hex: "#fef08a", scale: 1.3, projSpeed: 12, pierce: 3, hits: 5, cost: 30000 },
  contrabassTrombone: { name: "C. Trombone", family: "trombone", baseDamage: 110, breathCost: 46, color: "bg-amber-800", hex: "#92400e", scale: 2, projSpeed: 4, rootPlayer: true, hits: 6, cost: 32000, req: "trombone" },
  timpani: { name: "Timpani", family: "drum", baseDamage: 108, breathCost: 34, color: "bg-amber-900", hex: "#78350f", scale: 1.5, projSpeed: 5, knockback: 70, aoe: 80, hits: 3, cost: 34000, req: "bassDrum" },
  tuba: { name: "Tuba", family: "tuba", baseDamage: 130, breathCost: 50, color: "bg-yellow-500", hex: "#eab308", scale: 1.3, projSpeed: 4, rootPlayer: true, aoe: 130, hits: 3, cost: 36000 },
  sousaphone: { name: "Sousaphone", family: "sousaphone", baseDamage: 120, breathCost: 48, color: "bg-amber-100", hex: "#fef3c7", scale: 1.4, projSpeed: 4, aoe: 110, moveSpeedMod: 0.8, hits: 4, cost: 40000, req: "tuba" },
  concertBass: { name: "Concert Bass", family: "violin", baseDamage: 125, breathCost: 30, color: "bg-stone-800", hex: "#292524", scale: 1.6, projSpeed: 6, hits: 5, cost: 38000, req: "cello" },
  gong: { name: "Gong", family: "cymbal", baseDamage: 140, breathCost: 40, color: "bg-yellow-500", hex: "#eab308", scale: 1.6, projSpeed: 4, knockback: 80, aoe: 110, hits: 2, cost: 42000 },
  contrabassBassoon: { name: "C. Bassoon", family: "bassoon", baseDamage: 135, breathCost: 42, color: "bg-red-950", hex: "#450a0a", scale: 1.8, projSpeed: 3, rootPlayer: true, hits: 6, cost: 44000, req: "bassoon" },
  contrabassSax: { name: "C. Sax", family: "sax", baseDamage: 150, breathCost: 44, color: "bg-yellow-800", hex: "#854d0e", scale: 2.2, projSpeed: 3, hits: 6, cost: 48000, req: "baritoneSax" },
  pipeOrgan: { name: "Pipe Organ", family: "tuba", baseDamage: 160, breathCost: 55, color: "bg-slate-300", hex: "#cbd5e1", scale: 1.8, projSpeed: 3, aoe: 100, rootPlayer: true, hits: 4, cost: 56000 },
  synth: { name: "Pocket Synth", family: "synth", baseDamage: 120, breathCost: 14, color: "bg-cyan-400", hex: "#22d3ee", scale: 0.8, projSpeed: 14, passWalls: true, burst: 3, spread: 0.2, hits: 5, cost: 40000 },
  egg: { name: "Egg", family: "throwable", baseDamage: 10, breathCost: 0, color: "bg-orange-100", hex: "#ffedd5", scale: 0.5, projSpeed: 12, passWalls: true, hits: 2, cost: 0, shape: "egg" },
  goldenKazoo: { name: "Golden Kazoo", family: "clarinet", baseDamage: 250, breathCost: 5, color: "bg-yellow-300", hex: "#fef08a", scale: 0.4, projSpeed: 15, passWalls: true, hits: 10, cost: 80000 },
  diamondTriangle: { name: "D. Triangle", family: "triangle", baseDamage: 180, breathCost: 8, color: "bg-cyan-100", hex: "#cffafe", scale: 0.6, projSpeed: 18, hits: 8, cost: 120000 },
  desertEagle: { name: "Band Cannon", family: "gun", baseDamage: 9999, breathCost: 0, color: "bg-stone-500", hex: "#78716c", scale: 0.7, projSpeed: 25, passWalls: true, hits: 2, cost: 200000, shape: "bullet" },
};

export const BLACK_MARKET_IDS = ["goldenKazoo", "diamondTriangle", "desertEagle", "synth", "tacops", "nova"];

export const NOTES: NoteDef[] = [
  { name: "C4", freq: 261.63, key: "t", isBlack: false },
  { name: "C#4", freq: 277.18, key: "5", isBlack: true },
  { name: "D4", freq: 293.66, key: "y", isBlack: false },
  { name: "D#4", freq: 311.13, key: "6", isBlack: true },
  { name: "E4", freq: 329.63, key: "u", isBlack: false },
  { name: "F4", freq: 349.23, key: "i", isBlack: false },
  { name: "F#4", freq: 369.99, key: "8", isBlack: true },
  { name: "G4", freq: 392.0, key: "o", isBlack: false },
  { name: "G#4", freq: 415.3, key: "9", isBlack: true },
  { name: "A4", freq: 440.0, key: "p", isBlack: false },
  { name: "A#4", freq: 466.16, key: "0", isBlack: true },
  { name: "B4", freq: 493.88, key: "[", isBlack: false },
  { name: "C5", freq: 523.25, key: "]", isBlack: false },
];

export const COMBOS: Record<string, { seq: string[]; name: string }> = {
  rocky: { seq: ["C4", "D4", "C4"], name: "Toot-Dood Rally" },
  melody: { seq: ["C4", "D4", "E4"], name: "Tempo Heal" },
  harmony: { seq: ["C4", "E4", "G4"], name: "Perfect Chord" },
  rhythm: { seq: ["C4", "C4", "C4"], name: "Marching Blast" },
  treble: { seq: ["C5", "B4", "A4"], name: "Presto Aura" },
  bass: { seq: ["C4", "G4", "C5"], name: "Fortissimo" },
  keli: { seq: ["G4", "F4", "D4"], name: "Trombone Slide" },
  kai: { seq: ["C4", "C#4", "D4"], name: "Euphoric Boom" },
  kashu: { seq: ["E4", "G4", "B4"], name: "Jazz Riff" },
  eason: { seq: ["C5", "A4", "F4"], name: "Tornado Aura" },
  thomas: { seq: ["G4", "C5", "G4"], name: "Brass Barrage" },
  javis: { seq: ["F4", "A4", "C5"], name: "Snake Charm" },
  quinn: { seq: ["C4", "E4", "C4"], name: "Count-In" },
  nora: { seq: ["D4", "D4", "G4"], name: "Backbeat" },
  piper: { seq: ["C5", "E4", "G4"], name: "Piccolo Run" },
  milo: { seq: ["C4", "D4", "G4"], name: "Wood Chord" },
  bea: { seq: ["A4", "G4", "F4"], name: "Anchor" },
  luna: { seq: ["G4", "A4", "B4"], name: "Bell Peal" },
  coco: { seq: ["D4", "F4", "A4"], name: "Stomp Box" },
  otto: { seq: ["F4", "G4", "A4"], name: "Reed Line" },
  sage: { seq: ["E4", "F4", "G4"], name: "Fermata Hold" },
  riley: { seq: ["C4", "C4", "G4"], name: "Brass Pedal" },
  nova: { seq: ["C5", "C5", "G4"], name: "Filter Sweep" },
};

const TEACHER_NAMES = ["Mr. Smith", "Anson C The Traitor", "Mrs. Robinson", "Mr. Medina", "Coach Hector", "Mrs. Gable", "Principal Skinner", "Ms. Palette", "Mr. Forte", "Mrs. Shush", "Hackerman", "Dr. Beaker", "Mr. Atlas", "Ms. Drama", "Mr. Saw", "Nurse Joyless", "Groundskeeper", "Mrs. Path", "Vice Principal", "Dr. Overlord", "The Board", "Mr. Calculus", "Coach Bench", "Madame Francais", "Dr. Quantum", "Mrs. Melisma", "Mr. Treble", "The Secretary", "Vice Principal Doom", "The Superintendent", "The Mayor", "The Governor", "Sec. of Education", "The President", "Earth Guardian", "Galactic Principal", "Quantum Overlord", "Time Keeper", "Reality Weaver", "The Void Master"];
const SUBJECTS = ["Mathematics", "Betrayal", "History", "Advanced Science", "P.E.", "Literature", "Detention", "Art", "Rogue Band", "Library", "IT Support", "Chemistry", "Geography", "Theater", "Woodshop", "Infirmary", "Maintenance", "Guidance", "Discipline", "Superintendent", "Final Exams", "Calculus", "Varsity P.E.", "French", "Physics", "Choir", "Elite Band", "Front Office", "Expulsion", "District Overlord", "City Rules", "State Law", "Federal Law", "National Order", "Global Dominance", "Cosmic Detention", "Multiverse Laws", "Temporal Limits", "String Theory", "Absolute Nothing"];

export const STANDARD_LEVELS: LevelDef[] = Array.from({ length: 40 }, (_, i) => {
  const spiked = i === 3;
  return {
    id: i + 1,
    teacher: TEACHER_NAMES[i] || `Boss ${i + 1}`,
    subject: SUBJECTS[i] || `Subject ${i + 1}`,
    hp: spiked ? 420 : Math.round(120 * 1.16 ** i),
    damage: spiked ? 16 : 6 + i * 2,
    henchmenCount: spiked ? 18 : 5 + i * 2,
    reward: spiked ? 2200 : Math.round(160 * 1.12 ** i),
    speed: spiked ? 4 : 1.5,
    glassesType: ["round", "square", "cat", "sport", "thick"][i % 5] || "round",
    shirtColor: ["#3b82f6", "#ef4444", "#8b5cf6", "#10b981", "#f59e0b"][i % 5] || "#3b82f6",
  };
});

export const DLC_LEVELS: LevelDef[] = Array.from({ length: 50 }, (_, i) => ({
  id: 41 + i,
  teacher: `Brainrot Overlord ${i + 1}`,
  subject: `Skibidi Studies ${i + 1}`,
  hp: Math.round(15000 * 1.1 ** i),
  damage: 50 + i * 10,
  henchmenCount: 20 + i * 2,
  reward: 1800 + i * 80,
  speed: 2,
  glassesType: "thick",
  shirtColor: "#84cc16",
  isDLC: true,
}));

export const ALL_LEVELS: LevelDef[] = [...STANDARD_LEVELS, ...DLC_LEVELS];
export const MAX_LEVEL_ID = 90;

export const HENCHMEN = [
  { typeId: "goon", hp: 12, speed: 3.2, damage: 4, radius: 15 },
  { typeId: "thug", hp: 26, speed: 2, damage: 7, radius: 20 },
  { typeId: "soundproofer", hp: 42, speed: 1.4, damage: 9, radius: 25 },
  { typeId: "linebacker", hp: 34, speed: 2.4, damage: 14, radius: 20 },
  { typeId: "quarterback", hp: 20, speed: 2.8, damage: 8, radius: 18 },
  { typeId: "striker", hp: 32, speed: 2.6, damage: 12, radius: 18 },
  { typeId: "kicker", hp: 22, speed: 2.4, damage: 8, radius: 16 },
  { typeId: "angry_student", hp: 1, speed: 4.5, damage: 6, radius: 12 },
  { typeId: "brainrot_kid", hp: 64, speed: 3.4, damage: 14, radius: 15, isBrainrot: true },
] as const;

export type HenchTemplate = (typeof HENCHMEN)[number];

export function henchTemplate(typeId: string): HenchTemplate {
  return HENCHMEN.find((h) => h.typeId === typeId) ?? HENCHMEN[0];
}

const STORY_MISSIONS: MissionDef[] = [
  { id: "m_eason_1", giver: "Eason", title: "The Egg Drop", desc: "Sneak past the guards and hit Kashu with an egg during the class-rep speech. Click or tap to throw.", rewardText: "10000 Reeds", levelData: { id: "m_eason_1", teacher: "Kashu", subject: "Speech", hp: 3000, damage: 50, henchmenCount: 15, reward: 10000, speed: 1.5, glassesType: "square", shirtColor: "#facc15", bossSpawnsImmediately: true, bossBehavior: "speech", customHenchmen: ["soundproofer"] } },
  { id: "m_eason_2", giver: "Eason", title: "Flute Supremacy", desc: "Prove flutes rule. Defeat a giant brass boss and the minions.", rewardText: "15000 Reeds", levelData: { id: "m_eason_2", teacher: "Brass Titan", subject: "Heavy Metal", hp: 15000, damage: 200, henchmenCount: 50, reward: 15000, speed: 1.6, glassesType: "thick", shirtColor: "#eab308" } },
  { id: "m_kashu_1", giver: "Kashu", title: "Football Match", desc: "Eason is in the football match. Dodge sprinting strikers and the footballs the kickers boot at you.", rewardText: "10000 Reeds", levelData: { id: "m_kashu_1", teacher: "Eason", subject: "Football Match", hp: 4000, damage: 60, henchmenCount: 20, reward: 10000, speed: 2, glassesType: "sport", shirtColor: "#e2e8f0", bossSpawnsImmediately: true, customHenchmen: ["striker", "kicker"] } },
  { id: "m_kashu_2", giver: "Kashu", title: "Jazz Club Bounce", desc: "Survive a room full of fast metronome thugs.", rewardText: "12000 Reeds", levelData: { id: "m_kashu_2", teacher: "Jazz Enforcer", subject: "Improv Survival", hp: 8000, damage: 100, henchmenCount: 60, reward: 12000, speed: 1.8, glassesType: "round", shirtColor: "#a16207", customHenchmen: ["thug"] } },
  { id: "m_melody_1", giver: "Melody", title: "Protect the Tempo", desc: "Defeat a swarm of 80 metronome thugs. Keep the rhythm steady.", rewardText: "8000 Reeds", levelData: { id: "m_melody_1", teacher: "Maestro Clock", subject: "Tempo Maintenance", hp: 5000, damage: 50, henchmenCount: 80, reward: 8000, speed: 1.5, glassesType: "round", shirtColor: "#f472b6", customHenchmen: ["thug"] } },
  { id: "m_thomas_1", giver: "Thomas", title: "Herald's Duel", desc: "A 1-on-1 duel with a fast trumpet clone.", rewardText: "15000 Reeds", levelData: { id: "m_thomas_1", teacher: "Shadow Thomas", subject: "Trumpet Duel", hp: 20000, damage: 300, henchmenCount: 0, reward: 15000, speed: 2.4, glassesType: "sport", shirtColor: "#111827", bossSpawnsImmediately: true } },
  { id: "m_janitor_1", giver: "Janitor Joe", title: "The Big Spill", desc: "The halls are full of angry fans. Clear them, then face the principal.", rewardText: "20000 Reeds", levelData: { id: "m_janitor_1", teacher: "Principal Mess", subject: "Hallway Cleanup", hp: 10000, damage: 80, henchmenCount: 100, reward: 20000, speed: 1.7, glassesType: "thick", shirtColor: "#166534", customHenchmen: ["angry_student"] } },
  { id: "m_piper_1", giver: "Piper", title: "Piccolo Patrol", desc: "A fast teacher is cutting through the practice rooms. Keep up.", rewardText: "9000 Reeds", levelData: { id: "m_piper_1", teacher: "Coach Tempo", subject: "Speed Drill", hp: 4500, damage: 40, henchmenCount: 30, reward: 9000, speed: 2.6, glassesType: "sport", shirtColor: "#7dd3fc", customHenchmen: ["goon"] } },
  { id: "m_nora_1", giver: "Nora", title: "Drumline Rush", desc: "The drumline won't stop marching. Clear the thugs, then the drum major.", rewardText: "11000 Reeds", levelData: { id: "m_nora_1", teacher: "Drum Major", subject: "Backbeat", hp: 7000, damage: 70, henchmenCount: 40, reward: 11000, speed: 1.7, glassesType: "square", shirtColor: "#fb7185", customHenchmen: ["thug"] } },
  { id: "m_quinn_1", giver: "Quinn", title: "Row Check", desc: "Quinn needs the section in tune. A mixed hallway stands in the way.", rewardText: "8000 Reeds", levelData: { id: "m_quinn_1", teacher: "Section Judge", subject: "Balance Test", hp: 5500, damage: 45, henchmenCount: 24, reward: 8000, speed: 1.6, glassesType: "round", shirtColor: "#5eead4" } },
  { id: "m_bea_1", giver: "Bea", title: "Low Reed Hall", desc: "Soundproofers are swallowing the bass line. Punch through them.", rewardText: "12000 Reeds", levelData: { id: "m_bea_1", teacher: "Ms. Mute", subject: "Bass Clef", hp: 9000, damage: 55, henchmenCount: 18, reward: 12000, speed: 1.4, glassesType: "thick", shirtColor: "#7f1d1d", customHenchmen: ["soundproofer"] } },
  { id: "m_sage_1", giver: "Sage", title: "Hold the Fermata", desc: "A one-on-one with the librarian who hates noise. No minions. Just you and the baton.", rewardText: "14000 Reeds", levelData: { id: "m_sage_1", teacher: "Librarian Still", subject: "Silence", hp: 12000, damage: 90, henchmenCount: 0, reward: 14000, speed: 1.5, glassesType: "round", shirtColor: "#0f172a", bossSpawnsImmediately: true } },
  { id: "m_luna_1", giver: "Luna", title: "Bell Tower", desc: "Climb isn't the hard part. The bell captain rings the whole room.", rewardText: "13000 Reeds", levelData: { id: "m_luna_1", teacher: "Bell Captain", subject: "Chimes", hp: 8000, damage: 65, henchmenCount: 16, reward: 13000, speed: 1.8, glassesType: "cat", shirtColor: "#818cf8", bossSpawnsImmediately: true, customHenchmen: ["goon"] } },
  { id: "m_milo_1", giver: "Milo", title: "Bar by Bar", desc: "Mallets against a swarm. Stay moving and don't let the crowd stack up.", rewardText: "10000 Reeds", levelData: { id: "m_milo_1", teacher: "Mallet Maestro", subject: "Wood Bars", hp: 6500, damage: 50, henchmenCount: 55, reward: 10000, speed: 1.5, glassesType: "square", shirtColor: "#a78bfa", customHenchmen: ["goon"] } },
  { id: "m_riley_1", giver: "Riley", title: "Heavy Brass", desc: "A slow, huge sousaphone teacher. The soundproofers walk with them.", rewardText: "16000 Reeds", levelData: { id: "m_riley_1", teacher: "Brass Wall", subject: "Pedal Tone", hp: 18000, damage: 80, henchmenCount: 12, reward: 16000, speed: 1.15, glassesType: "thick", shirtColor: "#fbbf24", customHenchmen: ["soundproofer"] } },
  { id: "m_otto_1", giver: "Otto", title: "Reed Off", desc: "A straight duel. One oboe teacher, no crowd.", rewardText: "15000 Reeds", levelData: { id: "m_otto_1", teacher: "Oboe Rival", subject: "Double Reed", hp: 14000, damage: 120, henchmenCount: 0, reward: 15000, speed: 2.1, glassesType: "round", shirtColor: "#44403c", bossSpawnsImmediately: true } },
  { id: "m_harmony_1", giver: "Harmony", title: "Perfect Chord", desc: "Three note ideas, one messy hallway. Clear it and face the choir lead.", rewardText: "9000 Reeds", levelData: { id: "m_harmony_1", teacher: "Choir Lead", subject: "Harmony Check", hp: 6000, damage: 48, henchmenCount: 28, reward: 9000, speed: 1.6, glassesType: "cat", shirtColor: "#60a5fa" } },
];

const BOARD: { title: string; desc: string; hench: string }[] = [
  { title: "Warm-up Laps", desc: "Jog the hall and clear the early goons.", hench: "goon" },
  { title: "Lost Mouthpiece", desc: "A teacher will not start class until the hallway is quiet.", hench: "goon" },
  { title: "Scale Stairs", desc: "Climb a stack of easy drills.", hench: "goon" },
  { title: "Pencil Patrol", desc: "Sharpened pencils are not the problem. The crowd is.", hench: "angry_student" },
  { title: "Metronome March", desc: "Keep moving. The thugs keep time.", hench: "thug" },
  { title: "Folder Run", desc: "Music folders everywhere. Clear a path.", hench: "goon" },
  { title: "Chair Stack", desc: "The chairs are fine. The students are not.", hench: "angry_student" },
  { title: "Bell Rehearsal", desc: "One teacher, no crowd. Do not miss.", hench: "none" },
  { title: "Reed Box", desc: "Soundproofers ate the reed case.", hench: "soundproofer" },
  { title: "Late Bus", desc: "Fast goons between you and the door.", hench: "goon" },
  { title: "Sectionals", desc: "Each row sent somebody. Meet them.", hench: "thug" },
  { title: "Quiet Sign", desc: "The library wants the hall silent.", hench: "soundproofer" },
  { title: "Pep Rally", desc: "Too many fans, one coach.", hench: "angry_student" },
  { title: "Low Brass Lane", desc: "Slow hits, heavy teacher.", hench: "thug" },
  { title: "High Note Hunt", desc: "Piccolo-speed goons.", hench: "goon" },
  { title: "Stand Lights", desc: "A dark practice room and a patient teacher.", hench: "none" },
  { title: "Drum Major", desc: "The line will not turn around.", hench: "thug" },
  { title: "Case Check", desc: "Open every case by clearing the room.", hench: "goon" },
  { title: "Mute Collection", desc: "Soundproofers are hoarding the mutes.", hench: "soundproofer" },
  { title: "Football Sideline", desc: "Strikers from the match wandered inside.", hench: "striker" },
  { title: "Kick Return", desc: "Kickers and a very loud coach.", hench: "kicker" },
  { title: "Poster Duty", desc: "Take down the noise, then the sponsor.", hench: "angry_student" },
  { title: "Choir Risers", desc: "Tall risers, short patience.", hench: "thug" },
  { title: "Theory Quiz", desc: "One strict teacher. No helpers.", hench: "none" },
  { title: "Valve Oil", desc: "Slippery goons, sticky teacher.", hench: "goon" },
  { title: "Bow Rescue", desc: "Strings room is packed.", hench: "thug" },
  { title: "Mallet Bin", desc: "Bars, mallets, and a swarm.", hench: "goon" },
  { title: "Cymbal Crash", desc: "They only stop if you do.", hench: "thug" },
  { title: "Hall Pass", desc: "Earn it. The vice principal is waiting.", hench: "soundproofer" },
  { title: "Night Lockup", desc: "Janitor lights, angry fans.", hench: "angry_student" },
  { title: "Score Copy", desc: "Forty parts and a mean librarian.", hench: "soundproofer" },
  { title: "Warm Brass", desc: "Long tones versus a charging line.", hench: "striker" },
  { title: "Cold Reeds", desc: "Oboe weather. Duel the rival.", hench: "none" },
  { title: "Bus Songs", desc: "The away crowd followed you back.", hench: "angry_student" },
  { title: "Stage Tape", desc: "Mark the floor by clearing it.", hench: "goon" },
  { title: "Light Cue", desc: "The booth teacher hates wrong notes.", hench: "thug" },
  { title: "Pit Orchestra", desc: "Low ceiling, lots of soundproofers.", hench: "soundproofer" },
  { title: "Encore", desc: "They asked for one more. Make it the last.", hench: "thug" },
  { title: "Trophy Case", desc: "Guard the case from fast goons.", hench: "goon" },
  { title: "Rain Delay", desc: "Footballers stuck in the band room.", hench: "kicker" },
  { title: "Final Tuning", desc: "A big teacher and a small crowd.", hench: "soundproofer" },
  { title: "Overtime Drill", desc: "Coach will not blow the whistle.", hench: "striker" },
  { title: "Library Fine", desc: "Silence, then the head librarian.", hench: "none" },
  { title: "Festival Bus", desc: "Every section sent a captain.", hench: "thug" },
  { title: "Snow Day", desc: "Indoor laps. Endless goons.", hench: "goon" },
  { title: "Award Night", desc: "The emcee is the last boss.", hench: "angry_student" },
  { title: "Closing Chord", desc: "Hold still. This teacher does not.", hench: "none" },
  { title: "Summer Band", desc: "The longest job on the board.", hench: "thug" },
];

const BOARD_GIVERS = ["Melody", "Harmony", "Rhythm", "Quinn", "Nora", "Piper", "Milo", "Bea", "Luna", "Coco", "Otto", "Sage", "Riley", "Thomas", "Kashu", "Eason", "Kai", "Keli", "Janitor Joe", "Harry"];
const GLASSES = ["round", "square", "cat", "sport", "thick"];
const SHIRTS = ["#3b82f6", "#ef4444", "#8b5cf6", "#10b981", "#f59e0b", "#fb7185", "#22d3ee"];

function soften(mission: MissionDef): MissionDef {
  const reward = Math.max(700, Math.round(mission.levelData.reward * 0.32));
  return { ...mission, rewardText: `${reward} Reeds`, levelData: { ...mission.levelData, reward } };
}

export const MISSIONS: MissionDef[] = [
  ...STORY_MISSIONS.map(soften),
  ...BOARD.map((job, i) => {
    const reward = 450 + i * 260;
    const duel = job.hench === "none";
    return {
      id: `m_board_${i + 1}`,
      giver: BOARD_GIVERS[i % BOARD_GIVERS.length]!,
      title: job.title,
      desc: job.desc,
      rewardText: `${reward} Reeds`,
      levelData: {
        id: `m_board_${i + 1}`,
        teacher: job.title,
        subject: "Mission Board",
        hp: 1600 + i * 650,
        damage: 16 + Math.floor(i * 1.3),
        henchmenCount: duel ? 0 : 8 + (i % 7) * 4,
        reward,
        speed: 1.25 + (i % 5) * 0.12,
        glassesType: GLASSES[i % GLASSES.length]!,
        shirtColor: SHIRTS[i % SHIRTS.length]!,
        bossSpawnsImmediately: duel || i % 8 === 0,
        customHenchmen: duel ? undefined : [job.hench],
      },
    };
  }),
];

export const QUESTS: QuestDef[] = [
  { id: "q_brass", giver: "Kai & Keli", title: "The Brass Challenge", desc: "Take out 120 earplug goons and we'll slide you a trombone from the band room.", target: 120, metric: "goonsKilled", rewardType: "instrument", rewardId: "trombone", rewardText: "Trombone" },
  { id: "q_chosen", giver: "Eason", title: "The Chosen One", desc: "Eliminate 5 rival teachers.", target: 5, metric: "bossesDefeated", rewardType: "reeds", rewardAmount: 5000, rewardText: "5000 Reeds" },
  { id: "q_jazz", giver: "Kashu", title: "Jazz Rebellion", desc: "Smash 30 metronome thugs for the sake of improv.", target: 30, metric: "thugsKilled", rewardType: "reeds", rewardAmount: 2500, rewardText: "2500 Reeds" },
  { id: "q_herald", giver: "Thomas", title: "Herald's Request", desc: "Soundproofers are blocking the fanfare. Take down 20 of them.", target: 20, metric: "soundproofersKilled", rewardType: "reeds", rewardAmount: 3000, rewardText: "3000 Reeds" },
];

export function characterById(id: string): CharacterDef {
  return CHARACTERS.find((c) => c.id === id) ?? CHARACTERS[0]!;
}

export function blankUpgrade() {
  return { damageLvl: 0, breathLvl: 0, hitsLvl: 0, speedLvl: 0 };
}

export function dmgCost(level: number) {
  return 250 + level * 350;
}
export function breathCost(level: number) {
  return 200 + level * 280;
}
export function hitsCost(level: number) {
  return 400 + level * 450;
}
export function speedCost(level: number) {
  return 300 + level * 320;
}
export function trainCost(level: number) {
  return Math.floor(400 * 1.55 ** level);
}

export function gearGrade(cost: number | "Quest", id?: string) {
  if (id === "kazoo" || id === "dood" || id === "toot") return "Weak";
  if (cost === "Quest") return "Quest";
  if (cost < 2500) return "Weak";
  if (cost < 10000) return "Mid";
  return "Strong";
}

export function comboLabel(charId: string) {
  const combo = COMBOS[charId];
  if (!combo) return "No 3-note combo. Use Q for the secret.";
  const keys = combo.seq
    .map((n) => NOTES.find((note) => note.name === n)?.key.toUpperCase() ?? n)
    .join(" ");
  return `${combo.name}: ${combo.seq.join(" - ")} (keys ${keys})`;
}
