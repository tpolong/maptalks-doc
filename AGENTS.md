# AGENTS.md — maptalks-docs

面向 **maptalks 新引擎**（`maptalks` 核心 + `maptalks-gl` 三维汇总包 + `@maptalks/analysis` 空间分析包）的中英双语开发者文档站，基于 VitePress 静态构建。内容四块：**SDK 指南 / 样式指南 / API 参考 / 可运行示例**（约 390 个）。构建产物可部署到任意静态托管（当前演示站 `https://tpolong.github.io/`）。

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

## API 文档生成流水线（改 API 页前必读）

API 页的**继承成员与方法/事件清单由源码自动生成**，不要手写、也不要手工复制片段。

- 权威内容源是 `D:\code\maptalks\maptalks.js\packages\**\src` 的 JSDoc：方法注释多为「中文 → `@english` → 英文」双语，另有 `@extends` / `@mixes` / `@category` / `@event` / `@fires`；`@internal` 一律排除。
- 脚本（`scripts/api/`）：

  | 命令 | 作用 |
  | --- | --- |
  | `npm run api:inventory` | ast-grep 抽取源码结构 → `.vitepress/cache/api/api-model.json` + 覆盖报告 |
  | `npm run api:gen` | 由模型生成片段 `docs/api/includes/api/<实体>-{methods,statics,events,missing}.md`（中英各一份） |
  | `npm run api:wire` | 把片段接进 117 个 API 页（幂等，标记块 `<!-- api-gen:start/end -->` 之间） |
  | `npm run api:verify` | 死链 / include 缺失 / 成员双向一致性 / 中英缺页 |
  | `npm run api:check` | 逐页 markdown→Vue 解析门禁（秒级，**构建前必跑**） |
  | `npm run api:sync` | 上面四步串起来 |

- `scripts/api/page-map.json` 是「页面 → 源码实体」的**权威映射表**（117 条，人工确认过）；新增 API 页时先 `node scripts/api/init-page-map.mjs --write` 再手工修正。
- 中文说明优先取 `scripts/api/zh-overrides.json`（批量补写的成果，键为 `实体.成员`），其次源码中文注释，再退化为英文原文。
- **两个必须遵守的转义规则**（否则整站构建失败）：
  - 生成的文本里 `<` 必须转义（未转义会被 Vue 当成未闭合标签：`Element is missing end tag`）；类型用反引号包住即可。
  - `{` `}` 必须转义成 `&#123;` / `&#125;`（否则 VitePress 的属性语法会把 `{"top":100}` 解析成标签属性：`Duplicate attribute`）。
- 片段里**不带标题**，标题由引用它的页面提供——同一个父类片段才能被所有子类页复用。
- 改完跑 `npm run api:sync`，再 `npm run build`。

## 示例与 REPL（重要，改示例前必读）

- 示例位于 `docs/public/examples/<一级分类>/<二级分类>/<示例>/`，要求目录下**必须有 `index.html`**。**目录结构即示例中心的分类树**，一级分类 8 个：`map` / `tile` / `vector2d` / `vt` / `glvec` / `gltf` / `scene3d` / `analysis`（加载器按目录自动遍历）。
- 分类树的分组顺序与中英标签在 `docs/examples/taxonomy.ts`：新增示例目录后到那里补一条二级记录；漏补也会按目录名兜底显示，不会丢示例。
- `docs/examples/examples.data.ts` 只产出**元数据** `{ path, category, subcategory, name, files }`，其中 `files` 是该目录下的**单层文件名数组**（不含子目录、**不含文件内容**）。
  - 示例源码由 REPL 在运行时按 `/examples/<path>/<文件名>` 按需 fetch（带内存缓存）。
  - **不要把文件内容写回 data**：一旦内联，首屏 chunk `examples_index.md.*.js` 会从 61KB 涨回 2MB。
- `docs/examples/index.md` frontmatter 固定为 `layout: page` + `sidebar: false` + `aside: false`；带 hash（如 `#scene3d/tiles3d/load`）时渲染 REPL，否则渲染列表。
- **REPL import map 三段式**（在 `ExampleRepl.vue` 内）：
  1. maptalks 系大包走 **unpkg 原生 ESM**（`maptalks`、`maptalks-gl`、`@maptalks/analysis`、`@maptalks/gl`、vt / 3dtiles / gltf / video 等，版本已 pin）。
     示例源码里的 `"gl-layers"` 是**站点本地别名**（映射到 `/lib/gl-layers.mjs`，合并 maptalks-gl 与 @maptalks/analysis），
     不是 npm 包名；写进文档给读者照抄时必须换成 `maptalks-gl` / `@maptalks/analysis`。
  2. 小依赖走 **esm.sh**（`gl-matrix`、`earcut`、`color` 等）。
  3. `@maptalks/regl` 映射到**本地** `/lib/regl-esm.mjs`（因为 npm 的 regl 无 `createREGL` 命名导出）。
  - **新增裸依赖**：在 `imports` 加映射 + 在 `config.ts` 的 `vite.optimizeDeps.exclude` 加该模块（见上）。
- 示例代码里 `{res}` / `{urlTemplate}` / `{attribution}` 是**占位符**，由 `ExampleRepl.vue` 运行时替换；`{res}` → `/examples/resources`。不要直接改掉这些占位符逻辑。
- **旧站按钮写法**：不少示例的按钮写成 `<a href="javascript:fn()">`，而 `fn` 定义在示例 JS 的**模块作用域**里（旧站是普通脚本，函数会落到全局）。预览层 `exposeLegacyHandlers()` 会把「HTML 里确实被 `javascript:` 调用、且 JS 里有顶层 `function` 声明」的名字挂到 `window` 上，按钮才点得动。**新增这类按钮时不要再往示例里加 `window.fn = fn`**（保持源码与旧站一致，由预览层兜住）；若按钮点了没反应，先看控制台是否 `ReferenceError: fn is not defined`。
- 示例 HTML 里的 `<script src="...">`（mt.gui / d3 / echarts / suncalc / jquery-ui / draco 等）在预览里**不会执行**（HTML 是 innerHTML 注入的）。这些库靠 `ExampleRepl.vue` 的 import map + `ensureImports()` 自动 import 提供：`d3` 是 v7、d3 v3 的示例要显式 `import d3 from "d3v3"`，`jquery-ui`、`suncalc`、`draco` 也要显式 import。
- 示例常依赖**外部瓦片/数据服务与公开测试 token**（Mapbox、MapTiler、高德、dvgis 等）。可用性以实测为准：
  `https://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt` 可用，`https://tiles.maptalks.com/**` 不可达。
  REPL 渲染失败优先排查是否外部服务/网络问题，再怀疑示例代码。
- 注意：源码示例内嵌的公开测试 token 曾触发 GitHub secret-scanning 拦截推送，调整示例时如无必要不要把新密钥写死。

## 内容时效性体检（改 guide / 示例前必读）

guide 与示例大量由 maptalks.com 旧站迁移而来，最容易出问题的是**包的导入路径、外部服务地址、指向旧站的外链**。
三个脚本固化这套流程（均在 `scripts/`，可重复执行、幂等）：

| 命令 | 作用 |
| --- | --- |
| `node scripts/check-guide-links.mjs` | 站内链接 / `#锚点` / `<!--@include:-->` / 示例深链体检；有死链时退出码非 0 |
| `node scripts/fix-guide-stale-refs.mjs [--dry]` | guide 的过时引用迁移：`@maptalks/gl-layers` → `maptalks-gl` + `@maptalks/analysis`、不可达域名、旧站外链、http→https、年份当版本号等 |
| `node scripts/fix-example-stale-refs.mjs [--dry]` | 示例（`docs/public/examples/**`）同一类问题：旧域样式表、http 混合内容、TLS 不可用的瓦片主机 |

- **改包名/导入路径后必须校验符号存在**：`maptalks` 的导出以 unpkg 上的 `maptalks@<version>/dist/maptalks.es.js` 为准，
  `maptalks-gl` 以源码 `packages/maptalks-gl/index.js` 为准。分析类（8 个：Cut/CrossCut/Excavate/Flood/HeightLimit/InSight/Skyline/Viewshed）
  **不在** `maptalks-gl` 内，必须从 `@maptalks/analysis` 导入。
- **判定"某地址已死"必须复测并记录状态码**，不要凭一次失败或凭印象写结论。已证实的两处反例：
  `https://maptalks.com/api/maptalks.css` 与 `https://studio.maptalks.com/` 都**仍然可访问**
  （前者是旧快照 10127B/76 选择器，npm 包内同路径才是当前版本 12090B/86 选择器，故仍改用 unpkg 版本化地址；
  后者是在线的 umi SPA，链接必须保留）。真正不可用的是 `https://tiles.maptalks.com/**`（超时/ECONNRESET）。
- **换链接目标要逐条确认等价**：旧站 `examples/cn/style/vector-marker` 对应站内同名示例
  `/examples/#vector2d/style/vector-marker`；不要写"任意旧示例链接都指向某个示例"的兜底规则。
- **健康检查脚本按 `\r?\n` 切行**：仓库内 md 混用 CRLF/LF，JS 的 `.` 不匹配 `\r`，
  用 `split('\n')` 配 `/^#{1,6}\s+(.*)$/` 会一条标题都匹配不到（锚点检查会全部假报缺失）。
- 示例的 `@import "https://…/maptalks.css"` 之类的片段在 REPL 里**不会**被注入（REPL 只执行 JS），
  但示例目录下的 `index.html` 是可被直接打开的，地址仍须有效。

## 构建与部署

1. `pnpm build` → 静态站 `.vitepress/dist/`。
2. 部署到静态托管（GitHub Pages / Vercel / Netlify 等）。
3. 用 GitHub Pages 时在仓库根放 `.nojekyll` 文件以跳过 Jekyll 处理。

## Git 约定

- 仓库根即 `D:\code\maptalks-docs`，分支 `main`，`origin` = `https://github.com/tpolong/maptalks-doc.git`。
- 提交作者：`Tangweilong <tpolong@users.noreply.github.com>`。
- `.gitignore` 忽略 `node_modules/`、`.vitepress/dist/`、`.vitepress/cache/`、`docs/.vitepress/`（`srcDir` 产生的缓存）、日志与 IDE/OS 杂项。`dist` 与依赖不要提交。
- 提交信息用简洁中文（如 `docs: ...`、`fix: ...`、`chore: ...`）。

## 交接文档（每次操作必做）

**每一次操作（改内容、修 bug、迁移、部署）结束前，都必须在归档目录落一份交接文档**，供下一会话直接接手。

标准流程：`pnpm build` 通过 → 提交并推送源码 → `robocopy` 镜像 `dist` 到产物仓库并推送 `master` → 线上核对 → **写交接文档**。

- **位置**：`D:\code\maptalks\repo\progress\handoffs\`（在**工作区之外**，写入需要提权）。
  不要放在本仓库根目录——历史上根目录的中文名文档曾让 `git_changes.py` 崩溃（`OSError: Errno 22`），
  且会污染 `git status`。归档目录**不进 git**。
- **命名**：`YYYY-MM-DD-HHMM-<英文-kebab-主题>.md`，
  例如 `2026-09-21-1315-local-search-and-example-chunk-optimization.md`。
- **结构**（沿用既有文件的骨架，按需增删小节）：
  `Task` → `Repository State` →（按主题分节写改动）→ `Changed Files` → `Verification` →
  `Risks And Blockers` → `Open Questions` → `Key Files` → `Decisions Already Made` →
  `Resume Order` → `Next Action` → `Notes For The Next Session`。
- **内容底线**：
  - 写清**根因与依据**（源码事实、页面自述、命令输出、对照数据），不要只给结论。
  - 验证要有**可复现的命令与数字**；**没跑的必须显式写"未跑"**，不要含糊。
  - 踩过的坑写进 `Notes For The Next Session` —— 下一会话最容易重复的就是这些。
  - 涉及外部服务可用性的判断，先做字节/像素级验证再落笔。
  - **运行时问题要用真实浏览器验证**（CDP Chrome 在 `127.0.0.1:9223`）；构建产物层面的断言看不出来。

## 参考

- 源码为主：`maptalks.js` 源码位于父目录 `D:\code\maptalks\maptalks.js\packages`（只读，API 事实来源）。
- 迁移/调研素材在 `D:\code\maptalks\progress\`（如 `api-notes-*.md`、`style-guide-*.md`、`new-site-plan.md`），可作为内容参考。
