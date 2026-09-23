<details><summary>getRadius()</summary>
<div>
<br/>

Get radius of the circle

Returns:

* `Number`

</div>
</details>

<details><summary>setRadius(radius)</summary>
<div>
<br/>

Set a new radius to the circle

Parameters:

* radius `number` new radius

Returns:

* `Circle` this

Fires:

* `Circle#shapechange`

</div>
</details>

<details><summary>getShell()</summary>
<div>
<br/>

Gets the shell of the circle as a polygon, number of the shell points is decided by options.numberOfShellPoints

Returns:

* `Coordinate[]` - shell coordinates

</div>
</details>

<details><summary>getHoles()</summary>
<div>
<br/>

Circle won't have any holes, always returns null

Returns:

* `Object[]` an empty array

</div>
</details>

<details><summary>animateShow()</summary>
<div>
<br/>

Circle does not animate, it calls show to display the geometry directly.

Returns:

* `any`

</div>
</details>
