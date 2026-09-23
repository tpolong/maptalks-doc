<details><summary>getTileSize(id)</summary>
<div>
<br/>

获取指定子 layer 的 tile 尺寸，找不到返回默认值

参数：

* id `number | string`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

layer 加入 map 时排序并刷新子 layer

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

layer 移除时清理全部子 layer 与映射

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

自身可见且至少有一个子图层可见时返回 true

返回：

* `boolean`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

layer 加入 map 时排序并刷新子 layer

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

获取指定子 layer 的 tile 尺寸，找不到返回默认值

参数：

* id（可选） `string`

返回：

* `Size`

</div>
</details>

<details><summary>createTileNode()</summary>
<div>
<br/>

创建 tile 节点，含 id url 投影 extent 分辨率与父节点

</div>
</details>

<details><summary>isParentTile(currentTileZoom, maxZoom, tile)</summary>
<div>
<br/>

判断该 tile 是否处于瓦片堆叠层级范围内并低于 maxZoom

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

获取 layer 的 minZoom，有自定义 spatialReference 时取较高者

返回：

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

获取 layer 的 maxZoom，与 map 和自定义 spatialReference 的上限取较小值

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

按 x y zoom 与图层 id 拼接生成 tile 的唯一 id

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

返回图层监听的 map 事件映射，此处为空间参考变化

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

获取 layer 的 renderer 实例，尚未创建时返回 undefined

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

为 layer 设置 zIndex 并据此重排地图图层

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

获取 layer 的 minZoom，有自定义 spatialReference 时取较高者

返回：

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

获取 layer 的 maxZoom，与 map 和自定义 spatialReference 的上限取较小值

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

自身可见且至少有一个子图层可见时返回 true

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

移除 layer 的 mask，使其恢复整层渲染

返回：

* `Layer` this

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

图层加载完成后的回调，默认空实现供子类重写

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

获取 layer 的 renderer 实例，尚未创建时返回 undefined

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

配置变更后的回调，触发选项钩子并让 renderer 重绘

参数：

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

layer 加入 map 时排序并刷新子 layer

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

renderer 创建完成后的回调，默认空实现供子类重写

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

图层 canvas 创建完成后的回调，可重写以执行自定义逻辑

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

layer 移除时清理全部子 layer 与映射

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

获取实际使用的 renderer 类型，WebGL map 为 gl，WebGPU 为 gpu

</div>
</details>

<details><summary>identify(_coordinate, _options)</summary>
<div>
<br/>

拾取指定坐标处的 geometry，是供子类实现的接口方法

参数：

* _coordinate `Coordinate`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>identifyAtPoint(_containerPoint, _options)</summary>
<div>
<br/>

拾取容器坐标处的 geometry，是供子类实现的接口方法

参数：

* _containerPoint `Point`
* _options `LayerIdentifyOptionsType`

</div>
</details>
