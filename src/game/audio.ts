import { INSTRUMENTS } from "./data";

let audioCtx: AudioContext | null = null;

export function initAudio() {
  if (typeof window === "undefined") return;
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return;
  if (!audioCtx) audioCtx = new Ctx();
  if (audioCtx.state === "suspended") void audioCtx.resume();
}

export function playSynthesizer(freq: number, instId: string) {
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
  let dur = 0.45;
  let f = freq;
  switch (inst.family) {
    case "flute":
      osc.type = "sine";
      filter.type = "lowpass";
      filter.frequency.value = 4000;
      if (instId === "piccolo") f *= 2;
      dur = 0.55;
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
      filter.frequency.value = 1000;
      if (instId === "bassoon" || instId === "contrabassOboe") f /= 2;
      if (instId === "contrabassoon" || instId === "contrabassBassoon") f /= 4;
      dur = 0.55;
      break;
    case "sax":
    case "sax_straight":
      osc.type = "sawtooth";
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(Math.max(40, f), now);
      filter.frequency.linearRampToValueAtTime(f * 4, now + 0.05);
      if (instId === "sopranoSax") f *= 1.5;
      if (instId === "tenorSax") f /= 1.5;
      if (instId === "baritoneSax") f /= 2.5;
      if (instId === "contrabassSax") f /= 4;
      dur = 0.55;
      break;
    case "trumpet":
    case "trombone":
    case "horn":
    case "tuba":
    case "sousaphone":
      osc.type = inst.family === "horn" ? "triangle" : "sawtooth";
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(40, now);
      filter.frequency.exponentialRampToValueAtTime(Math.max(80, f * 6), now + 0.08);
      if (instId.toLowerCase().includes("trombone")) f /= 2;
      if (instId === "tuba" || instId === "sousaphone") f /= 4;
      dur = 0.55;
      break;
    case "triangle":
      osc.type = "sine";
      f *= 4;
      dur = 0.8;
      break;
    case "gun":
      osc.type = "square";
      f = 70;
      dur = 0.12;
      break;
    case "throwable":
      osc.type = "sine";
      f = 720;
      dur = 0.16;
      break;
    case "drum":
    case "cymbal":
    case "tambourine":
    case "cowbell":
      osc.type = "triangle";
      f = inst.family === "cymbal" ? Math.max(f * 3, 900) : inst.family === "cowbell" ? 520 : 110;
      dur = 0.2;
      break;
    case "mallet":
    case "harp":
      osc.type = "sine";
      filter.type = "lowpass";
      filter.frequency.value = 5000;
      dur = 0.7;
      break;
    case "violin":
    case "uke":
      osc.type = "sawtooth";
      filter.type = "lowpass";
      filter.frequency.value = 2400;
      dur = 0.5;
      break;
    case "accordion":
    case "harmonica":
    case "bagpipe":
      osc.type = "square";
      filter.type = "lowpass";
      filter.frequency.value = 1400;
      if (inst.family === "bagpipe") f *= 0.75;
      dur = 0.6;
      break;
    case "whistle":
      osc.type = "square";
      f *= 2;
      dur = 0.22;
      break;
    case "megaphone":
      osc.type = "square";
      filter.type = "lowpass";
      filter.frequency.value = 900;
      dur = 0.28;
      break;
    case "synth":
      osc.type = "sawtooth";
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(200, now);
      filter.frequency.exponentialRampToValueAtTime(Math.max(400, f * 4), now + 0.08);
      dur = 0.4;
      break;
    default:
      osc.type = "square";
  }
  mGain.gain.setValueAtTime(0.0001, now);
  mGain.gain.linearRampToValueAtTime(0.12, now + 0.02);
  mGain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
  osc.frequency.setValueAtTime(Math.max(30, f), now);
  osc.start(now);
  osc.stop(now + dur + 0.02);
}
