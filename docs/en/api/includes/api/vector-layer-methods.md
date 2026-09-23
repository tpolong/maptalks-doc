<details><summary>onConfig(conf)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* conf `Record<string, any>`

</div>
</details>

<details><summary>identify(coordinate, options?)</summary>
<div>
<br/>

Identify the geometries on the given coordinate

Parameters:

* coordinate `Coordinate` coordinate to identify
* options (optional) `LayerIdentifyOptionsType` =null]  - options

Returns:

* `Geometry[]` geometries identified

</div>
</details>

<details><summary>identifyAtPoint(point, options?)</summary>
<div>
<br/>

Identify the geometries on the given container point

Parameters:

* point `Point` container point to identify
* options (optional) `LayerIdentifyOptionsType` =null]  - options

Returns:

* `Geometry[]` geometries identified

</div>
</details>

<details><summary>getAltitude()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

Export the VectorLayer's JSON. <br/>

Parameters:

* options (optional) `VectorLayerToJSONOptions` =null] - export options

Returns:

* `Any` layer's JSON

</div>
</details>

<details><summary>getRenderer()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `VectorLayerCanvasRenderer`

</div>
</details>
