---
title: GLTFLayer
---

# GLTFLayer

GLTFLayer is a layer for drawing [GLTF 3D models](../guide/gltf) based on WebGL.

GLTFLayer only supports adding [GLTFMarker](./gltf-marker) and [MultiGLTFMarker](./multi-gltf-marker); adding any other data will throw an error.

It is a subclass of [maptalks.OverlayLayer](/en/api/overlay-layer) and inherits all the methods of OverlayLayer.

> Note: In the source code, the actual inheritance chain of GLTFLayer is `GLTFLayer → MaskLayerMixin(AbstractGLTFLayer) → maptalks.OverlayLayer`, and the constructor signature supports `new GLTFLayer(id, geometries?, options?)`; when `geometries` is omitted, `options` can be passed as the second argument (verified against source code).

## Constructor

```js
import { GLTFLayer } from 'maptalks-gl';

const layer = new GLTFLayer('gltf0');
```
<details><summary>Details</summary>
<div>
Parameters:

* id\* **String** The layer id
* options\* **Object** Configuration options, available options are as follows:

| Option               |   Type   |  Description             | Default |
|  ------             | :----:  | ----                      |   :-----------:  |
<!--@include: ./includes/layer-options.md-->

GLTFLayer-specific options (supplemented from source code):

| Option               |   Type   |  Description             | Default |
|  ------             | :----:  | ----                      |   :-----------:  |
| markerTypes           | String[] | Geometry types accepted by the layer      | ['gltfmarker', 'multigltfmarker'] |
| pointSize             | Number   | Point size (pixels)              | 1 |
| renderer              | String   | Renderer type                  | 'gl' |
| doubleBuffer          | Boolean  | Whether to use double-buffered rendering              | false |
| glOptions             | Object   | GL context options               | null |
| markerEvents          | Boolean  | Whether to respond to marker mouse events    | true |
| forceRenderOnZooming  | Boolean  | Whether to force a redraw when zooming          | true |
| forceRenderOnMoving   | Boolean  | Whether to force a redraw when moving          | true |
| forceRenderOnRotating | Boolean  | Whether to force a redraw when rotating          | true |
| style                 | Object   | The layer style, either an array of `[{filter, symbol}, ...]` or `{ $root, style: [{filter, symbol}, ...] }` (`$root` is used to replace `{$root}` in `symbol.url`) | — |

</div>
</details>

## Methods

<!-- api-gen:start -->
### Other Public Methods of GLTFLayer

<!--@include: ./includes/api/gltf-layer-missing.md-->

### Methods Inherited from AbstractGLTFLayer

The following methods are provided by the parent class AbstractGLTFLayer and are available on instances of this class.

<!--@include: ./includes/api/abstract-gltf-layer-methods.md-->

### Methods Inherited from OverlayLayer

The following methods are provided by the parent class [OverlayLayer](/en/api/overlay-layer) and are available on instances of this class.

<!--@include: ./includes/api/overlay-layer-methods.md-->

### Methods Inherited from Layer

The following methods are provided by the parent class [Layer](/en/api/layer) and are available on instances of this class.

<!--@include: ./includes/api/layer-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [JSONAble](/en/api/json-able)（`getJSONType`…）；[Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Renderable](/en/api/renderable).
<!-- api-gen:end -->

## Static Methods

<details><summary>fromJSON(json)</summary>
<div>
<br/>

Creates a GLTFLayer object from the layer's JSON object.

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
```

Returns:

* GLTFLayer

</div>
</details>

<!-- api-gen:start -->
### Other Static Methods of GLTFLayer

<!--@include: ./includes/api/gltf-layer-statics-missing.md-->

### Static Methods Inherited from AbstractGLTFLayer

The following methods are provided by the parent class AbstractGLTFLayer and are available on instances of this class.

<!--@include: ./includes/api/abstract-gltf-layer-statics.md-->

### Static Methods Inherited from Layer

The following methods are provided by the parent class [Layer](/en/api/layer) and are available on instances of this class.

<!--@include: ./includes/api/layer-statics.md-->
<!-- api-gen:end -->

## Methods (supplemented from source code)

> [!NOTE]
> The following GLTFLayer-specific methods are provided in the source code of maptalks-gl 0.124.4 and were not documented in older docs:

| Method | Simplified signature | Description |
| --- | --- | --- |
| `setURLModifier` / `getURLModifier` | `(fn) / ()` | Set/get the model url rewriting function |
| `identify` | `(coordinate, options?): Object[]` | Identify models by coordinate (internally converted to a container point, then picking is performed) |
| `identifyAtPoint` | `(point, options={}): Object[]` | Pick models at a container point; `options.filter` filters the results, `includeInternals` returns internal data |
| `addGeometry` | `(geometries, fitView?)` | Add geometries (GeoJSON supported), registering a pickingId for each |
| `addMarker` | `(markers)` | Add markers to the internal markerMap |
| `setStyle` / `getStyle` | `(layerStyle) / ()` | Set/get the layer style (filter-symbol); setStyle fires the `setstyle` event |
| `updateSymbol` | `(idx, symbolProperties)` | Update the symbol at index idx in the style, firing the `updatesymbol` event |
| `getGLTFUrls` | `(): string[]` | Get the list of loaded model urls |
| `outlineBatch` / `outlineAll` / `cancelOutline` | `(filterIndex?) / () / ()` | Outline models in batch by filter index / outline all / cancel outline |
| `clear` | `()` | Clear all geometries |
| `toJSON` | `(options?)` | Export the layer JSON |
| `static registerShader` / `removeShader` / `getShaders` | — | Register/remove/get shaders (built-in: phong, pbr, pbr-lite, depth, pointline, wireframe) |

## Events

<!--@include: ./includes/js-events-example.md-->

> [!NOTE] Event verification (source code)
> - `modelload`: fired when all models are loaded; parameters: `{ models: url list }`
> - `modelerror`: fired when a model fails to load; parameters: `{ url, info }`
> - `setstyle`: fired after setting the style; parameters: `{ style }`
> - `updatesymbol`: fired after updating a symbol; parameters: `{ index, symbol }`
> - `load` / `add`: fired on the marker when the model is loaded / when the marker is added (including the layer reference)

> This document has been verified against the source code of maptalks-gl 0.124.4

<!-- api-gen:start -->
### Other Events of GLTFLayer

The following events are defined in the source and are fired by this class (or its ancestors):

<!--@include: ./includes/api/gltf-layer-events-missing.md-->

### Events Inherited from AbstractGLTFLayer

<!--@include: ./includes/api/abstract-gltf-layer-events.md-->

### Events Inherited from OverlayLayer

<!--@include: ./includes/api/overlay-layer-events.md-->

### Events Inherited from Layer

<!--@include: ./includes/api/layer-events.md-->
<!-- api-gen:end -->
