<details><summary>toGeometry(geoJSON, foreachFn?)</summary>
<div>
<br/>

Converts a GeoJSON object or string into maptalks geometries.

Parameters:

* geoJSON `any` GeoJSON objects or GeoJSON string
* foreachFn (optional) `(geo: Geometry) => void, filterFn?: (geo: Geometry) => boolean` =undefined] - callback function for each geometry

Returns:

* `Geometry|Geometry[]` a geometry array when input is a FeatureCollection

</div>
</details>

<details><summary>toGeometryAsync(geoJSON, foreachFn?)</summary>
<div>
<br/>

async Convert one or more GeoJSON objects to geometry

Parameters:

* geoJSON `any` GeoJSON objects or GeoJSON string
* foreachFn (optional) `(geo: Geometry) => void, countPerTime?: number, filterFn?: (geo: Geometry) => boolean` =undefined] - callback function for each geometry

Returns:

* `Promise`

</div>
</details>

<details><summary>fetch(url, countPerTime?)</summary>
<div>
<br/>

Requesting a large volume geojson file.Solve the problem of main thread blocking

Parameters:

* url `any` GeoJSON file path
* countPerTime (optional) `number = 2000` =2000] - Number of graphics converted per time

Returns:

* `Promise`

</div>
</details>

<details><summary>toGeometry(geoJSON, layerType)</summary>
<div>
<br/>

Converts a GeoJSON object or string into maptalks geometries.

Parameters:

* geoJSON `Any`
* layerType `Any`

</div>
</details>

<details><summary>isGeoJSON(geoJSON)</summary>
<div>
<br/>

Checks whether the given object is valid GeoJSON data.

Parameters:

* geoJSON `Any`

</div>
</details>
