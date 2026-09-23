<details><summary>onAdd()</summary>
<div>
<br/>

Record the map zoom as each marker initial zoom when the layer is added

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Clear all markers when the layer is removed from the map

</div>
</details>

<details><summary>getAltitude()</summary>
<div>
<br/>

Get the layer altitude, GLTFLayer returns 0

</div>
</details>

<details><summary>getGeometryById(id)</summary>
<div>
<br/>

Get a geometry by its id

Parameters:

* id `string | number` id of the geometry

Returns:

* `Geometry`

</div>
</details>

<details><summary>getGeometries(filter?)</summary>
<div>
<br/>

Get all the geometries or the ones filtered if a filter function is provided.

Parameters:

* filter (optional) `(geo: Geometry) => boolean, context?: any` =undefined   - a function to filter the geometries

Returns:

* `Array<Geometry>`

</div>
</details>

<details><summary>getFirstGeometry()</summary>
<div>
<br/>

Get the first geometry, the geometry at the bottom.

Returns:

* `Any` first geometry

</div>
</details>

<details><summary>getLastGeometry()</summary>
<div>
<br/>

Get the last geometry, the geometry on the top

Returns:

* `Any` last geometry

</div>
</details>

<details><summary>getCount()</summary>
<div>
<br/>

Get count of the geometries

Returns:

* `Any` count

</div>
</details>

<details><summary>getExtent()</summary>
<div>
<br/>

Get extent of all the geometries in the layer, return null if the layer is empty.

Returns:

* `Extent` - extent of the layer

</div>
</details>

<details><summary>forEach(fn)</summary>
<div>
<br/>

Executes the provided callback once for each geometry present in the layer in order.

Parameters:

* fn `(geo: Geometry, index: number) => void, context?: any` a callback function

Returns:

* `Any` this

</div>
</details>

<details><summary>filter(fn)</summary>
<div>
<br/>

Creates a GeometryCollection with all the geometries that pass the test implemented by the provided function.

Parameters:

* fn `(geo: Geometry) => boolean, context?: any` Function to test each geometry

Returns:

* `Any` A GeometryCollection with all the geometries that pass the test

</div>
</details>

<details><summary>isEmpty()</summary>
<div>
<br/>

Whether the layer is empty.

Returns:

* `Boolean`

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

<details><summary>removeGeometry(geometries)</summary>
<div>
<br/>

Removes one or more geometries from the layer

Parameters:

* geometries `Geometry | Geometry[]` geometry ids or geometries to remove

Returns:

* `Any` this

</div>
</details>

<details><summary>removeStyle()</summary>
<div>
<br/>

Removes layers' style

Returns:

* `Any` this

Fires:

* `OverlayLayer#removestyle`

</div>
</details>

<details><summary>onAddGeometry(geo)</summary>
<div>
<br/>

Apply the layer style to a newly added geometry

Parameters:

* geo `Geometry`

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

Hide the layer, calling onHide on each geometry and firing hide

Returns:

* `this`

</div>
</details>

<details><summary>onGeometryEvent(param?)</summary>
<div>
<br/>

Dispatch hook for geometry events, overridable to handle each event type

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

Set the layer zIndex, re-sort the layers on the map and update its renderer

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

Hide the layer, calling onHide on each geometry and firing hide

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

Remove the layer mask, clear the mask option and redraw the layer

Returns:

* `Layer` this

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

Lifecycle hook after the layer finishes loading, empty in Layer

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

Get the layer renderer instance, undefined before it is created

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Lifecycle hook on options change, triggering a renderer redraw

Parameters:

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Record the map zoom as each marker initial zoom when the layer is added

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

Lifecycle hook after the renderer is created, empty in Layer

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

Lifecycle hook after the canvas is created, empty in Layer for subclasses

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Clear all markers when the layer is removed from the map

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

Get the renderer name in use, resolved from the map renderer

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

Get the child layers, only group layers return their inner layers

Returns:

* `Layer[]`

</div>
</details>
