---
title: ArcConnectorLine
---

# ArcConnectorLine

ArcConnectorLine 是圆弧连接线几何类，继承自 Connectable([ArcCurve](/api/arc-curve))。它以圆弧曲线的形式连接两个对象，源与目标可以是几何对象、控件或 UI 组件，常用于弯曲的引线、流向关系等可视化场景。

```js
import { ArcConnectorLine } from "maptalks";

const source = map.addMarker([100, 0]);
const target = map.addMarker([101, 1]);
const connector = new ArcConnectorLine(source, target);
layer.addGeometry(connector);
```

## 构造函数

```js
new ArcConnectorLine(src, target, options?)
```

参数：

* `src` — 连接源，可为几何对象、控件或 UI 组件。
* `target` — 连接目标，可为几何对象、控件或 UI 组件。
* `options` — （可选）几何配置项，见 ArcCurve / Curve 的 options。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `showOn` | `String` | 显示条件，可为 `'always'`、`'moving'`、`'click'`、`'mouseover'`。 | `'always'` |
| `arcDegree` | `Number` | 圆弧的张开角度。 | `90` |

## 成员方法

- `getConnectSource()` — 获取连接源。
- `setConnectSource(src): this` — 设置连接源。
- `getConnectTarget()` — 获取连接目标。
- `setConnectTarget(target): this` — 设置连接目标。

## 静态方法

无特有静态方法。

## 事件

无特有事件。
