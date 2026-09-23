<details><summary>sortLayersByZIndex()</summary>
<div>
<br/>

Reorder the group's child layers by ascending zIndex.

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

<details><summary>updateTerrainMaterial(mat)</summary>
<div>
<br/>

Merge the given terrain material options and refresh the terrain layer.

Parameters:

* mat `object`

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

Removes the layer mask so the whole layer is rendered again.

Returns:

* `Layer` this

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

Load end callback that prepares child layers and inits the terrain layer.

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

Callback invoked when the layer's options change, which triggers a redraw.

Parameters:

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Lifecycle callback invoked when the layer is added to a map or group.

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

Lifecycle callback invoked after the layer's canvas is created.

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Unloads the child layers and analysis objects and cleans up the terrain layer when removed from the map.

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

Get the layer's renderer name, gl or gpu according to the map renderer.

</div>
</details>
