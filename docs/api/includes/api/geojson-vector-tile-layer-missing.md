<details><summary>getWorkerOptions()</summary>
<div>
<br/>

获取传给 worker 的选项，含数据、extent、投影与简化容差

</div>
</details>

<details><summary>onWorkerReady(err?, params?)</summary>
<div>
<br/>

worker 数据处理完成或出错时的回调

参数：

* err（可选） `any`
* params（可选） `any`

</div>
</details>

<details><summary>getTileUrl(x, y, z)</summary>
<div>
<br/>

按瓦片编号拼接出该瓦片的 url 标识

参数：

* x `number`
* y `number`
* z `number`

</div>
</details>

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

图层加入地图时的生命周期回调，准备投影与瓦片参数

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

强制重新加载图层，并清空 worker 中缓存的瓦片

返回：

* `this`

</div>
</details>

<details><summary>onWorkerReady()</summary>
<div>
<br/>

worker 数据处理完成或出错时的回调

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

图层配置更新时的生命周期回调，并把新配置转发给渲染器

参数：

* conf `object` layer config

返回：

* `Any` void

</div>
</details>

<details><summary>getWorkerOptions()</summary>
<div>
<br/>

获取传给 worker 的选项，含数据、extent、投影与简化容差

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

查询 tile 内某点处的地形高度值，无地形时返回空值数组

</div>
</details>

<details><summary>queryTerrainTiles(tileInfo)</summary>
<div>
<br/>

获取与指定 tile 相交的地形 tile，无地形支持时返回 null

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

异步分批获取已渲染的 features，避免长任务阻塞界面

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

高亮指定的 feature，可按 id 或 filter 指定目标

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

取消本图层全部 features 的高亮

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

是否使用默认渲染，即未配置 style 且开启 defaultRendering

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

获取图层计算后的 style 副本，含 background、style 与 featureStyle

</div>
</details>

<details><summary>identify(coordinate, options, options.tolerance, options.count)</summary>
<div>
<br/>

识别给定坐标处的数据

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

识别给定屏幕点处的数据，支持容差与结果数量限制

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

layer 从 map 移除时的回调，由框架内部调用

</div>
</details>

<details><summary>clearData()</summary>
<div>
<br/>

清空 renderer 与图层缓存的瓦片数据

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

图层加入地图时的生命周期回调，准备投影与瓦片参数

</div>
</details>

<details><summary>forceReload()</summary>
<div>
<br/>

强制重新加载图层，并清空 worker 中缓存的瓦片

返回：

* `Any` this

</div>
</details>

<details><summary>getTileSize(id?)</summary>
<div>
<br/>

Get tile size of the tile layer

参数：

* id（可选） `string`

返回：

* `Size`

</div>
</details>

<details><summary>getTiles(z, parentLayer)</summary>
<div>
<br/>

获取指定 zoom 下需要渲染的瓦片网格与父瓦片集合

参数：

* z `number`
* parentLayer `Layer`

</div>
</details>

<details><summary>createTileNode()</summary>
<div>
<br/>

创建一个瓦片节点，含瓦片范围、url 与父子关系

</div>
</details>

<details><summary>isParentTile(currentTileZoom, maxZoom, tile)</summary>
<div>
<br/>

判断瓦片是否落在父子瓦片堆叠保留的 zoom 区间内

参数：

* currentTileZoom `number`
* maxZoom `number`
* tile `TileNodeType`

</div>
</details>

<details><summary>getTileUrl(x, y, z)</summary>
<div>
<br/>

按瓦片编号拼接出该瓦片的 url 标识

参数：

* x `number`
* y `number`
* z `number`

返回：

* `Any` url

</div>
</details>

<details><summary>clear()</summary>
<div>
<br/>

Clear the layer

返回：

* `Any` this

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

导出 layer 的 profile JSON，可用于 fromJSON 重建实例

返回：

* `Any` layer's profile JSON

</div>
</details>

<details><summary>getSpatialReference()</summary>
<div>
<br/>

Get tilelayer's spatial reference.

返回：

* `Any` spatial reference

</div>
</details>

<details><summary>getMinZoom()</summary>
<div>
<br/>

获取图层最小 zoom，取 option 与 spatial reference 下限的较大值

返回：

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

获取图层最大 zoom，取 option 与 spatial reference 上限的较小值

返回：

* `number`

</div>
</details>

<details><summary>getMaxAvailableZoom()</summary>
<div>
<br/>

Get tileLayer's max available zoom, either options['maxAvailableZoom'] or spatialReference's maxZoom

返回：

* `number`

</div>
</details>

<details><summary>getTileId(x, y, zoom, id)</summary>
<div>
<br/>

按图层 id 与瓦片 x y zoom 生成瓦片唯一标识

参数：

* x `number`
* y `number`
* zoom `number`
* id `string`

返回：

* `string`

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

获取图层的事件映射，spatial reference 变化时重建瓦片配置

</div>
</details>

<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

Get layer's polygonOffset count

返回：

* `number`

</div>
</details>

<details><summary>getPolygonOffset()</summary>
<div>
<br/>

Get layer's base polygon offset

返回：

* `number`

</div>
</details>

<details><summary>setPolygonOffset(offset)</summary>
<div>
<br/>

Set layer's base polygon offset, called by GroupGLLayer

参数：

* offset `number` polygon offset

</div>
</details>

<details><summary>getRenderer()</summary>
<div>
<br/>

获取图层的渲染器实例，尚未创建时返回空

</div>
</details>

<details><summary>load()</summary>
<div>
<br/>

加载tile layer,不能被子类重写

</div>
</details>

<details><summary>getId()</summary>
<div>
<br/>

获取layer Id

返回：

* `Any` id

</div>
</details>

<details><summary>setId(id)</summary>
<div>
<br/>

为layer新设一个 Id

参数：

* id `string` new layer id

返回：

* `Any` this

触发事件：

* `Layer#idchange`

</div>
</details>

<details><summary>addTo(map)</summary>
<div>
<br/>

将图层添加至 map

参数：

* map `Map` map added to

返回：

* `Any` this

</div>
</details>

<details><summary>setZIndex(zIndex)</summary>
<div>
<br/>

设置图层的 zIndex 并重新排序地图上的图层

参数：

* zIndex `number` layer's z-index

返回：

* `Any` this

</div>
</details>

<details><summary>getZIndex()</summary>
<div>
<br/>

获取layer 的 zIndex

返回：

* `number`

</div>
</details>

<details><summary>getMinZoom()</summary>
<div>
<br/>

获取图层最小 zoom，取 option 与 spatial reference 下限的较大值

返回：

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

获取图层最大 zoom，取 option 与 spatial reference 上限的较小值

返回：

* `number`

</div>
</details>

<details><summary>getOpacity()</summary>
<div>
<br/>

获取 layer 的 opacity

返回：

* `Number`

</div>
</details>

<details><summary>setOpacity(op)</summary>
<div>
<br/>

设置 layer 的 opacity

参数：

* op `number` layer's opacity

返回：

* `Any` this

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

获取图层所在 map

返回：

* `Map`

</div>
</details>

<details><summary>getProjection()</summary>
<div>
<br/>

获取 layer 所在map 的 projection

返回：

* `CommonProjectionType`

</div>
</details>

<details><summary>bringToFront()</summary>
<div>
<br/>

将图层置顶

返回：

* `Any` this

</div>
</details>

<details><summary>bringToBack()</summary>
<div>
<br/>

将图层置底

返回：

* `Layer` this

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

显示图层

返回：

* `Any` this

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

隐藏图层

返回：

* `Any` this

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

layer 的当前 visible 状态

返回：

* `boolean`

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

移除图层

返回：

* `Any` this

</div>
</details>

<details><summary>getMask()</summary>
<div>
<br/>

获取 mask geometry

返回：

* `Geometry`

</div>
</details>

<details><summary>setMask(mask)</summary>
<div>
<br/>

设置mask geometry, 只显示掩码的区域

参数：

* mask `Polygon | MultiPolygon | Marker` mask geometry, can only be a Marker with vector symbol, a Polygon or a MultiPolygon

返回：

* `Layer` this

</div>
</details>

<details><summary>removeMask()</summary>
<div>
<br/>

移除图层的 mask 并请求重绘

返回：

* `Layer` this

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

图层加载结束时的生命周期回调，供子类重写

</div>
</details>

<details><summary>isLoaded()</summary>
<div>
<br/>

是否加载layer

返回：

* `boolean`

</div>
</details>

<details><summary>getCollisionIndex()</summary>
<div>
<br/>

获取collision index

返回：

* `CollisionIndex`

</div>
</details>

<details><summary>clearCollisionIndex()</summary>
<div>
<br/>

清除 layer 的 collision index。
如果 collisionScope !== 'layer' 将忽略

</div>
</details>

<details><summary>getRenderer()</summary>
<div>
<br/>

获取图层的渲染器实例，尚未创建时返回空

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

图层配置更新时的生命周期回调，并把新配置转发给渲染器

参数：

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

图层加入地图时的生命周期回调，准备投影与瓦片参数

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

layer 的 renderer 创建完成后的回调，由框架内部调用

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

图层 canvas 创建完成时的生命周期回调，供子类重写

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

layer 从 map 移除时的回调，由框架内部调用

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

获取图层实际使用的渲染器类型，WebGL 地图为 gl，WebGPU 为 gpu

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

导出 layer 的 profile JSON，可用于 fromJSON 重建实例

参数：

* options（可选） `any`

返回：

* `LayerJSONType`

</div>
</details>

<details><summary>identify(_coordinate, _options)</summary>
<div>
<br/>

识别给定坐标处的数据

参数：

* _coordinate `Coordinate`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>identifyAtPoint(_containerPoint, _options)</summary>
<div>
<br/>

识别给定屏幕点处的数据，支持容差与结果数量限制

参数：

* _containerPoint `Point`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

获取子图层集合，基类仅作可选声明，由子类实现

返回：

* `Layer[]`

</div>
</details>
