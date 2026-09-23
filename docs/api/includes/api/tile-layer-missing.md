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

<details><summary>getEvents()</summary>
<div>
<br/>

获取图层监听的事件，如 spatial reference 变化

</div>
</details>

<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

获取图层的 polygonOffset 数量

返回：

* `number`

</div>
</details>

<details><summary>getPolygonOffset()</summary>
<div>
<br/>

获取图层的基础 polygon offset 值

返回：

* `number`

</div>
</details>

<details><summary>setPolygonOffset(offset)</summary>
<div>
<br/>

设置图层的基础 polygon offset，由 GroupGLLayer 调用

参数：

* offset `number` polygon offset

</div>
</details>
