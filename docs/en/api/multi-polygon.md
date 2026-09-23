---
title: MultiPolygon
---

# MultiPolygon

MultiPolygon is a multi-polygon geometry class that extends MultiPath. It represents a collection of polygon faces, commonly used for administrative regions, parcels, or arbitrary polygon data. It can be constructed from an array of polygon coordinates or an array of Polygons.

```js
import { MultiPolygon } from "maptalks";

const polygons = new MultiPolygon([
  [[[100, 0], [101, 0], [101, 1], [100, 0]]],
  [[[102, 2], [103, 2], [103, 3], [102, 2]]]
]);
// Or pass Polygon[]:
const polyGeoms = [new Polygon([[[100, 0], [101, 0], [101, 1], [100, 0]]])];
const polygons2 = new MultiPolygon(polyGeoms);

layer.addGeometry(polygons);
```

## Constructor

```js
new MultiPolygon(data, options?)
```

Parameters:

* `data` — An array of polygon coordinates (each polygon is an array of coordinate rings) or `Polygon[]`.
* `options` — (Optional) Geometry options, see the options of Path / Geometry.

## options

MultiPolygon has no class-specific options; it inherits the options of Path.

## Methods

No class-specific methods; it inherits the methods of MultiPath.

<!-- api-gen:start -->
### Methods Inherited from MultiPath

The following methods are provided by the parent class MultiPath and are available on instances of this class.

<!--@include: ./includes/api/multi-path-methods.md-->

### Methods Inherited from MultiGeometry

The following methods are provided by the parent class [MultiGeometry](/en/api/multi-geometry) and are available on instances of this class.

<!--@include: ./includes/api/multi-geometry-methods.md-->

### Methods Inherited from GeometryCollection

The following methods are provided by the parent class [GeometryCollection](/en/api/geometry-collection) and are available on instances of this class.

<!--@include: ./includes/api/geometry-collection-methods.md-->

### Methods Inherited from Geometry

The following methods are provided by the parent class [Geometry](/en/api/geometry) and are available on instances of this class.

<!--@include: ./includes/api/geometry-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [JSONAble](/en/api/json-able)（`getJSONType`…）；[Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/en/api/handlerable)；[Menuable](/en/api/menuable).
<!-- api-gen:end -->

## Static Methods

- `MultiPolygon.fromJSON(json): MultiPolygon` — Creates a MultiPolygon instance from a JSON object.

## Events

No class-specific events.

<!-- api-gen:start -->
### Events Inherited from GeometryCollection

<!--@include: ./includes/api/geometry-collection-events.md-->

### Events Inherited from Geometry

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
