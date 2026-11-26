import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = "I replied all by accident and gained 212 witnesses, which is the closest our office has come to transparency.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const characterCount = [...joke].length;
if (characterCount < 1 || characterCount > 200 || joke.trim().length === 0 || /[\r\n]/.test(joke)) {
  throw new Error("entry text must be one non-blank line of 1 to 200 characters");
}

mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, "entry.txt");
const temporary = `${target}.tmp`;
writeFileSync(temporary, joke, "utf8");
renameSync(temporary, target);
