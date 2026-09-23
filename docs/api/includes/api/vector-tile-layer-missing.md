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

<details><summary>onRemove()</summary>
<div>
<br/>

图层从地图移除时的钩子，调用父类清理逻辑

</div>
</details>
