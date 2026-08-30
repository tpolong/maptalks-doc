---
title: GroupGLLayer
---

# GroupGLLayer

In maptalks, by default each WebGL layer has its own canvas, and the map stacks the canvases in z-order of the layers. However, this mode brings a problem: if layer A is stacked above layer B, then no matter what the actual 3D front-to-back relationship of the objects in layers A and B is, objects in layer A will always be drawn on top of objects in layer B.

GroupGLLayer was created to solve the problem that objects in different WebGL layers cannot be rendered in their true 3D front-to-back order.

GroupGLLayer is a WebGL container layer. It can hold multiple WebGL sub-layers, and all the sub-layers share a single WebGL context, so 3D objects drawn by different layers can be blended together and keep the correct 3D front-to-back order.

GroupGLLayer also implements some common global effects, such as shadows, HDR global ambient light, skybox, weather effects and common post-processing:

* shadowmap shadow rendering
* hdr HDR ambient light
* skybox background skybox
* weather weather effects
* Post-processing
  * FXAA anti-aliasing, implemented by blending neighboring pixels.
  * TAA anti-aliasing, implemented by blending historical render frames.
  * bloom, implemented with Gaussian blur and blending to produce a glow effect on objects.
  * SSAO screen-space ambient occlusion, computing depth variations in the scene to draw shadows at object corners, enhancing the depth perception of the scene.
  * SSR screen-space reflection, reflecting objects in screen space, used for reflections on water surfaces, ground, etc.
  * sharpen, sharpening the image.
  * outline object highlight, highlighting the outline of specified objects.

> Note: TAA anti-aliasing and SSAO screen-space ambient occlusion have been adjusted in the new version — in the 2026 source renderer (GroupGLLayerRenderer), `isEnableTAA` / `isEnableSSAO` always return false, so the related options no longer take effect; FXAA, bloom, SSR, sharpen, outline and other post-processing effects still work (verified against 2026 source).

You can configure the above global effects through GroupGLLayer.options.sceneConfig.

It is a subclass of [maptalks.Layer](https://maptalks.org/maptalks.js/api/0.x/Layer.html) and inherits all methods on Layer.

## Constructor

```js
import { GroupGLLayer } from '@maptalks/gl-layers';

const layer = new GroupGLLayer('group', [layer0, layer1, layer2], options);
```
<details><summary>Details</summary>
<div>
Parameters:

* id\* **String** layer id
* layers\* **Layer[]** list of sub-layers
* options\* **Object** configuration options, the available options are as follows:

| Option               |   Type   |   Description                     | Default |
|  ------             | :----:  | ----                      |   :-----------:  |
|renderer             | String  | Renderer type: `'gl'` (WebGL) or `'gpu'` (WebGPU). Set to `'gpu'` when <a href="../guide/webgpu">WebGPU rendering</a> is enabled (sub-layers must still be added with the `'gl'` renderer) | 'gl' |
|antialias            | Boolean | Whether to enable WebGL MSAA anti-aliasing. Enabled by default, with the sample count controlled by multiSamples; you can also disable it and use the FXAA post-processing anti-aliasing instead | true |
|multiSamples         | Number  | MSAA sample count (added after cross-checking the 2026 source code) | 4 |
|single               | Boolean | Whether only one GroupGLLayer instance is allowed; when false, multiple instances can be added (verified against 2026 source) | true |
|geometryEvents       | Boolean  | Whether Geometry on sub-layers can respond to events                           | true |
|extensions           | String[] | WebGL extensions that must be enabled, [full list of extensions](https://github.com/regl-project/regl/blob/master/API.md#extensions)   | [] |
|optionalExtensions   | String[] | WebGL extensions that can be optionally enabled, [full list of extensions](https://github.com/regl-project/regl/blob/master/API.md#extensions) | see the note below |
|sceneConfig          | Object   | Global effect settings, [configuration](#sceneconfig-configuration)          | {} |
|onlyWebGL1           | Boolean | Whether to force rendering with WebGL 1, for devices where WebGL 2 is problematic | false |
|viewMoveThreshold    | Number  | Threshold of view movement that triggers a redraw (added after cross-checking the 2026 source code) | 100 |
|forceRedrawPerFrame  | Boolean | Whether to force a redraw every frame (verified against 2026 source) | false |
|terrain              | Object  | Terrain configuration TerrainOptions; type supports mapbox / tianditu / cesium / cesium-ion (verified against 2026 source) | null |
<!--@include: ./includes/layer-options.md-->

> Note: The default value of antialias has been adjusted in the new version: in the 2026 source, MSAA anti-aliasing is enabled by default (multiSamples defaults to 4), and sceneConfig defaults to {} (verified 2026).

The default optionalExtensions:

```
['ANGLE_instanced_arrays','OES_element_index_uint','OES_standard_derivatives','OES_vertex_array_object','OES_texture_half_float', 'OES_texture_half_float_linear','OES_texture_float', 'OES_texture_float_linear','WEBGL_depth_texture', 'EXT_shader_texture_lod','WEBGL_compressed_texture_astc','WEBGL_compressed_texture_etc','WEBGL_compressed_texture_etc1','WEBGL_compressed_texture_pvrtc','WEBGL_compressed_texture_s3tc','WEBGL_compressed_texture_s3tc_srgb']
```

> Note: The default optionalExtensions in the 2026 source adds two more extensions to the list above — 'EXT_frag_depth' and 'EXT_texture_filter_anisotropic' (verified 2026).

> **WebGPU rendering**: GroupGLLayer registers both `'gl'` and `'gpu'` renderers (`registerRenderer('gl'|'gpu', Renderer)`), so it can take the WebGPU path via `renderer: 'gpu'`. When the map runs with `renderer: 'gpu'` (`MapGPURenderer`), it renders with a WebGPU device. A WebGPU-capable browser and GPU are required (check via `navigator.gpu`); see [WebGPU rendering](/en/guide/webgpu). Note: sub-layers added to a GroupGLLayer must still use the `'gl'` renderer (`addLayer` throws for non-`'gl'` sub-layers in the source).

</div>
</details>

## SceneConfig Configuration

An example of SceneConfig and its configuration description are as follows:

```js
const sceneConfig = {
  environment: {
    enable: true,                                   // 是否开启环境天空盒绘制
    mode: 1,                                        // 天空盒模式： 0: 氛围模式（AMBIENT）， 1: 实景模式（REALISTIC）
    level: 0,                                       // 实景模式下的模糊级别，0-3
    brightness: 1                                   // 天空盒的明亮度，-1 - 1， 默认为0
  },
  shadow: {
    type: 'esm',                                    // 阴影模式，固定为esm
    enable: true,                                   // 是否开启
    quality: 'high',                                // 阴影质量，可选的值：high, medium, low
    opacity: 1,                                     // 阴影的透明度，0 - 1
    color: [0, 0, 0],                               // 阴影的颜色，归一化三位rgb颜色值
    blurOffset: 1                                   // 阴影模糊偏移量，值越高阴影越模糊
  },
  ground: {
    enable: true,                                   // 是否开启地面绘制
    renderPlugin: {                                 // 地面的绘制插件，取值范围 lit 或者 fill
      type: 'lit'
    },
    symbol: {
      ssr: true,                                    // 是否开启ssr，屏幕空间反射
      material: litMaterial,                        // 如果绘制插件为lit，设置pbr材质
      polygonFill: [1, 1, 1, 1],                    // 四位归一化颜色值
      polygonOpacity: 1                             // 透明度 0-1
    }
  },
  weather: {                                        // 天气效果（2026 源码核对补充）
    enable: true,
    fog: {                                          // 雾效
      enable: true,
      start: 1000,
      end: 5000,
      color: [0.5, 0.5, 0.5]
    },
    rain: {                                         // 雨
      enable: true,
      density: 10,
      windDirectionX: 0,
      windDirectionY: 0,
      rainTexture: 'url/to/rain_texture.png'
    },
    snow: {                                         // 雪
      enable: false
    }
  },
  postProcess: {
    enable: true,                                   // 是否开启后处理
    antialias: {
      enable: true                                  // 是否开启FXAA后处理（TAA在2026源码渲染器中已停用）
    },
    ssr: {
      enable: true                                  // 是否开启屏幕空间反射
    },
    // ssao 已在新版本中停用（2026 核对，GroupGLLayerRenderer 中 isEnableSSAO 恒返回 false）
    // ssao: {
    //   enable: true,                              // 是否开启屏幕空间环境光遮蔽
    //   bias: 0.03,                                // 阴影偏移值，越大，阴影就越清晰，0.05 - 1
    //   radius: 0.08,                              // 遮蔽半径，越大，阴影就越清晰， 0.05 - 1
    //   intensity: 1.5                             // 强度因子， 0.1 - 5
    // },
    sharpen: {
      enable: false,                                // 是否开启锐化
      factor: 0.2                                   // 强度因子，0 - 1
    },
    bloom: {
      enable: true,                                 // 是否开启泛光
      factor: 1,                                    // 强度因子 0.1 - 5
      threshold: 0,                                 // 最小阈值（亮度低于阈值的区域不发光） 0 - 1
      radius: 1                                     // 泛光半径 0.1 - 4
    },
    outline: {
      enable: true,                                 // 是否开启高亮后处理
      // 2026 源码中 outline 还支持以下参数（2026 核对）：
      // highlightFactor: 1,
      // outlineFactor: 1,
      // outlineWidth: 1,
      // outlineColor: [1, 0, 0]
    }
    // scanEffect: {                                 // 扫描特效（2026 源码新增）
    //   enable: true,
    //   effects: [{ center, radius, speed, color }]
    // }
  }
};

const groupLayer = new GroupGLLayer('group', [layer], { sceneConfig });
```

> Note: weather (fog/rain/snow) and postProcess.scanEffect are newly added options confirmed in the 2026 source (api-notes-vt-gl.md); outline in the 2026 source also supports the highlightFactor, outlineFactor, outlineWidth and outlineColor parameters (verified 2026).

## Methods

<details><summary>setSceneConfig(sceneConfig)</summary>
<div>
<br/>

Sets the SceneConfig.

Parameters:

* sceneConfig **Object** the sceneConfig parameter

Returns:

* this

</div>
</details>

<details><summary>getSceneConfig()</summary>
<div>
<br/>

Gets the SceneConfig settings.

Returns:

* Object

</div>
</details>

<details><summary>getGroundConfig()</summary>
<div>
<br/>

Gets the sceneConfig.ground settings.

Returns:

* Object

</div>
</details>

<details><summary>getWeatherConfig()</summary>
<div>
<br/>

Gets the sceneConfig.weather settings (added after cross-checking the 2026 source code).

Returns:

* Object

</div>
</details>

<details><summary>getScanEffectConfig()</summary>
<div>
<br/>

Gets the sceneConfig.postProcess.scanEffect settings (added after cross-checking the 2026 source code).

Returns:

* Object

</div>
</details>

<details><summary>setTerrain(info)</summary>
<div>
<br/>

Sets the terrain configuration and creates the internal terrain layer (added after cross-checking the 2026 source code).

Parameters:

* info **Object** the terrain configuration TerrainOptions; type supports mapbox / tianditu / cesium / cesium-ion, and urlTemplate is the url template of terrain tiles

Returns:

* this

</div>
</details>

<details><summary>removeTerrain()</summary>
<div>
<br/>

Removes the terrain configuration and deletes the internal terrain layer (added after cross-checking the 2026 source code).

Returns:

* this

</div>
</details>

<details><summary>getTerrain()</summary>
<div>
<br/>

Gets the terrain configuration (added after cross-checking the 2026 source code).

Returns:

* Object

</div>
</details>

<details><summary>queryTerrain(coord)</summary>
<div>
<br/>

Queries the terrain height at the given coordinate (added after cross-checking the 2026 source code).

Parameters:

* coord **Coordinate** the query coordinate

Returns:

* Number[] an array of the height and whether the point is on the terrain: [height, onTerrain]

</div>
</details>

<details><summary>addLayer(layer, idx)</summary>
<div>
<br/>

Adds a sub-layer.

Parameters:

* layer* **Layer** the layer object
* idx **Number** optional index at which the layer is added

Returns:

* this

</div>
</details>

<details><summary>removeLayer(layer)</summary>
<div>
<br/>

Removes a sub-layer.

Parameters:

* layer* **Layer** the layer object (the 2026 source also accepts a layer id string)

Returns:

* this

</div>
</details>

<details><summary>clearLayers()</summary>
<div>
<br/>

Clears all sub-layers (added after cross-checking the 2026 source code).

Returns:

* this

</div>
</details>

<details><summary>getLayer(id)</summary>
<div>
<br/>

Gets the sub-layer with the given id.

Parameters:

* id **String** the layer id.

Returns:

* Layer

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

Gets all sub-layers.

Returns:

* Layer[]

</div>
</details>

<details><summary>addAnalysis(analysis)</summary>
<div>
<br/>

Adds a spatial analysis object.

Parameters:

* analysis* **Analysis** the spatial analysis object

Returns:

* this

</div>
</details>

<details><summary>removeAnalysis(analysis)</summary>
<div>
<br/>

Removes a spatial analysis object.

Parameters:

* analysis* **Analysis** the spatial analysis object

Returns:

* this

</div>
</details>

<details><summary>clearAnalysis()</summary>
<div>
<br/>

Clears all spatial analysis tasks (added after cross-checking the 2026 source code).

Returns:

* this

</div>
</details>

<details><summary>identify(coordinates, options)</summary>
<div>
<br/>

Queries data at the given coordinates on all sub-layers.
Note that only drawn data can be queried.

```js
layer.identify([121.23, 39.34], { tolerance: 2 })
```

Parameters:

* coordinates **Number[]** coordinate values
* options **Object** settings, possible properties:
| Property         |   Type           |   Description                 | Default |
|  ------         | :----:  | ----  |   :-----------:  |
| tolerance       | Number  | Pixel tolerance used when querying | 3 |
| count           | Number  | Number of data items returned | 1 |
| filter          | Function | Result filter function | null |
| orderByCamera   | Boolean | Whether to sort by distance from the camera, nearest first | false |
| childLayers     | Layer[] | The specified sub-layers | [] |

Returns:

* Object[]

</div>
</details>


<details><summary>identifyAtPoint(containerPoint, options)</summary>
<div>
<br/>

Queries data at the given screen coordinates on all sub-layers

```js
layer.identifyAtPoint([400, 300], { tolerance: 2 })
```

Parameters:

* coordinates **Number[]** coordinate values
* options **Object** settings, possible properties:

| Property         |   Type           |   Description                 | Default |
|  ------         | :----:  | ----  |   :-----------:  |
| tolerance       | Number  | Pixel tolerance used when querying | 3 |
| count           | Number  | Number of data items returned | 1 |
| filter          | Function | Result filter function | null |
| orderByCamera   | Boolean | Whether to sort by distance from the camera, nearest first | false |
| childLayers     | Layer[] | The specified sub-layers | [] |

> Note: In the 2026 source, identifyAtPoint's options also support the includeInternals option (return internal data) (verified 2026).

Returns:

* Object[]

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

Returns the JSON serialized object of the layer.

The object can be deserialized into a layer object with the Layer.fromJSON method.

```js
const json = layer.toJSON();
const copiedLayer = maptalks.Layer.fromJSON(json);
```

Returns:

* Object

</div>
</details>


<!--@include: ./includes/layer-methods.md-->

## Static Methods

<details><summary>fromJSON(json)</summary>
<div>
<br/>

Creates a GroupGLLayer object from the layer's JSON object.

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
```

Returns:

* GroupGLLayer

</div>
</details>

## Events

<!--@include: ./includes/js-events-example.md-->

### Layer Events

<details><summary>postprocessstart</summary>
<div>
<br/>

Post-processing start event.

Properties:

| Property         |   Type           |   Value |
|  ------         | :----:  | ----  |
|type           | String          |   "postprocessstart"  |
|target         | GroupGLLayer        |   this            |
</div>
</details>

<details><summary>postprocessend</summary>
<div>
<br/>

Post-processing end event.

Properties:

| Property         |   Type           |   Value |
|  ------         | :----:  | ----  |
|type           | String          |   "postprocessend"  |
|target         | GroupGLLayer        |   this            |
</div>
</details>

<details><summary>taastart</summary>
<div>
<br/>

TAA anti-aliasing start event.

> Note: The taastart / taaend events are no longer fired (verified 2026; the corresponding fire calls are commented out in the GroupGLLayerRenderer source, as TAA has been disabled).

Properties:

| Property         |   Type           |   Value |
|  ------         | :----:  | ----  |
|type           | String          |   "taastart"  |
|target         | GroupGLLayer        |   this            |
</div>
</details>

<details><summary>taaend</summary>
<div>
<br/>

TAA anti-aliasing end event.

Properties:

| Property         |   Type           |   Value |
|  ------         | :----:  | ----  |
|type           | String          |   "taaend"  |
|target         | GroupGLLayer        |   this            |
</div>
</details>

<details><summary>terrainlayercreated</summary>
<div>
<br/>

Event fired when the internal terrain layer has been created (added after cross-checking the 2026 source code).

Properties:

| Property         |   Type           |   Value |
|  ------         | :----:  | ----  |
|type           | String          |   "terrainlayercreated"  |
|target         | GroupGLLayer        |   this            |
</div>
</details>

<details><summary>terrainlayerremoved</summary>
<div>
<br/>

Event fired when the internal terrain layer has been removed (added after cross-checking the 2026 source code).

Properties:

| Property         |   Type           |   Value |
|  ------         | :----:  | ----  |
|type           | String          |   "terrainlayerremoved"  |
|target         | GroupGLLayer        |   this            |
</div>
</details>

<details><summary>layerload</summary>
<div>
<br/>

Re-broadcast event: fires layerload on a sub-layer when it finishes rendering (added after cross-checking the 2026 source code).

Properties:

| Property         |   Type           |   Value |
|  ------         | :----:  | ----  |
|type           | String          |   "layerload"  |
|target         | GroupGLLayer        |   this            |
</div>
</details>

### Events Inherited from Layer

<!--@include: ./includes/layer-events.md-->

> This document has been cross-checked against the @maptalks/gl-layers 2026 source (api-notes-others.md / api-notes-vt-gl.md)
