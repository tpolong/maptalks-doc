<details><summary>getStartAngle()</summary>
<div>
<br/>

获取扇形的起始角度，单位为度

返回：

* `Number`

</div>
</details>

<details><summary>setStartAngle(startAngle)</summary>
<div>
<br/>

设置扇形的起始角度并触发形状变化重绘

参数：

* startAngle `number`

返回：

* `Sector` this

触发事件：

* `Sector#shapechange`

</div>
</details>

<details><summary>getEndAngle()</summary>
<div>
<br/>

获取扇形的结束角度，单位为度

返回：

* `Number`

</div>
</details>

<details><summary>setEndAngle(endAngle)</summary>
<div>
<br/>

设置扇形的结束角度并触发形状变化重绘

参数：

* endAngle `number`

返回：

* `Sector` this

触发事件：

* `Sector#shapechange`

</div>
</details>

<details><summary>getShell()</summary>
<div>
<br/>

获取扇形的外环坐标，点数由 numberOfShellPoints 选项决定

返回：

* `Coordinate[]` - shell coordinates

</div>
</details>

<details><summary>getRotateOffsetAngle()</summary>
<div>
<br/>

获取扇形旋转坐标时的固定角度偏移量，值为 90 度

</div>
</details>
