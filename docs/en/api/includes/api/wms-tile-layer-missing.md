<details><summary>onAdd()</summary>
<div>
<br/>

Callback when the layer is added, initializing wms params with device pixel ratio and crs key

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

<details><summary>onAdd()</summary>
<div>
<br/>

Callback when the layer is added, initializing wms params with device pixel ratio and crs key

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

Get the tile and parent tile grids needed for rendering at the given zoom

Parameters:

* z `number`
* parentLayer `Layer`

</div>
</details>

<details><summary>createTileNode()</summary>
<div>
<br/>

Create a tile node with its extent, url and parent child relations

</div>
</details>

<details><summary>isParentTile(currentTileZoom, maxZoom, tile)</summary>
<div>
<br/>

Check whether a tile zoom falls in the parent tile levels that should be kept

Parameters:

* currentTileZoom `number`
* maxZoom `number`
* tile `TileNodeType`

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

Export the WMSTileLayer's json. <br/>
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

Get the layer's min zoom, the greater of minZoom and its spatial reference's lower limit

Returns:

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

Get the layer's max display zoom, capped by its spatial reference

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

Generate the unique tile id from tile coordinates and zoom

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

Get the layer's tile canvas renderer instance

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

Sets the layer's z-index, resorting the layer stack and redrawing the renderer.

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

Get the layer's min zoom, the greater of minZoom and its spatial reference's lower limit

Returns:

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

Get the layer's max display zoom, capped by its spatial reference

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

Removes the layer's mask and redraws the layer when it is on a map.

Returns:

* `Layer` this

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

Hook called after the layer finishes loading, empty by default

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

Get the layer's tile canvas renderer instance

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Callback after options change, triggering a redraw and attribution update

Parameters:

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Callback when the layer is added, initializing wms params with device pixel ratio and crs key

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

Callback after the layer renderer is created, overridable by subclasses

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

Callback after the layer canvas is created, overridable by subclasses

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Callback when the layer is removed from the map, overridable by subclasses

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

Return the layer's renderer name according to the map's renderer type

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

Export the WMSTileLayer's json. <br/>
It can be used to reproduce the instance by fromJSON method

Parameters:

* options (optional) `any`

Returns:

* `LayerJSONType`

</div>
</details>

<details><summary>identify(_coordinate, _options)</summary>
<div>
<br/>

Identify geometries on the layer by coordinate, implemented by subclasses

Parameters:

* _coordinate `Coordinate`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>identifyAtPoint(_containerPoint, _options)</summary>
<div>
<br/>

Identify geometries by container point, implemented by subclasses

Parameters:

* _containerPoint `Point`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

Get the child layers, implemented only by group type layers

Returns:

* `Layer[]`

</div>
</details>
