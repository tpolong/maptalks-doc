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

<!-- api-gen:start -->
### Other Public Methods of CubicBezierCurve

<!--@include: ./includes/api/cubic-bezier-curve-missing.md-->

### Methods Inherited from LineString

The following methods are provided by the parent class [LineString](/en/api/line-string) and are available on instances of this class.

<!--@include: ./includes/api/line-string-methods.md-->

### Methods Inherited from Path

The following methods are provided by the parent class [Path](/en/api/path) and are available on instances of this class.

<!--@include: ./includes/api/path-methods.md-->

### Methods Inherited from Geometry

The following methods are provided by the parent class [Geometry](/en/api/geometry) and are available on instances of this class.

<!--@include: ./includes/api/geometry-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [JSONAble](/en/api/json-able)（`getJSONType`…）；[Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/en/api/handlerable)；[Menuable](/en/api/menuable).
<!-- api-gen:end -->

## Static Methods

- `CubicBezierCurve.fromJSON(json): CubicBezierCurve` — Creates a CubicBezierCurve instance from a JSON object.

<!-- api-gen:start -->
### Other Static Methods of CubicBezierCurve

<!--@include: ./includes/api/cubic-bezier-curve-statics-missing.md-->

### Static Methods Inherited from Geometry

The following methods are provided by the parent class [Geometry](/en/api/geometry) and are available on instances of this class.

<!--@include: ./includes/api/geometry-statics.md-->
<!-- api-gen:end -->

## Events

No class-specific events.

<!-- api-gen:start -->
### Events Inherited from LineString

<!--@include: ./includes/api/line-string-events.md-->

### Events Inherited from Geometry

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
