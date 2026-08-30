---
title: GLTFLayer
---

# GLTFLayer

GLTFLayer is a layer for drawing [GLTF 3D models](../guide/gltf) based on WebGL.

GLTFLayer only supports adding [GLTFMarker](./gltf-marker) and [MultiGLTFMarker](./multi-gltf-marker); adding any other data will throw an error.

It is a subclass of [maptalks.OverlayLayer](https://maptalks.org/maptalks.js/api/0.x/OverlayLayer.html) and inherits all the methods of OverlayLayer.

> Note: In the 2026 source code, the actual inheritance chain of GLTFLayer is `GLTFLayer → MaskLayerMixin(AbstractGLTFLayer) → maptalks.OverlayLayer`, and the constructor signature supports `new GLTFLayer(id, geometries?, options?)`; when `geometries` is omitted, `options` can be passed as the second argument (verified against 2026 source code).

## Constructor

```js
import { GLTFLayer } from '@maptalks/gl-layers';

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

GLTFLayer-specific options (supplemented from 2026 source code):

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

<!--@include: ./includes/overlay-layer-methods.md-->

<!--@include: ./includes/layer-methods.md-->

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

## Methods (supplemented from 2026 source code)

> [!NOTE]
> The following GLTFLayer-specific methods are provided in the 2026 source code of @maptalks/gl-layers and were not documented in older docs:

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

### Layer Events

<!--@include: ./includes/gltf-layer-events.md-->

### Events Inherited from OverlayLayer

<!--@include: ./includes/overlay-layer-events.md-->

### Events Inherited from Layer

<!--@include: ./includes/layer-events.md-->

> [!NOTE] Event verification (2026 source code)
> - `modelload`: fired when all models are loaded; parameters: `{ models: url list }`
> - `modelerror`: fired when a model fails to load; parameters: `{ url, info }`
> - `setstyle`: fired after setting the style; parameters: `{ style }`
> - `updatesymbol`: fired after updating a symbol; parameters: `{ index, symbol }`
> - `load` / `add`: fired on the marker when the model is loaded / when the marker is added (including the layer reference)

> This document has been verified against the 2026 source code of @maptalks/gl-layers (api-notes-others.md)
