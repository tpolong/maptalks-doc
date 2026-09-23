<details><summary>measure()</summary>
<div>
<br/>

Identifies the baidu measurer, whose registered name is BAIDU.

</div>
</details>

<details><summary>sphere(6370996.81)</summary>
<div>
<br/>

Defines the sphere of radius 6370996.81 used by the baidu measurer.

Parameters:

* 6370996.81 `Any`

</div>
</details>

<details><summary>measureLenBetween(c1, c2)</summary>
<div>
<br/>

Measure the length between 2 coordinates.

Parameters:

* c1 `CoordsLike`
* c2 `CoordsLike`

Returns:

* `number`

</div>
</details>

<details><summary>measureArea(coordinates)</summary>
<div>
<br/>

Measure the area closed by the given coordinates.

Parameters:

* coordinates `CoordsLike[]`

Returns:

* `number`

</div>
</details>

<details><summary>locate(c, xDist, yDist, out?)</summary>
<div>
<br/>

Locate a coordinate from the given source coordinate with a x-axis distance and a y-axis distance.

Parameters:

* c `CoordsLike` source coordinate
* xDist `number` x-axis distance
* yDist `number` y-axis distance
* out (optional) `Coordinate` out

</div>
</details>

<details><summary>rotate(c, pivot, angle)</summary>
<div>
<br/>

Rotate a coordinate of given angle around pivot

Parameters:

* c `CoordsLike` source coordinate
* pivot `Coordinate` pivot
* angle `number` angle in degree

</div>
</details>
