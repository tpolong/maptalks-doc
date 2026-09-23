<details><summary>getOutline()</summary>
<div>
<br/>

按 extent 生成描边多边形，无 painter 时返回 null

返回：

* `null | Polygon`

</div>
</details>

<details><summary>setCoordinates(coordinates)</summary>
<div>
<br/>

设置多边形坐标

参数：

* coordinates `PolygonCoordinatesType | LineStringCoordinatesType` new coordinates

返回：

* `Polygon` this

触发事件：

* `Polygon#shapechange`

</div>
</details>

<details><summary>getCoordinates()</summary>
<div>
<br/>

获取多边形坐标

返回：

* `Coordinate[][]`

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

<details><summary>getShell()</summary>
<div>
<br/>

获取多边形的外壳坐标

返回：

* `Coordinate[]`

</div>
</details>

<details><summary>getHoles()</summary>
<div>
<br/>

获取多边形的洞的坐标（如果有）。

返回：

* `Coordinate[][]`

</div>
</details>

<details><summary>hasHoles()</summary>
<div>
<br/>

判断多边形是否带有洞

返回：

* `Boolean`

</div>
</details>
