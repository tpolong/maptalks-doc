<details><summary>add(p)</summary>
<div>
<br/>

Add a coordinate, point or extent, returning a new extent.

Parameters:

* p `any`

</div>
</details>

<details><summary>sub(p)</summary>
<div>
<br/>

Subtract a coordinate, point or extent, returning a new extent.

Parameters:

* p `any`

</div>
</details>

<details><summary>substract(p)</summary>
<div>
<br/>

Subtract a coordinate, point or extent; alias for sub.

Parameters:

* p `any`

</div>
</details>

<details><summary>round()</summary>
<div>
<br/>

Round the extent

Returns:

* `Any` rounded extent

</div>
</details>

<details><summary>equals(ext2)</summary>
<div>
<br/>

Compare with another extent to see whether they are equal.

Parameters:

* ext2 `Extent | PointExtent` extent to compare

Returns:

* `boolean`

</div>
</details>

<details><summary>getSize()</summary>
<div>
<br/>

Get size of the Extent

</div>
</details>

<details><summary>set(xmin, ymin, xmax, ymax)</summary>
<div>
<br/>

set extent value

Parameters:

* xmin `WithNull<number>`
* ymin `WithNull<number>`
* xmax `WithNull<number>`
* ymax `WithNull<number>`

</div>
</details>

<details><summary>intersection(extent)</summary>
<div>
<br/>

Gets the intersection extent of this and another extent.

Parameters:

* extent `Extent | PointExtent` another extent

Returns:

* `Any` intersection extent

</div>
</details>

<details><summary>toString()</summary>
<div>
<br/>

Get the string consisting of xmin, ymin, xmax, and ymax of extent

Returns:

* `string`

</div>
</details>

<details><summary>convertTo(fn)</summary>
<div>
<br/>

Convert the extent corners with a function, returning a new extent; out can be reused.

Parameters:

* fn `(p: any) => any, out?: Extent | PointExtent`

Returns:

* `Extent | PointExtent`

</div>
</details>

<details><summary>add(p)</summary>
<div>
<br/>

Add a coordinate, point or extent, returning a new extent.

Parameters:

* p `Extent`

Returns:

* `Any` a new extent

</div>
</details>

<details><summary>add(p)</summary>
<div>
<br/>

Add a coordinate, point or extent, returning a new extent.

Parameters:

* p `PointExtent`

Returns:

* `this`

</div>
</details>

<details><summary>add(p)</summary>
<div>
<br/>

Add a coordinate, point or extent, returning a new extent.

Parameters:

* p `PositionType`

Returns:

* `this`

</div>
</details>

<details><summary>add(p)</summary>
<div>
<br/>

Add a coordinate, point or extent, returning a new extent.

Parameters:

* p `number[]`

Returns:

* `this`

</div>
</details>

<details><summary>sub(p)</summary>
<div>
<br/>

Subtract a coordinate, point or extent, returning a new extent.

Parameters:

* p `[number, number]`

Returns:

* `Any` a new extent

</div>
</details>

<details><summary>sub(p)</summary>
<div>
<br/>

Subtract a coordinate, point or extent, returning a new extent.

Parameters:

* p `PositionType`

Returns:

* `this`

</div>
</details>

<details><summary>sub(p)</summary>
<div>
<br/>

Subtract a coordinate, point or extent, returning a new extent.

Parameters:

* p `Extent | PointExtent`

Returns:

* `this`

</div>
</details>

<details><summary>substract(p)</summary>
<div>
<br/>

Subtract a coordinate, point or extent; alias for sub.

Parameters:

* p `[number, number]`

Returns:

* `Any` a new extent

</div>
</details>

<details><summary>substract(p)</summary>
<div>
<br/>

Subtract a coordinate, point or extent; alias for sub.

Parameters:

* p `PositionType`

Returns:

* `this`

</div>
</details>

<details><summary>substract(p)</summary>
<div>
<br/>

Subtract a coordinate, point or extent; alias for sub.

Parameters:

* p `Extent | PointExtent`

Returns:

* `this`

</div>
</details>

<details><summary>convertTo(fn)</summary>
<div>
<br/>

Convert the extent corners with a function, returning a new extent; out can be reused.

Parameters:

* fn `(p: Point) => Point, out?: Extent | PointExtent` convert function on each point

Returns:

* `Extent | PointExtent`

</div>
</details>

<details><summary>convertTo(fn)</summary>
<div>
<br/>

Convert the extent corners with a function, returning a new extent; out can be reused.

Parameters:

* fn `(p: Coordinate) => Coordinate, out?: Extent | PointExtent`

Returns:

* `Extent | PointExtent`

</div>
</details>
