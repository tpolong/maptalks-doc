<details><summary>measure()</summary>
<div>
<br/>

measurer 的标识编码，Identity measurer 固定取值为 IDENTITY

</div>
</details>

<details><summary>measureLenBetween(c1, c2, ignoreAltitude = false)</summary>
<div>
<br/>

计算两个坐标之间的距离

参数：

* c1 `Coordinate | CoordinateJson`
* c2 `Coordinate | CoordinateJson`
* ignoreAltitude = false `Any`

返回：

* `number`

</div>
</details>

<details><summary>measureArea(coordinates)</summary>
<div>
<br/>

测量给定闭合坐标的面积

参数：

* coordinates `(Coordinate | CoordinateJson)[]`

返回：

* `number`

</div>
</details>

<details><summary>locate(c, xDist, yDist, out?)</summary>
<div>
<br/>

使用 x 轴距离和 y 轴距离从给定源坐标定位坐标

参数：

* c `Coordinate | CoordinateJson`
* xDist `number`
* yDist `number`
* out（可选） `Coordinate`

</div>
</details>

<details><summary>rotate(c, pivot, angle)</summary>
<div>
<br/>

绕枢轴旋转给定角度的坐标

参数：

* c `Coordinate | CoordinateJson` source coordinate
* pivot `Coordinate` pivot
* angle `number` angle in degree

</div>
</details>
