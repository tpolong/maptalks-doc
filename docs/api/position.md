---
title: Position
---

# Position

Position 是 [Point](/api/point) 和 [Coordinate](/api/coordinate) 的抽象父类，定义了 `x`、`y`、`z` 三个字段以及一系列公共操作方法。它是一个抽象基类，不能直接实例化，需要使用其子类 `Point` 或 `Coordinate`。

```js
import { Position } from "maptalks";
// 抽象基类，需通过子类使用
// Position 不能直接 new，请使用 new Point(...) 或 new Coordinate(...)
```

## 构造函数

```js
new Position(x, y, z?)
// 或
new Position([x, y, z?])
// 或
new Position({ x, y, z? })
```

> Position 是抽象类，无法直接实例化；以上签名用于说明其子类的构造方式。

参数：

* `x` — 横坐标，或一个 `[x, y, z?]` 数组，或一个 `{ x, y, z? }` 对象。
* `y` — 纵坐标。
* `z` — （可选）第三维坐标；纯属性，目前不参与运算。

## 成员方法

- `set(x, y, z?): this` — 直接设置 x、y 值（z 可选，默认 0）。
- `distanceTo(point): number` — 返回与给定点之间的欧几里得距离。
- `mag(): number` — 返回该点的大小，即从原点 `(0,0)` 到该点的欧几里得距离。
- `div(n): Point|Coordinate` — 返回当前点除以给定数字后的结果。
- `substract(x, y?): Point|Coordinate` — `sub` 的别名。
- `isZero(): boolean` — 判断 x、y 是否均为 0。
- `toArray(): number[]` — 转换为数组 `[x, y]`（z 存在时为 `[x, y, z]`）。
- `toJSON(): { x, y, z? }` — 转换为 JSON 对象。

> 抽象方法（由子类实现）：`abs()`、`round()`、`ceil()`、`floor()`、`copy()`、`add()`、`sub()`、`multi()`、`toFixed()`、`equals()`。

## 静态方法

Position 没有静态方法。

## 事件

Position 没有事件。
