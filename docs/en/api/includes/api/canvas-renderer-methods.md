<details><summary>needToRedraw()</summary>
<div>
<br/>

Return whether the renderer needs to redraw, true while pitching, rotating, zooming or forcing render on moving.

Returns:

* `boolean`

</div>
</details>

<details><summary>createContext()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>resetCanvasTransform()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

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

Clear the canvas context and mark it to redraw, additionally dropping the tile caches.

</div>
</details>

<details><summary>prepareCanvas()</summary>
<div>
<br/>

Prepare the canvas for rendering. <br/>
1. Clear the canvas to blank. <br/>
2. Clip the canvas by mask if there is any and return the mask's extent

Returns:

* `PointExtent` mask's extent of current zoom's 2d point.

</div>
</details>

<details><summary>onResize(_param)</summary>
<div>
<br/>

onResize

Parameters:

* _param `any`

</div>
</details>
