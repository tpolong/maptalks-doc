# API 文档生成流水线（skill）

把 `maptalks.js` 源码里的事实，**自动**变成文档站的 API 页面内容：继承方法、事件、参数与返回、中文说明。

- 适用：`docs/api/*.md`（117 个页面，中英双份）
- 事实来源：`D:\code\maptalks\maptalks.js\packages\**\src`（只读）
- 不适用：指南页、样式指南、示例——那些是手写内容

---

## 1. 一条命令跑完整条链路

```bash
npm run api:sync     # = inventory → gen → wire → verify → check
npm run build        # 再构建
```

只改文案时可用更短的组合：`npm run api:gen && npm run api:wire && npm run api:check`。

## 2. 四步各自干什么

| 步骤 | 脚本 | 输入 → 输出 |
| --- | --- | --- |
| ① 抽取 + 建模 | `inventory.mjs` | 源码 → `.vitepress/cache/api/api-model.json`、`api-coverage.txt` |
| ② 生成片段 | `gen-includes.mjs` | 模型 + `page-map.json` → `docs/api/includes/api/*.md`（中英各一份，205×2 个） |
| ③ 接线 | `wire-pages.mjs` | 片段 → 页面里的 `<!-- api-gen:start/end -->` 标记块（幂等） |
| ④ 门禁 | `verify.mjs` / `check-render.mjs` | 死链 / include / 成员双向一致 / 中英缺页；逐页 Vue 解析 |

配套资产（都在 `scripts/api/`）：

- `page-map.json` —— **页面 → 源码实体**的权威映射（117 条，人工确认过）。新增页面先跑 `node api/init-page-map.mjs --write` 生成初稿，再手工修正。
- `zh-overrides.json` —— 成员级中文说明（键 `实体.成员`）。生成器**优先**用它，其次源码里的中文 JSDoc，最后退化为英文原文。
- `zh-todo.mjs` / `zh-batches.mjs` / `zh-merge.mjs` —— 缺中文时的批量补写链路（见 §5）。

## 3. 抽取是怎么做的（ast-grep）

本机没有 TypeScript 编译器，所以用 **ast-grep（结构匹配）**：

```bash
ast-grep run -l ts --globs '!**/node_modules/**' -k method_definition --json=stream <packages>
```

要点：

- **类**必须按 kind 抽：`class_declaration` 与 `abstract_class_declaration` 是**两个不同的 kind**（`abstract class Control<T> extends …` 用模式匹配会漏）；mixin 工厂里的匿名类（`return class extends Base`）是 `class`（类表达式）。
- **成员**：`method_definition` / `public_field_definition` / `method_signature`；对象字面量的方法简写也是 `method_definition`。
- **命名空间**（`const GeoJSON = { … }`）用模式 `const $N = { $$$B }`，`$$$B` 的多重捕获就是它的**直接成员**（天然排除方法体内嵌套对象造成的噪音）；带类型注解的再用 `const $N: $T = { $$$B }`。
- **JS 包**（`analysis` / `layer-gltf` / `vt` / `gl` 的一部分）要再跑一遍 `-l js`。
- Node 里 `spawnSync('ast-grep', …, { stdio: ['ignore', fd, 'ignore'] })` 把 stdout 重定向到文件即可（沙箱禁止管道）。

**坑（都踩过）**：

1. **不要用 `range.byteOffset` 定位 JSDoc** —— 语义不可靠，会把文档块判丢；用 `range.start.line` 向上回溯。
2. `@event` 常写在 JSDoc 块**中间**，要找"包含该行的块"，不能找"上方以 `*/` 结尾的块"。
3. `@english` 是**双语分隔标记**不是标签，解析时先处理它，否则英文说明永远为空。
4. `@param` 可能是无花括号的 `@param p`：以 TS 签名的参数名为骨架，JSDoc 描述按名字或位置对齐。
5. 继承有 mixin 形态：`class Circle extends CenterMixin(Path)`、`extends JSONAble(Eventable(Handlerable(Class)))` —— 括号内的标识符也要算进父链；`extends maptalks.OverlayLayer` 要取**末段**。
6. 事件定义可能在没有任何类/方法的文件里（如 `map/handler/Map.GeometryEvents.ts`）—— 事件扫描必须覆盖**全部源文件**。

## 4. 渲染与接线规则

- 片段**不带标题**：标题由引用它的页面提供，同一个父类片段才能被所有子类页复用。
- 页面里生成的块被 `<!-- api-gen:start -->` … `<!-- api-gen:end -->` 包住，`wire-pages.mjs` 先删旧块再插新块 ⇒ **幂等**，可反复跑。**不要手工编辑标记块内的内容**（下次跑会被覆盖）；要改内容改生成器或 `zh-overrides.json`。
- 已经引用旧片段（`includes/<x>-methods.md`）的页面，接线时会跳过被旧片段覆盖的父类，避免重复。
- 链接只对**存在页面**的实体生成（`page-map.json` 反查），否则退化成纯文本 —— 否则 VitePress 报死链。

### 两条必须遵守的转义规则

| 现象 | 原因 | 处理 |
| --- | --- | --- |
| 构建报 `Element is missing end tag` | 源码类型里的泛型（`Array<Point>`）被 Vue 当成标签 | 类型用**反引号**包住（代码跨度内无需转义） |
| 构建报 `Duplicate attribute` | `{"top" : 100}` 被 VitePress 的属性语法解析成标签属性 | `{` `}` 转义为 `&#123;` `&#125;`（`escHtml()` 已含） |
| 死链 | `[文字]{@link Polygon}` 变成站内相对链接 | `cleanJsdoc()`：只有目标是 `http(s):` / `#` / `/` 时才生成链接 |

## 5. 补写中文说明（源码没有中文注释的成员）

```bash
node scripts/api/zh-todo.mjs --emit      # 导出缺中文清单 → .vitepress/cache/api/zh-todo.json
node scripts/api/zh-batches.mjs 20       # 切成每批 20 条 → zh-batches/<NN>.json
#   用并行子代理按批补写：读 zh-batches/<NN>.json → 读源码 → 写 zh-parts/<NN>.json
node scripts/api/zh-merge.mjs --write    # 合并 → scripts/api/zh-overrides.json
```

给子代理的硬性要求（有效）：只依据源码实现写、一句话 ≤45 字、**不要编造**、键必须与输入完全一致、只写自己那一个文件。注意：

- `zh-batches.mjs` 会 `rmSync` 重建批次目录 —— 补写期间**不要重跑**，否则批号错位。
- 重载方法会生成重复 key（`Extent.add` ×3 等），JSON 对象只能存一次，条数少于清单属正常。
- 源码里的 `en` 注释**可能是错的**（如 `GLTFMarker.zoomTo` 挂着 `setNodeTRS` 的注释）——以实现为准。
- object-literal 命名空间的 `line` 不可靠，按名字 grep 定位。

## 6. 维护场景速查

| 场景 | 做法 |
| --- | --- |
| 源码升级了 API | `npm run api:sync`（自动跟上新增/删除成员） |
| 新增一个 API 页 | 写页面 → `init-page-map.mjs --write` → 修 `page-map.json` → `api:sync` |
| 某成员中文说明不准 | 改 `scripts/api/zh-overrides.json` 对应键 → `api:gen && api:wire` |
| 想改「继承自 X」的措辞 | 改 `wire-pages.mjs` 的文案表 → `api:wire`（幂等重排） |
| 构建报 Vue 模板错误 | 先跑 `npm run api:check` 定位到页；九成是 `<` 或 `{}` 没转义 |
| 页面写着源码里没有的成员 | `npm run api:verify` 的 `unknownMember` 会点出来 |
