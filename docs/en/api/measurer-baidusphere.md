---
title: measurer.BaiduSphere
---

# measurer.BaiduSphere

measurer.BaiduSphere is the sphere measurer used by Baidu Map, mixing in `measurer.Common`. Its methods are identical to `WGS84Sphere`, differing only in the sphere radius (`6370996.81`). It is an object mixin with no standalone constructor.

```js
import { measurer } from "maptalks";

const m = measurer.Measurer.getInstance("BAIDU");
m.measureLenBetween([116.404, 39.915], [121.47, 31.23]);
```

## Properties / Static Methods

- `measure: string` — The measurer code, `'BAIDU'`.
- `sphere: Sphere` — The underlying sphere measurer, radius `6370996.81`.

## Methods

- `measureLenBetween(c1, c2): number` — Great-circle distance (meters).
- `measureArea(coords): number` — Closed area of a spherical geometry.
- `locate(c, xDist, yDist, out?): Coordinate` — Locate a coordinate from a source coordinate by x-axis and y-axis distances.
- `rotate(c, pivot, angle): Coordinate` — Rotate a coordinate around a pivot by a given angle.
- Additionally inherits `measureLength` from `measurer.Common`.
