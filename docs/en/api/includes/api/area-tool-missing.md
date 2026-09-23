<details><summary>clear()</summary>
<div>
<br/>

Clear the measurements

Returns:

* `DistanceTool` this

</div>
</details>

<details><summary>getMeasureLayers()</summary>
<div>
<br/>

Get the DrawToolLayers with the geometries drawn on the map during measuring.

Returns:

* `Array<Layer>`

</div>
</details>

<details><summary>getLastMeasure()</summary>
<div>
<br/>

Get last measuring result

Returns:

* `Number`

</div>
</details>

<details><summary>undo()</summary>
<div>
<br/>

Undo drawing, only applicable for click/dblclick mode

Returns:

* `DistanceTool` this

</div>
</details>

<details><summary>redo()</summary>
<div>
<br/>

Redo drawing, only applicable for click/dblclick mode

Returns:

* `DistanceTool` this

</div>
</details>

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

Lifecycle callback when the tool is added to the map; validates the drawing mode.

</div>
</details>

<details><summary>onEnable()</summary>
<div>
<br/>

Lifecycle callback when the tool is enabled; saves map config, creates the draw layer and loads resources.

</div>
</details>

<details><summary>onDisable()</summary>
<div>
<br/>

Lifecycle callback when the tool is disabled; restores map config, ends drawing and removes the draw layer.

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

Return the map event map for the current drawing mode, or null when the mode has none.

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

<details><summary>addTo(map)</summary>
<div>
<br/>

Adds the map tool to a map.

Parameters:

* map `Map`

Returns:

* `MapTool` this

Fires:

* `MapTool#add`

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

Gets the map it added to.

Returns:

* `Map` map

</div>
</details>

<details><summary>enable()</summary>
<div>
<br/>

Enable the map tool.

Returns:

* `MapTool` this

Fires:

* `MapTool#enable`

</div>
</details>

<details><summary>disable()</summary>
<div>
<br/>

Disable the map tool

Returns:

* `MapTool` this

Fires:

* `MapTool#disable`

</div>
</details>

<details><summary>isEnabled()</summary>
<div>
<br/>

Returns whether the tool is enabled

Returns:

* `Boolean` true | false

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

Remove the tool from the map, disabling it and unbinding its events first.

</div>
</details>

<details><summary>onEnable()</summary>
<div>
<br/>

Lifecycle callback when the tool is enabled; saves map config, creates the draw layer and loads resources.

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

Return the map event map for the current drawing mode, or null when the mode has none.

</div>
</details>

<details><summary>onDisable()</summary>
<div>
<br/>

Lifecycle callback when the tool is disabled; restores map config, ends drawing and removes the draw layer.

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Lifecycle callback when the tool is added to the map; validates the drawing mode.

</div>
</details>
