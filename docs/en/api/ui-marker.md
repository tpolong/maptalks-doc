---
title: UIMarker
---

# UIMarker

UIMarker is a draggable marker based on HTMLElement. It extends `UIComponent`. It binds arbitrary HTML content to a coordinate on the map and supports dragging, altitude setting and visibility toggling by zoom level. It is the most commonly used HTML annotation component on the map.

```js
import { UIMarker } from "maptalks";

const marker = new UIMarker([100, 30], {
  draggable: true,
  content: "<div class='my-marker'>Marker</div>"
}).addTo(map);
```

## Constructor

```js
new UIMarker(coordinate, options)
```

Parameters:

* `coordinate` — The coordinate of the marker (a `Coordinate` or `[x, y]`).
* `options` — Marker options. Some properties match the `UIMarker.options` table below.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `content` | `HTMLElement` / `String` | The content of the marker | `null` |
| `draggable` | `Boolean` | Whether the marker is draggable | `false` |
| `single` | `Boolean` | Whether the marker is unique | `false` |
| `altitude` | `Number` | The altitude of the marker | `0` |
| `minZoom` | `Number` | The minimum zoom level to display | `0` |
| `maxZoom` | `Number` | The maximum zoom level to display | `null` |
| `horizontalAlignment` | `String` | The horizontal alignment | `"middle"` |
| `verticalAlignment` | `String` | The vertical alignment | `"middle"` |
| `containerClass` | `String` | The CSS class of the container | `null` |

## Member Methods

- `setCoordinates(coordinate): UIMarker` — Sets the marker coordinate.
- `getCoordinates(): Coordinate` — Gets the marker coordinate.
- `getCenter(): Coordinate` — Gets the center coordinate of the marker.
- `getAltitude(): Number` — Gets the marker altitude.
- `setAltitude(altitude): UIMarker` — Sets the marker altitude.
- `setContent(content): UIMarker` — Sets the marker content.
- `getContent(): HTMLElement` — Gets the marker content.
- `flash(interval, count, cb, ctx): UIMarker` — Flashes the marker for a given number of times. `interval` is the flash interval, `count` is the times, `cb` is the per-frame callback, `ctx` is the callback context.
- `isDragging(): boolean` — Whether the marker is being dragged.

## Events

- `positionchange` — Fired when the marker position changes.
- `contentchange` — Fired when the marker content changes.
- `dragstart` — Fired when dragging starts.
- `dragging` — Fired while dragging.
- `dragend` — Fired when dragging ends.
