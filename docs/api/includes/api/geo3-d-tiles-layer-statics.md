<details><summary>fromJSON(layerJSON)</summary>
<div>
<br/>

用layer的JSON对象反序列一个Geo3DTilesLayer对象

参数：

* layerJSON `object`

返回：

* `Geo3DTilesLayer | null`

</div>
</details>

<details><summary>getEnuTransform(coordinate, scale, rotation)</summary>
<div>
<br/>

获取由坐标、缩放与旋转算出的 ENU 变换矩阵

参数：

* coordinate `[number, number, number]`
* scale `[number, number, number] = [1, 1, 1]`
* rotation `[number, number, number] = [0, 0, 0]`

</div>
</details>
