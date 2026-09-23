<details><summary>transform(coordinates, scale, out?)</summary>
<div>
<br/>

将投影坐标变换为二维点，
变换/非变换方法中的参数scale用于在地图的不同缩放级别上缩放结果2d点。

参数：

* coordinates `Coordinate` projected coordinate to transform
* scale `number` transform scale
* out（可选） `Point` tmp point

返回：

* `Any` 2d point.

</div>
</details>

<details><summary>untransform(point, scale, out?)</summary>
<div>
<br/>

将 2d 点变换为投影坐标。

参数：

* point `Point` 2d point
* scale `number` transform scale
* out（可选） `Coordinate` tmp coordinates

返回：

* `Any` projected coordinate.

</div>
</details>
