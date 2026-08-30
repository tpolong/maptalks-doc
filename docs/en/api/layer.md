---
title: Layer
---

# Layer

Layer is the base class of all maptalks layers, defining their common capabilities: add/remove from a map, z-index management, opacity, visibility, zoom range, mask, collision detection, identify, and events. It is abstract (`@abstract`) and not instantiated directly.

`TileLayer`, `VectorLayer`, `OverlayLayer`, `ImageLayer`, and `CanvasLayer` all extend `Layer`. `TileLayer` renders tiles, `OverlayLayer` manages geometry, and `VectorLayer` is its subclass.

The inheritance chain is `Layer → JSONAble(Eventable(Renderable(Class)))`, giving it event (`on/off/fire`), JSON serialization, and rendering capabilities.

```js
import { TileLayer } from "maptalks";

const layer = new TileLayer("base", {
  urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
  subdomains: ["a", "b", "c", "d"],
}).addTo(map);
```

## Constructor

```js
new Layer(id, options)
```

Parameters:

* **id** `String` unique layer id (required).
* **options** `Object` layer options (optional).

## Options

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `attribution` | String | layer attribution | `null` |
| `minZoom` | Number | minimum zoom to display | `null` |
| `maxZoom` | Number | maximum zoom to display | `null` |
| `visible` | Boolean | whether the layer is visible | `true` |
| `opacity` | Number | layer opacity (0~1) | `1` |
| `zIndex` | Number | layer z-order | `undefined` |
| `hitDetect` | Boolean | enable hit detection (affects cursor) | `!mobile` |
| `renderer` | String | renderer type (canvas/gl/gpu/dom) | `'canvas'` |
| `globalCompositeOperation` | String | canvas 2d blend mode | `null` |
| `cssFilter` | String | CSS filter applied to canvas | `null` |
| `forceRenderOnMoving` | Boolean | force redraw while moving | `false` |
| `forceRenderOnZooming` | Boolean | force redraw while zooming | `false` |
| `forceRenderOnRotating` | Boolean | force redraw while rotating | `false` |
| `collision` | Boolean | enable collision detection | `false` |
| `collisionScope` | String | collision scope (layer/map) | `'layer'` |
| `maskClip` | Boolean | clip by mask | `true` |
| `mask` | Geometry\|Object | layer mask | `null` |
| `canvas` | HTMLCanvasElement | layer canvas | — |

## Member Methods

### Identity

- `getId(): string` / `setId(id): this` — get/set layer id

### Add & remove

- `addTo(map): this` — add the layer to a map
- `remove(): this` — remove the layer from the map

### Z-order

- `getZIndex(): number` / `setZIndex(zIndex): this` — get/set z-order
- `bringToFront(): this` — bring to front
- `bringToBack(): this` — bring to back

### Visibility & opacity

- `show(): this` / `hide(): this` — show/hide the layer
- `isVisible(): boolean` — whether visible
- `getOpacity(): number` / `setOpacity(opacity): this` — get/set opacity

### Zoom range

- `getMinZoom(): number` / `getMaxZoom(): number` — get min/max zoom

### Loading

- `load(): this` — load the layer
- `isLoaded(): boolean` — whether loaded

### Rendering

- `getRenderer()` — get the renderer
- `isCanvasRender(): boolean` — whether canvas-rendered

### Map-related

- `getMap(): Map` — get the map the layer is on
- `getProjection()` — get the projection

### Mask

- `getMask(): Geometry` / `setMask(mask): this` / `removeMask(): this` — get/set/remove mask

### Identify

- `identify(coordinate, options)` — identify features at a coordinate
- `identifyAtPoint(containerPoint, options)` — identify features at a container point

### Collision

- `getCollisionIndex(): CollisionIndex` — get the collision index
- `clearCollisionIndex(): this` — clear the collision index

### Serialization

- `toJSON(options?): Object` — export layer JSON

## Static Methods

- `Layer.fromJSON(layerJSON): Layer | null` — restore a layer from JSON
- `Layer.mergeOptions(options): this` — merge default options

## Events

| Event | Fired when |
| --- | --- |
| `idchange` | layer id changes |
| `setzindex` | z-order set |
| `setopacity` | opacity set |
| `show` / `hide` | shown/hidden |
| `visiblechange` | visibility changes |
| `add` / `remove` | added/removed from map |
| `renderercreate` | renderer created |
| `layerload` | layer loaded |

```js
layer.on("layerload", () => {
  console.log("layer loaded");
});
```
