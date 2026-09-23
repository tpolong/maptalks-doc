<details><summary>onConfig(conf)</summary>
<div>
<br/>

Clear the geometry altitude cache and redraw as needed when config changes

Parameters:

* conf `Record<string, any>`

</div>
</details>

<details><summary>getRenderer()</summary>
<div>
<br/>

Get the canvas renderer used by the layer

Returns:

* `VectorLayerCanvasRenderer`

</div>
</details>

<details><summary>getGeoMinZIndex()</summary>
<div>
<br/>

Get minimum zindex of geometries

</div>
</details>

<details><summary>getGeoMaxZIndex()</summary>
<div>
<br/>

Get maximum zindex of geometries

</div>
</details>

<details><summary>onAddGeometry(geo)</summary>
<div>
<br/>

Callback when a geometry is added, applies the layer style to it

Parameters:

* geo `Geometry`

</div>
</details>

<details><summary>onGeometryEvent(param?)</summary>
<div>
<br/>

Handle geometry events in the layer to update its caches and indexes

Parameters:

* param (optional) `HandlerFnResultType`

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

<details><summary>getProjection()</summary>
<div>
<br/>

Get projection of layer's map

Returns:

* `CommonProjectionType`

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

Remove the layer mask and mark the layer for redraw

Returns:

* `Layer` this

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

Hook called after the layer is loaded, empty by default and overridden by subclasses

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

Get the canvas renderer used by the layer

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Clear the geometry altitude cache and redraw as needed when config changes

Parameters:

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Callback after the layer is bound to a map, subclasses can override it

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

Callback after the layer's renderer is created, subclasses can override it

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

Callback after the layer's canvas is created, subclasses can override it

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Callback when the layer is removed from the map, subclasses can override it

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

Return the layer's renderer name according to the map's renderer type

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

Get the child layers, implemented only by group layers

Returns:

* `Layer[]`

</div>
</details>
