<details><summary>is(code)</summary>
<div>
<br/>

Returns whether the projection code or one of its aliases matches the given code.

Parameters:

* code `string`

</div>
</details>

<details><summary>projectCoords(coordinates, antiMeridian?)</summary>
<div>
<br/>

Project a group of geographical coordinates to projected coordinates.

Parameters:

* coordinates `Coordinate[] | Coordinate[][] | Coordinate[][][]` coordinates to project
* antiMeridian (optional) `boolean`

Returns:

* `Coordinate[] | Coordinate[][] | Coordinate[][][]`

</div>
</details>

<details><summary>unprojectCoords(projCoords)</summary>
<div>
<br/>

Unproject a group of projected coordinates to geographical coordinates.

Parameters:

* projCoords `Coordinate[] | Coordinate[][] | Coordinate[][][]` projected coordinates to unproject

Returns:

* `Coordinate[] | Coordinate[][] | Coordinate[][][]`

</div>
</details>

<details><summary>isSphere()</summary>
<div>
<br/>

Whether the projection is spherical

Returns:

* `boolean`

</div>
</details>

<details><summary>isOutSphere(pcoord)</summary>
<div>
<br/>

If the projected coord out of the sphere

Parameters:

* pcoord `Coordinate` projected coord

Returns:

* `Boolean`

</div>
</details>

<details><summary>wrapCoord(pcoord)</summary>
<div>
<br/>

Wrap the projected coord in the sphere

Parameters:

* pcoord `Coordinate` projected coord

Returns:

* `Any` wrapped projected coord

</div>
</details>

<details><summary>getCircum()</summary>
<div>
<br/>

Returns the sphere circumference; IDENTITY is not spherical, so it returns undefined.

Returns:

* `Record<string, number>`

</div>
</details>

<details><summary>getSphereExtent()</summary>
<div>
<br/>

Returns the sphere extent; IDENTITY is not spherical, so it returns undefined.

Returns:

* `Extent`

</div>
</details>
