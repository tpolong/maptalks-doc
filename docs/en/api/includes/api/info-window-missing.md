<details><summary>buildOn()</summary>
<div>
<br/>

Build the InfoWindow DOM with its title, close button and content container

Returns:

* `HTMLElement`

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

Returns the map events that auto close the window, keyed by autoCloseOn

</div>
</details>

<details><summary>getOwnerEvents()</summary>
<div>
<br/>

Returns the owner events that auto open the window, keyed by autoOpenOn

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Handles mouse out and unbinds DOM events when the infowindow is removed

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

Unbinds the click and touchend listeners on the close button

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Lifecycle callback invoked when the infowindow is added to its owner

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Handles mouse out and unbinds DOM events when the infowindow is removed

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

Unbinds the click and touchend listeners on the close button

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

Returns the map events that auto close the window, keyed by autoCloseOn

</div>
</details>

<details><summary>getOwnerEvents()</summary>
<div>
<br/>

Returns the owner events that auto open the window, keyed by autoOpenOn

</div>
</details>

<details><summary>buildOn()</summary>
<div>
<br/>

Build the InfoWindow DOM with its title, close button and content container

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

Returns the owner the infowindow is added to, a map or a geometry

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

Returns the window pixel position in the map container with offset, null without map

</div>
</details>

<details><summary>onGeometryPositionChange(param)</summary>
<div>
<br/>

Lifecycle callback when the owner geometry moves, refreshes window position

Parameters:

* param `Any`

</div>
</details>

<details><summary>onMoving()</summary>
<div>
<br/>

Lifecycle callback on map moving and moveend, updates the window position

</div>
</details>

<details><summary>onEvent()</summary>
<div>
<br/>

Lifecycle callback during map zooming rotating and pitching, updates position

</div>
</details>

<details><summary>onZoomEnd()</summary>
<div>
<br/>

Lifecycle callback on map zoomend, immediately resets the DOM position

</div>
</details>

<details><summary>onResize()</summary>
<div>
<br/>

Lifecycle callback when the map container resizes, resets the DOM position

</div>
</details>

<details><summary>onDomSizeChange()</summary>
<div>
<br/>

Lifecycle callback when the DOM size changes, resets position and collision

</div>
</details>

<details><summary>isSupportZoomFilter()</summary>
<div>
<br/>

Whether the DOM display is filtered by zoom, the infowindow returns false

</div>
</details>

<details><summary>onConfig(config)</summary>
<div>
<br/>

Lifecycle callback after options change, refreshes position and collisions

Parameters:

* config `Record<string, any>`

</div>
</details>
