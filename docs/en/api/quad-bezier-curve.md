---
title: QuadBezierCurve
---

# QuadBezierCurve

QuadBezierCurve is a quadratic Bézier curve geometry class that extends [Curve](/en/api/curve). It represents a polyline approximation of a quadratic Bézier curve defined by a sequence of points, commonly used for generating smooth paths with curvature.

```js
import { QuadBezierCurve } from "maptalks";

const curve = new QuadBezierCurve([[100, 0], [101, 1], [102, 2]]);
layer.addGeometry(curve);
```

## Constructor

```js
new QuadBezierCurve(coordinates, options?)
```

Parameters:

* `coordinates` — The array of coordinates defining the point sequence of the quadratic Bézier curve.
* `options` — (Optional) Geometry options, see the options of Curve / LineString.

## options

QuadBezierCurve has no class-specific options; it inherits the options of Curve.

## Methods

No class-specific methods; it inherits the methods of Curve.

## Static Methods

- `QuadBezierCurve.fromJSON(json): QuadBezierCurve` — Creates a QuadBezierCurve instance from a JSON object.

## Events

No class-specific events.
