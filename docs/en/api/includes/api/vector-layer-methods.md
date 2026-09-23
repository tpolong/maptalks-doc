<details><summary>onConfig(conf)</summary>
<div>
<br/>

Clear the geometry altitude cache and redraw as needed when config changes

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

Gets the layer altitude value, 0 when it is not configured

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

Get the canvas renderer used by the layer

Returns:

* `VectorLayerCanvasRenderer`

</div>
</details>
