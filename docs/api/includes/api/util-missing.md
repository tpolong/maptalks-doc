<details><summary>isSVG(url)</summary>
<div>
<br/>

判断 url 是否为 svg，.svg 结尾返回 1，data 前缀返回 2，否则返回 0

参数：

* url `string`

</div>
</details>

<details><summary>pushIn(args)</summary>
<div>
<br/>

把后续各数组的元素依次追加进第一个数组，返回追加后的长度

参数：

* args `T[]`

</div>
</details>

<details><summary>mergeArray(args)</summary>
<div>
<br/>

把各入参数组的元素拼接成一个新数组返回

参数：

* args `T[]`

</div>
</details>

<details><summary>getValueOrDefault(v, d)</summary>
<div>
<br/>

值为 undefined 时返回默认值，否则返回原值

参数：

* v `T`
* d `T`

</div>
</details>

<details><summary>sign(x)</summary>
<div>
<br/>

获取数值符号，正数返回 1 负数返回 -1，为 Math.sign 的 polyfill

参数：

* x `number`

</div>
</details>

<details><summary>log2(x)</summary>
<div>
<br/>

以 2 为底取对数，结果接近整数时取整，为 Math.log2 的 polyfill

参数：

* x `number`

</div>
</details>

<details><summary>wrap(n, min, max)</summary>
<div>
<br/>

用取模运算把数值 n 循环折回 min 到 max 区间内

参数：

* n `number` value
* min `number` the minimum value to be returned, inclusive
* max `number` the maximum value to be returned, inclusive

返回：

* `Any` constrained number

</div>
</details>

<details><summary>isArrayHasData(obj)</summary>
<div>
<br/>

判断是否为非空数组

参数：

* obj `Object`

返回：

* `Any` true|false

</div>
</details>

<details><summary>isCssUrl(str)</summary>
<div>
<br/>

判断字符串是否形如 css 的 url 写法，无引号返回 1 有引号返回 2

参数：

* str `string`

</div>
</details>

<details><summary>equalMapView(obj1, obj2)</summary>
<div>
<br/>

浅比较两个 map view 对象，center 按 1e-6 精度近似判断

参数：

* obj1 `Object`
* obj2 `Object`

</div>
</details>

<details><summary>_defaults(obj, defaults)</summary>
<div>
<br/>

把 defaults 的属性描述符补到 obj 上，仅限 obj 中为 undefined 的键

参数：

* obj `any`
* defaults `any`

</div>
</details>

<details><summary>getPointsResultPts(points, ptKey = '_pt')</summary>
<div>
<br/>

为每个点对象复用并重置 ptKey 上的 Point，空项以 null 占位

参数：

* points `any[] = []`
* ptKey = '_pt' `Any`

</div>
</details>

<details><summary>getImageBitMap(data, cb)</summary>
<div>
<br/>

取出 data 中的图像数据直接交给回调处理

参数：

* data `{ data: T }`
* cb `(d: T) => void | any`

</div>
</details>

<details><summary>getAbsoluteURL(url)</summary>
<div>
<br/>

把相对 URL 解析为绝对 URL，已是 http 或 https 的原样返回

参数：

* url `string`

</div>
</details>

<details><summary>calCanvasSize(size, devicePixelRatio = 1)</summary>
<div>
<br/>

按 devicePixelRatio 换算 canvas 像素宽高与 css 宽高，结果对象复用

参数：

* size `{ width: number, height: number }`
* devicePixelRatio = 1 `Any`

</div>
</details>

<details><summary>isNoContentHttpCode(code)</summary>
<div>
<br/>

判断 HTTP 状态码是否表示无内容，涵盖 204、4xx 与 501

参数：

* code `number`

</div>
</details>
