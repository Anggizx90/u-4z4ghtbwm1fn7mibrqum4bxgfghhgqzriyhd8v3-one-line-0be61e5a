import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), "I downloaded a meditation app to calm down, and now my anxiety has push notifications.", "utf8");
