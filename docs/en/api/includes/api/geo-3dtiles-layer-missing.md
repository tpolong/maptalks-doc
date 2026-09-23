<details><summary>setToRedraw()</summary>
<div>
<br/>

Marks the layer to redraw so that it is rendered in the next frame.

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

<details><summary>getCurrentBatchIDs()</summary>
<div>
<br/>

Gets all batch ids of the currently drawn tiles together with their service index.

Returns:

* `number[]`

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

<details><summary>load()</summary>
<div>
<br/>

load the tile layer, can't be overrided by sub-classes

</div>
</details>

<details><summary>getId()</summary>
<div>
<br/>

Get the layer id

Returns:

* `Any` id

</div>
</details>

<details><summary>setId(id)</summary>
<div>
<br/>

Set a new id to the layer

Parameters:

* id `string` new layer id

Returns:

* `Any` this

Fires:

* `Layer#idchange`

</div>
</details>

<details><summary>addTo(map)</summary>
<div>
<br/>

Adds itself to a map.

Parameters:

* map `Map` map added to

Returns:

* `Any` this

</div>
</details>

<details><summary>setZIndex(zIndex)</summary>
<div>
<br/>

Sets the layer zIndex and re-sorts the layers on the map.

Parameters:

* zIndex `number` layer's z-index

Returns:

* `Any` this

</div>
</details>

<details><summary>getZIndex()</summary>
<div>
<br/>

Get the layer's z-index

Returns:

* `number`

</div>
</details>

<details><summary>getMinZoom()</summary>
<div>
<br/>

Get Layer's minZoom to display

Returns:

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

Get Layer's maxZoom to display

Returns:

* `number`

</div>
</details>

<details><summary>getOpacity()</summary>
<div>
<br/>

Get layer's opacity

Returns:

* `Number`

</div>
</details>

<details><summary>setOpacity(op)</summary>
<div>
<br/>

Set opacity to the layer

Parameters:

* op `number` layer's opacity

Returns:

* `Any` this

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

Get the map that the layer added to

Returns:

* `Map`

</div>
</details>

<details><summary>getProjection()</summary>
<div>
<br/>

Get projection of layer's map

Returns:

* `CommonProjectionType`

</div>
</details>

<details><summary>bringToFront()</summary>
<div>
<br/>

Brings the layer to the top of all the layers

Returns:

* `Any` this

</div>
</details>

<details><summary>bringToBack()</summary>
<div>
<br/>

Brings the layer under the bottom of all the layers

Returns:

* `Layer` this

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

Show the layer

Returns:

* `Any` this

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

Hide the layer

Returns:

* `Any` this

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

Whether the layer is visible now.

Returns:

* `boolean`

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

Remove itself from the map added to.

Returns:

* `Any` this

</div>
</details>

<details><summary>getMask()</summary>
<div>
<br/>

Get the mask geometry of the layer

Returns:

* `Geometry`

</div>
</details>

<details><summary>setMask(mask)</summary>
<div>
<br/>

Set a mask geometry on the layer, only the area in the mask will be displayed.

Parameters:

* mask `Polygon | MultiPolygon | Marker` mask geometry, can only be a Marker with vector symbol, a Polygon or a MultiPolygon

Returns:

* `Layer` this

</div>
</details>

<details><summary>removeMask()</summary>
<div>
<br/>

Removes the given mask from the layer, or all masks when no mask is passed.

Returns:

* `Layer` this

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

Lifecycle callback invoked after the layer finishes loading.

</div>
</details>

<details><summary>isLoaded()</summary>
<div>
<br/>

Whether the layer is loaded

Returns:

* `boolean`

</div>
</details>

<details><summary>getCollisionIndex()</summary>
<div>
<br/>

Get layer's collision index

Returns:

* `CollisionIndex`

</div>
</details>

<details><summary>clearCollisionIndex()</summary>
<div>
<br/>

Clear layer's collision index.
Will ignore if collisionScope is not layer

</div>
</details>

<details><summary>getRenderer()</summary>
<div>
<br/>

Gets the renderer instance of the layer.

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Callback invoked after options change, marking the layer to redraw and updating attribution.

Parameters:

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Lifecycle callback invoked after the layer is added to a map, it also updates the mask extent.

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

Lifecycle callback invoked after the layer renderer is created.

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

Lifecycle callback invoked after the renderer canvas is created.

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Lifecycle callback invoked when the layer is removed from the map.

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

Returns the renderer name used by the layer, gl or gpu for a WebGL or WebGPU map, dom otherwise.

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

Exports a snapshot of the layer configuration that fromJSON can rebuild.

Parameters:

* options (optional) `any`

Returns:

* `LayerJSONType`

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

Gets the child layer list, only group layers implement it.

Returns:

* `Layer[]`

</div>
</details>
