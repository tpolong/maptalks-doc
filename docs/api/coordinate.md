---
title: Coordinate
---

# Coordinate

Coordinate表示一个坐标点，例如地理坐标点（经度 longitude，纬度 latitude），或投影坐标系中的坐标。它是maptalks坐标换算的基础数据结构，继承自 `Position`（`Point` 和 `Coordinate` 的共同父类）。

```js
import { Coordinate } from "maptalks";

const coord = new Coordinate(0, 0);
const coord2 = new Coordinate([121.47, 31.23]);
const coord3 = new Coordinate({ x: 0, y: 0 });
```

## 构造函数

```js
new Coordinate(x, y, z?)
new Coordinate([x, y, z])
new Coordinate({ x, y, z })
new Coordinate(coordinate)
```

参数：

* **x** `Number` x坐标值。
* **y** `Number` y坐标值。
* **z** `Number` z值（可选，纯属性，目前不参与运算）。

也支持传入数组 `[x, y]`、JSON对象 `{x, y}` 或另一个 `Coordinate` 对象。

> 构造时若 x/y 为 `NaN` 会抛出错误。

## 成员方法

### 值获取与转换

- `toArray(): number[]` — 转换为数组 `[x, y]`（z存在时为 `[x, y, z]`）
- `toJSON(): { x, y, z? }` — 转换为JSON对象
- `toFixed(n): Coordinate` — 保留n位小数
- `copy(): Coordinate` — 返回副本

### 运算

- `add(x, y?, z?): Coordinate` — 与传入坐标相加
- `sub(x, y?, z?): Coordinate` — 与传入坐标相减
- `substract(x, y?): Coordinate` — sub的别名
- `multi(ratio): Coordinate` — 乘以给定数字
- `div(n): Coordinate` — 除以给定数字
- `abs(): Coordinate` — 绝对值
- `round(): Coordinate` — 四舍五入
- `ceil(): Coordinate` — 向上取整
- `floor(): Coordinate` — 向下取整

### 距离与比较

- `distanceTo(point): number` — 与给定点的欧几里得距离
- `mag(): number` — 从原点到该点的距离
- `closeTo(p, delta?): boolean` — 是否在delta范围内
- `equals(c): boolean` — 是否相等
- `isZero(): boolean` — 是否为零

### 原地修改

- `set(x, y, z?): this` — 直接设置坐标（修改原数据并返回this）

## 静态方法

- `Coordinate.toNumberArrays(coordinates)` — 将Coordinate转换为GeoJSON风格坐标数组（递归）
- `Coordinate.toCoordinates(coordinates)` — 将GeoJSON风格坐标转换为Coordinate对象（递归）

```js
const coord = new Coordinate(121.47, 31.23);
const arr = coord.toArray(); // [121.47, 31.23]
const dist = coord.distanceTo(new Coordinate(121.48, 31.24));
```

> Coordinate是纯数据类型，无事件系统。坐标投影换算（经纬度 ↔ Web墨卡托/像素坐标）由 `CRS`/投影类完成，而非 Coordinate 的方法。
