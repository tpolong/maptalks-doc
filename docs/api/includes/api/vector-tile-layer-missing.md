<details><summary>onAdd()</summary>
<div>
<br/>

图层加入地图时准备参数并校验 projection 与地图一致

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

矢量瓦片图层配置变更后的回调，转发给渲染器并清缓存重绘

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

<details><summary>cancelOutline()</summary>
<div>
<br/>

取消高亮

返回：

* `Any` this

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

<details><summary>getStyle()</summary>
<div>
<br/>

获取当前 style

返回：

* `Any` style

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

按坐标识别矢量瓦片要素，转发给渲染器

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

按容器像素点识别矢量瓦片要素，转发给渲染器

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

<details><summary>onAdd()</summary>
<div>
<br/>

图层加入地图时准备参数并校验 projection 与地图一致

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

获取指定 zoom 下渲染所需的主瓦片与父级瓦片网格

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

判断瓦片是否落在需保留的父级瓦片层级范围内

参数：

* currentTileZoom `number`
* maxZoom `number`
* tile `TileNodeType`

</div>
</details>

<details><summary>getTileUrl(x, y, z)</summary>
<div>
<br/>

Get tile's url

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

导出图层的 profile json，可用于 fromJSON 重建实例

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

获取图层的最小 zoom

返回：

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

获取图层的最大 zoom

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

按瓦片坐标与 zoom 生成瓦片的唯一 id

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

获取图层监听的事件，如 spatial reference 变化

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

获取图层的渲染器实例

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

为图层设置 z-index，并按 z-index 重排图层叠放顺序

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

获取图层的最小 zoom

返回：

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

获取图层的最大 zoom

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

移除图层上设置的 mask，图层在地图上时重绘图层

返回：

* `Layer` this

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

layer 加载完成后的钩子，由子类重写，默认空实现

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

获取图层的渲染器实例

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

矢量瓦片图层配置变更后的回调，转发给渲染器并清缓存重绘

参数：

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

图层加入地图时准备参数并校验 projection 与地图一致

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

renderer 创建完成后的回调，子类可重写

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

canvas 创建完成后的回调，子类可重写

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

图层从地图移除时的钩子，调用父类清理逻辑

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

按 map 的 renderer 类型返回 layer 使用的 renderer 名

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

导出图层的 profile json，可用于 fromJSON 重建实例

参数：

* options（可选） `any`

返回：

* `LayerJSONType`

</div>
</details>

<details><summary>identify(_coordinate, _options)</summary>
<div>
<br/>

按坐标识别矢量瓦片要素，转发给渲染器

参数：

* _coordinate `Coordinate`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>identifyAtPoint(_containerPoint, _options)</summary>
<div>
<br/>

按容器像素点识别矢量瓦片要素，转发给渲染器

参数：

* _containerPoint `Point`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

获取子 layer 列表，仅分组类型 layer 实现

返回：

* `Layer[]`

</div>
</details>
