<details><summary>render(framestamp?)</summary>
<div>
<br/>

Render the layer.
Call checkResources

参数：

* framestamp（可选） `number`

</div>
</details>

<details><summary>getFrameTimestamp()</summary>
<div>
<br/>

源码未提供文字说明，参数与返回类型取自类型签名。

返回：

* `number`

</div>
</details>

<details><summary>checkAndDraw(drawFn, args)</summary>
<div>
<br/>

源码未提供文字说明，参数与返回类型取自类型签名。

参数：

* drawFn `Any`
* args `Any`

</div>
</details>

<details><summary>onSkipDrawOnInteracting()</summary>
<div>
<br/>

A callback for overriding when drawOnInteracting is skipped due to low fps

</div>
</details>

<details><summary>isLoadingResource()</summary>
<div>
<br/>

源码未提供文字说明，参数与返回类型取自类型签名。

返回：

* `boolean`

</div>
</details>

<details><summary>isRenderComplete()</summary>
<div>
<br/>

源码未提供文字说明，参数与返回类型取自类型签名。

返回：

* `boolean`

</div>
</details>

<details><summary>mustRenderOnInteracting()</summary>
<div>
<br/>

Whether must call render instead of drawOnInteracting when map is interacting

返回：

* `boolean`

</div>
</details>

<details><summary>setToRedraw()</summary>
<div>
<br/>

Set to redraw, ask map to call draw/drawOnInteracting to redraw the layer

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

Remove the renderer, will be called when layer is removed

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

渲染器移除时的回调，先清空 canvas 再释放瓦片缓存

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

源码未提供文字说明，参数与返回类型取自类型签名。

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

Get map

返回：

* `any`

</div>
</details>

<details><summary>isBlank()</summary>
<div>
<br/>

A method to help improve performance.
If you are sure that layer's canvas is blank, returns true to save unnecessary layer works of maps.

返回：

* `boolean`

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

Show the layer

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

Hide the layer

</div>
</details>

<details><summary>setZIndex(_z?)</summary>
<div>
<br/>

Set z-index of layer

参数：

* _z（可选） `number`

</div>
</details>

<details><summary>screenshotRenderResult(x, y, width, height)</summary>
<div>
<br/>

渲染结果区域截图,主要用于事件检测处理

参数：

* x `number`
* y `number`
* width `number`
* height `number`

返回：

* `CanvasRenderingContext2D | null`

</div>
</details>

<details><summary>hitDetect(point)</summary>
<div>
<br/>

Detect if there is anything painted on the given point

参数：

* point `Point` containerPoint

返回：

* `boolean`

</div>
</details>

<details><summary>loadResources(resourceUrls)</summary>
<div>
<br/>

loadResource from resourceUrls

参数：

* resourceUrls `string[][]` Array of urls to load

返回：

* `Promise[]`

</div>
</details>

<details><summary>initContext()</summary>
<div>
<br/>

源码未提供文字说明，参数与返回类型取自类型签名。

</div>
</details>

<details><summary>prepareContext()</summary>
<div>
<br/>

源码未提供文字说明，参数与返回类型取自类型签名。

</div>
</details>

<details><summary>clearContext()</summary>
<div>
<br/>

源码未提供文字说明，参数与返回类型取自类型签名。

</div>
</details>

<details><summary>getViewExtent()</summary>
<div>
<br/>

Get renderer's current view extent in 2d point

返回：

* `Object` view.extent, view.maskExtent, view.zoom, view.middleWest

</div>
</details>

<details><summary>completeRender()</summary>
<div>
<br/>

call when rendering completes, this will fire necessary events and call setCanvasUpdated

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

Get renderer's event map registered on the map

返回：

* `Object` events

</div>
</details>

<details><summary>onZoomStart(param)</summary>
<div>
<br/>

onZoomStart

参数：

* param `any`

</div>
</details>

<details><summary>onZoomEnd(param)</summary>
<div>
<br/>

onZoomEnd

参数：

* param `any`

</div>
</details>

<details><summary>onZooming(param)</summary>
<div>
<br/>

onZooming

参数：

* param `any`

</div>
</details>

<details><summary>onMoveStart(param)</summary>
<div>
<br/>

onMoveStart

参数：

* param `any`

</div>
</details>

<details><summary>onMoving(param)</summary>
<div>
<br/>

onMoving

参数：

* param `any`

</div>
</details>

<details><summary>onMoveEnd(param)</summary>
<div>
<br/>

onMoveEnd

参数：

* param `any`

</div>
</details>

<details><summary>onDragRotateStart(param)</summary>
<div>
<br/>

onDragRotateStart

参数：

* param `any`

</div>
</details>

<details><summary>onDragRotating(param)</summary>
<div>
<br/>

onDragRotating

参数：

* param `any`

</div>
</details>

<details><summary>onDragRotateEnd(param)</summary>
<div>
<br/>

onDragRotateEnd

参数：

* param `any`

</div>
</details>

<details><summary>onSpatialReferenceChange(param)</summary>
<div>
<br/>

onSpatialReferenceChange

参数：

* param `any`

</div>
</details>

<details><summary>getDrawTime()</summary>
<div>
<br/>

Get ellapsed time of previous drawing

返回：

* `Number`

</div>
</details>

<details><summary>setCanvasUpdated()</summary>
<div>
<br/>

Only for MapCanvasRenderer
Mark layer's canvas updated

</div>
</details>

<details><summary>getCanvasImage()</summary>
<div>
<br/>

Only for MapCanvasRenderer
Get renderer's Canvas image object

返回：

* `any`

</div>
</details>

<details><summary>createCanvas()</summary>
<div>
<br/>

Only for MapCanvasRenderer
Create renderer's Canvas

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

源码未提供文字说明，参数与返回类型取自类型签名。

</div>
</details>

<details><summary>resizeCanvas(canvasSize?)</summary>
<div>
<br/>

Only for MapCanvasRenderer
Resize the canvas

参数：

* canvasSize（可选） `SizeLike` the size resizing to

</div>
</details>

<details><summary>clipCanvas(context)</summary>
<div>
<br/>

按 layer 的 mask 与 maskClip 裁剪 canvas，返回是否执行了裁剪

参数：

* context `CanvasRenderingContext2D`

</div>
</details>

<details><summary>drawOnInteracting(args)</summary>
<div>
<br/>

源码未提供文字说明，参数与返回类型取自类型签名。

参数：

* args `any[]`

</div>
</details>

<details><summary>checkResources()</summary>
<div>
<br/>

源码未提供文字说明，参数与返回类型取自类型签名。

返回：

* `any[]`

</div>
</details>

<details><summary>getImageData()</summary>
<div>
<br/>

源码未提供文字说明，参数与返回类型取自类型签名。

返回：

* `ImageData`

</div>
</details>

<details><summary>draw(args)</summary>
<div>
<br/>

源码未提供文字说明，参数与返回类型取自类型签名。

参数：

* args `any[]`

</div>
</details>
