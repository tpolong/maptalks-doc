<details><summary>showService(idx)</summary>
<div>
<br/>

显示指定索引的 3DTiles 服务

参数：

* idx `number`

返回：

* `this`

</div>
</details>

<details><summary>hideService(idx)</summary>
<div>
<br/>

隐藏指定索引的 3DTiles 服务

参数：

* idx `number`

返回：

* `this`

</div>
</details>

<details><summary>setToRedraw()</summary>
<div>
<br/>

把图层标记为需重绘以触发下一次渲染

</div>
</details>

<details><summary>addService(info)</summary>
<div>
<br/>

添加一个 3DTiles 服务并重建根瓦片节点

参数：

* info `Geo3DTilesService`

返回：

* `this`

</div>
</details>

<details><summary>updateService(idx, info)</summary>
<div>
<br/>

按索引更新服务的可见性与偏移、缩放等配置

参数：

* idx `number`
* info `Geo3DTilesServiceOptions`

返回：

* `this`

</div>
</details>

<details><summary>removeService(idx)</summary>
<div>
<br/>

移除指定索引的 3DTiles 服务

参数：

* idx `number`

返回：

* `this`

</div>
</details>

<details><summary>getTileUrl(url, rootNode)</summary>
<div>
<br/>

按 subdomain 列表替换瓦片 URL 中的域名占位符

参数：

* url `string`
* rootNode `RootTileNode`

返回：

* `string`

</div>
</details>

<details><summary>getExtent(index)</summary>
<div>
<br/>

获取第 index 个服务的 extent，不传索引时合并全部服务

参数：

* index `number`

返回：

* `maptalks.Extent | null`

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

<details><summary>getRootTiles()</summary>
<div>
<br/>

获取各服务根瓦片节点组成的数组

返回：

* `RootTileNode[]`

</div>
</details>

<details><summary>getTiles()</summary>
<div>
<br/>

获取当前视图按 LOD 查询出的候选瓦片列表

返回：

* `QueriedTiles`

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

<details><summary>identify(coordinate, options?)</summary>
<div>
<br/>

查询给定 coordinate 处的 3DTiles 数据

参数：

* coordinate `[number, number] | maptalks.Coordinate`
* options（可选） `IdentifyOptions = {}` =null]  - options

返回：

* `Any` data identified

</div>
</details>

<details><summary>identifyAtPoint(point, options?)</summary>
<div>
<br/>

查询给定容器像素点处拾取到的数据，可含 mask

参数：

* point `maptalks.Point` point to identify
* options（可选） `IdentifyOptions = {}` =null]  - options

返回：

* `Object[]` data identified

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

<details><summary>highlight(highlights)</summary>
<div>
<br/>

高亮指定 id 的 batch，可设置颜色、透明度与 bloom

参数：

* highlights `HighlightItem | HighlightItem[]`

返回：

* `this`

</div>
</details>

<details><summary>cancelHighlight(serviceIndex, ids)</summary>
<div>
<br/>

取消指定 service 中若干 id 的 batch 高亮

参数：

* serviceIndex `number`
* ids `number[]`

返回：

* `this`

</div>
</details>

<details><summary>cancelAllHighlight()</summary>
<div>
<br/>

取消全部高亮，恢复原始颜色与透明度

返回：

* `this`

</div>
</details>

<details><summary>showOnly(items)</summary>
<div>
<br/>

只显示指定 id 与 service 的 batch，其余隐藏

参数：

* items `ShowOnlyItem[]`

返回：

* `this`

</div>
</details>

<details><summary>cancelShowOnly(serviceIndex)</summary>
<div>
<br/>

取消 showOnly 限制，恢复显示全部 batch

参数：

* serviceIndex `number`

返回：

* `this`

</div>
</details>

<details><summary>setServiceOpacity(idx, opacity)</summary>
<div>
<br/>

设置指定索引服务的模型透明度并触发重绘

参数：

* idx `number`
* opacity `number`

返回：

* `this`

</div>
</details>

<details><summary>setServiceDebug(idx, debug)</summary>
<div>
<br/>

开启或关闭指定服务的 debug 渲染，显示瓦片包围盒

参数：

* idx `number`
* debug `boolean`

返回：

* `this`

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
