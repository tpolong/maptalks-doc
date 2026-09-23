<details><summary>set(x, y, z?)</summary>
<div>
<br/>

设置点或坐标的 x、y 值

参数：

* x `number` x value
* y `number` y value
* z（可选） `number` z value

</div>
</details>

<details><summary>distanceTo(point)</summary>
<div>
<br/>

返回当前点与给定点之间的距离

参数：

* point `Point | Coordinate` another point

返回：

* `Any` distance

</div>
</details>

<details><summary>mag()</summary>
<div>
<br/>

返回该点的大小：这是从 0,0 坐标到该点的 x 和 y 坐标的欧几里得距离

返回：

* `Any` magnitude

</div>
</details>

<details><summary>substract(x, y?)</summary>
<div>
<br/>

`sub` 方法的别名。

参数：

* x `PositionLike | number`
* y（可选） `number`

返回：

* `Any` result

</div>
</details>

<details><summary>div(n)</summary>
<div>
<br/>

返回当前坐标除以给定数字

参数：

* n `number` number to div

返回：

* `Any` result

</div>
</details>

<details><summary>isZero()</summary>
<div>
<br/>

`Coordinate` / `Point`是否为零

返回：

* `boolean`

</div>
</details>

<details><summary>toArray()</summary>
<div>
<br/>

转换为数组形式

返回：

* `Any` number array

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

转换到 json 对象

返回：

* `Any` json

</div>
</details>
