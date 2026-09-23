---
title: control.Compass
---

# control.Compass

control.Compass 是地图罗盘控件，继承自 [control.Control](/api/control)。它显示一个可点击的罗盘，罗盘随地图方位角（bearing）旋转；点击罗盘可重置地图方位角。

```js
import { control } from "maptalks";

const compass = new control.Compass({
  position: "top-left",
}).addTo(map);
```

## 构造函数

```js
new control.Compass(options?)
```

参数：

* `options` — `Object`，可选。配置项见下表。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `position` | `String \| Object` | 控件位置 | `{ top: 120, left: 20 }` |

继承自 [control.Control](/api/control) 的 `cssName` 等通用配置同样适用。

## 成员方法

- `buildOn(map): HTMLElement` — 构建控件DOM（罗盘元素），并监听地图 rotate/zoom 等事件更新罗盘旋转。
- `onAdd()` — 控件加入地图时调用，立即刷新罗盘方向。
- `onRemove()` — 控件移除时调用，解绑地图事件。

> 罗盘元素为 `<div class="maptalks-compass">`，点击触发 `_resetView`（将方位角重置为 0）。

<!-- api-gen:start -->
### Compass 的其他公开方法

<!--@include: ./includes/api/control-compass-missing.md-->

### 继承自 Control 的方法

下列方法由父类 [Control](/api/control) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/control-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）。
<!-- api-gen:end -->

## 事件

无特有事件（继承自 [control.Control](/api/control) 的 `add`、`remove`、`positionchange`）。

<!-- api-gen:start -->
### 继承自 Control 的事件

<!--@include: ./includes/api/control-events.md-->
<!-- api-gen:end -->

## 使用说明

```js
const map = new Map("map", { ... });
map.addControl(new control.Compass({ position: "top-left" }));
```
