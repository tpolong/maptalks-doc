# AGENTS.md — maptalks-docs

面向 **maptalks 新引擎**（`maptalks` + `@maptalks/gl-layers`）的中英双语开发者文档站，基于 VitePress 静态构建。内容四块：**SDK 指南 / 样式指南 / API 参考 / 可运行示例**（约 390 个）。构建产物可部署到任意静态托管（当前演示站 `https://tpolong.github.io/`）。

## 常用命令

```bash
pnpm install        # 安装依赖
pnpm dev            # 本地开发，默认 http://localhost:5173
pnpm build          # 生产构建，输出到 .vitepress/dist/
pnpm preview        # 本地预览构建产物
```

- 示例库大，构建内存不足时用 `NODE_OPTIONS=--max-old-space-size=8192 pnpm build`。
- 包管理器为 **pnpm**（仓库有 `pnpm-lock.yaml`、`pnpm-workspace.yaml`）。

## 关键配置（改前先看这里）

`.vitepress/config.ts` 是站点配置唯一入口：

- `title: "maptalks"`，`srcDir: "docs"`（内容目录，不是根）。
- `locales`：`root` = 简体中文（zh-CN），`en` = English（en-US）。**中英导航/侧边栏以内联数组定义在 config.ts**（`zhSidebarGuide` / `zhSidebarApi` / `enSidebarGuide` / `enSidebarApi`），改导航或侧边栏在 config.ts 里改，不要另起文件。
- `vite.optimizeDeps.exclude`：已排除 `maptalks`、`gl-layers`、`mt.gui`、`draco`、`proj4`、`maptalks-gl` 等裸模块。**新增示例用到的裸依赖时，必须同步加入该 exclude 列表**，否则 Vite 会当作本地依赖预打包，导致浏览器里 import map 解析失败。

## 目录结构

```
maptalks-docs/
├─ docs/                       # 内容源（srcDir）
│  ├─ guide/                   # SDK 指南 + 样式指南（中文）
│  │  └─ style/                # 样式指南（symbols/material/filter/function-type + 17 个 plugin-*.md）
│  ├─ api/                     # API 参考 + includes/ 共享片段（通过 <!--@include:--> 引用）
│  ├─ examples/                # 示例中心
│  │  ├─ taxonomy.ts           # 分类树的一级/二级分组顺序与中英标签（唯一数据源）
│  │  ├─ examples.data.ts      # 扫描 docs/public/examples 的加载器
│  │  ├─ ExampleList.vue       # 列表视图（搜索 / 分类树 / 卡片）
│  │  ├─ ExampleRepl.vue       # REPL 在线运行（import map 核心）
│  │  └─ index.md              # 示例中心页
│  ├─ public/examples/         # 示例源码 + 资源（3 级目录：一级分类/二级分类/示例）
│  ├─ public/lib/              # 本地 ESM 库（regl-esm.mjs、mt.gui.js）
│  ├─ public/thumbnails/       # 示例缩略图
│  └─ en/                      # 英文镜像（结构与 docs/ 完全对应）
├─ .vitepress/
│  ├─ config.ts                # 站点配置（见上）
│  └─ theme/                   # 自定义主题（custom.css、index.ts）
└─ scripts/                    # migration/校验脚本（migrate-plugin-docs.py、verify-migrated-pages.cjs）
```

## 内容撰写约定

- **中英成对**：页面都要「中文一份 + `docs/en/` 镜像一份」。改 / 新增内容时同步更新英文版，保持结构、术语一致。
- **指南页**：普通 Markdown，可带可选 frontmatter（如 `title`）。
- **API 页**：`docs/api/*.md` 中复用共享片段用 `<!--@include: ./includes/xxx.md -->`（VitePress include 语法），不要把公共内容复制多份。
- **样式指南**：`docs/guide/style/`，渲染插件每页一个 `plugin-*.md`。
- **链接**：站内用绝对路径（`/guide/intro`、`/api/vector-tile-layer`），示例页路由为 `/examples/`。

## 示例与 REPL（重要，改示例前必读）

- 示例位于 `docs/public/examples/<一级分类>/<二级分类>/<示例>/`，要求目录下**必须有 `index.html`**。**目录结构即示例中心的分类树**，一级分类 8 个：`map` / `tile` / `vector2d` / `vt` / `glvec` / `gltf` / `scene3d` / `analysis`（加载器按目录自动遍历）。
- 分类树的分组顺序与中英标签在 `docs/examples/taxonomy.ts`：新增示例目录后到那里补一条二级记录；漏补也会按目录名兜底显示，不会丢示例。
- `docs/examples/examples.data.ts` 只产出**元数据** `{ path, category, subcategory, name, files }`，其中 `files` 是该目录下的**单层文件名数组**（不含子目录、**不含文件内容**）。
  - 示例源码由 REPL 在运行时按 `/examples/<path>/<文件名>` 按需 fetch（带内存缓存）。
  - **不要把文件内容写回 data**：一旦内联，首屏 chunk `examples_index.md.*.js` 会从 61KB 涨回 2MB。
- `docs/examples/index.md` frontmatter 固定为 `layout: page` + `sidebar: false` + `aside: false`；带 hash（如 `#scene3d/tiles3d/load`）时渲染 REPL，否则渲染列表。
- **REPL import map 三段式**（在 `ExampleRepl.vue` 内）：
  1. maptalks 系大包走 **unpkg 原生 ESM**（`maptalks`、`@maptalks/gl-layers`、`@maptalks/gl`、vt / 3dtiles / gltf / analysis / video 等，版本已 pin）。
  2. 小依赖走 **esm.sh**（`gl-matrix`、`earcut`、`color` 等）。
  3. `@maptalks/regl` 映射到**本地** `/lib/regl-esm.mjs`（因为 npm 的 regl 无 `createREGL` 命名导出）。
  - **新增裸依赖**：在 `imports` 加映射 + 在 `config.ts` 的 `vite.optimizeDeps.exclude` 加该模块（见上）。
- 示例代码里 `{res}` / `{urlTemplate}` / `{attribution}` 是**占位符**，由 `ExampleRepl.vue` 运行时替换；`{res}` → `/examples/resources`。不要直接改掉这些占位符逻辑。
- 示例常依赖**外部瓦片/数据服务与公开测试 token**（Mapbox、MapTiler、高德、dvgis 等），部分服务当前不可达（如 `tiles.maptalks.com`）。REPL 渲染失败优先排查是否外部服务/网络问题，再怀疑示例代码。
- 注意：源码示例内嵌的公开测试 token 曾触发 GitHub secret-scanning 拦截推送，调整示例时如无必要不要把新密钥写死。

## 构建与部署

1. `pnpm build` → 静态站 `.vitepress/dist/`。
2. 部署到静态托管（GitHub Pages / Vercel / Netlify 等）。
3. 用 GitHub Pages 时在仓库根放 `.nojekyll` 文件以跳过 Jekyll 处理。

## Git 约定

- 仓库根即 `D:\code\maptalks-docs`，分支 `main`，`origin` = `https://github.com/tpolong/maptalks-doc.git`。
- 提交作者：`Tangweilong <tpolong@users.noreply.github.com>`。
- `.gitignore` 忽略 `node_modules/`、`.vitepress/dist/`、`.vitepress/cache/`、`docs/.vitepress/`（`srcDir` 产生的缓存）、日志与 IDE/OS 杂项。`dist` 与依赖不要提交。
- 提交信息用简洁中文（如 `docs: ...`、`fix: ...`、`chore: ...`）。

## 参考

- 源码为主：`maptalks.js` 源码位于父目录 `D:\code\maptalks\maptalks.js\packages`（只读，API 事实来源）。
- 迁移/调研素材在 `D:\code\maptalks\progress\`（如 `api-notes-*.md`、`style-guide-*.md`、`new-site-plan.md`），可作为内容参考。
