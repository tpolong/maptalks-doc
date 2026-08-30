---
title: Transformation
---

# Transformation

Transformation is the class converting between projected coordinates and the base 2D point system, used to map the map's (usually geographical) coordinates to 2D points. It inherits from no base class, and defines the affine mapping through a 4-number matrix `[a, b, c, d]`.

```js
import { Transformation } from "maptalks";
// Usage example
const t = new Transformation([1, -1, -20037508.34, 20037508.34]);
const point = t.transform(coordinate, 1, pointOut);
```

## Constructor

```js
new Transformation(matrix)
```

Parameters:

* `matrix` — A `[a, b, c, d]` array, where `a` is the X-axis direction scale (`1` means right is larger, `-1` means left is larger), `b` is the Y-axis direction scale (`1` means bottom is larger, `-1` means top is larger), and `c`, `d` are the x, y of the origin point of the projected coordinate system.

## Methods

- `transform(coordinate, scale, out?): Point` — Transform a projected coordinate to a 2D point; `scale` is used to scale the result at different zoom levels.
- `untransform(point, scale, out?): Coordinate` — Transform a 2D point back to a projected coordinate; `scale` is used to scale the result at different zoom levels.

## Static Methods

Transformation has no static methods.

## Events

Transformation has no events.
