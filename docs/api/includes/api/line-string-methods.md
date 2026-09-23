<details><summary>getOutline()</summary>
<div>
<br/>

复用 Polygon 的实现，按 extent 生成描边多边形

返回：

* `any`

</div>
</details>

<details><summary>setCoordinates(coordinates)</summary>
<div>
<br/>

给线段设置坐标

参数：

* coordinates `Array<Coordinate> | Array<Array<number>>` new coordinates

返回：

* `LineString` this

触发事件：

* `LineString#shapechange`

</div>
</details>

<details><summary>getCoordinates()</summary>
<div>
<br/>

获取线段的坐标

返回：

* `Coordinate[]|Number[][]` coordinates

</div>
</details>

<details><summary>getCenterInExtent(extent)</summary>
<div>
<br/>

获取具有给定范围的线串的交点的中心

参数：

* extent `Extent`

返回：

* `Coordinate` center, null if line doesn't intersect with extent

</div>
</details>
