<details><summary>setURLModifier(modifier)</summary>
<div>
<br/>

设置url处理函数。

参数：

* modifier `Function` URL processing function

返回：

* `Any` this

</div>
</details>

<details><summary>getURLModifier()</summary>
<div>
<br/>

获取url处理函数。

返回：

* `Any` url modifier

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

图层加入地图时准备参数并校验 projection 与地图一致

</div>
</details>

<details><summary>setFeatureState(source, state)</summary>
<div>
<br/>

设置数据状态。

参数：

* source `{ id: string; layer: string }` layer source
* state `unknown` feature state

返回：

* `Any` this

</div>
</details>

<details><summary>removeFeatureState(source, key)</summary>
<div>
<br/>

删除数据状态。

参数：

* source `Any` layer source
* key `Any` object key

返回：

* `Any` this

</div>
</details>

<details><summary>getFeatureState(source)</summary>
<div>
<br/>

获取数据状态。

参数：

* source `any` layer source

返回：

* `Any` feature state

</div>
</details>

<details><summary>forceReload()</summary>
<div>
<br/>

令 worker 端瓦片缓存失效并强制重新加载图层

返回：

* `this`

</div>
</details>

<details><summary>onWorkerReady()</summary>
<div>
<br/>

worker 数据就绪后的回调钩子，子类可覆写处理结果

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

更新图层配置。

参数：

* conf `object` layer config

返回：

* `Any` void

</div>
</details>

<details><summary>getWorkerOptions()</summary>
<div>
<br/>

获取worker参数。

返回：

* `Any` worker options

</div>
</details>

<details><summary>setStyle(style)</summary>
<div>
<br/>

设置图层样式。

参数：

* style `any` vt style object

返回：

* `Any` this

</div>
</details>

<details><summary>queryTilePointTerrain()</summary>
<div>
<br/>

查询瓦片内某点在指定 resolution 下的地形高度

</div>
</details>

<details><summary>queryTerrainTiles(tileInfo)</summary>
<div>
<br/>

获取该瓦片对应的地形瓦片列表，无地形时返回 null

参数：

* tileInfo `any`

</div>
</details>

<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

获取图层的polygonOffsetCount，用于GroupGLLayer全局管理polygonOffset。

返回：

* `Any` polygonOffsetCount

</div>
</details>

<details><summary>getPolygonOffset()</summary>
<div>
<br/>

获取图层的polygonOffset，用于GroupGLLayer全局管理polygonOffset

返回：

* `Any` polygonOffset

</div>
</details>

<details><summary>setPolygonOffset(offset, total?)</summary>
<div>
<br/>

设置图层的polygonOffset

参数：

* offset `number`
* total（可选） `number`

返回：

* `Any` this

</div>
</details>

<details><summary>getTotalPolygonOffset()</summary>
<div>
<br/>

获取图层的polygonOffset总数。

返回：

* `Any` total polygonOffset

</div>
</details>

<details><summary>getCurrentRenderedFeatures()</summary>
<div>
<br/>

获取当前屏幕中瓦片上的features。

返回：

* `Any` rendered features

</div>
</details>

<details><summary>getRenderedFeatures()</summary>
<div>
<br/>

获取已经渲染的features。

返回：

* `Any` rendered features

</div>
</details>

<details><summary>getRenderedFeaturesAsync(options)</summary>
<div>
<br/>

以 Promise 分页异步返回已渲染的 features

参数：

* options `AsyncFeatureQueryOptions = {}`

</div>
</details>

<details><summary>outlineAll()</summary>
<div>
<br/>

高亮整个图层

返回：

* `Any` this

</div>
</details>

<details><summary>outline(idx, featureIds)</summary>
<div>
<br/>

高亮数据

参数：

* idx `number` style index
* featureIds `number[]` feature ids

返回：

* `Any` this

</div>
</details>

<details><summary>outlineBatch(idx)</summary>
<div>
<br/>

高亮数据

参数：

* idx `number` style index

返回：

* `Any` this

</div>
</details>

<details><summary>outlineFeatures(featureIds)</summary>
<div>
<br/>

高亮数据

参数：

* featureIds `number[]` feature ids

返回：

* `Any` this

</div>
</details>

<details><summary>cancelOutline()</summary>
<div>
<br/>

取消高亮

返回：

* `Any` this

</div>
</details>

<details><summary>highlight(highlights)</summary>
<div>
<br/>

按 id 或 filter 高亮 features，图层未就绪时先暂存

参数：

* highlights `any`

</div>
</details>

<details><summary>cancelHighlight(ids)</summary>
<div>
<br/>

取消指定 id 的 features 高亮

参数：

* ids `number`

</div>
</details>

<details><summary>cancelAllHighlight()</summary>
<div>
<br/>

取消本图层全部 features 高亮

</div>
</details>

<details><summary>updateSceneConfig(idx, sceneConfig)</summary>
<div>
<br/>

更新 SceneConfig

参数：

* idx `string | number` style name or index
* sceneConfig `VtSceneConfig` properties of sceneConfig

返回：

* `Any` this

</div>
</details>

<details><summary>updateFeatureSceneConfig(idx, styleIdx, sceneConfig)</summary>
<div>
<br/>

更新 feature 的 SceneConfig

参数：

* idx `Any` feature index
* styleIdx `Any` style index
* sceneConfig `Any` properties of sceneConfig

返回：

* `Any` this

</div>
</details>

<details><summary>updateDataConfig(idx, dataConfig)</summary>
<div>
<br/>

更新 dataConfig

参数：

* idx `number | string` style name or index
* dataConfig `VtDataConfig` properties of dataConfig

返回：

* `Any` this

</div>
</details>

<details><summary>updateFeatureDataConfig(idx, styleIdx, dataConfig)</summary>
<div>
<br/>

更新 feature 的 dataConfig

参数：

* idx `Any` feature index
* styleIdx `Any` style index
* dataConfig `Any` properties of dataConfig

返回：

* `Any` this

</div>
</details>

<details><summary>updateSymbol(idx, symbol)</summary>
<div>
<br/>

更新 symbol

参数：

* idx `number | string` style name or index
* symbol `VtSymbol` properties of symbol

返回：

* `Any` this

</div>
</details>

<details><summary>updateFeatureSymbol(idx, feaStyleIdx, symbol)</summary>
<div>
<br/>

更新 feature symbol

参数：

* idx `number` style name or index
* feaStyleIdx `number`
* symbol `VtSymbol` properties of symbol

返回：

* `Any` this

</div>
</details>

<details><summary>isDefaultRender()</summary>
<div>
<br/>

是否为未配置 style 时的默认渲染

</div>
</details>

<details><summary>validateStyle()</summary>
<div>
<br/>

校验style是否合法

返回：

* `Any` void

</div>
</details>

<details><summary>getStyle()</summary>
<div>
<br/>

获取当前 style

返回：

* `Any` style

</div>
</details>

<details><summary>getGroundConfig()</summary>
<div>
<br/>

获取图层的背景设置

返回：

* `Any` backgroundConfig

</div>
</details>

<details><summary>getComputedStyle()</summary>
<div>
<br/>

获取当前生效样式的深拷贝，含 background 与 style

</div>
</details>

<details><summary>identify(coordinate, options, options.tolerance, options.count)</summary>
<div>
<br/>

识别给定坐标的数据

参数：

* coordinate `Any` coordinate to identify
* options `Any` =null - options
* options.tolerance `Any` =0 - identify tolerance in pixel
* options.count `Any` =null - result count

返回：

* `Any` data identified

</div>
</details>

<details><summary>identifyAtPoint(point, options, options.tolerance, options.count)</summary>
<div>
<br/>

识别给定点的数据

参数：

* point `Any` point to identify
* options `Any` =null - options
* options.tolerance `Any` =0 - identify tolerance in pixel
* options.count `Any` =0 - result count

返回：

* `Any` data identified

</div>
</details>

<details><summary>getDataSchema(z)</summary>
<div>
<br/>

返回矢量瓦片数据的重要信息，包括图层、属性和数据类型

参数：

* z `number` =undefined - tile's zoom, optional

返回：

* `Any` data schema

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

图层从地图移除时的钩子，调用父类清理逻辑

</div>
</details>

<details><summary>clearData()</summary>
<div>
<br/>

清空 renderer 与图层缓存的瓦片数据

</div>
</details>
