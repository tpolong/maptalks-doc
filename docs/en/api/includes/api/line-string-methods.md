<details><summary>getOutline()</summary>
<div>
<br/>

Returns a polygon outline built from the geometry extent, reusing Polygon's implementation.

Returns:

* `any`

</div>
</details>

<details><summary>setCoordinates(coordinates)</summary>
<div>
<br/>

Set new coordinates to the line string

Parameters:

* coordinates `Array<Coordinate> | Array<Array<number>>` new coordinates

Returns:

* `LineString` this

Fires:

* `LineString#shapechange`

</div>
</details>

<details><summary>getCoordinates()</summary>
<div>
<br/>

Get coordinates of the line string

Returns:

* `Coordinate[]|Number[][]` coordinates

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
