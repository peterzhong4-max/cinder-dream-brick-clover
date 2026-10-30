import { useCallback, useEffect, useRef, useState } from "react";
import { initAudio, playSynthesizer } from "./audio";
import type { SaveData } from "./types";

export const ARCADE_CAP = 120;

const DAY = () => new Date().toISOString().slice(0, 10);

export function arcadeEarned(save: SaveData, id: string) {
  const slot = save.arcade?.[id];
  return slot?.day === DAY() ? slot.earned : 0;
}

function reedsLeft(save: SaveData, id: string) {
  return Math.max(0, ARCADE_CAP - arcadeEarned(save, id));
}

type GameId = "memory" | "beat" | "scale" | "sort" | "stand" | "count" | "lanes" | "bar";

const GAMES: { id: GameId; title: string; blurb: string; tint: string }[] = [
  { id: "memory", title: "Bell Memory", blurb: "Watch the bells, then tap them back in order.", tint: "bg-rose-500" },
  { id: "beat", title: "Beat Gate", blurb: "Tap when the bar sits in the green lane.", tint: "bg-amber-400" },
  { id: "scale", title: "Scale Sprint", blurb: "Hit the white key that matches the letter.", tint: "bg-cyan-500" },
  { id: "sort", title: "Folder Sort", blurb: "Drop each instrument into the right family.", tint: "bg-emerald-500" },
  { id: "stand", title: "Stand Balance", blurb: "Hold the button to keep the music stand in the lane.", tint: "bg-violet-500" },
  { id: "count", title: "Count-In", blurb: "Tap only on beat 4. Leave 1, 2, and 3 alone.", tint: "bg-orange-400" },
  { id: "lanes", title: "Hall Dodge", blurb: "Slide between lanes and miss the rolling stands.", tint: "bg-sky-400" },
  { id: "bar", title: "Bar Hold", blurb: "Hold the note, then let go while the bar is green.", tint: "bg-fuchsia-400" },
];

export function ArcadeView({
  save,
  onBack,
  onEarn,
}: {
  save: SaveData;
  onBack: () => void;
  onEarn: (id: string, amount: number) => void;
}) {
  const [game, setGame] = useState<GameId | null>(null);
  return (
    <div className="mx-auto max-w-3xl space-y-4 py-2">
      {!game ? (
        <>
          <h2 className="font-display text-center text-4xl text-violet-300">Band Arcade</h2>
          <p className="text-center text-sm text-slate-400">
            Eight practice rooms. Each one pays up to {ARCADE_CAP} reeds a day, then you can still play for fun.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {GAMES.map((item) => {
              const left = reedsLeft(save, item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    initAudio();
                    setGame(item.id);
                  }}
                  className="rounded-2xl border border-slate-600 bg-slate-800 p-4 text-left"
                >
                  <span className={`mb-3 inline-block h-3 w-12 rounded-full ${item.tint}`} />
                  <p className="text-lg font-extrabold text-slate-50">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.blurb}</p>
                  <p className="mt-2 text-xs font-bold text-emerald-300">{left} reeds left today</p>
                </button>
              );
            })}
          </div>
          <button type="button" onClick={onBack} className="text-sm font-bold text-slate-400">
            Back
          </button>
        </>
      ) : (
        <Room
          id={game}
          save={save}
          onExit={() => setGame(null)}
          onEarn={onEarn}
        />
      )}
    </div>
  );
}

function Room({
  id,
  save,
  onExit,
  onEarn,
}: {
  id: GameId;
  save: SaveData;
  onExit: () => void;
  onEarn: (id: string, amount: number) => void;
}) {
  const title = GAMES.find((g) => g.id === id)?.title ?? "Arcade";
  const paid = useRef(false);
  const saveRef = useRef(save);
  const earnRef = useRef(onEarn);
  saveRef.current = save;
  earnRef.current = onEarn;
  const finish = useCallback((raw: number) => {
    if (paid.current) return 0;
    paid.current = true;
    const amount = Math.min(Math.max(0, Math.round(raw)), reedsLeft(saveRef.current, id));
    if (amount > 0) earnRef.current(id, amount);
    return amount;
  }, [id]);
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-3xl text-violet-200">{title}</h2>
        <button type="button" onClick={onExit} className="text-sm font-bold text-slate-400">
          Arcade
        </button>
      </div>
      <p className="text-xs font-bold text-emerald-300">{reedsLeft(save, id)} reeds left today</p>
      {id === "memory" && <BellMemory onFinish={finish} />}
      {id === "beat" && <BeatGate onFinish={finish} />}
      {id === "scale" && <ScaleSprint onFinish={finish} />}
      {id === "sort" && <FolderSort onFinish={finish} />}
      {id === "stand" && <StandBalance onFinish={finish} />}
      {id === "count" && <CountIn onFinish={finish} />}
      {id === "lanes" && <HallDodge onFinish={finish} />}
      {id === "bar" && <BarHold onFinish={finish} />}
    </div>
  );
}

const BELLS = [
  { name: "C", freq: 261.63, color: "bg-rose-500" },
  { name: "E", freq: 329.63, color: "bg-amber-400" },
  { name: "G", freq: 392, color: "bg-emerald-500" },
  { name: "C5", freq: 523.25, color: "bg-cyan-400" },
];

function BellMemory({ onFinish }: { onFinish: (raw: number) => number | undefined }) {
  const [seq, setSeq] = useState<number[]>([0]);
  const [lit, setLit] = useState<number | null>(null);
  const [input, setInput] = useState(0);
  const [phase, setPhase] = useState<"watch" | "play" | "done">("watch");
  const [score, setScore] = useState(0);
  const [paid, setPaid] = useState<number | null>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (phase !== "watch") return;
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
    seq.forEach((bell, i) => {
      timers.current.push(
        window.setTimeout(() => {
          setLit(bell);
          playSynthesizer(BELLS[bell]!.freq, "glockenspiel");
        }, 500 + i * 620),
      );
      timers.current.push(window.setTimeout(() => setLit(null), 500 + i * 620 + 380));
    });
    timers.current.push(window.setTimeout(() => setPhase("play"), 500 + seq.length * 620 + 200));
    return () => timers.current.forEach((id) => window.clearTimeout(id));
  }, [phase, seq]);

  const end = (nextScore: number) => {
    setPhase("done");
    setPaid(onFinish(nextScore * 12) ?? 0);
  };

  const tap = (index: number) => {
    if (phase !== "play") return;
    setLit(index);
    window.setTimeout(() => setLit(null), 180);
    playSynthesizer(BELLS[index]!.freq, "glockenspiel");
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

  return (
    <div className="space-y-4">
      <p className="text-slate-300">Round {Math.min(score + 1, 8)} of 8. Copy the pattern.</p>
      <div className="grid grid-cols-2 gap-3">
        {BELLS.map((bell, index) => (
          <button
            key={bell.name}
            type="button"
            onClick={() => tap(index)}
            className={`h-24 rounded-2xl text-2xl font-extrabold text-slate-950 ${bell.color} ${lit === index ? "brightness-150" : "brightness-75"}`}
          >
            {bell.name}
          </button>
        ))}
      </div>
      {phase === "done" && <Result paid={paid ?? 0} detail={`${score} patterns`} />}
    </div>
  );
}

function BeatGate({ onFinish }: { onFinish: (raw: number) => number | undefined }) {
  const [phase, setPhase] = useState(0);
  const [beat, setBeat] = useState(0);
  const [hits, setHits] = useState(0);
  const [flash, setFlash] = useState("");
  const [paid, setPaid] = useState<number | null>(null);
  const tapped = useRef(false);
  const done = useRef(false);
  const phaseRef = useRef(0);
  const state = useRef({ beat: 0, hits: 0 });

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
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
    const good = spot > 0.38 && spot < 0.62;
    if (good) {
      state.current.hits += 1;
      setHits(state.current.hits);
      setFlash("Hit");
      playSynthesizer(220 + state.current.hits * 20, "snare");
    } else setFlash("Early");
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.code !== "Space") return;
      event.preventDefault();
      tap();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div className="space-y-4">
      <p className="text-slate-300">Beat {Math.min(beat + 1, 12)} of 12. Hits {hits}. Tap the lane, or press space.</p>
      <div className="relative h-16 overflow-hidden rounded-full bg-slate-800" onPointerDown={tap} role="presentation">
        <div className="absolute inset-y-0 left-[38%] w-[24%] bg-emerald-500/40" />
        <div className="absolute top-1 bottom-1 w-3 rounded-full bg-amber-300" style={{ left: `calc(${phase * 100}% - 6px)` }} />
      </div>
      <button type="button" onClick={tap} className="w-full rounded-2xl bg-amber-400 py-4 text-xl font-extrabold text-slate-950">
        Tap the beat
      </button>
      <p className="h-6 text-center font-extrabold text-slate-200">{flash}</p>
      {paid !== null && <Result paid={paid} detail={`${hits} hits`} />}
    </div>
  );
}

const WHITES = [
  { name: "C", freq: 261.63 },
  { name: "D", freq: 293.66 },
  { name: "E", freq: 329.63 },
  { name: "F", freq: 349.23 },
  { name: "G", freq: 392 },
  { name: "A", freq: 440 },
  { name: "B", freq: 493.88 },
  { name: "C5", freq: 523.25 },
];

function ScaleSprint({ onFinish }: { onFinish: (raw: number) => number | undefined }) {
  const [round, setRound] = useState(0);
  const [target, setTarget] = useState(() => Math.floor(Math.random() * WHITES.length));
  const [correct, setCorrect] = useState(0);
  const [left, setLeft] = useState(2.4);
  const [paid, setPaid] = useState<number | null>(null);
  const stats = useRef({ round: 0, correct: 0 });

  useEffect(() => {
    if (paid !== null) return;
    const id = window.setInterval(() => {
      setLeft((n) => {
        if (n > 0.1) return n - 0.1;
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

  const pick = (index: number) => {
    if (paid !== null || stats.current.round >= 12) return;
    playSynthesizer(WHITES[index]!.freq, "flute");
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

  return (
    <div className="space-y-4">
      <p className="text-slate-300">
        Note {Math.min(round + 1, 12)} of 12. Correct {correct}. Time {left.toFixed(1)}s
      </p>
      <p className="text-center font-display text-6xl text-cyan-200">{WHITES[target]?.name}</p>
      <div className="grid grid-cols-4 gap-2">
        {WHITES.map((note, index) => (
          <button key={note.name} type="button" onClick={() => pick(index)} className="rounded-xl bg-slate-100 py-4 text-lg font-extrabold text-slate-950">
            {note.name}
          </button>
        ))}
      </div>
      {paid !== null && <Result paid={paid} detail={`${correct} notes`} />}
    </div>
  );
}

const CARDS: { name: string; family: string }[] = [
  { name: "Trumpet", family: "Brass" },
  { name: "Tuba", family: "Brass" },
  { name: "French Horn", family: "Brass" },
  { name: "Trombone", family: "Brass" },
  { name: "Flute", family: "Woodwind" },
  { name: "Clarinet", family: "Woodwind" },
  { name: "Oboe", family: "Woodwind" },
  { name: "Saxophone", family: "Woodwind" },
  { name: "Snare", family: "Percussion" },
  { name: "Cymbals", family: "Percussion" },
  { name: "Xylophone", family: "Percussion" },
  { name: "Tambourine", family: "Percussion" },
  { name: "Violin", family: "Strings" },
  { name: "Cello", family: "Strings" },
  { name: "Harp", family: "Strings" },
  { name: "Ukulele", family: "Strings" },
];

function FolderSort({ onFinish }: { onFinish: (raw: number) => number | undefined }) {
  const deck = useRef([...CARDS].sort(() => Math.random() - 0.5).slice(0, 12));
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [paid, setPaid] = useState<number | null>(null);
  const card = deck.current[index];

  const choose = (family: string) => {
    if (!card || paid !== null) return;
    const nextCorrect = correct + (family === card.family ? 1 : 0);
    const next = index + 1;
    setCorrect(nextCorrect);
    if (next >= deck.current.length) setPaid(onFinish(nextCorrect * 10) ?? 0);
    else setIndex(next);
  };

  return (
    <div className="space-y-4">
      <p className="text-slate-300">
        Card {Math.min(index + 1, 12)} of 12. Right so far: {correct}
      </p>
      <div className="rounded-3xl border border-slate-600 bg-slate-800 py-10 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Instrument</p>
        <p className="mt-2 font-display text-5xl text-slate-50">{card?.name ?? "Done"}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {["Brass", "Woodwind", "Percussion", "Strings"].map((family) => (
          <button key={family} type="button" onClick={() => choose(family)} className="rounded-2xl bg-emerald-500 py-4 font-extrabold text-slate-950">
            {family}
          </button>
        ))}
      </div>
      {paid !== null && <Result paid={paid} detail={`${correct} sorted`} />}
    </div>
  );
}

function StandBalance({ onFinish }: { onFinish: (raw: number) => number | undefined }) {
  const pos = useRef(50);
  const vel = useRef(0);
  const held = useRef(false);
  const green = useRef(0);
  const time = useRef(0);
  const [view, setView] = useState({ pos: 50, time: 0, green: 0 });
  const [paid, setPaid] = useState<number | null>(null);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.04, (now - last) / 1000);
      last = now;
      vel.current += 42 * dt;
      if (held.current) vel.current -= 110 * dt;
      pos.current = Math.max(2, Math.min(98, pos.current + vel.current * dt));
      if (pos.current <= 2 || pos.current >= 98) vel.current *= -0.2;
      if (pos.current > 40 && pos.current < 60) green.current += dt;
      time.current += dt;
      setView({ pos: pos.current, time: time.current, green: green.current });
      if (time.current >= 18) {
        setPaid(onFinish(green.current * 6) ?? 0);
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [onFinish]);

  return (
    <div className="space-y-4">
      <p className="text-slate-300">
        Keep the stand in the bright lane. {Math.max(0, 18 - view.time).toFixed(1)}s left. Lane time {view.green.toFixed(1)}s
      </p>
      <div className="relative h-64 overflow-hidden rounded-3xl bg-slate-800">
        <div className="absolute inset-x-0 top-[40%] h-[20%] bg-emerald-500/30" />
        <div
          className="absolute left-1/2 h-10 w-16 -translate-x-1/2 rounded-md border-2 border-slate-950 bg-amber-700"
          style={{ top: `${view.pos}%` }}
        />
      </div>
      <button
        type="button"
        onPointerDown={() => {
          held.current = true;
        }}
        onPointerUp={() => {
          held.current = false;
        }}
        onPointerLeave={() => {
          held.current = false;
        }}
        className="w-full rounded-2xl bg-violet-400 py-4 text-xl font-extrabold text-slate-950"
      >
        Hold to lift
      </button>
      {paid !== null && <Result paid={paid} detail={`${view.green.toFixed(1)}s in the lane`} />}
    </div>
  );
}

function CountIn({ onFinish }: { onFinish: (raw: number) => number | undefined }) {
  const [beat, setBeat] = useState(0);
  const [round, setRound] = useState(0);
  const [hits, setHits] = useState(0);
  const [flash, setFlash] = useState("Wait for 4");
  const [paid, setPaid] = useState<number | null>(null);
  const tapped = useRef(false);
  const beatRef = useRef(0);
  const stats = useRef({ round: 0, hits: 0 });
  const done = useRef(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (done.current) return;
      const next = (beatRef.current + 1) % 4;
      beatRef.current = next;
      setBeat(next);
      if (next === 0) {
        if (!tapped.current) setFlash("Missed the 4");
        tapped.current = false;
        stats.current.round += 1;
        setRound(stats.current.round);
        if (stats.current.round >= 8) {
          done.current = true;
          setPaid(onFinish(stats.current.hits * 12) ?? 0);
        }
      }
    }, 460);
    return () => window.clearInterval(id);
  }, [onFinish]);

  const tap = () => {
    if (done.current || tapped.current || stats.current.round >= 8) return;
    tapped.current = true;
    if (beatRef.current === 3) {
      stats.current.hits += 1;
      setHits(stats.current.hits);
      setFlash("Count!");
      playSynthesizer(392, "snare");
    } else setFlash("Too early");
  };

  return (
    <div className="space-y-4">
      <p className="text-slate-300">Bar {Math.min(round + 1, 8)} of 8. Hits {hits}.</p>
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className={`rounded-2xl py-8 text-center text-3xl font-extrabold ${beat === n - 1 ? "bg-orange-400 text-slate-950" : "bg-slate-800 text-slate-400"}`}>
            {n}
          </div>
        ))}
      </div>
      <button type="button" onClick={tap} className="w-full rounded-2xl bg-orange-400 py-4 text-xl font-extrabold text-slate-950">
        Tap on 4
      </button>
      <p className="h-6 text-center font-extrabold text-slate-200">{flash}</p>
      {paid !== null && <Result paid={paid} detail={`${hits} count-ins`} />}
    </div>
  );
}

function HallDodge({ onFinish }: { onFinish: (raw: number) => number | undefined }) {
  const lane = useRef(1);
  const [laneView, setLaneView] = useState(1);
  const blocks = useRef<{ lane: number; y: number; hit: boolean }[]>([
    { lane: 0, y: -8, hit: false },
    { lane: 2, y: -42, hit: false },
    { lane: 1, y: -78, hit: false },
  ]);
  const [snap, setSnap] = useState(blocks.current);
  const lives = useRef(3);
  const score = useRef(0);
  const [lifeView, setLifeView] = useState(3);
  const [scoreView, setScoreView] = useState(0);
  const [paid, setPaid] = useState<number | null>(null);
  const done = useRef(false);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.04, (now - last) / 1000);
      last = now;
      for (const block of blocks.current) {
        block.y += dt * 38;
        if (!block.hit && block.y > 78 && block.y < 96 && block.lane === lane.current) {
          block.hit = true;
          lives.current -= 1;
          setLifeView(lives.current);
          if (lives.current <= 0 && !done.current) {
            done.current = true;
            setPaid(onFinish(score.current * 6) ?? 0);
          }
        }
        if (block.y > 110) {
          score.current += 1;
          block.y = -20 - Math.random() * 40;
          block.lane = Math.floor(Math.random() * 3);
          block.hit = false;
        }
      }
      setScoreView(score.current);
      setSnap(blocks.current.map((block) => ({ ...block })));
      if (!done.current) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [onFinish]);

  const move = (dir: number) => {
    lane.current = Math.max(0, Math.min(2, lane.current + dir));
    setLaneView(lane.current);
  };

  return (
    <div className="space-y-4">
      <p className="text-slate-300">Dodged {scoreView}. Lives {lifeView}. Stay off the rolling stands.</p>
      <div className="relative grid h-72 grid-cols-3 gap-2 overflow-hidden rounded-3xl bg-slate-800 p-2">
        {[0, 1, 2].map((col) => (
          <div key={col} className="relative rounded-2xl bg-slate-900">
            {snap.filter((block) => block.lane === col).map((block, index) => (
              <div key={`${col}-${index}`} className="absolute inset-x-2 h-8 rounded-md bg-amber-700" style={{ top: `${block.y}%` }} />
            ))}
            {laneView === col && <div className="absolute inset-x-3 bottom-3 h-10 rounded-full bg-sky-400" />}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button type="button" onClick={() => move(-1)} className="rounded-2xl bg-sky-400 py-4 font-extrabold text-slate-950">Left</button>
        <button type="button" onClick={() => move(1)} className="rounded-2xl bg-sky-400 py-4 font-extrabold text-slate-950">Right</button>
      </div>
      {paid !== null && <Result paid={paid} detail={`${scoreView} stands dodged`} />}
    </div>
  );
}

function BarHold({ onFinish }: { onFinish: (raw: number) => number | undefined }) {
  const holding = useRef(false);
  const fillRef = useRef(0);
  const stats = useRef({ round: 0, hits: 0 });
  const done = useRef(false);
  const [fill, setFill] = useState(0);
  const [round, setRound] = useState(0);
  const [hits, setHits] = useState(0);
  const [msg, setMsg] = useState("Hold, then let go in the green.");
  const [paid, setPaid] = useState<number | null>(null);

  const release = () => {
    if (!holding.current || done.current) return;
    holding.current = false;
    const spot = fillRef.current;
    const good = spot >= 0.7 && spot <= 0.88;
    if (good) {
      stats.current.hits += 1;
      setHits(stats.current.hits);
      setMsg("In the pocket");
      playSynthesizer(330, "snare");
    } else setMsg(spot < 0.7 ? "Let go later" : "Held too long");
    stats.current.round += 1;
    setRound(stats.current.round);
    fillRef.current = 0;
    setFill(0);
    if (stats.current.round >= 8) {
      done.current = true;
      setPaid(onFinish(stats.current.hits * 12) ?? 0);
    }
  };

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (holding.current && !done.current) {
        fillRef.current = Math.min(1.2, fillRef.current + dt / 1.3);
        setFill(fillRef.current);
        if (fillRef.current >= 1.15) release();
      }
      if (!done.current) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [onFinish]);

  return (
    <div className="space-y-4">
      <p className="text-slate-300">Bar {Math.min(round + 1, 8)} of 8. Clean releases {hits}.</p>
      <div className="relative h-10 overflow-hidden rounded-full bg-slate-800">
        <div className="absolute inset-y-0 left-[70%] w-[18%] bg-emerald-500/50" />
        <div className="absolute inset-y-0 left-0 bg-fuchsia-400" style={{ width: `${Math.min(100, fill * 100)}%` }} />
      </div>
      <button
        type="button"
        onPointerDown={() => {
          if (!done.current) holding.current = true;
        }}
        onPointerUp={release}
        onPointerLeave={release}
        className="w-full rounded-2xl bg-fuchsia-400 py-4 text-xl font-extrabold text-slate-950"
      >
        Hold the bar
      </button>
      <p className="h-6 text-center font-extrabold text-slate-200">{msg}</p>
      {paid !== null && <Result paid={paid} detail={`${hits} clean bars`} />}
    </div>
  );
}

function Result({ paid, detail }: { paid: number; detail: string }) {
  return (
    <div className="rounded-2xl border border-emerald-700 bg-emerald-950 px-4 py-3 text-center">
      <p className="font-extrabold text-emerald-200">{detail}</p>
      <p className="text-2xl font-extrabold text-emerald-300">{paid > 0 ? `+${paid} reeds` : "Practice only — daily reeds used up"}</p>
    </div>
  );
}
