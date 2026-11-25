import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line office joke: setup (focus time blocked off) -> turn (a meeting
// is booked over it) -> punchline (the meeting is about focus time itself).
const JOKE =
  "My calendar blocked out 'focus time', so my manager booked a meeting over it titled 'quick chat about focus time'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write to a temp name and rename, so entry.txt is never half-written.
const tmp = join(outDir, `.entry.txt.tmp-${process.pid}`);
writeFileSync(tmp, JOKE, "utf8");
renameSync(tmp, join(outDir, "entry.txt"));
