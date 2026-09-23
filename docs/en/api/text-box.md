---
title: TextBox
---

# TextBox

TextBox is the point geometry class used to draw a box with text inside, inheriting from [TextMarker](/en/api/text-marker). It draws a text box at a given coordinate, with configurable width, height, text style (autowrap, padding, alignment) and box symbol, and can be resized directly in the geometry editor.

```js
import { TextBox } from "maptalks";

const textbox = new TextBox("This is a textbox", [0, 0], 200, 90, {
  draggable: true,
  textStyle: {
    wrap: true,
    padding: [12, 8],
    verticalAlignment: "top",
    horizontalAlignment: "right",
    symbol: {
      textFaceName: "monospace",
      textFill: "#34495e",
      textHaloFill: "#fff",
      textHaloRadius: 4,
      textSize: 18,
      textWeight: "bold",
    },
  },
  boxSymbol: {
    markerType: "square",
    markerFill: "rgb(135,196,240)",
    markerFillOpacity: 0.9,
    markerLineColor: "#34495e",
    markerLineWidth: 1,
  },
});
```

## Constructor

```js
new TextBox(content, coordinates, width, height, options?)
```

Parameters:

* `content` — The text content of the textbox.
* `coordinates` — The geographic coordinates of the textbox (`[x, y]` or a `Coordinate`).
* `width` — The width in pixels, default `100`.
* `height` — The height in pixels, default `40`.
* `options` — (Optional) Construct options, see the table below.

## options

| Config | Type | Description | Default |
| --- | --- | --- | --- |
| `textStyle` | `object` | Text style, including `wrap` (autowrap, default `true`), `padding` (text padding, default `[12, 8]`), `verticalAlignment` (`top/middle/bottom`, default `middle`), `horizontalAlignment` (`left/middle/right`, default `middle`) and `symbol` (text symbol) | `null` |
| `boxSymbol` | `object` | The vector marker symbol of the background box, e.g. `markerType`, `markerFill`, `markerLineColor` | `null` |

Other options are inherited from [Marker](/en/api/marker) (e.g. `draggable`, `zIndex`, `properties`).

## Methods

- `getWidth(): number` / `setWidth(width): this` — Gets/sets the textbox width in pixels.
- `getHeight(): number` / `setHeight(height): this` — Gets/sets the textbox height in pixels.
- `getBoxSymbol(): object` / `setBoxSymbol(symbol): this` — Gets/sets the box symbol.
- `getTextStyle(): object` / `setTextStyle(style): this` — Gets/sets the text style.
- `startEdit(opts): this` — Starts editing; resolves function-type width/height to fixed pixels first.
- `endEdit(): this` — Ends editing and restores function-type width/height definitions.

<!-- api-gen:start -->
### Other Public Methods of TextBox

<!--@include: ./includes/api/text-box-missing.md-->

### Methods Inherited from TextMarker

The following methods are provided by the parent class [TextMarker](/en/api/text-marker) and are available on instances of this class.

<!--@include: ./includes/api/text-marker-methods.md-->

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

- `fromJSON(json): TextBox` — Creates a TextBox instance from a JSON object.

## Events

- `contentchange` — Fired when the text content changes (inherited from [TextMarker](/en/api/text-marker)).

<!-- api-gen:start -->
### Events Inherited from TextMarker

<!--@include: ./includes/api/text-marker-events.md-->

### Events Inherited from Geometry

<!--@include: ./includes/api/geometry-events.md-->
<!-- api-gen:end -->
