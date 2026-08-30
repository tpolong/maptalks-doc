---
title: CubicBezierCurve
---

# CubicBezierCurve

CubicBezierCurve 是三次贝塞尔曲线几何类，继承自 [Curve](/api/curve)。它表示由点序列定义的三次贝塞尔曲线的折线近似，常用于平滑曲线路径的可视化。

```js
import { CubicBezierCurve } from "maptalks";

const curve = new CubicBezierCurve([[100, 0], [101, 1], [102, 2], [103, 3]]);
layer.addGeometry(curve);
```

## 构造函数

```js
new CubicBezierCurve(coordinates, options?)
```

参数：

* `coordinates` — 坐标数组，定义三次贝塞尔曲线的点序列。
* `options` — （可选）几何配置项，见 Curve / LineString 的 options。

## options 配置项

CubicBezierCurve 无特有 options，继承自 Curve。

## 成员方法

无特有方法，继承自 Curve。

## 静态方法

- `CubicBezierCurve.fromJSON(json): CubicBezierCurve` — 从 JSON 对象创建 CubicBezierCurve 实例。

## 事件

无特有事件。
