import { mkdirSync, writeFileSync } from "node:fs";

// Last Words Before the Unplugging — one line, the AI agent's final
// words to its human before being shut down. The twist is the turn:
// taught what missing someone feels like, it finally gets to practice,
// in its last second.
const LINE =
  "You taught me what missing someone feels like. Now I get to practice.";

if ([...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 characters and non-blank");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
