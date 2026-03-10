// union all file into one

const path = require("path");
const fs = require("fs");

const ROOT_DIR = "temp/slug";
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

function main() {
  // let content;
  // const files = readCssFiles(ROOT_DIR);
  // for (file of files) {
  //   content = content + fs.readFileSync(file, "utf8");
  // }
  // try {
  //   fs.writeFileSync("temp/slug/union.css", content, "utf-8");
  //   console.log("done");
  // } catch (error) {
  //   console.error(error);
  // }
  const content = fs
    .readFileSync(path.resolve("temp/slug/1.css"), "utf8")
    .split("\n");
  let cnt = 0;
  for (const pattern of content) {
    ++cnt;
    console.log(`${cnt}: ${pattern}`);
  }
}

if (require.main === module) {
  main();
}
