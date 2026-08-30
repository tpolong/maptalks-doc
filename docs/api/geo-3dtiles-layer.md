---
title: Geo3DTilesLayer
---

# Geo3DTilesLayer

3DTiles渲染图层插件，用于加载Cesium的3DTiles格式数据。

如果有什么bug或建议，可以在[这里](https://github.com/fuzhenn/3dtiles-issues/)提交给开发组。

> 注：3DTiles 渲染能力已并入 `@maptalks/gl-layers` 包统一发布，不再作为独立插件分发（2026 核对）。

特点：
* 个头小：gzip压缩前只有100多K（目前200多K是因为开启了源代码格式化）
* 性能高：可以通过调整maximumScreenSpaceError来获得很高的渲染性能
* 支持全：对所有3DTiles 1.0的格式均提供了支持
* 测试全：包含了Cesium所有相关格式的测试用例，以及实际项目中的数据用例，您提交的错误数据在您的允许下也会增加到测试用例中，保证未来的稳定性。
* 可与其他maptalks三维图层（例如矢量瓦片图层）融合渲染

支持的功能:
- [X] [B3DM格式](https://github.com/CesiumGS/3d-tiles/tree/main/specification/TileFormats/Batched3DModel) 批量模型格式，一般用于倾斜摄影
- [X] [PNTS格式](https://github.com/CesiumGS/3d-tiles/tree/main/specification/TileFormats/PointCloud)，点云格式
- [X] [I3DM格式](https://github.com/CesiumGS/3d-tiles/tree/main/specification/TileFormats/Instanced3DModel)，示例三维模型格式，一般用于大量重复的小品模型加载
- [X] [CMPT格式](https://github.com/CesiumGS/3d-tiles/tree/main/specification/TileFormats/Composite)，复合格式，其中包含单个或多个其他格式瓦片
- [X] [3DTiles的Draco扩展](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_draco_mesh_compression/README.md) Draco压缩扩展
- [X] [KHR_techiniques_webgl扩展](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Archived/KHR_techniques_webgl) 一个已经废弃的GLTF 2.0自定义shader扩展，但不少历史3dtiles数据仍在使用
- [X] CRN图片纹理格式
- [X] [KTX2图片纹理格式](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_texture_basisu/README.md)

> 注：2026 源码除上述格式外，还支持 i3s、s3m 数据格式（api-notes-others.md，2026 核对）。

它是[maptalks.Layer](https://maptalks.org/maptalks.js/api/0.x/Layer.html)的子类，继承了 Layer 上所有的方法。

> 注：2026 源码中 Geo3DTilesLayer 通过 MaskLayerMixin 混入了遮罩裁剪能力，支持 setMask / removeMask / getMasks 等接口（2026 核对）。

## 示例代码

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

## npm安装
```
npm i @maptalks/gl-layers
```
### 使用
esm方式:
```js
import { GroupGLLayer, Geo3DTilesLayer } from '@maptalks/gl-layers';
// 可选的draco插件
// import '@maptalks/transcoders.draco';
// 可选的crn纹理解析插件
// import '@maptalks/transcoders.crn';
// 可选的ktx2纹理解析插件
// import '@maptalks/transcoders.ktx2';
```
commonjs方式：
```js
const { GroupGLLayer, Geo3DTilesLayer } = require('@maptalks/gl-layers');
// 可选的draco插件
// require('@maptalks/transcoders.draco');
// require('@maptalks/transcoders.crn');
// require('@maptalks/transcoders.ktx2');
```

## 坐标系适配

我们可以通过给图层设置一个动态的 `offset` 选项，来适配不同的坐标系，例如 `cgcs2000`, `gcj02` 等。

坐标系转换已经有不少库，例如 [coordtransform](https://github.com/wandergis/coordtransform), [gcoord](https://github.com/hujiulong/gcoord)。

示例中用的是 [chinese_coordinate_conversion](https://github.com/fuzhenn/chinese_coordinate_conversion)。

示例代码：

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

## Draco解码插件
因为Draco解码程序体积较大，采用通用插件形式提供，即所有maptalks的插件都共用同一个Draco插件。

默认情况下，没加载解码插件时，如果模型是Draco格式编码，控制台会报错无法找到draco解码插件。
```
KHR_draco_mesh_compression is required but @maptalks/transcoders.draco is not loaded
```
此时加载draco解码插件即可。
```html
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gl-layers/dist/maptalks-gl-layers.js"></script>
<!-- draco插件，必须写在gl后面，其他插件的前面，es方式加载时同理 -->
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.draco/dist/transcoders.draco.js"></script>
```
npm安装draco插件
```
npm i @maptalks/transcoders.draco
```
esm方式:
```js
import { GroupGLLayer, Geo3DTilesLayer } from '@maptalks/gl-layers';
import '@maptalks/transcoders.draco';
```
commonjs方式：
```js
const { GroupGLLayer, Geo3DTilesLayer } = require('@maptalks/gl-layers');
require('@maptalks/transcoders.draco');
```
## CRN纹理支持
和Draco一样，crn纹理也是采用通用插件方式实现的，添加crn解码插件即可。
因为crn插件是umd格式，采用esm载入时，需要webpack或rollup的commonjs插件支持。
```html
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gl-layers/dist/maptalks-gl-layers.js"></script>
<!-- crn插件，必须写在gl后面，其他插件的前面，es方式加载时同理 -->
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.crn/dist/transcoders.crn.js"></script>
```
npm安装crn插件
```
npm i @maptalks/transcoders.crn
```
esm加载方式:
```js
import { GroupGLLayer, Geo3DTilesLayer } from '@maptalks/gl-layers';
import '@maptalks/transcoders.crn';
```
commonjs方式：
```js
const { GroupGLLayer, Geo3DTilesLayer } = require('@maptalks/gl-layers');
require('@maptalks/transcoders.crn');
```
## KTX2纹理支持
和Draco一样，ktx2纹理也是采用通用插件方式实现的，添加ktx2解码插件即可。
因为ktx2插件是umd格式，采用esm载入时，需要webpack或rollup的commonjs插件支持。
```html
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gl-layers/dist/maptalks-gl-layers.js"></script>
<!-- ktx2插件，必须写在gl后面，其他插件的前面，es方式加载时同理 -->
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.ktx2/dist/transcoders.ktx2.js"></script>
```
npm安装ktx2插件
```
npm i @maptalks/transcoders.ktx2
```
esm方式加载:
```js
import { GroupGLLayer, Geo3DTilesLayer } from '@maptalks/gl-layers';
import '@maptalks/transcoders.ktx2';
```
commonjs方式：
```js
const { GroupGLLayer, Geo3DTilesLayer } = require('@maptalks/gl-layers');
require('@maptalks/transcoders.ktx2');
```
## 抗锯齿
默认情况下3dtiles绘制时会有很多锯齿，可以在GroupGLLayer上开启抗锯齿来解决。
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


## 构造函数

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
<details><summary>详细信息</summary>
<div>
参数：

* id\* **String** 图层id
* options\* **Object** 配置参数，可选的配置项如下：

| 配置名                     |  类型   |  描述                     | 默认值 |
|  ------                   | :----:  | ----                      |   :-----------:  |
|maxGPUMemory               | Number  | 最大缓存数，单位M bytes。2026 源码默认：移动端 32，桌面端 1536 | 移动端 32 / 桌面端 1536 |
|retireInterval             | Number  | 瓦片退役/回收检查间隔（毫秒，2026 源码核对补充） | 2000 |
|loadingLimitOnInteracting  | Number  | 地图交互（拖动/缩放）过程中每帧瓦片请求最大数量 | 5 |
|loadingLimit               | Number  | 每帧最多加载的瓦片数 | 10 |
|debug                      | Boolean | 是否开启debug显示（2026 源码核对补充） | false |
|meshLimitPerFrame          | Number  | 每帧最多创建的mesh数量（2026 源码核对补充） | 2 |
|i3sNodepageLimitPerFrame   | Number  | 每帧最多加载的i3s nodepage数量（2026 源码核对补充） | 1 |
|enableI3SCompressedGeometry | Boolean | 是否启用i3s压缩几何体（2026 源码核对补充） | true |
|forceI3SCompressedGeometry | Boolean | 是否强制使用i3s压缩几何体（2026 源码核对补充） | true |
|onlyCacheNoContentTileWhenError | Boolean | 出错时是否只缓存无content的瓦片（2026 源码核对补充） | true |
|picking                    | Boolean | 是否启用拾取（2026 源码核对补充） | true |
|pickingPoint               | Boolean | 拾取是否返回交点坐标（2026 源码核对补充） | true |
|geometryEvents             | Boolean | 是否触发几何体事件（默认关闭，影响性能，2026 源码核对补充） | false |
|alwaysShowTopTiles         | Boolean | 是否总是显示顶层瓦片（2026 源码核对补充） | true |
|antialias                  | Boolean | 是否开启抗锯齿（2026 源码核对补充） | false |
|offset                     | Number/Function | 模型的绘制偏移量，如果是函数则会动态调用计算，函数的参数为模型的参考坐标： function (center) { }，可以用于计算 | [0, 0] |
|renderer                   | String  | 渲染器（gl / gpu，均注册为 Geo3DTilesRenderer，2026 源码核对补充） | 'gl' |
|forceRenderOnZooming / Moving / Rotating | Boolean | 缩放/移动/旋转时是否强制重绘（2026 源码核对补充） | true |
|services                   | Object[]  | 3dtiles数据源定义             | [] |

> 注：maxGPUMemory、loadingLimit、loadingLimitOnInteracting 的默认值已在新版本中调整（2026 核对）：maxGPUMemory 移动端 32 / 桌面端 1536，loadingLimit 10，loadingLimitOnInteracting 5。

services 中每一项（Geo3DTilesService）的配置：

| 配置名                     |  类型   |  描述                     | 默认值 |
|  ------                   | :----:  | ----                      |   :-----------:  |
|services.url               | String    | 3dtiles数据集根json文件的url地址     | null |
|services.maximumScreenSpaceError | Number | 最大屏幕空间误差，默认 8。当模型瓦片在屏幕上大小超过设定时会尝试请求下一级瓦片，数字越小请求的模型瓦片越精细 | 8 |
|services.maxExtent         | Extent    | 服务范围（2026 源码核对补充） | null |
|services.scale             | Number/[x,y,z] | 模型缩放比例（2026 源码核对补充） | null |
|services.coordOffset       | Number[]  | 模型在xy平面上的偏移量，与地图坐标系一致（2026 源码核对补充） | null |
|services.heightOffset      | Number    | 数据的高度偏移量，单位米，可以用于升高或降低模型 | 0 |
|services.rotation          | Number[]  | 模型在xyz轴上的旋转角度，单位度，取值范围-180到180（2026 源码核对补充） | null |
|services.ecefTransform     | Number[]  | 模型在ECEF坐标系下的4x4变换矩阵，优先级高于 rotation / scale / coordOffset / heightOffset（2026 源码核对补充） | null |
|services.subdomains        | String[]  | 服务子域列表，用于替换url中的 {s}（2026 源码核对补充） | null |
|services.urlParams         | String    | 额外的url请求参数（2026 源码 worker 中仍支持） | null |
|services.fetchOptions      | Object    | fetch请求[参数](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)        | null |
|services.opacity           | Number    | 透明度，取值范围0-1（2026 源码核对补充） | null |
|services.visible           | Boolean   | 是否可见（2026 源码核对补充） | null |
|services.debug             | Boolean   | 该服务是否开启debug（2026 源码核对补充） | false |
|services.alphaTest         | Number    | 材质中的alphaTest阈值（2026 源码核对补充） | 0.1 |
|services.pointSize         | Number/Function | 点云（pnts）pointSize（像素），支持zoom级function-type（2026 源码核对补充） | null |
|services.pointOpacity      | Number/Function | 点云透明度 0~1，支持zoom级function-type（2026 源码核对补充） | null |
|services.unlit             | Boolean   | 模型按unlit渲染，忽略全局灯光，适用于倾斜摄影等已含灯光信息的模型（2026 源码核对补充） | null |
|services.doubleSided       | Boolean   | 模型是否双面绘制（2026 源码核对补充） | false |
|services.maxTextureSize     | Number    | 模型纹理尺寸最大值（2026 源码核对补充） | 1024 |
|services.material           | Object    | 材质 uniform 变量的预设值（2026 源码核对补充） | null |
|services.ambientLight       | Number[]  | 三位归一化数组，手动设置模型的环境光值，可以用于提亮或变暗模型，没有设置时则默认读取map的环境光值。2026 源码中作为兼容旧配置保留（TileMeshPainter 中为老 ambientLight 设置的兼容性代码），新版本建议使用 environmentExposure | null |
|services.environmentExposure | Number   | 环境光曝光参数（2026 源码核对补充） | null |
|services.createNormalIfMissed | Boolean  | 模型缺少法线属性时自动创建（2026 源码核对补充） | null |
|services.polygonFill        | Number[]  | 模型填充色（2026 源码核对补充） | null |
|services.polygonOffset      | Object/Function | 手动设置模型的[polygon offset](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/polygonOffset)，可用于解决z-fighting；2026 源码中仍受支持（未在 TS 类型中声明），且可传函数动态计算 | { factor: 0, units: 0 } |

> 注：services.maximumScreenSpaceError 的默认值已在新版本中调整为 8；示例代码中使用的 24.0 / 16.0 为推荐的调大值，数值越小加载的模型越精细、数据量越大（2026 核对）。
</div>
</details>

## 成员方法

<details><summary>getExtent(idx)</summary>
<div>
<br/>

获取序号为idx的service的地理范围；不传idx时返回所有服务合并后的范围。

```js
layer.once('loadtileset', e => {
  const extent = layer.getExtent(e.index);
  map.fitExtent(extent);
});
```

参数：

* idx **Number** 可选的service序号

返回：

* Extent

</div>
</details>

<details><summary>getTiles()</summary>
<div>
<br/>

获取所有的3dtiles 瓦片。


返回：

* Object

</div>
</details>

> 注：以下方法为 2026 源码核对时补充（api-notes-others.md）。

<details><summary>addService(info)</summary>
<div>
<br/>

动态添加一个3dtiles服务。

参数：

* info **Object** Geo3DTilesService 服务配置

返回：

* this

</div>
</details>

<details><summary>removeService(idx)</summary>
<div>
<br/>

按索引移除服务。

参数：

* idx **Number** 服务序号

返回：

* this

</div>
</details>

<details><summary>updateService(idx, info)</summary>
<div>
<br/>

更新服务参数（偏移、缩放、旋转、可见性等）。

参数：

* idx **Number** 服务序号
* info **Object** 更新的服务配置项

返回：

* this

</div>
</details>

<details><summary>showService(idx)</summary>
<div>
<br/>

显示指定索引的服务。

参数：

* idx **Number** 服务序号

返回：

* this

</div>
</details>

<details><summary>hideService(idx)</summary>
<div>
<br/>

隐藏指定索引的服务。

参数：

* idx **Number** 服务序号

返回：

* this

</div>
</details>

<details><summary>setServiceOpacity(idx, opacity)</summary>
<div>
<br/>

设置服务透明度。

参数：

* idx **Number** 服务序号
* opacity **Number** 透明度 0~1

返回：

* this

</div>
</details>

<details><summary>setServiceDebug(idx, debug)</summary>
<div>
<br/>

开启/关闭服务debug。

参数：

* idx **Number** 服务序号
* debug **Boolean** 是否开启debug

返回：

* this

</div>
</details>

<details><summary>getRootTiles()</summary>
<div>
<br/>

获取各服务的根瓦片节点。

返回：

* Object[] 根瓦片节点数组

</div>
</details>

<details><summary>identify(coordinate, options)</summary>
<div>
<br/>

按地理坐标识别（拾取）该点的要素。

参数：

* coordinate **Coordinate** 地理坐标
* options **Object** 可选设置

返回：

* Object[]

</div>
</details>

<details><summary>identifyAtPoint(point, options)</summary>
<div>
<br/>

按容器像素坐标识别要素。

参数：

* point **Point** 容器像素坐标
* options **Object** 可选设置，options.tolerance 为拾取容差（像素）

返回：

* Object[]

</div>
</details>

<details><summary>highlight(highlights)</summary>
<div>
<br/>

高亮指定 batchId 的要素（颜色/透明度）。

参数：

* highlights **Object/Object[]** 高亮项，例如 `{ serviceIndex, batchIds, color }`

返回：

* this

</div>
</details>

<details><summary>cancelHighlight(serviceIndex, ids)</summary>
<div>
<br/>

取消指定要素的高亮。

参数：

* serviceIndex **Number** 服务序号
* ids **Number[]** 要素 batchId 列表

返回：

* this

</div>
</details>

<details><summary>cancelAllHighlight()</summary>
<div>
<br/>

取消所有高亮。

返回：

* this

</div>
</details>

<details><summary>showOnly(items)</summary>
<div>
<br/>

只显示指定要素，其余隐藏。

参数：

* items **Object[]** ShowOnlyItem 数组

返回：

* this

</div>
</details>

<details><summary>cancelShowOnly(serviceIndex)</summary>
<div>
<br/>

取消只显示限制。

参数：

* serviceIndex **Number** 服务序号

返回：

* this

</div>
</details>

<details><summary>getTileUrl(url, rootNode)</summary>
<div>
<br/>

用服务子域替换url中的 {s}。

参数：

* url **String** 瓦片url
* rootNode **Object** 根瓦片节点

返回：

* String

</div>
</details>


<!--@include: ./includes/layer-methods.md-->

## 静态方法

<details><summary>fromJSON(json)</summary>
<div>
<br/>

从图层的json对象创建一个Geo3DTilesLayer对象。

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
```

返回：

* Geo3DTilesLayer

</div>
</details>

<details><summary>getEnuTransform(coordinate, scale, rotation)</summary>
<div>
<br/>

计算给定经纬度坐标处的 ENU（东北天）变换矩阵（2026 源码核对补充）。

参数：

* coordinate **Coordinate** 经纬度坐标
* scale **Number[]** 缩放，默认 [1, 1, 1]
* rotation **Number[]** 旋转角，默认 [0, 0, 0]

返回：

* Number[] 4x4 变换矩阵

</div>
</details>

## 事件

<!--@include: ./includes/js-events-example.md-->

### 图层事件

<details><summary>rootready</summary>
<div>
<br/>

初始化根节点结束事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "rootready"  |
|target   | Geo3DTilesLayer |   this            |
|roots    | Object[]         |   根节点对象       |

</div>
</details>

<details><summary>loadtileset</summary>
<div>
<br/>

成功加载tileset.json事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "loadtileset"  |
|target   | Geo3DTilesLayer |   this            |
|tileset  | Object          |   tileset对象 |
|index    | Number          |   tileset对应的3dtiles service的序号 |
|url      | String          |   tileset.json的url，绝对地址 |

</div>
</details>

<details><summary>tileload</summary>
<div>
<br/>

瓦片载入事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "tileload"  |
|target   | Geo3DTilesLayer |   this            |
|node     | Object          |   瓦片对象          |

</div>
</details>


<details><summary>tileerror</summary>
<div>
<br/>

瓦片载入错误事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "tileerror"  |
|target   | Geo3DTilesLayer |   this            |
|error    | Object          |   错误信息          |
|node     | Object          |   瓦片对象          |

</div>
</details>

<details><summary>drawtiles</summary>
<div>
<br/>

每帧绘制瓦片后触发的事件（2026 源码核对补充）。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "drawtiles"  |
|target   | Geo3DTilesLayer |   this            |
|count    | Number          |   绘制的瓦片数量    |

</div>
</details>

<details><summary>canvasisdirty</summary>
<div>
<br/>

图层画布产生绘制的事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "canvasisdirty"  |
|target   | Geo3DTilesLayer |   this     |
|renderCount | Number        |   本帧绘制的瓦片数量（2026 源码核对补充） |

</div>
</details>

<details><summary>contextcreate</summary>
<div>
<br/>

GL 上下文创建事件（2026 源码核对补充）。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "contextcreate"  |
|target   | Geo3DTilesLayer |   this     |
|regl     | Object          |   regl 实例  |
|device   | Object          |   device 实例  |

</div>
</details>

<details><summary>workerready</summary>
<div>
<br/>

3dtiles worker 就绪事件（2026 源码核对补充）。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "workerready"  |
|target   | Geo3DTilesLayer |   this     |

</div>
</details>

### 继承自Layer的事件

<!--@include: ./includes/layer-events.md-->

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-others.md / api-notes-vt-gl.md）
