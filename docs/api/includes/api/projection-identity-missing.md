<details><summary>is(code)</summary>
<div>
<br/>

判断投影的 code 或 aliases 是否与给定编码匹配

参数：

* code `string`

</div>
</details>

<details><summary>projectCoords(coordinates, antiMeridian?)</summary>
<div>
<br/>

批量将地理坐标投影到投影坐标

参数：

* coordinates `Coordinate[] | Coordinate[][] | Coordinate[][][]` coordinates to project
* antiMeridian（可选） `boolean`

返回：

* `Coordinate[] | Coordinate[][] | Coordinate[][][]`

</div>
</details>

<details><summary>unprojectCoords(projCoords)</summary>
<div>
<br/>

批量将投影坐标转到地理坐标

参数：

* projCoords `Coordinate[] | Coordinate[][] | Coordinate[][][]` projected coordinates to unproject

返回：

* `Coordinate[] | Coordinate[][] | Coordinate[][][]`

</div>
</details>

<details><summary>isSphere()</summary>
<div>
<br/>

投影是否为球面

返回：

* `boolean`

</div>
</details>

<details><summary>isOutSphere(pcoord)</summary>
<div>
<br/>

判断传入的投影坐标是否超出椭球体范围

参数：

* pcoord `Coordinate` projected coord

返回：

* `Boolean`

</div>
</details>

<details><summary>wrapCoord(pcoord)</summary>
<div>
<br/>

限制投影坐标在球体中

参数：

* pcoord `Coordinate` projected coord

返回：

* `Any` wrapped projected coord

</div>
</details>

<details><summary>getCircum()</summary>
<div>
<br/>

获取球面投影的周长，Identity 非球面投影故返回 undefined

返回：

* `Record<string, number>`

</div>
</details>

<details><summary>getSphereExtent()</summary>
<div>
<br/>

获取球面投影范围，Identity 非球面投影故返回 undefined

返回：

* `Extent`

</div>
</details>
