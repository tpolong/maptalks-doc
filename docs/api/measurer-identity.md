---
title: measurer.Identity
---

# measurer.Identity

measurer.Identity 是基于笛卡尔坐标系的测量器，混入 `measurer.Common`。它使用平面距离公式计算长度、使用鞋带公式计算面积，适用于室内地图、游戏地图等平面坐标系。它是一个对象 mixin，没有独立的构造函数。

```js
import { measurer } from "maptalks";

const m = measurer.Measurer.getInstance("IDENTITY");
m.measureLenBetween([0, 0], [3, 4]); // 5
```

## 属性 / 静态方法

- `measure: string` — 测量器代码，`'IDENTITY'`。

## 方法

- `measureLenBetween(c1, c2, ignoreAltitude?): number` — 平面两点间的欧氏距离。
- `measureArea(coords): number` — 平面几何的闭合面积（绝对值）。
- `locate(c, xDist, yDist, out?): Coordinate` — 从源坐标按 x 轴 / y 轴距离定位得到新坐标。
- `rotate(c, pivot, angle): Coordinate` — 绕枢轴旋转给定角度（角度制）的坐标。
- 继承自 `measurer.Common` 的 `measureLength`。
