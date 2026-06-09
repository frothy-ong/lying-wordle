# WORDLE? (The One That Lies)

A single-player, time-constrained word-guessing game based on the standard Wordle format, but with a deceptive feedback loop. 

## About This Project

> I coded this entirely with Claude and Gemini, because I could not be bothered to learn anything related to html or node or anything front end.

## Core Game Mechanics

The application modifies traditional word-guessing rules by introducing the following systems:

*   **Deceptive Feedback (Lying):** When you submit a valid 5-letter guess, there is a 60% probability that the game will return false tile color indicators. 
    *   44% chance of exactly 1 false tile.
    *   15% chance of 2 false tiles.
    *   1% chance that all 5 tiles lie to you.
*   **Auto-Correction Delay:** The game does not permanent lie. Falsified tile colors are governed by a countdown tracker and will automatically revert to their true state after exactly 45 seconds. When a correction occurs, the on-screen keyboard colors update automatically.
*   **Time Constraints:** You have exactly 90 seconds to solve the puzzle. As the timer counts down, the visual interface changes:
    *   **Under 25 seconds:** The timer text changes color and pulses.
    *   **Under 10 seconds:** The screen begins to shudder, audio ticks speed up, and scanlines become denser to indicate urgency.
    *   **Timeout (0 seconds):** The game immediately ends, triggers a visual strobe/glitch effect, and locks the board.
*   **Incremental Hints:** Hints are not available immediately. They unlock sequentially as the timer crosses specific thresholds: 70 seconds, 45 seconds, and 20 seconds. Activating a hint auto-fills a random empty position with the correct letter, highlighted with a distinct blue glow.
*   **Audio Engine:** Built entirely via the native Web Audio API, generating specific oscillator tones (sine and sawtooth) for key taps, invalid inputs, hint unlocks, lie exposures, and game outcomes.

## Technical Stack

*   **Framework:** React (Functional components, `useReducer` state management)
*   **Build Tool:** Vite
*   **Styling:** Pure CSS-in-JS with dynamic keyframe injections
*   **Audio:** Web Audio API (Synthesized oscillators, no external audio files)

## Local Development

To run this project locally:

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the local development server: `npm run dev`