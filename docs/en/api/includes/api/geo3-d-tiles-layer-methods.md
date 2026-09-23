<details><summary>showService(idx)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* idx `number`

Returns:

* `this`

</div>
</details>

<details><summary>hideService(idx)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* idx `number`

Returns:

* `this`

</div>
</details>

<details><summary>setToRedraw()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>addService(info)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* info `Geo3DTilesService`

Returns:

* `this`

</div>
</details>

<details><summary>updateService(idx, info)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

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

No prose description in source; parameters and return type come from the type signature.

Parameters:

* idx `number`

Returns:

* `this`

</div>
</details>

<details><summary>getTileUrl(url, rootNode)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

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

No prose description in source; parameters and return type come from the type signature.

Parameters:

* index `number`

Returns:

* `maptalks.Extent | null`

</div>
</details>

<details><summary>boundingVolumeToExtent(node)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* node `RootTileNode`

Returns:

* `maptalks.Extent | null`

</div>
</details>

<details><summary>getRootTiles()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `RootTileNode[]`

</div>
</details>

<details><summary>getTiles()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `QueriedTiles`

</div>
</details>

<details><summary>onTileLoad(tile, node)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* tile `TileNode`
* node `TileNode`

</div>
</details>

<details><summary>onTilesetLoad(tileset, parent, url)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

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

No prose description in source; parameters and return type come from the type signature.

Returns:

* `number[]`

</div>
</details>

<details><summary>highlight(highlights)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* highlights `HighlightItem | HighlightItem[]`

Returns:

* `this`

</div>
</details>

<details><summary>cancelHighlight(serviceIndex, ids)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

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

No prose description in source; parameters and return type come from the type signature.

Returns:

* `this`

</div>
</details>

<details><summary>showOnly(items)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* items `ShowOnlyItem[]`

Returns:

* `this`

</div>
</details>

<details><summary>cancelShowOnly(serviceIndex)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* serviceIndex `number`

Returns:

* `this`

</div>
</details>

<details><summary>setServiceOpacity(idx, opacity)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

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

No prose description in source; parameters and return type come from the type signature.

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

Export the Geo3DTilesLayer's profile json. <br/>
Layer's profile is a snapshot of the layer in JSON format. <br/>
It can be used to reproduce the instance by fromJSON method

Returns:

* `LayerJSONType`

</div>
</details>
