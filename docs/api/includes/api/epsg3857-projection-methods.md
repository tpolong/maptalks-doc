<details><summary>code()</summary>
<div>
<br/>

投影的 code，固定为 EPSG:3857

</div>
</details>

<details><summary>rad()</summary>
<div>
<br/>

角度转弧度的换算系数，即 PI 除以 180

</div>
</details>

<details><summary>metersPerDegree()</summary>
<div>
<br/>

每度经纬度对应的米数，按赤道半径 6378137 计算

</div>
</details>

<details><summary>maxLatitude()</summary>
<div>
<br/>

墨卡托投影支持的最大纬度，约 85.051

</div>
</details>

<details><summary>project(lnglat, out?)</summary>
<div>
<br/>

把经纬度投影为 EPSG:3857 平面坐标，纬度超出会被截断

参数：

* lnglat `Coordinate`
* out（可选） `Coordinate`

</div>
</details>

<details><summary>unproject(pLnglat, out?)</summary>
<div>
<br/>

把 EPSG:3857 平面坐标反算回经纬度

参数：

* pLnglat `Coordinate`
* out（可选） `Coordinate`

</div>
</details>
