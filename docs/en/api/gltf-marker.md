---
title: GLTFMarker
---

# GLTFMarker

GLTFMarker is a subclass of [Marker](https://maptalks.org/maptalks.js/api/0.x/Marker.html) used to add GLTF models at specified geographic coordinates and interact with them.

GLTFMarker can use symbol to set the state of the model, such as scale, opacity, and rotation angle, and provides methods to update the model, update the model state, and start or pause animations.

> Note: The 2026 source code confirms the inheritance as `class GLTFMarker extends Marker` (maptalks.Marker, which provides events, infoWindow, and other capabilities) (verified against 2026 source code).

## Constructor

```js
import { GLTFMarker } from '@maptalks/gl-layers';

const gltfMarker = new GLTFMarker([0, 0], {
  symbol: {
    url: 'path/to/gltf.gltf'
  }
});
```
<details><summary>Details</summary>
<div>
Parameters:

* coordinates\* **Number[]** The coordinates
* options\* **Object** Configuration options, available options are as follows:

| Option               |   Type   |  Description             | Default |
|  ------             | :----:  | ----                      |   :-----------:  |
<!--@include: ./includes/gltf-marker-options.md-->
<!--@include: ./includes/geometry-options.md-->

</div>
</details>

## Symbol Description

The `options.symbol` of GLTFMarker contains the following settings and properties.

<!--@include: ./includes/gltf-marker-symbols.md-->

> [!NOTE] Symbol field verification (2026 source code)
> - All the fields in the table above are valid; the default value of `url` is `'pyramid'` (a built-in model)
> - The 2026 source code also supports: `modelHeight` (adaptive scaling by model height, in meters), `markerPixelHeight` (fixed pixel height), `translationX/Y/Z`, `rotationX/Y/Z`, `scaleX/Y/Z` (per-axis settings), `anchorZ` with the extended value set `'center' | 'bottom' | 'top'`, `doubleSided` (double-sided rendering), `animationNodes` (restricting animation nodes)
> - Model opacity is controlled via `uniforms.polygonOpacity` (pbr/phong) or `uniforms.lineOpacity` (wireframe); `symbol.opacity` does not exist in the 2026 source code (verified against 2026 source code)

## Methods

<!--@include: ./includes/gltf-marker-methods.md-->

<!--@include: ./includes/geometry-methods.md-->

> [!NOTE] Method verification (2026 source code)
> Methods not documented in older docs but provided in the 2026 source code:
> - `setUniform(key, value, nodeIndex?)` / `getUniforms()`: set / batch read material uniforms by key
> - `setModelHeight(h)` / `getModelHeight()`: adaptive scaling by model height (meters)
> - `cancelMarkerPixelHeight()`: cancel the fixed pixel height and restore on-demand scaling
> - `getCurrentPixelHeight()`: the model's current pixel height
> - `rotateAround(coordinate, degree)`: rotate around the given coordinate
> - `highlight({color, opacity, bloom})` / `highlightNodes([{nodeIndex, ...}])` / `cancelHighlight(nodes?)`: highlight the whole model / highlight specified nodes / cancel highlight
> - `outlineNodes(nodes)` / `cancelOutline(nodes?)`: outline specified nodes / cancel outline
> - `getBoundingBox()` / `getBoundingBoxCenter()` / `getBoundingBoxWidth(axis)`: model bounding box related (note the YZ axis flip conversion)
> - `getGLTFJSON()` / `getGLTFBBox()` / `getAllMeshes()`: get the raw gltf JSON / the model bounding box / all meshes
> - `showBoundingBox(options?)` / `hideBoundingBox()`: show / hide the model bounding box helper
> - `setNodeTRS(nodeIndex, trs={translation, rotation, scale})`: set the translation/rotation/scale of a specified gltf node
> - `zoomTo(options={animation: true}, step?)`: zoom to the model bounding box (`zoomAt(index, ...)` is a MultiGLTFMarker method, see [MultiGLTFMarker](./multi-gltf-marker))
> - `getCenter()`: the geometric center coordinates of the model (including the translation offset)
> - `isLoaded()`: whether the model has finished loading
> - `copy()` / `remove()`: deep copy / remove and release model resources (mesh, textures, jointTexture)

## Static Methods

<!--@include: ./includes/geometry-static-methods.md-->

> [!NOTE] Additional static methods (2026 source code)
> - `static getGLTFAnchorsAlongLineString(coordinates, bboxWidth, map, options)`: generate model anchors in batch along a line (options: gapLength / count / rotateAlongLine / snapToEndVertexes / scaleEndModel)
> - `static combineGLTFBoundingBox(markers): {min, max}`: combine the bounding boxes of multiple markers

## Events

<!--@include: ./includes/js-events-example.md-->

### Geometry Events

<!--@include: ./includes/gltf-marker-events.md-->

### Events Inherited from Geometry

<!--@include: ./includes/geometry-events.md-->

> [!NOTE] Additional events (verified against 2026 source code)
> - `meshcreate`: fired when the mesh is created (fired on the marker; the layer receives it synchronously through the geometry event)
> - `modelerror`: fired when a model fails to load
> - `positionchange`: fired when the coordinates change

> This document has been verified against the 2026 source code of @maptalks/gl-layers (api-notes-others.md)
