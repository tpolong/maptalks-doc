<details><summary>getCoordinates()</summary>
<div>
<br/>

获取几何图形的中心点

返回：

* `Coordinate` - center of the geometry

</div>
</details>

<details><summary>setCoordinates(coordinates)</summary>
<div>
<br/>

设置几何图形的中心点

参数：

* coordinates `Coordinate | Array<number>` new center

返回：

* `Geometry` this

触发事件：

* `Geometry#positionchange`

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

获取几何图形所属的 map 实例

返回：

* `Map`

</div>
</details>

<details><summary>onPositionChanged()</summary>
<div>
<br/>

几何图形位置变化后清缓存重绘并派发 positionchange

</div>
</details>
