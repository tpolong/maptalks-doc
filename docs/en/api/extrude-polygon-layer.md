---
title: ExtrudePolygonLayer
---

# ExtrudePolygonLayer

ExtrudePolygonLayer is a WebGL 3D extrusion layer of [PolygonLayer](./polygon-layer). It extrudes Polygon / MultiPolygon data into 3D volumes (such as buildings) based on the height property, with the top and side faces rendered with independent materials.

It is a subclass of [Vector3DLayer](./line-string-layer), inheriting all methods of Vector3DLayer and additionally supporting independent top/side materials and extrusion data config.

## Constructor

```js
import { ExtrudePolygonLayer } from '@maptalks/gl-layers';

const layer = new ExtrudePolygonLayer('extrude');
```

## Constructor Options

ExtrudePolygonLayer adds the following options on top of the Vector3DLayer options:

| Option | Type | Description | Default |
| :------ | :------ | :------ | :------ |
| `dataConfig` | Object | The extrusion data config (LitDataConfig); see the default value below | see below |
| `material` | Object | The PBR material of the top face (LitMaterial); the default material is used when not set | None |
| `sideMaterial` | Object | The side face material; falls back to `material` when not set | None |
| `cullFace` | Boolean | Whether to enable face culling | `false` |
| `castShadow` | Boolean | Whether to cast shadows | `true` |
| `depthMask` | Boolean | The depth writing switch | None |

**Default dataConfig**:

```js
{
  altitudeProperty: 'height',       // 要素属性 height 作为拉伸高度
  minHeightProperty: 'min_height',  // 要素属性 min_height 作为最小高度
  defaultAltitude: 20,              // 无 height 属性时的默认拉伸高度（米）
  perPositionHeight: false
}
```

That is, the `height` property of a feature determines the extrusion height, `min_height` determines the bottom height, and the default extrusion is 20 meters when it is not set.

## Methods

<details><summary>updateMaterial(material)</summary>
<div>

Updates the top face material.

Parameters:

* material **Object** The PBR material of the top face (LitMaterial); pass `null` to clear it

Returns:

* **ExtrudePolygonLayer** this

</div>
</details>

<details><summary>updateSideMaterial(material)</summary>
<div>

Updates the side face material; falls back to the top face material when `null` is passed.

Returns:

* **ExtrudePolygonLayer** this

</div>
</details>

<details><summary>updateDataConfig(dataConfig)</summary>
<div>

Updates the extrusion data config (such as `altitudeProperty`, `defaultAltitude`, etc.).

Returns:

* **ExtrudePolygonLayer** this

</div>
</details>

## Symbol Styles

Symbol properties supported by ExtrudePolygonLayer:

| Property | Description | Default |
| :------ | :------ | :------ |
| `polygonFill` | Fill color | `[1, 1, 1, 1]` |
| `polygonOpacity` | Fill opacity | `1` |
| `topPolygonFill` | Top face color | `[1, 1, 1, 1]` |
| `bottomPolygonFill` | Bottom face color | `[1, 1, 1, 1]` |

For special geometries such as Circle, Ellipse, Sector and Rectangle, the layer automatically computes the oriented minimum bounding box (OMBB), converts them to polygons, and then extrudes them.

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
