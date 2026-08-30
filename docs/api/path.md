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

## 静态方法

无特有静态方法。

## 事件

无特有事件。
