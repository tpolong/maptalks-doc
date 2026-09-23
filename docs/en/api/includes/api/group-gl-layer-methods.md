<details><summary>sortLayersByZIndex()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>setSceneConfig(sceneConfig)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* sceneConfig `GroupGLLayerSceneConfig`

Returns:

* `this`

</div>
</details>

<details><summary>getSceneConfig()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `GroupGLLayerSceneConfig`

</div>
</details>

<details><summary>getGroundConfig()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `SceneGround`

</div>
</details>

<details><summary>getWeatherConfig()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `SceneWeather`

</div>
</details>

<details><summary>getScanEffectConfig()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

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

No prose description in source; parameters and return type come from the type signature.

Parameters:

* layer `maptalks.Layer`

Returns:

* `this`

</div>
</details>

<details><summary>clearLayers()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `this`

</div>
</details>

<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

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

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>getChildLayer(id)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* id `string`

Returns:

* `maptalks.Layer | null`

</div>
</details>

<details><summary>getLayer(id)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* id `string`

Returns:

* `maptalks.Layer | null`

</div>
</details>

<details><summary>addAnalysis(analysis)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* analysis `Analysis`

</div>
</details>

<details><summary>removeAnalysis(analysis)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* analysis `Analysis`

</div>
</details>

<details><summary>clearAnalysis()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

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

No prose description in source; parameters and return type come from the type signature.

Returns:

* `TerrainOptions | undefined | null`

</div>
</details>

<details><summary>setTerrain(info)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* info `TerrainOptions | null`

</div>
</details>

<details><summary>removeTerrain()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>updateTerrainMaterial(mat)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* mat `object`

</div>
</details>

<details><summary>queryTerrain(coord, out)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

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

No prose description in source; parameters and return type come from the type signature.

Parameters:

* containerPoint `maptalks.Point`

</div>
</details>

<details><summary>query3DTilesAtPoint(containerPoint)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* containerPoint `maptalks.Point`

</div>
</details>

<details><summary>queryTerrainByProjCoord(projCoord, out)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

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

No prose description in source; parameters and return type come from the type signature.

Returns:

* `TerrainLayer | undefined`

</div>
</details>

<details><summary>fire(args)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* args `Any`

</div>
</details>
