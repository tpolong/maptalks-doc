<details><summary>getMode()</summary>
<div>
<br/>

Get current mode of draw tool

Returns:

* `Any` mode

</div>
</details>

<details><summary>setMode(mode)</summary>
<div>
<br/>

Set mode of the draw tool

Parameters:

* mode `string` mode of the draw tool

Returns:

* `DrawTool` this

</div>
</details>

<details><summary>getSymbol()</summary>
<div>
<br/>

Get symbol of the draw tool

Returns:

* `Any` symbol

</div>
</details>

<details><summary>setSymbol(symbol)</summary>
<div>
<br/>

Set draw tool's symbol

Parameters:

* symbol `any` symbol set

Returns:

* `DrawTool` this

</div>
</details>

<details><summary>getCurrentGeometry()</summary>
<div>
<br/>

Get geometry is currently drawing

Returns:

* `Any` geometry currently drawing

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Validate whether the draw mode is legal when the tool is added to the map

</div>
</details>

<details><summary>onEnable()</summary>
<div>
<br/>

Enable the draw tool, create the draw layer and back up the map config

</div>
</details>

<details><summary>onDisable()</summary>
<div>
<br/>

Disable the draw tool, end drawing and remove the draw layer

</div>
</details>

<details><summary>undo()</summary>
<div>
<br/>

Undo drawing, only applicable for click/dblclick mode

Returns:

* `Any` this

</div>
</details>

<details><summary>redo()</summary>
<div>
<br/>

Redo drawing, only applicable for click/dblclick mode

Returns:

* `Any` this

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

Get the event handlers to be bound in the current draw mode

</div>
</details>

<details><summary>endDraw(param?)</summary>
<div>
<br/>

End current draw

Parameters:

* param (optional) `any` =null] params of drawend event

Returns:

* `Any` this

</div>
</details>

<details><summary>setLayerZIndex(zIndex)</summary>
<div>
<br/>

set draw inner layers zIndex

Parameters:

* zIndex `number` draw layer zIndex

Returns:

* `Any` this

</div>
</details>

<details><summary>addCoordinate(coordinate)</summary>
<div>
<br/>

add a custom Coordinate

Parameters:

* coordinate `Coordinate` coordinate

Returns:

* `Any` this

</div>
</details>

<details><summary>getTempGeometry()</summary>
<div>
<br/>

get temp Geometry

Returns:

* `Any` Geometry

</div>
</details>
