---
title: ArcCurve
---

# ArcCurve

ArcCurve is an arc-curve geometry class that extends [Curve](/en/api/curve). It represents a curve generated as an arc or as a polyline approximation of an arc, commonly used for arc connections and flow visualizations.

```js
import { ArcCurve } from "maptalks";

const arc = new ArcCurve([[100, 0], [101, 1]]);
layer.addGeometry(arc);
```

## Constructor

```js
new ArcCurve(coordinates, options?)
```

Parameters:

* `coordinates` — The array of coordinates defining the two endpoints of the arc.
* `options` — (Optional) Geometry options, see the options of Curve / LineString.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `arcDegree` | `Number` | The opening angle of the arc. | `90` |

## Methods

No class-specific methods; it inherits the methods of Curve.

<!-- api-gen:start -->
### Other Public Methods of ArcCurve

<!--@include: ./includes/api/arc-curve-missing.md-->

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

- `ArcCurve.fromJSON(json): ArcCurve` — Creates an ArcCurve instance from a JSON object.

<!-- api-gen:start -->
### Other Static Methods of ArcCurve

<!--@include: ./includes/api/arc-curve-statics-missing.md-->

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
