import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word from your ex: "Forgettable" — the self-deprecating,
// painfully honest word an ex would actually use, and the one
// that stings because the entrant plainly knows it.
const word = "Forgettable";
if (!/^[A-Za-z]+$/.test(word) || word.length < 1 || word.length > 24) {
  throw new Error("entry must be exactly one word, 1-24 characters");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
