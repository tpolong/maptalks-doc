<details><summary>outExpo(x)</summary>
<div>
<br/>

指数缓出函数，快起慢收逼近终点

参数：

* x `number`

</div>
</details>

<details><summary>outQuint(x)</summary>
<div>
<br/>

五次幂缓出函数，起始快末段平缓

参数：

* x `number`

</div>
</details>

<details><summary>in(t)</summary>
<div>
<br/>

二次幂缓入函数，由慢到快

参数：

* t `number`

返回：

* `number` Output between 0 and 1.

</div>
</details>

<details><summary>out(t)</summary>
<div>
<br/>

二次幂缓出函数，由快到慢

参数：

* t `number`

返回：

* `number` Output between 0 and 1.

</div>
</details>

<details><summary>inAndOut(t)</summary>
<div>
<br/>

平滑缓入缓出函数，慢快慢

参数：

* t `number`

返回：

* `number` Output between 0 and 1.

</div>
</details>

<details><summary>linear(t)</summary>
<div>
<br/>

线性缓动函数，速度恒定

参数：

* t `number`

返回：

* `number` Output between 0 and 1.

</div>
</details>

<details><summary>upAndDown(t)</summary>
<div>
<br/>

缓动函数，把 t 的前后半段各做一次 inAndOut，末段减速更迟

参数：

* t `number`

返回：

* `number` Output between 0 and 1.

</div>
</details>
