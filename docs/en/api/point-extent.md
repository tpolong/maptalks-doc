---
title: PointExtent
---

# PointExtent

PointExtent is the point version of Extent, extending [Extent](/en/api/extent). It is created in exactly the same way as Extent, but its `getMin()`, `getMax()`, `getCenter()` and other methods return `Point` objects instead of `Coordinate` objects, making it suitable for pixel/screen-coordinate areas.

```js
import { PointExtent } from "maptalks";
// Usage example
const extent = new PointExtent(100, 10, 120, 20);
console.log(extent.getMin()); // Point(100, 10)
```

## Constructor

```js
new PointExtent(xmin, ymin, xmax, ymax)
new PointExtent(c1, c2)
new PointExtent(json, projection?)
new PointExtent(extent)
```

Parameters:

* The same as `Extent`: four numbers `xmin`, `ymin`, `xmax`, `ymax`, or two `Point` corner points, or an object containing `xmin`, `ymin`, `xmax`, `ymax`, or another Extent, plus an optional `projection`.

## Methods

PointExtent has no unique methods of its own; it reuses all methods of `Extent`. The differences are:

- `getMin()`, `getMax()`, `getCenter()`, `toArray()` etc. return `Point` instead of `Coordinate`.
- The rest of the methods (`getWidth`, `getHeight`, `contains`, `intersects`, `within`, `combine`, `expand`, `copy`, `toJSON`, `toBBOX`, etc.) behave the same as `Extent`. See [Extent](/en/api/extent).

## Static Methods

PointExtent has no static methods.

## Events

PointExtent has no events.
