<details><summary>getWorkerOptions()</summary>
<div>
<br/>

Get the options passed to the worker: data, extent, projection and simplify tolerance.

</div>
</details>

<details><summary>setData(data)</summary>
<div>
<br/>

Sets the layer data to a GeoJSON object or a data url and refreshes the worker.

Parameters:

* data `any`

</div>
</details>

<details><summary>getExtent()</summary>
<div>
<br/>

Returns the extent parsed from the loaded data.

</div>
</details>

<details><summary>onWorkerReady(err?, params?)</summary>
<div>
<br/>

Callback invoked when the worker finishes processing data or reports an error.

Parameters:

* err (optional) `any`
* params (optional) `any`

</div>
</details>

<details><summary>getData(callback?)</summary>
<div>
<br/>

Returns the geojson data, or fetches it by url and passes it to the callback when not ready.

Parameters:

* callback (optional) `(geojson: any) => void`

</div>
</details>

<details><summary>getTileUrl(x, y, z)</summary>
<div>
<br/>

Build the tile url identifier from the layer id and the tile x, y, z.

Parameters:

* x `number`
* y `number`
* z `number`

</div>
</details>

<details><summary>getFeature(id)</summary>
<div>
<br/>

Returns the feature with the given id, or null when the id map is not ready.

Parameters:

* id `number | string`

</div>
</details>

<details><summary>getGeometryById(id)</summary>
<div>
<br/>

Returns the feature with the given id, an alias of getFeature.

Parameters:

* id `number`

</div>
</details>
