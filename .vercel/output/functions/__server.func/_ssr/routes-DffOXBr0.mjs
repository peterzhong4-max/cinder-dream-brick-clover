import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Music, c as Gamepad2, d as BookOpen, f as ArrowLeft, i as Play, l as ClipboardList, o as Map$1, r as Store, s as KeyRound, t as Wind, u as CircleHelp } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DffOXBr0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CHARACTERS = [
	{
		id: "rocky",
		name: "Rocky \"The Starter\"",
		lore: "Starts with a squeaky kazoo. Everything better is earned.",
		stats: {
			hpMultiplier: 1,
			breathRegen: 1,
			damageMultiplier: 1,
			speedMultiplier: 1
		},
		color: "text-red-400",
		hex: "#ef4444",
		cost: 0,
		secret: {
			name: "Starter Resolve",
			desc: "Heals 50 HP.",
			cost: 30,
			duration: 2
		}
	},
	{
		id: "melody",
		name: "Melody \"The Metronome\"",
		lore: "Hears rhythm in the ticking clock.",
		stats: {
			hpMultiplier: .8,
			breathRegen: 1.5,
			damageMultiplier: 1,
			speedMultiplier: 1.2
		},
		color: "text-pink-400",
		hex: "#f472b6",
		cost: 2500,
		secret: {
			name: "Tempo Freeze",
			desc: "Freezes enemies for 2s.",
			cost: 40,
			duration: 2
		}
	},
	{
		id: "harmony",
		name: "Harmony \"Perfect Pitch\"",
		lore: "Surviving finals.",
		stats: {
			hpMultiplier: 1.2,
			breathRegen: 1,
			damageMultiplier: 1,
			speedMultiplier: 1
		},
		color: "text-blue-400",
		hex: "#60a5fa",
		cost: 3200,
		secret: {
			name: "Pitch Perfect",
			desc: "Destroys enemy projectiles.",
			cost: 30,
			duration: 2
		}
	},
	{
		id: "rhythm",
		name: "Rhythm \"Brass Lungs\"",
		lore: "Carries the marching band.",
		stats: {
			hpMultiplier: 1,
			breathRegen: .7,
			damageMultiplier: 1.5,
			speedMultiplier: .8
		},
		color: "text-orange-400",
		hex: "#fb923c",
		cost: 3800,
		secret: {
			name: "Marching Stomp",
			desc: "Massive knockback.",
			cost: 50,
			duration: 2
		}
	},
	{
		id: "treble",
		name: "Treble \"The Swift\"",
		lore: "Moves at presto tempo.",
		stats: {
			hpMultiplier: .6,
			breathRegen: 2,
			damageMultiplier: .8,
			speedMultiplier: 1.5
		},
		color: "text-yellow-300",
		hex: "#fde047",
		cost: 5200,
		secret: {
			name: "Presto Dash",
			desc: "Lightning dash forward.",
			cost: 20,
			duration: 1
		}
	},
	{
		id: "bass",
		name: "Bass \"The Wall\"",
		lore: "Practically indestructible.",
		stats: {
			hpMultiplier: 2,
			breathRegen: .5,
			damageMultiplier: 1.2,
			speedMultiplier: .6
		},
		color: "text-stone-400",
		hex: "#78716c",
		cost: 9e3,
		secret: {
			name: "Wall Shield",
			desc: "Invincible for 5s.",
			cost: 50,
			duration: 5
		}
	},
	{
		id: "keli",
		name: "Keli \"Jelly King\"",
		lore: "Trombone expert.",
		stats: {
			hpMultiplier: 2,
			breathRegen: 1.5,
			damageMultiplier: 2,
			speedMultiplier: 1
		},
		color: "text-amber-500",
		hex: "#f59e0b",
		cost: 16e3,
		secret: {
			name: "Jelly Bounce",
			desc: "Fires 8 massive notes.",
			cost: 40,
			duration: 2
		}
	},
	{
		id: "kai",
		name: "Kai \"From Dubai\"",
		lore: "Euphonium area blasts.",
		stats: {
			hpMultiplier: 1.8,
			breathRegen: 1.5,
			damageMultiplier: 1,
			speedMultiplier: .7
		},
		color: "text-yellow-600",
		hex: "#ca8a04",
		cost: 18e3,
		secret: {
			name: "Dubai Wealth",
			desc: "A massive explosion. Flattens henchmen.",
			cost: 60,
			duration: 3
		}
	},
	{
		id: "kashu",
		name: "Kashu \"The Jazzy\"",
		lore: "Alto sax improv.",
		stats: {
			hpMultiplier: .9,
			breathRegen: 1.2,
			damageMultiplier: 1.3,
			speedMultiplier: 1.3
		},
		color: "text-yellow-400",
		hex: "#facc15",
		cost: 11e3,
		secret: {
			name: "Jazz Improv",
			desc: "Doubles speed for 4s.",
			cost: 30,
			duration: 4
		}
	},
	{
		id: "eason",
		name: "Eason \"Wind Rider\"",
		lore: "Flute master.",
		stats: {
			hpMultiplier: .8,
			breathRegen: 3,
			damageMultiplier: 1.8,
			speedMultiplier: 2
		},
		color: "text-slate-200",
		hex: "#e2e8f0",
		cost: 22e3,
		secret: {
			name: "Tornado Sweep",
			desc: "Doubles projectile damage.",
			cost: 40,
			duration: 3
		}
	},
	{
		id: "thomas",
		name: "Thomas \"The Herald\"",
		lore: "Trumpet burst damage.",
		stats: {
			hpMultiplier: 1,
			breathRegen: .8,
			damageMultiplier: 1.6,
			speedMultiplier: 1
		},
		color: "text-yellow-500",
		hex: "#eab308",
		cost: 1e4,
		secret: {
			name: "Herald Call",
			desc: "+100 max breath.",
			cost: 45,
			duration: 4
		}
	},
	{
		id: "javis",
		name: "Javis \"The Snake Charmer\"",
		lore: "Clarinet tracking.",
		stats: {
			hpMultiplier: 1.1,
			breathRegen: 1.4,
			damageMultiplier: 1.1,
			speedMultiplier: 1.1
		},
		color: "text-zinc-400",
		hex: "#a1a1aa",
		cost: 8500,
		secret: {
			name: "Snake Bite",
			desc: "Hits every enemy on the map.",
			cost: 35,
			duration: 2
		}
	},
	{
		id: "alton",
		name: "Alton \"The Soloist\"",
		lore: "Quiet, sharp, and plays a mean trombone.",
		stats: {
			hpMultiplier: 1.2,
			breathRegen: 1.5,
			damageMultiplier: 2,
			speedMultiplier: 1.3
		},
		color: "text-red-500",
		hex: "#b91c1c",
		cost: 2e4,
		secret: {
			name: "Red Flash",
			desc: "A close-range shockwave.",
			cost: 40,
			duration: 4
		}
	},
	{
		id: "socialist_rocky",
		name: "Rally Rocky",
		lore: "Brings the whole band in on the downbeat.",
		stats: {
			hpMultiplier: 1.5,
			breathRegen: 1.2,
			damageMultiplier: 1.5,
			speedMultiplier: .9
		},
		color: "text-rose-500",
		hex: "#e11d48",
		cost: 24e3,
		secret: {
			name: "Downbeat Slash",
			desc: "A wide slash around you.",
			cost: 60,
			duration: 3
		}
	},
	{
		id: "harry",
		name: "Harry \"The Beastmaster\"",
		lore: "Has treats in his pockets.",
		stats: {
			hpMultiplier: 1.1,
			breathRegen: 1.2,
			damageMultiplier: 1,
			speedMultiplier: 1.1
		},
		color: "text-stone-400",
		hex: "#a8a29e",
		cost: 19e3,
		secret: {
			name: "Hound Swarm",
			desc: "Summons hunting dogs.",
			cost: 50,
			duration: 2
		}
	},
	{
		id: "tacops",
		name: "Tactical Operation Soldier",
		lore: "An over-prepared band operative.",
		stats: {
			hpMultiplier: 5,
			breathRegen: 3,
			damageMultiplier: 4,
			speedMultiplier: 1.8
		},
		color: "text-emerald-400",
		hex: "#34d399",
		cost: 1e5,
		secret: {
			name: "Airstrike",
			desc: "A huge blast on every enemy.",
			cost: 80,
			duration: 3
		}
	},
	{
		id: "quinn",
		name: "Quinn \"Section Leader\"",
		lore: "Keeps the whole row in time.",
		stats: {
			hpMultiplier: 1.15,
			breathRegen: 1.2,
			damageMultiplier: 1.15,
			speedMultiplier: 1.1
		},
		color: "text-teal-300",
		hex: "#5eead4",
		cost: 4500,
		secret: {
			name: "Count Off",
			desc: "Heals you and fires a ring of notes.",
			cost: 35,
			duration: 2
		}
	},
	{
		id: "nora",
		name: "Nora \"Snare Fire\"",
		lore: "The backbeat nobody skips.",
		stats: {
			hpMultiplier: .95,
			breathRegen: 1.3,
			damageMultiplier: 1.1,
			speedMultiplier: 1.25
		},
		color: "text-rose-400",
		hex: "#fb7185",
		cost: 5600,
		secret: {
			name: "Drum Roll",
			desc: "Freezes the room, then shoves it back.",
			cost: 40,
			duration: 2
		}
	},
	{
		id: "piper",
		name: "Piper \"Piccolo\"",
		lore: "Small horn, huge tempo.",
		stats: {
			hpMultiplier: .7,
			breathRegen: 1.8,
			damageMultiplier: .95,
			speedMultiplier: 1.65
		},
		color: "text-sky-300",
		hex: "#7dd3fc",
		cost: 6200,
		secret: {
			name: "Piccolo Dash",
			desc: "Dashes forward and speeds you up.",
			cost: 25,
			duration: 2
		}
	},
	{
		id: "milo",
		name: "Milo \"Mallet\"",
		lore: "Hears chords in wooden bars.",
		stats: {
			hpMultiplier: 1.1,
			breathRegen: 1.2,
			damageMultiplier: 1.25,
			speedMultiplier: 1
		},
		color: "text-violet-300",
		hex: "#c4b5fd",
		cost: 7e3,
		secret: {
			name: "Ripple",
			desc: "A mallet shockwave around you.",
			cost: 40,
			duration: 2
		}
	},
	{
		id: "bea",
		name: "Bea \"Low Reed\"",
		lore: "Bassoon lines that hold the chord.",
		stats: {
			hpMultiplier: 1.35,
			breathRegen: 1.1,
			damageMultiplier: 1.2,
			speedMultiplier: .9
		},
		color: "text-red-300",
		hex: "#fca5a5",
		cost: 9800,
		secret: {
			name: "Anchor Note",
			desc: "A short shield and a breath refill.",
			cost: 40,
			duration: 2
		}
	},
	{
		id: "luna",
		name: "Luna \"Bell Choir\"",
		lore: "Every hit rings clean.",
		stats: {
			hpMultiplier: .9,
			breathRegen: 2.2,
			damageMultiplier: 1.05,
			speedMultiplier: 1.05
		},
		color: "text-indigo-300",
		hex: "#a5b4fc",
		cost: 11e3,
		secret: {
			name: "Bell Halo",
			desc: "Notes orbit around you.",
			cost: 45,
			duration: 4
		}
	},
	{
		id: "coco",
		name: "Coco \"Cajon\"",
		lore: "The beat you feel in the floor.",
		stats: {
			hpMultiplier: 1.25,
			breathRegen: 1,
			damageMultiplier: 1.15,
			speedMultiplier: 1
		},
		color: "text-orange-400",
		hex: "#fb923c",
		cost: 12e3,
		secret: {
			name: "Floor Stomp",
			desc: "A close blast that shoves enemies.",
			cost: 45,
			duration: 2
		}
	},
	{
		id: "otto",
		name: "Otto \"Double Reed\"",
		lore: "Oboe, in tune, on purpose.",
		stats: {
			hpMultiplier: 1,
			breathRegen: 1.15,
			damageMultiplier: 1.55,
			speedMultiplier: 1
		},
		color: "text-stone-300",
		hex: "#d6d3d1",
		cost: 14e3,
		secret: {
			name: "Piercing Tone",
			desc: "Five heavy notes in every direction.",
			cost: 45,
			duration: 2
		}
	},
	{
		id: "sage",
		name: "Sage \"Conductor\"",
		lore: "One hand, and the room waits.",
		stats: {
			hpMultiplier: 1.05,
			breathRegen: 1.4,
			damageMultiplier: .9,
			speedMultiplier: 1
		},
		color: "text-slate-200",
		hex: "#e2e8f0",
		cost: 16500,
		secret: {
			name: "Fermata",
			desc: "Freezes enemies and patches you up.",
			cost: 50,
			duration: 3
		}
	},
	{
		id: "riley",
		name: "Riley \"Sousaphone\"",
		lore: "Wraps the whole band in brass.",
		stats: {
			hpMultiplier: 1.8,
			breathRegen: .7,
			damageMultiplier: 1.3,
			speedMultiplier: .65
		},
		color: "text-amber-300",
		hex: "#fcd34d",
		cost: 21e3,
		secret: {
			name: "Brass Wave",
			desc: "Knocks the whole field backward.",
			cost: 55,
			duration: 2
		}
	},
	{
		id: "nova",
		name: "Nova \"Pocket Synth\"",
		lore: "A hallway concert with extra cables.",
		stats: {
			hpMultiplier: 1.2,
			breathRegen: 1.6,
			damageMultiplier: 1.7,
			speedMultiplier: 1.25
		},
		color: "text-cyan-300",
		hex: "#22d3ee",
		cost: 45e3,
		secret: {
			name: "Drop",
			desc: "A huge blast and a speed kick.",
			cost: 60,
			duration: 3
		}
	}
];
var INSTRUMENTS = {
	kazoo: {
		name: "Kazoo",
		family: "clarinet",
		baseDamage: 6,
		breathCost: 4,
		color: "bg-orange-200",
		hex: "#fdba74",
		scale: .35,
		projSpeed: 6,
		hits: 1,
		cost: 0
	},
	partyHorn: {
		name: "Party Horn",
		family: "whistle",
		baseDamage: 7,
		breathCost: 4,
		color: "bg-pink-200",
		hex: "#fbcfe8",
		scale: .4,
		projSpeed: 7,
		hits: 1,
		cost: 450
	},
	claves: {
		name: "Claves",
		family: "cowbell",
		baseDamage: 8,
		breathCost: 5,
		color: "bg-amber-800",
		hex: "#92400e",
		scale: .4,
		projSpeed: 7,
		hits: 1,
		cost: 650
	},
	toyDrum: {
		name: "Toy Drum",
		family: "drum",
		baseDamage: 9,
		breathCost: 5,
		color: "bg-red-300",
		hex: "#fca5a5",
		scale: .5,
		projSpeed: 6,
		hits: 1,
		cost: 800
	},
	slideWhistle: {
		name: "Slide Whistle",
		family: "flute",
		baseDamage: 10,
		breathCost: 6,
		color: "bg-lime-200",
		hex: "#d9f99d",
		scale: .45,
		projSpeed: 8,
		hits: 1,
		cost: 1e3
	},
	whistle: {
		name: "Whistle",
		family: "whistle",
		baseDamage: 12,
		breathCost: 5,
		color: "bg-slate-200",
		hex: "#e2e8f0",
		scale: .4,
		projSpeed: 11,
		hits: 2,
		cost: 1300
	},
	recorder: {
		name: "Recorder",
		family: "flute",
		baseDamage: 13,
		breathCost: 7,
		color: "bg-lime-300",
		hex: "#bef264",
		scale: .7,
		projSpeed: 9,
		hits: 2,
		cost: 1500
	},
	plasticHorn: {
		name: "Plastic Horn",
		family: "trumpet",
		baseDamage: 14,
		breathCost: 8,
		color: "bg-yellow-200",
		hex: "#fef08a",
		scale: .6,
		projSpeed: 8,
		burst: 2,
		spread: .45,
		hits: 1,
		cost: 1800
	},
	toot: {
		name: "Toot",
		family: "clarinet",
		baseDamage: 18,
		breathCost: 8,
		color: "bg-cyan-200",
		hex: "#a5f3fc",
		scale: .5,
		projSpeed: 8,
		hits: 2,
		cost: 2600
	},
	dood: {
		name: "Dood",
		family: "clarinet",
		baseDamage: 22,
		breathCost: 12,
		color: "bg-green-300",
		hex: "#86efac",
		scale: .6,
		projSpeed: 5,
		knockback: 16,
		hits: 2,
		cost: 3200
	},
	tambourine: {
		name: "Tambourine",
		family: "tambourine",
		baseDamage: 20,
		breathCost: 6,
		color: "bg-amber-200",
		hex: "#fde68a",
		scale: .6,
		projSpeed: 8,
		hits: 2,
		cost: 3e3
	},
	snare: {
		name: "Snare",
		family: "drum",
		baseDamage: 24,
		breathCost: 8,
		color: "bg-rose-300",
		hex: "#fda4af",
		scale: .8,
		projSpeed: 9,
		hits: 2,
		cost: 3600
	},
	cowbell: {
		name: "Cowbell",
		family: "cowbell",
		baseDamage: 26,
		breathCost: 9,
		color: "bg-yellow-600",
		hex: "#ca8a04",
		scale: .6,
		projSpeed: 8,
		knockback: 16,
		hits: 2,
		cost: 3900
	},
	harmonica: {
		name: "Harmonica",
		family: "harmonica",
		baseDamage: 24,
		breathCost: 7,
		color: "bg-zinc-400",
		hex: "#a1a1aa",
		scale: .5,
		projSpeed: 10,
		hits: 3,
		cost: 4200
	},
	bongos: {
		name: "Bongos",
		family: "drum",
		baseDamage: 28,
		breathCost: 9,
		color: "bg-orange-400",
		hex: "#fb923c",
		scale: .7,
		projSpeed: 8,
		hits: 2,
		cost: 4400
	},
	ukulele: {
		name: "Ukulele",
		family: "uke",
		baseDamage: 26,
		breathCost: 8,
		color: "bg-orange-300",
		hex: "#fdba74",
		scale: .7,
		projSpeed: 9,
		hits: 3,
		cost: 4800
	},
	megaphone: {
		name: "Megaphone",
		family: "megaphone",
		baseDamage: 18,
		breathCost: 10,
		color: "bg-red-500",
		hex: "#ef4444",
		scale: .8,
		projSpeed: 9,
		burst: 4,
		spread: .35,
		hits: 2,
		cost: 5e3
	},
	melodica: {
		name: "Melodica",
		family: "harmonica",
		baseDamage: 30,
		breathCost: 10,
		color: "bg-red-400",
		hex: "#f87171",
		scale: .7,
		projSpeed: 8,
		hits: 3,
		cost: 5400
	},
	oboe: {
		name: "Oboe",
		family: "oboe",
		baseDamage: 30,
		breathCost: 16,
		color: "bg-stone-700",
		hex: "#44403c",
		scale: .9,
		projSpeed: 6,
		hits: 3,
		cost: 5600
	},
	panFlute: {
		name: "Pan Flute",
		family: "flute",
		baseDamage: 32,
		breathCost: 11,
		color: "bg-amber-300",
		hex: "#fcd34d",
		scale: .7,
		projSpeed: 9,
		hits: 3,
		cost: 6e3
	},
	clarinet: {
		name: "Clarinet",
		family: "clarinet",
		baseDamage: 32,
		breathCost: 14,
		color: "bg-zinc-700",
		hex: "#3f3f46",
		scale: 1,
		projSpeed: 6,
		hits: 3,
		cost: 6400
	},
	flute: {
		name: "Flute",
		family: "flute",
		baseDamage: 34,
		breathCost: 12,
		color: "bg-slate-200",
		hex: "#e2e8f0",
		scale: 1,
		projSpeed: 10,
		moveSpeedMod: 1.2,
		hits: 3,
		cost: 6800
	},
	xylophone: {
		name: "Xylophone",
		family: "mallet",
		baseDamage: 30,
		breathCost: 11,
		color: "bg-pink-300",
		hex: "#f9a8d4",
		scale: .9,
		projSpeed: 10,
		hits: 3,
		cost: 7e3
	},
	banjo: {
		name: "Banjo",
		family: "uke",
		baseDamage: 34,
		breathCost: 12,
		color: "bg-yellow-700",
		hex: "#a16207",
		scale: .9,
		projSpeed: 8,
		hits: 3,
		cost: 7400
	},
	frenchHorn: {
		name: "French Horn",
		family: "horn",
		baseDamage: 36,
		breathCost: 18,
		color: "bg-amber-400",
		hex: "#fbbf24",
		scale: 1,
		projSpeed: 7,
		hits: 3,
		cost: 7800
	},
	mandolin: {
		name: "Mandolin",
		family: "violin",
		baseDamage: 36,
		breathCost: 12,
		color: "bg-orange-800",
		hex: "#9a3412",
		scale: .8,
		projSpeed: 10,
		hits: 3,
		cost: 8200
	},
	altoSax: {
		name: "Alto Sax",
		family: "sax",
		baseDamage: 38,
		breathCost: 18,
		color: "bg-yellow-400",
		hex: "#facc15",
		scale: 1,
		projSpeed: 6,
		hits: 3,
		cost: 8600
	},
	violin: {
		name: "Violin",
		family: "violin",
		baseDamage: 40,
		breathCost: 14,
		color: "bg-amber-800",
		hex: "#92400e",
		scale: .9,
		projSpeed: 11,
		hits: 3,
		cost: 9200
	},
	piccolo: {
		name: "Piccolo",
		family: "flute",
		baseDamage: 28,
		breathCost: 12,
		color: "bg-slate-100",
		hex: "#f1f5f9",
		scale: .5,
		projSpeed: 13,
		moveSpeedMod: 1.35,
		hits: 4,
		cost: 9800,
		req: "flute"
	},
	conga: {
		name: "Conga",
		family: "drum",
		baseDamage: 44,
		breathCost: 16,
		color: "bg-red-800",
		hex: "#991b1b",
		scale: 1,
		projSpeed: 6,
		knockback: 24,
		hits: 3,
		cost: 10400
	},
	cymbals: {
		name: "Cymbals",
		family: "cymbal",
		baseDamage: 42,
		breathCost: 16,
		color: "bg-amber-300",
		hex: "#fcd34d",
		scale: 1,
		projSpeed: 7,
		knockback: 28,
		aoe: 36,
		hits: 2,
		cost: 11e3
	},
	bassoon: {
		name: "Bassoon",
		family: "bassoon",
		baseDamage: 46,
		breathCost: 22,
		color: "bg-red-900",
		hex: "#7f1d1d",
		scale: 1.2,
		projSpeed: 5,
		knockback: 36,
		hits: 4,
		cost: 12e3
	},
	trumpet: {
		name: "Trumpet",
		family: "trumpet",
		baseDamage: 50,
		breathCost: 22,
		color: "bg-yellow-500",
		hex: "#eab308",
		scale: 1,
		projSpeed: 10,
		burst: 3,
		spread: .15,
		hits: 2,
		cost: 13e3
	},
	marimba: {
		name: "Marimba",
		family: "mallet",
		baseDamage: 44,
		breathCost: 15,
		color: "bg-violet-400",
		hex: "#a78bfa",
		scale: 1.1,
		projSpeed: 8,
		hits: 4,
		cost: 12500,
		req: "xylophone"
	},
	sopranoSax: {
		name: "Soprano Sax",
		family: "sax_straight",
		baseDamage: 40,
		breathCost: 16,
		color: "bg-yellow-300",
		hex: "#fde047",
		scale: .8,
		projSpeed: 8,
		hits: 3,
		cost: 14e3,
		req: "altoSax"
	},
	mellophone: {
		name: "Mellophone",
		family: "horn",
		baseDamage: 52,
		breathCost: 20,
		color: "bg-yellow-400",
		hex: "#facc15",
		scale: 1.1,
		projSpeed: 9,
		hits: 3,
		cost: 14500,
		req: "frenchHorn"
	},
	accordion: {
		name: "Accordion",
		family: "accordion",
		baseDamage: 48,
		breathCost: 20,
		color: "bg-red-600",
		hex: "#dc2626",
		scale: 1.1,
		projSpeed: 6,
		burst: 3,
		spread: .4,
		hits: 3,
		cost: 15e3
	},
	glockenspiel: {
		name: "Glockenspiel",
		family: "mallet",
		baseDamage: 54,
		breathCost: 16,
		color: "bg-cyan-200",
		hex: "#a5f3fc",
		scale: .7,
		projSpeed: 13,
		hits: 4,
		cost: 16e3,
		req: "xylophone"
	},
	englishHorn: {
		name: "English Horn",
		family: "horn",
		baseDamage: 62,
		breathCost: 20,
		color: "bg-stone-600",
		hex: "#57534e",
		scale: 1,
		projSpeed: 7,
		hits: 4,
		cost: 17e3
	},
	bassClarinet: {
		name: "Bass Clarinet",
		family: "bassClarinet",
		baseDamage: 56,
		breathCost: 22,
		color: "bg-zinc-800",
		hex: "#27272a",
		scale: 1.3,
		projSpeed: 5,
		hits: 4,
		cost: 15500,
		req: "clarinet"
	},
	flugelhorn: {
		name: "Flugelhorn",
		family: "trumpet",
		baseDamage: 48,
		breathCost: 20,
		color: "bg-yellow-600",
		hex: "#ca8a04",
		scale: 1.2,
		projSpeed: 7,
		burst: 5,
		spread: .25,
		hits: 3,
		cost: 16500,
		req: "trumpet"
	},
	cello: {
		name: "Cello",
		family: "violin",
		baseDamage: 64,
		breathCost: 22,
		color: "bg-orange-900",
		hex: "#7c2d12",
		scale: 1.3,
		projSpeed: 7,
		hits: 4,
		cost: 18e3,
		req: "violin"
	},
	tenorSax: {
		name: "Tenor Sax",
		family: "sax",
		baseDamage: 60,
		breathCost: 24,
		color: "bg-yellow-500",
		hex: "#eab308",
		scale: 1.3,
		projSpeed: 5,
		knockback: 28,
		hits: 4,
		cost: 19e3,
		req: "altoSax"
	},
	bagpipes: {
		name: "Bagpipes",
		family: "bagpipe",
		baseDamage: 58,
		breathCost: 24,
		color: "bg-emerald-700",
		hex: "#047857",
		scale: 1.2,
		projSpeed: 6,
		aoe: 46,
		hits: 4,
		cost: 2e4
	},
	contrabassOboe: {
		name: "C. Oboe",
		family: "oboe",
		baseDamage: 70,
		breathCost: 28,
		color: "bg-stone-900",
		hex: "#1c1917",
		scale: 1.4,
		projSpeed: 5,
		hits: 5,
		cost: 21e3,
		req: "oboe"
	},
	bassDrum: {
		name: "Bass Drum",
		family: "drum",
		baseDamage: 78,
		breathCost: 28,
		color: "bg-rose-800",
		hex: "#9f1239",
		scale: 1.4,
		projSpeed: 5,
		knockback: 55,
		aoe: 64,
		hits: 3,
		cost: 22e3,
		req: "snare"
	},
	bassTrumpet: {
		name: "Bass Trumpet",
		family: "trumpet",
		baseDamage: 82,
		breathCost: 28,
		color: "bg-amber-700",
		hex: "#b45309",
		scale: 1.2,
		projSpeed: 8,
		burst: 2,
		spread: .12,
		hits: 4,
		cost: 24e3,
		req: "trumpet"
	},
	trombone: {
		name: "Trombone",
		family: "trombone",
		baseDamage: 68,
		breathCost: 32,
		color: "bg-amber-600",
		hex: "#d97706",
		scale: 1.5,
		projSpeed: 7,
		rootPlayer: true,
		hits: 5,
		cost: "Quest"
	},
	contrabassoon: {
		name: "Contrabassoon",
		family: "bassoon",
		baseDamage: 88,
		breathCost: 36,
		color: "bg-orange-900",
		hex: "#7c2d12",
		scale: 1.6,
		projSpeed: 4,
		knockback: 60,
		aoe: 48,
		hits: 5,
		cost: 26e3,
		req: "bassoon"
	},
	baritoneSax: {
		name: "Baritone Sax",
		family: "sax",
		baseDamage: 84,
		breathCost: 32,
		color: "bg-yellow-700",
		hex: "#a16207",
		scale: 1.7,
		projSpeed: 4,
		burst: 3,
		spread: .28,
		hits: 5,
		cost: 27e3,
		req: "tenorSax"
	},
	euphonium: {
		name: "Euphonium",
		family: "tuba",
		baseDamage: 96,
		breathCost: 42,
		color: "bg-yellow-600",
		hex: "#ca8a04",
		scale: .9,
		projSpeed: 3,
		aoe: 90,
		hits: 2,
		cost: 28e3
	},
	harp: {
		name: "Concert Harp",
		family: "harp",
		baseDamage: 90,
		breathCost: 20,
		color: "bg-yellow-200",
		hex: "#fef08a",
		scale: 1.3,
		projSpeed: 12,
		pierce: 3,
		hits: 5,
		cost: 3e4
	},
	contrabassTrombone: {
		name: "C. Trombone",
		family: "trombone",
		baseDamage: 110,
		breathCost: 46,
		color: "bg-amber-800",
		hex: "#92400e",
		scale: 2,
		projSpeed: 4,
		rootPlayer: true,
		hits: 6,
		cost: 32e3,
		req: "trombone"
	},
	timpani: {
		name: "Timpani",
		family: "drum",
		baseDamage: 108,
		breathCost: 34,
		color: "bg-amber-900",
		hex: "#78350f",
		scale: 1.5,
		projSpeed: 5,
		knockback: 70,
		aoe: 80,
		hits: 3,
		cost: 34e3,
		req: "bassDrum"
	},
	tuba: {
		name: "Tuba",
		family: "tuba",
		baseDamage: 130,
		breathCost: 50,
		color: "bg-yellow-500",
		hex: "#eab308",
		scale: 1.3,
		projSpeed: 4,
		rootPlayer: true,
		aoe: 130,
		hits: 3,
		cost: 36e3
	},
	sousaphone: {
		name: "Sousaphone",
		family: "sousaphone",
		baseDamage: 120,
		breathCost: 48,
		color: "bg-amber-100",
		hex: "#fef3c7",
		scale: 1.4,
		projSpeed: 4,
		aoe: 110,
		moveSpeedMod: .8,
		hits: 4,
		cost: 4e4,
		req: "tuba"
	},
	concertBass: {
		name: "Concert Bass",
		family: "violin",
		baseDamage: 125,
		breathCost: 30,
		color: "bg-stone-800",
		hex: "#292524",
		scale: 1.6,
		projSpeed: 6,
		hits: 5,
		cost: 38e3,
		req: "cello"
	},
	gong: {
		name: "Gong",
		family: "cymbal",
		baseDamage: 140,
		breathCost: 40,
		color: "bg-yellow-500",
		hex: "#eab308",
		scale: 1.6,
		projSpeed: 4,
		knockback: 80,
		aoe: 110,
		hits: 2,
		cost: 42e3
	},
	contrabassBassoon: {
		name: "C. Bassoon",
		family: "bassoon",
		baseDamage: 135,
		breathCost: 42,
		color: "bg-red-950",
		hex: "#450a0a",
		scale: 1.8,
		projSpeed: 3,
		rootPlayer: true,
		hits: 6,
		cost: 44e3,
		req: "bassoon"
	},
	contrabassSax: {
		name: "C. Sax",
		family: "sax",
		baseDamage: 150,
		breathCost: 44,
		color: "bg-yellow-800",
		hex: "#854d0e",
		scale: 2.2,
		projSpeed: 3,
		hits: 6,
		cost: 48e3,
		req: "baritoneSax"
	},
	pipeOrgan: {
		name: "Pipe Organ",
		family: "tuba",
		baseDamage: 160,
		breathCost: 55,
		color: "bg-slate-300",
		hex: "#cbd5e1",
		scale: 1.8,
		projSpeed: 3,
		aoe: 100,
		rootPlayer: true,
		hits: 4,
		cost: 56e3
	},
	synth: {
		name: "Pocket Synth",
		family: "synth",
		baseDamage: 120,
		breathCost: 14,
		color: "bg-cyan-400",
		hex: "#22d3ee",
		scale: .8,
		projSpeed: 14,
		passWalls: true,
		burst: 3,
		spread: .2,
		hits: 5,
		cost: 4e4
	},
	egg: {
		name: "Egg",
		family: "throwable",
		baseDamage: 10,
		breathCost: 0,
		color: "bg-orange-100",
		hex: "#ffedd5",
		scale: .5,
		projSpeed: 12,
		passWalls: true,
		hits: 1,
		cost: 0,
		shape: "egg"
	},
	goldenKazoo: {
		name: "Golden Kazoo",
		family: "clarinet",
		baseDamage: 250,
		breathCost: 5,
		color: "bg-yellow-300",
		hex: "#fef08a",
		scale: .4,
		projSpeed: 15,
		passWalls: true,
		hits: 10,
		cost: 8e4
	},
	diamondTriangle: {
		name: "D. Triangle",
		family: "triangle",
		baseDamage: 180,
		breathCost: 8,
		color: "bg-cyan-100",
		hex: "#cffafe",
		scale: .6,
		projSpeed: 18,
		hits: 8,
		cost: 12e4
	},
	desertEagle: {
		name: "Band Cannon",
		family: "gun",
		baseDamage: 9999,
		breathCost: 0,
		color: "bg-stone-500",
		hex: "#78716c",
		scale: .7,
		projSpeed: 25,
		passWalls: true,
		hits: 1,
		cost: 2e5,
		shape: "bullet"
	}
};
var BLACK_MARKET_IDS = [
	"goldenKazoo",
	"diamondTriangle",
	"desertEagle",
	"synth",
	"tacops",
	"nova"
];
var NOTES = [
	{
		name: "C4",
		freq: 261.63,
		key: "t",
		isBlack: false
	},
	{
		name: "C#4",
		freq: 277.18,
		key: "5",
		isBlack: true
	},
	{
		name: "D4",
		freq: 293.66,
		key: "y",
		isBlack: false
	},
	{
		name: "D#4",
		freq: 311.13,
		key: "6",
		isBlack: true
	},
	{
		name: "E4",
		freq: 329.63,
		key: "u",
		isBlack: false
	},
	{
		name: "F4",
		freq: 349.23,
		key: "i",
		isBlack: false
	},
	{
		name: "F#4",
		freq: 369.99,
		key: "8",
		isBlack: true
	},
	{
		name: "G4",
		freq: 392,
		key: "o",
		isBlack: false
	},
	{
		name: "G#4",
		freq: 415.3,
		key: "9",
		isBlack: true
	},
	{
		name: "A4",
		freq: 440,
		key: "p",
		isBlack: false
	},
	{
		name: "A#4",
		freq: 466.16,
		key: "0",
		isBlack: true
	},
	{
		name: "B4",
		freq: 493.88,
		key: "[",
		isBlack: false
	},
	{
		name: "C5",
		freq: 523.25,
		key: "]",
		isBlack: false
	}
];
var COMBOS = {
	rocky: {
		seq: [
			"C4",
			"D4",
			"C4"
		],
		name: "Toot-Dood Rally"
	},
	melody: {
		seq: [
			"C4",
			"D4",
			"E4"
		],
		name: "Tempo Heal"
	},
	harmony: {
		seq: [
			"C4",
			"E4",
			"G4"
		],
		name: "Perfect Chord"
	},
	rhythm: {
		seq: [
			"C4",
			"C4",
			"C4"
		],
		name: "Marching Blast"
	},
	treble: {
		seq: [
			"C5",
			"B4",
			"A4"
		],
		name: "Presto Aura"
	},
	bass: {
		seq: [
			"C4",
			"G4",
			"C5"
		],
		name: "Fortissimo"
	},
	keli: {
		seq: [
			"G4",
			"F4",
			"D4"
		],
		name: "Trombone Slide"
	},
	kai: {
		seq: [
			"C4",
			"C#4",
			"D4"
		],
		name: "Euphoric Boom"
	},
	kashu: {
		seq: [
			"E4",
			"G4",
			"B4"
		],
		name: "Jazz Riff"
	},
	eason: {
		seq: [
			"C5",
			"A4",
			"F4"
		],
		name: "Tornado Aura"
	},
	thomas: {
		seq: [
			"G4",
			"C5",
			"G4"
		],
		name: "Brass Barrage"
	},
	javis: {
		seq: [
			"F4",
			"A4",
			"C5"
		],
		name: "Snake Charm"
	},
	quinn: {
		seq: [
			"C4",
			"E4",
			"C4"
		],
		name: "Count-In"
	},
	nora: {
		seq: [
			"D4",
			"D4",
			"G4"
		],
		name: "Backbeat"
	},
	piper: {
		seq: [
			"C5",
			"E4",
			"G4"
		],
		name: "Piccolo Run"
	},
	milo: {
		seq: [
			"C4",
			"D4",
			"G4"
		],
		name: "Wood Chord"
	},
	bea: {
		seq: [
			"A4",
			"G4",
			"F4"
		],
		name: "Anchor"
	},
	luna: {
		seq: [
			"G4",
			"A4",
			"B4"
		],
		name: "Bell Peal"
	},
	coco: {
		seq: [
			"D4",
			"F4",
			"A4"
		],
		name: "Stomp Box"
	},
	otto: {
		seq: [
			"F4",
			"G4",
			"A4"
		],
		name: "Reed Line"
	},
	sage: {
		seq: [
			"E4",
			"F4",
			"G4"
		],
		name: "Fermata Hold"
	},
	riley: {
		seq: [
			"C4",
			"C4",
			"G4"
		],
		name: "Brass Pedal"
	},
	nova: {
		seq: [
			"C5",
			"C5",
			"G4"
		],
		name: "Filter Sweep"
	}
};
var TEACHER_NAMES = [
	"Mr. Smith",
	"Anson C The Traitor",
	"Mrs. Robinson",
	"Mr. Medina",
	"Coach Hector",
	"Mrs. Gable",
	"Principal Skinner",
	"Ms. Palette",
	"Mr. Forte",
	"Mrs. Shush",
	"Hackerman",
	"Dr. Beaker",
	"Mr. Atlas",
	"Ms. Drama",
	"Mr. Saw",
	"Nurse Joyless",
	"Groundskeeper",
	"Mrs. Path",
	"Vice Principal",
	"Dr. Overlord",
	"The Board",
	"Mr. Calculus",
	"Coach Bench",
	"Madame Francais",
	"Dr. Quantum",
	"Mrs. Melisma",
	"Mr. Treble",
	"The Secretary",
	"Vice Principal Doom",
	"The Superintendent",
	"The Mayor",
	"The Governor",
	"Sec. of Education",
	"The President",
	"Earth Guardian",
	"Galactic Principal",
	"Quantum Overlord",
	"Time Keeper",
	"Reality Weaver",
	"The Void Master"
];
var SUBJECTS = [
	"Mathematics",
	"Betrayal",
	"History",
	"Advanced Science",
	"P.E.",
	"Literature",
	"Detention",
	"Art",
	"Rogue Band",
	"Library",
	"IT Support",
	"Chemistry",
	"Geography",
	"Theater",
	"Woodshop",
	"Infirmary",
	"Maintenance",
	"Guidance",
	"Discipline",
	"Superintendent",
	"Final Exams",
	"Calculus",
	"Varsity P.E.",
	"French",
	"Physics",
	"Choir",
	"Elite Band",
	"Front Office",
	"Expulsion",
	"District Overlord",
	"City Rules",
	"State Law",
	"Federal Law",
	"National Order",
	"Global Dominance",
	"Cosmic Detention",
	"Multiverse Laws",
	"Temporal Limits",
	"String Theory",
	"Absolute Nothing"
];
var STANDARD_LEVELS = Array.from({ length: 40 }, (_, i) => {
	const spiked = i === 3;
	return {
		id: i + 1,
		teacher: TEACHER_NAMES[i] || `Boss ${i + 1}`,
		subject: SUBJECTS[i] || `Subject ${i + 1}`,
		hp: spiked ? 5e3 : Math.round(500 * 1.2 ** i),
		damage: spiked ? 50 : 10 + i * 5,
		henchmenCount: spiked ? 50 : 10 + i * 5,
		reward: spiked ? 2200 : Math.round(160 * 1.12 ** i),
		speed: spiked ? 4 : 1.5,
		glassesType: [
			"round",
			"square",
			"cat",
			"sport",
			"thick"
		][i % 5] || "round",
		shirtColor: [
			"#3b82f6",
			"#ef4444",
			"#8b5cf6",
			"#10b981",
			"#f59e0b"
		][i % 5] || "#3b82f6"
	};
});
var DLC_LEVELS = Array.from({ length: 50 }, (_, i) => ({
	id: 41 + i,
	teacher: `Brainrot Overlord ${i + 1}`,
	subject: `Skibidi Studies ${i + 1}`,
	hp: Math.round(15e3 * 1.1 ** i),
	damage: 50 + i * 10,
	henchmenCount: 20 + i * 2,
	reward: 1800 + i * 80,
	speed: 2,
	glassesType: "thick",
	shirtColor: "#84cc16",
	isDLC: true
}));
[...STANDARD_LEVELS, ...DLC_LEVELS];
var HENCHMEN = [
	{
		typeId: "goon",
		hp: 40,
		speed: 3.5,
		damage: 5,
		radius: 15
	},
	{
		typeId: "thug",
		hp: 80,
		speed: 2,
		damage: 10,
		radius: 20
	},
	{
		typeId: "soundproofer",
		hp: 150,
		speed: 1.5,
		damage: 15,
		radius: 25
	},
	{
		typeId: "linebacker",
		hp: 100,
		speed: 2.5,
		damage: 30,
		radius: 20
	},
	{
		typeId: "quarterback",
		hp: 60,
		speed: 3,
		damage: 15,
		radius: 18
	},
	{
		typeId: "striker",
		hp: 110,
		speed: 2.8,
		damage: 26,
		radius: 18
	},
	{
		typeId: "kicker",
		hp: 70,
		speed: 2.6,
		damage: 14,
		radius: 16
	},
	{
		typeId: "angry_student",
		hp: 1,
		speed: 4.5,
		damage: 8,
		radius: 12
	},
	{
		typeId: "brainrot_kid",
		hp: 200,
		speed: 4,
		damage: 30,
		radius: 15,
		isBrainrot: true
	}
];
function henchTemplate(typeId) {
	return HENCHMEN.find((h) => h.typeId === typeId) ?? HENCHMEN[0];
}
var STORY_MISSIONS = [
	{
		id: "m_eason_1",
		giver: "Eason",
		title: "The Egg Drop",
		desc: "Sneak past the guards and hit Kashu with an egg during the class-rep speech. Click or tap to throw.",
		rewardText: "10000 Reeds",
		levelData: {
			id: "m_eason_1",
			teacher: "Kashu",
			subject: "Speech",
			hp: 3e3,
			damage: 50,
			henchmenCount: 15,
			reward: 1e4,
			speed: 1.5,
			glassesType: "square",
			shirtColor: "#facc15",
			bossSpawnsImmediately: true,
			bossBehavior: "speech",
			customHenchmen: ["soundproofer"]
		}
	},
	{
		id: "m_eason_2",
		giver: "Eason",
		title: "Flute Supremacy",
		desc: "Prove flutes rule. Defeat a giant brass boss and the minions.",
		rewardText: "15000 Reeds",
		levelData: {
			id: "m_eason_2",
			teacher: "Brass Titan",
			subject: "Heavy Metal",
			hp: 15e3,
			damage: 200,
			henchmenCount: 50,
			reward: 15e3,
			speed: 1.6,
			glassesType: "thick",
			shirtColor: "#eab308"
		}
	},
	{
		id: "m_kashu_1",
		giver: "Kashu",
		title: "Football Match",
		desc: "Eason is in the football match. Dodge sprinting strikers and the footballs the kickers boot at you.",
		rewardText: "10000 Reeds",
		levelData: {
			id: "m_kashu_1",
			teacher: "Eason",
			subject: "Football Match",
			hp: 4e3,
			damage: 60,
			henchmenCount: 20,
			reward: 1e4,
			speed: 2,
			glassesType: "sport",
			shirtColor: "#e2e8f0",
			bossSpawnsImmediately: true,
			customHenchmen: ["striker", "kicker"]
		}
	},
	{
		id: "m_kashu_2",
		giver: "Kashu",
		title: "Jazz Club Bounce",
		desc: "Survive a room full of fast metronome thugs.",
		rewardText: "12000 Reeds",
		levelData: {
			id: "m_kashu_2",
			teacher: "Jazz Enforcer",
			subject: "Improv Survival",
			hp: 8e3,
			damage: 100,
			henchmenCount: 60,
			reward: 12e3,
			speed: 1.8,
			glassesType: "round",
			shirtColor: "#a16207",
			customHenchmen: ["thug"]
		}
	},
	{
		id: "m_melody_1",
		giver: "Melody",
		title: "Protect the Tempo",
		desc: "Defeat a swarm of 80 metronome thugs. Keep the rhythm steady.",
		rewardText: "8000 Reeds",
		levelData: {
			id: "m_melody_1",
			teacher: "Maestro Clock",
			subject: "Tempo Maintenance",
			hp: 5e3,
			damage: 50,
			henchmenCount: 80,
			reward: 8e3,
			speed: 1.5,
			glassesType: "round",
			shirtColor: "#f472b6",
			customHenchmen: ["thug"]
		}
	},
	{
		id: "m_thomas_1",
		giver: "Thomas",
		title: "Herald's Duel",
		desc: "A 1-on-1 duel with a fast trumpet clone.",
		rewardText: "15000 Reeds",
		levelData: {
			id: "m_thomas_1",
			teacher: "Shadow Thomas",
			subject: "Trumpet Duel",
			hp: 2e4,
			damage: 300,
			henchmenCount: 0,
			reward: 15e3,
			speed: 2.4,
			glassesType: "sport",
			shirtColor: "#111827",
			bossSpawnsImmediately: true
		}
	},
	{
		id: "m_janitor_1",
		giver: "Janitor Joe",
		title: "The Big Spill",
		desc: "The halls are full of angry fans. Clear them, then face the principal.",
		rewardText: "20000 Reeds",
		levelData: {
			id: "m_janitor_1",
			teacher: "Principal Mess",
			subject: "Hallway Cleanup",
			hp: 1e4,
			damage: 80,
			henchmenCount: 100,
			reward: 2e4,
			speed: 1.7,
			glassesType: "thick",
			shirtColor: "#166534",
			customHenchmen: ["angry_student"]
		}
	},
	{
		id: "m_piper_1",
		giver: "Piper",
		title: "Piccolo Patrol",
		desc: "A fast teacher is cutting through the practice rooms. Keep up.",
		rewardText: "9000 Reeds",
		levelData: {
			id: "m_piper_1",
			teacher: "Coach Tempo",
			subject: "Speed Drill",
			hp: 4500,
			damage: 40,
			henchmenCount: 30,
			reward: 9e3,
			speed: 2.6,
			glassesType: "sport",
			shirtColor: "#7dd3fc",
			customHenchmen: ["goon"]
		}
	},
	{
		id: "m_nora_1",
		giver: "Nora",
		title: "Drumline Rush",
		desc: "The drumline won't stop marching. Clear the thugs, then the drum major.",
		rewardText: "11000 Reeds",
		levelData: {
			id: "m_nora_1",
			teacher: "Drum Major",
			subject: "Backbeat",
			hp: 7e3,
			damage: 70,
			henchmenCount: 40,
			reward: 11e3,
			speed: 1.7,
			glassesType: "square",
			shirtColor: "#fb7185",
			customHenchmen: ["thug"]
		}
	},
	{
		id: "m_quinn_1",
		giver: "Quinn",
		title: "Row Check",
		desc: "Quinn needs the section in tune. A mixed hallway stands in the way.",
		rewardText: "8000 Reeds",
		levelData: {
			id: "m_quinn_1",
			teacher: "Section Judge",
			subject: "Balance Test",
			hp: 5500,
			damage: 45,
			henchmenCount: 24,
			reward: 8e3,
			speed: 1.6,
			glassesType: "round",
			shirtColor: "#5eead4"
		}
	},
	{
		id: "m_bea_1",
		giver: "Bea",
		title: "Low Reed Hall",
		desc: "Soundproofers are swallowing the bass line. Punch through them.",
		rewardText: "12000 Reeds",
		levelData: {
			id: "m_bea_1",
			teacher: "Ms. Mute",
			subject: "Bass Clef",
			hp: 9e3,
			damage: 55,
			henchmenCount: 18,
			reward: 12e3,
			speed: 1.4,
			glassesType: "thick",
			shirtColor: "#7f1d1d",
			customHenchmen: ["soundproofer"]
		}
	},
	{
		id: "m_sage_1",
		giver: "Sage",
		title: "Hold the Fermata",
		desc: "A one-on-one with the librarian who hates noise. No minions. Just you and the baton.",
		rewardText: "14000 Reeds",
		levelData: {
			id: "m_sage_1",
			teacher: "Librarian Still",
			subject: "Silence",
			hp: 12e3,
			damage: 90,
			henchmenCount: 0,
			reward: 14e3,
			speed: 1.5,
			glassesType: "round",
			shirtColor: "#0f172a",
			bossSpawnsImmediately: true
		}
	},
	{
		id: "m_luna_1",
		giver: "Luna",
		title: "Bell Tower",
		desc: "Climb isn't the hard part. The bell captain rings the whole room.",
		rewardText: "13000 Reeds",
		levelData: {
			id: "m_luna_1",
			teacher: "Bell Captain",
			subject: "Chimes",
			hp: 8e3,
			damage: 65,
			henchmenCount: 16,
			reward: 13e3,
			speed: 1.8,
			glassesType: "cat",
			shirtColor: "#818cf8",
			bossSpawnsImmediately: true,
			customHenchmen: ["goon"]
		}
	},
	{
		id: "m_milo_1",
		giver: "Milo",
		title: "Bar by Bar",
		desc: "Mallets against a swarm. Stay moving and don't let the crowd stack up.",
		rewardText: "10000 Reeds",
		levelData: {
			id: "m_milo_1",
			teacher: "Mallet Maestro",
			subject: "Wood Bars",
			hp: 6500,
			damage: 50,
			henchmenCount: 55,
			reward: 1e4,
			speed: 1.5,
			glassesType: "square",
			shirtColor: "#a78bfa",
			customHenchmen: ["goon"]
		}
	},
	{
		id: "m_riley_1",
		giver: "Riley",
		title: "Heavy Brass",
		desc: "A slow, huge sousaphone teacher. The soundproofers walk with them.",
		rewardText: "16000 Reeds",
		levelData: {
			id: "m_riley_1",
			teacher: "Brass Wall",
			subject: "Pedal Tone",
			hp: 18e3,
			damage: 80,
			henchmenCount: 12,
			reward: 16e3,
			speed: 1.15,
			glassesType: "thick",
			shirtColor: "#fbbf24",
			customHenchmen: ["soundproofer"]
		}
	},
	{
		id: "m_otto_1",
		giver: "Otto",
		title: "Reed Off",
		desc: "A straight duel. One oboe teacher, no crowd.",
		rewardText: "15000 Reeds",
		levelData: {
			id: "m_otto_1",
			teacher: "Oboe Rival",
			subject: "Double Reed",
			hp: 14e3,
			damage: 120,
			henchmenCount: 0,
			reward: 15e3,
			speed: 2.1,
			glassesType: "round",
			shirtColor: "#44403c",
			bossSpawnsImmediately: true
		}
	},
	{
		id: "m_harmony_1",
		giver: "Harmony",
		title: "Perfect Chord",
		desc: "Three note ideas, one messy hallway. Clear it and face the choir lead.",
		rewardText: "9000 Reeds",
		levelData: {
			id: "m_harmony_1",
			teacher: "Choir Lead",
			subject: "Harmony Check",
			hp: 6e3,
			damage: 48,
			henchmenCount: 28,
			reward: 9e3,
			speed: 1.6,
			glassesType: "cat",
			shirtColor: "#60a5fa"
		}
	}
];
var BOARD = [
	{
		title: "Warm-up Laps",
		desc: "Jog the hall and clear the early goons.",
		hench: "goon"
	},
	{
		title: "Lost Mouthpiece",
		desc: "A teacher will not start class until the hallway is quiet.",
		hench: "goon"
	},
	{
		title: "Scale Stairs",
		desc: "Climb a stack of easy drills.",
		hench: "goon"
	},
	{
		title: "Pencil Patrol",
		desc: "Sharpened pencils are not the problem. The crowd is.",
		hench: "angry_student"
	},
	{
		title: "Metronome March",
		desc: "Keep moving. The thugs keep time.",
		hench: "thug"
	},
	{
		title: "Folder Run",
		desc: "Music folders everywhere. Clear a path.",
		hench: "goon"
	},
	{
		title: "Chair Stack",
		desc: "The chairs are fine. The students are not.",
		hench: "angry_student"
	},
	{
		title: "Bell Rehearsal",
		desc: "One teacher, no crowd. Do not miss.",
		hench: "none"
	},
	{
		title: "Reed Box",
		desc: "Soundproofers ate the reed case.",
		hench: "soundproofer"
	},
	{
		title: "Late Bus",
		desc: "Fast goons between you and the door.",
		hench: "goon"
	},
	{
		title: "Sectionals",
		desc: "Each row sent somebody. Meet them.",
		hench: "thug"
	},
	{
		title: "Quiet Sign",
		desc: "The library wants the hall silent.",
		hench: "soundproofer"
	},
	{
		title: "Pep Rally",
		desc: "Too many fans, one coach.",
		hench: "angry_student"
	},
	{
		title: "Low Brass Lane",
		desc: "Slow hits, heavy teacher.",
		hench: "thug"
	},
	{
		title: "High Note Hunt",
		desc: "Piccolo-speed goons.",
		hench: "goon"
	},
	{
		title: "Stand Lights",
		desc: "A dark practice room and a patient teacher.",
		hench: "none"
	},
	{
		title: "Drum Major",
		desc: "The line will not turn around.",
		hench: "thug"
	},
	{
		title: "Case Check",
		desc: "Open every case by clearing the room.",
		hench: "goon"
	},
	{
		title: "Mute Collection",
		desc: "Soundproofers are hoarding the mutes.",
		hench: "soundproofer"
	},
	{
		title: "Football Sideline",
		desc: "Strikers from the match wandered inside.",
		hench: "striker"
	},
	{
		title: "Kick Return",
		desc: "Kickers and a very loud coach.",
		hench: "kicker"
	},
	{
		title: "Poster Duty",
		desc: "Take down the noise, then the sponsor.",
		hench: "angry_student"
	},
	{
		title: "Choir Risers",
		desc: "Tall risers, short patience.",
		hench: "thug"
	},
	{
		title: "Theory Quiz",
		desc: "One strict teacher. No helpers.",
		hench: "none"
	},
	{
		title: "Valve Oil",
		desc: "Slippery goons, sticky teacher.",
		hench: "goon"
	},
	{
		title: "Bow Rescue",
		desc: "Strings room is packed.",
		hench: "thug"
	},
	{
		title: "Mallet Bin",
		desc: "Bars, mallets, and a swarm.",
		hench: "goon"
	},
	{
		title: "Cymbal Crash",
		desc: "They only stop if you do.",
		hench: "thug"
	},
	{
		title: "Hall Pass",
		desc: "Earn it. The vice principal is waiting.",
		hench: "soundproofer"
	},
	{
		title: "Night Lockup",
		desc: "Janitor lights, angry fans.",
		hench: "angry_student"
	},
	{
		title: "Score Copy",
		desc: "Forty parts and a mean librarian.",
		hench: "soundproofer"
	},
	{
		title: "Warm Brass",
		desc: "Long tones versus a charging line.",
		hench: "striker"
	},
	{
		title: "Cold Reeds",
		desc: "Oboe weather. Duel the rival.",
		hench: "none"
	},
	{
		title: "Bus Songs",
		desc: "The away crowd followed you back.",
		hench: "angry_student"
	},
	{
		title: "Stage Tape",
		desc: "Mark the floor by clearing it.",
		hench: "goon"
	},
	{
		title: "Light Cue",
		desc: "The booth teacher hates wrong notes.",
		hench: "thug"
	},
	{
		title: "Pit Orchestra",
		desc: "Low ceiling, lots of soundproofers.",
		hench: "soundproofer"
	},
	{
		title: "Encore",
		desc: "They asked for one more. Make it the last.",
		hench: "thug"
	},
	{
		title: "Trophy Case",
		desc: "Guard the case from fast goons.",
		hench: "goon"
	},
	{
		title: "Rain Delay",
		desc: "Footballers stuck in the band room.",
		hench: "kicker"
	},
	{
		title: "Final Tuning",
		desc: "A big teacher and a small crowd.",
		hench: "soundproofer"
	},
	{
		title: "Overtime Drill",
		desc: "Coach will not blow the whistle.",
		hench: "striker"
	},
	{
		title: "Library Fine",
		desc: "Silence, then the head librarian.",
		hench: "none"
	},
	{
		title: "Festival Bus",
		desc: "Every section sent a captain.",
		hench: "thug"
	},
	{
		title: "Snow Day",
		desc: "Indoor laps. Endless goons.",
		hench: "goon"
	},
	{
		title: "Award Night",
		desc: "The emcee is the last boss.",
		hench: "angry_student"
	},
	{
		title: "Closing Chord",
		desc: "Hold still. This teacher does not.",
		hench: "none"
	},
	{
		title: "Summer Band",
		desc: "The longest job on the board.",
		hench: "thug"
	}
];
var BOARD_GIVERS = [
	"Melody",
	"Harmony",
	"Rhythm",
	"Quinn",
	"Nora",
	"Piper",
	"Milo",
	"Bea",
	"Luna",
	"Coco",
	"Otto",
	"Sage",
	"Riley",
	"Thomas",
	"Kashu",
	"Eason",
	"Kai",
	"Keli",
	"Janitor Joe",
	"Harry"
];
var GLASSES = [
	"round",
	"square",
	"cat",
	"sport",
	"thick"
];
var SHIRTS = [
	"#3b82f6",
	"#ef4444",
	"#8b5cf6",
	"#10b981",
	"#f59e0b",
	"#fb7185",
	"#22d3ee"
];
function soften(mission) {
	const reward = Math.max(700, Math.round(mission.levelData.reward * .32));
	return {
		...mission,
		rewardText: `${reward} Reeds`,
		levelData: {
			...mission.levelData,
			reward
		}
	};
}
var MISSIONS = [...STORY_MISSIONS.map(soften), ...BOARD.map((job, i) => {
	const reward = 450 + i * 260;
	const duel = job.hench === "none";
	return {
		id: `m_board_${i + 1}`,
		giver: BOARD_GIVERS[i % BOARD_GIVERS.length],
		title: job.title,
		desc: job.desc,
		rewardText: `${reward} Reeds`,
		levelData: {
			id: `m_board_${i + 1}`,
			teacher: job.title,
			subject: "Mission Board",
			hp: 1600 + i * 650,
			damage: 16 + Math.floor(i * 1.3),
			henchmenCount: duel ? 0 : 8 + i % 7 * 4,
			reward,
			speed: 1.25 + i % 5 * .12,
			glassesType: GLASSES[i % GLASSES.length],
			shirtColor: SHIRTS[i % SHIRTS.length],
			bossSpawnsImmediately: duel || i % 8 === 0,
			customHenchmen: duel ? void 0 : [job.hench]
		}
	};
})];
var QUESTS = [
	{
		id: "q_brass",
		giver: "Kai & Keli",
		title: "The Brass Challenge",
		desc: "Take out 120 earplug goons and we'll slide you a trombone from the band room.",
		target: 120,
		metric: "goonsKilled",
		rewardType: "instrument",
		rewardId: "trombone",
		rewardText: "Trombone"
	},
	{
		id: "q_chosen",
		giver: "Eason",
		title: "The Chosen One",
		desc: "Eliminate 5 rival teachers.",
		target: 5,
		metric: "bossesDefeated",
		rewardType: "reeds",
		rewardAmount: 5e3,
		rewardText: "5000 Reeds"
	},
	{
		id: "q_jazz",
		giver: "Kashu",
		title: "Jazz Rebellion",
		desc: "Smash 30 metronome thugs for the sake of improv.",
		target: 30,
		metric: "thugsKilled",
		rewardType: "reeds",
		rewardAmount: 2500,
		rewardText: "2500 Reeds"
	},
	{
		id: "q_herald",
		giver: "Thomas",
		title: "Herald's Request",
		desc: "Soundproofers are blocking the fanfare. Take down 20 of them.",
		target: 20,
		metric: "soundproofersKilled",
		rewardType: "reeds",
		rewardAmount: 3e3,
		rewardText: "3000 Reeds"
	}
];
function characterById(id) {
	return CHARACTERS.find((c) => c.id === id) ?? CHARACTERS[0];
}
function blankUpgrade() {
	return {
		damageLvl: 0,
		breathLvl: 0,
		hitsLvl: 0
	};
}
function dmgCost(level) {
	return 250 + level * 350;
}
function breathCost(level) {
	return 200 + level * 280;
}
function hitsCost(level) {
	return 400 + level * 450;
}
function trainCost(level) {
	return Math.floor(400 * 1.55 ** level);
}
function gearGrade(cost) {
	if (cost === "Quest") return "Quest";
	if (cost < 2500) return "Weak";
	if (cost < 1e4) return "Mid";
	return "Strong";
}
function comboLabel(charId) {
	const combo = COMBOS[charId];
	if (!combo) return "No 3-note combo. Use Q for the secret.";
	const keys = combo.seq.map((n) => NOTES.find((note) => note.name === n)?.key.toUpperCase() ?? n).join(" ");
	return `${combo.name}: ${combo.seq.join(" - ")} (keys ${keys})`;
}
var audioCtx = null;
function initAudio() {
	if (typeof window === "undefined") return;
	const Ctx = window.AudioContext || window.webkitAudioContext;
	if (!Ctx) return;
	if (!audioCtx) audioCtx = new Ctx();
	if (audioCtx.state === "suspended") audioCtx.resume();
}
function playSynthesizer(freq, instId) {
	if (!audioCtx) return;
	const inst = INSTRUMENTS[instId] ?? INSTRUMENTS.toot;
	if (!inst) return;
	const now = audioCtx.currentTime;
	const mGain = audioCtx.createGain();
	const filter = audioCtx.createBiquadFilter();
	const osc = audioCtx.createOscillator();
	osc.connect(filter);
	filter.connect(mGain);
	mGain.connect(audioCtx.destination);
	let dur = .45;
	let f = freq;
	switch (inst.family) {
		case "flute":
			osc.type = "sine";
			filter.type = "lowpass";
			filter.frequency.value = 4e3;
			if (instId === "piccolo") f *= 2;
			dur = .55;
			break;
		case "clarinet":
		case "bassClarinet":
			osc.type = "square";
			filter.type = "lowpass";
			filter.frequency.value = f * 3;
			if (instId === "bassClarinet") f /= 2;
			break;
		case "oboe":
		case "bassoon":
			osc.type = "sawtooth";
			filter.type = "bandpass";
			filter.frequency.value = 1e3;
			if (instId === "bassoon" || instId === "contrabassOboe") f /= 2;
			if (instId === "contrabassoon" || instId === "contrabassBassoon") f /= 4;
			dur = .55;
			break;
		case "sax":
		case "sax_straight":
			osc.type = "sawtooth";
			filter.type = "lowpass";
			filter.frequency.setValueAtTime(Math.max(40, f), now);
			filter.frequency.linearRampToValueAtTime(f * 4, now + .05);
			if (instId === "sopranoSax") f *= 1.5;
			if (instId === "tenorSax") f /= 1.5;
			if (instId === "baritoneSax") f /= 2.5;
			if (instId === "contrabassSax") f /= 4;
			dur = .55;
			break;
		case "trumpet":
		case "trombone":
		case "horn":
		case "tuba":
		case "sousaphone":
			osc.type = inst.family === "horn" ? "triangle" : "sawtooth";
			filter.type = "lowpass";
			filter.frequency.setValueAtTime(40, now);
			filter.frequency.exponentialRampToValueAtTime(Math.max(80, f * 6), now + .08);
			if (instId.toLowerCase().includes("trombone")) f /= 2;
			if (instId === "tuba" || instId === "sousaphone") f /= 4;
			dur = .55;
			break;
		case "triangle":
			osc.type = "sine";
			f *= 4;
			dur = .8;
			break;
		case "gun":
			osc.type = "square";
			f = 70;
			dur = .12;
			break;
		case "throwable":
			osc.type = "sine";
			f = 720;
			dur = .16;
			break;
		case "drum":
		case "cymbal":
		case "tambourine":
		case "cowbell":
			osc.type = "triangle";
			f = inst.family === "cymbal" ? Math.max(f * 3, 900) : inst.family === "cowbell" ? 520 : 110;
			dur = .2;
			break;
		case "mallet":
		case "harp":
			osc.type = "sine";
			filter.type = "lowpass";
			filter.frequency.value = 5e3;
			dur = .7;
			break;
		case "violin":
		case "uke":
			osc.type = "sawtooth";
			filter.type = "lowpass";
			filter.frequency.value = 2400;
			dur = .5;
			break;
		case "accordion":
		case "harmonica":
		case "bagpipe":
			osc.type = "square";
			filter.type = "lowpass";
			filter.frequency.value = 1400;
			if (inst.family === "bagpipe") f *= .75;
			dur = .6;
			break;
		case "whistle":
			osc.type = "square";
			f *= 2;
			dur = .22;
			break;
		case "megaphone":
			osc.type = "square";
			filter.type = "lowpass";
			filter.frequency.value = 900;
			dur = .28;
			break;
		case "synth":
			osc.type = "sawtooth";
			filter.type = "lowpass";
			filter.frequency.setValueAtTime(200, now);
			filter.frequency.exponentialRampToValueAtTime(Math.max(400, f * 4), now + .08);
			dur = .4;
			break;
		default: osc.type = "square";
	}
	mGain.gain.setValueAtTime(1e-4, now);
	mGain.gain.linearRampToValueAtTime(.12, now + .02);
	mGain.gain.exponentialRampToValueAtTime(1e-4, now + dur);
	osc.frequency.setValueAtTime(Math.max(30, f), now);
	osc.start(now);
	osc.stop(now + dur + .02);
}
var MAP_WIDTH = 3e3;
var MAP_HEIGHT = 3e3;
function distance(x1, y1, x2, y2) {
	return Math.hypot(x2 - x1, y2 - y1);
}
function overlaps(x, y, r, w) {
	return x + r > w.x && x - r < w.x + w.w && y + r > w.y && y - r < w.y + w.h;
}
function hitsWall(x, y, r, walls, mapW, mapH) {
	if (x - r < 0 || x + r > mapW || y - r < 0 || y + r > mapH) return true;
	return walls.some((w) => overlaps(x, y, r, w));
}
function moveCircle(x, y, dx, dy, r, walls, mapW, mapH) {
	let nx = x;
	let ny = y;
	if (!hitsWall(x + dx, y, r, walls, mapW, mapH)) nx = x + dx;
	if (!hitsWall(nx, y + dy, r, walls, mapW, mapH)) ny = y + dy;
	return {
		x: nx,
		y: ny
	};
}
function getMapWalls(levelId) {
	const w = [
		{
			id: "bw1",
			x: 0,
			y: 0,
			w: MAP_WIDTH,
			h: 40,
			isBorder: true,
			hp: 1,
			maxHp: 1
		},
		{
			id: "bw2",
			x: 0,
			y: 2960,
			w: MAP_WIDTH,
			h: 40,
			isBorder: true,
			hp: 1,
			maxHp: 1
		},
		{
			id: "bw3",
			x: 0,
			y: 0,
			w: 40,
			h: MAP_HEIGHT,
			isBorder: true,
			hp: 1,
			maxHp: 1
		},
		{
			id: "bw4",
			x: 2960,
			y: 0,
			w: 40,
			h: MAP_HEIGHT,
			isBorder: true,
			hp: 1,
			maxHp: 1
		}
	];
	if (levelId === "m_eason_1") {
		w.push({
			id: "iw1",
			x: 0,
			y: 600,
			w: 1200,
			h: 40,
			hp: 500,
			maxHp: 500
		}, {
			id: "iw2",
			x: 1800,
			y: 600,
			w: 1200,
			h: 40,
			hp: 500,
			maxHp: 500
		});
		for (let i = 0; i < 8; i++) w.push({
			id: `iw3_${i}`,
			x: 400,
			y: 1200 + i * 200,
			w: 800,
			h: 40,
			hp: 300,
			maxHp: 300
		}, {
			id: `iw4_${i}`,
			x: 1800,
			y: 1200 + i * 200,
			w: 800,
			h: 40,
			hp: 300,
			maxHp: 300
		});
	} else {
		w.push({
			id: "iw5",
			x: 1e3,
			y: 40,
			w: 40,
			h: 800,
			hp: 600,
			maxHp: 600
		}, {
			id: "iw6",
			x: 2e3,
			y: 2160,
			w: 40,
			h: 800,
			hp: 600,
			maxHp: 600
		}, {
			id: "iw7",
			x: 40,
			y: 2e3,
			w: 800,
			h: 40,
			hp: 600,
			maxHp: 600
		}, {
			id: "iw8",
			x: 2160,
			y: 1e3,
			w: 800,
			h: 40,
			hp: 600,
			maxHp: 600
		});
		for (let i = 1; i < 5; i++) for (let j = 1; j < 5; j++) {
			if (i === 2 && j === 2 || i === 3 && j === 3 || i === 2 && j === 3 || i === 3 && j === 2) continue;
			w.push({
				id: `gridx_${i}_${j}`,
				x: i * 600,
				y: j * 600 - 100,
				w: 40,
				h: 200,
				hp: 400,
				maxHp: 400
			}, {
				id: `gridy_${i}_${j}`,
				x: i * 600 - 100,
				y: j * 600,
				w: 200,
				h: 40,
				hp: 400,
				maxHp: 400
			});
		}
	}
	return w;
}
function findOpenSpot(preferX, preferY, r, walls, mapW, mapH) {
	if (!hitsWall(preferX, preferY, r, walls, mapW, mapH)) return {
		x: preferX,
		y: preferY
	};
	for (let ring = 1; ring <= 8; ring++) for (let a = 0; a < 8; a++) {
		const x = preferX + Math.cos(a / 8 * Math.PI * 2) * ring * 80;
		const y = preferY + Math.sin(a / 8 * Math.PI * 2) * ring * 80;
		if (!hitsWall(x, y, r, walls, mapW, mapH)) return {
			x,
			y
		};
	}
	return {
		x: mapW / 2,
		y: mapH / 2
	};
}
function blankStats() {
	return {
		goonsKilled: 0,
		thugsKilled: 0,
		soundproofersKilled: 0,
		bossesDefeated: 0
	};
}
function makePlayer(character, maxHp) {
	const base = 5 * character.stats.speedMultiplier;
	return {
		x: MAP_WIDTH / 2,
		y: MAP_HEIGHT / 2,
		radius: 25,
		hp: maxHp,
		maxHp,
		breath: 100,
		maxBreath: 100,
		baseSpeed: base,
		speed: base,
		speedBuffMul: 1,
		speedBuffUntil: 0,
		invincibleUntil: 0,
		isRooted: false,
		lastHit: -9999,
		angle: -Math.PI / 2,
		isWalking: false,
		isPlaying: false,
		playTimer: 0,
		lastNoteTime: -9999,
		lastMeleeTime: -9999,
		noteHistory: [],
		z: 0,
		vz: 0,
		breathRegenPause: 0
	};
}
function createEngine(level, character, maxHp) {
	const player = makePlayer(character, maxHp);
	if (level.id === "m_eason_1") player.y = MAP_HEIGHT - 220;
	const engine = {
		player,
		enemies: [],
		allies: [],
		projectiles: [],
		enemyShots: [],
		particles: [],
		walls: getMapWalls(level.id),
		camera: {
			x: player.x,
			y: player.y
		},
		mouse: {
			x: 0,
			y: 0
		},
		keys: {},
		stick: {
			x: 0,
			y: 0
		},
		viewW: 900,
		viewH: 520,
		time: 0,
		nextId: 1,
		henchmenSpawned: 0,
		bossSpawned: false,
		boss: null,
		door: null,
		lastSpawnTime: -9999,
		stats: blankStats(),
		eggTriggered: false,
		godMode: false,
		paused: false,
		ended: false,
		lastSpeed: 0,
		mapW: MAP_WIDTH,
		mapH: MAP_HEIGHT,
		reedsPending: 0
	};
	if (level.bossSpawnsImmediately) spawnBoss(engine, level);
	if (level.isDLC) for (let i = 0; i < 3; i++) {
		const spot = findOpenSpot(player.x + (i - 1) * 80, player.y + 70, 20, engine.walls, MAP_WIDTH, MAP_HEIGHT);
		engine.allies.push({
			id: engine.nextId++,
			x: spot.x,
			y: spot.y,
			hp: 500,
			maxHp: 500,
			speed: 4,
			radius: 20,
			attackTimer: 0,
			angle: -Math.PI / 2
		});
	}
	return engine;
}
function spawnBoss(engine, level) {
	if (engine.bossSpawned) return;
	engine.bossSpawned = true;
	const spot = findOpenSpot(MAP_WIDTH / 2, level.bossBehavior === "speech" ? 320 : MAP_HEIGHT / 2 - 300, 40, engine.walls, MAP_WIDTH, MAP_HEIGHT);
	const boss = {
		id: engine.nextId++,
		typeId: "boss",
		name: level.teacher,
		x: spot.x,
		y: spot.y,
		hp: level.hp,
		maxHp: level.hp,
		speed: level.speed || 1.5,
		originalSpeed: level.speed || 1.5,
		damage: level.damage,
		radius: 40,
		isBoss: true,
		attackTimer: 0,
		timer: 0,
		chargeAngle: 0,
		hitFlash: 0,
		frozenUntil: 0,
		behavior: level.bossBehavior,
		angle: Math.PI / 2
	};
	engine.enemies.push(boss);
	engine.boss = boss;
}
function spawnHench(engine, typeId, x, y) {
	const type = henchTemplate(typeId);
	const spot = findOpenSpot(x, y, type.radius, engine.walls, engine.mapW, engine.mapH);
	const enemy = {
		id: engine.nextId++,
		typeId: type.typeId,
		x: spot.x,
		y: spot.y,
		hp: type.hp,
		maxHp: type.hp,
		speed: type.speed,
		originalSpeed: type.speed,
		damage: type.damage,
		radius: type.radius,
		isBrainrot: "isBrainrot" in type ? Boolean(type.isBrainrot) : false,
		attackTimer: 0,
		timer: typeId === "quarterback" || typeId === "kicker" ? 2 : 1,
		chargeAngle: 0,
		hitFlash: 0,
		frozenUntil: 0,
		chargeState: typeId === "linebacker" || typeId === "striker" ? "idle" : void 0,
		angle: -Math.PI / 2
	};
	engine.enemies.push(enemy);
	return enemy;
}
function pushParticle(engine, p) {
	engine.particles.push({
		...p,
		id: engine.nextId++
	});
	if (engine.particles.length > 70) engine.particles.splice(0, engine.particles.length - 70);
}
function held(source, ...codes) {
	return codes.some((c) => source.keys[c]);
}
function shot(engine, angle, damage, inst, hits, extra = {}) {
	const shape = extra.shape ?? inst.shape ?? (inst.family === "gun" ? "bullet" : "note");
	const proj = {
		id: engine.nextId++,
		x: engine.player.x,
		y: engine.player.y,
		angle,
		damage,
		speed: inst.projSpeed,
		hex: inst.hex,
		hits,
		hitCooldowns: /* @__PURE__ */ new Map(),
		passWalls: extra.passWalls ?? inst.passWalls ?? inst.family !== "gun",
		homing: extra.homing ?? (inst.family !== "gun" && inst.family !== "throwable"),
		pierce: inst.pierce ?? 0,
		knockback: inst.knockback ?? 0,
		aoe: inst.aoe ?? 0,
		targetId: null,
		...extra,
		shape
	};
	engine.projectiles.push(proj);
	if (engine.projectiles.length > 90) engine.projectiles.splice(0, engine.projectiles.length - 90);
}
function noteDamage(inst, character, upg, cu) {
	return inst.baseDamage * character.stats.damageMultiplier * (1 + upg.damageLvl * .1) + cu.dmg * 10;
}
function noteBreath(inst, upg, cu) {
	const eff = Math.max(.25, 1 - upg.breathLvl * .05);
	return inst.breathCost * eff * .95 ** cu.breath;
}
function playNote(engine, noteName, freq, instId, character, upg, cu) {
	const inst = INSTRUMENTS[instId];
	if (!inst || inst.family === "gun" || inst.family === "throwable") return null;
	if (engine.time - engine.player.lastNoteTime < (inst.cooldown ?? 180)) return null;
	const cost = noteBreath(inst, upg, cu);
	if (engine.player.breath < cost || engine.player.hp <= 0) return null;
	const damage = noteDamage(inst, character, upg, cu);
	const hits = (inst.hits || 2) + (upg.hitsLvl || 0);
	engine.player.breath -= cost;
	engine.player.lastNoteTime = engine.time;
	engine.player.isPlaying = true;
	engine.player.playTimer = .18;
	engine.player.breathRegenPause = .45;
	if (inst.rootPlayer) engine.player.isRooted = true;
	playSynthesizer(freq, instId);
	engine.player.noteHistory.push(noteName);
	if (engine.player.noteHistory.length > 3) engine.player.noteHistory.shift();
	let comboName = null;
	const combo = COMBOS[character.id];
	if (combo && engine.player.noteHistory.join(",") === combo.seq.join(",")) {
		applyCombo(character.id, engine);
		comboName = combo.name;
		engine.player.noteHistory = [];
	}
	const burst = inst.burst ?? 1;
	const spread = inst.spread ?? .15;
	const start = -((burst - 1) / 2) * spread;
	for (let i = 0; i < burst; i++) shot(engine, engine.player.angle + start + i * spread, damage, inst, hits);
	return comboName;
}
function shootAimed(engine, instId, character, cu, worldX, worldY) {
	const inst = INSTRUMENTS[instId];
	if (!inst || inst.family !== "gun" && inst.family !== "throwable") return false;
	if (engine.time - engine.player.lastNoteTime < 180) return false;
	const angle = Math.atan2(worldY - engine.player.y, worldX - engine.player.x);
	engine.player.angle = angle;
	engine.player.lastNoteTime = engine.time;
	engine.player.isPlaying = true;
	engine.player.playTimer = .12;
	const damage = inst.baseDamage * character.stats.damageMultiplier + cu.dmg * 10;
	playSynthesizer(inst.family === "gun" ? 90 : 700, instId);
	shot(engine, angle, damage, inst, inst.hits || 1, {
		homing: false,
		passWalls: inst.family === "throwable" ? false : true,
		shape: inst.shape ?? (inst.family === "throwable" ? "egg" : "bullet")
	});
	return true;
}
function tryJump(engine) {
	if (engine.player.z <= .5 && engine.player.breath >= 15) {
		engine.player.vz = 430;
		engine.player.breath -= 15;
		engine.player.breathRegenPause = .4;
		return true;
	}
	return false;
}
function gunMelee(engine) {
	if (engine.time - engine.player.lastMeleeTime < 500) return;
	engine.player.lastMeleeTime = engine.time;
	pushParticle(engine, {
		x: engine.player.x,
		y: engine.player.y,
		life: .45,
		shape: "explosion",
		hex: "#fb923c",
		scale: 2.2
	});
	for (const en of engine.enemies) if (distance(engine.player.x, engine.player.y, en.x, en.y) < 150) {
		en.hp = en.isBoss ? en.hp - 300 : 0;
		const a = Math.atan2(en.y - engine.player.y, en.x - engine.player.x);
		const next = moveCircle(en.x, en.y, Math.cos(a) * 150, Math.sin(a) * 150, en.radius, engine.walls, engine.mapW, engine.mapH);
		en.x = next.x;
		en.y = next.y;
	}
}
function buffSpeed(engine, mul, ms) {
	engine.player.speedBuffMul = mul;
	engine.player.speedBuffUntil = engine.time + ms;
	engine.player.speed = engine.player.baseSpeed * mul;
}
function nova(engine, count, damage) {
	const inst = INSTRUMENTS.toot;
	for (let i = 0; i < count; i++) shot(engine, i / count * Math.PI * 2, damage, inst, 5, {
		hex: "#facc15",
		speed: 8,
		homing: true,
		passWalls: true,
		pierce: 5,
		shape: "note"
	});
}
function applyCombo(id, engine) {
	const p = engine.player;
	switch (id) {
		case "rocky":
			buffSpeed(engine, 1.2, 3e3);
			p.breath = Math.min(p.maxBreath, p.breath + 30);
			break;
		case "melody":
			p.hp = Math.min(p.maxHp, p.hp + 50);
			break;
		case "harmony":
			p.breath = p.maxBreath;
			break;
		case "rhythm":
			nova(engine, 8, 80);
			break;
		case "treble":
			buffSpeed(engine, 1.5, 5e3);
			break;
		case "bass":
			p.invincibleUntil = engine.time + 3e3;
			break;
		case "keli":
			nova(engine, 3, 400);
			break;
		case "kai":
			boom(engine, p.x, p.y, 300, 200);
			break;
		case "kashu":
			p.breath = Math.min(p.maxBreath, p.breath + 50);
			break;
		case "eason":
			halo(engine, "#67e8f9");
			break;
		case "thomas":
			nova(engine, 12, 90);
			break;
		case "javis":
			for (const pr of engine.projectiles) pr.damage *= 2;
			break;
		case "quinn":
			p.hp = Math.min(p.maxHp, p.hp + 25);
			nova(engine, 4, 50);
			break;
		case "nora":
			for (const e of engine.enemies) e.frozenUntil = engine.time + 800;
			break;
		case "piper":
			buffSpeed(engine, 1.45, 2500);
			break;
		case "milo":
			boom(engine, p.x, p.y, 180, 90);
			break;
		case "bea":
			p.breath = Math.min(p.maxBreath, p.breath + 40);
			break;
		case "luna":
			halo(engine, "#c4b5fd");
			break;
		case "coco":
			shove(engine, 80);
			break;
		case "otto":
			nova(engine, 5, 110);
			break;
		case "sage":
			for (const e of engine.enemies) e.frozenUntil = engine.time + 1200;
			break;
		case "riley":
			shove(engine, 140);
			break;
		case "nova":
			boom(engine, p.x, p.y, 220, 160);
			buffSpeed(engine, 1.3, 2e3);
	}
}
function boom(engine, x, y, radius, dmg) {
	pushParticle(engine, {
		x,
		y,
		life: .6,
		shape: "explosion",
		hex: "#fb923c",
		scale: 3
	});
	for (const e of engine.enemies) if (distance(x, y, e.x, e.y) < radius) e.hp -= dmg;
}
function shove(engine, dist) {
	const p = engine.player;
	for (const e of engine.enemies) {
		const a = Math.atan2(e.y - p.y, e.x - p.x);
		const next = moveCircle(e.x, e.y, Math.cos(a) * dist, Math.sin(a) * dist, e.radius, engine.walls, engine.mapW, engine.mapH);
		e.x = next.x;
		e.y = next.y;
	}
}
function dash(engine, dist) {
	const p = engine.player;
	let left = dist;
	while (left > 0) {
		const bit = Math.min(20, left);
		const next = moveCircle(p.x, p.y, Math.cos(p.angle) * bit, Math.sin(p.angle) * bit, p.radius, engine.walls, engine.mapW, engine.mapH);
		if (next.x === p.x && next.y === p.y) break;
		p.x = next.x;
		p.y = next.y;
		left -= bit;
	}
}
function halo(engine, hex) {
	for (let i = 0; i < 4; i++) shot(engine, 0, 150, INSTRUMENTS.toot, 99, {
		orbiter: true,
		orbiterAngle: i * Math.PI / 2,
		expireAt: engine.time + 5e3,
		speed: 0,
		homing: false,
		hex,
		shape: "note"
	});
}
function useSecret(engine, character, cu) {
	const ability = character.secret;
	const cost = ability.cost * .95 ** cu.breath;
	if (engine.player.breath < cost) return null;
	engine.player.breath -= cost;
	engine.player.breathRegenPause = .8;
	const p = engine.player;
	switch (character.id) {
		case "rocky":
			p.hp = Math.min(p.maxHp, p.hp + 50);
			break;
		case "melody":
			for (const e of engine.enemies) e.frozenUntil = engine.time + 2e3;
			break;
		case "harmony":
			engine.enemyShots = [];
			break;
		case "rhythm":
			shove(engine, 280);
			break;
		case "treble":
			dash(engine, 380);
			break;
		case "bass":
			p.invincibleUntil = engine.time + 5e3;
			break;
		case "keli":
			nova(engine, 8, 200);
			break;
		case "kai":
			pushParticle(engine, {
				x: p.x,
				y: p.y,
				life: .7,
				shape: "explosion",
				hex: "#facc15",
				scale: 4
			});
			for (const e of engine.enemies) if (distance(p.x, p.y, e.x, e.y) < 400) e.hp = e.isBoss ? e.hp - 1500 : 0;
			break;
		case "kashu":
			buffSpeed(engine, 2, 4e3);
			break;
		case "eason":
			for (const pr of engine.projectiles) pr.damage *= 2;
			break;
		case "thomas":
			p.maxBreath += 100;
			p.breath = p.maxBreath;
			break;
		case "javis":
			for (const e of engine.enemies) e.hp = e.isBoss ? e.hp - 500 : 0;
			break;
		case "quinn":
			p.hp = Math.min(p.maxHp, p.hp + 40);
			nova(engine, 6, 70);
			break;
		case "nora":
			for (const e of engine.enemies) e.frozenUntil = engine.time + 1500;
			shove(engine, 160);
			break;
		case "piper":
			dash(engine, 240);
			buffSpeed(engine, 1.8, 2500);
			break;
		case "milo":
			boom(engine, p.x, p.y, 240, 180);
			break;
		case "bea":
			p.invincibleUntil = engine.time + 2e3;
			p.breath = Math.min(p.maxBreath, p.breath + 40);
			break;
		case "luna":
			halo(engine, "#c4b5fd");
			break;
		case "coco":
			boom(engine, p.x, p.y, 180, 140);
			shove(engine, 120);
			break;
		case "otto":
			nova(engine, 5, 240);
			break;
		case "sage":
			for (const e of engine.enemies) e.frozenUntil = engine.time + 3e3;
			p.hp = Math.min(p.maxHp, p.hp + 30);
			break;
		case "riley":
			shove(engine, 320);
			boom(engine, p.x, p.y, 160, 80);
			break;
		case "nova":
			boom(engine, p.x, p.y, 360, 420);
			buffSpeed(engine, 1.4, 3e3);
			break;
		case "alton":
			pushParticle(engine, {
				x: p.x + Math.cos(p.angle) * 90,
				y: p.y + Math.sin(p.angle) * 90,
				life: .55,
				shape: "explosion",
				hex: "#ef4444",
				scale: 3.4
			});
			for (const e of engine.enemies) if (distance(p.x, p.y, e.x, e.y) < 250) e.hp = e.isBoss ? e.hp - 2e3 : 0;
			break;
		case "socialist_rocky":
			pushParticle(engine, {
				x: p.x,
				y: p.y,
				life: .7,
				shape: "slash",
				hex: "#e11d48",
				scale: 3
			});
			for (const e of engine.enemies) if (distance(p.x, p.y, e.x, e.y) < 210) e.hp = e.isBoss ? e.hp - 1500 : 0;
			break;
		case "harry":
			for (let i = 0; i < 2; i++) shot(engine, p.angle + (i === 0 ? -.45 : .45), 700, INSTRUMENTS.toot, 5, {
				shape: "dog",
				hex: "#a8a29e",
				speed: 7,
				homing: true,
				passWalls: true,
				pierce: 4
			});
			break;
		case "tacops": for (const e of engine.enemies) {
			pushParticle(engine, {
				x: e.x,
				y: e.y,
				life: .55,
				shape: "explosion",
				hex: "#fb923c",
				scale: 2.4
			});
			e.hp = e.isBoss ? e.hp - 5e3 : 0;
		}
	}
	return ability.name;
}
function worldFromMouse(engine) {
	const camX = engine.camera.x - engine.viewW / 2;
	const camY = engine.camera.y - engine.viewH / 2;
	return {
		x: engine.mouse.x + camX,
		y: engine.mouse.y + camY
	};
}
function isInvincible(engine) {
	return engine.godMode || engine.time < engine.player.invincibleUntil;
}
function MovePad({ onStick }) {
	const ref = (0, import_react.useRef)(null);
	const point = (ev) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "relative h-28 w-28 shrink-0 touch-none rounded-full border-2 border-cyan-400/50 bg-slate-950/80 shadow-lg",
		onPointerDown: (e) => {
			e.currentTarget.setPointerCapture(e.pointerId);
			e.stopPropagation();
			point(e);
		},
		onPointerMove: (e) => {
			if (e.currentTarget.hasPointerCapture(e.pointerId)) point(e);
		},
		onPointerUp: () => onStick(0, 0),
		onPointerCancel: () => onStick(0, 0),
		role: "slider",
		"aria-label": "Move",
		"aria-valuemin": -1,
		"aria-valuemax": 1,
		"aria-valuenow": 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/80" })
	});
}
var WHITES$1 = NOTES.filter((n) => !n.isBlack);
var BLACK_AFTER = [
	0,
	1,
	3,
	4,
	5
];
var BLACKS = NOTES.filter((n) => n.isBlack);
function Piano({ onPlay, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto h-24 w-full max-w-3xl sm:h-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-full gap-1",
			children: WHITES$1.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onPointerDown: (e) => {
					e.preventDefault();
					onPlay(n);
				},
				className: `relative min-w-0 flex-1 rounded-b-md border border-slate-300 text-xs font-extrabold text-slate-600 ${active.has(n.key) ? "bg-cyan-200" : "bg-slate-100"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute right-0 bottom-1 left-0",
					children: n.key.toUpperCase()
				})
			}, n.name))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-x-0 top-0 flex h-[58%] gap-1",
			children: WHITES$1.slice(0, -1).map((n, i) => {
				const bi = BLACK_AFTER.indexOf(i);
				const black = bi >= 0 ? BLACKS[bi] : void 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex-1",
					children: black && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onPointerDown: (e) => {
							e.preventDefault();
							e.stopPropagation();
							onPlay(black);
						},
						className: `pointer-events-auto absolute top-0 -right-[36%] z-10 h-full w-[72%] rounded-b-md border border-slate-950 text-[10px] font-bold text-slate-300 ${active.has(black.key) ? "bg-cyan-800" : "bg-slate-900"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute right-0 bottom-1 left-0",
							children: black.key.toUpperCase()
						})
					})
				}, n.name);
			})
		})]
	});
}
function ActionButton({ label, onPress }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onPointerDown: (e) => {
			e.preventDefault();
			e.stopPropagation();
			onPress();
		},
		className: "h-14 min-w-14 rounded-2xl border border-slate-600 bg-slate-800 px-3 text-sm font-extrabold text-slate-100 shadow-lg",
		children: label
	});
}
function bindProbe(probe) {
	window.__controlsTest = probe;
	return () => {
		if (window.__controlsTest === probe) delete window.__controlsTest;
	};
}
var FRAME = 60;
function reap(engine) {
	let door = null;
	for (let j = engine.enemies.length - 1; j >= 0; j--) {
		const e = engine.enemies[j];
		if (e.hp > 0) continue;
		if (e.typeId === "goon") engine.stats.goonsKilled++;
		else if (e.typeId === "thug") engine.stats.thugsKilled++;
		else if (e.typeId === "soundproofer") engine.stats.soundproofersKilled++;
		if (!e.isBoss) engine.reedsPending += 5;
		pushParticle(engine, {
			x: e.x,
			y: e.y,
			life: .55,
			shape: "explosion",
			hex: e.isBoss ? "#f87171" : "#94a3b8",
			scale: e.isBoss ? 3 : 1.4
		});
		if (e.isBoss) {
			engine.stats.bossesDefeated++;
			engine.boss = null;
			door = {
				x: e.x,
				y: e.y
			};
		}
		engine.enemies.splice(j, 1);
	}
	if (door) {
		engine.door = {
			...door,
			radius: 42
		};
		engine.enemies = engine.enemies.filter((en) => !en.isBossMinion && en.typeId !== "angry_student");
	}
}
function step(engine, dt, level, breathRegen, aimWithMouse) {
	if (engine.ended) return "play";
	const stepN = dt * FRAME;
	engine.time += dt * 1e3;
	const p = engine.player;
	if (engine.godMode) p.hp = p.maxHp;
	if (p.hp <= 0) {
		engine.ended = true;
		return "lose";
	}
	if (engine.time > p.speedBuffUntil) p.speed = p.baseSpeed;
	if (p.playTimer > 0) p.playTimer -= dt;
	else p.isPlaying = false;
	if (p.z > 0 || p.vz !== 0) {
		p.z += p.vz * dt;
		p.vz -= 1400 * dt;
		if (p.z <= 0) {
			p.z = 0;
			p.vz = 0;
		}
	}
	const airborne = p.z > 18;
	let ix = engine.stick.x;
	let iy = engine.stick.y;
	if (held(engine, "KeyA", "ArrowLeft")) ix -= 1;
	if (held(engine, "KeyD", "ArrowRight")) ix += 1;
	if (held(engine, "KeyW", "ArrowUp")) iy -= 1;
	if (held(engine, "KeyS", "ArrowDown")) iy += 1;
	const mag = Math.hypot(ix, iy);
	if (mag > 1) {
		ix /= mag;
		iy /= mag;
	}
	let speed = p.speed * stepN;
	if (held(engine, "ShiftLeft", "ShiftRight") && p.breath > 0) {
		speed *= 1.55;
		p.breath = Math.max(0, p.breath - 18 * dt);
		p.breathRegenPause = .35;
	}
	const dx = p.isRooted ? 0 : ix * speed;
	const dy = p.isRooted ? 0 : iy * speed;
	const moved = moveCircle(p.x, p.y, dx, dy, p.radius, engine.walls, engine.mapW, engine.mapH);
	p.x = moved.x;
	p.y = moved.y;
	p.isWalking = dx !== 0 || dy !== 0;
	engine.lastSpeed = dt > 0 ? Math.hypot(dx, dy) / dt : 0;
	let nearest = null;
	let nearestD = Infinity;
	for (const e of engine.enemies) {
		if (e.behavior === "speech" || e.hp <= 0) continue;
		const d = distance(p.x, p.y, e.x, e.y);
		if (d < nearestD) {
			nearestD = d;
			nearest = e;
		}
	}
	if (!aimWithMouse) {
		if (nearest) p.angle = Math.atan2(nearest.y - p.y, nearest.x - p.x);
		else if (p.isWalking) p.angle = Math.atan2(dy, dx);
	}
	if (p.breathRegenPause > 0) p.breathRegenPause -= dt;
	else p.breath = Math.min(p.maxBreath, p.breath + 30 * breathRegen * dt);
	if (engine.henchmenSpawned < level.henchmenCount && engine.time - engine.lastSpawnTime > 1400) {
		const pool = level.isDLC ? ["brainrot_kid"] : level.customHenchmen?.length ? level.customHenchmen : [
			"goon",
			"thug",
			"soundproofer"
		];
		const type = henchTemplate(pool[Math.floor(Math.random() * pool.length)] ?? "goon");
		const ang = Math.random() * Math.PI * 2;
		const ex = p.x + Math.cos(ang) * 560;
		const ey = p.y + Math.sin(ang) * 560;
		spawnHench(engine, type.typeId, ex, ey);
		engine.henchmenSpawned++;
		engine.lastSpawnTime = engine.time;
	} else if (!engine.bossSpawned && engine.henchmenSpawned >= level.henchmenCount && engine.enemies.length === 0) spawnBoss(engine, level);
	for (let a = engine.allies.length - 1; a >= 0; a--) {
		const ally = engine.allies[a];
		if (ally.hp <= 0) {
			engine.allies.splice(a, 1);
			continue;
		}
		let targ = null;
		let td = Infinity;
		for (const e of engine.enemies) {
			if (e.hp <= 0) continue;
			const d = distance(ally.x, ally.y, e.x, e.y);
			if (d < td) {
				td = d;
				targ = e;
			}
		}
		if (targ) {
			const ang = Math.atan2(targ.y - ally.y, targ.x - ally.x);
			ally.angle = ang;
			if (td > 190) {
				ally.x += Math.cos(ang) * ally.speed * stepN;
				ally.y += Math.sin(ang) * ally.speed * stepN;
			}
			ally.attackTimer += dt;
			if (ally.attackTimer > 1) {
				ally.attackTimer = 0;
				engine.projectiles.push({
					id: engine.nextId++,
					x: ally.x,
					y: ally.y,
					angle: ang,
					damage: 80,
					speed: 11,
					hex: "#60a5fa",
					shape: "note",
					hits: 1,
					hitCooldowns: /* @__PURE__ */ new Map(),
					passWalls: false,
					homing: true,
					pierce: 0,
					knockback: 0,
					aoe: 0,
					targetId: targ.id
				});
			}
		}
		ally.x = Math.max(50, Math.min(engine.mapW - 50, ally.x));
		ally.y = Math.max(50, Math.min(engine.mapH - 50, ally.y));
	}
	const count = engine.enemies.length;
	for (let i = 0; i < count; i++) {
		const enemy = engine.enemies[i];
		if (!enemy || enemy.hp <= 0) continue;
		const speed = engine.time < enemy.frozenUntil ? enemy.originalSpeed * .08 : enemy.speed;
		const dist = distance(p.x, p.y, enemy.x, enemy.y);
		const ang = Math.atan2(p.y - enemy.y, p.x - enemy.x);
		let edx = 0;
		let edy = 0;
		if (enemy.isBoss) {
			if (enemy.behavior === "speech") {} else {
				enemy.attackTimer += dt;
				if (enemy.attackTimer > 2.4) {
					enemy.attackTimer = 0;
					if (Math.random() > .45) for (let s = -1; s <= 1; s++) engine.enemyShots.push({
						id: engine.nextId++,
						x: enemy.x,
						y: enemy.y,
						angle: ang + s * .22,
						speed: 7,
						damage: level.damage
					});
					else {
						spawnHench(engine, "goon", enemy.x + 70, enemy.y);
						const minion = engine.enemies[engine.enemies.length - 1];
						if (minion && !minion.isBoss) {
							minion.typeId = "minion";
							minion.isBossMinion = true;
							minion.hp = 30;
							minion.maxHp = 30;
							minion.speed = 4.2;
							minion.originalSpeed = 4.2;
							minion.radius = 14;
							minion.damage = Math.max(8, level.damage / 3);
						}
						spawnHench(engine, "goon", enemy.x - 70, enemy.y);
						const minion2 = engine.enemies[engine.enemies.length - 1];
						if (minion2 && minion2 !== minion && !minion2.isBoss) {
							minion2.typeId = "minion";
							minion2.isBossMinion = true;
							minion2.hp = 30;
							minion2.maxHp = 30;
							minion2.speed = 4.2;
							minion2.originalSpeed = 4.2;
							minion2.radius = 14;
							minion2.damage = Math.max(8, level.damage / 3);
						}
					}
				}
				edx = Math.cos(ang) * speed;
				edy = Math.sin(ang) * speed;
			}
		} else if (enemy.typeId === "linebacker" || enemy.typeId === "striker") {
			if (!enemy.chargeState) enemy.chargeState = "idle";
			enemy.timer -= dt;
			if (enemy.chargeState === "idle" && enemy.timer <= 0 && dist < 420) {
				enemy.chargeState = "charging";
				enemy.timer = .7;
				enemy.chargeAngle = ang;
			} else if (enemy.chargeState === "charging") {
				edx = Math.cos(enemy.chargeAngle) * speed * 2.8;
				edy = Math.sin(enemy.chargeAngle) * speed * 2.8;
				if (enemy.timer <= 0) {
					enemy.chargeState = "cooldown";
					enemy.timer = 1.2;
				}
			} else if (enemy.chargeState === "cooldown") {
				edx = Math.cos(ang) * speed * .45;
				edy = Math.sin(ang) * speed * .45;
				if (enemy.timer <= 0) {
					enemy.chargeState = "idle";
					enemy.timer = .8;
				}
			} else {
				edx = Math.cos(ang) * speed;
				edy = Math.sin(ang) * speed;
			}
		} else if (enemy.typeId === "quarterback" || enemy.typeId === "kicker") {
			if (dist < 280) {
				edx = -Math.cos(ang) * speed;
				edy = -Math.sin(ang) * speed;
			} else if (dist > 420) {
				edx = Math.cos(ang) * speed;
				edy = Math.sin(ang) * speed;
			}
			enemy.timer -= dt;
			if (enemy.timer <= 0) {
				engine.enemyShots.push({
					id: engine.nextId++,
					x: enemy.x,
					y: enemy.y,
					angle: ang,
					speed: 8,
					damage: enemy.damage,
					football: true
				});
				enemy.timer = 2.3;
			}
		} else {
			edx = Math.cos(ang) * speed;
			edy = Math.sin(ang) * speed;
		}
		enemy.angle = Math.hypot(edx, edy) > .02 ? Math.atan2(edy, edx) : ang;
		const next = moveCircle(enemy.x, enemy.y, edx * stepN, edy * stepN, enemy.radius, engine.walls, engine.mapW, engine.mapH);
		if (next.x === enemy.x) {
			for (const w of engine.walls) if (!w.isBorder && overlaps(enemy.x + edx * stepN, enemy.y, enemy.radius, w)) w.hp -= enemy.damage * dt;
		} else enemy.x = next.x;
		if (next.y === enemy.y) {
			for (const w of engine.walls) if (!w.isBorder && overlaps(enemy.x, enemy.y + edy * stepN, enemy.radius, w)) w.hp -= enemy.damage * dt;
		} else enemy.y = next.y;
		if (!airborne && !isInvincible(engine) && dist < enemy.radius + p.radius && engine.time - p.lastHit > 520) {
			const mul = (enemy.typeId === "linebacker" || enemy.typeId === "striker") && enemy.chargeState === "charging" ? 2 : 1;
			p.hp -= enemy.damage * mul;
			p.lastHit = engine.time;
			const push = moveCircle(p.x, p.y, Math.cos(ang) * 36, Math.sin(ang) * 36, p.radius, engine.walls, engine.mapW, engine.mapH);
			p.x = push.x;
			p.y = push.y;
		}
		if (enemy.isBrainrot) for (let a = engine.allies.length - 1; a >= 0; a--) {
			const ally = engine.allies[a];
			if (distance(enemy.x, enemy.y, ally.x, ally.y) < enemy.radius + ally.radius) {
				pushParticle(engine, {
					x: ally.x,
					y: ally.y,
					life: .5,
					shape: "splat",
					hex: "#84cc16",
					scale: 1.4
				});
				spawnHench(engine, "brainrot_kid", ally.x, ally.y);
				engine.allies.splice(a, 1);
			}
		}
		if (enemy.hitFlash > 0) enemy.hitFlash -= dt;
	}
	engine.walls = engine.walls.filter((w) => w.isBorder || w.hp > 0);
	for (let i = engine.enemyShots.length - 1; i >= 0; i--) {
		const ep = engine.enemyShots[i];
		ep.x += Math.cos(ep.angle) * ep.speed * stepN;
		ep.y += Math.sin(ep.angle) * ep.speed * stepN;
		let gone = false;
		for (const w of engine.walls) if (overlaps(ep.x, ep.y, 8, w)) {
			gone = true;
			break;
		}
		if (!gone && !airborne && !isInvincible(engine) && distance(ep.x, ep.y, p.x, p.y) < p.radius + 8) {
			if (engine.time - p.lastHit > 520) {
				p.hp -= ep.damage;
				p.lastHit = engine.time;
			}
			pushParticle(engine, {
				x: ep.x,
				y: ep.y,
				life: .35,
				shape: "hit",
				hex: "#ef4444",
				scale: 1
			});
			gone = true;
		}
		if (gone || ep.x < -40 || ep.y < -40 || ep.x > engine.mapW + 40 || ep.y > engine.mapH + 40) engine.enemyShots.splice(i, 1);
	}
	for (let i = engine.projectiles.length - 1; i >= 0; i--) {
		const pr = engine.projectiles[i];
		if (pr.orbiter) {
			pr.orbiterAngle = (pr.orbiterAngle ?? 0) + dt * 3.2;
			pr.x = p.x + Math.cos(pr.orbiterAngle) * 86;
			pr.y = p.y + Math.sin(pr.orbiterAngle) * 86;
			if (pr.expireAt && engine.time > pr.expireAt) {
				engine.projectiles.splice(i, 1);
				continue;
			}
		} else {
			let target = engine.enemies.find((e) => e.id === pr.targetId && e.hp > 0 && e.behavior !== "speech");
			if (target && engine.time - (pr.hitCooldowns.get(target.id) ?? -9999) < 420) target = void 0;
			if (!target && pr.homing) {
				let best = null;
				let bd = Infinity;
				for (const e of engine.enemies) {
					if (e.hp <= 0 || e.behavior === "speech") continue;
					if (engine.time - (pr.hitCooldowns.get(e.id) ?? -9999) < 420) continue;
					const d = distance(pr.x, pr.y, e.x, e.y);
					if (d < bd) {
						bd = d;
						best = e;
					}
				}
				target = best ?? void 0;
				if (target) pr.targetId = target.id;
			}
			if (target) {
				const ta = Math.atan2(target.y - pr.y, target.x - pr.x);
				const diff = Math.atan2(Math.sin(ta - pr.angle), Math.cos(ta - pr.angle));
				pr.angle += diff * Math.min(1, dt * 8);
			}
			pr.x += Math.cos(pr.angle) * pr.speed * stepN;
			pr.y += Math.sin(pr.angle) * pr.speed * stepN;
			if (!pr.passWalls) {
				let blocked = false;
				for (const w of engine.walls) if (overlaps(pr.x, pr.y, 8, w)) {
					blocked = true;
					break;
				}
				if (blocked) {
					engine.projectiles.splice(i, 1);
					continue;
				}
			}
		}
		let consumed = false;
		for (const e of engine.enemies) {
			if (e.hp <= 0) continue;
			if (distance(pr.x, pr.y, e.x, e.y) > e.radius + 16) continue;
			if (e.behavior === "speech") {
				if (pr.shape === "egg") {
					e.behavior = "chase";
					engine.eggTriggered = true;
					pushParticle(engine, {
						x: e.x,
						y: e.y,
						life: .8,
						shape: "splat",
						hex: "#fde047",
						scale: 2.4
					});
					for (let k = 0; k < 16; k++) spawnHench(engine, "angry_student", e.x + (Math.random() - .5) * 700, e.y + (Math.random() - .5) * 500);
					consumed = true;
					pr.hits = 0;
				}
				continue;
			}
			if (engine.time - (pr.hitCooldowns.get(e.id) ?? -9999) < 420) continue;
			e.hp -= pr.damage;
			e.hitFlash = .12;
			pr.hitCooldowns.set(e.id, engine.time);
			if (!pr.orbiter) pr.hits -= 1;
			if (pr.knockback) {
				const next = moveCircle(e.x, e.y, Math.cos(pr.angle) * pr.knockback, Math.sin(pr.angle) * pr.knockback, e.radius, engine.walls, engine.mapW, engine.mapH);
				e.x = next.x;
				e.y = next.y;
			}
			if (pr.aoe) {
				for (const other of engine.enemies) if (other.id !== e.id && distance(e.x, e.y, other.x, other.y) < pr.aoe) other.hp -= pr.damage * .5;
			}
			pushParticle(engine, {
				x: e.x,
				y: e.y,
				life: .35,
				shape: pr.shape === "egg" ? "splat" : "hit",
				hex: pr.hex,
				scale: 1
			});
			consumed = true;
			if (pr.hits <= 0 && !pr.orbiter) break;
		}
		if (consumed && pr.hits <= 0 && !pr.orbiter || pr.x < -200 || pr.y < -200 || pr.x > engine.mapW + 200 || pr.y > engine.mapH + 200) engine.projectiles.splice(i, 1);
	}
	reap(engine);
	for (let i = engine.particles.length - 1; i >= 0; i--) {
		const part = engine.particles[i];
		part.life -= dt * 1.6;
		part.y -= 28 * dt;
		if (part.life <= 0) engine.particles.splice(i, 1);
	}
	if (engine.door && distance(p.x, p.y, engine.door.x, engine.door.y) < p.radius + engine.door.radius) {
		engine.ended = true;
		return "win";
	}
	engine.camera.x += (p.x - engine.camera.x) * Math.min(1, dt * 8);
	engine.camera.y += (p.y - engine.camera.y) * Math.min(1, dt * 8);
	if (p.hp <= 0) {
		engine.ended = true;
		return "lose";
	}
	return "play";
}
function SvgDefs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "0",
		height: "0",
		className: "absolute",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: [
			[
				"goon",
				"#fca5a5",
				"#b91c1c"
			],
			[
				"thug",
				"#c4b5fd",
				"#5b21b6"
			],
			[
				"linebacker",
				"#93c5fd",
				"#1e3a8a"
			],
			[
				"quarterback",
				"#7dd3fc",
				"#0369a1"
			],
			[
				"angry_student",
				"#fdba74",
				"#ea580c"
			],
			[
				"minion",
				"#fcd34d",
				"#b45309"
			],
			[
				"soundproofer",
				"#cbd5e1",
				"#334155"
			],
			[
				"ally",
				"#93c5fd",
				"#2563eb"
			],
			[
				"brainrot_kid",
				"#bef264",
				"#4d7c0f"
			],
			[
				"boss",
				"#fecaca",
				"#991b1b"
			]
		].map(([id, a, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
			id: `glow-${id}`,
			cx: "50%",
			cy: "50%",
			r: "50%",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
				offset: "0%",
				stopColor: a
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
				offset: "100%",
				stopColor: b
			})]
		}, id)) })
	});
}
function RenderShape({ shape, hex = "#fff" }) {
	if (shape === "flute") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "44",
				width: "84",
				height: "12",
				rx: "6",
				fill: hex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "22",
				cy: "50",
				r: "3",
				fill: "#0f172a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "50",
				r: "3",
				fill: "#0f172a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "58",
				cy: "50",
				r: "3",
				fill: "#0f172a"
			})
		]
	});
	if ([
		"clarinet",
		"oboe",
		"bassoon",
		"bassClarinet",
		"contrabassOboe",
		"contrabassBassoon"
	].includes(shape)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "44",
				y: "8",
				width: "12",
				height: "78",
				rx: "4",
				fill: hex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "40,86 60,86 50,100",
				fill: hex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "30",
				width: "20",
				height: "4",
				fill: "#f8fafc",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "48",
				width: "20",
				height: "4",
				fill: "#f8fafc",
				opacity: "0.7"
			})
		]
	});
	if (shape === "sax" || shape === "sax_straight" || shape === "contrabassSax") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M50 8 C50 48 50 68 50 74 C50 92 28 92 28 92",
			fill: "none",
			stroke: hex,
			strokeWidth: "14",
			strokeLinecap: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "28",
			cy: "90",
			rx: "16",
			ry: "12",
			fill: hex
		})]
	});
	if (shape === "trumpet") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "16",
				y: "42",
				width: "48",
				height: "14",
				rx: "4",
				fill: hex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "64,34 92,24 92,74 64,64",
				fill: hex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "34",
				y: "30",
				width: "8",
				height: "16",
				rx: "2",
				fill: hex
			})
		]
	});
	if (shape === "horn" || shape === "mellophone") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "48",
				cy: "46",
				r: "26",
				fill: "none",
				stroke: hex,
				strokeWidth: "10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M26 58 Q16 78 34 92",
				fill: "none",
				stroke: hex,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "36",
				cy: "92",
				rx: "12",
				ry: "8",
				fill: hex
			})
		]
	});
	if (shape === "tuba" || shape === "sousaphone") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "28",
				y: "38",
				width: "36",
				height: "48",
				rx: "18",
				fill: "none",
				stroke: hex,
				strokeWidth: "10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M64 52 Q88 46 88 22",
				fill: "none",
				stroke: hex,
				strokeWidth: "12",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "88",
				cy: "18",
				rx: "16",
				ry: "10",
				fill: hex
			})
		]
	});
	if (shape === "trombone" || shape === "contrabassTrombone") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "28",
			y: "42",
			width: "62",
			height: "12",
			rx: "6",
			fill: hex
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "6,34 30,42 30,54 6,62",
			fill: hex
		})]
	});
	if (shape === "triangle") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "50,16 86,84 14,84",
			fill: "none",
			stroke: hex,
			strokeWidth: "8"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "78",
			y1: "28",
			x2: "78",
			y2: "70",
			stroke: hex,
			strokeWidth: "5"
		})]
	});
	if (shape === "gun" || shape === "bullet") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 20",
		className: "h-full w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "2",
			y: "6",
			width: "22",
			height: "8",
			rx: "2",
			fill: hex
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M24 6 L36 10 L24 14 Z",
			fill: "#f59e0b"
		})]
	});
	if (shape === "egg") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "50",
			cy: "52",
			rx: "28",
			ry: "36",
			fill: "#f8fafc",
			stroke: "#cbd5e1",
			strokeWidth: "3"
		})
	});
	if (shape === "football") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "50",
				r: "42",
				fill: "#f8fafc",
				stroke: "#0f172a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "50,22 61,32 57,46 43,46 39,32",
				fill: "#0f172a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "50,78 39,68 43,54 57,54 61,68",
				fill: "#0f172a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "22,50 32,39 46,43 46,57 32,61",
				fill: "#0f172a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "78,50 68,61 54,57 54,43 68,39",
				fill: "#0f172a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "30,28 40,22 46,32 36,38",
				fill: "#0f172a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "70,28 60,22 54,32 64,38",
				fill: "#0f172a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "30,72 36,62 46,68 40,78",
				fill: "#0f172a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "70,72 64,62 54,68 60,78",
				fill: "#0f172a"
			})
		]
	});
	if (shape === "explosion") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M50 4 L62 36 L96 28 L70 52 L92 90 L54 70 L18 96 L34 58 L4 40 L40 44 Z",
			fill: hex
		})
	});
	if (shape === "splat") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M50 16 Q72 10 82 32 Q100 50 80 70 Q68 92 50 80 Q30 94 18 70 Q2 48 22 30 Q32 8 50 16 Z",
			fill: hex
		})
	});
	if (shape === "hit") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M20 20 L80 80 M80 20 L20 80",
			stroke: hex,
			strokeWidth: "12",
			strokeLinecap: "round"
		})
	});
	if (shape === "slash") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M15 70 Q50 10 85 40",
			fill: "none",
			stroke: hex,
			strokeWidth: "10",
			strokeLinecap: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M20 78 Q55 28 88 52",
			fill: "none",
			stroke: "#fff",
			strokeWidth: "3",
			strokeLinecap: "round"
		})]
	});
	if (shape === "dog") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "50",
				cy: "68",
				rx: "18",
				ry: "22",
				fill: "#78350f"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "36",
				r: "16",
				fill: "#78350f"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "50",
				cy: "22",
				rx: "7",
				ry: "8",
				fill: "#451a03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "44",
				cy: "32",
				r: "2.4",
				fill: "#0f172a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "56",
				cy: "32",
				r: "2.4",
				fill: "#0f172a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "40",
				cy: "16",
				rx: "5",
				ry: "9",
				fill: "#451a03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "60",
				cy: "16",
				rx: "5",
				ry: "9",
				fill: "#451a03"
			})
		]
	});
	if (shape === "drum") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "50",
				cy: "62",
				rx: "34",
				ry: "16",
				fill: hex,
				stroke: "#0f172a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "16",
				y: "40",
				width: "68",
				height: "22",
				fill: hex,
				stroke: "#0f172a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "50",
				cy: "40",
				rx: "34",
				ry: "16",
				fill: "#f8fafc",
				stroke: "#0f172a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "28",
				y1: "18",
				x2: "40",
				y2: "40",
				stroke: "#0f172a",
				strokeWidth: "4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "72",
				y1: "18",
				x2: "60",
				y2: "40",
				stroke: "#0f172a",
				strokeWidth: "4",
				strokeLinecap: "round"
			})
		]
	});
	if (shape === "cymbal") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "34",
			cy: "54",
			rx: "28",
			ry: "12",
			fill: hex,
			stroke: "#0f172a",
			strokeWidth: "3",
			transform: "rotate(-28 34 54)"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "66",
			cy: "46",
			rx: "28",
			ry: "12",
			fill: "#fef9c3",
			stroke: "#0f172a",
			strokeWidth: "3",
			transform: "rotate(24 66 46)"
		})]
	});
	if (shape === "tambourine") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "50",
				r: "32",
				fill: "none",
				stroke: hex,
				strokeWidth: "12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "50",
				r: "16",
				fill: "#f8fafc",
				stroke: "#0f172a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "22",
				cy: "36",
				r: "5",
				fill: "#fbbf24"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "78",
				cy: "36",
				r: "5",
				fill: "#fbbf24"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "22",
				cy: "66",
				r: "5",
				fill: "#fbbf24"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "78",
				cy: "66",
				r: "5",
				fill: "#fbbf24"
			})
		]
	});
	if (shape === "cowbell") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 28 H68 L78 82 H22 Z",
				fill: hex,
				stroke: "#0f172a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "16",
				width: "20",
				height: "14",
				rx: "3",
				fill: "#44403c"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "28",
				y: "74",
				width: "44",
				height: "8",
				rx: "2",
				fill: "#1c1917"
			})
		]
	});
	if (shape === "mallet") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "18",
				y: "62",
				width: "64",
				height: "14",
				rx: "4",
				fill: hex,
				stroke: "#0f172a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "18",
				y: "40",
				width: "64",
				height: "14",
				rx: "4",
				fill: "#f8fafc",
				stroke: "#0f172a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "36",
				y1: "18",
				x2: "30",
				y2: "40",
				stroke: "#0f172a",
				strokeWidth: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "38",
				cy: "16",
				r: "6",
				fill: "#f8fafc",
				stroke: "#0f172a",
				strokeWidth: "2"
			})
		]
	});
	if (shape === "harmonica") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "12",
			y: "36",
			width: "76",
			height: "28",
			rx: "6",
			fill: hex,
			stroke: "#0f172a",
			strokeWidth: "3"
		}), Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 20 + i * 8,
			y: "46",
			width: "4",
			height: "10",
			fill: "#0f172a"
		}, i))]
	});
	if (shape === "whistle") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "18",
				y: "44",
				width: "46",
				height: "12",
				rx: "6",
				fill: hex,
				stroke: "#0f172a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "70",
				cy: "50",
				r: "14",
				fill: hex,
				stroke: "#0f172a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "74",
				cy: "46",
				r: "4",
				fill: "#0f172a"
			})
		]
	});
	if (shape === "accordion") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "28",
				width: "22",
				height: "44",
				rx: "4",
				fill: hex,
				stroke: "#0f172a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "70",
				y: "28",
				width: "22",
				height: "44",
				rx: "4",
				fill: hex,
				stroke: "#0f172a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M30 34 H70 M30 44 H70 M30 54 H70 M30 64 H70",
				stroke: "#0f172a",
				strokeWidth: "4"
			})
		]
	});
	if (shape === "bagpipe") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "48",
				cy: "58",
				rx: "22",
				ry: "16",
				fill: hex,
				stroke: "#0f172a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "18",
				width: "8",
				height: "36",
				fill: "#1c1917"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "54",
				y: "22",
				width: "6",
				height: "30",
				fill: "#1c1917"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "28",
				y: "26",
				width: "6",
				height: "26",
				fill: "#1c1917"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M64 62 Q86 70 80 88",
				fill: "none",
				stroke: "#1c1917",
				strokeWidth: "6",
				strokeLinecap: "round"
			})
		]
	});
	if (shape === "violin" || shape === "uke") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "50",
				cy: "62",
				rx: "18",
				ry: "22",
				fill: hex,
				stroke: "#0f172a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "46",
				y: "16",
				width: "8",
				height: "32",
				fill: "#44403c"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "64",
				r: "4",
				fill: "#0f172a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "70",
				y1: "20",
				x2: "78",
				y2: "78",
				stroke: "#0f172a",
				strokeWidth: "3"
			})
		]
	});
	if (shape === "harp") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M30 82 Q18 40 48 16 L62 16 Q40 40 46 82 Z",
			fill: hex,
			stroke: "#0f172a",
			strokeWidth: "3"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M40 28 V74 M48 24 V76 M56 28 V72",
			stroke: "#0f172a",
			strokeWidth: "2"
		})]
	});
	if (shape === "megaphone") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "12",
			y: "42",
			width: "36",
			height: "16",
			rx: "4",
			fill: hex,
			stroke: "#0f172a",
			strokeWidth: "3"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "48,36 86,22 86,78 48,64",
			fill: hex,
			stroke: "#0f172a",
			strokeWidth: "3"
		})]
	});
	if (shape === "synth") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "14",
				y: "28",
				width: "72",
				height: "44",
				rx: "8",
				fill: "#0f172a",
				stroke: hex,
				strokeWidth: "4"
			}),
			Array.from({ length: 7 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: 22 + i * 8,
				y: "48",
				width: "5",
				height: "16",
				rx: "1",
				fill: i % 2 ? "#334155" : hex
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "28",
				cy: "38",
				r: "4",
				fill: hex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "42",
				cy: "38",
				r: "4",
				fill: "#f8fafc"
			})
		]
	});
	if (shape === "door") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "22",
				y: "8",
				width: "56",
				height: "88",
				rx: "4",
				fill: "#78350f"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "30",
				y: "18",
				width: "40",
				height: "28",
				fill: "#451a03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "30",
				y: "52",
				width: "40",
				height: "32",
				fill: "#451a03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "62",
				cy: "58",
				r: "3",
				fill: "#fbbf24"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 50 50",
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "14",
				cy: "34",
				rx: "8",
				ry: "6",
				fill: hex,
				transform: "rotate(-20 14 34)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "20",
				y: "10",
				width: "3",
				height: "24",
				fill: hex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M22 10 Q36 8 34 22 Q26 16 23 16",
				fill: hex
			})
		]
	});
}
var POINTS_RIGHT = /* @__PURE__ */ new Set([
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
	"accordion"
]);
/** Sprites face up in local space. Add 90° so the nose matches atan2 movement. */
function entityFacingDeg(angle) {
	return angle * 180 / Math.PI + 90;
}
function projectileFacingDeg(shape, angle) {
	const deg = angle * 180 / Math.PI;
	return POINTS_RIGHT.has(shape) ? deg : deg + 90;
}
var LOOKS = {
	rocky: {
		skin: "#f6c28b",
		hair: "#3b2416",
		hairStyle: "spiky",
		shirt: "#ef4444",
		pants: "#1e293b",
		shoes: "#0f172a",
		trim: "#fecaca"
	},
	melody: {
		skin: "#f3c7a3",
		hair: "#db2777",
		hairStyle: "twin",
		shirt: "#fb7185",
		pants: "#4c1d95",
		shoes: "#f8fafc",
		trim: "#fbcfe8"
	},
	harmony: {
		skin: "#e8b48a",
		hair: "#1e3a8a",
		hairStyle: "bob",
		shirt: "#3b82f6",
		pants: "#1e293b",
		shoes: "#0f172a",
		trim: "#bfdbfe"
	},
	rhythm: {
		skin: "#c68642",
		hair: "#1c1917",
		hairStyle: "buzz",
		shirt: "#fb923c",
		pants: "#44403c",
		shoes: "#111827",
		trim: "#fdba74"
	},
	treble: {
		skin: "#f6d0b1",
		hair: "#ca8a04",
		hairStyle: "ponytail",
		shirt: "#facc15",
		pants: "#854d0e",
		shoes: "#fff7ed",
		trim: "#fef08a"
	},
	bass: {
		skin: "#8d5524",
		hair: "#0f172a",
		hairStyle: "buzz",
		shirt: "#57534e",
		pants: "#1c1917",
		shoes: "#111827",
		trim: "#d6d3d1"
	},
	keli: {
		skin: "#f1c27d",
		hair: "#b45309",
		hairStyle: "curly",
		shirt: "#f59e0b",
		pants: "#78350f",
		shoes: "#fef3c7",
		trim: "#fde68a"
	},
	kai: {
		skin: "#e0ac69",
		hair: "#111827",
		hairStyle: "cap",
		shirt: "#ca8a04",
		pants: "#1f2937",
		shoes: "#111827",
		trim: "#fde68a"
	},
	kashu: {
		skin: "#f6c28b",
		hair: "#854d0e",
		hairStyle: "afro",
		shirt: "#eab308",
		pants: "#422006",
		shoes: "#fef3c7",
		trim: "#facc15"
	},
	eason: {
		skin: "#f3d2b5",
		hair: "#cbd5e1",
		hairStyle: "long",
		shirt: "#e2e8f0",
		pants: "#334155",
		shoes: "#0f172a",
		trim: "#67e8f9"
	},
	thomas: {
		skin: "#d4a574",
		hair: "#7c2d12",
		hairStyle: "spiky",
		shirt: "#eab308",
		pants: "#1c1917",
		shoes: "#111827",
		trim: "#fde047"
	},
	javis: {
		skin: "#c68642",
		hair: "#27272a",
		hairStyle: "bangs",
		shirt: "#71717a",
		pants: "#18181b",
		shoes: "#111827",
		trim: "#e4e4e7"
	},
	alton: {
		skin: "#f6c28b",
		hair: "#7f1d1d",
		hairStyle: "mohawk",
		shirt: "#b91c1c",
		pants: "#111827",
		shoes: "#111827",
		trim: "#fecaca"
	},
	socialist_rocky: {
		skin: "#f6c28b",
		hair: "#3b2416",
		hairStyle: "spiky",
		shirt: "#e11d48",
		pants: "#1e293b",
		shoes: "#0f172a",
		trim: "#fda4af"
	},
	harry: {
		skin: "#e8b48a",
		hair: "#44403c",
		hairStyle: "beanie",
		shirt: "#a8a29e",
		pants: "#44403c",
		shoes: "#1c1917",
		trim: "#d6d3d1"
	},
	tacops: {
		skin: "#c4a484",
		hair: "#14532d",
		hairStyle: "hood",
		shirt: "#065f46",
		pants: "#022c22",
		shoes: "#111827",
		trim: "#34d399"
	},
	quinn: {
		skin: "#f3c7a3",
		hair: "#0f766e",
		hairStyle: "bob",
		shirt: "#14b8a6",
		pants: "#134e4a",
		shoes: "#f8fafc",
		trim: "#99f6e4"
	},
	nora: {
		skin: "#e0ac69",
		hair: "#be123c",
		hairStyle: "ponytail",
		shirt: "#fb7185",
		pants: "#1e1b4b",
		shoes: "#f8fafc",
		trim: "#fda4af"
	},
	piper: {
		skin: "#f6d0b1",
		hair: "#0284c7",
		hairStyle: "twin",
		shirt: "#7dd3fc",
		pants: "#0c4a6e",
		shoes: "#f8fafc",
		trim: "#e0f2fe"
	},
	milo: {
		skin: "#8d5524",
		hair: "#312e81",
		hairStyle: "curly",
		shirt: "#a78bfa",
		pants: "#312e81",
		shoes: "#eef2ff",
		trim: "#ddd6fe"
	},
	sage: {
		skin: "#f1c27d",
		hair: "#334155",
		hairStyle: "bun",
		shirt: "#0f172a",
		pants: "#1e293b",
		shoes: "#111827",
		trim: "#f8fafc"
	},
	luna: {
		skin: "#f6c28b",
		hair: "#6d28d9",
		hairStyle: "long",
		shirt: "#818cf8",
		pants: "#312e81",
		shoes: "#f8fafc",
		trim: "#e0e7ff"
	},
	otto: {
		skin: "#d4a574",
		hair: "#44403c",
		hairStyle: "bangs",
		shirt: "#44403c",
		pants: "#1c1917",
		shoes: "#111827",
		trim: "#d6d3d1"
	},
	riley: {
		skin: "#c68642",
		hair: "#1c1917",
		hairStyle: "buzz",
		shirt: "#fbbf24",
		pants: "#78350f",
		shoes: "#111827",
		trim: "#fde68a"
	},
	coco: {
		skin: "#6b3a1f",
		hair: "#ea580c",
		hairStyle: "afro",
		shirt: "#ea580c",
		pants: "#431407",
		shoes: "#fff7ed",
		trim: "#fdba74"
	},
	bea: {
		skin: "#e8b48a",
		hair: "#7f1d1d",
		hairStyle: "braids",
		shirt: "#7f1d1d",
		pants: "#1c1917",
		shoes: "#111827",
		trim: "#fecaca"
	},
	nova: {
		skin: "#d7f7ff",
		hair: "#0891b2",
		hairStyle: "mohawk",
		shirt: "#082f49",
		pants: "#0e7490",
		shoes: "#ecfeff",
		trim: "#67e8f9"
	}
};
function lookOf(character) {
	return LOOKS[character.id] ?? {
		skin: "#f6c28b",
		hair: "#1c1917",
		hairStyle: "spiky",
		shirt: character.hex,
		pants: "#1e293b",
		shoes: "#0f172a",
		trim: "#ffffff"
	};
}
function HairAccent({ kind, color, cx, cy, r }) {
	if (kind === "spiky") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: color,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: `${cx},${cy - r - 8} ${cx - 6},${cy - 2} ${cx + 6},${cy - 2}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: `${cx - 12},${cy - r + 2} ${cx - 16},${cy + 4} ${cx - 4},${cy}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: `${cx + 12},${cy - r + 2} ${cx + 16},${cy + 4} ${cx + 4},${cy}` })
		]
	});
	if (kind === "ponytail") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
		cx: cx + r * .2,
		cy: cy + r * 1.35,
		rx: "6",
		ry: "12",
		fill: color
	});
	if (kind === "mohawk") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
		points: `${cx},${cy - r - 12} ${cx - 5},${cy - 2} ${cx + 5},${cy - 2}`,
		fill: color
	});
	if (kind === "twin") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: color,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: cx - r - 1,
			cy: cy + 2,
			r: "7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: cx + r + 1,
			cy: cy + 2,
			r: "7"
		})]
	});
	if (kind === "bun") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx,
		cy: cy + r + 4,
		r: "7",
		fill: color
	});
	if (kind === "long" || kind === "braids") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: color,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: cx - r - 1,
			y: cy,
			width: "6",
			height: r + 12,
			rx: "3"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: cx + r - 5,
			y: cy,
			width: "6",
			height: r + 12,
			rx: "3"
		})]
	});
	if (kind === "cap") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: `M${cx - r} ${cy - 4} Q${cx} ${cy - r - 10} ${cx + r} ${cy - 4} L${cx + r + 8} ${cy} L${cx - r - 2} ${cy} Z`,
		fill: color,
		stroke: "#0f172a",
		strokeWidth: "1.5"
	});
	if (kind === "beanie") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: `M${cx - r + 2} ${cy - 2} Q${cx} ${cy - r - 14} ${cx + r - 2} ${cy - 2} Z`,
		fill: color,
		stroke: "#0f172a",
		strokeWidth: "1.5"
	});
	if (kind === "hood") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: `M${cx - r - 6} ${cy + 8} Q${cx} ${cy - r - 16} ${cx + r + 6} ${cy + 8} Z`,
		fill: color,
		stroke: "#0f172a",
		strokeWidth: "1.5"
	});
	if (kind === "bob" || kind === "bangs") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: `M${cx - r - 1} ${cy - 6} Q${cx} ${cy - r - 6} ${cx + r + 1} ${cy - 6}`,
		fill: "none",
		stroke: color,
		strokeWidth: "6",
		strokeLinecap: "round"
	});
	if (kind === "afro") return null;
	if (kind === "curly") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: color,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: cx - 10,
				cy: cy - r + 2,
				r: "5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: cx + 10,
				cy: cy - r + 2,
				r: "5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx,
				cy: cy - r - 1,
				r: "5"
			})
		]
	});
	return null;
}
function HornForward({ family, hex, playing }) {
	const wide = [
		"trumpet",
		"trombone",
		"horn",
		"tuba",
		"sousaphone",
		"megaphone",
		"sax",
		"sax_straight"
	].includes(family);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
		transform: `translate(50 12) scale(${playing ? 1.1 : 1})`,
		children: family === "drum" || family === "cymbal" || family === "tambourine" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "0",
			cy: "4",
			rx: "14",
			ry: "7",
			fill: hex,
			stroke: "#0f172a",
			strokeWidth: "2"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "-4",
			y: "4",
			width: "8",
			height: "20",
			rx: "3",
			fill: hex,
			stroke: "#0f172a",
			strokeWidth: "1.6"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "0",
			cy: "3",
			rx: wide ? 12 : 7,
			ry: "5",
			fill: hex,
			stroke: "#0f172a",
			strokeWidth: "1.6"
		})] })
	});
}
function CustomPlayerSVG({ character, instrumentId, isPlaying, isWalking, z = 0, view = "play" }) {
	const inst = INSTRUMENTS[instrumentId];
	const look = lookOf(character);
	const lift = Math.min(22, z / 8);
	const swing = isWalking ? Math.sin(Date.now() / 120) * 5 : 0;
	const family = inst?.family ?? "clarinet";
	const hex = inst?.hex ?? character.hex;
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "50",
			cy: "84",
			rx: "26",
			ry: "9",
			fill: "rgba(0,0,0,0.35)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: 40 - swing,
			cy: "74",
			rx: "9",
			ry: "5",
			fill: look.shoes,
			stroke: "#0f172a",
			strokeWidth: "1.4"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: 60 + swing,
			cy: "74",
			rx: "9",
			ry: "5",
			fill: look.shoes,
			stroke: "#0f172a",
			strokeWidth: "1.4"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 34 - swing,
			y: "62",
			width: "12",
			height: "14",
			rx: "5",
			fill: look.pants,
			stroke: "#0f172a",
			strokeWidth: "1.4"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 54 + swing,
			y: "62",
			width: "12",
			height: "14",
			rx: "5",
			fill: look.pants,
			stroke: "#0f172a",
			strokeWidth: "1.4"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "22",
			cy: "48",
			rx: "10",
			ry: "6",
			fill: look.skin,
			stroke: "#0f172a",
			strokeWidth: "1.5",
			transform: "rotate(-18 22 48)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "78",
			cy: "48",
			rx: "10",
			ry: "6",
			fill: look.skin,
			stroke: "#0f172a",
			strokeWidth: "1.5",
			transform: "rotate(18 78 48)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "50",
			cy: "50",
			rx: "24",
			ry: "16",
			fill: look.shirt,
			stroke: "#0f172a",
			strokeWidth: "2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "50",
			cy: "46",
			rx: "8",
			ry: "4",
			fill: look.trim
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M34 56 H66",
			stroke: look.pants,
			strokeWidth: "4",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "50",
			cy: "32",
			r: "16",
			fill: look.hair,
			stroke: "#0f172a",
			strokeWidth: "1.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "50",
			cy: "28",
			r: "12",
			fill: look.skin,
			stroke: "#0f172a",
			strokeWidth: "1.6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M36 34 Q50 50 64 34 Q50 42 36 34",
			fill: look.hair
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HairAccent, {
			kind: look.hairStyle,
			color: look.hair,
			cx: 50,
			cy: 40,
			r: 12
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "50",
			cy: "18",
			rx: "3",
			ry: "4",
			fill: "#c4845a",
			stroke: "#0f172a",
			strokeWidth: "1"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HornForward, {
			family,
			hex,
			playing: isPlaying
		})
	] });
	if (view === "card") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full overflow-visible",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
			transform: `translate(0 ${-lift * .3})`,
			children: body
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full overflow-visible",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
			transform: `translate(0 ${-lift})`,
			children: body
		})
	});
}
var ENEMY_LOOK = {
	goon: {
		body: "#ef4444",
		skin: "#f6c28b",
		hair: "#7f1d1d",
		mark: "ears"
	},
	thug: {
		body: "#6d28d9",
		skin: "#e0ac69",
		hair: "#1e1b4b",
		mark: "spike"
	},
	soundproofer: {
		body: "#64748b",
		skin: "#f3d2b5",
		hair: "#334155",
		mark: "foam"
	},
	linebacker: {
		body: "#1d4ed8",
		skin: "#d4a574",
		hair: "#1e3a8a",
		mark: "helmet"
	},
	quarterback: {
		body: "#0284c7",
		skin: "#f6d0b1",
		hair: "#0c4a6e",
		mark: "stripe"
	},
	striker: {
		body: "#16a34a",
		skin: "#f6c28b",
		hair: "#14532d",
		mark: "band"
	},
	kicker: {
		body: "#1d4ed8",
		skin: "#e0ac69",
		hair: "#1e3a8a",
		mark: "kick"
	},
	angry_student: {
		body: "#ea580c",
		skin: "#f6c28b",
		hair: "#9a3412",
		mark: "none"
	},
	minion: {
		body: "#f59e0b",
		skin: "#fde68a",
		hair: "#92400e",
		mark: "badge"
	},
	ally: {
		body: "#2563eb",
		skin: "#f3c7a3",
		hair: "#1e3a8a",
		mark: "none"
	},
	brainrot_kid: {
		body: "#65a30d",
		skin: "#f6c28b",
		hair: "#84cc16",
		mark: "wild"
	}
};
function CustomEnemySVG({ typeId, isHit }) {
	const look = ENEMY_LOOK[typeId] ?? {
		body: "#ef4444",
		skin: "#fcd34d",
		hair: "#7f1d1d",
		mark: "none"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full overflow-visible",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			transform: isHit ? "translate(2 0)" : void 0,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "50",
					cy: "84",
					rx: "24",
					ry: "8",
					fill: "rgba(0,0,0,0.3)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "38",
					cy: "74",
					rx: "8",
					ry: "5",
					fill: "#0f172a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "62",
					cy: "74",
					rx: "8",
					ry: "5",
					fill: "#0f172a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "20",
					cy: "50",
					rx: "9",
					ry: "5",
					fill: look.skin,
					stroke: "#0f172a",
					strokeWidth: "1.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "80",
					cy: "50",
					rx: "9",
					ry: "5",
					fill: look.skin,
					stroke: "#0f172a",
					strokeWidth: "1.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "50",
					cy: "52",
					rx: "22",
					ry: "15",
					fill: look.body,
					stroke: "#0f172a",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "32",
					r: "15",
					fill: look.hair,
					stroke: "#0f172a",
					strokeWidth: "1.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "28",
					r: "11",
					fill: look.skin,
					stroke: "#0f172a",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M37 34 Q50 48 63 34 Q50 40 37 34",
					fill: look.hair
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "50",
					cy: "18",
					rx: "2.6",
					ry: "3.4",
					fill: "#c4845a",
					stroke: "#0f172a",
					strokeWidth: "0.8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "47",
					y: "4",
					width: "6",
					height: "12",
					rx: "2",
					fill: "#94a3b8",
					stroke: "#0f172a",
					strokeWidth: "1"
				}),
				look.mark === "ears" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "18",
					y: "26",
					width: "10",
					height: "12",
					rx: "3",
					fill: look.body,
					stroke: "#0f172a",
					strokeWidth: "1.3"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "72",
					y: "26",
					width: "10",
					height: "12",
					rx: "3",
					fill: look.body,
					stroke: "#0f172a",
					strokeWidth: "1.3"
				})] }),
				look.mark === "spike" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "50,6 40,22 60,22",
					fill: "#4c1d95",
					stroke: "#0f172a",
					strokeWidth: "1.3"
				}),
				look.mark === "foam" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					fill: "#e2e8f0",
					stroke: "#0f172a",
					strokeWidth: "1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "38",
							y: "46",
							width: "8",
							height: "8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "48",
							y: "46",
							width: "8",
							height: "8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "43",
							y: "56",
							width: "8",
							height: "8"
						})
					]
				}),
				look.mark === "helmet" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M34 30 Q50 14 66 30 L64 36 Q50 26 36 36 Z",
					fill: "#e2e8f0",
					stroke: "#0f172a",
					strokeWidth: "1.4"
				}),
				look.mark === "stripe" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M36 48 H64",
					stroke: "#f8fafc",
					strokeWidth: "4"
				}),
				look.mark === "band" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M34 50 H66",
					stroke: "#f8fafc",
					strokeWidth: "5"
				}),
				look.mark === "kick" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "68",
					cy: "20",
					r: "6",
					fill: "#f8fafc",
					stroke: "#0f172a",
					strokeWidth: "1.3"
				}),
				look.mark === "badge" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "54",
					r: "5",
					fill: "#fde68a",
					stroke: "#0f172a",
					strokeWidth: "1"
				}),
				look.mark === "wild" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					fill: "#bef264",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "36",
							cy: "24",
							r: "5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "50",
							cy: "16",
							r: "5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "64",
							cy: "24",
							r: "5"
						})
					]
				})
			]
		})
	});
}
function TeacherSVG({ glasses, shirt, isHit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 100 100",
		className: "h-full w-full overflow-visible",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			transform: isHit ? "translate(2 0)" : void 0,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "50",
					cy: "86",
					rx: "28",
					ry: "9",
					fill: "rgba(0,0,0,0.32)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "36",
					cy: "76",
					rx: "9",
					ry: "5",
					fill: "#0f172a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "64",
					cy: "76",
					rx: "9",
					ry: "5",
					fill: "#0f172a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "18",
					cy: "52",
					rx: "10",
					ry: "6",
					fill: "#fcd34d",
					stroke: "#0f172a",
					strokeWidth: "1.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "82",
					cy: "52",
					rx: "10",
					ry: "6",
					fill: "#fcd34d",
					stroke: "#0f172a",
					strokeWidth: "1.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "50",
					cy: "54",
					rx: "26",
					ry: "17",
					fill: shirt,
					stroke: "#0f172a",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "50",
					cy: "50",
					rx: "7",
					ry: "4",
					fill: "#f8fafc"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "32",
					r: "16",
					fill: "#334155",
					stroke: "#0f172a",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "28",
					r: "12",
					fill: "#fcd34d",
					stroke: "#0f172a",
					strokeWidth: "1.6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M36 34 Q50 50 64 34 Q50 42 36 34",
					fill: "#334155"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "50",
					cy: "18",
					rx: "3",
					ry: "4",
					fill: "#d9a066",
					stroke: "#0f172a",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "46",
					y: "2",
					width: "8",
					height: "14",
					rx: "2",
					fill: "#f8fafc",
					stroke: "#0f172a",
					strokeWidth: "1.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "2",
					r: "3.5",
					fill: "#fbbf24",
					stroke: "#0f172a",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					fill: "none",
					stroke: "#0f172a",
					strokeWidth: glasses === "thick" ? 3 : 1.8,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 24 H60" }),
						glasses !== "sport" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "44",
							cy: "24",
							r: "3.2"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "56",
							cy: "24",
							r: "3.2"
						})] }),
						glasses === "sport" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M38 22 H62",
							strokeWidth: "4"
						})
					]
				})
			]
		})
	});
}
var NOTE_DIGITS = /* @__PURE__ */ new Set([
	"Digit5",
	"Digit6",
	"Digit8",
	"Digit9",
	"Digit0"
]);
function maxHp(character, cu) {
	return Math.round(100 * character.stats.hpMultiplier + cu.hp * 50);
}
function GameEngine({ level, character, instrumentIds, upgrades, charUpgrade, cheats, reeds, onReeds, onEnd, onExit, shop }) {
	const viewRef = (0, import_react.useRef)(null);
	const engine = (0, import_react.useRef)(null);
	if (!engine.current) engine.current = createEngine(level, character, maxHp(character, charUpgrade));
	const sim = engine.current;
	const [tick, setTick] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [showShop, setShowShop] = (0, import_react.useState)(false);
	const [activeId, setActiveId] = (0, import_react.useState)(level.id === "m_eason_1" ? "egg" : instrumentIds[0] ?? "toot");
	const [activeKeys, setActiveKeys] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [combo, setCombo] = (0, import_react.useState)(null);
	const [special, setSpecial] = (0, import_react.useState)(null);
	const [hud, setHud] = (0, import_react.useState)({
		hp: sim.player.hp,
		breath: sim.player.breath,
		boss: level.hp
	});
	const activeRef = (0, import_react.useRef)(activeId);
	activeRef.current = activeId;
	const pausedRef = (0, import_react.useRef)(paused);
	pausedRef.current = paused;
	const idsRef = (0, import_react.useRef)(instrumentIds);
	idsRef.current = instrumentIds;
	const upRef = (0, import_react.useRef)(upgrades);
	upRef.current = upgrades;
	const cuRef = (0, import_react.useRef)(charUpgrade);
	cuRef.current = charUpgrade;
	const charRef = (0, import_react.useRef)(character);
	charRef.current = character;
	const onEndRef = (0, import_react.useRef)(onEnd);
	onEndRef.current = onEnd;
	const onReedsRef = (0, import_react.useRef)(onReeds);
	onReedsRef.current = onReeds;
	(0, import_react.useEffect)(() => {
		const hp = maxHp(charRef.current, cuRef.current);
		const p = sim.player;
		const gain = hp - p.maxHp;
		p.maxHp = hp;
		if (gain > 0) p.hp = Math.min(hp, p.hp + gain);
	}, [charUpgrade, sim]);
	(0, import_react.useEffect)(() => {
		const eng = sim;
		let last = 0;
		let raf = 0;
		let alive = true;
		const loop = (t) => {
			if (!alive) return;
			if (!last) {
				last = t;
				raf = requestAnimationFrame(loop);
				return;
			}
			const dt = Math.min(.05, (t - last) / 1e3);
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
				setHud({
					hp: eng.player.hp,
					breath: eng.player.breath,
					boss
				});
			}
			setTick((n) => (n + 1) % 1e5);
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
			}
		});
		return () => {
			alive = false;
			cancelAnimationFrame(raf);
			unbind();
		};
	}, [level, sim]);
	(0, import_react.useEffect)(() => {
		const eng = sim;
		const down = (e) => {
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
				if (INSTRUMENTS[activeRef.current]?.family === "gun") gunMelee(eng);
				else tryJump(eng);
				return;
			}
			if (speaking) return;
			const note = NOTES.find((n) => n.key === e.key.toLowerCase());
			if (!note) return;
			initAudio();
			const upg = upRef.current[activeRef.current] ?? {
				damageLvl: 0,
				breathLvl: 0,
				hitsLvl: 0
			};
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
		const up = (e) => {
			eng.keys[e.code] = false;
			if (NOTES.some((n) => n.key === e.key.toLowerCase())) eng.player.isRooted = false;
		};
		const blur = () => {
			eng.keys = {};
			eng.stick = {
				x: 0,
				y: 0
			};
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
	(0, import_react.useEffect)(() => {
		if (!combo) return;
		const t = window.setTimeout(() => setCombo(null), 1600);
		return () => window.clearTimeout(t);
	}, [combo]);
	(0, import_react.useEffect)(() => {
		if (!special) return;
		const t = window.setTimeout(() => setSpecial(null), 1200);
		return () => window.clearTimeout(t);
	}, [special]);
	const camX = sim.camera.x - sim.viewW / 2;
	const camY = sim.camera.y - sim.viewH / 2;
	const inst = INSTRUMENTS[activeId] ?? INSTRUMENTS.toot;
	const hotbar = level.id === "m_eason_1" ? ["egg", ...instrumentIds.filter((id) => id !== "egg")] : instrumentIds;
	idsRef.current = hotbar;
	const bossAlive = Boolean(sim.boss && sim.boss.hp > 0);
	const speechNow = level.id === "m_eason_1" && sim.boss?.behavior === "speech";
	const fire = () => {
		if (pausedRef.current) return;
		if (speechNow && activeRef.current !== "egg") return;
		initAudio();
		const w = worldFromMouse(sim);
		shootAimed(sim, activeRef.current, charRef.current, cuRef.current, w.x, w.y);
	};
	const play = (note) => {
		if (pausedRef.current || speechNow) return;
		initAudio();
		const upg = upRef.current[activeRef.current] ?? {
			damageLvl: 0,
			breathLvl: 0,
			hitsLvl: 0
		};
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full min-h-0 flex-col",
		children: [
			combo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute top-[18%] left-1/2 z-40 -translate-x-1/2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-4xl text-amber-300 drop-shadow sm:text-5xl",
					children: ["COMBO: ", combo]
				})
			}),
			special && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-flash-text pointer-events-none absolute top-[30%] left-1/2 z-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-5xl text-rose-400",
					children: special
				})
			}),
			paused && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-50 flex flex-col items-center overflow-y-auto bg-slate-950/95 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex w-full max-w-3xl flex-wrap items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-slate-50",
						children: "Paused"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPaused(false),
								className: "rounded-full bg-emerald-500 px-4 py-2 font-extrabold text-slate-950",
								children: "Resume"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setShowShop((v) => !v),
								className: "rounded-full bg-amber-400 px-4 py-2 font-extrabold text-slate-950",
								children: showShop ? "Close shop" : "Shop"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onExit,
								className: "rounded-full bg-slate-700 px-4 py-2 font-extrabold text-slate-100",
								children: "Quit"
							})
						]
					})]
				}), showShop ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full max-w-3xl",
					children: shop
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-slate-400",
					children: "Esc resumes. Shop buys apply to the next note."
				})]
			}),
			cheats && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute right-3 bottom-52 z-30 flex w-40 flex-col gap-1 rounded-xl border border-rose-500 bg-slate-950/90 p-2 text-[11px] text-slate-100",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center font-extrabold text-rose-300",
						children: "Cheats"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							onChange: (e) => sim.godMode = e.target.checked
						}), " God mode"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded bg-rose-900 py-1",
						onClick: () => onReeds(1e4),
						children: "+10k reeds"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded bg-orange-900 py-1",
						onClick: () => {
							for (const e of sim.enemies) e.hp = 0;
						},
						children: "Clear enemies"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: viewRef,
				className: "relative min-h-0 flex-1 cursor-crosshair overflow-hidden bg-slate-900",
				onPointerMove: (e) => {
					const r = e.currentTarget.getBoundingClientRect();
					sim.mouse = {
						x: e.clientX - r.left,
						y: e.clientY - r.top
					};
				},
				onPointerDown: (e) => {
					if (e.target !== e.currentTarget && !e.target.dataset?.arena) return;
					fire();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-arena": "1",
						className: "absolute inset-0",
						onPointerDown: fire
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute top-0 left-0",
						style: {
							width: sim.mapW,
							height: sim.mapH,
							transform: `translate(${Math.round(-camX)}px, ${Math.round(-camY)}px)`
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute opacity-60",
								style: {
									width: sim.mapW,
									height: sim.mapH,
									backgroundImage: "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)",
									backgroundSize: "40px 40px"
								}
							}),
							sim.walls.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute border border-slate-600 bg-slate-700",
								style: {
									left: w.x,
									top: w.y,
									width: w.w,
									height: w.h
								},
								children: !w.isBorder && w.hp < w.maxHp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 bg-rose-500/40",
									style: { opacity: 1 - w.hp / w.maxHp }
								})
							}, w.id)),
							sim.door && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute",
								style: {
									left: sim.door.x - 36,
									top: sim.door.y - 36,
									width: 72,
									height: 72
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderShape, { shape: "door" })
							}),
							sim.enemies.map((e) => e.isBoss ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute",
								style: {
									left: e.x - e.radius,
									top: e.y - e.radius,
									width: e.radius * 2,
									height: e.radius * 2
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0",
									style: { transform: `rotate(${entityFacingDeg(e.angle)}deg)` },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeacherSVG, {
										glasses: level.glassesType,
										shirt: level.shirtColor,
										isHit: e.hitFlash > 0
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, { value: e.hp / e.maxHp })]
							}, e.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute",
								style: {
									left: e.x - e.radius,
									top: e.y - e.radius,
									width: e.radius * 2,
									height: e.radius * 2
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0",
									style: { transform: `rotate(${entityFacingDeg(e.angle)}deg)` },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomEnemySVG, {
										typeId: e.typeId,
										isHit: e.hitFlash > 0
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, { value: e.hp / e.maxHp })]
							}, e.id)),
							sim.allies.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute",
								style: {
									left: a.x - a.radius,
									top: a.y - a.radius,
									width: a.radius * 2,
									height: a.radius * 2
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0",
									style: { transform: `rotate(${entityFacingDeg(a.angle)}deg)` },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomEnemySVG, { typeId: "ally" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									value: a.hp / a.maxHp,
									tone: "bg-sky-400"
								})]
							}, a.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute",
								style: {
									left: sim.player.x - 40,
									top: sim.player.y - 40,
									width: 80,
									height: 80,
									transform: `rotate(${entityFacingDeg(sim.player.angle)}deg)`
								},
								children: [sim.time < sim.player.invincibleUntil && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border-4 border-amber-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomPlayerSVG, {
									character,
									instrumentId: activeId,
									isPlaying: sim.player.isPlaying,
									isWalking: sim.player.isWalking,
									z: sim.player.z
								})]
							}),
							sim.projectiles.map((pr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute",
								style: {
									left: pr.x - 16,
									top: pr.y - 16,
									width: 32,
									height: 32,
									transform: `rotate(${projectileFacingDeg(pr.shape, pr.angle)}deg)`
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderShape, {
									shape: pr.shape,
									hex: pr.hex
								})
							}, pr.id)),
							sim.enemyShots.map((pr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute",
								style: {
									left: pr.x - 12,
									top: pr.y - 12,
									width: 24,
									height: 24,
									transform: `rotate(${projectileFacingDeg(pr.football ? "football" : "note", pr.angle)}deg)`
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderShape, {
									shape: pr.football ? "football" : "note",
									hex: "#ef4444"
								})
							}, pr.id)),
							sim.particles.map((pr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute",
								style: {
									left: pr.x - 16,
									top: pr.y - 16,
									width: 32,
									height: 32,
									opacity: Math.max(0, pr.life),
									transform: `scale(${pr.scale})`
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderShape, {
									shape: pr.shape,
									hex: pr.hex
								})
							}, pr.id))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute top-3 right-3 left-3 flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-44 rounded-2xl border border-slate-600 bg-slate-950/90 p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-bold text-emerald-300",
									children: [
										"HP ",
										Math.ceil(hud.hp),
										" / ",
										Math.ceil(sim.player.maxHp)
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 h-2 overflow-hidden rounded-full bg-slate-800",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-emerald-400",
										style: { width: `${Math.max(0, hud.hp / sim.player.maxHp * 100)}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs font-bold text-cyan-300",
									children: ["Breath ", Math.ceil(hud.breath)]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 h-2 overflow-hidden rounded-full bg-slate-800",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-cyan-300",
										style: { width: `${Math.max(0, hud.breath / sim.player.maxBreath * 100)}%` }
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-[14rem] rounded-2xl border border-slate-600 bg-slate-950/90 px-3 py-2 text-right text-xs font-bold text-amber-200",
							children: [speechNow ? "Throw the egg at Kashu!" : sim.door ? "Step into the door." : bossAlive ? `Defeat ${level.teacher}` : `Henchmen left to spawn: ${Math.max(0, level.henchmenCount - sim.henchmenSpawned)}`, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-1 block font-medium text-slate-400",
								children: [reeds, " reeds · Esc pauses"]
							})]
						})]
					}),
					bossAlive && sim.boss && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute top-3 left-1/2 w-56 -translate-x-1/2 rounded-2xl border border-rose-900 bg-slate-950/90 p-2 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-extrabold text-rose-300",
								children: level.teacher
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-slate-400",
								children: level.subject
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 h-2 overflow-hidden rounded-full bg-slate-800",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-rose-500",
									style: { width: `${Math.max(0, hud.boss / level.hp * 100)}%` }
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-3 left-3 z-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovePad, { onStick: (x, y) => sim.stick = {
							x,
							y
						} })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute right-3 bottom-3 z-20 flex gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
								label: "Jump",
								onPress: () => inst.family === "gun" ? gunMelee(sim) : tryJump(sim)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
								label: "Power",
								onPress: () => {
									if (speechNow) return;
									initAudio();
									const name = useSecret(sim, charRef.current, cuRef.current);
									if (name) setSpecial(name);
								}
							}),
							(inst.family === "gun" || inst.family === "throwable") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
								label: inst.family === "throwable" ? "Throw" : "Fire",
								onPress: fire
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shrink-0 border-t border-slate-700 bg-slate-950 px-3 pt-2 pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex gap-2 overflow-x-auto",
					children: [hotbar.map((id, idx) => {
						const item = INSTRUMENTS[id];
						if (!item) return null;
						if (item.family === "throwable" && level.id !== "m_eason_1") return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								if (speechNow) return;
								setActiveId(id);
							},
							className: `relative h-14 w-14 shrink-0 rounded-xl ${activeId === id ? `ring-2 ring-cyan-200 ${item.color}` : "bg-slate-800"}`,
							title: item.name,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-0.5 right-1 text-[10px] font-bold text-slate-900",
								children: idx + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto h-8 w-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderShape, {
									shape: item.family === "gun" ? "gun" : item.family,
									hex: item.hex
								})
							})]
						}, id);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "self-center pl-2 text-xs text-slate-400",
						children: [
							inst.name,
							inst.family !== "gun" && inst.family !== "throwable" ? ` · ${inst.breathCost} breath` : " · click the field",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-slate-500",
								children: "Tap a horn or press 1-4 to switch."
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Piano, {
					onPlay: play,
					active: activeKeys
				})]
			})
		]
	});
}
function Bar({ value, tone = "bg-rose-500" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute -top-2 left-1/2 h-1.5 w-10 -translate-x-1/2 overflow-hidden rounded-full bg-slate-900",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `h-full ${tone}`,
			style: { width: `${Math.max(0, Math.min(1, value)) * 100}%` }
		})
	});
}
var HORN = {
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
	nova: "synth"
};
function Portrait({ character }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-16 w-14 shrink-0 overflow-hidden rounded-2xl border border-slate-600 bg-slate-950",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomPlayerSVG, {
			character,
			instrumentId: HORN[character.id] ?? "toot",
			isPlaying: false,
			isWalking: false,
			view: "card"
		})
	});
}
function PriceButton({ ok, cost, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled: !ok,
		onClick,
		className: `flex items-center gap-1 rounded-full px-3 py-2 text-sm font-extrabold ${ok ? "bg-emerald-500 text-slate-950" : "bg-slate-700 text-slate-500"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, { size: 14 }),
			" ",
			cost
		]
	});
}
function MainMenu({ onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col items-center px-2 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-center text-4xl text-slate-50 sm:text-6xl",
				children: "Battle of the Band"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md text-center text-slate-400",
				children: "Detention is a battlefield. Play notes, dodge teachers, and use the town teleports."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-3",
				children: [
					{
						v: "chars",
						label: "Start Detention",
						icon: Play,
						className: "bg-cyan-500 text-slate-950"
					},
					{
						v: "town",
						label: "Visit Town",
						icon: Map$1,
						className: "bg-emerald-500 text-slate-950"
					},
					{
						v: "levelSelect",
						label: "Class Schedule",
						icon: BookOpen,
						className: "bg-slate-800 text-cyan-200"
					},
					{
						v: "shop",
						label: "Music Store",
						icon: Store,
						className: "bg-amber-400 text-slate-950"
					},
					{
						v: "missions",
						label: "Mission Board",
						icon: ClipboardList,
						className: "bg-slate-800 text-amber-200"
					},
					{
						v: "arcade",
						label: "Band Arcade",
						icon: Gamepad2,
						className: "bg-violet-400 text-slate-950"
					},
					{
						v: "tutorial",
						label: "How to Play",
						icon: CircleHelp,
						className: "bg-slate-800 text-slate-100"
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onNavigate(item.v),
					className: `flex items-center justify-center gap-2 rounded-2xl px-4 py-4 text-base font-extrabold ${item.className}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { size: 22 }),
						" ",
						item.label
					]
				}, item.v))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onNavigate("lore"),
				className: "mt-4 text-sm font-bold text-cyan-300",
				children: "Band lore and combos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onNavigate("secret"),
				className: "mt-6 text-xs tracking-widest text-slate-500 uppercase",
				children: "Secret access code"
			})
		]
	});
}
function Tutorial({ onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl space-y-4 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-4xl text-cyan-300",
				children: "How to Play"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 rounded-2xl border border-slate-600 bg-slate-800 p-5 text-slate-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-extrabold text-slate-50",
						children: "Move."
					}), " WASD or arrows. The on-screen pad works too. Shift sprints and spends breath. Space jumps. A moves left, D moves right. Your horn points the way you face."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-extrabold text-slate-50",
						children: "Pack your case."
					}), " Before detention you pick up to four instruments. Slot 1 is the one in your hands. During class, tap a horn or press 1-4 to switch."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-extrabold text-slate-50",
						children: "Play."
					}), " The T-row piano shoots homing notes. Match your hero's 3-note combo from the lore page. Q, or Power, spends breath on a secret."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-extrabold text-slate-50",
						children: "Town teleports."
					}), " Walk into the middle of a glowing ring. You can also tap the ring, or press Enter when the banner says Ready. The grey ring is the way back to the menu."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-extrabold text-slate-50",
						children: "Arcade."
					}), " Bell Memory, Beat Gate, Scale Sprint, Folder Sort, and Stand Balance each pay a small stack of reeds once a day."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-extrabold text-slate-50",
						children: "Reeds."
					}), " Defeat enemies, then spend them in the store, the black market, or training camp."] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onBack,
				className: "rounded-full bg-cyan-400 px-6 py-3 font-extrabold text-slate-950",
				children: "Back to menu"
			})
		]
	});
}
function LoreView({ save }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl space-y-4 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-center text-4xl text-cyan-300",
			children: "Band Lore"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: CHARACTERS.filter((c) => save.unlockedCharacters.includes(c.id)).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "flex gap-3 rounded-2xl border border-slate-600 bg-slate-800 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, { character: c }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: `text-lg font-extrabold ${c.color}`,
						children: c.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-slate-400",
						children: c.lore
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-slate-200",
						children: [
							"Secret (Q): ",
							c.secret.name,
							" — ",
							c.secret.desc,
							" Costs ",
							c.secret.cost,
							" breath."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-amber-200",
						children: comboLabel(c.id)
					})
				] })]
			}, c.id))
		})]
	});
}
function CharSelect({ save, onSelect, onSchedule }) {
	const active = characterById(save.activeCharId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex max-w-4xl flex-col gap-4 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-center text-4xl text-cyan-300",
				children: "Pick Your Player"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
				children: CHARACTERS.map((c) => {
					const owned = save.unlockedCharacters.includes(c.id);
					const on = save.activeCharId === c.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: !owned,
						onClick: () => onSelect(c.id),
						className: `flex items-center gap-3 rounded-2xl border p-3 text-left ${on ? "border-cyan-300 bg-slate-700" : "border-slate-600 bg-slate-800"} ${owned ? "" : "opacity-50"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, { character: c }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `font-extrabold ${c.color}`,
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-slate-400",
								children: owned ? c.lore : `Locked · ${c.cost} reeds in the store`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-slate-300",
								children: [
									"HP ",
									c.stats.hpMultiplier,
									"x · Speed ",
									c.stats.speedMultiplier,
									"x · Damage ",
									c.stats.damageMultiplier,
									"x"
								]
							})
						] })]
					}, c.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-slate-600 bg-slate-900 p-4 text-sm text-slate-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-extrabold text-slate-50",
						children: ["Selected: ", active.name]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: comboLabel(active.id) }),
					COMBOS[active.id] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-slate-400",
						children: ["Notes: ", COMBOS[active.id].seq.map((n) => `${n} (${NOTES.find((note) => note.name === n)?.key.toUpperCase()})`).join(", ")]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onSchedule,
				className: "mx-auto rounded-full bg-cyan-400 px-8 py-3 font-extrabold text-slate-950",
				children: [
					"Take ",
					active.name.split(" ")[0],
					" to class"
				]
			})
		]
	});
}
function LevelSelect({ save, onStart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl space-y-6 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-center text-4xl text-cyan-300",
				children: "Class Schedule"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelGrid, {
				title: "Regular classes",
				levels: STANDARD_LEVELS,
				max: save.maxLevelUnlocked,
				onStart
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelGrid, {
				title: "DLC — overtime detention",
				levels: DLC_LEVELS,
				max: save.maxLevelUnlocked,
				onStart
			})
		]
	});
}
function GearView({ save, level, onBack, onStart }) {
	const owned = save.unlockedInstruments.filter((id) => id !== "egg" && INSTRUMENTS[id]);
	const starter = (save.loadout ?? []).filter((id) => owned.includes(id));
	const [picked, setPicked] = (0, import_react.useState)(starter.length ? starter.slice(0, 4) : owned.slice(0, 4));
	const toggle = (id) => {
		setPicked((prev) => {
			if (prev.includes(id)) return prev.filter((x) => x !== id);
			if (prev.length >= 4) return prev;
			return [...prev, id];
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl space-y-4 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-center text-4xl text-cyan-300",
				children: "Pack your case"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center text-slate-300",
				children: [
					level.subject,
					" with ",
					level.teacher,
					". Pick up to four horns. Slot 1 is what you start holding. Tap again to remove one."
				]
			}),
			level.id === "m_eason_1" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-sm font-bold text-amber-200",
				children: "This job also puts an egg in your case."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap justify-center gap-2",
				children: [picked.map((id, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => toggle(id),
					className: "rounded-2xl border border-cyan-300 bg-slate-800 px-3 py-2 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[10px] font-bold text-cyan-200",
						children: ["Slot ", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-extrabold text-slate-50",
						children: INSTRUMENTS[id]?.name
					})]
				}, id)), picked.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-rose-300",
					children: "Pick at least one instrument."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid max-h-[26rem] grid-cols-2 gap-2 overflow-y-auto sm:grid-cols-3",
				children: owned.map((id) => {
					const inst = INSTRUMENTS[id];
					const slot = picked.indexOf(id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => toggle(id),
						className: `flex items-center gap-2 rounded-2xl border p-2 text-left ${slot >= 0 ? "border-cyan-300 bg-slate-700" : "border-slate-600 bg-slate-800"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `h-10 w-10 shrink-0 rounded-full ${inst.color}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderShape, {
								shape: inst.family === "gun" ? "gun" : inst.family,
								hex: inst.hex
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-extrabold text-slate-50",
							children: inst.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-slate-400",
							children: slot >= 0 ? `In slot ${slot + 1}` : "Tap to pack"
						})] })]
					}, id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onBack,
					className: "rounded-full bg-slate-700 px-5 py-3 font-extrabold text-slate-100",
					children: "Back"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: picked.length === 0,
					onClick: () => onStart(picked),
					className: "rounded-full bg-cyan-400 px-6 py-3 font-extrabold text-slate-950 disabled:opacity-40",
					children: "Start detention"
				})]
			})
		]
	});
}
function LevelGrid({ title, levels, max, onStart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "mb-2 font-extrabold text-slate-200",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-4 gap-2 sm:grid-cols-8",
		children: levels.map((level) => {
			const id = Number(level.id);
			const open = id <= max;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: !open,
				onClick: () => onStart(level),
				className: `h-12 rounded-xl text-sm font-extrabold ${open ? "bg-slate-700 text-cyan-100" : "bg-slate-900 text-slate-600"} ${id === max ? "ring-2 ring-amber-300" : ""}`,
				children: id
			}, level.id);
		})
	})] });
}
function MissionsView({ save, onStart, onClaim }) {
	const [tab, setTab] = (0, import_react.useState)("missions");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl space-y-4 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-center text-4xl text-amber-300",
				children: "Mission Board"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab("missions"),
					className: `rounded-full px-4 py-2 font-extrabold ${tab === "missions" ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-slate-300"}`,
					children: "Missions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab("quests"),
					className: `rounded-full px-4 py-2 font-extrabold ${tab === "quests" ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-slate-300"}`,
					children: "Quests"
				})]
			}),
			tab === "missions" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid max-h-[34rem] gap-3 overflow-y-auto pr-1 sm:grid-cols-2",
				children: MISSIONS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col rounded-2xl border border-slate-600 bg-slate-800 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[10px] font-bold tracking-wider text-amber-300",
							children: ["CLIENT: ", m.giver]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-extrabold text-slate-50",
							children: m.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "flex-1 text-sm text-slate-400",
							children: m.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-bold text-amber-200",
								children: m.rewardText
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onStart(m.levelData),
								className: "rounded-full bg-cyan-400 px-4 py-2 text-sm font-extrabold text-slate-950",
								children: "Start"
							})]
						})
					]
				}, m.id))
			}),
			tab === "quests" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: QUESTS.map((q) => {
					const progress = Math.min(save.gameStats[q.metric] || 0, q.target);
					const done = progress >= q.target;
					const claimed = save.claimedQuests.includes(q.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-slate-600 bg-slate-800 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[10px] font-bold text-amber-300",
								children: ["CLIENT: ", q.giver]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-extrabold text-slate-50",
								children: q.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-slate-400",
								children: q.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-slate-200",
								children: [
									progress,
									" / ",
									q.target
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-2 overflow-hidden rounded-full bg-slate-900",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `h-full ${done ? "bg-emerald-400" : "bg-slate-500"}`,
									style: { width: `${progress / q.target * 100}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-amber-200",
									children: q.rewardText
								}), claimed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold text-emerald-300",
									children: "Claimed"
								}) : done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => onClaim(q),
									className: "rounded-full bg-amber-400 px-3 py-2 text-sm font-extrabold text-slate-950",
									children: "Claim"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-slate-500",
									children: "In progress"
								})]
							})
						]
					}, q.id);
				})
			})
		]
	});
}
function ShopView({ save, blackMarket, tab, onTab, onBuy }) {
	const active = characterById(save.activeCharId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl space-y-4 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-center text-4xl text-emerald-300",
				children: blackMarket ? "Black Market" : "Music Store"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap justify-center gap-2",
				children: [
					"instruments",
					"upgrades",
					"characters",
					"training"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onTab(t),
					className: `rounded-full px-4 py-2 text-sm font-extrabold capitalize ${tab === t ? "bg-emerald-400 text-slate-950" : "bg-slate-800 text-slate-300"}`,
					children: t
				}, t))
			}),
			tab === "instruments" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-sm text-slate-400",
				children: "You start with a kazoo. Weak horns are cheap. Mid and strong ones take a lot of classes."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid max-h-[28rem] gap-2 overflow-y-auto pr-1",
				children: Object.entries(INSTRUMENTS).filter(([, inst]) => inst.cost !== 0 && inst.cost !== "Quest").sort((a, b) => Number(a[1].cost) - Number(b[1].cost)).map(([id, inst]) => {
					if (blackMarket !== BLACK_MARKET_IDS.includes(id)) return null;
					const owned = save.unlockedInstruments.includes(id);
					const reqMet = !inst.req || save.unlockedInstruments.includes(inst.req);
					const cost = typeof inst.cost === "number" ? inst.cost : 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 rounded-2xl border border-slate-600 bg-slate-800 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-12 w-12 rounded-full ${inst.color}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderShape, {
									shape: inst.family === "gun" ? "gun" : inst.family,
									hex: inst.hex
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-extrabold",
									children: [
										inst.name,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-amber-200",
											children: gearGrade(inst.cost)
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-slate-400",
									children: [
										inst.baseDamage,
										" dmg · ",
										inst.breathCost,
										" breath · ",
										inst.hits,
										" hits"
									]
								}),
								!reqMet && inst.req && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-rose-300",
									children: ["Requires ", INSTRUMENTS[inst.req]?.name]
								})
							] })]
						}), owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-bold text-emerald-300",
							children: "Owned"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceButton, {
							ok: save.reeds >= cost && reqMet,
							cost,
							onClick: () => onBuy("instrument", id, cost)
						})]
					}, id);
				})
			})] }),
			tab === "upgrades" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid max-h-[28rem] gap-3 overflow-y-auto sm:grid-cols-2",
				children: save.unlockedInstruments.filter((id) => id !== "egg").map((id) => {
					const inst = INSTRUMENTS[id];
					if (!inst) return null;
					const upg = save.upgrades[id] ?? {
						damageLvl: 0,
						breathLvl: 0,
						hitsLvl: 0
					};
					const rows = [
						{
							kind: "upgradeDmg",
							label: "Damage",
							lvl: upg.damageLvl,
							cost: dmgCost(upg.damageLvl)
						},
						...inst.family === "gun" ? [] : [{
							kind: "upgradeBrth",
							label: "Breath",
							lvl: upg.breathLvl,
							cost: breathCost(upg.breathLvl)
						}],
						{
							kind: "upgradeHits",
							label: "Hits",
							lvl: upg.hitsLvl,
							cost: hitsCost(upg.hitsLvl)
						}
					];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-slate-600 bg-slate-800 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 font-extrabold",
							children: inst.name
						}), rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center justify-between rounded-xl bg-slate-900 px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm",
								children: [
									row.label,
									" ",
									row.lvl
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceButton, {
								ok: save.reeds >= row.cost,
								cost: row.cost,
								onClick: () => onBuy(row.kind, id, row.cost)
							})]
						}, row.kind))]
					}, id);
				})
			}),
			tab === "characters" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid max-h-[28rem] gap-2 overflow-y-auto",
				children: CHARACTERS.map((c) => {
					if (c.cost === 0) return null;
					if (blackMarket !== BLACK_MARKET_IDS.includes(c.id)) return null;
					const owned = save.unlockedCharacters.includes(c.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 rounded-2xl border border-slate-600 bg-slate-800 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, { character: c }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `font-extrabold ${c.color}`,
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-400",
									children: c.lore
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-slate-300",
									children: [
										"HP ",
										c.stats.hpMultiplier,
										"x · Speed ",
										c.stats.speedMultiplier,
										"x · Damage ",
										c.stats.damageMultiplier,
										"x"
									]
								})
							] })]
						}), owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-bold text-emerald-300",
							children: "Owned"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceButton, {
							ok: save.reeds >= c.cost,
							cost: c.cost,
							onClick: () => onBuy("character", c.id, c.cost)
						})]
					}, c.id);
				})
			}),
			tab === "training" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-lg space-y-3 rounded-2xl border border-slate-600 bg-slate-800 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center text-sm text-slate-400",
					children: [
						"Training sticks to ",
						active.name,
						"."
					]
				}), [
					[
						"charHp",
						"Max health",
						"hp"
					],
					[
						"charDmg",
						"Damage",
						"dmg"
					],
					[
						"charBreath",
						"Breath",
						"breath"
					]
				].map(([kind, label, key]) => {
					const lvl = save.charUpgrades[active.id]?.[key] ?? 0;
					const cost = trainCost(lvl);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-xl bg-slate-900 px-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-bold text-slate-100",
							children: [
								label,
								" ",
								lvl
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceButton, {
							ok: save.reeds >= cost,
							cost,
							onClick: () => onBuy(kind, active.id, cost)
						})]
					}, kind);
				})]
			})
		]
	});
}
function SecretView({ onBack, onReeds, onUnlock, onLevels }) {
	const [code, setCode] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex max-w-md flex-col items-center gap-4 py-10",
		children: [!open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "flex items-center gap-2 font-display text-3xl text-rose-400",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {}), " Developer access"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "password",
				value: code,
				onChange: (e) => setCode(e.target.value),
				className: "w-full rounded-xl border border-rose-900 bg-slate-900 px-4 py-3 text-center text-xl tracking-widest text-slate-50",
				placeholder: "Enter code",
				autoComplete: "off"
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-rose-300",
				children: msg
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					if (code === "2049") setOpen(true);
					else setMsg("Access denied");
				},
				className: "rounded-full bg-rose-500 px-6 py-3 font-extrabold text-slate-50",
				children: "Submit"
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-emerald-300",
				children: "Cheats on"
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-emerald-200",
				children: msg
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					onReeds();
					setMsg("Added 10,000 reeds.");
				},
				className: "w-full rounded-2xl border border-emerald-500 px-4 py-3 font-extrabold text-emerald-300",
				children: "+10,000 reeds"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					onUnlock();
					setMsg("Everything unlocked, including every class.");
				},
				className: "w-full rounded-2xl border border-amber-400 px-4 py-3 font-extrabold text-amber-200",
				children: "Unlock everything"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					onLevels();
					setMsg("Every class is open, from 1 through the overtime set.");
				},
				className: "w-full rounded-2xl border border-cyan-400 px-4 py-3 font-extrabold text-cyan-200",
				children: "Play any class"
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onBack,
			className: "text-sm font-bold text-slate-400",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
				className: "mr-1 inline",
				size: 16
			}), " Back"]
		})]
	});
}
function WinView({ level, onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col items-center justify-center gap-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, {
				className: "text-emerald-300",
				size: 48
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-5xl text-slate-50",
				children: "Class dismissed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-slate-300",
				children: [
					"You finished ",
					level?.subject ?? "detention",
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-3xl font-extrabold text-emerald-300",
				children: [
					"+",
					level?.reward ?? 0,
					" reeds"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onNext,
				className: "rounded-full bg-cyan-400 px-6 py-3 font-extrabold text-slate-950",
				children: "Next class"
			})
		]
	});
}
function LoseView({ level, onRetry, onMenu }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col items-center justify-center gap-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-5xl text-rose-400",
				children: "Detention extended"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-slate-300",
				children: [
					"You failed ",
					level?.subject ?? "class",
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onRetry,
				className: "rounded-full bg-rose-500 px-6 py-3 font-extrabold text-slate-50",
				children: "Try again"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onMenu,
				className: "text-sm font-bold text-slate-400",
				children: "Back to menu"
			})
		]
	});
}
var DAY = () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
function arcadeEarned(save, id) {
	const slot = save.arcade?.[id];
	return slot?.day === DAY() ? slot.earned : 0;
}
function reedsLeft(save, id) {
	return Math.max(0, 120 - arcadeEarned(save, id));
}
var GAMES = [
	{
		id: "memory",
		title: "Bell Memory",
		blurb: "Watch the bells, then tap them back in order.",
		tint: "bg-rose-500"
	},
	{
		id: "beat",
		title: "Beat Gate",
		blurb: "Tap when the bar sits in the green lane.",
		tint: "bg-amber-400"
	},
	{
		id: "scale",
		title: "Scale Sprint",
		blurb: "Hit the white key that matches the letter.",
		tint: "bg-cyan-500"
	},
	{
		id: "sort",
		title: "Folder Sort",
		blurb: "Drop each instrument into the right family.",
		tint: "bg-emerald-500"
	},
	{
		id: "stand",
		title: "Stand Balance",
		blurb: "Hold the button to keep the music stand in the lane.",
		tint: "bg-violet-500"
	}
];
function ArcadeView({ save, onBack, onEarn }) {
	const [game, setGame] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl space-y-4 py-2",
		children: !game ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-center text-4xl text-violet-300",
				children: "Band Arcade"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center text-sm text-slate-400",
				children: [
					"Five different practice rooms. Each one pays up to ",
					120,
					" reeds a day, then you can still play for fun."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: GAMES.map((item) => {
					const left = reedsLeft(save, item.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							initAudio();
							setGame(item.id);
						},
						className: "rounded-2xl border border-slate-600 bg-slate-800 p-4 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mb-3 inline-block h-3 w-12 rounded-full ${item.tint}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-extrabold text-slate-50",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-slate-400",
								children: item.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs font-bold text-emerald-300",
								children: [left, " reeds left today"]
							})
						]
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onBack,
				className: "text-sm font-bold text-slate-400",
				children: "Back"
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Room, {
			id: game,
			save,
			onExit: () => setGame(null),
			onEarn
		})
	});
}
function Room({ id, save, onExit, onEarn }) {
	const title = GAMES.find((g) => g.id === id)?.title ?? "Arcade";
	const paid = (0, import_react.useRef)(false);
	const saveRef = (0, import_react.useRef)(save);
	const earnRef = (0, import_react.useRef)(onEarn);
	saveRef.current = save;
	earnRef.current = onEarn;
	const finish = (0, import_react.useCallback)((raw) => {
		if (paid.current) return 0;
		paid.current = true;
		const amount = Math.min(Math.max(0, Math.round(raw)), reedsLeft(saveRef.current, id));
		if (amount > 0) earnRef.current(id, amount);
		return amount;
	}, [id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-violet-200",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onExit,
					className: "text-sm font-bold text-slate-400",
					children: "Arcade"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-bold text-emerald-300",
				children: [reedsLeft(save, id), " reeds left today"]
			}),
			id === "memory" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellMemory, { onFinish: finish }),
			id === "beat" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeatGate, { onFinish: finish }),
			id === "scale" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleSprint, { onFinish: finish }),
			id === "sort" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderSort, { onFinish: finish }),
			id === "stand" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StandBalance, { onFinish: finish })
		]
	});
}
var BELLS = [
	{
		name: "C",
		freq: 261.63,
		color: "bg-rose-500"
	},
	{
		name: "E",
		freq: 329.63,
		color: "bg-amber-400"
	},
	{
		name: "G",
		freq: 392,
		color: "bg-emerald-500"
	},
	{
		name: "C5",
		freq: 523.25,
		color: "bg-cyan-400"
	}
];
function BellMemory({ onFinish }) {
	const [seq, setSeq] = (0, import_react.useState)([0]);
	const [lit, setLit] = (0, import_react.useState)(null);
	const [input, setInput] = (0, import_react.useState)(0);
	const [phase, setPhase] = (0, import_react.useState)("watch");
	const [score, setScore] = (0, import_react.useState)(0);
	const [paid, setPaid] = (0, import_react.useState)(null);
	const timers = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		if (phase !== "watch") return;
		timers.current.forEach((id) => window.clearTimeout(id));
		timers.current = [];
		seq.forEach((bell, i) => {
			timers.current.push(window.setTimeout(() => {
				setLit(bell);
				playSynthesizer(BELLS[bell].freq, "glockenspiel");
			}, 500 + i * 620));
			timers.current.push(window.setTimeout(() => setLit(null), 500 + i * 620 + 380));
		});
		timers.current.push(window.setTimeout(() => setPhase("play"), 500 + seq.length * 620 + 200));
		return () => timers.current.forEach((id) => window.clearTimeout(id));
	}, [phase, seq]);
	const end = (nextScore) => {
		setPhase("done");
		setPaid(onFinish(nextScore * 12) ?? 0);
	};
	const tap = (index) => {
		if (phase !== "play") return;
		setLit(index);
		window.setTimeout(() => setLit(null), 180);
		playSynthesizer(BELLS[index].freq, "glockenspiel");
		if (index !== seq[input]) {
			end(score);
			return;
		}
		if (input + 1 >= seq.length) {
			const next = score + 1;
			setScore(next);
			if (next >= 8) {
				end(next);
				return;
			}
			setInput(0);
			setSeq((old) => [...old, Math.floor(Math.random() * BELLS.length)]);
			setPhase("watch");
			return;
		}
		setInput(input + 1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-slate-300",
				children: [
					"Round ",
					Math.min(score + 1, 8),
					" of 8. Copy the pattern."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3",
				children: BELLS.map((bell, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => tap(index),
					className: `h-24 rounded-2xl text-2xl font-extrabold text-slate-950 ${bell.color} ${lit === index ? "brightness-150" : "brightness-75"}`,
					children: bell.name
				}, bell.name))
			}),
			phase === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
				paid: paid ?? 0,
				detail: `${score} patterns`
			})
		]
	});
}
function BeatGate({ onFinish }) {
	const [phase, setPhase] = (0, import_react.useState)(0);
	const [beat, setBeat] = (0, import_react.useState)(0);
	const [hits, setHits] = (0, import_react.useState)(0);
	const [flash, setFlash] = (0, import_react.useState)("");
	const [paid, setPaid] = (0, import_react.useState)(null);
	const tapped = (0, import_react.useRef)(false);
	const done = (0, import_react.useRef)(false);
	const phaseRef = (0, import_react.useRef)(0);
	const state = (0, import_react.useRef)({
		beat: 0,
		hits: 0
	});
	(0, import_react.useEffect)(() => {
		let raf = 0;
		let last = performance.now();
		const loop = (now) => {
			const dt = Math.min(.05, (now - last) / 1e3);
			last = now;
			let next = phaseRef.current + dt / 1.05;
			if (next >= 1) {
				next = 0;
				if (!tapped.current) setFlash("Miss");
				tapped.current = false;
				state.current.beat += 1;
				setBeat(state.current.beat);
				if (state.current.beat >= 12 && !done.current) {
					done.current = true;
					setPaid(onFinish(state.current.hits * 8) ?? 0);
				}
			}
			phaseRef.current = next;
			setPhase(next);
			if (!done.current) raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(raf);
	}, [onFinish]);
	const tap = () => {
		if (done.current || tapped.current) return;
		tapped.current = true;
		const spot = phaseRef.current;
		if (spot > .38 && spot < .62) {
			state.current.hits += 1;
			setHits(state.current.hits);
			setFlash("Hit");
			playSynthesizer(220 + state.current.hits * 20, "snare");
		} else setFlash("Early");
	};
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.code !== "Space") return;
			event.preventDefault();
			tap();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-slate-300",
				children: [
					"Beat ",
					Math.min(beat + 1, 12),
					" of 12. Hits ",
					hits,
					". Tap the lane, or press space."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-16 overflow-hidden rounded-full bg-slate-800",
				onPointerDown: tap,
				role: "presentation",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-[38%] w-[24%] bg-emerald-500/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-1 bottom-1 w-3 rounded-full bg-amber-300",
					style: { left: `calc(${phase * 100}% - 6px)` }
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: tap,
				className: "w-full rounded-2xl bg-amber-400 py-4 text-xl font-extrabold text-slate-950",
				children: "Tap the beat"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "h-6 text-center font-extrabold text-slate-200",
				children: flash
			}),
			paid !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
				paid,
				detail: `${hits} hits`
			})
		]
	});
}
var WHITES = [
	{
		name: "C",
		freq: 261.63
	},
	{
		name: "D",
		freq: 293.66
	},
	{
		name: "E",
		freq: 329.63
	},
	{
		name: "F",
		freq: 349.23
	},
	{
		name: "G",
		freq: 392
	},
	{
		name: "A",
		freq: 440
	},
	{
		name: "B",
		freq: 493.88
	},
	{
		name: "C5",
		freq: 523.25
	}
];
function ScaleSprint({ onFinish }) {
	const [round, setRound] = (0, import_react.useState)(0);
	const [target, setTarget] = (0, import_react.useState)(() => Math.floor(Math.random() * WHITES.length));
	const [correct, setCorrect] = (0, import_react.useState)(0);
	const [left, setLeft] = (0, import_react.useState)(2.4);
	const [paid, setPaid] = (0, import_react.useState)(null);
	const stats = (0, import_react.useRef)({
		round: 0,
		correct: 0
	});
	(0, import_react.useEffect)(() => {
		if (paid !== null) return;
		const id = window.setInterval(() => {
			setLeft((n) => {
				if (n > .1) return n - .1;
				const nextRound = stats.current.round + 1;
				stats.current.round = nextRound;
				setRound(nextRound);
				if (nextRound >= 12) setPaid(onFinish(stats.current.correct * 10) ?? 0);
				else setTarget(Math.floor(Math.random() * WHITES.length));
				return 2.4;
			});
		}, 100);
		return () => window.clearInterval(id);
	}, [onFinish, paid]);
	const pick = (index) => {
		if (paid !== null || stats.current.round >= 12) return;
		playSynthesizer(WHITES[index].freq, "flute");
		if (index === target) {
			stats.current.correct += 1;
			setCorrect(stats.current.correct);
		}
		const nextRound = stats.current.round + 1;
		stats.current.round = nextRound;
		setRound(nextRound);
		if (nextRound >= 12) setPaid(onFinish(stats.current.correct * 10) ?? 0);
		else {
			setTarget(Math.floor(Math.random() * WHITES.length));
			setLeft(2.4);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-slate-300",
				children: [
					"Note ",
					Math.min(round + 1, 12),
					" of 12. Correct ",
					correct,
					". Time ",
					left.toFixed(1),
					"s"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center font-display text-6xl text-cyan-200",
				children: WHITES[target]?.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-2",
				children: WHITES.map((note, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => pick(index),
					className: "rounded-xl bg-slate-100 py-4 text-lg font-extrabold text-slate-950",
					children: note.name
				}, note.name))
			}),
			paid !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
				paid,
				detail: `${correct} notes`
			})
		]
	});
}
var CARDS = [
	{
		name: "Trumpet",
		family: "Brass"
	},
	{
		name: "Tuba",
		family: "Brass"
	},
	{
		name: "French Horn",
		family: "Brass"
	},
	{
		name: "Trombone",
		family: "Brass"
	},
	{
		name: "Flute",
		family: "Woodwind"
	},
	{
		name: "Clarinet",
		family: "Woodwind"
	},
	{
		name: "Oboe",
		family: "Woodwind"
	},
	{
		name: "Saxophone",
		family: "Woodwind"
	},
	{
		name: "Snare",
		family: "Percussion"
	},
	{
		name: "Cymbals",
		family: "Percussion"
	},
	{
		name: "Xylophone",
		family: "Percussion"
	},
	{
		name: "Tambourine",
		family: "Percussion"
	},
	{
		name: "Violin",
		family: "Strings"
	},
	{
		name: "Cello",
		family: "Strings"
	},
	{
		name: "Harp",
		family: "Strings"
	},
	{
		name: "Ukulele",
		family: "Strings"
	}
];
function FolderSort({ onFinish }) {
	const deck = (0, import_react.useRef)([...CARDS].sort(() => Math.random() - .5).slice(0, 12));
	const [index, setIndex] = (0, import_react.useState)(0);
	const [correct, setCorrect] = (0, import_react.useState)(0);
	const [paid, setPaid] = (0, import_react.useState)(null);
	const card = deck.current[index];
	const choose = (family) => {
		if (!card || paid !== null) return;
		const nextCorrect = correct + (family === card.family ? 1 : 0);
		const next = index + 1;
		setCorrect(nextCorrect);
		if (next >= deck.current.length) setPaid(onFinish(nextCorrect * 10) ?? 0);
		else setIndex(next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-slate-300",
				children: [
					"Card ",
					Math.min(index + 1, 12),
					" of 12. Right so far: ",
					correct
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-slate-600 bg-slate-800 py-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-widest text-slate-400",
					children: "Instrument"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-5xl text-slate-50",
					children: card?.name ?? "Done"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [
					"Brass",
					"Woodwind",
					"Percussion",
					"Strings"
				].map((family) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => choose(family),
					className: "rounded-2xl bg-emerald-500 py-4 font-extrabold text-slate-950",
					children: family
				}, family))
			}),
			paid !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
				paid,
				detail: `${correct} sorted`
			})
		]
	});
}
function StandBalance({ onFinish }) {
	const pos = (0, import_react.useRef)(50);
	const vel = (0, import_react.useRef)(0);
	const held = (0, import_react.useRef)(false);
	const green = (0, import_react.useRef)(0);
	const time = (0, import_react.useRef)(0);
	const [view, setView] = (0, import_react.useState)({
		pos: 50,
		time: 0,
		green: 0
	});
	const [paid, setPaid] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		let last = performance.now();
		const loop = (now) => {
			const dt = Math.min(.04, (now - last) / 1e3);
			last = now;
			vel.current += 42 * dt;
			if (held.current) vel.current -= 110 * dt;
			pos.current = Math.max(2, Math.min(98, pos.current + vel.current * dt));
			if (pos.current <= 2 || pos.current >= 98) vel.current *= -.2;
			if (pos.current > 40 && pos.current < 60) green.current += dt;
			time.current += dt;
			setView({
				pos: pos.current,
				time: time.current,
				green: green.current
			});
			if (time.current >= 18) {
				setPaid(onFinish(green.current * 6) ?? 0);
				return;
			}
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(raf);
	}, [onFinish]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-slate-300",
				children: [
					"Keep the stand in the bright lane. ",
					Math.max(0, 18 - view.time).toFixed(1),
					"s left. Lane time ",
					view.green.toFixed(1),
					"s"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-64 overflow-hidden rounded-3xl bg-slate-800",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-[40%] h-[20%] bg-emerald-500/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-1/2 h-10 w-16 -translate-x-1/2 rounded-md border-2 border-slate-950 bg-amber-700",
					style: { top: `${view.pos}%` }
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onPointerDown: () => {
					held.current = true;
				},
				onPointerUp: () => {
					held.current = false;
				},
				onPointerLeave: () => {
					held.current = false;
				},
				className: "w-full rounded-2xl bg-violet-400 py-4 text-xl font-extrabold text-slate-950",
				children: "Hold to lift"
			}),
			paid !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
				paid,
				detail: `${view.green.toFixed(1)}s in the lane`
			})
		]
	});
}
function Result({ paid, detail }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-emerald-700 bg-emerald-950 px-4 py-3 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-extrabold text-emerald-200",
			children: detail
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-2xl font-extrabold text-emerald-300",
			children: paid > 0 ? `+${paid} reeds` : "Practice only — daily reeds used up"
		})]
	});
}
var KEY = "symphonic-detention-v1";
function isFresh(save) {
	return save.reeds === 0 && save.maxLevelUnlocked <= 1 && !save.cheatsEnabled && save.claimedQuests.length === 0 && save.gameStats.goonsKilled === 0 && save.gameStats.thugsKilled === 0 && save.gameStats.soundproofersKilled === 0 && save.gameStats.bossesDefeated === 0 && save.unlockedInstruments.every((id) => id === "kazoo" || id === "toot" || id === "dood") && save.unlockedInstruments.length <= 2 && save.unlockedCharacters.every((id) => id === "rocky" || id === "melody" || id === "harmony" || id === "rhythm") && save.unlockedCharacters.length <= 4 && Object.values(save.charUpgrades).every((u) => u.hp + u.dmg + u.breath === 0) && Object.values(save.upgrades).every((u) => u.damageLvl + u.breathLvl + u.hitsLvl === 0);
}
function defaultSave() {
	return {
		reeds: 0,
		unlockedInstruments: ["kazoo"],
		unlockedCharacters: ["rocky"],
		maxLevelUnlocked: 1,
		activeCharId: "rocky",
		gameStats: {
			goonsKilled: 0,
			thugsKilled: 0,
			soundproofersKilled: 0,
			bossesDefeated: 0
		},
		claimedQuests: [],
		upgrades: { kazoo: blankUpgrade() },
		charUpgrades: {},
		cheatsEnabled: false,
		loadout: ["kazoo"],
		arcade: {}
	};
}
function packLoadout(raw, unlocked) {
	const picked = Array.isArray(raw) ? raw.filter((id) => typeof id === "string" && id !== "egg" && unlocked.includes(id)) : [];
	const unique = [...new Set(picked)].slice(0, 4);
	if (unique.length) return unique;
	return unlocked.filter((id) => id !== "egg").slice(0, 4);
}
function loadSave() {
	if (typeof window === "undefined") return defaultSave();
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return defaultSave();
		const parsed = JSON.parse(raw);
		const base = defaultSave();
		const unlockedInstruments = Array.isArray(parsed.unlockedInstruments) ? parsed.unlockedInstruments : base.unlockedInstruments;
		return {
			...base,
			...parsed,
			gameStats: {
				...base.gameStats,
				...parsed.gameStats ?? {}
			},
			upgrades: {
				...base.upgrades,
				...parsed.upgrades ?? {}
			},
			charUpgrades: parsed.charUpgrades ?? {},
			unlockedInstruments,
			unlockedCharacters: Array.isArray(parsed.unlockedCharacters) ? parsed.unlockedCharacters : base.unlockedCharacters,
			claimedQuests: Array.isArray(parsed.claimedQuests) ? parsed.claimedQuests : [],
			loadout: packLoadout(parsed.loadout, unlockedInstruments),
			arcade: parsed.arcade && typeof parsed.arcade === "object" ? parsed.arcade : {}
		};
	} catch {
		return defaultSave();
	}
}
function writeSave(save) {
	try {
		const raw = localStorage.getItem(KEY);
		if (raw && isFresh(save)) {
			const existing = JSON.parse(raw);
			if ((existing.reeds ?? 0) > 0 || (existing.maxLevelUnlocked ?? 1) > 1 || (existing.claimedQuests?.length ?? 0) > 0 || (existing.unlockedInstruments?.length ?? 0) > 2 || (existing.unlockedCharacters?.length ?? 0) > 4 || (existing.gameStats?.bossesDefeated ?? 0) > 0 || (existing.gameStats?.goonsKilled ?? 0) > 0) return;
		}
		localStorage.setItem(KEY, JSON.stringify(save));
	} catch {}
}
var TOWN_W = 2e3;
var TOWN_H = 1500;
var SPAWN = {
	x: 1e3,
	y: 760
};
var PORTALS = [
	{
		id: "class",
		title: "Class Hall",
		subtitle: "Pick a detention",
		x: 1e3,
		y: 200,
		kind: "levelSelect",
		hex: "#22d3ee"
	},
	{
		id: "store",
		title: "Music Store",
		subtitle: "Instruments and upgrades",
		x: 300,
		y: 560,
		kind: "shop",
		hex: "#34d399"
	},
	{
		id: "market",
		title: "Black Market",
		subtitle: "Rare gear",
		x: 1700,
		y: 560,
		kind: "blackmarket",
		hex: "#f472b6"
	},
	{
		id: "train",
		title: "Training Camp",
		subtitle: "Upgrade your hero",
		x: 300,
		y: 1040,
		kind: "training",
		hex: "#fbbf24"
	},
	{
		id: "missions",
		title: "Mission Board",
		subtitle: "Jobs and quests",
		x: 1700,
		y: 1040,
		kind: "missions",
		hex: "#fb923c"
	},
	{
		id: "arcade",
		title: "Band Arcade",
		subtitle: "Minigames",
		x: 1e3,
		y: 980,
		kind: "arcade",
		hex: "#a78bfa"
	},
	{
		id: "exit",
		title: "Town Gate",
		subtitle: "Back to the menu",
		x: 1e3,
		y: 1320,
		kind: "menu",
		hex: "#94a3b8"
	}
];
var NPCS = [
	{
		id: "registrar",
		name: "Registrar",
		x: 1e3,
		y: 400,
		hex: "#67e8f9",
		line: "Class Hall is the cyan pad north of me. Step on it and you'll teleport to the schedule."
	},
	{
		id: "shop",
		name: "Melody",
		x: 480,
		y: 420,
		hex: "#f472b6",
		line: "The green pad is the Music Store. Walk onto the ring — don't stop short of it."
	},
	{
		id: "dealer",
		name: "Kai",
		x: 1520,
		y: 420,
		hex: "#fbbf24",
		line: "Black Market pad is the pink ring. Rare instruments live through that teleport."
	},
	{
		id: "coach",
		name: "Coach",
		x: 480,
		y: 1220,
		hex: "#fdba74",
		line: "Training Camp is the gold ring. It spends reeds on your hero, not just the horn."
	},
	{
		id: "board",
		name: "Kashu",
		x: 1520,
		y: 1220,
		hex: "#facc15",
		line: "Mission Board is the orange pad. Quests only count after you finish a class or a job."
	},
	{
		id: "guard",
		name: "Janitor Joe",
		x: 1e3,
		y: 1120,
		hex: "#86efac",
		line: "Town Gate is the big grey ring south. The purple ring above me is the Band Arcade."
	}
];
function townWalls() {
	const buildings = [
		{
			id: "nw",
			x: 80,
			y: 80,
			w: 620,
			h: 280,
			hp: 9999,
			maxHp: 9999
		},
		{
			id: "ne",
			x: 1300,
			y: 80,
			w: 620,
			h: 280,
			hp: 9999,
			maxHp: 9999
		},
		{
			id: "sw",
			x: 80,
			y: 1220,
			w: 620,
			h: 200,
			hp: 9999,
			maxHp: 9999
		},
		{
			id: "se",
			x: 1300,
			y: 1220,
			w: 620,
			h: 200,
			hp: 9999,
			maxHp: 9999
		}
	];
	return [...[
		{
			id: "tb",
			x: 0,
			y: 0,
			w: TOWN_W,
			h: 36,
			hp: 1,
			maxHp: 1,
			isBorder: true
		},
		{
			id: "bb",
			x: 0,
			y: 1464,
			w: TOWN_W,
			h: 36,
			hp: 1,
			maxHp: 1,
			isBorder: true
		},
		{
			id: "lb",
			x: 0,
			y: 0,
			w: 36,
			h: TOWN_H,
			hp: 1,
			maxHp: 1,
			isBorder: true
		},
		{
			id: "rb",
			x: 1964,
			y: 0,
			w: 36,
			h: TOWN_H,
			hp: 1,
			maxHp: 1,
			isBorder: true
		}
	], ...buildings];
}
var WALLS = townWalls();
function TownEngine({ character, instrumentId, onTeleport }) {
	const viewRef = (0, import_react.useRef)(null);
	const [tick, setTick] = (0, import_react.useState)(0);
	const [nearId, setNearId] = (0, import_react.useState)(null);
	const [talk, setTalk] = (0, import_react.useState)(null);
	const fired = (0, import_react.useRef)(false);
	const player = (0, import_react.useRef)({
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
		breathRegenPause: 0
	});
	const keys = (0, import_react.useRef)({});
	const stick = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const cam = (0, import_react.useRef)({
		x: SPAWN.x,
		y: SPAWN.y
	});
	const speedRef = (0, import_react.useRef)(0);
	const view = (0, import_react.useRef)({
		w: 900,
		h: 600
	});
	const go = (portal) => {
		if (fired.current) return;
		fired.current = true;
		onTeleport(portal);
	};
	(0, import_react.useEffect)(() => {
		const engineLike = {
			get keys() {
				return keys.current;
			},
			set keys(v) {
				keys.current = v;
			}
		};
		const down = (e) => {
			keys.current[e.code] = true;
			if (e.code === "Enter") {
				const hit = closest(player.current.x, player.current.y);
				if (hit && hit.dist < 150) go(hit.portal);
			}
		};
		const up = (e) => {
			keys.current[e.code] = false;
		};
		const blur = () => {
			keys.current = {};
			stick.current = {
				x: 0,
				y: 0
			};
		};
		window.addEventListener("keydown", down);
		window.addEventListener("keyup", up);
		window.addEventListener("blur", blur);
		let last = 0;
		let raf = 0;
		let alive = true;
		const loop = (t) => {
			if (!alive) return;
			if (!last) {
				last = t;
				raf = requestAnimationFrame(loop);
				return;
			}
			const dt = Math.min(.05, (t - last) / 1e3);
			last = t;
			const p = player.current;
			const el = viewRef.current;
			if (el) view.current = {
				w: el.clientWidth || 900,
				h: el.clientHeight || 600
			};
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
			if (hit && hit.dist <= 78) {
				go(hit.portal);
				return;
			}
			setNearId(hit && hit.dist < 150 ? hit.portal.id : null);
			const npc = NPCS.find((n) => distance(p.x, p.y, n.x, n.y) < 110);
			setTalk(npc ? `${npc.name}: ${npc.line}` : null);
			setTick((n) => (n + 1) % 1e5);
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
			}
		});
		return () => {
			alive = false;
			cancelAnimationFrame(raf);
			unbind();
			window.removeEventListener("keydown", down);
			window.removeEventListener("keyup", up);
			window.removeEventListener("blur", blur);
		};
	}, []);
	const p = player.current;
	const camX = cam.current.x - view.current.w / 2;
	const camY = cam.current.y - view.current.h / 2;
	const near = PORTALS.find((portal) => portal.id === nearId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full min-h-0 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute top-3 right-3 left-3 z-20 flex items-start justify-between gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto max-w-md rounded-2xl border border-slate-600 bg-slate-950/90 px-4 py-3 shadow-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-cyan-300",
							children: "Band Town"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-slate-300",
							children: "Walk into a glowing ring to teleport. Press Enter when you're close, or tap the ring."
						}),
						near && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm font-extrabold text-amber-300",
							children: [
								"Ready: ",
								near.title,
								". Press Enter."
							]
						}),
						talk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-slate-100",
							children: talk
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: viewRef,
				className: "relative min-h-0 flex-1 overflow-hidden bg-emerald-950",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-0 left-0",
					style: { transform: `translate(${Math.round(-camX)}px, ${Math.round(-camY)}px)` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bg-emerald-900",
							style: {
								width: TOWN_W,
								height: TOWN_H
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bg-slate-700/90",
							style: {
								left: 780,
								top: 36,
								width: 440,
								height: TOWN_H - 72
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bg-slate-700/90",
							style: {
								left: 36,
								top: 430,
								width: TOWN_W - 72,
								height: 260
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bg-slate-700/90",
							style: {
								left: 36,
								top: 900,
								width: TOWN_W - 72,
								height: 250
							}
						}),
						WALLS.filter((w) => !w.isBorder).map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute rounded-md border border-slate-500 bg-slate-800 shadow-lg",
							style: {
								left: w.x,
								top: w.y,
								width: w.w,
								height: w.h
							}
						}, w.id)),
						NPCS.map((n) => {
							const face = Math.atan2(p.y - n.y, p.x - n.x);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pointer-events-none absolute",
								style: {
									left: n.x - 28,
									top: n.y - 36,
									width: 56,
									height: 56
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0",
									style: { transform: `rotate(${entityFacingDeg(face)}deg)` },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeacherSVG, {
										glasses: "round",
										shirt: n.hex
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-slate-950/90 px-2 text-[10px] font-bold whitespace-nowrap text-slate-100",
									children: n.name
								})]
							}, n.id);
						}),
						PORTALS.map((portal) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onPointerDown: (e) => {
								e.preventDefault();
								e.stopPropagation();
								go(portal);
							},
							className: "absolute flex items-center justify-center rounded-full border-4 bg-slate-950/40 animate-portal",
							style: {
								left: portal.x - 70,
								top: portal.y - 70,
								width: 140,
								height: 140,
								borderColor: portal.hex,
								boxShadow: `0 0 24px ${portal.hex}`
							},
							"aria-label": `Teleport to ${portal.title}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "pointer-events-none rounded-xl bg-slate-950/90 px-2 py-1 text-center text-xs font-extrabold text-slate-50",
								children: [portal.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium text-slate-300",
									children: portal.subtitle
								})]
							})
						}, portal.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute",
							style: {
								left: p.x - 36,
								top: p.y - 36,
								width: 72,
								height: 72,
								transform: `rotate(${entityFacingDeg(p.angle)}deg)`
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomPlayerSVG, {
								character,
								instrumentId,
								isPlaying: false,
								isWalking: p.isWalking
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 border-t border-slate-700 bg-slate-950 px-3 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovePad, { onStick: (x, y) => stick.current = {
					x,
					y
				} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-slate-400",
					children: "WASD to walk. The rings are teleports — step in the middle. Shift sprints."
				})]
			})
		]
	});
}
function closest(x, y) {
	let portal = PORTALS[0];
	let dist = distance(x, y, portal.x, portal.y);
	for (const candidate of PORTALS) {
		const d = distance(x, y, candidate.x, candidate.y);
		if (d < dist) {
			portal = candidate;
			dist = d;
		}
	}
	return {
		portal,
		dist
	};
}
var EMPTY_CU = {
	hp: 0,
	dmg: 0,
	breath: 0
};
function GameApp() {
	const [save, setSave] = (0, import_react.useState)(defaultSave);
	const [view, setView] = (0, import_react.useState)("menu");
	const [level, setLevel] = (0, import_react.useState)(null);
	const [attempt, setAttempt] = (0, import_react.useState)(0);
	const [fromTown, setFromTown] = (0, import_react.useState)(false);
	const [blackMarket, setBlackMarket] = (0, import_react.useState)(false);
	const [shopTab, setShopTab] = (0, import_react.useState)("instruments");
	const [ready, setReady] = (0, import_react.useState)(false);
	const [pending, setPending] = (0, import_react.useState)(null);
	const [bag, setBag] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setSave(loadSave());
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (ready) writeSave(save);
	}, [save, ready]);
	(0, import_react.useEffect)(() => {
		const flush = () => {
			if (ready) writeSave(save);
		};
		window.addEventListener("pagehide", flush);
		return () => window.removeEventListener("pagehide", flush);
	}, [save, ready]);
	(0, import_react.useEffect)(() => {
		const wake = () => initAudio();
		window.addEventListener("pointerdown", wake);
		return () => window.removeEventListener("pointerdown", wake);
	}, []);
	const character = characterById(save.activeCharId);
	const charUpgrade = save.charUpgrades[character.id] ?? EMPTY_CU;
	const onReeds = (0, import_react.useCallback)((n) => {
		setSave((s) => ({
			...s,
			reeds: s.reeds + n
		}));
	}, []);
	const finish = (0, import_react.useCallback)((result, stats) => {
		setSave((s) => {
			const numeric = level && typeof level.id === "number" ? level.id : null;
			const unlock = result === "win" && numeric !== null && numeric === s.maxLevelUnlocked && numeric < 90;
			return {
				...s,
				reeds: s.reeds + (result === "win" && level ? level.reward : 0),
				maxLevelUnlocked: unlock ? s.maxLevelUnlocked + 1 : s.maxLevelUnlocked,
				gameStats: {
					goonsKilled: s.gameStats.goonsKilled + stats.goonsKilled,
					thugsKilled: s.gameStats.thugsKilled + stats.thugsKilled,
					soundproofersKilled: s.gameStats.soundproofersKilled + stats.soundproofersKilled,
					bossesDefeated: s.gameStats.bossesDefeated + stats.bossesDefeated
				}
			};
		});
		setView(result);
	}, [level]);
	const buy = (0, import_react.useCallback)((kind, id, cost) => {
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
					upgrades: {
						...s.upgrades,
						[id]: s.upgrades[id] ?? blankUpgrade()
					}
				};
			}
			if (kind === "character") {
				if (s.unlockedCharacters.includes(id)) return s;
				return {
					...s,
					reeds: s.reeds - cost,
					unlockedCharacters: [...s.unlockedCharacters, id]
				};
			}
			if (kind === "upgradeDmg" || kind === "upgradeBrth" || kind === "upgradeHits") {
				const next = { ...s.upgrades[id] ?? blankUpgrade() };
				if (kind === "upgradeDmg") next.damageLvl += 1;
				if (kind === "upgradeBrth") next.breathLvl += 1;
				if (kind === "upgradeHits") next.hitsLvl += 1;
				return {
					...s,
					reeds: s.reeds - cost,
					upgrades: {
						...s.upgrades,
						[id]: next
					}
				};
			}
			const next = { ...s.charUpgrades[id] ?? {
				hp: 0,
				dmg: 0,
				breath: 0
			} };
			if (kind === "charHp") next.hp += 1;
			if (kind === "charDmg") next.dmg += 1;
			if (kind === "charBreath") next.breath += 1;
			return {
				...s,
				reeds: s.reeds - cost,
				charUpgrades: {
					...s.charUpgrades,
					[id]: next
				}
			};
		});
	}, []);
	const claim = (0, import_react.useCallback)((quest) => {
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
					upgrades: {
						...s.upgrades,
						[id]: s.upgrades[id] ?? blankUpgrade()
					}
				};
			}
			return {
				...s,
				claimedQuests,
				reeds: s.reeds + (quest.rewardAmount ?? 0)
			};
		});
	}, []);
	const openPortal = (0, import_react.useCallback)((portal) => {
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
	const go = (next) => {
		initAudio();
		if (next === "menu" || next === "town") setFromTown(false);
		if (next === "shop") {
			setBlackMarket(false);
			setShopTab("instruments");
		}
		setView(next);
	};
	const openGear = (next) => {
		initAudio();
		setPending(next);
		setView("gear");
	};
	const begin = (next, loadout) => {
		initAudio();
		if (loadout) setBag(loadout);
		setLevel(next);
		setAttempt((n) => n + 1);
		setView("game");
	};
	const packed = (bag && bag.length ? bag : save.loadout).filter((id) => save.unlockedInstruments.includes(id) && id !== "egg");
	const horns = packed.length ? packed : save.unlockedInstruments.filter((id) => id !== "egg").slice(0, 4);
	const shop = (0, import_react.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopView, {
		save,
		blackMarket,
		tab: shopTab,
		onTab: setShopTab,
		onBuy: buy
	}), [
		save,
		blackMarket,
		shopTab,
		buy
	]);
	const showMenu = view !== "menu" && view !== "game" && view !== "town";
	const showTown = view !== "menu" && view !== "game" && view !== "town" && fromTown;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh items-stretch justify-center bg-slate-950 sm:items-center sm:p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SvgDefs, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full w-full max-w-6xl flex-col overflow-hidden border-slate-700 bg-slate-900 sm:h-[min(100%,940px)] sm:rounded-3xl sm:border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex shrink-0 items-center justify-between gap-3 border-b border-slate-700 bg-slate-950 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, {
						className: "text-cyan-300",
						size: 20
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-sm tracking-wide text-cyan-200 sm:text-xl",
						children: "Symphonic Detention"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 sm:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1 rounded-full border border-emerald-900 bg-slate-900 px-3 py-1 text-sm font-extrabold text-emerald-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, { size: 14 }),
								" ",
								save.reeds
							]
						}),
						showTown && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go("town"),
							className: "text-sm font-bold text-emerald-300",
							children: "Town"
						}),
						showMenu && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => go("menu"),
							className: "flex items-center gap-1 text-sm font-bold text-slate-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " Menu"]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: `min-h-0 flex-1 ${view === "game" || view === "town" ? "overflow-hidden" : "overflow-y-auto custom-scrollbar p-4"}`,
				children: [
					view === "menu" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MainMenu, { onNavigate: go }),
					view === "tutorial" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tutorial, { onBack: () => go("menu") }),
					view === "lore" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoreView, { save }),
					view === "chars" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharSelect, {
						save,
						onSelect: (id) => setSave((s) => ({
							...s,
							activeCharId: id
						})),
						onSchedule: () => go("levelSelect")
					}),
					view === "shop" && shop,
					view === "missions" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissionsView, {
						save,
						onStart: openGear,
						onClaim: claim
					}),
					view === "arcade" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArcadeView, {
						save,
						onBack: () => go(fromTown ? "town" : "menu"),
						onEarn: (id, amount) => setSave((s) => {
							const day = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
							const earned = s.arcade?.[id]?.day === day ? s.arcade[id].earned : 0;
							const add = Math.max(0, Math.min(amount, 120 - earned));
							if (!add) return s;
							return {
								...s,
								reeds: s.reeds + add,
								arcade: {
									...s.arcade,
									[id]: {
										day,
										earned: earned + add
									}
								}
							};
						})
					}),
					view === "levelSelect" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelSelect, {
						save,
						onStart: openGear
					}),
					view === "gear" && pending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GearView, {
						save,
						level: pending,
						onBack: () => setView(typeof pending.id === "string" ? "missions" : "levelSelect"),
						onStart: (loadout) => {
							setSave((s) => ({
								...s,
								loadout
							}));
							begin(pending, loadout);
						}
					}),
					view === "town" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TownEngine, {
						character,
						instrumentId: [...save.unlockedInstruments].reverse().find((id) => id !== "egg") ?? "toot",
						onTeleport: openPortal
					}),
					view === "game" && level && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameEngine, {
						level,
						character,
						instrumentIds: horns,
						upgrades: save.upgrades,
						charUpgrade,
						cheats: save.cheatsEnabled,
						reeds: save.reeds,
						onReeds,
						onEnd: finish,
						onExit: () => go("menu"),
						shop
					}, attempt),
					view === "secret" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecretView, {
						onBack: () => go("menu"),
						onReeds: () => setSave((s) => ({
							...s,
							reeds: s.reeds + 1e4,
							cheatsEnabled: true
						})),
						onUnlock: () => setSave((s) => {
							const ids = Object.keys(INSTRUMENTS).filter((id) => id !== "egg");
							const upgrades = { ...s.upgrades };
							for (const id of ids) upgrades[id] = upgrades[id] ?? blankUpgrade();
							return {
								...s,
								maxLevelUnlocked: 90,
								cheatsEnabled: true,
								unlockedCharacters: CHARACTERS.map((c) => c.id),
								unlockedInstruments: ids,
								upgrades
							};
						}),
						onLevels: () => setSave((s) => ({
							...s,
							cheatsEnabled: true,
							maxLevelUnlocked: 90
						}))
					}),
					view === "win" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinView, {
						level,
						onNext: () => {
							if (level && typeof level.id === "string") go("missions");
							else go("levelSelect");
						}
					}),
					view === "lose" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoseView, {
						level,
						onRetry: () => level && begin(level),
						onMenu: () => go("menu")
					})
				]
			})]
		})]
	});
}
var SplitComponent = GameApp;
//#endregion
export { SplitComponent as component };
