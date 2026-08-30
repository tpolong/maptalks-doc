---
title: measurer.WGS84Sphere
---

# measurer.WGS84Sphere

measurer.WGS84Sphere is the WGS84 ellipsoid/sphere measurer, mixing in `measurer.Common` and serving as maptalks' default measurer (sphere radius `6378137`). It computes length with the great-circle distance formula and area with the spherical formulation, suitable for most GIS coordinate systems. It is an object mixin with no standalone constructor.

```js
import { measurer } from "maptalks";

const m = measurer.Measurer.getInstance(); // the default WGS84Sphere
m.measureLenBetween([116.39, 39.9], [121.47, 31.23]); // great-circle distance
```

## Properties / Static Methods

- `measure: string` — The measurer code, `'EPSG:4326'`.
- `sphere: Sphere` — The underlying sphere measurer, radius `6378137`.

## Methods

- `measureLenBetween(c1, c2): number` — Great-circle distance (meters).
- `measureArea(coords): number` — Closed area of a spherical geometry.
- `locate(c, xDist, yDist, out?): Coordinate` — Locate a coordinate from a source coordinate by x-axis and y-axis distances.
- `rotate(c, pivot, angle): Coordinate` — Rotate a coordinate around a pivot by a given angle.
- Additionally inherits `measureLength` from `measurer.Common`.
