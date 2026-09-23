---
title: Path
---

# Path

Path is an abstract base class for line/polygon geometries that extends Geometry. It is the parent of line and polygon geometries such as LineString and Polygon, and unifies the smoothing, clipping, simplification, and symbolization of those geometries. It is usually not instantiated directly; use its subclasses instead.

```js
import { Path } from "maptalks";

// Path is an abstract base class, usually not instantiated directly.
// Use its subclasses LineString / Polygon instead.
const line = new LineString([[100, 0], [101, 1]]);
```

## Constructor

Path is an abstract base class; its constructor is called by its subclasses.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `smoothness` | `Number` | Smoothness, controls how smooth the line is. | `0` |
| `enableClip` | `Boolean` | Whether to enable clipping. | `true` |
| `strictClip` | `Boolean` | Whether to enable strict clipping. | — |
| `enableSimplify` | `Boolean` | Whether to enable simplification. | `true` |
| `simplifyTolerance` | `Number` | Simplification tolerance (in pixels). | `2` |
| `symbol` | `Object` | Symbol settings such as `lineColor`, `lineWidth`, `lineOpacity`, `polygonFill`, etc. | — |

## Methods

- `animateShow(options, cb): Player` — Shows the geometry with an animation, returning the animation Player; `cb` is the completion callback.

<!-- api-gen:start -->
### Other Public Methods of Path

<!--@include: ./includes/api/path-missing.md-->

### Methods Inherited from Geometry

The following methods are provided by the parent class [Geometry](/en/api/geometry) and are available on instances of this class.

<!--@include: ./includes/api/geometry-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [JSONAble](/en/api/json-able)（`getJSONType`…）；[Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/en/api/handlerable)；[Menuable](/en/api/menuable).
<!-- api-gen:end -->

## Static Methods

No class-specific static methods.

## Events

No class-specific events.

<!-- api-gen:start -->
### Events Inherited from Geometry

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
