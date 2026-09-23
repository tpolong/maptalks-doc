<details><summary>closeTo(p, delta?)</summary>
<div>
<br/>

Compare with another point with a delta

Parameters:

* p `Point`
* delta (optional) `number`

Returns:

* `boolean`

</div>
</details>

<details><summary>unit()</summary>
<div>
<br/>

Calculate this point but as a unit vector from 0, 0, meaning
that the distance from the resulting point to the 0, 0
coordinate will be equal to 1 and the angle from the resulting
point to the 0, 0 coordinate will be the same as before.

Returns:

* `Any` unit vector point

</div>
</details>

<details><summary>perp()</summary>
<div>
<br/>

Compute a perpendicular point, where the new y coordinate
is the old x coordinate and the new x coordinate is the old y
coordinate multiplied by -1

Returns:

* `Any` perpendicular point

</div>
</details>

<details><summary>angleWith(b)</summary>
<div>
<br/>

Get the angle between this point and another point, in radians
from mapbox/point-geometry

Parameters:

* b `Point` the other point

Returns:

* `Any` angle

</div>
</details>

<details><summary>angleWithSep(x, y)</summary>
<div>
<br/>

Find the angle of the two vectors, solving the formula for
the cross product a x b = |a||b|sin(θ) for θ.
from mapbox/point-geometry

Parameters:

* x `number` the x-coordinate
* y `number` the y-coordinate

Returns:

* `Any` the angle in radians

</div>
</details>

<details><summary>rotate(a)</summary>
<div>
<br/>

Rotate this point around the 0, 0 origin by an angle a,
given in radians
from mapbox/point-geometry

Parameters:

* a `number` angle to rotate around, in radians

Returns:

* `Any` output point

</div>
</details>

<details><summary>abs()</summary>
<div>
<br/>

Return abs value of the point

Returns:

* `Any` abs point

</div>
</details>

<details><summary>round()</summary>
<div>
<br/>

Like math.round, rounding the point's xy.

Returns:

* `Any` rounded point

</div>
</details>

<details><summary>ceil()</summary>
<div>
<br/>

Like math.ceil, ceil the point's xy.

Returns:

* `Any` ceiled point

</div>
</details>

<details><summary>floor()</summary>
<div>
<br/>

Like math.floor, floor the point's xy.

Returns:

* `Any` floored point

</div>
</details>

<details><summary>copy()</summary>
<div>
<br/>

Returns a copy of the point

Returns:

* `Any` copy

</div>
</details>

<details><summary>toFixed(n)</summary>
<div>
<br/>

Formats point number using fixed-point notation.

Parameters:

* n `number` The number of digits to appear after the decimal point

Returns:

* `Any` fixed point

</div>
</details>

<details><summary>add(x, y?)</summary>
<div>
<br/>

Returns the result of addition of another coordinate.

Parameters:

* x `any` point to add
* y (optional) `number` point to add

Returns:

* `Any` result

</div>
</details>

<details><summary>sub(x, y?)</summary>
<div>
<br/>

Returns the result of subtraction of another point.

Parameters:

* x `any` point to add
* y (optional) `number` =undefined] - optional, point to add

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

Compare with another point to see whether they are equal.

Parameters:

* c `Point` point to compare

</div>
</details>

<details><summary>add(x)</summary>
<div>
<br/>

Returns the result of addition of another coordinate.

Parameters:

* x `PointLike` point to add

Returns:

* `Any` result

</div>
</details>

<details><summary>add(x, y)</summary>
<div>
<br/>

Returns the result of addition of another coordinate.

Parameters:

* x `number` point to add
* y `number` point to add

Returns:

* `Any` result

</div>
</details>

<details><summary>sub(x)</summary>
<div>
<br/>

Returns the result of subtraction of another point.

Parameters:

* x `PointLike` point to add

Returns:

* `Any` result

</div>
</details>

<details><summary>sub(x, y)</summary>
<div>
<br/>

Returns the result of subtraction of another point.

Parameters:

* x `number` point to add
* y `number` point to add

Returns:

* `Any` result

</div>
</details>
