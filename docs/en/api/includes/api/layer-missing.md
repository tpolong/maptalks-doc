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

<details><summary>setZIndex(zIndex)</summary>
<div>
<br/>

为layer 设置zIndex

Parameters:

* zIndex `number` layer's z-index

Returns:

* `Any` this

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

<details><summary>hide()</summary>
<div>
<br/>

Hide the layer

Returns:

* `Any` this

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

移除mask

Returns:

* `Layer` this

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `Layer[]`

</div>
</details>
