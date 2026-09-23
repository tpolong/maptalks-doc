---
title: Path
---

# Path

Path 是线面几何的抽象基类，继承自 Geometry。它是 LineString、Polygon 等线面几何的父类，统一封装了线面的平滑、裁剪、简化与符号化等能力。通常不直接实例化，而是通过其子类使用。

```js
import { Path } from "maptalks";

// Path 为抽象基类，通常不直接实例化，
// 而是通过其子类 LineString / Polygon 等使用。
const line = new LineString([[100, 0], [101, 1]]);
```

## 构造函数

Path 为抽象基类，构造函数由其子类调用。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `smoothness` | `Number` | 平滑度，控制线的平滑程度。 | `0` |
| `enableClip` | `Boolean` | 是否启用裁剪。 | `true` |
| `strictClip` | `Boolean` | 是否启用严格裁剪。 | — |
| `enableSimplify` | `Boolean` | 是否启用简化。 | `true` |
| `simplifyTolerance` | `Number` | 简化容差（像素）。 | `2` |
| `symbol` | `Object` | 符号配置，如 `lineColor`、`lineWidth`、`lineOpacity`、`polygonFill` 等。 | — |

## 成员方法

- `animateShow(options, cb): Player` — 以动画方式显示几何，返回动画 Player，`cb` 为完成回调。

<!-- api-gen:start -->
### Path 的其他公开方法

<!--@include: ./includes/api/path-missing.md-->

### 继承自 Geometry 的方法

下列方法由父类 [Geometry](/api/geometry) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/geometry-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[JSONAble](/api/json-able)（`getJSONType`…）；[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/api/handlerable)；[Menuable](/api/menuable)。
<!-- api-gen:end -->

## 静态方法

无特有静态方法。

## 事件

无特有事件。

<!-- api-gen:start -->
### 继承自 Geometry 的事件

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
