<details><summary>getOutline()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `null | Polygon`

</div>
</details>

<details><summary>setCoordinates(coordinates)</summary>
<div>
<br/>

Set coordinates to the polygon

Parameters:

* coordinates `PolygonCoordinatesType | LineStringCoordinatesType` new coordinates

Returns:

* `Polygon` this

Fires:

* `Polygon#shapechange`

</div>
</details>

<details><summary>getCoordinates()</summary>
<div>
<br/>

Gets polygons's coordinates

Returns:

* `Coordinate[][]`

</div>
</details>

<details><summary>getCenterInExtent(extent)</summary>
<div>
<br/>

Get center of linestring's intersection with give extent

Parameters:

* extent `Extent`

Returns:

* `Coordinate` center, null if line doesn't intersect with extent

</div>
</details>

<details><summary>getShell()</summary>
<div>
<br/>

Gets shell's coordinates of the polygon

Returns:

* `Coordinate[]`

</div>
</details>

<details><summary>getHoles()</summary>
<div>
<br/>

Gets holes' coordinates of the polygon if it has.

Returns:

* `Coordinate[][]`

</div>
</details>

<details><summary>hasHoles()</summary>
<div>
<br/>

Whether the polygon has any holes inside.

Returns:

* `Boolean`

</div>
</details>
