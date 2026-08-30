---
title: PointLayer
---

# PointLayer

PointLayer is a layer for rendering point data based on WebGL graphics technology. PointLayer uses the same rendering logic as [VectorTileLayer](/en/api/vector-tile-layer) and shares the same Symbol styles.

PointLayer is used exactly like [VectorLayer](https://maptalks.org/maptalks.js/api/0.x/VectorLayer.html) in the core maptalks library, but benefits from WebGL technology for significantly better performance.

PointLayer only supports adding [Marker](https://maptalks.org/maptalks.js/api/0.x/Marker.html) and [MultiPoint](https://maptalks.org/maptalks.js/api/0.x/MultiPoint.html). Adding other data will raise an error.

PointLayer supports all marker and text styles of the Symbol styles.

It is an indirect subclass of [maptalks.OverlayLayer](https://maptalks.org/maptalks.js/api/0.x/OverlayLayer.html) (directly inheriting from Vector3DLayer) and inherits all methods of Vector3DLayer.

> [!INFO]
> By default, PointLayer assembles all Markers into a single 3D Mesh for rendering. Updating some Marker-related styles causes the layer to rebuild the Mesh, and frequent operations may cause performance issues. See the [performance optimization for vector layers](/en/api/vt-performance) document for details.

## Constructor

```js
import { PointLayer } from '@maptalks/gl-layers';

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

<!--@include: ./includes/vector3d-layer-methods.md-->

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

<!--@include: ./includes/overlay-layer-methods.md-->

<!--@include: ./includes/layer-methods.md-->

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

## Events

<!--@include: ./includes/js-events-example.md-->

### Layer Events

<!--@include: ./includes/vector3d-layer-events.md-->

> Note: The renderer also fires rendering events such as `buildmarkermesh`, `updatemesh`, `partialupdate`, `removegeo`, and `iblupdated` (verified in 2026).

### Events Inherited from OverlayLayer

<!--@include: ./includes/overlay-layer-events.md-->

### Events Inherited from Layer

<!--@include: ./includes/layer-events.md-->

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
