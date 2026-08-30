---
title: Map
---

# Map

Map is the core class of maptalks. It creates and manages a map on a given HTML container, handling the spatial reference (projection), view state (center/zoom/pitch/bearing), layer management, interaction (drag/zoom/rotate/pitch), coordinate conversion, and the event system.

The inheritance chain is `Map → Handlerable(Eventable(Renderable(Class)))`, so a Map has event (`on/off/once/fire`), configuration (`config`), rendering (`getRendererClass`) and interaction-handler capabilities.

```js
import { Map, TileLayer } from "maptalks";

const map = new Map("map", {
  center: [121.47, 31.23],
  zoom: 14,
  baseLayer: new TileLayer("base", {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
  }),
});
```

## Constructor

```js
new Map(container, options)
```

Parameters:

* **container** `String | HTMLElement` The map container — a DOM element or its id.
* **options** `Object` **required**. Common construction options:

| Option | Type | Description |
| --- | --- | --- |
| `center` | `Number[] \| Coordinate` | **required** initial map center |
| `zoom` | `Number` | **required** initial zoom level |
| `spatialReference` | `Object` | spatial reference, default EPSG:3857 |
| `baseLayer` | `Layer` | initial base layer |
| `layers` | `Layer[]` | other initial layers |
| `pitch` | `Number` | initial pitch (degrees) |
| `bearing` | `Number` | initial bearing (degrees) |

## Options

### View & zoom

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `centerCross` | Boolean | Show a red cross at map center | `false` |
| `seamlessZoom` | Boolean | Use seamless zoom mode | `true` |
| `zoomAnimation` | Boolean | Enable zoom animation | `true` |
| `zoomAnimationDuration` | Number | Zoom animation duration (ms) | `330` |
| `panAnimation` | Boolean | Continue pan animation after drag/touch | `true` |
| `panAnimationDuration` | Number | Pan animation duration (ms) | `600` |
| `rotateAnimation` | Boolean | Continue rotation animation | `true` |
| `rotateAnimationDuration` | Number | Rotation animation duration (ms) | `800` |
| `maxZoom` | Number | Maximum zoom level | `null` |
| `minZoom` | Number | Minimum zoom level | `null` |
| `maxExtent` | Extent | Maximum extent restriction | `null` |
| `maxPitch` | Number | Maximum pitch | `80` |
| `maxVisualPitch` | Number | Maximum visual pitch | `70` |

### Interaction

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `draggable` | Boolean | Enable drag | `true` |
| `dragPan` | Boolean | Drag to pan | `true` |
| `dragRotate` | Boolean | Right-click or Ctrl+left-click drag to rotate | `true` |
| `dragPitch` | Boolean | Right-click or Ctrl+left-click drag to pitch | `true` |
| `switchDragButton` | Boolean | Switch left button to rotate, right to move | `false` |
| `zoomable` | Boolean | Enable zoom | `true` |
| `scrollWheelZoom` | Boolean | Scroll-wheel zoom | `true` |
| `doubleClickZoom` | Boolean | Double-click zoom | `true` |
| `touchGesture` | Boolean | Allow two-finger touch zoom/rotate/pitch | `true` |
| `touchZoom` | Boolean | Touch zoom | `true` |
| `touchRotate` | Boolean | Touch rotate | `true` |
| `touchPitch` | Boolean | Touch pitch | `true` |
| `boxZoom` | Boolean | Box zoom | `false` |

### Rendering & performance

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `renderer` | `String \| String[]` | Renderer type (`canvas` / `gl` / `gpu`, see the note below) | `['canvas','gl','gpu']` |
| `devicePixelRatio` | Number | Override device DPR | `null` |
| `hitDetect` | Boolean | Layer hit detection for cursor style | `true` |
| `hitDetectLimit` | Number | Max layers to hit-detect | `5` |
| `fpsOnInteracting` | Number | FPS while interacting, 0 to disable | `25` |
| `stopRenderOnOffscreen` | Boolean | Stop rendering when container is offscreen | `true` |
| `fog` | Boolean | Draw fog in the distance | `true` |
| `fogColor` | `Number[]` | Fog color [r,g,b] | `[233,233,233]` |
| `cameraFarUndergroundInMeter` | Number | Camera far distance underground (m) | `2000` |

The map uses the first available renderer in the `renderer` list, in order. The default `['canvas','gl','gpu']` prefers 2D canvas rendering; pass `'gpu'` explicitly to force WebGPU rendering (`MapGPURenderer`).

- **`'canvas'`** — 2D canvas rendering, the default path for 2D layers (tiles, markers, etc.).
- **`'gl'`** — WebGL rendering (`MapGLRenderer`), the path for 3D scenes.
- **`'gpu'`** — WebGPU rendering (`MapGPURenderer`), registered via `Map.registerRenderer('gpu', MapGPURenderer)`; it creates the context with `canvas.getContext('webgpu')` and uses `reshader.GraphicsDevice` as the GPU device (`isWebGPU()` returns `true`).

**WebGPU rendering notes** (see [WebGPU rendering](/en/guide/webgpu)):

- **Browser/device requirement**: requires a WebGPU-capable browser (modern Chromium such as desktop Chrome/Edge, and newer Safari and Firefox) and a WebGPU-capable GPU/driver; check `navigator.gpu` to detect support.
- **Screenshot & export**: WebGPU does not preserve the drawing buffer by default, so `toDataURL()`/screenshot relies on the `preserveGpuDrawingBuffer` option; when enabled, each frame is read back into a readback canvas (`device.preserveDrawingBuffer`).

### Controls

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `control` | Boolean | Allow adding controls | `true` |
| `attribution` | `Boolean \| Object` | Show attribution control | `true` |
| `zoomControl` | `Boolean \| Object` | Zoom control | `false` |
| `scaleControl` | `Boolean \| Object` | Scale control | `false` |
| `overviewControl` | `Boolean \| Object` | Overview control | `false` |

## Member Methods

### Lifecycle & basics

- `isLoaded(): boolean` — whether the map is loaded
- `getContainer(): HTMLElement` — get the map container
- `getSize(): Size` — get the map pixel size
- `remove(): Map` — remove the map
- `isRemoved(): boolean` — whether the map is removed
- `checkSize(force?): Map` — check and update container size
- `setDevicePixelRatio(dpr): Map` / `getDevicePixelRatio(): number` — set/get DPR
- `toJSON(options?): Object` — export a map JSON snapshot
- `getRenderer()` — get the renderer instance

### View & camera

- `getZoom(): number` / `setZoom(zoom, options?): Map` — get/set zoom
- `zoomIn(): Map` / `zoomOut(): Map` — zoom in/out one level
- `getCenter(): Coordinate` / `setCenter(center, padding?): Map` — get/set center
- `setCenterAndZoom(center, zoom?, padding?): Map` — set center and zoom together
- `getView(): MapViewType` / `setView(view): Map` — get/set view (center/zoom/pitch/bearing)
- `getPitch(): number` / `setPitch(pitch): Map` — get/set pitch
- `getBearing(): number` / `setBearing(bearing): Map` — get/set bearing
- `getFov(): number` / `setFov(fov): Map` — get/set FOV
- `getResolution(zoom?): number` — get resolution
- `setCameraPosition(coordinate): Map` — set camera from a coordinate
- `setCameraMovements(frameOptions, option?): Map` — run sequential camera frames (auto flight)
- `lookAt(params): Map` — point the camera at a coordinate
- `isZooming(): boolean` — whether zooming
- `isAnimating(): boolean` — whether animating

### Pan & animation

- `panTo(coordinate, options?, step?): Map` — smoothly pan to a target
- `panBy(offset, options?, step?): Map` — pan by pixel offset
- `animateTo(view, options?, step?): Player` — animate the view
- `flyTo(view, options?, step?): this` — smoothly fly to a view
- `isRotating(): boolean` / `isMoving(): boolean` — rotation/movement state

### Layer management

- `getBaseLayer(): Layer` / `setBaseLayer(baseLayer): Map` — get/set base layer
- `removeBaseLayer(): Map` — remove the base layer
- `getLayers(filter?): Layer[]` — get layers
- `getLayer(id): Layer | null` — get a layer by id
- `addLayer(layers, ...otherLayers): this` — add layers
- `removeLayer(layers): this` — remove layers
- `sortLayers(layers): Map` — sort layers

### Spatial reference & extent

- `getSpatialReference()` / `setSpatialReference(ref): Map` — get/set spatial reference
- `getProjection()` — get projection
- `getFullExtent(): Extent` — get full extent
- `getMaxExtent(): Extent` / `setMaxExtent(extent): Map` — get/set max extent

### Coordinate conversion

- `coordinateToPoint(coordinate, zoom?, out?): Point` — coordinate to 2D point
- `pointToCoordinate(point, zoom?, out?): Coordinate` — 2D point to coordinate
- `coordinateToContainerPoint(coordinate, zoom?, out?): Point` — coordinate to container point
- `containerPointToCoordinate(containerPoint, out?): Coordinate` — container point to coordinate
- `getExtent(): Extent` — get the current view geographic extent
- `getContainerExtent(): PointExtent` — get the container extent

### Distance & measurement

- `distanceToPixel(xDist, yDist, zoom?): Size` — geographic distance to pixels
- `pixelToDistance(width, height): number` — pixels to geographic distance
- `computeLength(coord1, coord2): number` — distance between two coordinates (m)
- `computeGeometryLength(geometry): number` — geometry length (m)
- `computeGeometryArea(geometry): number` — geometry area (sq m)

### Query & identify

- `identify(opts, callback): Map` — identify geometry at a coordinate
- `identifyAtPoint(point, opts, callback): Map` — identify geometry at a container point
- `getCollisionIndex(): CollisionIndex` — get the collision index

### View history

- `getViewHistory(): MapViewType[]` — get view history
- `hasPreviousView(): boolean` / `hasNextView(): boolean` — has previous/next view
- `zoomToPreviousView(options?): MapViewType` / `zoomToNextView(options?): MapViewType` — go to previous/next view

### Export & fullscreen

- `toDataURL(options?): string | null` — export an image
- `isFullScreen(): boolean` — whether fullscreen
- `requestFullScreen(dom?): Map` — request fullscreen
- `cancelFullScreen(): Map` — cancel fullscreen

## Static Methods

- `Map.VERSION` — version number
- `Map.fromJSON(container, profile, options?): Map` — rebuild a map from JSON
- `Map.addOnLoadHook(fn, ...args): Map` — add a hook after map load

## Events

### View & interaction

| Event | Fired when |
| --- | --- |
| `movestart` / `moving` / `moveend` | pan starts/ongoing/ends |
| `zoomstart` / `zooming` / `zoomend` | zoom starts/ongoing/ends |
| `rotatestart` / `rotate` / `rotateend` | bearing changes |
| `pitchstart` / `pitch` / `pitchend` | pitch changes |
| `dragrotatestart` / `dragrotating` / `dragrotateend` | drag-rotate |
| `fovchange` | FOV changes |
| `resize` | container resize |
| `viewchange` | view changes |

### Layers

| Event | Fired when |
| --- | --- |
| `addlayer` | layer added |
| `removelayer` | layer removed |
| `setbaselayer` | base layer set |
| `baselayerchangestart` / `baselayerload` / `baselayerchangeend` | base layer changes |

### Animation

| Event | Fired when |
| --- | --- |
| `animatestart` / `animating` / `animateend` | animation |
| `animateinterrupted` | animation interrupted |

### Lifecycle

| Event | Fired when |
| --- | --- |
| `removestart` / `removeend` | map removed |
| `fullscreenstart` / `fullscreenend` / `cancelfullscreen` | fullscreen |

```js
map.on("zoomend", (e) => {
  console.log("zoom:", map.getZoom(), "center:", map.getCenter());
});
```
