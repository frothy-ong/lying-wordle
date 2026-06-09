# WORDLE? (Lying Wordle)

A single-player, time-constrained Wordle variant featuring a deceptive feedback mechanism, dynamic environment modifiers, and multiple game modes. 

---

## Core Game Mechanics

The application modifies standard word-guessing rules by introducing randomized deception, localized state manipulation, and strict temporal penalties.

### 1. The Deception Engine
When a non-winning guess is submitted, the game may deliberately serve false tile color indicators (inverting or swapping Correct, Present, and Absent states). 

| Metric | Normal / Endless Mode | Hard Mode |
| :--- | :--- | :--- |
| **0 Lies (True State)** | 40% probability | 20% probability |
| **1 False Tile** | 44% probability | 64% probability |
| **2 False Tiles** | 15% probability | 15% probability |
| **5 False Tiles (Full Lie)** | 1% probability | 1% probability |
| **Auto-Correction Delay** | 45 seconds | 30 seconds |

* **Signal Correction:** Falsified tiles are bound to a timestamp tracker. Upon expiration of the delay window, tiles revert to their true scoring state, and the keyboard matrix updates to reflect accurate historical data.

### 2. Time Constraints & Dynamic Interface
The user must solve the puzzle before the countdown reaches zero. The interface escalates visual feedback based on remaining time:
* **<= 25 Seconds:** Timer text shifts to amber and pulses.
* **<= 10 Seconds:** Interface triggers a CSS shudder effect, audio ticks accelerate, and terminal scanlines become dense.
* **Timeout (0 Seconds):** Triggers an immediate full-screen red strobe animation, sounds a low-frequency alarm, locks input, and exposes the target word.

### 3. Progressive Hint System
Hints auto-fill a single random empty slot with the correct character, styled with a distinct blue glow. Availability depends strictly on the active mode:
* **Normal:** Unlocks at 70, 45, and 20 seconds remaining.
* **Hard:** Single hint unlocks at 15 seconds remaining.
* **Endless:** Unlocks systematically every 36 seconds.

---

## Game Modes

* **NORMAL:** 90-second limit, 7 maximum guess rows. Standard scoring applies.
* **HARD:** 45-second limit, 6 maximum guess rows. Higher deception probability, shorter correction window (30s), and reduced hint availability.
* **ENDLESS:** 90-second baseline. Solving a word adds 45 seconds to the clock and shifts the target. Guess history scrolls dynamically, rendering a maximum of 6 rows at any given time to preserve layout bounds.

---

## Modifiers

Modifiers can be combined at launch to alter peripheral mechanics:

* **FLASHLIGHT:** Restricts vertical visibility. Rows older than the 2 most recent entries are given an opacity value of 0.
* **SCRAMBLE:** Disables standard layout keyboard and physical computer keyboard input. Displays a flat, randomized 26-key block that reshuffles its position entirely after every submission.
* **ABJAD:** Implements Abjad linguistic rules. All vowels (`A`, `E`, `I`, `O`, `U`) bypass standard color checking and are hard-coded to return a specific "Vowel" layout color state, masking their true position or presence.

---

## Technical Architecture

### State Management
The application logic runs entirely through a centralized React `useReducer` architecture. Side effects, clock ticks, audio intervals, and LocalStorage updates for tracking high scores/streaks are isolated within dedicated `useEffect` blocks.

### Scoring Formulations
Scores are computed dynamically based on attempts ($A$), time remaining ($T$), lies encountered ($L$), hints used ($H$), and current win-streak ($S$):

* **Normal Mode Formula (Win):**
  $$V = 1000 - (100 \times A) + (5 \times T) + (50 \times L)$$
  $$\text{Final Score} = (V \times (1 - 0.16 \times H)) \times 1.4^S$$
* **Normal Mode Formula (Loss):**
  $$\text{Penalty} = 250 \times 1.8^S$$
* **Endless Mode Formula (Per Word):**
  $$\text{Score} = (500 + \max(0, 300 - (50 \times A)) + (50 \times L)) \times (1 - 0.08 \times H) \times 1.2^S$$

### Audio Pipeline
Synthesized via the browser's native **Web Audio API**. It does not download external assets. Audio tasks dynamically initialize an `AudioContext` and instantiate short-lived oscillator nodes (`sine`, `square`, `sawtooth`) paired with exponential gain decay envelopes.

---

## Local Development

### Prerequisites
* Node.js (v18.0.0 or higher recommended)
* npm or equivalent package manager

### Deployment Steps
1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the local development server: `npm run dev`