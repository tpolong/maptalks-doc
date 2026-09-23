<details><summary>showService(idx)</summary>
<div>
<br/>

Shows the 3DTiles service at the given index.

Parameters:

* idx `number`

Returns:

* `this`

</div>
</details>

<details><summary>hideService(idx)</summary>
<div>
<br/>

Hides the 3DTiles service at the given index.

Parameters:

* idx `number`

Returns:

* `this`

</div>
</details>

<details><summary>setToRedraw()</summary>
<div>
<br/>

Marks the layer to redraw so that it is rendered in the next frame.

</div>
</details>

<details><summary>addService(info)</summary>
<div>
<br/>

Adds a 3DTiles service and rebuilds the root tile nodes.

Parameters:

* info `Geo3DTilesService`

Returns:

* `this`

</div>
</details>

<details><summary>updateService(idx, info)</summary>
<div>
<br/>

Updates the visibility, offset and scale options of the service at the given index.

Parameters:

* idx `number`
* info `Geo3DTilesServiceOptions`

Returns:

* `this`

</div>
</details>

<details><summary>removeService(idx)</summary>
<div>
<br/>

Removes the 3DTiles service at the given index and requests a redraw.

Parameters:

* idx `number`

Returns:

* `this`

</div>
</details>

<details><summary>getTileUrl(url, rootNode)</summary>
<div>
<br/>

Gets the tile url with its domain placeholder replaced by a configured subdomain.

Parameters:

* url `string`
* rootNode `RootTileNode`

Returns:

* `string`

</div>
</details>

<details><summary>getExtent(index)</summary>
<div>
<br/>

Gets the extent of the service at index, or the combined extent of all services.

Parameters:

* index `number`

Returns:

* `maptalks.Extent | null`

</div>
</details>

<details><summary>boundingVolumeToExtent(node)</summary>
<div>
<br/>

Converts the bounding volume of a tile node into a geographic extent.

Parameters:

* node `RootTileNode`

Returns:

* `maptalks.Extent | null`

</div>
</details>

<details><summary>getRootTiles()</summary>
<div>
<br/>

Gets the array of root tile nodes of the layer services.

Returns:

* `RootTileNode[]`

</div>
</details>

<details><summary>getTiles()</summary>
<div>
<br/>

Gets the candidate tiles queried by LOD for the current view.

Returns:

* `QueriedTiles`

</div>
</details>

<details><summary>onTileLoad(tile, node)</summary>
<div>
<br/>

Attaches the child nodes of a loaded tile and records its baseUrl.

Parameters:

* tile `TileNode`
* node `TileNode`

</div>
</details>

<details><summary>onTilesetLoad(tileset, parent, url)</summary>
<div>
<br/>

Merges the root node and handles coordinate transforms when a tileset finishes loading.

Parameters:

* tileset `any`
* parent `TileNode`
* url `string`

</div>
</details>

<details><summary>identify(coordinate, options?)</summary>
<div>
<br/>

Identify the data on the given coordinate

Parameters:

* coordinate `[number, number] | maptalks.Coordinate`
* options (optional) `IdentifyOptions = {}` =null]  - options

Returns:

* `Any` data identified

</div>
</details>

<details><summary>identifyAtPoint(point, options?)</summary>
<div>
<br/>

Identify the data on the given container point

Parameters:

* point `maptalks.Point` point to identify
* options (optional) `IdentifyOptions = {}` =null]  - options

Returns:

* `Object[]` data identified

</div>
</details>

<details><summary>getCurrentBatchIDs()</summary>
<div>
<br/>

Gets all batch ids of the currently drawn tiles together with their service index.

Returns:

* `number[]`

</div>
</details>

<details><summary>highlight(highlights)</summary>
<div>
<br/>

Highlights the batches of the given ids, with optional color, opacity and bloom.

Parameters:

* highlights `HighlightItem | HighlightItem[]`

Returns:

* `this`

</div>
</details>

<details><summary>cancelHighlight(serviceIndex, ids)</summary>
<div>
<br/>

Cancels the batch highlights of the given ids in the given service.

Parameters:

* serviceIndex `number`
* ids `number[]`

Returns:

* `this`

</div>
</details>

<details><summary>cancelAllHighlight()</summary>
<div>
<br/>

Cancels all the highlights and restores the original color and opacity.

Returns:

* `this`

</div>
</details>

<details><summary>showOnly(items)</summary>
<div>
<br/>

Shows only the batches of the given ids and services, hiding the others.

Parameters:

* items `ShowOnlyItem[]`

Returns:

* `this`

</div>
</details>

<details><summary>cancelShowOnly(serviceIndex)</summary>
<div>
<br/>

Cancels the showOnly restriction and shows all the batches again.

Parameters:

* serviceIndex `number`

Returns:

* `this`

</div>
</details>

<details><summary>setServiceOpacity(idx, opacity)</summary>
<div>
<br/>

Sets the model opacity of the service at the given index and triggers a redraw.

Parameters:

* idx `number`
* opacity `number`

Returns:

* `this`

</div>
</details>

<details><summary>setServiceDebug(idx, debug)</summary>
<div>
<br/>

Turns debug rendering of the given service on or off to show tile bounding boxes.

Parameters:

* idx `number`
* debug `boolean`

Returns:

* `this`

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

Exports a snapshot of the layer configuration that fromJSON can rebuild.

Returns:

* `LayerJSONType`

</div>
</details>
