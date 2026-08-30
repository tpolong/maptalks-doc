---
title: measurer.Common
---

# measurer.Common

measurer.Common is the mixin base class for measurers, providing a unified entry point for length/area measurement. It is an object mixin not meant for direct use; it is mixed into measurers such as `Identity`, `WGS84Sphere`, and `BaiduSphere`, and has no standalone constructor.

```js
import { measurer } from "maptalks";

const m = measurer.Measurer.getInstance();
// Common is mixed into all measurers
console.log(m.measureLength([[0, 0], [1, 1]]));
```

## Properties / Static Methods

(The mixin base class; no standalone properties or static methods.)

## Methods

- `measureLength(c1, c2): number` — Measure the distance between two coordinates (or a polyline defined by an array of coordinates). When `c1` is an array of coordinates, it accumulates `measureLenBetween` across adjacent points; otherwise it returns the measured distance between the two coordinates.
