<details><summary>getEvents()</summary>
<div>
<br/>

Return map events that remove the menu DOM on move, zoom or click

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Callback hook invoked when the menu is added to its owner

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Callback hook invoked when the menu is removed

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

Callback hook invoked when the menu DOM node is removed

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

Return map events that remove the menu DOM on move, zoom or click

</div>
</details>

<details><summary>getOwnerEvents()</summary>
<div>
<br/>

Return the event map to bind on the owner, subclasses may override

</div>
</details>

<details><summary>buildOn()</summary>
<div>
<br/>

Create the menu DOM, using items as HTML directly when custom is true

Returns:

* `HTMLElement`

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

Get the map it added to

Returns:

* `Map` map instance

</div>
</details>

<details><summary>show(coordinate?)</summary>
<div>
<br/>

Show the UI Component, if it is a global single one, it will close previous one.

Parameters:

* coordinate (optional) `Coordinate` =null] - coordinate to show, default is owner's center

Returns:

* `ui.UIComponent` this

Fires:

* `ui.UIComponent#showstart`
* `ui.UIComponent#showend`

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

Hide the UI Component.

Returns:

* `ui.UIComponent` this

Fires:

* `ui.UIComponent#hide`

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

Decide whether the ui component is open

Returns:

* `Boolean` true|false

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

Remove the UI Component

Returns:

* `ui.UIComponent` this

Fires:

* `ui.UIComponent#hide`
* `ui.UIComponent#remove`

</div>
</details>

<details><summary>getSize()</summary>
<div>
<br/>

Get pixel size of the UI Component.

Returns:

* `Size` size

</div>
</details>

<details><summary>getOwner()</summary>
<div>
<br/>

Get the owner the menu is added to, either a map or a geometry

</div>
</details>

<details><summary>getDOM()</summary>
<div>
<br/>

get Dom Node

Returns:

* `HTMLDivElement` dom|null

</div>
</details>

<details><summary>setZIndex(zIndex)</summary>
<div>
<br/>

set Dom Node zIndex

Parameters:

* zIndex `number`

</div>
</details>

<details><summary>getPosition()</summary>
<div>
<br/>

Get the menu pixel position relative to the map container, offset included

</div>
</details>

<details><summary>onGeometryPositionChange(param)</summary>
<div>
<br/>

Callback when the owner geometry moves, refreshing the menu at its center

Parameters:

* param `Any`

</div>
</details>

<details><summary>onMoving()</summary>
<div>
<br/>

Callback on map moving and moveend, updating the menu position

</div>
</details>

<details><summary>onEvent()</summary>
<div>
<br/>

Callback during map zoom, rotate or pitch, updating the menu position

</div>
</details>

<details><summary>onZoomEnd()</summary>
<div>
<br/>

Callback on map zoom end, immediately resetting the menu DOM position

</div>
</details>

<details><summary>onResize()</summary>
<div>
<br/>

Callback on map container resize, resetting the menu DOM position

</div>
</details>

<details><summary>onDomSizeChange()</summary>
<div>
<br/>

Callback when the menu DOM resizes, resetting position and collision

</div>
</details>

<details><summary>isSupportZoomFilter()</summary>
<div>
<br/>

Whether DOM display is filtered by zoom, the menu returns false

</div>
</details>

<details><summary>onConfig(config)</summary>
<div>
<br/>

Callback after options change, refreshing position and collision

Parameters:

* config `Record<string, any>`

</div>
</details>
