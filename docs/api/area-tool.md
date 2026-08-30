---
title: AreaTool
---

# AreaTool

AreaTool 是面积测量工具，继承自 `DistanceTool`。用户在地图上绘制多边形后，工具会自动计算并显示该多边形的面积。它复用 DistanceTool 的测量图层与标注方式，因此使用方式与距离测量基本相同。

```js
import { AreaTool } from "maptalks";

const areaTool = new AreaTool({
  metric: true,
  imperial: false
}).addTo(map);
```

## 构造函数

```js
new AreaTool(options)
```

参数：

* `options` — 面积测量工具配置项，同 `DistanceTool` 的 options 配置项。

## options 配置项

AreaTool 无特有配置项，其 options 继承自 DistanceTool（详见 [DistanceTool](./distance-tool.md#options-配置项)）。

## 成员方法

AreaTool 无特有方法，其成员方法均继承自 DistanceTool（详见 [DistanceTool](./distance-tool.md#成员方法)）。
