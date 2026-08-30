# maptalks 新引擎文档站（maptalks-docs）

面向 **maptalks 新引擎**（`maptalks` + `@maptalks/gl-layers`）的中英双语开发者文档站，基于 [VitePress](https://vitepress.dev) 静态构建，整合四块内容：

- **SDK 开发指南**（`docs/guide`）— 快速开始、三维场景、矢量瓦片、gltf / 3dtiles、视频图层、WebGPU 渲染、空间分析、交互与事件、数据、坐标系与投影。
- **样式指南**（`docs/guide/style`）— Symbol 样式、材质、要素过滤、函数类型，以及 17 个渲染插件（icon / text / line / line-gradient / fill / heatmap / tube / water 等）。
- **API 参考**（`docs/api`）— 核心类、几何、图层、矢量瓦片图层、三维场景与模型、空间分析、控件、投影等 100+ 页面。
- **可运行示例**（`docs/examples`）— 约 390 个示例，集成 `@vue/repl` 在线运行，并配示例中心（搜索、分类树、缩略图卡片）。

## 技术栈

- [VitePress](https://vitepress.dev) 1.x（Vue 3）
- [@vue/repl](https://github.com/vuejs/repl) — 示例在线运行 REPL
- 中英双语（VitePress `locales`，`root` = 简体中文 / `en` = English），`srcDir: docs`

## 快速开始

环境要求：Node.js ≥ 18，[pnpm](https://pnpm.io)。

```bash
# 安装依赖
pnpm install

# 本地开发（默认 http://localhost:5173）
pnpm dev

# 生产构建（输出到 .vitepress/dist/）
pnpm build

# 本地预览构建产物
pnpm preview
```

> 示例库较大，构建时若内存不足请增大 Node 堆：
> `NODE_OPTIONS=--max-old-space-size=8192 pnpm build`

## 目录结构

```
maptalks-docs/
├─ docs/                       # 内容源（srcDir）
│  ├─ guide/                   # SDK 指南 + 样式指南（zh）
│  ├─ api/                     # API 参考 + includes 共享片段
│  ├─ examples/                # 示例中心（ExampleList / ExampleRepl）+ index.md
│  ├─ public/examples/         # 约 390 个示例源码 + 示例资源（textures / models）
│  ├─ public/lib/              # 本地 ESM 库（如 regl wrapper）
│  ├─ public/thumbnails/       # 示例缩略图
│  └─ en/                      # 英文镜像（结构与 docs/ 同步）
├─ .vitepress/
│  ├─ config.ts                # 站点配置（locales / 导航 / 侧边栏）
│  ├─ config/                  # zh / en 各自的导航与侧边栏
│  └─ theme/                   # 自定义主题
├─ scripts/                    # 迁移 / 校验脚本
├─ package.json
└─ pnpm-workspace.yaml
```

## 可运行示例

- 示例源码位于 `docs/public/examples/<分类>/<子类>/<示例>/`，每个示例含 `index.html` / `index.js` / `index.css` 等。
- 示例中心支持搜索、分类树、缩略图卡片，点击卡片即通过 `@vue/repl` 在线运行。
- 部分示例依赖外部瓦片 / 数据服务（Mapbox、MapTiler、高德、dvgis 等）与云端资源；示例代码中可能包含**公开的测试 token**，正式使用请替换为你自己的 token。

## 构建与部署

1. `pnpm build` 生成静态站点到 `.vitepress/dist/`。
2. 将 `dist` 内容发布到任意静态托管（GitHub Pages / Vercel / Netlify 等）。
3. 若用 GitHub Pages，请在仓库根添加 `.nojekyll` 文件，跳过 Jekyll 处理。

## 相关仓库

- 源码仓库：`tpolong/maptalks-doc`
- 已部署站点示例：`https://tpolong.github.io/`
