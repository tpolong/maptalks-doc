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

Get the tile size of the child layer with the given id, or the default size if missing.

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

Sorts and refreshes the child layers when the layer is added to the map.

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Removes every child layer and clears the layer map when the layer is removed from the map.

</div>
</details>

<details><summary>getLayer(id)</summary>
<div>
<br/>

Gets a child layer in the group by its id, equivalent to getChildLayer.

Parameters:

* id `string | number`

</div>
</details>

<details><summary>getChildLayer(id)</summary>
<div>
<br/>

Gets the child layer with the given id, searching nested group layers, null when not found.

Parameters:

* id `string | number`

Returns:

* `TileLayer`

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

Returns true when the layer itself is visible and at least one child layer is visible.

Returns:

* `boolean`

</div>
</details>
