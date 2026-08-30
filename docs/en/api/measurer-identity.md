---
title: measurer.Identity
---

# measurer.Identity

measurer.Identity is a measurer based on a Cartesian coordinate system, mixing in `measurer.Common`. It computes length with the planar distance formula and area with the shoelace formula, suitable for flat-surface coordinate systems such as indoor maps and game maps. It is an object mixin with no standalone constructor.

```js
import { measurer } from "maptalks";

const m = measurer.Measurer.getInstance("IDENTITY");
m.measureLenBetween([0, 0], [3, 4]); // 5
```

## Properties / Static Methods

- `measure: string` — The measurer code, `'IDENTITY'`.

## Methods

- `measureLenBetween(c1, c2, ignoreAltitude?): number` — Euclidean distance between two planar coordinates.
- `measureArea(coords): number` — Closed area of a planar geometry (absolute value).
- `locate(c, xDist, yDist, out?): Coordinate` — Locate a coordinate from a source coordinate by x-axis and y-axis distances.
- `rotate(c, pivot, angle): Coordinate` — Rotate a coordinate around a pivot by a given angle (degrees).
- Additionally inherits `measureLength` from `measurer.Common`.
