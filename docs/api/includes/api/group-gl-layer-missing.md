<details><summary>sortLayersByZIndex()</summary>
<div>
<br/>

按 zIndex 升序重新排列组内的子图层

</div>
</details>

<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

获取子图层累计占用的 polygon offset 数量

返回：

* `number`

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

加载完成回调，准备各子图层并初始化地形图层

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

图层移除时卸载子图层、分析对象并清理地形

</div>
</details>

<details><summary>getChildLayer(id)</summary>
<div>
<br/>

按 id 获取组内的子图层，不存在时返回 null

参数：

* id `string`

返回：

* `maptalks.Layer | null`

</div>
</details>

<details><summary>updateTerrainMaterial(mat)</summary>
<div>
<br/>

合并更新地形材质参数并刷新地形图层

参数：

* mat `object`

</div>
</details>

<details><summary>queryTerrainAtPoint(containerPoint)</summary>
<div>
<br/>

以容器坐标射线拾取地形网格，返回命中坐标

参数：

* containerPoint `maptalks.Point`

</div>
</details>

<details><summary>query3DTilesAtPoint(containerPoint)</summary>
<div>
<br/>

查询容器坐标下首个 3D Tiles 命中的坐标

参数：

* containerPoint `maptalks.Point`

</div>
</details>

<details><summary>queryTerrainByProjCoord(projCoord, out)</summary>
<div>
<br/>

按投影坐标查询地形高度，返回高度与是否命中同级瓦片

参数：

* projCoord `maptalks.Coordinate`
* out `QueryHitResult`

返回：

* `QueryHitResult`

</div>
</details>

<details><summary>getTerrainLayer()</summary>
<div>
<br/>

获取内部创建的地形图层，未启用时为 undefined

返回：

* `TerrainLayer | undefined`

</div>
</details>

<details><summary>fire(args)</summary>
<div>
<br/>

派发事件，layerload 时先让渲染完成的子图层也派发

参数：

* args `Any`

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

移除 layer 的 mask，使其恢复整层渲染

返回：

* `Layer` this

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

加载完成回调，准备各子图层并初始化地形图层

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

获取 layer 的 renderer 实例，创建前为 undefined

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

layer 配置变更时的回调，触发重绘并调用 options hook

参数：

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

layer 加入地图或组时的生命周期回调，供子类重写

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

layer 的 canvas 创建完成时的生命周期回调，供子类重写

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

图层移除时卸载子图层、分析对象并清理地形

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

获取 layer 的 renderer 名称，按地图渲染器类型返回 gl 或 gpu

</div>
</details>
