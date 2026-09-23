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

Callback when the tool is added to a map; checks and prepares its mode

</div>
</details>

<details><summary>onEnable()</summary>
<div>
<br/>

Callback when the tool is enabled; creates the draw layer and saves map config

</div>
</details>

<details><summary>onDisable()</summary>
<div>
<br/>

Callback when the tool is disabled; restores map config and removes temp layers

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

Return the event map of handlers to register on the map for the current mode

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

Remove the tool from its map after disabling it and detaching it from the map

</div>
</details>

<details><summary>onEnable()</summary>
<div>
<br/>

Callback when the tool is enabled; creates the draw layer and saves map config

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

Return the event map of handlers to register on the map for the current mode

</div>
</details>

<details><summary>onDisable()</summary>
<div>
<br/>

Callback when the tool is disabled; restores map config and removes temp layers

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Callback when the tool is added to a map; checks and prepares its mode

</div>
</details>
