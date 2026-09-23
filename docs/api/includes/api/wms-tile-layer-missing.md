<details><summary>onAdd()</summary>
<div>
<br/>

layer 加入地图时的回调，按设备像素比与 wms 版本初始化请求参数

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

导出该 WMS 图层的 JSON 描述，可用于 fromJSON 重建实例

返回：

* `Any` layer's JSON

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

layer 加入地图时的回调，按设备像素比与 wms 版本初始化请求参数

</div>
</details>

<details><summary>forceReload()</summary>
<div>
<br/>

force Reload tilelayer.
Note that this method will clear all cached tiles and reload them. It shouldn't be called frequently for performance reason.

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

导出该 WMS 图层的 JSON 描述，可用于 fromJSON 重建实例

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

获取图层的最小 zoom，取 minZoom 与自身空间参考下限的较大者

返回：

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

获取图层可显示的最大 zoom，受空间参考上限约束

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

获取图层的瓦片 canvas renderer 实例

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

获取图层的最小 zoom，取 minZoom 与自身空间参考下限的较大者

返回：

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

获取图层可显示的最大 zoom，受空间参考上限约束

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

获取图层的瓦片 canvas renderer 实例

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

options 变更后的回调，触发重绘与 attribution 更新

参数：

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

layer 加入地图时的回调，按设备像素比与 wms 版本初始化请求参数

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

layer 从 map 移除时的回调，子类可重写

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

导出该 WMS 图层的 JSON 描述，可用于 fromJSON 重建实例

参数：

* options（可选） `any`

返回：

* `LayerJSONType`

</div>
</details>

<details><summary>identify(_coordinate, _options)</summary>
<div>
<br/>

按 coordinate 识别 layer 上的 geometry，由子类实现

参数：

* _coordinate `Coordinate`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>identifyAtPoint(_containerPoint, _options)</summary>
<div>
<br/>

按 container point 识别 geometry，由子类实现

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
