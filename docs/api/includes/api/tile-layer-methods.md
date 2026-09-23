<details><summary>onAdd()</summary>
<div>
<br/>

layer 加入地图时的回调，据 tms 选项初始化 tileSystem

</div>
</details>

<details><summary>forceReload()</summary>
<div>
<br/>

清空全部缓存瓦片并强制重新加载本 layer

返回：

* `Any` this

</div>
</details>

<details><summary>getTileSize(id?)</summary>
<div>
<br/>

获取 tile layer 的瓦片尺寸，未设置时用默认值

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

<details><summary>getTileUrl(x, y, z)</summary>
<div>
<br/>

按瓦片 x y z 与子域名生成该瓦片的 url

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

清空图层瓦片并清空渲染器，同时触发 clear 事件

返回：

* `Any` this

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

导出图层的 profile json，可用于 fromJSON 重建实例

返回：

* `Any` layer's profile JSON

</div>
</details>

<details><summary>getSpatialReference()</summary>
<div>
<br/>

获取图层的 spatial reference

返回：

* `Any` spatial reference

</div>
</details>

<details><summary>getMinZoom()</summary>
<div>
<br/>

获取图层的最小 zoom

返回：

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

获取图层的最大 zoom

返回：

* `number`

</div>
</details>

<details><summary>getMaxAvailableZoom()</summary>
<div>
<br/>

获取图层可用的最大 zoom，取选项或 spatial reference 的值

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

<details><summary>getRenderer()</summary>
<div>
<br/>

获取图层的渲染器实例

</div>
</details>
