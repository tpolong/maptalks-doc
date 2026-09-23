<details><summary>getLayers()</summary>
<div>
<br/>

获取分组的子 TileLayer 列表

返回：

* `TileLayer[]`

</div>
</details>

<details><summary>addLayer(tileLayers)</summary>
<div>
<br/>

添加子 TileLayer，按 zIndex 排序并重绘

参数：

* tileLayers `TileLayer[] = []`

</div>
</details>

<details><summary>removeLayer(tileLayers)</summary>
<div>
<br/>

移除子 TileLayer，也可传 layer id

参数：

* tileLayers `TileLayer[] = []`

</div>
</details>

<details><summary>clearLayers()</summary>
<div>
<br/>

清空全部子 TileLayer

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

导出 GroupTileLayer 的 JSON，含子 layer 列表

返回：

* `Any` layer's profile JSON

</div>
</details>

<details><summary>getTileSize(id)</summary>
<div>
<br/>

获取指定子 layer 的 tile 尺寸，找不到返回默认值

参数：

* id `number | string`

</div>
</details>

<details><summary>getTiles(z, parentLayer)</summary>
<div>
<br/>

汇总可见子 layer 在指定 zoom 的瓦片

参数：

* z `number`
* parentLayer `any`

返回：

* `Any` tiles

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

<details><summary>getLayer(id)</summary>
<div>
<br/>

按 id 获取组内的子图层，等价于 getChildLayer

参数：

* id `string | number`

</div>
</details>

<details><summary>getChildLayer(id)</summary>
<div>
<br/>

递归查找指定 id 的子图层，找不到返回 null

参数：

* id `string | number`

返回：

* `TileLayer`

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
