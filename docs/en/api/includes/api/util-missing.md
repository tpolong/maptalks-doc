<details><summary>isSVG(url)</summary>
<div>
<br/>

Checks whether url is svg, returns 1 for a .svg suffix, 2 for a data prefix, else 0

Parameters:

* url `string`

</div>
</details>

<details><summary>pushIn(args)</summary>
<div>
<br/>

Appends the elements of the following arrays into the first array, returns the new length

Parameters:

* args `T[]`

</div>
</details>

<details><summary>mergeArray(args)</summary>
<div>
<br/>

Concatenates the elements of all input arrays into a new array

Parameters:

* args `T[]`

</div>
</details>

<details><summary>getValueOrDefault(v, d)</summary>
<div>
<br/>

Returns the default when the value is undefined, otherwise returns the value itself

Parameters:

* v `T`
* d `T`

</div>
</details>

<details><summary>sign(x)</summary>
<div>
<br/>

Polyfill for Math.sign

Parameters:

* x `number`

</div>
</details>

<details><summary>log2(x)</summary>
<div>
<br/>

Base-2 logarithm that rounds near-integer results, polyfilling Math.log2.

Parameters:

* x `number`

</div>
</details>

<details><summary>wrap(n, min, max)</summary>
<div>
<br/>

constrain n to the given range, via modular arithmetic

Parameters:

* n `number` value
* min `number` the minimum value to be returned, inclusive
* max `number` the maximum value to be returned, inclusive

Returns:

* `Any` constrained number

</div>
</details>

<details><summary>isArrayHasData(obj)</summary>
<div>
<br/>

Is object an array and not empty.

Parameters:

* obj `Object`

Returns:

* `Any` true|false

</div>
</details>

<details><summary>isCssUrl(str)</summary>
<div>
<br/>

Checks whether a string looks like a css url, returns 1 without quotes and 2 with quotes

Parameters:

* str `string`

</div>
</details>

<details><summary>equalMapView(obj1, obj2)</summary>
<div>
<br/>

shallow equal

Parameters:

* obj1 `Object`
* obj2 `Object`

</div>
</details>

<details><summary>_defaults(obj, defaults)</summary>
<div>
<br/>

Copies defaults property descriptors onto obj, only for keys that are undefined in obj

Parameters:

* obj `any`
* defaults `any`

</div>
</details>

<details><summary>getPointsResultPts(points, ptKey = '_pt')</summary>
<div>
<br/>

Reuses and resets a Point on ptKey for each point object, null placeholder for empty items

Parameters:

* points `any[] = []`
* ptKey = '_pt' `Any`

</div>
</details>

<details><summary>getImageBitMap(data, cb)</summary>
<div>
<br/>

Takes the image data out of data and passes it directly to the callback

Parameters:

* data `{ data: T }`
* cb `(d: T) => void | any`

</div>
</details>

<details><summary>getAbsoluteURL(url)</summary>
<div>
<br/>

Resolves a relative URL to an absolute URL, returns http or https URLs unchanged

Parameters:

* url `string`

</div>
</details>

<details><summary>calCanvasSize(size, devicePixelRatio = 1)</summary>
<div>
<br/>

Converts canvas pixel and css width and height by devicePixelRatio, reusing the result object

Parameters:

* size `{ width: number, height: number }`
* devicePixelRatio = 1 `Any`

</div>
</details>

<details><summary>isNoContentHttpCode(code)</summary>
<div>
<br/>

Checks whether an HTTP status code means no content, covering 204, 4xx and 501

Parameters:

* code `number`

</div>
</details>
