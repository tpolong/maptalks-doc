---
title: ExcavateAnalysis
---

# ExcavateAnalysis

A spatial analysis object for excavate analysis, used to perform excavate analysis on a 3D scene.

It delimits a region with a polygon boundary (`boundary`), "digs out" part of the model, and reveals the bottom face (textured with `textureUrl` at a given `height`).

> Note: ExcavateAnalysis does **not** extend Analysis. It extends ExtrudePolygonLayer from `@maptalks/vt` (with the ExcavateRenderer registered as both the `gl` and `gpu` renderers), so it is itself a WebGL layer: it is added to a GroupGLLayer with `addTo(groupGLLayer)`, and `excavate(layers)` is used to specify the layers to be excavated (verified against the 2026 source).

## Constructor

```js
import { ExcavateAnalysis } from '@maptalks/gl-layers';

const excavateAnalysis = new ExcavateAnalysis('excavate', {
  boundary: [
    [121.10, 39.20],
    [121.11, 39.20],
    [121.11, 39.21],
    [121.10, 39.21],
    [121.10, 39.20]
  ],
  textureUrl: './textures/ground.jpg',
  height: 10
});

excavateAnalysis.addTo(groupGLLayer);
```

<details><summary>Details</summary>
<div>
Parameters:

* id\* **String** the layer id
* options\* **Object** configuration options, the available options are as follows:

| Option   |   Type    |   Description                     | Default |
|  ------ | :----:   | ----                      |   :-----------:  |
|boundary*| Array\<Array\> | The coordinate rings of the excavate boundary (added after cross-checking the 2026 source code) | null |
|textureUrl| String   | The url of the texture of the excavate bottom (mentioned in the README) | null |
|height   | Number   | Excavate height in meters (`z || 0` in the source's altitudeToDistance) | 0 |

</div>
</details>

## Member Methods

<details><summary>excavate(layers)</summary>
<div>
<br/>

Specifies the layers to be excavated; updates the height map and redraws.

Parameters:

* layers **Layer[] | Layer** the layer(s) to be excavated

Returns:

* void

</div>
</details>

<details><summary>getExcavatedLayers()</summary>
<div>
<br/>

Gets the excavated layers.

Returns:

* Layer[]

</div>
</details>

<details><summary>enable()</summary>
<div>
<br/>

Enables the excavate effect.

Returns:

* void

</div>
</details>

<details><summary>disable()</summary>
<div>
<br/>

Disables the excavate effect.

Returns:

* void

</div>
</details>

<details><summary>isEnable()</summary>
<div>
<br/>

Whether the excavate effect is enabled.

Returns:

* Boolean

</div>
</details>

<!-- api-gen:start -->
### Other Public Methods of ExcavateAnalysis

<!--@include: ./includes/api/excavate-analysis-missing.md-->

### Methods Inherited from ExtrudePolygonLayer

The following methods are provided by the parent class [ExtrudePolygonLayer](/en/api/extrude-polygon-layer) and are available on instances of this class.

<!--@include: ./includes/api/extrude-polygon-layer-methods.md-->

### Methods Inherited from Vector3DLayer

The following methods are provided by the parent class Vector3DLayer and are available on instances of this class.

<!--@include: ./includes/api/vector3-d-layer-methods.md-->

### Methods Inherited from OverlayLayer

The following methods are provided by the parent class [OverlayLayer](/en/api/overlay-layer) and are available on instances of this class.

<!--@include: ./includes/api/overlay-layer-methods.md-->

### Methods Inherited from Layer

The following methods are provided by the parent class [Layer](/en/api/layer) and are available on instances of this class.

<!--@include: ./includes/api/layer-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [JSONAble](/en/api/json-able)（`getJSONType`…）；[Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Renderable](/en/api/renderable).
<!-- api-gen:end -->

## Methods Inherited from ExtrudePolygonLayer

ExcavateAnalysis inherits all layer methods and options of [ExtrudePolygonLayer](./extrude-polygon-layer) (and further of [PolygonLayer](./polygon-layer)).

> This document has been cross-checked against the @maptalks/gl-layers 2026 source (api-notes-others.md / api-notes-vt-gl.md)

## Static Methods

<!-- api-gen:start -->
### Other Static Methods of ExcavateAnalysis

<!--@include: ./includes/api/excavate-analysis-statics-missing.md-->

### Static Methods Inherited from Vector3DLayer

The following methods are provided by the parent class Vector3DLayer and are available on instances of this class.

<!--@include: ./includes/api/vector3-d-layer-statics.md-->

### Static Methods Inherited from Layer

The following methods are provided by the parent class [Layer](/en/api/layer) and are available on instances of this class.

<!--@include: ./includes/api/layer-statics.md-->
<!-- api-gen:end -->

## Events

<!-- api-gen:start -->
### Events Inherited from OverlayLayer

<!--@include: ./includes/api/overlay-layer-events.md-->

### Events Inherited from Layer

<!--@include: ./includes/api/layer-events.md-->
<!-- api-gen:end -->
