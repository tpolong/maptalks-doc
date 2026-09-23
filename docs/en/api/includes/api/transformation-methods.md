<details><summary>transform(coordinates, scale, out?)</summary>
<div>
<br/>

Transform a projected coordinate to a 2d point. <br/>
Parameter scale in transform/untransform method is used to scale the result 2d points on map's different zoom levels.

Parameters:

* coordinates `Coordinate` projected coordinate to transform
* scale `number` transform scale
* out (optional) `Point` tmp point

Returns:

* `Any` 2d point.

</div>
</details>

<details><summary>untransform(point, scale, out?)</summary>
<div>
<br/>

Transform a 2d point to a projected coordinate.

Parameters:

* point `Point` 2d point
* scale `number` transform scale
* out (optional) `Coordinate` tmp coordinates

Returns:

* `Any` projected coordinate.

</div>
</details>
