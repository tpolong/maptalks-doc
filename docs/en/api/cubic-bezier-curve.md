---
title: CubicBezierCurve
---

# CubicBezierCurve

CubicBezierCurve is a cubic Bézier curve geometry class that extends [Curve](/en/api/curve). It represents a polyline approximation of a cubic Bézier curve defined by a sequence of points, commonly used for visualizing smooth curved paths.

```js
import { CubicBezierCurve } from "maptalks";

const curve = new CubicBezierCurve([[100, 0], [101, 1], [102, 2], [103, 3]]);
layer.addGeometry(curve);
```

## Constructor

```js
new CubicBezierCurve(coordinates, options?)
```

Parameters:

* `coordinates` — The array of coordinates defining the point sequence of the cubic Bézier curve.
* `options` — (Optional) Geometry options, see the options of Curve / LineString.

## options

CubicBezierCurve has no class-specific options; it inherits the options of Curve.

## Methods

No class-specific methods; it inherits the methods of Curve.

## Static Methods

- `CubicBezierCurve.fromJSON(json): CubicBezierCurve` — Creates a CubicBezierCurve instance from a JSON object.

## Events

No class-specific events.
