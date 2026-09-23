<details><summary>getWorkerOptions()</summary>
<div>
<br/>

Get the options passed to the worker: data, extent, projection and simplify tolerance.

</div>
</details>

<details><summary>onWorkerReady(err?, params?)</summary>
<div>
<br/>

Callback invoked when the worker finishes processing data or reports an error.

Parameters:

* err (optional) `any`
* params (optional) `any`

</div>
</details>

<details><summary>getTileUrl(x, y, z)</summary>
<div>
<br/>

Build the tile url identifier from the layer id and the tile x, y, z.

Parameters:

* x `number`
* y `number`
* z `number`

</div>
</details>

<details><summary>setURLModifier(modifier)</summary>
<div>
<br/>

Set URL processing function.

Parameters:

* modifier `Function` URL processing function

Returns:

* `Any` this

</div>
</details>

<details><summary>getURLModifier()</summary>
<div>
<br/>

Get URL processing function.

Returns:

* `Any` url modifier

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Lifecycle callback when the layer is added, preparing projection and tile options.

</div>
</details>

<details><summary>setFeatureState(source, state)</summary>
<div>
<br/>

Set state of feature.

Parameters:

* source `{ id: string; layer: string }` layer source
* state `unknown` feature state

Returns:

* `Any` this

</div>
</details>

<details><summary>removeFeatureState(source, key)</summary>
<div>
<br/>

Remove state of feature.

Parameters:

* source `Any` layer source
* key `Any` object key

Returns:

* `Any` this

</div>
</details>

<details><summary>getFeatureState(source)</summary>
<div>
<br/>

Get state of feature.

Parameters:

* source `any` layer source

Returns:

* `Any` feature state

</div>
</details>

<details><summary>forceReload()</summary>
<div>
<br/>

Force reload the layer and clear the tiles cached in the worker.

Returns:

* `this`

</div>
</details>

<details><summary>onWorkerReady()</summary>
<div>
<br/>

Callback invoked when the worker finishes processing data or reports an error.

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Lifecycle callback on config update, forwarding the new config to the renderer.

Parameters:

* conf `object` layer config

Returns:

* `Any` void

</div>
</details>

<details><summary>getWorkerOptions()</summary>
<div>
<br/>

Get the options passed to the worker: data, extent, projection and simplify tolerance.

Returns:

* `Any` worker options

</div>
</details>

<details><summary>setStyle(style)</summary>
<div>
<br/>

Set the style of layer.

Parameters:

* style `any` vt style object

Returns:

* `Any` this

</div>
</details>

<details><summary>queryTilePointTerrain()</summary>
<div>
<br/>

Queries the terrain height at a point inside the tile, returning an empty pair without terrain.

</div>
</details>

<details><summary>queryTerrainTiles(tileInfo)</summary>
<div>
<br/>

Returns the terrain tiles intersecting the given tile info, or null when terrain is unavailable.

Parameters:

* tileInfo `any`

</div>
</details>

<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

Get the polygonOffsetCount of layer,used for GroupGLLayer global management of polygonOffset.

Returns:

* `Any` polygonOffsetCount

</div>
</details>

<details><summary>getPolygonOffset()</summary>
<div>
<br/>

Get the polygonOffset of layer,used for GroupGLLayer global management of polygonOffset

Returns:

* `Any` polygonOffset

</div>
</details>

<details><summary>setPolygonOffset(offset, total?)</summary>
<div>
<br/>

Set the polygonOffset of layer

Parameters:

* offset `number`
* total (optional) `number`

Returns:

* `Any` this

</div>
</details>

<details><summary>getTotalPolygonOffset()</summary>
<div>
<br/>

Get the total polygonOffset of layer

Returns:

* `Any` total polygonOffset

</div>
</details>

<details><summary>getCurrentRenderedFeatures()</summary>
<div>
<br/>

Get rendered features of layer

Returns:

* `Any` rendered features

</div>
</details>

<details><summary>getRenderedFeatures()</summary>
<div>
<br/>

Get rendered features of layer

Returns:

* `Any` rendered features

</div>
</details>

<details><summary>getRenderedFeaturesAsync(options)</summary>
<div>
<br/>

Get rendered features asynchronously in batches to avoid blocking the UI.

Parameters:

* options `AsyncFeatureQueryOptions = {}`

</div>
</details>

<details><summary>outlineAll()</summary>
<div>
<br/>

Outline the layer

Returns:

* `Any` this

</div>
</details>

<details><summary>outline(idx, featureIds)</summary>
<div>
<br/>

Outline features

Parameters:

* idx `number` style index
* featureIds `number[]` feature ids

Returns:

* `Any` this

</div>
</details>

<details><summary>outlineBatch(idx)</summary>
<div>
<br/>

Outline features

Parameters:

* idx `number` style index

Returns:

* `Any` this

</div>
</details>

<details><summary>outlineFeatures(featureIds)</summary>
<div>
<br/>

Outline features

Parameters:

* featureIds `number[]` feature ids

Returns:

* `Any` this

</div>
</details>

<details><summary>cancelOutline()</summary>
<div>
<br/>

Cancel outline

Returns:

* `Any` this

</div>
</details>

<details><summary>highlight(highlights)</summary>
<div>
<br/>

Highlight the given features, selected by id or by filter.

Parameters:

* highlights `any`

</div>
</details>

<details><summary>cancelHighlight(ids)</summary>
<div>
<br/>

Cancels the highlight of the features with the given ids.

Parameters:

* ids `number`

</div>
</details>

<details><summary>cancelAllHighlight()</summary>
<div>
<br/>

Cancels the highlight of all the features in the layer.

</div>
</details>

<details><summary>updateSceneConfig(idx, sceneConfig)</summary>
<div>
<br/>

Update sceneConfig

Parameters:

* idx `string | number` style name or index
* sceneConfig `VtSceneConfig` properties of sceneConfig

Returns:

* `Any` this

</div>
</details>

<details><summary>updateFeatureSceneConfig(idx, styleIdx, sceneConfig)</summary>
<div>
<br/>

Update feature sceneConfig

Parameters:

* idx `Any` feature index
* styleIdx `Any` style index
* sceneConfig `Any` properties of sceneConfig

Returns:

* `Any` this

</div>
</details>

<details><summary>updateDataConfig(idx, dataConfig)</summary>
<div>
<br/>

Update dataConfig

Parameters:

* idx `number | string` style name or index
* dataConfig `VtDataConfig` properties of dataConfig

Returns:

* `Any` this

</div>
</details>

<details><summary>updateFeatureDataConfig(idx, styleIdx, dataConfig)</summary>
<div>
<br/>

Update feature dataConfig

Parameters:

* idx `Any` feature index
* styleIdx `Any` style index
* dataConfig `Any` properties of dataConfig

Returns:

* `Any` this

</div>
</details>

<details><summary>updateSymbol(idx, symbol)</summary>
<div>
<br/>

Update symbol

Parameters:

* idx `number | string` style name or index
* symbol `VtSymbol` properties of symbol

Returns:

* `Any` this

</div>
</details>

<details><summary>updateFeatureSymbol(idx, feaStyleIdx, symbol)</summary>
<div>
<br/>

Update symbol

Parameters:

* idx `number` style name or index
* feaStyleIdx `number`
* symbol `VtSymbol` properties of symbol

Returns:

* `Any` this

</div>
</details>

<details><summary>isDefaultRender()</summary>
<div>
<br/>

Whether the layer uses default rendering: no style set and defaultRendering on.

</div>
</details>

<details><summary>validateStyle()</summary>
<div>
<br/>

Validate style

Returns:

* `Any` void

</div>
</details>

<details><summary>getStyle()</summary>
<div>
<br/>

Get style

Returns:

* `Any` style

</div>
</details>

<details><summary>getGroundConfig()</summary>
<div>
<br/>

Get Background config of the layer

Returns:

* `Any` backgroundConfig

</div>
</details>

<details><summary>getComputedStyle()</summary>
<div>
<br/>

Get a copy of the computed style, including background, style and featureStyle.

</div>
</details>

<details><summary>identify(coordinate, options, options.tolerance, options.count)</summary>
<div>
<br/>

Identify features at the given coordinate.

Parameters:

* coordinate `Any` coordinate to identify
* options `Any` =null - options
* options.tolerance `Any` =0 - identify tolerance in pixel
* options.count `Any` =null - result count

Returns:

* `Any` data identified

</div>
</details>

<details><summary>identifyAtPoint(point, options, options.tolerance, options.count)</summary>
<div>
<br/>

Identify features at the given container point with tolerance and count options.

Parameters:

* point `Any` point to identify
* options `Any` =null - options
* options.tolerance `Any` =0 - identify tolerance in pixel
* options.count `Any` =0 - result count

Returns:

* `Any` data identified

</div>
</details>

<details><summary>getDataSchema(z)</summary>
<div>
<br/>

Return vector tile data's schema, including layers, properties, data types

Parameters:

* z `number` =undefined - tile's zoom, optional

Returns:

* `Any` data schema

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Lifecycle callback invoked when the layer is removed from the map, called internally.

</div>
</details>

<details><summary>clearData()</summary>
<div>
<br/>

Clears the tile data cached in the renderer and the layer.

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Lifecycle callback when the layer is added, preparing projection and tile options.

</div>
</details>

<details><summary>forceReload()</summary>
<div>
<br/>

Force reload the layer and clear the tiles cached in the worker.

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

Creates a tile node containing the tile extent, url and parent-child relations.

</div>
</details>

<details><summary>isParentTile(currentTileZoom, maxZoom, tile)</summary>
<div>
<br/>

Whether the tile falls in the zoom range kept for parent tile stacking.

Parameters:

* currentTileZoom `number`
* maxZoom `number`
* tile `TileNodeType`

</div>
</details>

<details><summary>getTileUrl(x, y, z)</summary>
<div>
<br/>

Build the tile url identifier from the layer id and the tile x, y, z.

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

Exports the layer's profile JSON, which can rebuild the instance through fromJSON.

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

Get the layer min zoom, the larger of its option and the spatial reference limit.

Returns:

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

Get the layer max zoom, the smaller of its option and the spatial reference limit.

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

Build the unique tile id from the layer id and the tile x, y and zoom.

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

Get the layer event map, which resets tile config when spatial reference changes.

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

Get the layer renderer instance, or nothing when it is not created yet.

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

Get the layer min zoom, the larger of its option and the spatial reference limit.

Returns:

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

Get the layer max zoom, the smaller of its option and the spatial reference limit.

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

Removes the layer mask and requests a redraw.

Returns:

* `Layer` this

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

Lifecycle callback when layer loading ends, meant to be overridden by subclasses.

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

Get the layer renderer instance, or nothing when it is not created yet.

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Lifecycle callback on config update, forwarding the new config to the renderer.

Parameters:

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Lifecycle callback when the layer is added, preparing projection and tile options.

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

Lifecycle callback invoked after the layer's renderer is created, called internally.

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

Lifecycle callback after the layer canvas is created, meant for subclasses.

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Lifecycle callback invoked when the layer is removed from the map, called internally.

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

Get the renderer type in use: gl on a WebGL map, gpu on a WebGPU map.

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

Exports the layer's profile JSON, which can rebuild the instance through fromJSON.

Parameters:

* options (optional) `any`

Returns:

* `LayerJSONType`

</div>
</details>

<details><summary>identify(_coordinate, _options)</summary>
<div>
<br/>

Identify features at the given coordinate.

Parameters:

* _coordinate `Coordinate`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>identifyAtPoint(_containerPoint, _options)</summary>
<div>
<br/>

Identify features at the given container point with tolerance and count options.

Parameters:

* _containerPoint `Point`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

Get child layers; declared optional on the base class and implemented by subclasses.

Returns:

* `Layer[]`

</div>
</details>
