<details><summary>getLayers()</summary>
<div>
<br/>

Get children TileLayer

Returns:

* `TileLayer[]`

</div>
</details>

<details><summary>addLayer(tileLayers)</summary>
<div>
<br/>

add tilelayers

Parameters:

* tileLayers `TileLayer[] = []`

</div>
</details>

<details><summary>removeLayer(tileLayers)</summary>
<div>
<br/>

remove tilelayers

Parameters:

* tileLayers `TileLayer[] = []`

</div>
</details>

<details><summary>clearLayers()</summary>
<div>
<br/>

clear tilelayers

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

Export the GroupTileLayer's profile json. <br/>
Layer's profile is a snapshot of the layer in JSON format. <br/>
It can be used to reproduce the instance by fromJSON method

Returns:

* `Any` layer's profile JSON

</div>
</details>

<details><summary>getTileSize(id)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* id `number | string`

</div>
</details>

<details><summary>getTiles(z, parentLayer)</summary>
<div>
<br/>

Get tiles at zoom (or current zoom)

Parameters:

* z `number`
* parentLayer `any`

Returns:

* `Any` tiles

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>getLayer(id)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* id `string | number`

</div>
</details>

<details><summary>getChildLayer(id)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* id `string | number`

Returns:

* `TileLayer`

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `boolean`

</div>
</details>
