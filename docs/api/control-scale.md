---
title: Scale
---

# Scale

Scale 是比例尺控件，继承自 `Control`。它在地图上根据当前缩放级别显示对应的地图比例尺，支持公制与英制单位。默认显示在左下角。

```js
import { Scale } from "maptalks";

const scale = new Scale({
  metric: true,
  imperial: false
}).addTo(map);
```

## 构造函数

```js
new Scale(options)
```

参数：

* `options` — 比例尺控件配置项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `position` | `String` | 控件位置 | `"bottom-left"` |
| `maxWidth` | `Number` | 比例尺最大宽度（像素） | `100` |
| `metric` | `Boolean` | 是否显示公制单位 | `true` |
| `imperial` | `Boolean` | 是否显示英制单位 | `false` |
| `containerClass` | `String` | 容器 CSS 类名 | `null` |

## 成员方法

<!-- api-gen:start -->
### Scale 的其他公开方法

<!--@include: ./includes/api/control-scale-missing.md-->

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
