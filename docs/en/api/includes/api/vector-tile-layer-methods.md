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

Prepare options and verify the projection matches the map when the layer is added

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

Expire the tiles cached in the worker and force reload the layer

Returns:

* `this`

</div>
</details>

<details><summary>onWorkerReady()</summary>
<div>
<br/>

Hook called after worker data is ready, subclasses may override to handle the result

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Callback after the vector tile layer options change; forwards to the renderer and redraws

Parameters:

* conf `object` layer config

Returns:

* `Any` void

</div>
</details>

<details><summary>getWorkerOptions()</summary>
<div>
<br/>

Get worker options.

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

Query the terrain altitude of a point in a tile at the given resolution

</div>
</details>

<details><summary>queryTerrainTiles(tileInfo)</summary>
<div>
<br/>

Get the terrain tiles of a tile, returns null when there is no terrain

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

Get the rendered features asynchronously in pages to avoid blocking the UI

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

Highlight features by id or filter, queued until the layer is ready

Parameters:

* highlights `any`

</div>
</details>

<details><summary>cancelHighlight(ids)</summary>
<div>
<br/>

Cancel the highlight of the features with the given ids

Parameters:

* ids `number`

</div>
</details>

<details><summary>cancelAllHighlight()</summary>
<div>
<br/>

Cancel the highlight of all features in the layer

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

Whether the layer uses default rendering when no style is set

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

Get a deep copy of the current effective style, with background and style

</div>
</details>

<details><summary>identify(coordinate, options, options.tolerance, options.count)</summary>
<div>
<br/>

Identifies vector tile features at a coordinate, forwarding to the renderer

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

Identifies vector tile features at a container point, forwarding to the renderer

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

Hook fired when the layer is removed from the map, calls the super class cleanup

</div>
</details>

<details><summary>clearData()</summary>
<div>
<br/>

Clear the tile data cached in the renderer and the layer

</div>
</details>
