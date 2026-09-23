<details><summary>isCanvasRender()</summary>
<div>
<br/>

是否为 HTML5 Canvas 渲染的 layer，本类固定返回 true

</div>
</details>

<details><summary>prepareToDraw(context)</summary>
<div>
<br/>

准备画布的接口函数

参数：

* context `CanvasRenderingContext2D` CanvasRenderingContext2D of the layer canvas.

返回：

* `Object[]` objects that will be passed to function draw(context, ..) as parameters.

</div>
</details>

<details><summary>draw(params)</summary>
<div>
<br/>

绘制something的接口函数

参数：

* params `Any`

</div>
</details>

<details><summary>redraw()</summary>
<div>
<br/>

重绘

返回：

* `Any` this

</div>
</details>

<details><summary>play()</summary>
<div>
<br/>

播放

返回：

* `Any` this

</div>
</details>

<details><summary>pause()</summary>
<div>
<br/>

暂停

返回：

* `Any` this

</div>
</details>

<details><summary>isPlaying()</summary>
<div>
<br/>

是否正在播放

返回：

* `boolean`

</div>
</details>

<details><summary>clearCanvas()</summary>
<div>
<br/>

清空画布

返回：

* `Any` this

</div>
</details>

<details><summary>requestMapToRender()</summary>
<div>
<br/>

要求map不触发任何事件下重绘canvas

返回：

* `Any` this

</div>
</details>

<details><summary>completeRender()</summary>
<div>
<br/>

要求map触发layerload事件重绘canvas

返回：

* `Any` this

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

canvas创建完成后的回调函数

</div>
</details>

<details><summary>onZoomStart(param)</summary>
<div>
<br/>

map zoomstart事件回调

参数：

* param `Object` event parameter

</div>
</details>

<details><summary>onZooming(param)</summary>
<div>
<br/>

map zooming事件回调

参数：

* param `Object` event parameter

</div>
</details>

<details><summary>onZoomEnd(param)</summary>
<div>
<br/>

map zoomend事件回调

参数：

* param `Object` event parameter

</div>
</details>

<details><summary>onMoveStart(param)</summary>
<div>
<br/>

map movestart事件回调

参数：

* param `Object` event parameter

</div>
</details>

<details><summary>onMoving(param)</summary>
<div>
<br/>

map moving事件回调

参数：

* param `Object` event parameter

</div>
</details>

<details><summary>onMoveEnd(param)</summary>
<div>
<br/>

map moveend事件回调

参数：

* param `Object` event parameter

</div>
</details>

<details><summary>onResize(param)</summary>
<div>
<br/>

map resize事件回调

参数：

* param `Object` event parameter

</div>
</details>

<details><summary>doubleBuffer(bufferContext, context?)</summary>
<div>
<br/>

double buffer的回调函数
默认情况下just draws and return，如果你需要在绘制之前处理canvas，可以重写改函数

参数：

* bufferContext `CanvasRenderingContext2D/*`
* context（可选） `CanvasRenderingContext2D*/`

返回：

* `CanvasLayer`

</div>
</details>
