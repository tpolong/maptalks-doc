---
title: renderer.CanvasRenderer
---

# renderer.CanvasRenderer

renderer.CanvasRenderer is the base renderer that renders a layer on an HTMLCanvasElement, extending `LayerAbstractRenderer`. It creates the canvas 2D context, resets/clears/clips the canvas during the render lifecycle, and fires layer events such as `canvascreate`, `renderstart`, `renderend`, and `resourceload`. It is normally created internally by renderers and usually not instantiated directly.

```js
import { renderer } from "maptalks";

// Usually created internally by the layer
const r = new renderer.CanvasRenderer(layer);
```

## Constructor

```js
new CanvasRenderer(layer)
```

Parameters:

* **layer** `Layer` — The layer to be rendered.

## Options

CanvasRenderer has no standalone options; rendering-related configuration is controlled by the options of the layer being rendered, such as `forceRenderOnMoving` (whether to force a redraw while moving), `globalCompositeOperation` (canvas composite mode), and `renderer` (renderer type). See the options docs of each layer.

## Methods

- `needToRedraw(): boolean` — Whether the current frame needs a redraw; returns `true` while the map is interacting or the view has changed.
- `createContext(): void` — Create the 2D context for the current canvas and apply the device pixel ratio and composite mode.
- `resetCanvasTransform(): void` — Reset the canvas transform according to the device pixel ratio.
- `clearCanvas(): void` — Clear the canvas to blank.
- `clear(): void` — Clear the canvas and mark it for redraw.
- `prepareCanvas(): PointExtent` — Prepare the canvas for rendering: create the canvas on first use or reset/clear the existing one, and return the mask's 2D extent.
- `onResize(param): void` — On map resize, drop the extent cache, resize the canvas, and redraw.

## Events

The renderer fires the following layer events via `layer.fire`:

- `canvascreate` — Fired when the canvas is created; the event payload includes `context` and `gl`.
- `renderstart` — Fired when the layer starts rendering; the event payload includes `context` and `gl`.
- `renderend` — Fired when the layer finishes rendering.
- `resourceload` — Fired when the layer finishes loading resources.
