import * as fs from "node:fs";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const entry = "One star: Earth's toilets need a pilot's licence, its summers melt my antennae, and its elevators play the same four notes forever, but the butter chicken reset my faith in carbon life.";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
