<details><summary>isCanvasRender()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>prepareToDraw(context)</summary>
<div>
<br/>

准备画布的接口函数

Parameters:

* context `CanvasRenderingContext2D` CanvasRenderingContext2D of the layer canvas.

Returns:

* `Object[]` objects that will be passed to function draw(context, ..) as parameters.

</div>
</details>

<details><summary>draw(params)</summary>
<div>
<br/>

绘制something的接口函数

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

清空画布

Returns:

* `Any` this

</div>
</details>

<details><summary>requestMapToRender()</summary>
<div>
<br/>

要求map不触发任何事件下重绘canvas

Returns:

* `Any` this

</div>
</details>

<details><summary>completeRender()</summary>
<div>
<br/>

要求map触发layerload事件重绘canvas

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

map zoomstart事件回调

Parameters:

* param `Object` event parameter

</div>
</details>

<details><summary>onZooming(param)</summary>
<div>
<br/>

map zooming事件回调

Parameters:

* param `Object` event parameter

</div>
</details>

<details><summary>onZoomEnd(param)</summary>
<div>
<br/>

map zoomend事件回调

Parameters:

* param `Object` event parameter

</div>
</details>

<details><summary>onMoveStart(param)</summary>
<div>
<br/>

map movestart事件回调

Parameters:

* param `Object` event parameter

</div>
</details>

<details><summary>onMoving(param)</summary>
<div>
<br/>

map moving事件回调

Parameters:

* param `Object` event parameter

</div>
</details>

<details><summary>onMoveEnd(param)</summary>
<div>
<br/>

map moveend事件回调

Parameters:

* param `Object` event parameter

</div>
</details>

<details><summary>onResize(param)</summary>
<div>
<br/>

map resize事件回调

Parameters:

* param `Object` event parameter

</div>
</details>

<details><summary>doubleBuffer(bufferContext, context?)</summary>
<div>
<br/>

double buffer的回调函数
默认情况下just draws and return，如果你需要在绘制之前处理canvas，可以重写改函数

Parameters:

* bufferContext `CanvasRenderingContext2D/*`
* context (optional) `CanvasRenderingContext2D*/`

Returns:

* `CanvasLayer`

</div>
</details>
