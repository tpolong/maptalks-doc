<details><summary>sortLayersByZIndex()</summary>
<div>
<br/>

Reorder the group's child layers by ascending zIndex.

</div>
</details>

<details><summary>setSceneConfig(sceneConfig)</summary>
<div>
<br/>

Sets the scene config and tells the renderer to update the scene immediately.

Parameters:

* sceneConfig `GroupGLLayerSceneConfig`

Returns:

* `this`

</div>
</details>

<details><summary>getSceneConfig()</summary>
<div>
<br/>

Get a deep copy of the scene config.

Returns:

* `GroupGLLayerSceneConfig`

</div>
</details>

<details><summary>getGroundConfig()</summary>
<div>
<br/>

Get the ground config in the scene config.

Returns:

* `SceneGround`

</div>
</details>

<details><summary>getWeatherConfig()</summary>
<div>
<br/>

Get the weather config in the scene config.

Returns:

* `SceneWeather`

</div>
</details>

<details><summary>getScanEffectConfig()</summary>
<div>
<br/>

Get the scanEffect config in postProcess of the scene config.

Returns:

* `ScanEffect`

</div>
</details>

<details><summary>addLayer(layer, index?)</summary>
<div>
<br/>

Add a new Layer.

Parameters:

* layer `maptalks.Layer` new layer
* index (optional) `number` index to insert

Returns:

* `GroupGLLayer` this

</div>
</details>

<details><summary>removeLayer(layer)</summary>
<div>
<br/>

Removes a child layer from the group and unbinds its event listeners.

Parameters:

* layer `maptalks.Layer`

Returns:

* `this`

</div>
</details>

<details><summary>clearLayers()</summary>
<div>
<br/>

Remove all child layers from the group.

Returns:

* `this`

</div>
</details>

<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

Get the total polygon offset count accumulated by the child layers.

Returns:

* `number`

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

Get children TileLayer

Returns:

* `TileLayer[]`

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

Export the GroupGLLayer's profile json. <br/>
Layer's profile is a snapshot of the layer in JSON format. <br/>
It can be used to reproduce the instance by fromJSON method

Returns:

* `Any` layer's profile JSON

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

Load end callback that prepares child layers and inits the terrain layer.

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Unloads the child layers and analysis objects and cleans up the terrain layer when removed from the map.

</div>
</details>

<details><summary>getChildLayer(id)</summary>
<div>
<br/>

Get the child layer in the group by its id, or null when not found.

Parameters:

* id `string`

Returns:

* `maptalks.Layer | null`

</div>
</details>

<details><summary>getLayer(id)</summary>
<div>
<br/>

Get a child layer by id, the same as getChildLayer.

Parameters:

* id `string`

Returns:

* `maptalks.Layer | null`

</div>
</details>

<details><summary>addAnalysis(analysis)</summary>
<div>
<br/>

Add an analysis object to the layer and redraw it.

Parameters:

* analysis `Analysis`

</div>
</details>

<details><summary>removeAnalysis(analysis)</summary>
<div>
<br/>

Removes the given analysis object from the layer and stops its analysis.

Parameters:

* analysis `Analysis`

</div>
</details>

<details><summary>clearAnalysis()</summary>
<div>
<br/>

Remove all analysis objects from the layer and clear the list.

</div>
</details>

<details><summary>identify(coordinate, options)</summary>
<div>
<br/>

Identify the geometries on the given coordinate

Parameters:

* coordinate `maptalks.Coordinate` coordinate to identify
* options `object` options

Returns:

* `any[]`

</div>
</details>

<details><summary>identifyAtPoint(point, options)</summary>
<div>
<br/>

Identify the data at the given point

Parameters:

* point `maptalks.Point` container point to identify
* options `any = {}` the identify options

Returns:

* `any[]`

</div>
</details>

<details><summary>getTerrain()</summary>
<div>
<br/>

Get the current terrain config, undefined when not set.

Returns:

* `TerrainOptions | undefined | null`

</div>
</details>

<details><summary>setTerrain(info)</summary>
<div>
<br/>

Sets the terrain options, recreating the terrain layer and updating the center altitude.

Parameters:

* info `TerrainOptions | null`

</div>
</details>

<details><summary>removeTerrain()</summary>
<div>
<br/>

Removes the terrain, equivalent to calling setTerrain with null.

</div>
</details>

<details><summary>updateTerrainMaterial(mat)</summary>
<div>
<br/>

Merge the given terrain material options and refresh the terrain layer.

Parameters:

* mat `object`

</div>
</details>

<details><summary>queryTerrain(coord, out)</summary>
<div>
<br/>

Query the terrain altitude at a coordinate, returning the altitude and whether a same level tile was hit.

Parameters:

* coord `maptalks.Coordinate`
* out `QueryHitResult`

Returns:

* `QueryHitResult`

</div>
</details>

<details><summary>queryTerrainAtPoint(containerPoint)</summary>
<div>
<br/>

Ray casts terrain meshes at the given container point and returns the hit coordinate.

Parameters:

* containerPoint `maptalks.Point`

</div>
</details>

<details><summary>query3DTilesAtPoint(containerPoint)</summary>
<div>
<br/>

Query the coordinate of the first 3D Tiles hit at the given container point, null if none.

Parameters:

* containerPoint `maptalks.Point`

</div>
</details>

<details><summary>queryTerrainByProjCoord(projCoord, out)</summary>
<div>
<br/>

Query the terrain altitude by projected coordinate, returning the altitude and whether a same level tile was hit.

Parameters:

* projCoord `maptalks.Coordinate`
* out `QueryHitResult`

Returns:

* `QueryHitResult`

</div>
</details>

<details><summary>getTerrainLayer()</summary>
<div>
<br/>

Get the internal terrain layer, undefined when terrain is not enabled.

Returns:

* `TerrainLayer | undefined`

</div>
</details>

<details><summary>fire(args)</summary>
<div>
<br/>

Fire events, and on layerload first let render-complete child layers fire layerload.

Parameters:

* args `Any`

</div>
</details>
