<details><summary>closeTo(p, delta?)</summary>
<div>
<br/>

使用差值与另一个坐标进行比较，判断是否临近

参数：

* p `Coordinate`
* delta（可选） `number`

返回：

* `boolean`

</div>
</details>

<details><summary>abs()</summary>
<div>
<br/>

返回该坐标 x、y、z 绝对值的坐标对象（不会改变原始数据，z 存在时才会处理 z）

返回：

* `Any` abs Coordinate

</div>
</details>

<details><summary>round()</summary>
<div>
<br/>

类似于数学中的四舍五入，对坐标的 x、y、z 进行舍入，返回一个新 Coordinate（z 存在时才会处理 z）

返回：

* `Any` rounded coordinate

</div>
</details>

<details><summary>ceil()</summary>
<div>
<br/>

对坐标的 x、y、z 向上取整，返回一个新 Coordinate（z 存在时才会处理 z）

返回：

* `Any` ceiled coordinate

</div>
</details>

<details><summary>floor()</summary>
<div>
<br/>

对坐标的 x、y、z 向下取整，返回一个新 Coordinate（z 存在时才会处理 z）

返回：

* `Any` floored coordinate

</div>
</details>

<details><summary>copy()</summary>
<div>
<br/>

返回当前坐标的 copy

返回：

* `Any` copy

</div>
</details>

<details><summary>toFixed(n)</summary>
<div>
<br/>

坐标数字保留指定位数的小数

参数：

* n `number` The number of digits to appear after the decimal coordinate

返回：

* `Any` fixed coordinate

</div>
</details>

<details><summary>add(x, y?, z?)</summary>
<div>
<br/>

与传入坐标相加，返回一个新 Coordinate

参数：

* x `any` coordinate to add
* y（可选） `number` coordinate to add
* z（可选） `number`

返回：

* `Any` result

</div>
</details>

<details><summary>sub(x, y?, z?)</summary>
<div>
<br/>

与传入坐标相减，返回一个新 Coordinate。

参数：

* x `any` coordinate to add
* y（可选） `number` =undefined] - optional, coordinate to add
* z（可选） `number`

返回：

* `Any` result

</div>
</details>

<details><summary>multi(ratio)</summary>
<div>
<br/>

将当前坐标与给定数字相乘，返回一个新 Coordinate。

参数：

* ratio `number` ratio to multi

返回：

* `Any` result

</div>
</details>

<details><summary>equals(c)</summary>
<div>
<br/>

与另外一个 coordinate 进行比较，以查看它们是否相等

参数：

* c `Coordinate` coordinate to compare

</div>
</details>

<details><summary>add(x)</summary>
<div>
<br/>

与传入坐标相加，返回一个新 Coordinate

参数：

* x `CoordinateLike` coordinate to add

返回：

* `Any` result

</div>
</details>

<details><summary>add(x, y, z?)</summary>
<div>
<br/>

与传入坐标相加，返回一个新 Coordinate

参数：

* x `number` coordinate to add
* y `number` coordinate to add
* z（可选） `number`

返回：

* `Any` result

</div>
</details>

<details><summary>sub(x)</summary>
<div>
<br/>

与传入坐标相减，返回一个新 Coordinate。

参数：

* x `CoordinateLike` coordinate to add

返回：

* `Any` result

</div>
</details>

<details><summary>sub(x, y, z?)</summary>
<div>
<br/>

与传入坐标相减，返回一个新 Coordinate。

参数：

* x `number` coordinate to add
* y `number` coordinate to add
* z（可选） `number` altitude to add

返回：

* `Any` result

</div>
</details>
