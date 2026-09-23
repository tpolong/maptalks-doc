---
title: ArcConnectorLine
---

# ArcConnectorLine

ArcConnectorLine is an arc-connector-line geometry class that extends Connectable([ArcCurve](/en/api/arc-curve)). It connects two objects with an arc-shaped curve. The source and target can be geometry objects, controls, or UI components, and it is commonly used for curved leader lines and flow relationships.

```js
import { ArcConnectorLine } from "maptalks";

const source = map.addMarker([100, 0]);
const target = map.addMarker([101, 1]);
const connector = new ArcConnectorLine(source, target);
layer.addGeometry(connector);
```

## Constructor

```js
new ArcConnectorLine(src, target, options?)
```

Parameters:

* `src` — The connection source; can be a geometry object, control, or UI component.
* `target` — The connection target; can be a geometry object, control, or UI component.
* `options` — (Optional) Geometry options, see the options of ArcCurve / Curve.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `showOn` | `String` | The show condition; one of `'always'`, `'moving'`, `'click'`, `'mouseover'`. | `'always'` |
| `arcDegree` | `Number` | The opening angle of the arc. | `90` |

## Methods

- `getConnectSource()` — Gets the connection source.
- `setConnectSource(src): this` — Sets the connection source.
- `getConnectTarget()` — Gets the connection target.
- `setConnectTarget(target): this` — Sets the connection target.

<!-- api-gen:start -->
### Other Public Methods of ArcConnectorLine

<!--@include: ./includes/api/arc-connector-line-missing.md-->

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
### Other Static Methods of ArcConnectorLine

<!--@include: ./includes/api/arc-connector-line-statics-missing.md-->

### Static Methods Inherited from ArcCurve

The following methods are provided by the parent class [ArcCurve](/en/api/arc-curve) and are available on instances of this class.

<!--@include: ./includes/api/arc-curve-statics.md-->

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
