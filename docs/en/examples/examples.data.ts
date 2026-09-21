import { existsSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

/**
 * Example metadata loader (VitePress .data.ts)
 *
 * Produces **metadata only** (path, category, file-name list) and no longer inlines any
 * file content: the sources already live under docs/public/examples/, so the REPL can
 * fetch them on demand at runtime.
 *
 * Background: the loader used to inline every file of all 391 examples (html/css/js/readme)
 * into the data, which made the first-screen chunk `examples_index.md.*.js` 2016KB
 * (234KB gzipped) — 18x the next largest chunk. Metadata only brings it down to tens of KB.
 */

export interface ExampleItem {
  /** Example relative path, e.g. "scene3d/tiles3d/load" */
  path: string;
  /** Top-level category directory, e.g. "scene3d" */
  category: string;
  /** Sub-category directory, e.g. "tiles3d" */
  subcategory: string;
  /** Leaf directory shown in the UI, e.g. "load" */
  name: string;
  /** File names inside the example directory (sorted; contents are fetched by the REPL) */
  files: string[];
}

export declare const data: ExampleItem[];

// Data file lives in docs/en/examples/, examples live in docs/public/examples/ (shared)
const EXAMPLES_DIR = fileURLToPath(new URL("../../public/examples", import.meta.url));

export default {
  // Relative paths resolve against this file's directory (docs/en/examples/)
  watch: ["../../public/examples/**"],
  load(): ExampleItem[] {
    const items: ExampleItem[] = [];
    for (const category of readdirSync(EXAMPLES_DIR)) {
      const categoryDir = join(EXAMPLES_DIR, category);
      if (!statSync(categoryDir).isDirectory()) continue;
      for (const subcategory of readdirSync(categoryDir)) {
        const subDir = join(categoryDir, subcategory);
        if (!statSync(subDir).isDirectory()) continue;
        for (const name of readdirSync(subDir)) {
          const dir = join(subDir, name);
          if (!statSync(dir).isDirectory()) continue;
          if (!existsSync(join(dir, "index.html"))) continue;
          items.push({
            path: `${category}/${subcategory}/${name}`,
            category,
            subcategory,
            name,
            files: readFileNames(dir),
          });
        }
      }
    }
    return items;
  },
};

/**
 * List the file names inside an example directory (sub-directories are skipped).
 * Sorting keeps the build reproducible and the REPL file selector order stable.
 */
function readFileNames(dir: string): string[] {
  return readdirSync(dir)
    .filter((filename) => !statSync(join(dir, filename)).isDirectory())
    .sort();
}
