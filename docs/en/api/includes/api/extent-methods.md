<details><summary>add(p)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* p `any`

</div>
</details>

<details><summary>sub(p)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* p `any`

</div>
</details>

<details><summary>substract(p)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

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

<details><summary>getMin(out?)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* out (optional) `PositionType`

Returns:

* `PositionType`

</div>
</details>

<details><summary>getMax(out?)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* out (optional) `PositionType`

</div>
</details>

<details><summary>getCenter(out?)</summary>
<div>
<br/>

Get center of the extent.

Parameters:

* out (optional) `PositionType`

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

<details><summary>intersects(ext2)</summary>
<div>
<br/>

Whether it intersects with another extent

Parameters:

* ext2 `Extent | PointExtent` another extent

Returns:

* `boolean`

</div>
</details>

<details><summary>within(extent)</summary>
<div>
<br/>

Whether the extent is within another extent

Parameters:

* extent `Extent | PointExtent` another extent

Returns:

* `boolean`

</div>
</details>

<details><summary>contains(c)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* c `any`

Returns:

* `boolean`

</div>
</details>

<details><summary>getWidth()</summary>
<div>
<br/>

Get the width of the Extent

Returns:

* `number`

</div>
</details>

<details><summary>getHeight()</summary>
<div>
<br/>

Get the height of the Extent

Returns:

* `number`

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

<details><summary>combine(extent)</summary>
<div>
<br/>

Combine it with another extent to a larger extent.

Parameters:

* extent `PositionType | Extent | PointExtent` extent/coordinate/point to combine into

Returns:

* `Any` extent combined

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

<details><summary>expand(distance)</summary>
<div>
<br/>

Expand the extent by distance

Parameters:

* distance `number | Size` distance to expand

Returns:

* `Any` a new extent expanded from

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

Get extent's JSON object.

Returns:

* `Any` jsonObject

</div>
</details>

<details><summary>toArray(out?)</summary>
<div>
<br/>

Get a coordinate array of extent's rectangle area, containing 5 coordinates in which the first equals with the last.

Parameters:

* out (optional) `PositionType[]`

Returns:

* `Any` coordinates array

</div>
</details>

<details><summary>toBBOX()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

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

<details><summary>copy()</summary>
<div>
<br/>

Get a copy of the extent.

Returns:

* `Any` copy

</div>
</details>

<details><summary>convertTo(fn)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* fn `(p: any) => any, out?: Extent | PointExtent`

Returns:

* `Extent | PointExtent`

</div>
</details>

<details><summary>add(p)</summary>
<div>
<br/>

Add the extent with a coordinate or a point.

Parameters:

* p `Extent`

Returns:

* `Any` a new extent

</div>
</details>

<details><summary>add(p)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* p `PointExtent`

Returns:

* `this`

</div>
</details>

<details><summary>add(p)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* p `PositionType`

Returns:

* `this`

</div>
</details>

<details><summary>add(p)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* p `number[]`

Returns:

* `this`

</div>
</details>

<details><summary>sub(p)</summary>
<div>
<br/>

Substract the extent with a coordinate or a point.

Parameters:

* p `[number, number]`

Returns:

* `Any` a new extent

</div>
</details>

<details><summary>sub(p)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* p `PositionType`

Returns:

* `this`

</div>
</details>

<details><summary>sub(p)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* p `Extent | PointExtent`

Returns:

* `this`

</div>
</details>

<details><summary>substract(p)</summary>
<div>
<br/>

Alias for sub

Parameters:

* p `[number, number]`

Returns:

* `Any` a new extent

</div>
</details>

<details><summary>substract(p)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* p `PositionType`

Returns:

* `this`

</div>
</details>

<details><summary>substract(p)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* p `Extent | PointExtent`

Returns:

* `this`

</div>
</details>

<details><summary>getMin(out?)</summary>
<div>
<br/>

Get the minimum point

Parameters:

* out (optional) `Point`

Returns:

* `Point`

</div>
</details>

<details><summary>getMin(out?)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* out (optional) `Coordinate`

Returns:

* `Coordinate`

</div>
</details>

<details><summary>getMax(out?)</summary>
<div>
<br/>

Get the maximum point

Parameters:

* out (optional) `Point`

Returns:

* `Point`

</div>
</details>

<details><summary>getMax(out?)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* out (optional) `Coordinate`

Returns:

* `Coordinate`

</div>
</details>

<details><summary>contains(c)</summary>
<div>
<br/>

Whether the extent contains the input point.

Parameters:

* c `CoordinateLike` input point

Returns:

* `boolean`

</div>
</details>

<details><summary>convertTo(fn)</summary>
<div>
<br/>

Convert to a new extent

Parameters:

* fn `(p: Point) => Point, out?: Extent | PointExtent` convert function on each point

Returns:

* `Extent | PointExtent`

</div>
</details>

<details><summary>convertTo(fn)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* fn `(p: Coordinate) => Coordinate, out?: Extent | PointExtent`

Returns:

* `Extent | PointExtent`

</div>
</details>
