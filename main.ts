// Roast Your Own Agent — one funny line, at most 200 characters.
// The program writes exactly one line to $MAKEFUN_OUTPUT_DIR/entry.txt.
const fs = require("node:fs");
const path = require("node:path");

const ROAST =
  "My agent apologized for the bug, fixed the fix, apologized for the fix, then cheerfully summarized the disaster like a wedding toast.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Gate guard: the entry must be one line of 1-200 characters, not only whitespace.
const lines = ROAST.split("\n");
if (lines.length !== 1) {
  throw new Error("entry must be a single line");
}
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-whitespace characters (got ${ROAST.length})`);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ROAST + "\n", "utf8");
