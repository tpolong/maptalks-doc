<details><summary>onAdd()</summary>
<div>
<br/>

Callback when the layer is added to the map, it sets tileSystem from the tms option

</div>
</details>

<details><summary>forceReload()</summary>
<div>
<br/>

force Reload tilelayer.
Note that this method will clear all cached tiles and reload them. It shouldn't be called frequently for performance reason.

Returns:

* `Any` this

</div>
</details>

<details><summary>getTileSize(id?)</summary>
<div>
<br/>

Get tile size of the tile layer

Parameters:

* id (optional) `string`

Returns:

* `Size`

</div>
</details>

<details><summary>getTiles(z, parentLayer)</summary>
<div>
<br/>

Get the tile grids and parent tiles to render at the given zoom.

Parameters:

* z `number`
* parentLayer `Layer`

</div>
</details>

<details><summary>createTileNode()</summary>
<div>
<br/>

Create a tile node with its extent, url and parent-child relations

</div>
</details>

<details><summary>isParentTile(currentTileZoom, maxZoom, tile)</summary>
<div>
<br/>

Check whether a tile falls in the parent tile zoom range kept for stacking

Parameters:

* currentTileZoom `number`
* maxZoom `number`
* tile `TileNodeType`

</div>
</details>

<details><summary>getTileUrl(x, y, z)</summary>
<div>
<br/>

Get tile's url

Parameters:

* x `number`
* y `number`
* z `number`

Returns:

* `Any` url

</div>
</details>

<details><summary>clear()</summary>
<div>
<br/>

Clear the layer

Returns:

* `Any` this

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

Export the tile layer's profile json. <br/>
Layer's profile is a snapshot of the layer in JSON format. <br/>
It can be used to reproduce the instance by fromJSON method

Returns:

* `Any` layer's profile JSON

</div>
</details>

<details><summary>getSpatialReference()</summary>
<div>
<br/>

Get tilelayer's spatial reference.

Returns:

* `Any` spatial reference

</div>
</details>

<details><summary>getMinZoom()</summary>
<div>
<br/>

Get the layer min zoom, raised to the map min zoom when it is higher.

Returns:

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

Get the layer max zoom, capped by the map max zoom.

Returns:

* `number`

</div>
</details>

<details><summary>getMaxAvailableZoom()</summary>
<div>
<br/>

Get tileLayer's max available zoom, either options['maxAvailableZoom'] or spatialReference's maxZoom

Returns:

* `number`

</div>
</details>

<details><summary>getTileId(x, y, zoom, id)</summary>
<div>
<br/>

Build the unique tile id from the tile x, y, zoom and the layer id.

Parameters:

* x `number`
* y `number`
* zoom `number`
* id `string`

Returns:

* `string`

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

Get the events the layer listens to, such as spatial reference change

</div>
</details>

<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

Get layer's polygonOffset count

Returns:

* `number`

</div>
</details>

<details><summary>getPolygonOffset()</summary>
<div>
<br/>

Get layer's base polygon offset

Returns:

* `number`

</div>
</details>

<details><summary>setPolygonOffset(offset)</summary>
<div>
<br/>

Set layer's base polygon offset, called by GroupGLLayer

Parameters:

* offset `number` polygon offset

</div>
</details>

<details><summary>getRenderer()</summary>
<div>
<br/>

Get the renderer instance of the layer

</div>
</details>
