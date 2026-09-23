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

<!-- api-gen:start -->
### AreaTool 的其他公开方法

<!--@include: ./includes/api/area-tool-missing.md-->

### 继承自 DistanceTool 的方法

下列方法由父类 [DistanceTool](/api/distance-tool) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/distance-tool-methods.md-->

### 继承自 DrawTool 的方法

下列方法由父类 [DrawTool](/api/draw-tool) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/draw-tool-methods.md-->

### 继承自 MapTool 的方法

下列方法由父类 [MapTool](/api/map-tool) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/map-tool-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）。
<!-- api-gen:end -->

## 静态方法

<!-- api-gen:start -->
### AreaTool 的其他静态方法

<!--@include: ./includes/api/area-tool-statics-missing.md-->

### 继承自 DrawTool 的静态方法

下列方法由父类 [DrawTool](/api/draw-tool) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/draw-tool-statics.md-->
<!-- api-gen:end -->

## 事件

<!-- api-gen:start -->
### 继承自 DrawTool 的事件

<!--@include: ./includes/api/draw-tool-events.md-->

### 继承自 MapTool 的事件

<!--@include: ./includes/api/map-tool-events.md-->
<!-- api-gen:end -->
