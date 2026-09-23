<details><summary>closeTo(p, delta?)</summary>
<div>
<br/>

Compare with another Coordinate with a delta

Parameters:

* p `Coordinate`
* delta (optional) `number`

Returns:

* `boolean`

</div>
</details>

<details><summary>abs()</summary>
<div>
<br/>

Return abs value of the coordinate (z is processed only if present)

Returns:

* `Any` abs Coordinate

</div>
</details>

<details><summary>round()</summary>
<div>
<br/>

Like math.round, rounding the coordinate's xyz. (z is processed only if present)

Returns:

* `Any` rounded coordinate

</div>
</details>

<details><summary>ceil()</summary>
<div>
<br/>

Like math.ceil, ceil the coordinate's xyz. (z is processed only if present)

Returns:

* `Any` ceiled coordinate

</div>
</details>

<details><summary>floor()</summary>
<div>
<br/>

Like math.floor, floor the coordinate's xyz. (z is processed only if present)

Returns:

* `Any` floored coordinate

</div>
</details>

<details><summary>copy()</summary>
<div>
<br/>

Returns a copy of the coordinate

Returns:

* `Any` copy

</div>
</details>

<details><summary>toFixed(n)</summary>
<div>
<br/>

Formats coordinate number using fixed-coordinate notation.

Parameters:

* n `number` The number of digits to appear after the decimal coordinate

Returns:

* `Any` fixed coordinate

</div>
</details>

<details><summary>add(x, y?, z?)</summary>
<div>
<br/>

Returns the result of addition of another coordinate.

Parameters:

* x `any` coordinate to add
* y (optional) `number` coordinate to add
* z (optional) `number`

Returns:

* `Any` result

</div>
</details>

<details><summary>sub(x, y?, z?)</summary>
<div>
<br/>

Returns the result of subtraction of another coordinate.

Parameters:

* x `any` coordinate to add
* y (optional) `number` =undefined] - optional, coordinate to add
* z (optional) `number`

Returns:

* `Any` result

</div>
</details>

<details><summary>multi(ratio)</summary>
<div>
<br/>

Returns the result of multiplication of the current coordinate by the given number.

Parameters:

* ratio `number` ratio to multi

Returns:

* `Any` result

</div>
</details>

<details><summary>equals(c)</summary>
<div>
<br/>

Compare with another coordinate to see whether they are equal.

Parameters:

* c `Coordinate` coordinate to compare

</div>
</details>

<details><summary>add(x)</summary>
<div>
<br/>

Returns the result of addition of another coordinate.

Parameters:

* x `CoordinateLike` coordinate to add

Returns:

* `Any` result

</div>
</details>

<details><summary>add(x, y, z?)</summary>
<div>
<br/>

Returns the result of addition of another coordinate.

Parameters:

* x `number` coordinate to add
* y `number` coordinate to add
* z (optional) `number`

Returns:

* `Any` result

</div>
</details>

<details><summary>sub(x)</summary>
<div>
<br/>

Returns the result of subtraction of another coordinate.

Parameters:

* x `CoordinateLike` coordinate to add

Returns:

* `Any` result

</div>
</details>

<details><summary>sub(x, y, z?)</summary>
<div>
<br/>

Returns the result of subtraction of another coordinate.

Parameters:

* x `number` coordinate to add
* y `number` coordinate to add
* z (optional) `number` altitude to add

Returns:

* `Any` result

</div>
</details>
