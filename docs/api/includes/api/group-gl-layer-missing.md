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
