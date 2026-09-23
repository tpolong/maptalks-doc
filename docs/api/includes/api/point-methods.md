<details><summary>closeTo(p, delta?)</summary>
<div>
<br/>

使用差值与另一个点进行比较，判断是否临近

参数：

* p `Point`
* delta（可选） `number`

返回：

* `boolean`

</div>
</details>

<details><summary>unit()</summary>
<div>
<br/>

计算对应的单位向量
这意味着计算点到[0, 0]坐标的距离将等于1，并且从计算点到[0, 0]坐标的角度与之前相同

返回：

* `Any` unit vector point

</div>
</details>

<details><summary>perp()</summary>
<div>
<br/>

计算一个垂直点，其中新的y坐标是旧的x坐标，而新的x坐标是旧的y坐标乘以-1。

返回：

* `Any` perpendicular point

</div>
</details>

<details><summary>angleWith(b)</summary>
<div>
<br/>

获取这个点与另一个点之间的角度，单位为弧度

参数：

* b `Point` the other point

返回：

* `Any` angle

</div>
</details>

<details><summary>angleWithSep(x, y)</summary>
<div>
<br/>

找到两个向量之间的角度

参数：

* x `number` the x-coordinate
* y `number` the y-coordinate

返回：

* `Any` the angle in radians

</div>
</details>

<details><summary>rotate(a)</summary>
<div>
<br/>

围绕0,0原点旋转这个点，旋转角度a以弧度为单位

参数：

* a `number` angle to rotate around, in radians

返回：

* `Any` output point

</div>
</details>

<details><summary>abs()</summary>
<div>
<br/>

返回该点绝对值的 `Point` 对象（不会改变原始数据）

返回：

* `Any` abs point

</div>
</details>

<details><summary>round()</summary>
<div>
<br/>

类似于数学中的四舍五入，对点的 x 和 y 坐标进行舍入，返回一个新 Point

返回：

* `Any` rounded point

</div>
</details>

<details><summary>ceil()</summary>
<div>
<br/>

对点的 x 和 y 坐标向上取整，返回一个新 Point

返回：

* `Any` ceiled point

</div>
</details>

<details><summary>floor()</summary>
<div>
<br/>

对点的 x 和 y 坐标向下取整，返回一个新 Point

返回：

* `Any` floored point

</div>
</details>

<details><summary>copy()</summary>
<div>
<br/>

返回当前点的 copy

返回：

* `Any` copy

</div>
</details>

<details><summary>toFixed(n)</summary>
<div>
<br/>

坐标数字保留指定位数的小数

参数：

* n `number` The number of digits to appear after the decimal point

返回：

* `Any` fixed point

</div>
</details>

<details><summary>add(x, y?)</summary>
<div>
<br/>

与传入坐标相加，返回一个新 Point

参数：

* x `any` point to add
* y（可选） `number` point to add

返回：

* `Any` result

</div>
</details>

<details><summary>sub(x, y?)</summary>
<div>
<br/>

与传入坐标相减，返回一个新 Point。

参数：

* x `any` point to add
* y（可选） `number` =undefined] - optional, point to add

返回：

* `Any` result

</div>
</details>

<details><summary>multi(ratio)</summary>
<div>
<br/>

返回当前 point 与给定数值相乘后的新 point

参数：

* ratio `number` ratio to multi

返回：

* `Any` result

</div>
</details>

<details><summary>equals(c)</summary>
<div>
<br/>

与另外一个 point 进行比较，以查看它们是否相等

参数：

* c `Point` point to compare

</div>
</details>

<details><summary>add(x)</summary>
<div>
<br/>

与传入坐标相加，返回一个新 Point

参数：

* x `PointLike` point to add

返回：

* `Any` result

</div>
</details>

<details><summary>add(x, y)</summary>
<div>
<br/>

与传入坐标相加，返回一个新 Point

参数：

* x `number` point to add
* y `number` point to add

返回：

* `Any` result

</div>
</details>

<details><summary>sub(x)</summary>
<div>
<br/>

与传入坐标相减，返回一个新 Point。

参数：

* x `PointLike` point to add

返回：

* `Any` result

</div>
</details>

<details><summary>sub(x, y)</summary>
<div>
<br/>

与传入坐标相减，返回一个新 Point。

参数：

* x `number` point to add
* y `number` point to add

返回：

* `Any` result

</div>
</details>
