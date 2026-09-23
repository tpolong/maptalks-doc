<details><summary>getRadius()</summary>
<div>
<br/>

获取圆形的半径

返回：

* `Number`

</div>
</details>

<details><summary>setRadius(radius)</summary>
<div>
<br/>

给圆形设置新的半径

参数：

* radius `number` new radius

返回：

* `Circle` this

触发事件：

* `Circle#shapechange`

</div>
</details>

<details><summary>getShell()</summary>
<div>
<br/>

获取作为多边形的圆的外壳，外壳点数由[options.numberOfShellPoints决定

返回：

* `Coordinate[]` - shell coordinates

</div>
</details>

<details><summary>getHoles()</summary>
<div>
<br/>

圆没有任何孔，总是返回null

返回：

* `Object[]` an empty array

</div>
</details>

<details><summary>animateShow()</summary>
<div>
<br/>

圆不做动画，直接调用 show 显示图形

返回：

* `any`

</div>
</details>
