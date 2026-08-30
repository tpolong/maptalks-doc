---
title: Point
---

# Point

Point is the base two-dimensional point class of maptalks (not a Geometry), inheriting from Position. It represents a 2D coordinate point and provides a range of mathematical operations (addition/subtraction, rotation, rounding, normalization, angle calculation, etc.), forming the foundation for other geometries and coordinate systems.

```js
import { Point } from "maptalks";
// Usage example
const p = new Point(100, 200);
console.log(p.x, p.y); // 100 200
```

## Constructor

```js
new Point(x, y[, z])
// or
new Point([x, y[, z]])
// or
new Point({ x, y[, z] })
```

Parameters:

* `x` — The x coordinate value, or an `[x, y[, z]]` array, or an `{ x, y[, z] }` object.
* `y` — The y coordinate value.
* `z` — (Optional) The third-dimensional coordinate value.

## options

Point has no options.

## Methods

- `closeTo(p, delta): boolean` — Returns whether the current point is close to point `p` (each axis difference is less than `delta`).
- `unit(): Point` — Returns the unit (normalized) vector of the current point.
- `perp(): Point` — Returns the perpendicular vector of the current point rotated 90° counter-clockwise.
- `angleWith(b): number` — Returns the angle (in radians) between the current point and point `b`.
- `rotate(a): Point` — Returns the point after rotating the current point around the origin by angle `a` (in radians).
- `abs(): Point` — Returns a point with the absolute value of each axis.
- `round(): Point` — Returns a point with each axis rounded to the nearest integer.
- `ceil(): Point` — Returns a point with each axis rounded up.
- `floor(): Point` — Returns a point with each axis rounded down.
- `copy(): Point` — Returns a deep copy of the current point.
- `toFixed(n): Point` — Returns a point with each axis fixed to `n` decimal places.
- `add(x, y): Point` — Returns the point after adding `(x, y)` to the current point.
- `sub(x, y): Point` — Returns the point after subtracting `(x, y)` from the current point.
- `multi(ratio): Point` — Returns the point after scaling the current point by `ratio`.
- `equals(c): boolean` — Returns whether the current point equals point `c`.

## Static Methods

Point has no static methods.

## Events

Point has no events.
