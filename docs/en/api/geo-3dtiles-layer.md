---
title: Geo3DTilesLayer
---

# Geo3DTilesLayer

A 3DTiles rendering layer plugin used to load Cesium's 3DTiles data.

If you find any bugs or have suggestions, you can submit them to the dev team [here](https://github.com/fuzhenn/3dtiles-issues/).

> Note: The 3DTiles rendering capability has been merged into the `@maptalks/gl-layers` package and is no longer distributed as a standalone plugin (verified 2026).

Features:
* Small footprint: only about 100 KB before gzip compression (currently a bit over 200 KB because source code formatting is enabled)
* High performance: adjust maximumScreenSpaceError to achieve very high rendering performance
* Full format support: all 3DTiles 1.0 formats are supported
* Complete testing: includes test cases for all Cesium-related formats as well as data cases from real projects; with your permission, the erroneous data you submit will also be added to the test cases to ensure future stability.
* Can be rendered together with other maptalks 3D layers (for example, vector tile layers)

Supported features:
- [X] [B3DM format](https://github.com/CesiumGS/3d-tiles/tree/main/specification/TileFormats/Batched3DModel) batched model format, generally used for oblique photography
- [X] [PNTS format](https://github.com/CesiumGS/3d-tiles/tree/main/specification/TileFormats/PointCloud), point cloud format
- [X] [I3DM format](https://github.com/CesiumGS/3d-tiles/tree/main/specification/TileFormats/Instanced3DModel), instanced 3D model format, generally used for loading large numbers of repeated small models
- [X] [CMPT format](https://github.com/CesiumGS/3d-tiles/tree/main/specification/TileFormats/Composite), composite format, containing one or more tiles of other formats
- [X] [3DTiles Draco extension](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_draco_mesh_compression/README.md) Draco compression extension
- [X] [KHR_techniques_webgl extension](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Archived/KHR_techniques_webgl) a deprecated GLTF 2.0 custom shader extension, but still used by many legacy 3dtiles datasets
- [X] CRN image texture format
- [X] [KTX2 image texture format](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_texture_basisu/README.md)

> Note: In addition to the formats above, the 2026 source also supports the i3s and s3m data formats (api-notes-others.md, verified 2026).

It is a subclass of [maptalks.Layer](https://maptalks.org/maptalks.js/api/0.x/Layer.html) and inherits all methods on Layer.

> Note: In the 2026 source, Geo3DTilesLayer mixes in masking/clipping capability through MaskLayerMixin, supporting interfaces such as setMask / removeMask / getMasks (verified 2026).

## Example Code

```html
<!DOCTYPE html>
<html>
<head>
<title>3dtiles viewer</title>
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gl-layers/dist/maptalks-gl-layers.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.draco/dist/transcoders.draco.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.crn/dist/transcoders.crn.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.ktx2/dist/transcoders.ktx2.js"></script>
<style>
   #map { width: 100vw; height: 100vh; }
</style>
</head>
<body>
<div id="map"></div>
<script>
const map = new maptalks.Map("map", {
    center: [0, 0],
    zoom: 2
});
const layer = new maptalks.Geo3DTilesLayer('3dtiles', {
    maxGPUMemory: 512, //最大缓存数，单位 M bytes
    // loadingLimitOnInteracting : 1, //地图交互过程中瓦片请求最大数量
    // loadingLimit : 0, //瓦片请求最大数量
    services : [
        {
            url: 'path/to/tileset.json',
            // maximumScreenSpaceError值越小，加载的模型越清晰，但加载的数据量会变大
            // 清晰度可以接受的情况下，推荐把这个值设得越大越好，性能会越好
            maximumScreenSpaceError: 24.0,
            // 数据请求的额外参数
            // urlParams: 'v=0.0',
            // fetch请求的额外参数
            // fetchOptions : { credentials : 'include' },
            // 把模型降低指定高度，单位米
            heightOffset: 0,
            // 环境光照值，倾斜摄影可以设为[1.0, 1.0, 1.0]获得最清晰的效果，非倾斜摄影可以适当降低，例如设为 [0.2, 0.2, 0.2]
            // 如果不设置，则采用地图上的默认光照值
            ambientLight: [1.0, 1.0, 1.0],
            // maxExtent: maxExtent
        },
        // 其他的3dtiles数据源
    ]
});
// 添加到GroupGLLayer中
// GroupGLLayer能实现抗锯齿等后处理，也能加入其他三维图层，让子图层都融合到同一个三维空间中
const groupLayer = new maptalks.GroupGLLayer('group', [layer]);
groupLayer.addTo(map);

layer.once('loadtileset', e => {
    const extent = layer.getExtent(e.index);
    map.fitExtent(extent, 0, { animation: false });
});
</script>
</body>
</html>
```

## npm Installation
```
npm i @maptalks/gl-layers
```
### Usage
With ESM:
```js
import { GroupGLLayer, Geo3DTilesLayer } from '@maptalks/gl-layers';
// 可选的draco插件
// import '@maptalks/transcoders.draco';
// 可选的crn纹理解析插件
// import '@maptalks/transcoders.crn';
// 可选的ktx2纹理解析插件
// import '@maptalks/transcoders.ktx2';
```
With CommonJS:
```js
const { GroupGLLayer, Geo3DTilesLayer } = require('@maptalks/gl-layers');
// 可选的draco插件
// require('@maptalks/transcoders.draco');
// require('@maptalks/transcoders.crn');
// require('@maptalks/transcoders.ktx2');
```

## Coordinate System Adaptation

You can adapt the layer to different coordinate systems, such as `cgcs2000`, `gcj02`, etc., by setting a dynamic `offset` option on the layer.

There are already many libraries for coordinate system conversion, such as [coordtransform](https://github.com/wandergis/coordtransform) and [gcoord](https://github.com/hujiulong/gcoord).

The example uses [chinese_coordinate_conversion](https://github.com/fuzhenn/chinese_coordinate_conversion).

Example code:

```js
<script type="text/javascript" src="https://fuzhenn.github.io/chinese_coordinate_conversion/chncrs.js"></script>
<script>
const layer = new maptalks.Geo3DTilesLayer('3dtiles', {
    // 动态 offset 选项
    offset : function (center) {
        const res = map.getGLRes();
        // 坐标由 WGS84 转为 GCJ02
        const c = maptalks.CRSTransform.transform(center.toArray(), 'WGS84', 'GCJ02');
        const coord = map.coordToPointAtRes(new maptalks.Coordinate(c), res);
        const offset = map.coordToPointAtRes(center, res)._sub(coord);
        return offset._round().toArray();
    },
    services : [
        {
            url : 'path/to/tileset.json',
            //模型载入精度，在可接受尽量设置的大一些，以提升效率
            maximumScreenSpaceError : 16.0,
            //额外的模型url请求参数
            // urlParams : '',
            //高度偏移量，单位米，可以把模型整体
            heightOffset : 0,
            //环境光参数
            ambientLight : [1.0, 1.0, 1.0],
        },
    ]
});
</script>
```

## Draco Decoder Plugin
Since the Draco decoder is large, it is provided as a universal plugin, i.e. all maptalks plugins share the same Draco plugin.

By default, if the decoder plugin is not loaded and the model is encoded in Draco format, the console will report that the draco decoder plugin cannot be found.
```
KHR_draco_mesh_compression is required but @maptalks/transcoders.draco is not loaded
```
Just load the draco decoder plugin at this point.
```html
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gl-layers/dist/maptalks-gl-layers.js"></script>
<!-- draco插件，必须写在gl后面，其他插件的前面，es方式加载时同理 -->
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.draco/dist/transcoders.draco.js"></script>
```
Install the draco plugin with npm
```
npm i @maptalks/transcoders.draco
```
With ESM:
```js
import { GroupGLLayer, Geo3DTilesLayer } from '@maptalks/gl-layers';
import '@maptalks/transcoders.draco';
```
With CommonJS:
```js
const { GroupGLLayer, Geo3DTilesLayer } = require('@maptalks/gl-layers');
require('@maptalks/transcoders.draco');
```
## CRN Texture Support
Like Draco, crn textures are also implemented as a universal plugin; just add the crn decoder plugin.
Because the crn plugin is in UMD format, loading it with ESM requires webpack's or rollup's commonjs plugin support.
```html
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gl-layers/dist/maptalks-gl-layers.js"></script>
<!-- crn插件，必须写在gl后面，其他插件的前面，es方式加载时同理 -->
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.crn/dist/transcoders.crn.js"></script>
```
Install the crn plugin with npm
```
npm i @maptalks/transcoders.crn
```
Loading with ESM:
```js
import { GroupGLLayer, Geo3DTilesLayer } from '@maptalks/gl-layers';
import '@maptalks/transcoders.crn';
```
With CommonJS:
```js
const { GroupGLLayer, Geo3DTilesLayer } = require('@maptalks/gl-layers');
require('@maptalks/transcoders.crn');
```
## KTX2 Texture Support
Like Draco, ktx2 textures are also implemented as a universal plugin; just add the ktx2 decoder plugin.
Because the ktx2 plugin is in UMD format, loading it with ESM requires webpack's or rollup's commonjs plugin support.
```html
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gl-layers/dist/maptalks-gl-layers.js"></script>
<!-- ktx2插件，必须写在gl后面，其他插件的前面，es方式加载时同理 -->
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.ktx2/dist/transcoders.ktx2.js"></script>
```
Install the ktx2 plugin with npm
```
npm i @maptalks/transcoders.ktx2
```
Loading with ESM:
```js
import { GroupGLLayer, Geo3DTilesLayer } from '@maptalks/gl-layers';
import '@maptalks/transcoders.ktx2';
```
With CommonJS:
```js
const { GroupGLLayer, Geo3DTilesLayer } = require('@maptalks/gl-layers');
require('@maptalks/transcoders.ktx2');
```
## Anti-aliasing
By default, 3dtiles rendering produces a lot of aliasing; you can enable anti-aliasing on the GroupGLLayer to solve this.
```js
    const sceneConfig = {
        //开启后处理
        postProcess: {
            enable: true,
            //开启抗锯齿后处理
            antialias: {
                enable: true
            }
        }
    };

    const groupLayer = new maptalks.GroupGLLayer(id, [layer], { sceneConfig });
    groupLayer.addTo(map);
```


## Constructor

```js

const layer = new maptalks.Geo3DTilesLayer('3dtiles', {
    maxGPUMemory: 512,
    services : [
        {
            url: 'path/to/tileset.json',
            maximumScreenSpaceError: 24.0,
            heightOffset: 0,
            ambientLight: [1.0, 1.0, 1.0],
        },
    ]
});
```
<details><summary>Details</summary>
<div>
Parameters:

* id\* **String** layer id
* options\* **Object** configuration options, the available options are as follows:

| Option                     |   Type   |   Description                     | Default |
|  ------                   | :----:  | ----                      |   :-----------:  |
|maxGPUMemory               | Number  | Maximum cache size, in MB. 2026 source defaults: 32 on mobile, 1536 on desktop | 32 mobile / 1536 desktop |
|retireInterval             | Number  | Tile retirement/reclamation check interval (ms, added after cross-checking the 2026 source code) | 2000 |
|loadingLimitOnInteracting  | Number  | Maximum number of tile requests per frame while the map is being interacted with (pan/zoom) | 5 |
|loadingLimit               | Number  | Maximum number of tiles loaded per frame | 10 |
|debug                      | Boolean | Whether to enable debug display (verified against 2026 source) | false |
|meshLimitPerFrame          | Number  | Maximum number of meshes created per frame (verified against 2026 source) | 2 |
|i3sNodepageLimitPerFrame   | Number  | Maximum number of i3s nodepages loaded per frame (verified against 2026 source) | 1 |
|enableI3SCompressedGeometry | Boolean | Whether to enable compressed i3s geometry (verified against 2026 source) | true |
|forceI3SCompressedGeometry | Boolean | Whether to force the use of compressed i3s geometry (verified against 2026 source) | true |
|onlyCacheNoContentTileWhenError | Boolean | Whether to only cache tiles without content on error (verified against 2026 source) | true |
|picking                    | Boolean | Whether to enable picking (verified against 2026 source) | true |
|pickingPoint               | Boolean | Whether picking returns the intersection coordinates (verified against 2026 source) | true |
|geometryEvents             | Boolean | Whether to fire geometry events (disabled by default as it affects performance, verified against 2026 source) | false |
|alwaysShowTopTiles         | Boolean | Whether to always show the top-level tiles (verified against 2026 source) | true |
|antialias                  | Boolean | Whether to enable anti-aliasing (verified against 2026 source) | false |
|offset                     | Number/Function | Draw offset of the model; if a function, it will be called dynamically to compute the offset, with the model's reference coordinate as the argument: function (center) { } | [0, 0] |
|renderer                   | String  | Renderer (gl / gpu, both registered as Geo3DTilesRenderer, verified against 2026 source) | 'gl' |
|forceRenderOnZooming / Moving / Rotating | Boolean | Whether to force redraw when zooming / moving / rotating (verified against 2026 source) | true |
|services                   | Object[]  | 3dtiles data source definitions             | [] |

> Note: The default values of maxGPUMemory, loadingLimit and loadingLimitOnInteracting have been adjusted in the new version (verified 2026): maxGPUMemory is 32 on mobile / 1536 on desktop, loadingLimit is 10, and loadingLimitOnInteracting is 5.

Configuration of each item in services (Geo3DTilesService):

| Option                     |   Type   |   Description                     | Default |
|  ------                   | :----:  | ----                      |   :-----------:  |
|services.url               | String    | URL of the root json file of the 3dtiles dataset     | null |
|services.maximumScreenSpaceError | Number | Maximum screen space error, default 8. When a model tile's on-screen size exceeds the setting, the next level of tiles is requested; the smaller the number, the more detailed the requested model tiles | 8 |
|services.maxExtent         | Extent    | Service extent (verified against 2026 source) | null |
|services.scale             | Number/[x,y,z] | Model scale (verified against 2026 source) | null |
|services.coordOffset       | Number[]  | Offset of the model on the xy plane, consistent with the map's coordinate system (verified against 2026 source) | null |
|services.heightOffset      | Number    | Height offset of the data, in meters; can be used to raise or lower the model | 0 |
|services.rotation          | Number[]  | Rotation angles of the model around the xyz axes, in degrees, ranging from -180 to 180 (verified against 2026 source) | null |
|services.ecefTransform     | Number[]  | 4x4 transformation matrix of the model in the ECEF coordinate system; takes precedence over rotation / scale / coordOffset / heightOffset (verified against 2026 source) | null |
|services.subdomains        | String[]  | List of service subdomains, used to replace {s} in the url (verified against 2026 source) | null |
|services.urlParams         | String    | Extra url request parameters (still supported in the 2026 source worker) | null |
|services.fetchOptions      | Object    | fetch request [parameters](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)        | null |
|services.opacity           | Number    | Opacity, ranging from 0 to 1 (verified against 2026 source) | null |
|services.visible           | Boolean   | Whether it is visible (verified against 2026 source) | null |
|services.debug             | Boolean   | Whether debug is enabled for this service (verified against 2026 source) | false |
|services.alphaTest         | Number    | The alphaTest threshold in the material (verified against 2026 source) | 0.1 |
|services.pointSize         | Number/Function | pointSize (in pixels) for point clouds (pnts); supports zoom-level function-type (verified against 2026 source) | null |
|services.pointOpacity      | Number/Function | Point cloud opacity, 0~1; supports zoom-level function-type (verified against 2026 source) | null |
|services.unlit             | Boolean   | Render the model as unlit, ignoring global lighting; suitable for models that already contain lighting information, such as oblique photography (verified against 2026 source) | null |
|services.doubleSided       | Boolean   | Whether the model is drawn double-sided (verified against 2026 source) | false |
|services.maxTextureSize     | Number    | Maximum texture size for the model (verified against 2026 source) | 1024 |
|services.material           | Object    | Preset values for the material's uniform variables (verified against 2026 source) | null |
|services.ambientLight       | Number[]  | A 3-component normalized array; manually sets the ambient light value of the model, which can be used to brighten or darken the model; when not set, the map's ambient light value is used by default. In the 2026 source it is kept for backward compatibility (compatibility code for the old ambientLight setting in TileMeshPainter); the new version recommends using environmentExposure instead | null |
|services.environmentExposure | Number   | Ambient light exposure parameter (verified against 2026 source) | null |
|services.createNormalIfMissed | Boolean  | Automatically create normal attributes when the model lacks them (verified against 2026 source) | null |
|services.polygonFill        | Number[]  | Fill color of the model (verified against 2026 source) | null |
|services.polygonOffset      | Object/Function | Manually set the model's [polygon offset](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/polygonOffset), which can be used to resolve z-fighting; still supported in the 2026 source (though not declared in the TS types), and a function can be passed for dynamic computation | { factor: 0, units: 0 } |

> Note: The default value of services.maximumScreenSpaceError has been adjusted to 8 in the new version; the 24.0 / 16.0 used in the example code are the recommended larger values — the smaller the value, the more detailed the loaded models and the larger the data volume (verified 2026).
</div>
</details>

## Methods

<details><summary>getExtent(idx)</summary>
<div>
<br/>

Gets the geographic extent of the service with index idx; when idx is not passed, returns the combined extent of all services.

```js
layer.once('loadtileset', e => {
  const extent = layer.getExtent(e.index);
  map.fitExtent(extent);
});
```

Parameters:

* idx **Number** optional service index

Returns:

* Extent

</div>
</details>

<details><summary>getTiles()</summary>
<div>
<br/>

Gets all 3dtiles tiles.


Returns:

* Object

</div>
</details>

> Note: The following methods were added when cross-checking the 2026 source code (api-notes-others.md).

<details><summary>addService(info)</summary>
<div>
<br/>

Dynamically adds a 3dtiles service.

Parameters:

* info **Object** the Geo3DTilesService service configuration

Returns:

* this

</div>
</details>

<details><summary>removeService(idx)</summary>
<div>
<br/>

Removes a service by index.

Parameters:

* idx **Number** service index

Returns:

* this

</div>
</details>

<details><summary>updateService(idx, info)</summary>
<div>
<br/>

Updates service parameters (offset, scale, rotation, visibility, etc.).

Parameters:

* idx **Number** service index
* info **Object** the updated service configuration

Returns:

* this

</div>
</details>

<details><summary>showService(idx)</summary>
<div>
<br/>

Shows the service at the specified index.

Parameters:

* idx **Number** service index

Returns:

* this

</div>
</details>

<details><summary>hideService(idx)</summary>
<div>
<br/>

Hides the service at the specified index.

Parameters:

* idx **Number** service index

Returns:

* this

</div>
</details>

<details><summary>setServiceOpacity(idx, opacity)</summary>
<div>
<br/>

Sets the service opacity.

Parameters:

* idx **Number** service index
* opacity **Number** opacity, 0~1

Returns:

* this

</div>
</details>

<details><summary>setServiceDebug(idx, debug)</summary>
<div>
<br/>

Enables/disables the service debug.

Parameters:

* idx **Number** service index
* debug **Boolean** whether to enable debug

Returns:

* this

</div>
</details>

<details><summary>getRootTiles()</summary>
<div>
<br/>

Gets the root tile nodes of each service.

Returns:

* Object[] array of root tile nodes

</div>
</details>

<details><summary>identify(coordinate, options)</summary>
<div>
<br/>

Identifies (picks) features at the given geographic coordinate.

Parameters:

* coordinate **Coordinate** the geographic coordinate
* options **Object** optional settings

Returns:

* Object[]

</div>
</details>

<details><summary>identifyAtPoint(point, options)</summary>
<div>
<br/>

Identifies features at the given container pixel coordinate.

Parameters:

* point **Point** the container pixel coordinate
* options **Object** optional settings; options.tolerance is the picking tolerance (in pixels)

Returns:

* Object[]

</div>
</details>

<details><summary>highlight(highlights)</summary>
<div>
<br/>

Highlights features with the specified batchIds (color/opacity).

Parameters:

* highlights **Object/Object[]** highlight items, e.g. `{ serviceIndex, batchIds, color }`

Returns:

* this

</div>
</details>

<details><summary>cancelHighlight(serviceIndex, ids)</summary>
<div>
<br/>

Cancels the highlight of the specified features.

Parameters:

* serviceIndex **Number** service index
* ids **Number[]** list of feature batchIds

Returns:

* this

</div>
</details>

<details><summary>cancelAllHighlight()</summary>
<div>
<br/>

Cancels all highlights.

Returns:

* this

</div>
</details>

<details><summary>showOnly(items)</summary>
<div>
<br/>

Only shows the specified features and hides the rest.

Parameters:

* items **Object[]** ShowOnlyItem array

Returns:

* this

</div>
</details>

<details><summary>cancelShowOnly(serviceIndex)</summary>
<div>
<br/>

Cancels the show-only restriction.

Parameters:

* serviceIndex **Number** service index

Returns:

* this

</div>
</details>

<details><summary>getTileUrl(url, rootNode)</summary>
<div>
<br/>

Replaces {s} in the url with a service subdomain.

Parameters:

* url **String** tile url
* rootNode **Object** root tile node

Returns:

* String

</div>
</details>


<!--@include: ./includes/layer-methods.md-->

## Static Methods

<details><summary>fromJSON(json)</summary>
<div>
<br/>

Creates a Geo3DTilesLayer object from the layer's JSON object.

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
```

Returns:

* Geo3DTilesLayer

</div>
</details>

<details><summary>getEnuTransform(coordinate, scale, rotation)</summary>
<div>
<br/>

Computes the ENU (East-North-Up) transformation matrix at the given longitude/latitude coordinate (added after cross-checking the 2026 source code).

Parameters:

* coordinate **Coordinate** the longitude/latitude coordinate
* scale **Number[]** scale, default [1, 1, 1]
* rotation **Number[]** rotation angles, default [0, 0, 0]

Returns:

* Number[] 4x4 transformation matrix

</div>
</details>

## Events

<!--@include: ./includes/js-events-example.md-->

### Layer Events

<details><summary>rootready</summary>
<div>
<br/>

Event fired when root node initialization is finished.

Properties:

| Property         |   Type           |   Value |
|  ------         | :----:  | ----  |
|type     | String          |   "rootready"  |
|target   | Geo3DTilesLayer |   this            |
|roots    | Object[]         |   root node objects       |

</div>
</details>

<details><summary>loadtileset</summary>
<div>
<br/>

Event fired when tileset.json is loaded successfully.

Properties:

| Property         |   Type           |   Value |
|  ------         | :----:  | ----  |
|type     | String          |   "loadtileset"  |
|target   | Geo3DTilesLayer |   this            |
|tileset  | Object          |   the tileset object |
|index    | Number          |   the index of the 3dtiles service corresponding to the tileset |
|url      | String          |   the url of tileset.json, an absolute address |

</div>
</details>

<details><summary>tileload</summary>
<div>
<br/>

Tile load event.

Properties:

| Property         |   Type           |   Value |
|  ------         | :----:  | ----  |
|type     | String          |   "tileload"  |
|target   | Geo3DTilesLayer |   this            |
|node     | Object          |   the tile object          |

</div>
</details>


<details><summary>tileerror</summary>
<div>
<br/>

Tile load error event.

Properties:

| Property         |   Type           |   Value |
|  ------         | :----:  | ----  |
|type     | String          |   "tileerror"  |
|target   | Geo3DTilesLayer |   this            |
|error    | Object          |   the error information          |
|node     | Object          |   the tile object          |

</div>
</details>

<details><summary>drawtiles</summary>
<div>
<br/>

Event fired after tiles are drawn each frame (added after cross-checking the 2026 source code).

Properties:

| Property         |   Type           |   Value |
|  ------         | :----:  | ----  |
|type     | String          |   "drawtiles"  |
|target   | Geo3DTilesLayer |   this            |
|count    | Number          |   the number of tiles drawn    |

</div>
</details>

<details><summary>canvasisdirty</summary>
<div>
<br/>

Event fired when the layer canvas is drawn.

Properties:

| Property         |   Type           |   Value |
|  ------         | :----:  | ----  |
|type     | String          |   "canvasisdirty"  |
|target   | Geo3DTilesLayer |   this     |
|renderCount | Number        |   the number of tiles drawn in this frame (added after cross-checking the 2026 source code) |

</div>
</details>

<details><summary>contextcreate</summary>
<div>
<br/>

GL context creation event (added after cross-checking the 2026 source code).

Properties:

| Property         |   Type           |   Value |
|  ------         | :----:  | ----  |
|type     | String          |   "contextcreate"  |
|target   | Geo3DTilesLayer |   this     |
|regl     | Object          |   the regl instance  |
|device   | Object          |   the device instance  |

</div>
</details>

<details><summary>workerready</summary>
<div>
<br/>

3dtiles worker ready event (added after cross-checking the 2026 source code).

Properties:

| Property         |   Type           |   Value |
|  ------         | :----:  | ----  |
|type     | String          |   "workerready"  |
|target   | Geo3DTilesLayer |   this     |

</div>
</details>

### Events Inherited from Layer

<!--@include: ./includes/layer-events.md-->

> This document has been cross-checked against the @maptalks/gl-layers 2026 source (api-notes-others.md / api-notes-vt-gl.md)
