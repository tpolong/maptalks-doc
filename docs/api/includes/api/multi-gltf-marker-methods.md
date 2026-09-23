<details><summary>setCoordinates(coordinates)</summary>
<div>
<br/>

设置全部子 marker 的 coordinates，传单个 Coordinate 时整体平移

参数：

* coordinates `Any`

</div>
</details>

<details><summary>getCoordinates(e)</summary>
<div>
<br/>

按传入事件的 index 获取对应子 marker 的 coordinates

参数：

* e `Any`

</div>
</details>

<details><summary>addData(item)</summary>
<div>
<br/>

新增一个子 marker 的数据项并刷新图层的 marker 映射

参数：

* item `Any`

</div>
</details>

<details><summary>removeData(index)</summary>
<div>
<br/>

删除指定索引的子 marker 数据项并刷新图层

参数：

* index `Any`

</div>
</details>

<details><summary>getData(idx)</summary>
<div>
<br/>

获取指定索引的子 marker 数据项

参数：

* idx `Any`

</div>
</details>

<details><summary>updateData(idx, name, value)</summary>
<div>
<br/>

修改指定索引子 marker 数据项上某个属性的值

参数：

* idx `Any`
* name `Any`
* value `Any`

</div>
</details>

<details><summary>getAllData()</summary>
<div>
<br/>

获取全部子 marker 的数据项数组

</div>
</details>

<details><summary>updateAllData(name, value)</summary>
<div>
<br/>

用数组逐项批量设置全部子 marker 的同一属性值

参数：

* name `Any`
* value `Any`

</div>
</details>

<details><summary>removeAllData()</summary>
<div>
<br/>

清空全部子 marker 的数据项

</div>
</details>

<details><summary>openInfoWindow(index)</summary>
<div>
<br/>

在指定索引子 marker 的坐标处打开 infoWindow，无效时用中心点

参数：

* index `Any`

</div>
</details>

<details><summary>getCenter()</summary>
<div>
<br/>

计算全部子 marker coordinates 的平均值作为中心点

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

获取标记所在的 map，取不到时回退取所属 layer 的 map

</div>
</details>

<details><summary>getLayer()</summary>
<div>
<br/>

获取标记所属的 layer

</div>
</details>

<details><summary>getCount()</summary>
<div>
<br/>

获取标记中数据项的数量

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

导出为 JSON，包含 data、options 与 properties

</div>
</details>

<details><summary>getIndexByPickingId(pickingId)</summary>
<div>
<br/>

根据 pickingId 反查数据项的索引

参数：

* pickingId `Any`

</div>
</details>

<details><summary>outline(idx)</summary>
<div>
<br/>

开启指定索引数据项的描边

参数：

* idx `Any`

</div>
</details>

<details><summary>cancelOutline(idx)</summary>
<div>
<br/>

取消指定索引数据项的描边

参数：

* idx `Any`

</div>
</details>

<details><summary>isOutline()</summary>
<div>
<br/>

判断是否有数据项已开启描边

</div>
</details>

<details><summary>highlightNodes(index, highlights)</summary>
<div>
<br/>

按 nodeIndex 高亮数据项中指定的 node

参数：

* index `Any`
* highlights `Any`

</div>
</details>

<details><summary>highlight(index, highlight)</summary>
<div>
<br/>

高亮指定数据项，可指定 color 与 opacity

参数：

* index `Any`
* highlight `Any`

</div>
</details>

<details><summary>cancelHighlight(index, nodes)</summary>
<div>
<br/>

取消指定数据项的高亮，可限定 node

参数：

* index `Any`
* nodes `Any`

</div>
</details>

<details><summary>zoomAt(index, options = { animation: true, zoomOffset: 0 }, step)</summary>
<div>
<br/>

把地图缩放到指定数据项的位置，可带动画

参数：

* index `Any`
* options = { animation: true, zoomOffset: 0 } `Any`
* step `Any`

返回：

* `Any` this

</div>
</details>
