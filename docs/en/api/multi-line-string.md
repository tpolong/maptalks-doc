---
title: MultiLineString
---

# MultiLineString

MultiLineString is a multi-line-string geometry class that extends MultiPath. It represents a collection of polylines, commonly used for roads, rivers, or trajectory data. It can be constructed from an array of coordinates or an array of LineStrings.

```js
import { MultiLineString } from "maptalks";

const lines = new MultiLineString([
  [[100, 0], [101, 1], [102, 2]],
  [[103, 3], [104, 4]]
]);
// Or pass LineString[]:
const lineGeoms = [new LineString([[100, 0], [101, 1]])];
const lines2 = new MultiLineString(lineGeoms);

layer.addGeometry(lines);
```

## Constructor

```js
new MultiLineString(data, options?)
```

Parameters:

* `data` — An array of coordinates (an array of line-coordinate arrays) or `LineString[]`.
* `options` — (Optional) Geometry options, see the options of Path / Geometry.

## options

MultiLineString has no class-specific options; it inherits the options of Path.

## Methods

No class-specific methods; it inherits the methods of MultiPath.

<!-- api-gen:start -->
### Other Public Methods of MultiLineString

<!--@include: ./includes/api/multi-line-string-missing.md-->

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

- `MultiLineString.fromJSON(json): MultiLineString` — Creates a MultiLineString instance from a JSON object.

<!-- api-gen:start -->
### Other Static Methods of MultiLineString

<!--@include: ./includes/api/multi-line-string-statics-missing.md-->

### Static Methods Inherited from Geometry

The following methods are provided by the parent class [Geometry](/en/api/geometry) and are available on instances of this class.

<!--@include: ./includes/api/geometry-statics.md-->
<!-- api-gen:end -->

## Events

No class-specific events.

<!-- api-gen:start -->
### Events Inherited from GeometryCollection

<!--@include: ./includes/api/geometry-collection-events.md-->

### Events Inherited from Geometry

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
