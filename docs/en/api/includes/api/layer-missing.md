<details><summary>onLoadEnd()</summary>
<div>
<br/>

Hook called when the layer finishes loading, overridden by subclasses, empty by default

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Callback on option change that triggers a redraw and an attribution update

Parameters:

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Callback called after the layer is bound to a map, subclasses may override it

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

Callback called after the layer renderer is created, subclasses may override it

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

Callback called after the layer canvas is created, subclasses may override it

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Callback called when the layer is removed from the map, subclasses may override it

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

Return the renderer name the layer uses according to the map renderer type

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

Get the child layer list, implemented only by group layers

Returns:

* `Layer[]`

</div>
</details>
