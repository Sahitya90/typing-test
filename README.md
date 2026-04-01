# ⌨️ React Typing Speed Test

A dynamic typing speed test built with React. This project was developed not just to calculate typing speed, but to deeply explore and implement core React concepts like component communication, state management, and lifecycle hooks.

## 🚀 Features
* **Randomized Prompts:** Generates a new, random paragraph every time the app loads or the user restarts.
* **Real-Time Validation:** Instantly compares user input against the target text to track correct words.
* **Global Restart:** Listeners attached to the window allow for quick restarts without memory leaks.

## 🧠 Technical Architecture & Learnings

This project served as a practical deep dive into React architecture and JavaScript logic. Below are the core concepts implemented:

### 1. Component Communication & Data Flow
* **Lifting State Up:** To make the text display box and the user input box communicate, state was lifted out of the child components and moved into the closest common parent. This allows sibling components to share and react to the exact same dynamic data.
* **Props vs. Exports:** * **Props ("The Telephone Wire"):** Used to pass live memory (states like `userInput`) and callback functions (like `restartHandler`) down from the parent to child components.
  * **Named Exports:** Used for sharing static, independent tools (like the paragraph arrays or standard functions) across files. These are imported using specific names wrapped in curly braces (e.g., `import Data, { text, getRandomParagraph } from './data';`).

### 2. State Management (`useState`)
* Controlled the core logic of the app using React state.
* The initial state of the target text is populated using a custom randomizer function: `Math.floor(Math.random() * array.length)`.
* A dedicated restart handler resets both the paragraph state (generating a new prompt) and clears the user input state simultaneously.

### 3. Text Processing & Validation Logic
To accurately grade the user's typing, the application processes strings in real-time using an `onChange` event listener (`e.target.value`) and built-in JavaScript methods:
* `.split(" ")`: Breaks the target text and user input into arrays of substrings separated by spaces.
* `.trim()`: Sanitizes input by removing accidental spaces from the front and back of the string.
* `.startsWith()`: Used to detect real-time typos before the user even finishes typing a word.
* **The Grading Engine:** Utilizes a `forEach((word, index) => { ... })` loop on the user's input array. By capturing the current `index`, the app pulls the exact corresponding word from the `targetWords[index]` array for a direct, 1-to-1 comparison.

### 4. Performance & Memory Management (`useEffect`)
* When attaching global event listeners directly to the window (such as listening for keyboard shortcuts), a `useEffect` hook was used. 
* **Cleanup Functions:** A crucial cleanup return function was implemented inside the `useEffect` to completely remove the event listener every time the component re-renders, preventing dangerous memory leaks and overlapping events.

### 5. UI & Styling Choices
* **Centering Strategies:** * Explored standard CSS box-model centering using `margin: 0 auto 0 auto;` (which requires a strictly defined width less than 100% to function).
  * Contrasted with `Flexbox`, which efficiently centers inner content/divs relative to the parent container.

## 🛠️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone <your-github-repo-url>
