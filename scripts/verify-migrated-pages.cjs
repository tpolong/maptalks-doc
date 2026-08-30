// 验证脚本：复现 vitepress 的 include 展开逻辑 + 用其 markdown-it 编译 13 个迁移页面
// 用法：cd /d/code/maptalks-docs && node scripts/verify-migrated-pages.cjs
const path = require("path");
const fs = require("fs");
const { createMarkdownRenderer } = require("vitepress");

const STYLE_DIR = path.resolve(__dirname, "../docs/guide/style");

// 复刻 vitepress node/chunk-DMuPggCS.js 的 processIncludes 逻辑
function processIncludes(srcDir, src, file) {
  const includesRE = /<!--\s*@include:\s*(.*?)\s*-->/g;
  return src.replace(includesRE, (m, m1) => {
    if (!m1.length) return m;
    const atPresent = m1[0] === "@";
    let includePath;
    if (atPresent) {
      includePath = path.join(srcDir, m1[m1[1] === "/" ? 2 : 1]);
    } else {
      includePath = path.join(path.dirname(file), m1);
    }
    try {
      let content = fs.readFileSync(includePath, "utf-8");
      return processIncludes(srcDir, content, includePath);
    } catch (e) {
      return m; // 与 vitepress 行为一致：找不到则保留原文
    }
  });
}

async function main() {
  const md = await createMarkdownRenderer(
    path.resolve(__dirname, ".."),
    {},
    "/"
  );
  const pages = fs
    .readdirSync(STYLE_DIR)
    .filter((f) => /^plugin-.+\.md$/.test(f))
    .sort();
  let fail = 0;
  for (const name of pages) {
    const file = path.join(STYLE_DIR, name);
    let src = fs.readFileSync(file, "utf-8");
    // 去掉 frontmatter（与 vitepress 一致：matter().content）
    const frontmatterMatch = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
    if (frontmatterMatch) src = src.slice(frontmatterMatch[0].length);
    const expanded = processIncludes(STYLE_DIR, src, file);
    // include 全部展开？
    const remaining = (expanded.match(/@include:/g) || []).length;
    let html = "";
    try {
      html = md.render(expanded);
    } catch (e) {
      fail++;
      console.log(`FAIL ${name}: markdown 编译异常: ${e.message}`);
      continue;
    }
    const hasResidual = /{@include|:::|\.\.\/filter|\.\.\/symbols|\.\.\/material|\.\.\/plugin-|\.\.\/api\//.test(
      expanded
    );
    console.log(
      `OK   ${name} | include 剩余:${remaining} | 语法残留:${hasResidual ? "有" : "无"} | HTML ${html.length}B`
    );
    if (remaining > 0 || hasResidual) fail++;
  }
  console.log(fail === 0 ? "\n全部通过" : `\n${fail} 个页面有问题`);
  process.exit(fail === 0 ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
