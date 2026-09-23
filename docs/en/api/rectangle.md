---
title: Rectangle
---

# Rectangle

Rectangle is the rectangle geometry class of maptalks, inheriting from Polygon. It is defined by a northwest corner, a width, and a height, and is commonly used for bounding boxes or rectangular areas.

```js
import { Rectangle } from "maptalks";
// Usage example
const rect = new Rectangle([0, 0], 1000, 600);
```

## Constructor

```js
new Rectangle(nw, width, height, options?)
```

Parameters:

* `nw` — The northwest corner coordinates of the rectangle, e.g. `[x, y]`.
* `width` — The width of the rectangle.
* `height` — The height of the rectangle.
* `options` — (Optional) Configuration options.

## options

Rectangle has no specific options; options are inherited from [Polygon](/en/api/polygon) / [Path](/en/api/path), with styling controlled via `symbol`.

## Methods

- `getCoordinates()` — Gets the coordinates of the rectangle (returns the northwest corner).
- `setCoordinates(nw)` — Sets the northwest corner coordinates of the rectangle.
- `getWidth()` — Gets the width of the rectangle.
- `setWidth(width)` — Sets the width of the rectangle.
- `getHeight()` — Gets the height of the rectangle.
- `setHeight(height)` — Sets the height of the rectangle.
- `getShell()` — Gets the outer ring of the rectangle.
- `getHoles()` — Gets the inner rings of the rectangle.
- `animateShow()` — Shows the rectangle with an animation.

<!-- api-gen:start -->
### Other Public Methods of Rectangle

<!--@include: ./includes/api/rectangle-missing.md-->

### Methods Inherited from Polygon

The following methods are provided by the parent class [Polygon](/en/api/polygon) and are available on instances of this class.

<!--@include: ./includes/api/polygon-methods.md-->

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

- `fromJSON(json)` — Creates a Rectangle from a JSON object.

<!-- api-gen:start -->
### Static Methods Inherited from Geometry

The following methods are provided by the parent class [Geometry](/en/api/geometry) and are available on instances of this class.

<!--@include: ./includes/api/geometry-statics.md-->
<!-- api-gen:end -->

## Events

- `positionchange` — Fired when the position of the rectangle changes.
- `shapechange` — Fired when the shape of the rectangle changes.

<!-- api-gen:start -->
### Events Inherited from Polygon

<!--@include: ./includes/api/polygon-events.md-->

### Events Inherited from Geometry

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
