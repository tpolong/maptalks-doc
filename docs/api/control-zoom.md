---
title: Zoom
---

# Zoom

Zoom 是缩放控件，继承自 `Control`。它在地图上提供放大/缩小按钮，也可通过滚轮缩放（`seamless`）实现连续缩放。默认显示在左上角。

```js
import { Zoom } from "maptalks";

const zoom = new Zoom({
  position: "top-left",
  zoomLevel: true,
  seamless: true
}).addTo(map);
```

## 构造函数

```js
new Zoom(options)
```

参数：

* `options` — 缩放控件配置项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `position` | `String` | 控件位置 | `"top-left"` |
| `zoomLevel` | `Boolean` | 是否显示当前缩放级别 | `true` |
| `seamless` | `Boolean` | 是否支持无缝连续缩放 | `false` |

## 成员方法

<!-- api-gen:start -->
### Zoom 的其他公开方法

<!--@include: ./includes/api/control-zoom-missing.md-->

### 继承自 Control 的方法

下列方法由父类 [Control](/api/control) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/control-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）。
<!-- api-gen:end -->

## 事件

<!-- api-gen:start -->
### 继承自 Control 的事件

<!--@include: ./includes/api/control-events.md-->
<!-- api-gen:end -->
