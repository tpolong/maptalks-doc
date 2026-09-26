<details><summary>needToRedraw()</summary>
<div>
<br/>

判断是否需要重绘，倾斜、旋转缩放或强制移动渲染时返回 true

返回：

* `boolean`

</div>
</details>

<details><summary>createContext()</summary>
<div>
<br/>

源码未提供文字说明，参数与返回类型取自类型签名。

</div>
</details>

<details><summary>resetCanvasTransform()</summary>
<div>
<br/>

源码未提供文字说明，参数与返回类型取自类型签名。

</div>
</details>

<details><summary>clearCanvas()</summary>
<div>
<br/>

Clear the canvas to blank

</div>
</details>

<details><summary>clear()</summary>
<div>
<br/>

清空 canvas 上下文并标记需要重绘，同时清除瓦片缓存

</div>
</details>

<details><summary>prepareCanvas()</summary>
<div>
<br/>

Prepare the canvas for rendering. <br/>
1. Clear the canvas to blank. <br/>
2. Clip the canvas by mask if there is any and return the mask's extent

返回：

* `PointExtent` mask's extent of current zoom's 2d point.

</div>
</details>

<details><summary>onResize(_param)</summary>
<div>
<br/>

onResize

参数：

* _param `any`

</div>
</details>
