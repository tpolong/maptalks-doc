<details><summary>getCoordinates()</summary>
<div>
<br/>

获取矩形西北角的 coordinate

返回：

* `Coordinate`

</div>
</details>

<details><summary>setCoordinates(nw)</summary>
<div>
<br/>

设置矩形西北角的 coordinate

参数：

* nw `Coordinate | Array<number>` coordinates of new northwest

返回：

* `Rectangle` this

触发事件：

* `Rectangle#positionchange`

</div>
</details>

<details><summary>getWidth()</summary>
<div>
<br/>

获取矩形宽度，单位为米

返回：

* `Number`

</div>
</details>

<details><summary>setWidth(width)</summary>
<div>
<br/>

设置矩形宽度，单位为米

参数：

* width `number` new width

返回：

* `Rectangle` this

触发事件：

* `Rectangle#shapechange`

</div>
</details>

<details><summary>getHeight()</summary>
<div>
<br/>

获取矩形高度，单位为米

返回：

* `Number`

</div>
</details>

<details><summary>setHeight(height)</summary>
<div>
<br/>

设置矩形高度，单位为米

参数：

* height `number` new height

返回：

* `Rectangle` this

触发事件：

* `Rectangle#shapechange`

</div>
</details>

<details><summary>getShell()</summary>
<div>
<br/>

获取矩形的外环 coordinate 数组，旋转时按旋转后计算

返回：

* `Coordinate[]` - shell coordinates

</div>
</details>

<details><summary>getHoles()</summary>
<div>
<br/>

矩形没有洞，固定返回空数组

返回：

* `Object[]` an empty array

</div>
</details>

<details><summary>animateShow()</summary>
<div>
<br/>

以动画方式显示矩形，内部即调用 show

</div>
</details>
