<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

Get the polygonOffset count the layer needs, which is always 0 for this layer.

Returns:

* `0 | 1`

</div>
</details>

<details><summary>getPolygonOffset()</summary>
<div>
<br/>

Get the layer polygonOffset value, which is always 0 for this layer.

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Applies the changed options and forwards the config to the layer renderer.

Parameters:

* conf `Record<string, any>`

</div>
</details>

<details><summary>setURLModifier(modifier)</summary>
<div>
<br/>

Sets the function used to modify resource URLs before loading.

Parameters:

* modifier `Function`

</div>
</details>

<details><summary>getURLModifier()</summary>
<div>
<br/>

Get the current URL modifier function of the layer.

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

Get the map events the layer listens to, including spatialreferencechange.

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Applies the changed options and forwards the config to the layer renderer.

Parameters:

* conf `unknown`

</div>
</details>

<details><summary>updateSymbol(idx, symbol)</summary>
<div>
<br/>

Updates the symbol of the style at the given index and resets the style.

Parameters:

* idx `number`
* symbol `Record<string, any>`

</div>
</details>

<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

Get the polygonOffset count the layer needs, which is always 0 for this layer.

</div>
</details>

<details><summary>getPolygonOffset()</summary>
<div>
<br/>

Get the layer polygonOffset value, which is always 0 for this layer.

</div>
</details>

<details><summary>setPolygonOffset(offset, total)</summary>
<div>
<br/>

Sets the layer polygon offset and the total offset used by GroupGLLayer.

Parameters:

* offset `number`
* total `number`

</div>
</details>

<details><summary>getTotalPolygonOffset()</summary>
<div>
<br/>

Get the total polygonOffset assigned by global offset management.

</div>
</details>

<details><summary>identify(coordinate, options?, options.tolerance?, options.count?)</summary>
<div>
<br/>

Identify geometries at the given coordinate and return them as an array.

Parameters:

* coordinate `maptalks.Coordinate` coordinate to identify
* options (optional) `Object` =null]  - options
* options.tolerance (optional) `Object` =0] - identify tolerance in pixel
* options.count (optional) `Object` =null]  - result count

Returns:

* `Geometry[]` geometries identified

</div>
</details>

<details><summary>identifyAtPoint(point, options?, options.tolerance?, options.count?)</summary>
<div>
<br/>

Identify the geometries at the given container point, with tolerance, count and filter options.

Parameters:

* point `Any` point to identify
* options (optional) `Any` =null]  - options
* options.tolerance (optional) `Any` =0] - identify tolerance in pixel
* options.count (optional) `Any` =null]  - result count

Returns:

* `Any` geometries identified

</div>
</details>

<details><summary>getComputedStyle()</summary>
<div>
<br/>

Get the layer style object, wrapping the layer style in a style field.

</div>
</details>

<details><summary>outlineAll()</summary>
<div>
<br/>

Outlines all the geometries in the layer.

</div>
</details>

<details><summary>outline(geoIds)</summary>
<div>
<br/>

Outlines the geometries with the given ids.

Parameters:

* geoIds `string[]`

</div>
</details>

<details><summary>cancelOutline()</summary>
<div>
<br/>

Cancel all outline highlights on the layer.

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

Exports the layer JSON with its options and all geometries.

Returns:

* `Object` layer's JSON

</div>
</details>

<details><summary>getTileSize()</summary>
<div>
<br/>

Get the default tile size used by painters, a 1 by 1 Size.

</div>
</details>

<details><summary>getAltitude()</summary>
<div>
<br/>

Get the layer altitude, which the OverlayLayer implementation returns as 0.

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

<details><summary>addGeometry(geometries, fitView?)</summary>
<div>
<br/>

Adds one or more geometries to the layer

Parameters:

* geometries `Geometry | Array<Geometry>` one or more geometries
* fitView (optional) `boolean | addGeometryFitViewOptions` =false                                         - automatically set the map to a fit center and zoom for the geometries

Returns:

* `Any` this

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

<details><summary>clear()</summary>
<div>
<br/>

Clear all geometries in this layer

Returns:

* `Any` this

</div>
</details>

<details><summary>getStyle()</summary>
<div>
<br/>

Gets layer's style.

Returns:

* `Any` layer's style

</div>
</details>

<details><summary>setStyle(style)</summary>
<div>
<br/>

Sets style to the layer, styling the geometries satisfying the condition with style's symbol. <br/>
Based on filter type in [mapbox-gl-js's style specification]&#123;https://www.mapbox.com/mapbox-gl-js/style-spec/#types-filter&#125;.

Parameters:

* style `any | any[]` layer's style

Returns:

* `Any` this

Fires:

* `OverlayLayer#setstyle`

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

Callback on each geometry added to the layer, it applies the layer style to the geometry.

Parameters:

* geo `Geometry`

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

Hide the layer and all its geometries, returning the layer.

Returns:

* `this`

</div>
</details>

<details><summary>onGeometryEvent(param?)</summary>
<div>
<br/>

Handles geometry events such as id, zIndex, position, shape and symbol changes.

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

Sets the layer z-index and reorders the layers on the map.

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

Hide the layer and all its geometries, returning the layer.

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

Get the layer renderer instance, undefined before it is created.

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Applies the changed options and forwards the config to the layer renderer.

Parameters:

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Lifecycle callback invoked after the layer is added to a map.

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

Get the effective renderer name, gl on a WebGL map and gpu on a WebGPU map.

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

Exports the layer JSON with its options and all geometries.

Parameters:

* options (optional) `any`

Returns:

* `LayerJSONType`

</div>
</details>

<details><summary>identify(_coordinate, _options)</summary>
<div>
<br/>

Identify geometries at the given coordinate and return them as an array.

Parameters:

* _coordinate `Coordinate`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>identifyAtPoint(_containerPoint, _options)</summary>
<div>
<br/>

Identify the geometries at the given container point, with tolerance, count and filter options.

Parameters:

* _containerPoint `Point`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

Get child layers; only container layers implement this optional member.

Returns:

* `Layer[]`

</div>
</details>
