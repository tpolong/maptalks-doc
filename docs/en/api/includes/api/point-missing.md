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

<details><summary>set(x, y, z?)</summary>
<div>
<br/>

Set point or coordinate's x, y value

Parameters:

* x `number` x value
* y `number` y value
* z (optional) `number` z value

</div>
</details>

<details><summary>distanceTo(point)</summary>
<div>
<br/>

Returns the distance between the current and the given point.

Parameters:

* point `Point | Coordinate` another point

Returns:

* `Any` distance

</div>
</details>

<details><summary>mag()</summary>
<div>
<br/>

Return the magnitude of this point: this is the Euclidean
distance from the 0, 0 coordinate to this point's x and y
coordinates.

Returns:

* `Any` magnitude

</div>
</details>

<details><summary>substract(x, y?)</summary>
<div>
<br/>

Alias for sub

Parameters:

* x `PositionLike | number`
* y (optional) `number`

Returns:

* `Any` result

</div>
</details>

<details><summary>div(n)</summary>
<div>
<br/>

Returns the result of division of the current point by the given number.

Parameters:

* n `number` number to div

Returns:

* `Any` result

</div>
</details>

<details><summary>isZero()</summary>
<div>
<br/>

Whether the coordinate/point is zero

Returns:

* `boolean`

</div>
</details>

<details><summary>toArray()</summary>
<div>
<br/>

Convert to a number array [x, y]

Returns:

* `Any` number array

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

Convert to a json object &#123;x : .., y : ..&#125;

Returns:

* `Any` json

</div>
</details>
