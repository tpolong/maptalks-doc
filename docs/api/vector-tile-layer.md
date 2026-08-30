---
title: VectorTileLayer
---

# VectorTileLayer

矢量瓦片图层 VectorTileLayer 用于在地图上加载并绘制[矢量瓦片](/guide/vector-tile)数据，并提供了必要的数据交互方法。

VectorTileLayer的样式是在options.style中用JSON数据格式的。 样式定义采用了插件式架构，用户可以在style中用不同过滤条件选取数据，用指定的渲染插件和相应样式来渲染数据。

具体有哪些渲染插件，各插件的样式定义可以参考样式手册。

因为VectorTileLayer的样式属性非常丰富，用户可以采用 [MapTalks IDE](https://studio.maptalks.com) 软件来用所见即所得的方式来定制VectorTileLayer的样式，然后在程序中加载。

它是 [maptalks](https://maptalks.org)核心库 [TileLayer](https://maptalks.org/maptalks.js/api/0.x/TileLayer.html)的子类，同样继承了TileLayer上的方法和配置。

> [!NOTE]
> 参数或配置名称上带 \* 表示该参数或配置不能为空，例如下面id后的\*号表示参数id是不能为空的：
>
> * id* **String** 图层id

<!--@include: ./includes/vector-tile-layer-style.md-->

## 构造函数

```js
import { VectorTileLayer } from '@maptalks/gl-layers';

new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt'
});
```
<details><summary>详细信息</summary>
<div>

参数：

* id\* **String** 图层id
* options\* **Object** 配置参数，可选的配置项如下：

| 配置名           |  类型           |  描述                 | 默认值 |
|  ------         | :----:  | ----  |   :-----------:  |
|urlTemplate\*    | String          | url模板               |  null  |
<!--@include: ./includes/vtlayer-options.md-->
|cascadeTiles     | Boolean         | 是否级联加载低级别瓦片        | true |
|enableAltitude   | Boolean         | 是否启用要素高程（altitude）  | true |
|awareOfTerrain   | Boolean         | 是否感知地形（贴地形渲染）    | true |
|fadeAnimation    | Boolean         | 是否开启淡入淡出动画         | false |
|featureIdProperty| String          | 用作要素id的属性名（feature state用，类似mapbox promoteId） | null |
|altitudeProperty | String          | 要素属性中表示高程的字段名    | "altitude" |
|tileLimitPerFrame| Number          | 每帧最多处理的瓦片数量        | 1 |
|loadingLimit     | Number          | 普通状态下每帧加载瓦片数上限（0为不限） | 0 |
|glyphSdfLimitPerFrame | Number     | 每帧每瓦片最多绘制的SDF字形数量 | 15 |
|sdfURL           | String          | SDF字体纹理地址             | null |
|workerGlyph      | Boolean         | 是否在worker中处理字形（有urlModifier时自动关闭） | true |
<!--@include: ./includes/layer-options.md-->

</div>
</details>

## 成员方法

<!--@include: ./includes/vtlayer-methods.md-->

<details><summary>getCurrentRenderedFeatures()</summary>
<div>
<br/>

获取当前屏幕中已渲染的要素（坐标会转换为GeoJSON格式）。

返回：

* Object[]

</div>
</details>

<details><summary>getRenderedFeatures()</summary>
<div>
<br/>

获取已渲染的所有要素。

返回：

* Object[]

</div>
</details>

<details><summary>getRenderedFeaturesAsync(options)</summary>
<div>
<br/>

异步分页获取已渲染的要素。

```js
const features = await layer.getRenderedFeaturesAsync({ countPerTime: 10000 });
```

参数：

* options **Object** 设置，可能的属性：
| 属性名        |  类型   |  描述                 | 默认值 |
|  ------      | :----:  | ----  |   :-----------:  |
| countPerTime | Number  | 每次分页获取的要素数量上限 | 10000 |

返回：

* Promise

</div>
</details>

<details><summary>highlight(highlights)</summary>
<div>
<br/>

高亮指定要素。highlights支持 `{ id }` 或 `{ filter, name }` 两种形式（filter形式需要开启 options.features）。

```js
layer.highlight({ id: 'feature-1' });
```

参数：

* highlights **Object** 高亮配置，可能的属性：
| 属性名 |  类型   |  描述 |
|  ------ | :----: | ----  |
| id     | String \| Number | 要素id |
| filter | Object | 要素过滤器 |
| name   | String | 高亮样式名称 |

返回：

* this

</div>
</details>

<details><summary>cancelHighlight(ids)</summary>
<div>
<br/>

取消指定要素的高亮。

参数：

* ids **Number[] | String[]** 要素id数组

返回：

* this

</div>
</details>

<details><summary>cancelAllHighlight()</summary>
<div>
<br/>

取消所有要素的高亮。

返回：

* this

</div>
</details>

<details><summary>outlineFeatures(featureIds)</summary>
<div>
<br/>

高亮指定id的要素（outline系列方法之一，需要加入 GroupGLLayer 并开启 outline 后处理）。

参数：

* featureIds **Number[] | String[]** 要素id数组

返回：

* this

</div>
</details>

<details><summary>setFeatureState(source, state)</summary>
<div>
<br/>

设置要素的状态（feature state）。

```js
layer.setFeatureState({ id: 'feature-1', layer: 'layer-name' }, { hot: true });
```

参数：

* source **Object** 要素来源，`{ id, layer }`
* state **Object** 要设置的要素状态

返回：

* this

</div>
</details>

<details><summary>getFeatureState(source)</summary>
<div>
<br/>

获取要素的状态。

参数：

* source **Object** 要素来源，`{ id, layer }`

返回：

* Object

</div>
</details>

<details><summary>removeFeatureState(source, key)</summary>
<div>
<br/>

移除要素状态中的指定属性。

参数：

* source **Object** 要素来源，`{ id, layer }`
* key **String** 要移除的状态属性名

返回：

* this

</div>
</details>

<details><summary>validateStyle()</summary>
<div>
<br/>

校验style的合法性（filter必须为default/true/数组/带condition的对象）。

返回：

* Boolean

</div>
</details>

<details><summary>forceReload()</summary>
<div>
<br/>

强制重载瓦片，同时会使worker内的瓦片缓存失效。

返回：

* this

</div>
</details>

<details><summary>setURLModifier(modifier)</summary>
<div>
<br/>

设置瓦片URL处理函数。

参数：

* modifier **Function** URL处理函数

返回：

* this

</div>
</details>

<details><summary>getURLModifier()</summary>
<div>
<br/>

获取瓦片URL处理函数。

返回：

* Function

</div>
</details>

<details><summary>getGroundConfig()</summary>
<div>
<br/>

获取图层背景（background）配置，供GroupGLLayer的地面渲染使用。

返回：

* Object

</div>
</details>

<details><summary>isDefaultRender()</summary>
<div>
<br/>

是否处于无style时的默认绘制状态。

返回：

* Boolean

</div>
</details>

<details><summary>clearData()</summary>
<div>
<br/>

清除瓦片数据。

</div>
</details>

<!--@include: ./includes/tilelayer-methods.md-->

<!--@include: ./includes/layer-methods.md-->

## 静态方法

<details><summary>compressStyleJSON(style)</summary>
<div>
<br/>

通过合并相同定义的渲染插件，把style JSON压缩为尺寸更小的JSON对象。

```js
const compressedStyle = VectorTileLayer.compressStyleJSON(style);
```

参数：

* style **Object** 样式对象

返回：

* **Object**

</div>
</details>

<details><summary>registerPlugin(Plugin)</summary>
<div>
<br/>

注册新的渲染插件。

```js
VectorTileLayer.registerPlugin(PluginClazz);
```

参数：

* PluginClazz **PainterPlugin** 要注册的渲染插件类

</div>
</details>

<details><summary>getPlugins()</summary>
<div>
<br/>

获取所有注册的渲染插件。

```js
const pluginClasses = VectorTileLayer.getPlugins();
```

返回：

* PainterPlugin[]

</div>
</details>

<details><summary>fromJSON(json)</summary>
<div>
<br/>

从图层的json对象创建一个VectorTileLayer对象。

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
```

返回：

* VectorTileLayer

</div>
</details>

<details><summary>loadFrom(url, fetchOptions)</summary>
<div>
<br/>

从样式JSON文件加载并创建图层实例（异步）。

```js
const layer = await VectorTileLayer.loadFrom(url, {});
```

参数：

* url **String** 样式JSON文件的地址
* fetchOptions **Object** 可选的fetch配置

返回：

* Promise&lt;VectorTileLayer&gt;

</div>
</details>

## 事件

<!--@include: ./includes/js-events-example.md-->

### 图层事件

<!--@include: ./includes/vtlayer-events.md-->

<details><summary>cleardata</summary>
<div>
<br/>

渲染器清除瓦片数据时触发的事件。

参数属性：

| 属性名 |  类型   |   值 |
|  ------ | :----: | ----  |
|type     | String          |   "cleardata"  |
|target   | VectorTileLayer |   this     |

</div>
</details>

<details><summary>refreshstyle</summary>
<div>
<br/>

样式刷新事件。

参数属性：

| 属性名 |  类型   |   值 |
|  ------ | :----: | ----  |
|type     | String          |   "refreshstyle"  |
|target   | VectorTileLayer |   this     |

</div>
</details>

<details><summary>contextcreate</summary>
<div>
<br/>

GL上下文创建事件。

参数属性：

| 属性名 |  类型   |   值 |
|  ------ | :----: | ----  |
|type     | String          |   "contextcreate"  |
|target   | VectorTileLayer |   this     |
|regl     | Object          |   regl实例   |
|device   | Object          |   GPU设备（WebGPU模式） |

</div>
</details>

### 继承自TileLayer的事件

<!--@include: ./includes/tilelayer-events.md-->

### 继承自Layer的事件

<!--@include: ./includes/layer-events.md-->

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-vt-gl.md）
