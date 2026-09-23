---
title: TextMarker
---

# TextMarker

TextMarker is the abstract base class for point markers with text, inheriting from [Marker](/en/api/marker). It describes a marker that contains both a text content and a background box; [TextBox](/en/api/text-box) and [Label](/en/api/label) both inherit from it. It is an abstract class that is not meant to be instantiated directly, but it manages text via `getContent`/`setContent` and splits it into a text symbol and a box symbol.

```js
import { TextBox } from "maptalks";
// Abstract base class, normally use its subclasses TextBox / Label
const textbox = new TextBox("This is a textbox", [0, 0], 200, 90);
```

## Constructor

```js
new TextMarker(coordinates, options)
```

Parameters:

* `coordinates` — The geographic coordinates of the marker (`[x, y]` or a `Coordinate`).
* `options` — Construct options, inherited from [Marker](/en/api/marker).
* Note: TextMarker is an abstract class; its constructor is intended for subclasses only.

## options

TextMarker has no options of its own; configuration is inherited from [Marker](/en/api/marker) (e.g. `symbol`, `draggable`, `zIndex`, `properties`).

## Methods

- `getContent(): string` — Gets the text content of the label.
- `setContent(content): this` — Sets a new text content and fires the `contentchange` event.
- `toJSON()` — Serializes to a JSON object, removing the default `symbol` field from the base class.
- `setSymbol(symbol): this` — Sets the symbol, splitting properties beginning with `text*` into the text symbol and the rest into the box symbol.

<!-- api-gen:start -->
### Other Public Methods of TextMarker

<!--@include: ./includes/api/text-marker-missing.md-->

### Methods Inherited from Marker

The following methods are provided by the parent class [Marker](/en/api/marker) and are available on instances of this class.

<!--@include: ./includes/api/marker-methods.md-->

### Methods Inherited from Geometry

The following methods are provided by the parent class [Geometry](/en/api/geometry) and are available on instances of this class.

<!--@include: ./includes/api/geometry-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [CenterMixin](/en/api/center-mixin)（`getCoordinates`、`setCoordinates`、`getMap`、`onPositionChanged`…）；[JSONAble](/en/api/json-able)（`getJSONType`…）；[Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/en/api/handlerable)；[Menuable](/en/api/menuable).
<!-- api-gen:end -->

## Static Methods

TextMarker has no static methods of its own.

<!-- api-gen:start -->
### Other Static Methods of TextMarker

<!--@include: ./includes/api/text-marker-statics-missing.md-->

### Static Methods Inherited from Geometry

The following methods are provided by the parent class [Geometry](/en/api/geometry) and are available on instances of this class.

<!--@include: ./includes/api/geometry-statics.md-->
<!-- api-gen:end -->

## Events

- `contentchange` — Fired when the text content changes; the event object carries `old` and `new` fields.

<!-- api-gen:start -->
### Other Events of TextMarker

The following events are defined in the source and are fired by this class (or its ancestors):

<!--@include: ./includes/api/text-marker-events-missing.md-->

### Events Inherited from Geometry

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
