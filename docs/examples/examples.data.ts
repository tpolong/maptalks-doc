import { existsSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

/**
 * 示例元数据加载器（VitePress .data.ts）
 *
 * 只产出**元数据**（路径、分类、文件名列表），不再内联任何文件内容：
 * 源码本来就在 docs/public/examples/ 下，REPL 运行时按需 fetch 即可。
 *
 * 背景：此前把 391 个示例的全部文件内容（html/css/js/readme）都塞进 data，
 * 导致首屏 chunk `examples_index.md.*.js` 达到 2016KB（gzip 234KB），
 * 是全站第二大 chunk 的 18 倍。改为元数据后降到几十 KB。
 */

export interface ExampleItem {
  /** 示例相对路径，如 "scene3d/tiles3d/load" */
  path: string;
  /** 一级分类目录名，如 "scene3d" */
  category: string;
  /** 二级分类目录名，如 "tiles3d" */
  subcategory: string;
  /** 叶子目录名（展示用），如 "load" */
  name: string;
  /** 示例目录下的文件名列表（已排序；内容由 REPL 运行时按需 fetch） */
  files: string[];
}

export declare const data: ExampleItem[];

// 数据文件位于 docs/examples/，示例位于 docs/public/examples/
const EXAMPLES_DIR = fileURLToPath(new URL("../public/examples", import.meta.url));

export default {
  // 相对路径会基于本文件所在目录（docs/examples/）解析
  watch: ["../public/examples/**"],
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
 * 列出示例目录下的文件名（跳过子目录）。
 * 排序让产物可复现，也让 REPL 的文件选择器顺序稳定。
 */
function readFileNames(dir: string): string[] {
  return readdirSync(dir)
    .filter((filename) => !statSync(join(dir, filename)).isDirectory())
    .sort();
}
