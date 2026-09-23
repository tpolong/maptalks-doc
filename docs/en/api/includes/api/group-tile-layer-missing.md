<details><summary>getTileSize(id)</summary>
<div>
<br/>

Get the tile size of the child layer with the given id, or the default size if missing.

Parameters:

* id `number | string`

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

<details><summary>isVisible()</summary>
<div>
<br/>

Returns true when the layer itself is visible and at least one child layer is visible.

Returns:

* `boolean`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Sorts and refreshes the child layers when the layer is added to the map.

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

Get the tile size of the child layer with the given id, or the default size if missing.

Parameters:

* id (optional) `string`

Returns:

* `Size`

</div>
</details>

<details><summary>createTileNode()</summary>
<div>
<br/>

Create a tile node holding id, url, projected extent, resolution and parent info.

</div>
</details>

<details><summary>isParentTile(currentTileZoom, maxZoom, tile)</summary>
<div>
<br/>

Whether the tile zoom lies inside the tile stacking range and below the max zoom.

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

Get the layer min zoom, raised by its own spatial reference when it differs from the map.

Returns:

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

Get the layer max zoom, capped by the map max zoom and its own spatial reference.

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

Get a tile's unique id built from x, y, zoom and the layer id.

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

Returns the map events this layer listens to, here the spatial reference change.

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

Get the layer's renderer instance, undefined before it is created.

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

Sets the layer zIndex, re-sorting the map's layers and updating its renderer.

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

Get the layer min zoom, raised by its own spatial reference when it differs from the map.

Returns:

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

Get the layer max zoom, capped by the map max zoom and its own spatial reference.

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

Returns true when the layer itself is visible and at least one child layer is visible.

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

Removes the layer mask so the whole layer is rendered again.

Returns:

* `Layer` this

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

Callback invoked when the layer finishes loading; empty by default for subclasses.

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

Get the layer's renderer instance, undefined before it is created.

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Callback on option changes: runs the options hook, redraws the renderer and updates attribution.

Parameters:

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Sorts and refreshes the child layers when the layer is added to the map.

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

Callback invoked after the layer renderer is created; empty by default for subclasses.

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

Callback invoked after the layer canvas is created; override it for custom logic.

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Removes every child layer and clears the layer map when the layer is removed from the map.

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

Get the renderer type in use: gl on WebGL maps, gpu on WebGPU maps, dom when set.

</div>
</details>

<details><summary>identify(_coordinate, _options)</summary>
<div>
<br/>

Identify geometries at a coordinate; an interface method implemented by subclasses.

Parameters:

* _coordinate `Coordinate`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>identifyAtPoint(_containerPoint, _options)</summary>
<div>
<br/>

Identify geometries at a container point; an interface method implemented by subclasses.

Parameters:

* _containerPoint `Point`
* _options `LayerIdentifyOptionsType`

</div>
</details>
