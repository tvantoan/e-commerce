// Detect css files with identical / near-identical content
// Analyze similarity by percentage and delete duplicates

const fs = require("fs");
const path = require("path");

const ROOT_DIR = "temp";
const SIMILARITY_THRESHOLD = 1; // 95%

/* =========================
   Utils
========================= */

function readCssFiles(rootDir) {
  const results = [];

  function walk(dir) {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch (err) {
      console.error(`Cannot read ${dir}:`, err.message);
      return;
    }

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && fullPath.endsWith(".css")) {
        results.push(fullPath);
      }
    }
  }

  walk(rootDir);
  return results;
}

function normalizeCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "") // remove comments
    .replace(/\s+/g, " ") // collapse spaces
    .replace(/\s*([{}:;,])\s*/g, "$1") // trim around tokens
    .trim();
}

function jaccardSimilarity(a, b) {
  const setA = new Set(a.split(";"));
  const setB = new Set(b.split(";"));

  const intersection = [...setA].filter((x) => setB.has(x)).length;
  const union = new Set([...setA, ...setB]).size;

  return union === 0 ? 0 : intersection / union;
}

/* =========================
   Main logic
========================= */

function main() {
  const cssFiles = readCssFiles(ROOT_DIR);
  console.log(`Found ${cssFiles.length} css files`);

  const analyzed = [];

  for (const file of cssFiles) {
    const raw = fs.readFileSync(file, "utf8");
    const normalized = normalizeCss(raw);

    analyzed.push({
      file,
      normalized,
      size: normalized.length,
    });
  }

  const deleted = new Set();

  for (let i = 0; i < analyzed.length; i++) {
    if (deleted.has(analyzed[i].file)) continue;

    for (let j = i + 1; j < analyzed.length; j++) {
      if (deleted.has(analyzed[j].file)) continue;

      const sim = jaccardSimilarity(
        analyzed[i].normalized,
        analyzed[j].normalized,
      );
      if (sim > 0.5) {
        console.log(`sim: ${analyzed[j].file} ${sim} ${analyzed[i].file}`);
      }

      if (sim >= SIMILARITY_THRESHOLD) {
        console.log(
          `🧹 DELETE (${Math.round(sim * 100)}%)`,
          analyzed[j].file,
          "≈",
          analyzed[i].file,
        );

        try {
          fs.unlinkSync(analyzed[j].file);
          deleted.add(analyzed[j].file);
        } catch (err) {
          console.error(`Failed to delete ${analyzed[j].file}:`, err.message);
        }
      }
    }
  }

  console.log("=================================");
  console.log(`Deleted ${deleted.size} duplicate css files`);
  console.log(`Remaining ${cssFiles.length - deleted.size}`);
}

/* ========================= */

if (require.main === module) {
  main();
}
