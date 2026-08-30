---
title: DrawTool
---

# DrawTool

DrawTool is maptalks' core drawing tool. It extends `MapTool`. It lets users draw point, line and polygon features by clicking on the map, and serves as the foundation for higher-level tools such as distance measurement and area measurement. After a drawing finishes, the `drawend` event fires and the drawn geometry is returned.

```js
import { DrawTool } from "maptalks";

const drawTool = new DrawTool({
  mode: "Polygon",
  symbol: {
    lineColor: "#1bc8f8"
  }
}).addTo(map);
```

## Constructor

```js
new DrawTool(options)
```

Parameters:

* `options` — DrawTool options. Most properties match the `DrawTool.options` table below.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `mode` | `String` | The drawing mode name, corresponding to a registered mode | `null` |
| `symbol` | `Object` | The symbol style of the drawing | `null` |
| `once` | `Boolean` | Whether to disable the tool automatically after drawing finishes | `false` |
| `autoPanAtEdge` | `Boolean` | Whether to auto-pan the map when reaching the edge | `false` |
| `blockGeometryEvents` | `Boolean` | Whether to block geometry events while drawing | `false` |
| `zIndex` | `Number` | The layer z-index of the tool | `Number.MAX_VALUE` |
| `doubleClickZoom` | `Boolean` | Whether double-click zooming is allowed while drawing | `false` |
| `enableAltitude` | `Boolean` | Whether altitude is enabled | `true` |
| `interactive` | `Boolean` | Whether the tool responds to interaction | `true` |

## Member Methods

- `getMode(): String` — Gets the current drawing mode.
- `setMode(mode): DrawTool` — Sets the drawing mode.
- `getSymbol(): Object` — Gets the current drawing symbol.
- `setSymbol(symbol): DrawTool` — Sets the drawing symbol.
- `getCurrentGeometry(): Geometry` — Gets the geometry currently being drawn.
- `undo()` — Undoes the last step.
- `redo()` — Redoes the last step.
- `endDraw(param): DrawTool` — Ends the current drawing, `param` is the ending parameter.
- `addCoordinate(coordinate): DrawTool` — Adds a coordinate to the current drawing.
- `setLayerZIndex(z): DrawTool` — Sets the z-index of the tool's layer.

## Static Methods

- `registerMode(name, modeAction)` — Registers a custom drawing mode.
- `getRegisterMode(name): Object` — Gets a registered drawing mode.
- `getAllRegisterMode(): Object` — Gets all registered drawing modes.

## Events

- `drawprepare` — Fired before drawing starts.
- `drawstart` — Fired when drawing starts.
- `drawvertex` — Fired when a new vertex is added while drawing.
- `drawend` — Fired when drawing finishes.
- `mousemove` — Fired when the mouse moves while drawing.
