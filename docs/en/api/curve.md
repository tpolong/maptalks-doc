---
title: Curve
---

# Curve

Curve is an abstract base class for curve geometries that extends LineString. It is the abstract parent of ArcCurve, CubicBezierCurve, and QuadBezierCurve, and provides the internal drawing methods used by curve subclasses. It is usually not instantiated directly; use its subclasses instead.

```js
import { Curve } from "maptalks";

// Curve is an abstract base class, usually not instantiated directly.
// Use its subclasses ArcCurve / CubicBezierCurve / QuadBezierCurve instead.
const arc = new ArcCurve([[100, 0], [101, 1]]);
```

## Constructor

Curve is an abstract base class; its constructor is called by its subclasses.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `enableSimplify` | `Boolean` | Whether to enable simplification. | `false` |
| `enableClip` | `Boolean` | Whether to enable clipping. | `false` |

## Methods

Curve has no public class-specific methods; its subclasses implement curve drawing through the internal methods `_arc`, `_quadraticCurve`, and `_bezierCurve`.

<!-- api-gen:start -->
### Other Public Methods of Curve

<!--@include: ./includes/api/curve-missing.md-->

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

No class-specific static methods.

<!-- api-gen:start -->
### Other Static Methods of Curve

<!--@include: ./includes/api/curve-statics-missing.md-->

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
