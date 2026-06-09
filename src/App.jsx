import { useEffect, useReducer, useRef, useState } from "react";
import POOL from "./words.txt?raw";

// ─────────────────────────────────────────────────────────────────
//  WORD POOL & CONSTANTS
// ─────────────────────────────────────────────────────────────────
const WORDS = [...new Set(POOL.trim().split(/\s+/).filter(w => w.length === 5).map(w => w.toUpperCase()))];
const VOWELS = ["A", "E", "I", "O", "U"];
const WL = 5;

// Tile states
const CC = "c"; // Correct
const CP = "p"; // Present
const CA = "a"; // Absent
const CF = "f"; // Filled
const CE = "e"; // Empty
const CH = "h"; // Hint
const CV = "v"; // Vowel (Abjad Modifier)

const PRI = { [CC]: 3, [CP]: 2, [CA]: 1 };

// Standard Keyboard Layout
const KB_STD = [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"],
];
// Flat keyboard for Scramble mode
const KB_FLAT = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

// ─────────────────────────────────────────────────────────────────
//  AUDIO ENGINE
// ─────────────────────────────────────────────────────────────────
let _ctx = null;
function getCtx() {
      if (!_ctx) {
            _ctx = new (window.AudioContext || window.webkitAudioContext)();
            console.log("[Audio Engine] AudioContext created. State:", _ctx.state);
      }
      if (_ctx.state === "suspended") {
            _ctx.resume().then(() => console.log("[Audio Engine] AudioContext resumed."));
      }
      return _ctx;
}

function tone(freq, type = "sine", dur = 0.08, vol = 0.05, delay = 0) {
      try {
            const ctx = getCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.type = type;
            osc.frequency.value = freq;

            const t = ctx.currentTime + delay;
            gain.gain.setValueAtTime(vol, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

            osc.start(t);
            osc.stop(t + dur + 0.05);
      } catch (err) {
            console.error("[Audio Engine] Tone generation failed:", err);
      }
}

const sfx = {
      click: () => tone(1100, "square", 0.028, 0.022),
      error: () => { tone(160, "sawtooth", 0.13, 0.09); tone(120, "sawtooth", 0.13, 0.09, 0.12); },
      submit: () => { tone(440, "sine", 0.09, 0.055); tone(554, "sine", 0.09, 0.055, 0.1); },
      win: () => [523, 659, 784, 1046].forEach((f, i) => tone(f, "sine", 0.28, 0.08, i * 0.13)),
      tick: (u) => tone(u ? 1100 : 760, "square", 0.038, u ? 0.09 : 0.05),
      alarm: () => [880, 660, 880, 550, 440, 330, 220, 110].forEach((f, i) => tone(f, "sawtooth", 0.24, 0.22, i * 0.17)),
      hint: () => { tone(880, "sine", 0.06, 0.04); tone(1100, "sine", 0.06, 0.04, 0.07); },
      unlock: () => { tone(660, "sine", 0.09, 0.05); tone(880, "sine", 0.1, 0.06, 0.1); tone(1100, "sine", 0.09, 0.04, 0.2); },
      reveal: () => { tone(220, "sine", 0.12, 0.06); tone(330, "sine", 0.12, 0.06, 0.1); tone(440, "sine", 0.12, 0.06, 0.2); },
};

// ─────────────────────────────────────────────────────────────────
//  MATH & LOGIC UTILS
// ─────────────────────────────────────────────────────────────────
function score(guess, target, isAbjad) {
      const out = Array(WL).fill(CA);
      const tc = target.split(""), gc = guess.split("");
      const used = Array(WL).fill(false);

      for (let i = 0; i < WL; i++) {
            if (gc[i] === tc[i]) { out[i] = CC; used[i] = true; }
      }
      for (let i = 0; i < WL; i++) {
            if (out[i] === CC) continue;
            for (let j = 0; j < WL; j++) {
                  if (!used[j] && gc[i] === tc[j]) { out[i] = CP; used[j] = true; break; }
            }
      }
      if (isAbjad) {
            for (let i = 0; i < WL; i++) {
                  if (VOWELS.includes(gc[i])) out[i] = CV;
            }
      }
      return out;
}

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
const rand5 = () => [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
const getRandomWord = () => {
      const word = WORDS[Math.floor(Math.random() * WORDS.length)];
      console.log("[Game Logic] Target word generated:", word);
      return word;
};

// ─────────────────────────────────────────────────────────────────
//  SCORING CALCULATORS
// ─────────────────────────────────────────────────────────────────
function calcNormalScore(A, T, L, H, streak, won) {
      if (!won) return { score: 0, penalty: 250 * Math.pow(1.8, streak) };
      if (A === 1) return { score: 0.5, penalty: 0 };
      const V = 1000 - (100 * A) + (5 * T) + (50 * L);
      const Mh = 1 - (0.16 * H);
      const Ms = Math.pow(1.4, streak);
      return { score: (V * Mh) * Ms, penalty: 0 };
}

function calcEndlessScore(A, L, H, streak) {
      if (A === 1) return 0.5;
      const V = 500 + Math.max(0, 300 - (50 * A)) + (50 * L);
      const Mh = 1 - (0.08 * H);
      const Ms = Math.pow(1.2, streak);
      return (V * Mh) * Ms;
}

// ─────────────────────────────────────────────────────────────────
//  REDUCER STATE
// ─────────────────────────────────────────────────────────────────
function freshState(mode, modifiers) {
      const isHard = mode === "HARD";
      const isEndless = mode === "ENDLESS";
      console.log(`[State Initialization] Mode: ${mode}, Modifiers:`, modifiers);

      return {
            screen: "PLAY",
            mode,
            modifiers,
            target: getRandomWord(),
            guesses: [],
            input: Array(WL).fill(""),
            over: false,
            won: false,
            timedOut: false,
            message: mode === "ENDLESS" ? "SURVIVE." : "GOOD LUCK",
            persist: true,
            km: {},
            shakeRow: -1,
            timeLeft: isHard ? 45 : isEndless ? 90 : 90,
            timerStarted: false,
            hintsLeft: 0,
            hintsUnlocked: 0,
            hintedPositions: [],
            liesThisWord: 0,
            hintsThisWord: 0,
            scrambleKb: modifiers.includes("SCRAMBLE") ? shuffle(KB_FLAT) : [],
            sessionScoreAdded: 0,
            sessionPenalty: 0,
      };
}

function reducer(s, a) {
      if (a.type !== "TICK" && a.type !== "REVEAL_LIES") {
            console.log("[Reducer Action]", a.type, a);
      }

      // Safe check for modifiers to prevent initial crash
      const isAbjad = s.modifiers?.includes("ABJAD") || false;

      switch (a.type) {
            case "START":
                  return freshState(a.mode, a.modifiers);

            case "TYPE": {
                  if (s.over) return s;
                  const pos = s.input.findIndex(c => c === "");
                  if (pos === -1) return s;
                  const newInput = [...s.input];
                  newInput[pos] = a.k;
                  return { ...s, input: newInput };
            }

            case "DEL": {
                  if (s.over) return s;
                  let delPos = -1;
                  for (let i = WL - 1; i >= 0; i--) {
                        if (s.input[i] !== "" && !s.hintedPositions.includes(i)) {
                              delPos = i; break;
                        }
                  }
                  if (delPos === -1) return s;
                  const newInput = [...s.input];
                  newInput[delPos] = "";
                  return { ...s, input: newInput };
            }

            case "SUBMIT": {
                  if (s.over) return s;
                  if (s.input.some(c => c === "")) {
                        console.warn("[Submission] Rejected: Not enough letters.");
                        return { ...s, shakeRow: s.guesses.length, message: "NOT ENOUGH LETTERS", persist: false };
                  }

                  const word = s.input.join("");
                  if (!WORDS.includes(word)) {
                        console.warn("[Submission] Rejected: Word not in dictionary -", word);
                        return { ...s, shakeRow: s.guesses.length, message: "NOT IN WORD LIST", persist: false };
                  }

                  const trueS = score(word, s.target, isAbjad);
                  const won = trueS.every(x => x === CC || (isAbjad && x === CV && VOWELS.includes(s.target[trueS.indexOf(x)])));
                  const isWin = word === s.target;

                  let disp = [...trueS], lies = 0;
                  const lieRevealAt = Array(WL).fill(null);
                  const lieCorrectTime = s.mode === "HARD" ? 30 : 45;

                  const getLieColor = (trueColor) => {
                        if (trueColor === CC) return CA;
                        if (trueColor === CP) return CA;
                        if (trueColor === CA) return CP;
                        return CA;
                  };

                  if (!isWin) {
                        const [roll, r1, r2] = a.rand;
                        let numLies = 0;

                        if (s.mode === "HARD") {
                              if (roll < 0.20) numLies = 0;
                              else if (roll < 0.84) numLies = 1;
                              else if (roll < 0.99) numLies = 2;
                              else numLies = 5;
                        } else {
                              if (roll < 0.40) numLies = 0;
                              else if (roll < 0.84) numLies = 1;
                              else if (roll < 0.99) numLies = 2;
                              else numLies = 5;
                        }

                        if (numLies > 0) {
                              console.log(`[Deception Engine] Generating ${numLies} lies.`);
                              if (numLies === 5) {
                                    for (let i = 0; i < WL; i++) {
                                          if (isAbjad && disp[i] === CV) continue;
                                          disp[i] = getLieColor(trueS[i]);
                                          lieRevealAt[i] = Date.now() + lieCorrectTime * 1000;
                                    }
                                    lies = 5;
                              } else {
                                    const availableIndices = [0, 1, 2, 3, 4].filter(i => !(isAbjad && disp[i] === CV));
                                    const randPicks = [r1, r2];
                                    for (let i = 0; i < numLies; i++) {
                                          if (availableIndices.length === 0) break;
                                          const pickIdx = Math.floor(randPicks[i] * availableIndices.length);
                                          const targetIdx = availableIndices[pickIdx];
                                          availableIndices.splice(pickIdx, 1);
                                          disp[targetIdx] = getLieColor(trueS[targetIdx]);
                                          lieRevealAt[targetIdx] = Date.now() + lieCorrectTime * 1000;
                                          lies++;
                                    }
                              }
                        }
                  }

                  const ng = [...s.guesses, { w: word, disp, trueDisp: trueS, lies, lieRevealAt }];
                  const km = { ...s.km };
                  word.split("").forEach((ch, i) => {
                        if ((PRI[disp[i]] ?? 0) > (PRI[km[ch]] ?? 0) || disp[i] === CV) km[ch] = disp[i];
                  });

                  const isRowsOver = s.mode === "HARD" ? ng.length >= 6 : s.mode === "NORMAL" ? ng.length >= 7 : false;
                  const over = (isWin && s.mode !== "ENDLESS") || (isRowsOver && s.mode !== "ENDLESS");

                  if (over) console.log(`[Game Over] Win state: ${isWin}. Word was: ${s.target}`);

                  return {
                        ...s,
                        guesses: ng,
                        input: Array(WL).fill(""),
                        km,
                        over,
                        won: isWin && s.mode !== "ENDLESS",
                        message: isWin ? "CORRECT" : over ? `WORD: ${s.target}` : "",
                        persist: over || isWin,
                        shakeRow: -1,
                        timerStarted: true,
                        hintedPositions: [],
                        liesThisWord: s.liesThisWord + lies,
                        scrambleKb: s.modifiers?.includes("SCRAMBLE") ? shuffle(KB_FLAT) : [],
                        endlessWonTrigger: isWin && s.mode === "ENDLESS" ? Date.now() : null,
                  };
            }

            case "ENDLESS_NEXT_WORD": {
                  console.log("[Endless Sequence] Transitioning to new target word.");
                  const newTarget = getRandomWord();

                  const rescoredGuesses = s.guesses.map(g => {
                        const newScore = score(g.w, newTarget, isAbjad);
                        return { ...g, disp: newScore, trueDisp: newScore, lies: 0, lieRevealAt: null };
                  });

                  const newKm = {};
                  rescoredGuesses.forEach(g => {
                        g.w.split("").forEach((ch, i) => {
                              if ((PRI[g.disp[i]] ?? 0) > (PRI[newKm[ch]] ?? 0) || g.disp[i] === CV) newKm[ch] = g.disp[i];
                        });
                  });

                  return {
                        ...s,
                        target: newTarget,
                        guesses: rescoredGuesses,
                        km: newKm,
                        timeLeft: s.timeLeft + 45,
                        liesThisWord: 0,
                        hintsThisWord: 0,
                        endlessWonTrigger: null,
                        message: "TARGET SHIFTED",
                        persist: false
                  };
            }

            case "TICK": {
                  if (!s.timerStarted || s.over || s.endlessWonTrigger) return s;
                  const t = s.timeLeft - 1;

                  if (t <= 0) {
                        console.warn("[Timer] Expiration reached.");
                        return {
                              ...s, timeLeft: 0, over: true, won: false, timedOut: true,
                              message: `WORD: ${s.target}`, persist: true
                        };
                  }

                  let hintsLeft = s.hintsLeft;
                  let hintsUnlocked = s.hintsUnlocked;
                  let hintJustUnlocked = false;

                  if (s.mode === "ENDLESS") {
                        if (t % 36 === 0 && t !== s.timeLeft) {
                              hintsLeft++; hintsUnlocked++; hintJustUnlocked = true;
                              console.log("[Hints] Endless mode hint unlocked.");
                        }
                  } else if (s.mode === "HARD") {
                        if (hintsUnlocked === 0 && t === 15) {
                              hintsLeft++; hintsUnlocked++; hintJustUnlocked = true;
                              console.log("[Hints] Hard mode hint unlocked.");
                        }
                  } else {
                        const THRESH = [70, 45, 20];
                        if (hintsUnlocked < THRESH.length && t <= THRESH[hintsUnlocked]) {
                              hintsLeft++; hintsUnlocked++; hintJustUnlocked = true;
                              console.log(`[Hints] Normal mode hint unlocked at threshold ${THRESH[hintsUnlocked - 1]}.`);
                        }
                  }

                  return {
                        ...s, timeLeft: t, hintsLeft, hintsUnlocked,
                        message: hintJustUnlocked ? "HINT UNLOCKED" : s.message,
                        persist: hintJustUnlocked ? false : s.persist,
                  };
            }

            case "REVEAL_LIES": {
                  const now = Date.now();
                  let anyRevealed = false;

                  const updatedGuesses = s.guesses.map(g => {
                        if (!g.lieRevealAt || !g.lieRevealAt.some(time => time && time <= now)) return g;
                        anyRevealed = true;
                        const newDisp = [...g.disp];
                        const newLieRevealAt = [...g.lieRevealAt];
                        let remainingLies = g.lies;

                        newLieRevealAt.forEach((time, index) => {
                              if (time && time <= now) {
                                    newDisp[index] = g.trueDisp[index];
                                    newLieRevealAt[index] = null;
                                    remainingLies--;
                              }
                        });

                        return {
                              ...g, disp: newDisp, lies: remainingLies,
                              lieRevealAt: newLieRevealAt.every(t => t === null) ? null : newLieRevealAt
                        };
                  });

                  if (!anyRevealed) return s;

                  console.log("[Deception Engine] Lie time limit reached. Signal Corrected.");
                  const km = {};
                  updatedGuesses.forEach(g => {
                        g.w.split("").forEach((ch, i) => {
                              if ((PRI[g.disp[i]] ?? 0) > (PRI[km[ch]] ?? 0) || g.disp[i] === CV) km[ch] = g.disp[i];
                        });
                  });

                  return { ...s, guesses: updatedGuesses, km, message: "SIGNAL CORRECTED", persist: false };
            }

            case "UNSHAKE": return { ...s, shakeRow: -1, message: s.persist ? s.message : "" };
            case "CLEAR_MSG": return s.persist ? s : { ...s, message: "" };

            case "HINT": {
                  if (s.over || s.hintsLeft <= 0) return s;
                  const emptyPositions = s.input.map((c, i) => (c === "" ? i : -1)).filter(i => i >= 0);
                  if (emptyPositions.length === 0) return s;

                  const pos = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
                  const newInput = [...s.input];
                  newInput[pos] = s.target[pos];

                  console.log(`[Hints] Hint deployed at position ${pos}.`);
                  return {
                        ...s, input: newInput, hintsLeft: s.hintsLeft - 1, hintsThisWord: s.hintsThisWord + 1,
                        hintedPositions: [...s.hintedPositions, pos],
                        message: `HINT — POSITION ${pos + 1}: ${s.target[pos]}`, persist: false,
                  };
            }

            case "QUIT":
                  console.log("[Navigation] Returning to Start Screen.");
                  return { screen: "START", modifiers: [], mode: "NORMAL", guesses: [] };

            default: return s;
      }
}

// ─────────────────────────────────────────────────────────────────
//  THEME
// ─────────────────────────────────────────────────────────────────
const T = {
      bg: "#0D0D0E", brd: "#292934", txt: "#E4E2DC", sub: "#5E5E6E", dim: "#3D3D4D",
      cor: "#3E7847", pre: "#B8851E", abs: "#323240", kAbs: "#1E1E28", lieText: "#C04040",
      hint: "#2A5A8A", hintBg: "#0D2035", hintTxt: "#7ABCF0", sigCor: "#4A90D9",
      vow: "#FFFFFF", vowBg: "#D1D1D1", vowTxt: "#111111"
};

// ─────────────────────────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────────────────────────
export default function LyingWordle() {
      // Default to strict initialization schema to prevent undefined errors
      const [s, dispatch] = useReducer(reducer, { screen: "START", modifiers: [], mode: "NORMAL", guesses: [] });

      const [stats, setStats] = useState({ ns: 0, nst: 0, es: 0, est: 0 });
      const [setupMode, setSetupMode] = useState("NORMAL");
      const [setupMods, setSetupMods] = useState([]);

      const prevUnlocked = useRef(0);
      const endlessStreakTracker = useRef(0);

      useEffect(() => {
            const saved = localStorage.getItem("lying_wordle_stats");
            if (saved) {
                  console.log("[LocalStorage] Existing stats loaded:", JSON.parse(saved));
                  setStats(JSON.parse(saved));
            } else {
                  console.log("[LocalStorage] No existing stats found. Using defaults.");
            }
      }, []);

      const saveStats = (newStats) => {
            console.log("[LocalStorage] Saving updated stats:", newStats);
            setStats(newStats);
            localStorage.setItem("lying_wordle_stats", JSON.stringify(newStats));
      };

      useEffect(() => {
            if (s.screen !== "PLAY") return;

            if (s.endlessWonTrigger) {
                  console.log("[Scoring Engine] Calculating Endless sequence score.");
                  sfx.win();
                  const earned = calcEndlessScore(s.guesses.length, s.liesThisWord, s.hintsThisWord, endlessStreakTracker.current);
                  endlessStreakTracker.current += 1;

                  const newStats = { ...stats, es: stats.es + earned, est: endlessStreakTracker.current };
                  saveStats(newStats);

                  setTimeout(() => {
                        dispatch({ type: "ENDLESS_NEXT_WORD" });
                  }, 1500);
            }

            if (s.over && s.mode !== "ENDLESS") {
                  console.log("[Scoring Engine] Calculating Normal/Hard final score.");
                  const { score, penalty } = calcNormalScore(
                        s.guesses.length, s.timeLeft, s.liesThisWord, s.hintsThisWord, stats.nst, s.won
                  );

                  let newNst = s.won ? stats.nst + 1 : 0;
                  let newNs = s.won ? stats.ns + score : Math.max(0, stats.ns - penalty);

                  saveStats({ ...stats, ns: newNs, nst: newNst });
            }

            if (s.over && s.mode === "ENDLESS") {
                  console.log("[Scoring Engine] Endless sequence terminated.");
                  endlessStreakTracker.current = 0;
                  saveStats({ ...stats, est: 0 });
            }
      }, [s.over, s.won, s.endlessWonTrigger]);

      useEffect(() => {
            const h = (e) => {
                  if (s.screen !== "PLAY" || e.ctrlKey || e.metaKey || e.altKey) return;

                  if (e.key === "Enter") { sfx.submit(); dispatch({ type: "SUBMIT", rand: rand5() }); }
                  else if (e.key === "Backspace") { dispatch({ type: "DEL" }); }
                  else if (/^[a-zA-Z]$/.test(e.key)) {
                        if (s.modifiers?.includes("SCRAMBLE")) {
                              console.log("[Input Intercept] Physical key blocked by SCRAMBLE modifier.");
                              return;
                        }
                        sfx.click(); dispatch({ type: "TYPE", k: e.key.toUpperCase() });
                  }
            };
            window.addEventListener("keydown", h);
            return () => window.removeEventListener("keydown", h);
      }, [s.screen, s.modifiers]);

      useEffect(() => {
            if (s.shakeRow < 0) return;
            sfx.error();
            const t = setTimeout(() => dispatch({ type: "UNSHAKE" }), 550);
            return () => clearTimeout(t);
      }, [s.shakeRow]);

      useEffect(() => {
            if (!s.timerStarted || s.over || s.endlessWonTrigger) return;
            const id = setInterval(() => dispatch({ type: "TICK" }), 1000);
            return () => clearInterval(id);
      }, [s.timerStarted, s.over, s.endlessWonTrigger]);

      useEffect(() => {
            if (s.timerStarted && !s.over && s.timeLeft > 0 && s.timeLeft <= 20) sfx.tick(s.timeLeft <= 8);
      }, [s.timeLeft]);

      useEffect(() => {
            if (s.over || !s.guesses) return;
            const hasPending = s.guesses.some(g => g.lieRevealAt);
            if (!hasPending) return;
            const id = setInterval(() => dispatch({ type: "REVEAL_LIES" }), 750);
            return () => clearInterval(id);
      }, [s.guesses, s.over]);

      useEffect(() => {
            if (s.hintsUnlocked > prevUnlocked.current) {
                  sfx.unlock(); prevUnlocked.current = s.hintsUnlocked;
            }
      }, [s.hintsUnlocked]);

      useEffect(() => {
            if (s.message !== "HINT UNLOCKED" && s.message !== "TARGET SHIFTED") return;
            const t = setTimeout(() => dispatch({ type: "CLEAR_MSG" }), 2000);
            return () => clearTimeout(t);
      }, [s.message]);

      useEffect(() => {
            if (s.message !== "SIGNAL CORRECTED") return;
            sfx.reveal();
            const t = setTimeout(() => dispatch({ type: "CLEAR_MSG" }), 2500);
            return () => clearTimeout(t);
      }, [s.message]);

      useEffect(() => { if (s.timedOut) sfx.alarm(); }, [s.timedOut]);
      useEffect(() => { if (s.won && s.mode !== "ENDLESS") sfx.win(); }, [s.won, s.mode]);

      const press = (k) => {
            if (k === "ENTER") { sfx.submit(); dispatch({ type: "SUBMIT", rand: rand5() }); }
            else if (k === "DEL") { dispatch({ type: "DEL" }); }
            else { sfx.click(); dispatch({ type: "TYPE", k }); }
      };

      if (s.screen === "START") {
            const toggleMod = (mod) => {
                  setSetupMods(prev => prev.includes(mod) ? prev.filter(m => m !== mod) : [...prev, mod]);
            };

            return (
                  <div style={{ minHeight: "100vh", background: T.bg, color: T.txt, fontFamily: "Courier New", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "10vh" }}>
                        <h1 style={{ fontSize: "3rem", letterSpacing: "0.14em", fontWeight: 900, marginBottom: 40 }}>WORDLE<span style={{ color: T.lieText }}>?</span></h1>

                        <div style={{ display: "flex", gap: 40, marginBottom: 40 }}>
                              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                    <div style={{ color: T.sub, letterSpacing: "0.2em", fontSize: "0.8rem", marginBottom: 10 }}>MODE</div>
                                    {["NORMAL", "HARD", "ENDLESS"].map(m => (
                                          <button key={m} onClick={() => setSetupMode(m)} style={{
                                                background: setupMode === m ? T.dim : "transparent",
                                                border: `1px solid ${setupMode === m ? T.txt : T.brd}`,
                                                color: setupMode === m ? T.txt : T.sub,
                                                padding: "10px 20px", cursor: "pointer", fontFamily: "Courier New", letterSpacing: "0.1em"
                                          }}>
                                                {m}
                                          </button>
                                    ))}
                              </div>

                              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                    <div style={{ color: T.sub, letterSpacing: "0.2em", fontSize: "0.8rem", marginBottom: 10 }}>MODIFIERS</div>
                                    {["FLASHLIGHT", "SCRAMBLE", "ABJAD"].map(m => (
                                          <button key={m} onClick={() => toggleMod(m)} style={{
                                                background: setupMods.includes(m) ? T.hintBg : "transparent",
                                                border: `1px solid ${setupMods.includes(m) ? T.hintTxt : T.brd}`,
                                                color: setupMods.includes(m) ? T.hintTxt : T.sub,
                                                padding: "10px 20px", cursor: "pointer", fontFamily: "Courier New", letterSpacing: "0.1em"
                                          }}>
                                                {m}
                                          </button>
                                    ))}
                              </div>
                        </div>

                        <button onClick={() => {
                              endlessStreakTracker.current = 0;
                              dispatch({ type: "START", mode: setupMode, modifiers: setupMods });
                        }} style={{
                              marginTop: 20, padding: "15px 40px", background: T.txt, color: T.bg,
                              border: "none", fontSize: "1.2rem", fontWeight: "bold", cursor: "pointer", fontFamily: "Courier New", letterSpacing: "0.2em"
                        }}>
                              INITIALIZE
                        </button>
                  </div>
            );
      }

      const critical = s.timerStarted && !s.over && s.timeLeft <= 25;
      const urgent = s.timerStarted && !s.over && s.timeLeft <= 10;
      const fmt = (t) => `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
      const timerDisp = s.over ? (s.won ? "✓" : "· · ·") : fmt(s.timerStarted ? s.timeLeft : s.timeLeft);
      const timerCol = urgent ? T.lieText : critical ? T.pre : T.sub;
      const msgColor = s.won ? T.cor : s.message === "SIGNAL CORRECTED" ? T.sigCor : (s.over && !s.won) ? T.lieText : T.pre;

      const MAX_ROWS_SHOWN = 6;
      let displayGuesses = s.guesses;
      let startIndex = 0;

      if (s.mode === "ENDLESS" && s.guesses.length >= MAX_ROWS_SHOWN) {
            startIndex = s.guesses.length - MAX_ROWS_SHOWN + 1;
            displayGuesses = s.guesses.slice(startIndex);
      }

      const totalRows = s.mode === "ENDLESS" ? displayGuesses.length + 1 : s.mode === "HARD" ? 6 : 7;

      const tileSt = (st, forceRed, isHidden) => ({
            width: 54, height: 54, display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.4rem", fontWeight: 900, fontFamily: "'Courier New', Courier, monospace", border: "2px solid",
            opacity: isHidden ? 0 : 1,
            borderColor: forceRed ? "#7C1C1C" : st === CV ? T.vow : st === CC ? T.cor : st === CP ? T.pre : st === CA ? T.abs : st === CH ? T.hint : st === CF ? "#5A5A6A" : T.brd,
            background: forceRed ? ((st === CC || st === CP || st === CA) ? "#3D0808" : "transparent") : st === CV ? T.vowBg : st === CC ? T.cor : st === CP ? T.pre : st === CA ? T.abs : st === CH ? T.hintBg : "transparent",
            color: forceRed ? "#CC3333" : st === CV ? T.vowTxt : st === CH ? T.hintTxt : [CC, CP, CA].includes(st) ? "#F0EEE8" : T.txt,
            boxShadow: st === CH ? "0 0 7px 1px rgba(74,144,217,0.35)" : "none",
            userSelect: "none", flexShrink: 0, transition: "background 0.3s, border-color 0.3s, color 0.3s, opacity 0.3s",
      });

      const keySt = (k) => {
            const ks = s.km[k];
            return {
                  cursor: "pointer", fontFamily: "'Courier New', Courier, monospace", fontSize: k.length > 1 ? "0.58rem" : "0.82rem",
                  fontWeight: "bold", borderRadius: "3px", border: "none", padding: k.length > 1 ? "13px 6px" : "13px 11px", minWidth: k.length > 1 ? "46px" : "30px",
                  background: ks === CV ? T.vowBg : ks === CC ? T.cor : ks === CP ? T.pre : ks === CA ? T.kAbs : T.abs,
                  color: ks === CV ? T.vowTxt : ks === CA ? T.dim : T.txt, letterSpacing: "0.04em", transition: "background 0.12s", flexGrow: 1, textAlign: "center"
            };
      };

      return (
            <div style={{ minHeight: "100vh", background: T.bg, color: T.txt, fontFamily: "'Courier New', Courier, monospace", display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: 36, position: "relative", animation: urgent ? "screenShudder 0.7s ease-in-out infinite" : "none" }}>

                  <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999, background: urgent ? "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.22) 2px,rgba(0,0,0,0.22) 3px)" : "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.06) 3px,rgba(0,0,0,0.06) 4px)", transition: "background 1s" }} />
                  {s.timedOut && <div className="to-flash" />}
                  {s.timedOut && <div className="to-strobe" />}

                  <div style={{ position: "absolute", top: 20, right: 20, textAlign: "right", color: T.sub, fontSize: "0.6rem", letterSpacing: "0.1em" }}>
                        <div style={{ marginBottom: 10 }}>
                              <strong style={{ color: T.txt }}>[NORMAL DATA]</strong><br />
                              SCORE: {Math.floor(stats.ns)}<br />
                              STREAK: {stats.nst}
                        </div>
                        <div>
                              <strong style={{ color: T.txt }}>[ENDLESS DATA]</strong><br />
                              SCORE: {Math.floor(stats.es)}<br />
                              STREAK: {s.mode === "ENDLESS" ? endlessStreakTracker.current : stats.est}
                        </div>
                  </div>

                  <header style={{ width: "100%", maxWidth: 450, borderBottom: `1px solid ${T.brd}`, padding: "16px 0", textAlign: "center" }}>
                        <div style={{ fontSize: "0.5rem", letterSpacing: "0.38em", color: T.sub, marginBottom: 5 }}>
                              {s.mode} {s.modifiers.length > 0 ? `| ${s.modifiers.join(" ")}` : ""}
                        </div>
                        <h1 style={{ margin: 0, fontSize: "2rem", letterSpacing: "0.14em", fontWeight: 900, color: T.txt, animation: s.timedOut ? "glitch 0.18s steps(2) 7" : "none" }}>WORDLE<span style={{ color: T.lieText }}>?</span></h1>
                        <div style={{ marginTop: 12, fontSize: urgent ? "1.85rem" : critical ? "1.35rem" : "1.05rem", fontWeight: 900, letterSpacing: "0.22em", color: timerCol, fontVariantNumeric: "tabular-nums", transition: "font-size 0.5s, color 0.5s", animation: s.timedOut ? "glitch 0.15s steps(2) 6" : urgent ? "timerPanic 0.5s ease-in-out infinite" : critical ? "timerPulse 1s ease-in-out infinite" : "none" }}>
                              {timerDisp}
                        </div>
                  </header>

                  <div style={{ height: 36, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.68rem", letterSpacing: "0.14em", fontWeight: "bold", color: msgColor, opacity: s.message ? 1 : 0, transition: "opacity 0.25s", animation: s.timedOut ? "glitch 0.2s steps(2) 5" : "none" }}>
                        {s.message || " "}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: 16, animation: s.timedOut ? "gridPanic 0.14s steps(1) 9 forwards" : "none" }}>
                        {Array(totalRows).fill(null).map((_, visualRi) => {
                              const absoluteRi = startIndex + visualRi;
                              const g = displayGuesses[visualRi];
                              const cur = absoluteRi === s.guesses.length && !s.over && !s.endlessWonTrigger;
                              const shk = s.shakeRow === absoluteRi;
                              const letters = g ? g.w.split("") : cur ? s.input : Array(WL).fill("");

                              const states = g ? g.disp : Array(WL).fill(null).map((_, ci) => letters[ci] ? (cur && s.hintedPositions.includes(ci) ? CH : CF) : CE);
                              const forceRed = s.timedOut && !!g;

                              const isHidden = s.modifiers?.includes("FLASHLIGHT") && g && (s.guesses.length - absoluteRi > 2);

                              return (
                                    <div key={absoluteRi} style={{ display: "flex", gap: 6, animation: shk ? "shake 0.45s ease" : "none" }}>
                                          {Array(WL).fill(null).map((_, ci) => (
                                                <div key={ci} style={{
                                                      ...tileSt(states[ci], forceRed, isHidden),
                                                      animation: forceRed ? `tileAlert ${0.12 + ci * 0.06}s ease forwards` : (g && g.lieRevealAt && g.lieRevealAt[ci] !== null) ? `failingLight ${12 + ci * 2}s ${ci * 2 + 3}s infinite` : "none",
                                                }}>
                                                      {letters[ci] || ""}
                                                </div>
                                          ))}
                                    </div>
                              );
                        })}
                  </div>

                  {!s.over && !s.endlessWonTrigger && (
                        <div style={{ marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
                              <button type="button" onClick={() => { sfx.hint(); dispatch({ type: "HINT" }); }} disabled={s.hintsLeft <= 0 || s.input.every(c => c !== "")} style={{ background: "transparent", border: `1px solid ${s.hintsLeft > 0 ? T.hint : T.dim}`, color: s.hintsLeft > 0 ? T.hintTxt : T.sub, fontFamily: "'Courier New'", fontSize: "0.62rem", letterSpacing: "0.18em", padding: "7px 16px", cursor: s.hintsLeft > 0 && s.input.some(c => c === "") ? "pointer" : "not-allowed", textTransform: "uppercase", opacity: s.hintsLeft > 0 && s.input.some(c => c === "") ? 1 : 0.38, transition: "opacity 0.2s", borderRadius: "2px" }}>
                                    hint [{s.hintsLeft} left]
                              </button>
                        </div>
                  )}

                  <div style={{ display: "flex", flexDirection: s.modifiers?.includes("SCRAMBLE") ? "row" : "column", flexWrap: "wrap", justifyContent: "center", gap: 6, width: "100%", maxWidth: 450, padding: "0 8px" }}>
                        {s.modifiers?.includes("SCRAMBLE") ? (
                              <>
                                    {s.scrambleKb.map(k => <button key={k} onClick={() => press(k)} style={keySt(k)}>{k}</button>)}
                                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", gap: 6, marginTop: 4 }}>
                                          <button onClick={() => press("ENTER")} style={keySt("ENTER")}>ENTER</button>
                                          <button onClick={() => press("DEL")} style={keySt("DEL")}>DEL</button>
                                    </div>
                              </>
                        ) : (
                              KB_STD.map((row, i) => (
                                    <div key={i} style={{ display: "flex", justifyContent: "center", gap: 5 }}>
                                          {row.map(k => <button key={k} onClick={() => press(k)} style={keySt(k)}>{k}</button>)}
                                    </div>
                              ))
                        )}
                  </div>

                  {s.over && (
                        <div style={{ display: "flex", gap: 20, marginTop: 22 }}>
                              <button onClick={() => dispatch({ type: "START", mode: s.mode, modifiers: s.modifiers })} style={{ padding: "10px 30px", background: "transparent", border: `1px solid ${T.brd}`, color: T.sub, fontFamily: "'Courier New'", fontSize: "0.66rem", letterSpacing: "0.22em", cursor: "pointer" }}>PLAY AGAIN</button>
                              <button onClick={() => dispatch({ type: "QUIT" })} style={{ padding: "10px 30px", background: "transparent", border: `1px solid ${T.dim}`, color: T.txt, fontFamily: "'Courier New'", fontSize: "0.66rem", letterSpacing: "0.22em", cursor: "pointer" }}>MAIN MENU</button>
                        </div>
                  )}

                  <style>{`
        @keyframes shake { 0%,100%{transform:translateX(0)} 15%{transform:translateX(-8px)} 35%{transform:translateX(8px)} 55%{transform:translateX(-5px)} 75%{transform:translateX(4px)} 90%{transform:translateX(-2px)} }
        @keyframes failingLight { 0%,96%,100%{opacity:1;filter:brightness(1)} 96.5%{opacity:0.94} 97.0%{opacity:1} 97.5%{opacity:0.98;filter:brightness(0.9)} 98.0%{opacity:1} }
        @keyframes timerPulse { 0%,100%{opacity:1} 50%{opacity:0.45} }
        @keyframes timerPanic { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.2;transform:scale(1.12)} }
        @keyframes tileAlert { 0%{filter:none} 20%{filter:brightness(5) sepia(1) hue-rotate(-50deg)} 45%{filter:none} 65%{filter:brightness(3) sepia(1) hue-rotate(-40deg)} 85%{filter:none} 100%{filter:brightness(0.5) sepia(1) hue-rotate(-50deg)} }
        @keyframes gridPanic { 0%{transform:translate(0,0)} 11%{transform:translate(-10px,5px)} 22%{transform:translate(10px,-5px)} 33%{transform:translate(-7px,7px)} 44%{transform:translate(8px,-4px)} 55%{transform:translate(-4px,4px)} 66%{transform:translate(5px,-2px)} 77%{transform:translate(-2px,3px)} 88%{transform:translate(2px,-1px)} 100%{transform:translate(0,0)} }
        @keyframes glitch { 0%{transform:skewX(0deg);filter:none} 25%{transform:skewX(-14deg);filter:hue-rotate(90deg) brightness(2)} 50%{transform:skewX(9deg);filter:hue-rotate(190deg)} 75%{transform:skewX(-5deg);filter:brightness(3)} 100%{transform:skewX(0deg);filter:none} }
        @keyframes screenShudder { 0%,100%{transform:translate(0,0)} 25%{transform:translate(-1px,1px)} 50%{transform:translate(1px,0)} 75%{transform:translate(-1px,-1px)} }
        @keyframes flashOut { 0%{opacity:0.95} 20%{opacity:0.75} 45%{opacity:0.45} 70%{opacity:0.18} 100%{opacity:0} }
        @keyframes strobeOut { 0%,15%,30%,45%,60%,75%,90%{opacity:0.6} 7%,22%,37%,52%,67%,82%,97%{opacity:0} 100%{opacity:0} }
        .to-flash { position:fixed;inset:0;background:rgba(200,0,0,0.9);z-index:9997;animation:flashOut 1.8s ease-out forwards;pointer-events:none; }
        .to-strobe { position:fixed;inset:0;background:rgba(255,80,80,0.7);z-index:9996;animation:strobeOut 0.9s steps(1) forwards;pointer-events:none; }
      `}</style>
            </div>
      );
}