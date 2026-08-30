---
title: ArcCurve
---

# ArcCurve

ArcCurve 是圆弧曲线几何类，继承自 [Curve](/api/curve)。它表示一段由圆弧或折线近似生成的曲线，常用于绘制弧线连接、流向等可视化场景。

```js
import { ArcCurve } from "maptalks";

const arc = new ArcCurve([[100, 0], [101, 1]]);
layer.addGeometry(arc);
```

## 构造函数

```js
new ArcCurve(coordinates, options?)
```

参数：

* `coordinates` — 坐标数组，定义圆弧的两个端点。
* `options` — （可选）几何配置项，见 Curve / LineString 的 options。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `arcDegree` | `Number` | 圆弧的张开角度。 | `90` |

## 成员方法

无特有方法，继承自 Curve。

## 静态方法

- `ArcCurve.fromJSON(json): ArcCurve` — 从 JSON 对象创建 ArcCurve 实例。

## 事件

无特有事件。
