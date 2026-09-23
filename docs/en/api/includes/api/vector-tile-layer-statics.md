<details><summary>loadFrom(url, fetchOptions)</summary>
<div>
<br/>

Fetch layer JSON from a url and create a VectorTileLayer instance

Parameters:

* url `string`
* fetchOptions `Record<string, any>`

</div>
</details>

<details><summary>fromJSON(layerJSON)</summary>
<div>
<br/>

Create a VectorTileLayer from layer JSON, return null when the type mismatches

Parameters:

* layerJSON `object`

</div>
</details>

<details><summary>registerPlugin(Plugin)</summary>
<div>
<br/>

Register a VectorTileLayer plugin into the plugin map keyed by its type

Parameters:

* Plugin `{ type: string;[key: string]: unknown }`

</div>
</details>

<details><summary>getPlugins()</summary>
<div>
<br/>

Get all VectorTileLayer plugins registered by their type

</div>
</details>

<details><summary>compressStyleJSON(json)</summary>
<div>
<br/>

Compress a style array into plugins and styles, returning others as is

Parameters:

* json `object | object[]`

</div>
</details>
