---
title: Point
---

# Point

Point 是 maptalks 的二维点基类（并非 Geometry），继承自 Position。它用于表示一个二维坐标点，并提供了一系列数学运算方法（加减、旋转、取整、单位化、夹角计算等），是构建其他几何与坐标体系的基础。

```js
import { Point } from "maptalks";
// 用法示例
const p = new Point(100, 200);
console.log(p.x, p.y); // 100 200
```

## 构造函数

```js
new Point(x, y[, z])
// 或
new Point([x, y[, z]])
// 或
new Point({ x, y[, z] })
```

参数：

* `x` — 横坐标值，或一个 `[x, y[, z]]` 数组，或一个 `{ x, y[, z] }` 对象。
* `y` — 纵坐标值。
* `z` — （可选）第三维坐标值。

## options 配置项

Point 没有 options 配置项。

## 成员方法

- `closeTo(p, delta): boolean` — 判断当前点是否与点 `p` 接近（各轴差值均小于 `delta`）。
- `unit(): Point` — 返回当前点单位化（归一化）后的向量。
- `perp(): Point` — 返回当前点逆时针旋转 90° 的垂直向量。
- `angleWith(b): number` — 返回当前点与点 `b` 之间的夹角（弧度）。
- `rotate(a): Point` — 返回当前点绕原点旋转角度 `a`（弧度）后的点。
- `abs(): Point` — 返回各轴取绝对值后的点。
- `round(): Point` — 返回各轴四舍五入取整后的点。
- `ceil(): Point` — 返回各轴向上取整后的点。
- `floor(): Point` — 返回各轴向下取整后的点。
- `copy(): Point` — 返回当前点的深拷贝。
- `toFixed(n): Point` — 返回各轴保留 `n` 位小数的点。
- `add(x, y): Point` — 返回当前点加上 `(x, y)` 后的点。
- `sub(x, y): Point` — 返回当前点减去 `(x, y)` 后的点。
- `multi(ratio): Point` — 返回当前点按 `ratio` 比例缩放后的点。
- `equals(c): boolean` — 判断当前点是否与点 `c` 相等。

## 静态方法

Point 没有静态方法。

## 事件

Point 没有事件。
