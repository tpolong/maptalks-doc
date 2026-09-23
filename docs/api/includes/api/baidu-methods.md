<details><summary>measure()</summary>
<div>
<br/>

百度测量器的注册名，值为 BAIDU

</div>
</details>

<details><summary>sphere(6370996.81)</summary>
<div>
<br/>

百度量测使用的球体，半径为 6370996.81

参数：

* 6370996.81 `Any`

</div>
</details>

<details><summary>measureLenBetween(c1, c2)</summary>
<div>
<br/>

计算两个坐标之间的距离

参数：

* c1 `CoordsLike`
* c2 `CoordsLike`

返回：

* `number`

</div>
</details>

<details><summary>measureArea(coordinates)</summary>
<div>
<br/>

计算给定闭合坐标的面积

参数：

* coordinates `CoordsLike[]`

返回：

* `number`

</div>
</details>

<details><summary>locate(c, xDist, yDist, out?)</summary>
<div>
<br/>

使用 x 轴距离和 y 轴距离从给定源坐标定位坐标。

参数：

* c `CoordsLike` source coordinate
* xDist `number` x-axis distance
* yDist `number` y-axis distance
* out（可选） `Coordinate` out

</div>
</details>

<details><summary>rotate(c, pivot, angle)</summary>
<div>
<br/>

绕枢轴旋转给定角度的坐标

参数：

* c `CoordsLike` source coordinate
* pivot `Coordinate` pivot
* angle `number` angle in degree

</div>
</details>
