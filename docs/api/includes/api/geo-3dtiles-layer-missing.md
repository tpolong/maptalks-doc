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
