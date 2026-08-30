---
title: Extent
---

# Extent

Extent 表示地图上的边界框（bounding box），即一个具有最小和最大坐标的矩形地理区域，用于表示某一坐标范围。它没有继承任何基类。可通过四个数字、两个坐标点、一个 JSON 对象或另一个 Extent 来创建。

```js
import { Extent } from "maptalks";
// 用法示例
const extent = new Extent(100, 10, 120, 20);
console.log(extent.getWidth(), extent.getHeight()); // 20 10
```

## 构造函数

```js
new Extent(xmin, ymin, xmax, ymax)
new Extent(c1, c2)
new Extent(json, projection?)
new Extent(extent)
```

参数：

* `xmin`、`ymin`、`xmax`、`ymax` — 四个数字，依次为最小 x、最小 y、最大 x、最大 y。
* `c1`、`c2` — 两个 `Coordinate`/`Point`，作为矩形区域的角点。
* `json` — 一个包含 `xmin`、`ymin`、`xmax`、`ymax` 的对象。
* `extent` — 另一个 `Extent`。
* `projection` — （可选）最后一个参数，投影对象。

## 成员方法

- `getMin(out?): Coordinate|Point` — 获取最小点（左下角）。
- `getMax(out?): Coordinate|Point` — 获取最大点（右上角）。
- `getCenter(out?): Coordinate|Point` — 获取区域中心点。
- `getWidth(): number` — 获取区域的宽度。
- `getHeight(): number` — 获取区域的高度。
- `getSize(): Size` — 获取宽度与高度构成的 `Size` 对象。
- `contains(c): boolean` — 判断是否包含给定的点或区域。
- `intersects(ext): boolean` — 判断是否与另一个区域相交。
- `within(ext): boolean` — 判断是否完全位于另一个区域之内。
- `intersection(ext): Extent|null` — 返回当前区域与另一个区域的交集；不相交时返回 `null`。
- `expand(distance): Extent` — 返回按距离向外扩大的新区域。
- `combine(ext): Extent` — 返回与另一个区域合并后的更大区域。
- `add(p): Extent` — 返回与坐标/点/区域相加后的新区域。
- `sub(p): Extent` — 返回与坐标/点/区域相减后的新区域。
- `round(): Extent` — 返回四舍五入后的新区域。
- `set(xmin, ymin, xmax, ymax): this` — 直接设置区域边界值（修改原数据）。
- `toJSON(): object` — 转换为 `{ xmin, ymin, xmax, ymax }` JSON 对象。
- `toArray(): Coordinate[]` — 转换为 5 个坐标的数组（首尾相同，构成闭环）。
- `toBBOX(): number[]` — 转换为 `[xmin, ymin, xmax, ymax]` 数组。
- `toString(): string` — 转换为由 xmin、ymin、xmax、ymax 组成的字符串。
- `copy(): Extent` — 返回该区域的拷贝。
- `convertTo(fn, out?): Extent` — 对每个角点应用转换函数后生成新区域。
- `isValid(): boolean` — 判断区域是否有效（四个边界值均非空）。
- `equals(ext2): boolean` — 判断与另一个区域是否相等。

## 静态方法

Extent 没有静态方法。

## 事件

Extent 没有事件。
