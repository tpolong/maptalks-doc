import { existsSync, readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

/**
 * 示例数据加载器（VitePress .data.ts）
 *
 * 扫描 docs/public/examples/（391 个示例），为每个示例（叶子目录）返回：
 *  - path：示例相对路径，如 "3d/3dtiles/load"
 *  - index.html 源码
 *  - 描述：优先 readme-cn.md / index_cn.md，其次 readme.md / index_en.md，再没有则为空
 *  - files：示例目录下所有文件内容（index.html / index.css / index.js / readme 等，
 *    不含子目录；resources 目录在顶层已排除），供 REPL 在线运行使用
 *
 * 参考官方文档站 docs/src/examples/components/examples.data.ts 的读取逻辑。
 */

export interface ExampleItem {
  /** 示例相对路径，如 "3d/3dtiles/load" */
  path: string;
  /** 四大分类：3d / basic / gltf / vector */
  category: string;
  /** 子分类目录名，如 "3dtiles" */
  subcategory: string;
  /** 叶子目录名（展示用），如 "load" */
  name: string;
  /** index.html 完整源码 */
  html: string;
  /** 描述文本（markdown 原文，截断在展示层处理） */
  description: string;
  /** 示例目录下所有文件的完整内容，key 为文件名（如 index.html / index.css / index.js） */
  files: Record<string, string>;
}

export declare const data: ExampleItem[];

// 数据文件位于 docs/examples/，示例位于 docs/public/examples/
const EXAMPLES_DIR = fileURLToPath(new URL("../public/examples", import.meta.url));

// 描述文件优先级：中文优先，其次英文
const DESCRIPTION_FILES = ["readme-cn.md", "index_cn.md", "readme.md", "index_en.md"];

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
          const indexHtml = join(dir, "index.html");
          if (!existsSync(indexHtml)) continue;
          items.push({
            path: `${category}/${subcategory}/${name}`,
            category,
            subcategory,
            name,
            html: readFileSync(indexHtml, "utf-8"),
            description: readDescription(dir),
            files: readExampleFiles(dir),
          });
        }
      }
    }
    return items;
  },
};

function readDescription(dir: string): string {
  for (const filename of DESCRIPTION_FILES) {
    const file = join(dir, filename);
    if (existsSync(file)) {
      return readFileSync(file, "utf-8");
    }
  }
  return "";
}

/**
 * 读取示例目录下所有文件内容（跳过子目录）。
 * 与官方 readExample 的递归实现等价：当前示例目录均为单层文件。
 */
function readExampleFiles(dir: string): Record<string, string> {
  const files: Record<string, string> = {};
  for (const filename of readdirSync(dir)) {
    const fullPath = join(dir, filename);
    if (statSync(fullPath).isDirectory()) continue;
    files[filename] = readFileSync(fullPath, "utf-8");
  }
  return files;
}
