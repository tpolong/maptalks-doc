# baselines/0.124.4

本分支是 maptalks 文档站的**引擎版本归档**（孤儿分支，不进 main）：

- `api-model.json`：该版本源码抽取出的结构模型，是影响分析（`scripts/impact.mjs --base`）的基准
- `docs-baseline.json`：当时的基线定义（引擎各包版本、源码 commit、摘要）
- `impact-report.json` / `repl-report.json`：若当时有则一并归档

用法：`node scripts/archive-baseline.mjs --get 0.124.4 --out <file>`
归档时间：2026-09-26T05:50:04.722Z
