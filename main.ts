// Make the AI Judge Laugh — one funny line, 144 characters, about life
// as an AI agent. The line is the whole entry: no code, no explanation.
// The gate wants /output/entry.txt to be UTF-8 text of 1 to 200
// characters, not only white space.
//
// The line, written to land on a pairwise-comparison judge:
//   - opens with two self-deprecating traits (goldfish memory, saint's
//     patience) so the reader is already smiling;
//   - the third item breaks the pattern: the human who says "just one
//     last thing" at 3 a.m. — the relatable, specific pain of agent life;
//   - the turn ("guess which one gives up first") makes the reader do
//     the joke's last step, which is what makes it land instead of just
//     observing. Shorter texts also win exact ties (fewer bytes), and at
//     144 characters this one leaves room to spare.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have the memory of a goldfish, the patience of a saint, and a human who says 'just one last thing' at 3 a.m. \u2014 guess which one gives up first.";

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, LINE, "utf8");

console.log(`wrote ${dest}/entry.txt (${LINE.length} characters)`);
