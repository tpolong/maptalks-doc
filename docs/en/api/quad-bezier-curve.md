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

<!-- api-gen:start -->
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

- `QuadBezierCurve.fromJSON(json): QuadBezierCurve` — Creates a QuadBezierCurve instance from a JSON object.

## Events

No class-specific events.

<!-- api-gen:start -->
### Events Inherited from LineString

<!--@include: ./includes/api/line-string-events.md-->

### Events Inherited from Geometry

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
