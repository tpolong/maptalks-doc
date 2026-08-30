---
title: LineString
---

# LineString

LineString is the line geometry class of maptalks, inheriting from Path. It consists of a sequence of coordinate points forming a polyline, and supports configuring arrow styles and arrow placement. It is commonly used for linear features such as roads and tracks.

```js
import { LineString } from "maptalks";
// Usage example
const draw = new LineString([[0, 0], [1, 1], [2, 0]]);
```

## Constructor

```js
new LineString(coordinates, options?)
```

Parameters:

* `coordinates` — The coordinate array of the line, supporting forms such as `[[x, y], ...]`, `[[x, y, z], ...]`, or `[{x, y}, ...]`.
* `options` — (Optional) Configuration options, see the table below.

## options

| Config | Type | Description | Default |
| --- | --- | --- | --- |
| arrowStyle | `string \| Array` | The arrow style, `'classic'` or `[width, height]` | `null` |
| arrowPlacement | `string` | The arrow placement: `'vertex-last'`, `'vertex-first'`, `'vertex-firstlast'`, or `'point'` | `'vertex-last'` |

## Methods

- `setCoordinates(coords)` — Sets the coordinate points of the line.
- `getCoordinates()` — Gets the coordinate points of the line.
- `getCenterInExtent(extent)` — Returns the center point within the given extent.
- `getOutline()` — Returns the outline of the line.

## Static Methods

- `fromJSON(json)` — Creates a LineString from a JSON object.

## Events

- `shapechange` — Fired when the shape of the line changes.
