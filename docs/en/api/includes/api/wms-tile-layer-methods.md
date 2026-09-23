<details><summary>onAdd()</summary>
<div>
<br/>

Callback when the layer is added, initializing wms params with device pixel ratio and crs key

</div>
</details>

<details><summary>getTileUrl(x, y, z)</summary>
<div>
<br/>

Get the WMS request url of a tile by appending wms params and bbox.

Parameters:

* x `number`
* y `number`
* z `number`

Returns:

* `string`

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

Export the WMSTileLayer's json. <br/>
It can be used to reproduce the instance by fromJSON method

Returns:

* `Any` layer's JSON

</div>
</details>
