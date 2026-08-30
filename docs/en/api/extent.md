---
title: Extent
---

# Extent

Extent represents a bounding box on the map — a rectangular geographical area with minimum and maximum coordinates, used to describe the range of an area. It inherits from no base class. It can be created from four numbers, two coordinate points, a JSON object, or another Extent.

```js
import { Extent } from "maptalks";
// Usage example
const extent = new Extent(100, 10, 120, 20);
console.log(extent.getWidth(), extent.getHeight()); // 20 10
```

## Constructor

```js
new Extent(xmin, ymin, xmax, ymax)
new Extent(c1, c2)
new Extent(json, projection?)
new Extent(extent)
```

Parameters:

* `xmin`, `ymin`, `xmax`, `ymax` — Four numbers: minimum x, minimum y, maximum x, maximum y.
* `c1`, `c2` — Two `Coordinate`/`Point` corner points of the rectangular area.
* `json` — An object containing `xmin`, `ymin`, `xmax`, `ymax`.
* `extent` — Another `Extent`.
* `projection` — (Optional) The last parameter, a projection object.

## Methods

- `getMin(out?): Coordinate|Point` — Get the minimum (bottom-left) point.
- `getMax(out?): Coordinate|Point` — Get the maximum (top-right) point.
- `getCenter(out?): Coordinate|Point` — Get the center point.
- `getWidth(): number` — Get the width of the extent.
- `getHeight(): number` — Get the height of the extent.
- `getSize(): Size` — Get a `Size` object made of the width and height.
- `contains(c): boolean` — Whether the extent contains the given point or area.
- `intersects(ext): boolean` — Whether it intersects with another extent.
- `within(ext): boolean` — Whether it is completely within another extent.
- `intersection(ext): Extent|null` — Return the intersection of this and another extent; `null` if they do not intersect.
- `expand(distance): Extent` — Return a new extent expanded outward by the given distance.
- `combine(ext): Extent` — Return a larger extent combined with another extent.
- `add(p): Extent` — Return a new extent after adding a coordinate/point/extent.
- `sub(p): Extent` — Return a new extent after subtracting a coordinate/point/extent.
- `round(): Extent` — Return a rounded new extent.
- `set(xmin, ymin, xmax, ymax): this` — Set the boundary values directly (mutates the data).
- `toJSON(): object` — Convert to a `{ xmin, ymin, xmax, ymax }` JSON object.
- `toArray(): Coordinate[]` — Convert to an array of 5 coordinates (first equals last, forming a closed loop).
- `toBBOX(): number[]` — Convert to a `[xmin, ymin, xmax, ymax]` array.
- `toString(): string` — Convert to a string consisting of xmin, ymin, xmax, ymax.
- `copy(): Extent` — Return a copy of the extent.
- `convertTo(fn, out?): Extent` — Generate a new extent by applying a transform function to each corner point.
- `isValid(): boolean` — Whether the extent is valid (all four boundary values are not null).
- `equals(ext2): boolean` — Whether it equals another extent.

## Static Methods

Extent has no static methods.

## Events

Extent has no events.
