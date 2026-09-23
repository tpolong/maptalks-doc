<details><summary>isCanvasRender()</summary>
<div>
<br/>

Whether the layer is rendered by HTML5 Canvas; always true for CanvasLayer.

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

<details><summary>draw(params)</summary>
<div>
<br/>

Draws things on the layer canvas; implement it in subclasses.

Parameters:

* params `Any`

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

Callback function when layer's canvas is created. <br/>
Override it to do anything needed.

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

Clears the buffer context and returns this; override it to process the canvas image before drawing.

Parameters:

* bufferContext `CanvasRenderingContext2D/*`
* context (optional) `CanvasRenderingContext2D*/`

Returns:

* `CanvasLayer`

</div>
</details>
