<details><summary>measure()</summary>
<div>
<br/>

the code of the measurer

</div>
</details>

<details><summary>measureLenBetween(c1, c2, ignoreAltitude = false)</summary>
<div>
<br/>

Measure the length between 2 coordinates.

Parameters:

* c1 `Coordinate | CoordinateJson`
* c2 `Coordinate | CoordinateJson`
* ignoreAltitude = false `Any`

Returns:

* `number`

</div>
</details>

<details><summary>measureArea(coordinates)</summary>
<div>
<br/>

Measure the area closed by the given coordinates.

Parameters:

* coordinates `(Coordinate | CoordinateJson)[]`

Returns:

* `number`

</div>
</details>

<details><summary>locate(c, xDist, yDist, out?)</summary>
<div>
<br/>

Locate a coordinate from the given source coordinate with a x-axis distance and a y-axis distance.

Parameters:

* c `Coordinate | CoordinateJson`
* xDist `number`
* yDist `number`
* out (optional) `Coordinate`

</div>
</details>

<details><summary>rotate(c, pivot, angle)</summary>
<div>
<br/>

Rotate a coordinate of given angle around pivot

Parameters:

* c `Coordinate | CoordinateJson` source coordinate
* pivot `Coordinate` pivot
* angle `number` angle in degree

</div>
</details>
