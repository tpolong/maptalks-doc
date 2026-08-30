---
title: Material
---

# Material reference

Materials define the parameters that govern how objects interact with light in a 3D rendering algorithm. Two materials are currently available: [PBR material](#pbr-material) and [Phong (Phong lighting)](#phong-material).

Materials are currently mainly used for:

* The [lit render plugin](/en/guide/style/plugin-lit) (PBR material) and the [phong render plugin](/en/guide/style/plugin-phong) of [VectorTileLayer](/en/api/vector-tile-layer).
* [GLTF layers](/en/api/gltf-layer) render models with PBR material by default.
* [Geo3DTilesLayer](/en/api/geo-3dtiles-layer) uses Phong material by default.

## PBR material

The PBR algorithm is a material system centered on roughness and metalness. See "What is PBR" in the fundamentals for a detailed introduction.

The PBR material parameters are as follows:

| Name | Type | Description | Default |
| :---------------- | ----------  | :-----------------------------------  | -------------- |
|baseColorTexture   | String      | Path of the base color texture, either a url or a base64 string      | null          |
|baseColorFactor    | Number[4]   | Base color, a normalized four-element array                                                        | [1, 1, 1, 1]  |
|hsv                | Number[3]   | [HSV color](https://baike.baidu.com/item/HSV/547122) parameters; the three values are hue, saturation and value, each in the range 0-1 | [0, 0, 0] |
|baseColorIntensity  | Number      | Color intensity; color = baseColorFactor * baseColorIntensity                          | 1        |
|contrast           | Number      | Color contrast, range 0-5. A value of 1 leaves the original color unchanged                           | 1         |
|outputSRGB         | Number      | Whether to output [sRGB color](https://baike.baidu.com/item/sRGB/1350619?fr=aladdin)       | 1         |
|metallicRoughnessTexture | String| Path of the metallic-roughness texture; the g channel is metalness and the b channel is roughness. Either a url or a base64 string        | null       |
|roughnessFactor    | Number      | Roughness, range 0-1; 0 is the smoothest and 1 is the roughest                                   | 0.4       |
|metallicFactor     | Number      | Metalness, range 0-1; 0 is non-metal and 1 is metal                                     | 0         |
|normalTexture      | String      | Path of the normal texture, either a url or a base64 string                     | null          |
|normalMapFactor    | Number      | Intensity factor of the normal texture.                                  | 1             |
|bumpTexture        | String      | Path of the height texture, either a url or a base64 string                     | null          |
|bumpScale          | Number      | Intensity factor of the height texture.                                    | 0.05          |
|occlusionTexture   | String      | Path of the ambient occlusion texture, either a url or a base64 string                | null          |
|emissiveTexture    | String      | Path of the emissive texture, either a url or a base64 string                    | null          |
|emissiveFactor     | Number[3]   | Emissive color value                                          | [0, 0, 0]    |
|emitColorFactor    | Number      | Intensity factor of the emissive color.                                   | 1             |
|emitMultiplicative | Number      | Whether the emissive color multiplies the original color; 0 adds and 1 multiplies.          | 1            |
|clearCoatThickness | Number      | Clear coat thickness                                              | 5             |
|clearCoatFactor    | Number      | Clear coat intensity factor.                                         | 0            |
|clearCoatIor       | Number      | Clear coat index of refraction (IOR)                                      | 1.4          |
|clearCoatRoughnessFactor | Number| Clear coat roughness, 0-1                                   | 0.04         |
|noiseTexture       | String      | Path of the random-value texture for stochastic distribution, either a url or a base64 string       | null          |
|uvScale            | Number[2]   | uv coordinate scale.                                       | [1, 1]       |
|uvOffset           | Number[2]   | uv offset; 0 means no offset, 1 means exactly one texture size.        | [0, 0]       |
|uvRotation         | Number      | Texture rotation angle in degrees, 0-360                          | 0            |
|uvOffsetAnim       | Number[2]   | Offset animation along the uv directions. Animation starts when the value is not 1; the larger the absolute value, the faster the animation, and negative values animate in the opposite direction | [0, 0] |

> Note: bumpTexture, bumpScale, occlusionTexture, noiseTexture and clearCoat* (clearCoatThickness / clearCoatFactor / clearCoatIor / clearCoatRoughnessFactor) have been removed from the LitMaterial type interface in the 2026 source code (no longer declared in `vt/src/types/index.ts`; the runtime StandardMaterial still keeps bumpTexture / occlusionTexture / noiseTexture etc. for compatibility, while the clearCoat* series has no corresponding defaults).
>
> Note: roughnessFactor and metallicFactor are typed as Number[] in the 2026 source code (2026 cross-check).
>
> Note: per the 2026 source code, the emitMultiplicative default is 1 (StandardMaterial DEFAULT_UNIFORMS); the old documentation wrote 0.

Example:

```js
{
  "material": {
    "baseColorTexture": "/path/to/baseColorTexture.jpg",
    "baseColorFactor": [1, 1, 1, 1],
    "hsv": [0, 0, 0],
    "baseColorIntensity": 1,
    "contrast": 1,
    "outputSRGB": 1,
    "metallicRoughnessTexture": "/path/to/metallicRoughnessTexture.jpg",
    "roughnessFactor": 1,
    "metallicFactor": 1,
    "normalTexture": "/path/to/normalTexture.jpg",
    "noiseTexture": null,
    "uvScale": [1, 1],
    "uvOffset": [0, 0],
    "uvRotation": 0,
    "uvOffsetAnim": [0, 0],
    "normalMapFactor": 1,
    "bumpTexture": null,
    "bumpScale": 0.02,
    "clearCoatThickness": 5,
    "clearCoatFactor": 0,
    "clearCoatIor": 1.4,
    "clearCoatRoughnessFactor": 0.04,
    "occlusionTexture": "/path/to/occlusionTexture.jpg",
    "emissiveTexture": null,
    "emissiveFactor": [0, 0, 0],
    "emitColorFactor": 1,
    "emitMultiplicative": 0
  }
}
```

## Phong material

Because PBR material requires WebGL extensions such as standard_derative, Phong lighting material can be used instead when the client does not support these extensions.

Phong lighting requires no WebGL extensions, giving it the best compatibility.

| Name | Type | Description | Default |
| :---------------- | ----------  | :-----------------------------------  | -------------- |
|baseColorTexture   | String      | Path of the base color texture, either a url or a base64 string      | null          |
|baseColorFactor    | Number[4]   | Base color, a normalized four-element array                                | [1, 1, 1, 1]  |
|materialShininess  | Number      | Material shininess.                                          | 32            |
|specularStrength   | Number      | Specular intensity factor.                                      | 32             |
|environmentExposure| Number      | Ambient light exposure intensity.                                      | 1             |
|extrusionOpacity   | Number      | Extrusion side opacity (used by PhongPainter when generating the side opacity property).  | 0             |
|opacity            | Number      | Opacity, 0-1                                        | 1             |
|normalTexture      | String      | Path of the normal texture, either a url or a base64 string                     | null          |
|occlusionTexture   | String      | Path of the ambient occlusion texture, either a url or a base64 string                | null          |
|emissiveTexture    | String      | Path of the emissive texture, either a url or a base64 string                    | null          |
|uvScale            | Number[2]   | uv coordinate scale.                                       | [1, 1]       |
|uvOffset           | Number[2]   | uv offset; 0 means no offset, 1 means exactly one texture size.        | [0, 0]       |
|extrusionOpacityRange| Number[2] | Range of the side opacity variation. If the maximum exceeds 1, the top portion is fully opaque. | [0, 1.8]     |

> Note: ambientStrength no longer exists in the 2026 source code (neither PhongMaterial nor PhongShader has this property), so it has been removed from the old documentation; environmentExposure and extrusionOpacity are PhongMaterial defaults in the 2026 source code (2026 cross-check).


Example:

```js
{
  material: {
    'baseColorFactor': [1, 1, 1, 1],
    'materialShininess' : 32.0,
    'specularStrength' : 32,
    'opacity' : 1.0,
    'extrusionOpacityRange': [0, 1.8],

    'baseColorTexture': null,
    'normalTexture': null,
    'emissiveTexture': null,
    'occlusionTexture': null,

    'uvScale': [1, 1],
    'uvOffset': [0, 0]
  }
}
```

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
