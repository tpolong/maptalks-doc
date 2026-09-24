---
title: PointLayer
---

# PointLayer

PointLayer is a layer for rendering point data based on WebGL graphics technology. PointLayer uses the same rendering logic as [VectorTileLayer](/en/api/vector-tile-layer) and shares the same Symbol styles.

PointLayer is used exactly like [VectorLayer](/en/api/vector-layer) in the core maptalks library, but benefits from WebGL technology for significantly better performance.

PointLayer only supports adding [Marker](/en/api/marker) and [MultiPoint](/en/api/multi-point). Adding other data will raise an error.

PointLayer supports all marker and text styles of the Symbol styles.

It is an indirect subclass of [maptalks.OverlayLayer](/en/api/overlay-layer) (directly inheriting from Vector3DLayer) and inherits all methods of Vector3DLayer.

> [!INFO]
> By default, PointLayer assembles all Markers into a single 3D Mesh for rendering. Updating some Marker-related styles causes the layer to rebuild the Mesh, and frequent operations may cause performance issues. See the [performance optimization for vector layers](/en/api/vt-performance) document for details.

## Constructor

```js
import { PointLayer } from 'maptalks-gl';

const layer = new PointLayer('point0');
```
<details><summary>Details</summary>
<div>
Parameters:

* id\* **String** the layer id
* options\* **Object** options, the available options are as follows:

| Option | Type | Description | Default |
|  ------             | :----:  | ----                      |   :-----------:  |
|iconErrorUrl         | String  | The fallback icon for icons that fail to load | null |
|collision            | Boolean | Whether to enable collision detection | false |
|collisionFrameLimit  | Number  | The time limit for collision detection calculation per frame, in ms | 1 |
|sceneConfig          | Object  | The sceneConfig of the point rendering program | default config |
|sceneConfig.collision | Boolean | The collision detection switch of the point rendering program | true |
|sceneConfig.fading   | Boolean | Whether to enable the fade effect of collision detection | false |
|sceneConfig.fadingDuration | Number | The duration of the collision detection fade, in ms | 16 * 14 |
|sceneConfig.fadeInDelay    | Number | The delay before showing after passing collision detection, in ms | 600 |
|sceneConfig.fadeOutDelay   | Number | The delay before hiding after failing collision detection, in ms | 100 |
|sceneConfig.uniquePlacement | Boolean | Whether to avoid duplicate labels (unique placement) | false |
|sceneConfig.depthFunc| String  | The depth test function. Possible values are: 'always', '<=', '<', '>=', '>', '=', '!=', 'never' | 'always' |
|glyphSdfLimitPerFrame | Number | The maximum number of SDF glyphs drawn per tile per frame | 15 |
<!--@include: ./includes/vector3d-layer-options.md-->
<!--@include: ./includes/layer-options.md-->

</div>
</details>

## Methods

<details><summary>identify(coordinate, options)</summary>
<div>
<br/>

Queries features at the given coordinate on the layer (only rendered data can be queried).

```js
layer.identify([121.23, 39.34], { tolerance: 2 });
```

Parameters:

* coordinate **Number[]** the coordinate value
* options **Object** options, the possible properties are:
| Property | Type | Description | Default |
|  ------      | :----:  | ----  |   :-----------:  |
| tolerance    | Number  | The pixel tolerance for the query | 3 |

Returns:

* Geometry[]

</div>
</details>

<details><summary>identifyAtPoint(containerPoint, options)</summary>
<div>
<br/>

Queries features at the given container point on the layer.

```js
layer.identifyAtPoint([400, 300], { tolerance: 2 });
```

Parameters:

* containerPoint **Number[]** container coordinates (screen pixels)
* options **Object** options, the possible properties are:
| Property | Type | Description | Default |
|  ------      | :----:  | ----  |   :-----------:  |
| tolerance    | Number  | The pixel tolerance for the query | 3 |

Returns:

* Object[]

</div>
</details>

<!-- api-gen:start -->
### Other Public Methods of PointLayer

<!--@include: ./includes/api/point-layer-missing.md-->

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

## Static Methods

<details><summary>fromJSON(json)</summary>
<div>
<br/>

Creates a PointLayer object from the layer's JSON object.

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
```

Returns:

* PointLayer

</div>
</details>

<!-- api-gen:start -->
### Other Static Methods of PointLayer

<!--@include: ./includes/api/point-layer-statics-missing.md-->

### Static Methods Inherited from Vector3DLayer

The following methods are provided by the parent class Vector3DLayer and are available on instances of this class.

<!--@include: ./includes/api/vector3-d-layer-statics.md-->

### Static Methods Inherited from Layer

The following methods are provided by the parent class [Layer](/en/api/layer) and are available on instances of this class.

<!--@include: ./includes/api/layer-statics.md-->
<!-- api-gen:end -->

## Events

<!--@include: ./includes/js-events-example.md-->

> Note: The renderer also fires rendering events such as `buildmarkermesh`, `updatemesh`, `partialupdate`, `removegeo`, and `iblupdated`.

> This document has been cross-checked against the maptalks-gl 0.124.4 source code

<!-- api-gen:start -->
### Events Inherited from Vector3DLayer

<!--@include: ./includes/api/vector3-d-layer-events.md-->

### Events Inherited from OverlayLayer

<!--@include: ./includes/api/overlay-layer-events.md-->

### Events Inherited from Layer

<!--@include: ./includes/api/layer-events.md-->
<!-- api-gen:end -->
