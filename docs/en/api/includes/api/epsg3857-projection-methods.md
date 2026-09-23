<details><summary>code()</summary>
<div>
<br/>

"EPSG:3857", Code of the projection

</div>
</details>

<details><summary>rad()</summary>
<div>
<br/>

The conversion factor from degrees to radians, PI divided by 180.

</div>
</details>

<details><summary>metersPerDegree()</summary>
<div>
<br/>

Meters per degree of longitude and latitude, using the equatorial radius 6378137.

</div>
</details>

<details><summary>maxLatitude()</summary>
<div>
<br/>

The maximum latitude supported by the Mercator projection, about 85.051.

</div>
</details>

<details><summary>project(lnglat, out?)</summary>
<div>
<br/>

Projects a lnglat coordinate to EPSG:3857 plane coordinates, clamping the latitude.

Parameters:

* lnglat `Coordinate`
* out (optional) `Coordinate`

</div>
</details>

<details><summary>unproject(pLnglat, out?)</summary>
<div>
<br/>

Unprojects EPSG:3857 plane coordinates back to a lnglat coordinate.

Parameters:

* pLnglat `Coordinate`
* out (optional) `Coordinate`

</div>
</details>
