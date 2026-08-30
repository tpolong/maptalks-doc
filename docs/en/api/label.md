---
title: Label
---

# Label

Label is the point geometry class used to draw text labels, inheriting from [TextMarker](/en/api/text-marker). It draws text at a given coordinate and optionally a background box that is sized to fit the text, with a separate text symbol and box style (padding, alignment, min width/height).

```js
import { Label } from "maptalks";

const label = new Label("label with a box", [0, 0], {
  draggable: true,
  boxStyle: {
    padding: [12, 8],
    verticalAlignment: "top",
    horizontalAlignment: "right",
    minWidth: 300,
    minHeight: 200,
    symbol: {
      markerType: "square",
      markerFill: "rgb(135,196,240)",
      markerFillOpacity: 0.9,
      markerLineColor: "#34495e",
      markerLineWidth: 1,
    },
  },
  textSymbol: {
    textFaceName: "monospace",
    textFill: "#34495e",
    textHaloFill: "#fff",
    textHaloRadius: 4,
    textSize: 18,
    textWeight: "bold",
    textVerticalAlignment: "top",
  },
});
```

## Constructor

```js
new Label(content, coordinates, options?)
```

Parameters:

* `content` — The text content of the label.
* `coordinates` — The geographic coordinates of the label (`[x, y]` or a `Coordinate`).
* `options` — (Optional) Construct options, see the table below.

## options

| Config | Type | Description | Default |
| --- | --- | --- | --- |
| `boxStyle` | `object` | Box style, including `padding` (text padding, default `[12, 8]`), `verticalAlignment` (`top/middle/bottom`, default `middle`), `horizontalAlignment` (`left/middle/right`, default `middle`), `minWidth` (default `0`), `minHeight` (default `0`) and `symbol` (box symbol) | `null` |
| `textSymbol` | `object` | Text symbol, e.g. `textFaceName`, `textSize`, `textFill`, `textVerticalAlignment` | `null` |

Other options are inherited from [Marker](/en/api/marker) (e.g. `draggable`, `zIndex`, `properties`).

## Methods

- `getBoxStyle(): object` / `setBoxStyle(style): this` — Gets/sets the box style.
- `getTextSymbol(): object` / `setTextSymbol(symbol): this` — Gets/sets the text symbol.
- `_canEdit(): boolean` — Whether the label can be edited; Label always returns `false` (text labels do not support handle resizing).

## Static Methods

- `fromJSON(json): Label` — Creates a Label instance from a JSON object.

## Events

- `contentchange` — Fired when the text content changes (inherited from [TextMarker](/en/api/text-marker)).
