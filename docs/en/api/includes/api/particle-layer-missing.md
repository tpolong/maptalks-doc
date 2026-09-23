<details><summary>isCanvasRender()</summary>
<div>
<br/>

Whether the layer is rendered by HTML5 Canvas, always true for this class.

</div>
</details>

<details><summary>prepareToDraw(context)</summary>
<div>
<br/>

An optional interface function called only once before the first draw, useful for preparing your canvas operations.

Parameters:

* context `CanvasRenderingContext2D` CanvasRenderingContext2D of the layer canvas.

Returns:

* `Object[]` objects that will be passed to function draw(context, ..) as parameters.

</div>
</details>

<details><summary>redraw()</summary>
<div>
<br/>

Redraw the layer

Returns:

* `Any` this

</div>
</details>

<details><summary>play()</summary>
<div>
<br/>

Start animation

Returns:

* `Any` this

</div>
</details>

<details><summary>pause()</summary>
<div>
<br/>

Pause the animation

Returns:

* `Any` this

</div>
</details>

<details><summary>isPlaying()</summary>
<div>
<br/>

If the animation is playing

Returns:

* `boolean`

</div>
</details>

<details><summary>clearCanvas()</summary>
<div>
<br/>

Clears the layer canvas through its renderer.

Returns:

* `Any` this

</div>
</details>

<details><summary>requestMapToRender()</summary>
<div>
<br/>

Ask the map to redraw the layer canvas without firing any event.

Returns:

* `Any` this

</div>
</details>

<details><summary>completeRender()</summary>
<div>
<br/>

Asks the map to redraw the layer canvas and fire the layerload event.

Returns:

* `Any` this

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

Callback invoked after the layer canvas is created, override it to do custom work.

</div>
</details>

<details><summary>onZoomStart(param)</summary>
<div>
<br/>

The event callback for the map zoomstart event.

Parameters:

* param `Object` event parameter

</div>
</details>

<details><summary>onZooming(param)</summary>
<div>
<br/>

The event callback for the map zooming event.

Parameters:

* param `Object` event parameter

</div>
</details>

<details><summary>onZoomEnd(param)</summary>
<div>
<br/>

The event callback for the map zoomend event.

Parameters:

* param `Object` event parameter

</div>
</details>

<details><summary>onMoveStart(param)</summary>
<div>
<br/>

The event callback for the map movestart event.

Parameters:

* param `Object` event parameter

</div>
</details>

<details><summary>onMoving(param)</summary>
<div>
<br/>

The event callback for the map moving event.

Parameters:

* param `Object` event parameter

</div>
</details>

<details><summary>onMoveEnd(param)</summary>
<div>
<br/>

The event callback for the map moveend event.

Parameters:

* param `Object` event parameter

</div>
</details>

<details><summary>onResize(param)</summary>
<div>
<br/>

The event callback for the map resize event.

Parameters:

* param `Object` event parameter

</div>
</details>

<details><summary>doubleBuffer(bufferContext, context?)</summary>
<div>
<br/>

Clears the buffer context and returns this; override it to process the canvas before drawing.

Parameters:

* bufferContext `CanvasRenderingContext2D/*`
* context (optional) `CanvasRenderingContext2D*/`

Returns:

* `CanvasLayer`

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

Set the layer z-index, syncing its options, map layer order and renderer.

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

Removes the layer mask and requests a redraw.

Returns:

* `Layer` this

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

Hook invoked when the layer finishes loading, empty by default and overridable.

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

Get the renderer instance of the layer.

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Config change callback that redraws the layer and refreshes attribution.

Parameters:

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Lifecycle callback invoked after the layer is bound to a map, overridable by subclasses.

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

Callback invoked after the layer renderer is created, overridable by subclasses.

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

Callback invoked after the layer canvas is created, override it to do custom work.

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Lifecycle callback invoked when the layer is removed from the map, overridable.

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

Get the renderer name in use, resolved to gl or gpu by the map renderer.

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

Export the layer as JSON with type, id and options, ParticleLayer itself is not deserializable.

Parameters:

* options (optional) `any`

Returns:

* `LayerJSONType`

</div>
</details>

<details><summary>identify(_coordinate, _options)</summary>
<div>
<br/>

Identify geometries on the layer by coordinate, implemented by subclasses.

Parameters:

* _coordinate `Coordinate`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>identifyAtPoint(_containerPoint, _options)</summary>
<div>
<br/>

Identify geometries on the layer by container point, implemented by subclasses.

Parameters:

* _containerPoint `Point`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

Get the sub layer list, implemented only by group type layers.

Returns:

* `Layer[]`

</div>
</details>
