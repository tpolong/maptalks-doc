<details><summary>setToRedraw()</summary>
<div>
<br/>

把图层标记为需重绘以触发下一次渲染

</div>
</details>

<details><summary>boundingVolumeToExtent(node)</summary>
<div>
<br/>

把瓦片节点的 boundingVolume 换算为经纬度 extent

参数：

* node `RootTileNode`

返回：

* `maptalks.Extent | null`

</div>
</details>

<details><summary>onTileLoad(tile, node)</summary>
<div>
<br/>

瓦片加载完成时挂载其子节点并记录 baseUrl

参数：

* tile `TileNode`
* node `TileNode`

</div>
</details>

<details><summary>onTilesetLoad(tileset, parent, url)</summary>
<div>
<br/>

tileset 加载完成时合并根节点并处理坐标变换

参数：

* tileset `any`
* parent `TileNode`
* url `string`

</div>
</details>

<details><summary>getCurrentBatchIDs()</summary>
<div>
<br/>

获取当前已绘制瓦片的所有 batch id 与其 service 索引

返回：

* `number[]`

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

导出图层配置的快照 json，可用 fromJSON 重建实例

返回：

* `LayerJSONType`

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

获取 layer 的 minZoom

返回：

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

获取layer 的 maxZoom

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

移除图层的 mask，不传参数时清除全部 mask

返回：

* `Layer` this

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

图层加载完成后的回调

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

获取图层的 renderer 实例

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

图层 options 变更后的回调，触发重绘与 attribution 更新

参数：

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

图层添加到地图后的回调，同时更新 mask 范围

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

图层 renderer 创建完成后的回调

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

canvas 创建完成后的回调

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

图层从地图移除时的回调

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

按 map 的 renderer 类型返回图层使用的 renderer 名

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

导出图层配置的快照 json，可用 fromJSON 重建实例

参数：

* options（可选） `any`

返回：

* `LayerJSONType`

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

获取图层的子 layer 列表，仅分组类型 layer 实现

返回：

* `Layer[]`

</div>
</details>
