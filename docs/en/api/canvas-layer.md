---
title: CanvasLayer
---

# CanvasLayer

CanvasLayer is a layer backed by an HTML5 2D canvas context, extending [Layer](/en/api/layer). It provides a set of interface methods for canvas painting. You can use it directly, but it is more recommended to extend it with a subclass and implement custom painting by overriding `draw()`. Note that a CanvasLayer cannot be serialized/deserialized with JSON.

```js
import { Map, CanvasLayer } from "maptalks";

const map = new Map("map", { center: [0, 0], zoom: 2 });

const layer = new CanvasLayer("canvas");

layer.prepareToDraw = function (context) {
  const size = map.getSize();
  return [size.width, size.height];
};

layer.draw = function (context, width, height) {
  context.fillStyle = "#f00";
  context.fillRect(0, 0, width, height);
};

layer.addTo(map);
```

## Constructor

```js
new CanvasLayer(id, options?)
```

Parameters:

* **id** `String|Number` layer id.
* **options** `Object` layer options (optional).

## options

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `doubleBuffer` | Boolean | whether the layer is rendered with double buffer | `false` |
| `animation` | Boolean | whether the layer is an animated layer | `false` |
| `fps` | Number\|String | animation fps, `1000 / 16` | `1000/16` |

## Member Methods

### Drawing interface (override)

- `prepareToDraw(context): Object[]` — called only once before the first draw, returns the params passed to `draw()`
- `draw(context, ...params): void` — interface to draw on the layer canvas (required to override)
- `doubleBuffer(bufferContext, context?): this` — double-buffer callback, clears the buffer by default

### Render control

- `isCanvasRender(): boolean` — whether it is canvas rendering
- `redraw(): this` — redraw the layer
- `play(): this` — start the animation
- `pause(): this` — pause the animation
- `isPlaying(): boolean` — whether the animation is playing
- `clearCanvas(): this` — clear the layer canvas
- `requestMapToRender(): this` — ask the map to redraw the canvas without firing events
- `completeRender(): this` — ask the map to redraw and fire the layerload event

### Lifecycle callbacks (override)

- `onCanvasCreate(): this` — callback when the layer canvas is created
- `onZoomStart(param)` / `onZooming(param)` / `onZoomEnd(param)` — map zoom callbacks
- `onMoveStart(param)` / `onMoving(param)` / `onMoveEnd(param)` — map move callbacks
- `onResize(param)` — map resize callback

## Events

Common layer events (`show`/`hide`, `setopacity`, `add`/`remove`, etc.) — see [Layer](/en/api/layer).
