<details><summary>onAdd()</summary>
<div>
<br/>

Called when the UIMarker is added to a map, throws if the owner is not a map

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

Show the UIMarker

Returns:

* `UIMarker` this

Fires:

* `UIMarker#showstart`
* `UIMarker#showend`

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

Called when the DOM is removed, unbinds the DOM events registered on the marker

</div>
</details>

<details><summary>onZoomFilter()</summary>
<div>
<br/>

Called on zoom, toggles the marker DOM display by whether the marker is visible

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

Whether the marker is visible, decided by the visible option and the zoom range

</div>
</details>

<details><summary>isSupportZoomFilter()</summary>
<div>
<br/>

Whether the marker supports dynamic show or hide filtering by zoom level

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Called when the UIMarker is added to a map, throws if the owner is not a map

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Callback when the UI component is removed from its owner, for subclasses to clean up

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

Called when the DOM is removed, unbinds the DOM events registered on the marker

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

Returns the event map the component itself listens to, empty in the base class

</div>
</details>

<details><summary>getOwnerEvents()</summary>
<div>
<br/>

Returns the event map to be bound on the owner, empty in the base class

</div>
</details>

<details><summary>buildOn()</summary>
<div>
<br/>

Builds the marker's DOM from content, renders dynamically if a function, binds DOM events

Returns:

* `HTMLElement`

</div>
</details>

<details><summary>addTo(owner)</summary>
<div>
<br/>

Adds the UI Component to a geometry or a map

Parameters:

* owner `Geometry | Map` geometry or map to addto.

Returns:

* `ui.UIComponent` this

Fires:

* `ui.UIComponent#add`

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

Whether the marker is visible, decided by the visible option and the zoom range

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

Gets the owner the marker is added to, which is the map

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

Gets the marker's pixel position in the map container, including the getOffset shift

</div>
</details>

<details><summary>onGeometryPositionChange(param)</summary>
<div>
<br/>

Callback when the owner geometry position changes, repositions to the new center when visible

Parameters:

* param `Any`

</div>
</details>

<details><summary>onMoving()</summary>
<div>
<br/>

Callback on map moving or moveend, updates the UI position when visible

</div>
</details>

<details><summary>onEvent()</summary>
<div>
<br/>

Callback on map zooming rotate or pitch, updates the UI position when visible

</div>
</details>

<details><summary>onZoomEnd()</summary>
<div>
<br/>

Callback on map zoomend, resets the UI position in the current frame when visible

</div>
</details>

<details><summary>onResize()</summary>
<div>
<br/>

Callback on map resize, resets the UI position when visible

</div>
</details>

<details><summary>onDomSizeChange()</summary>
<div>
<br/>

Callback when the DOM size changes, updates position and collision when visible

</div>
</details>

<details><summary>isSupportZoomFilter()</summary>
<div>
<br/>

Whether the marker supports dynamic show or hide filtering by zoom level

</div>
</details>

<details><summary>onConfig(config)</summary>
<div>
<br/>

Callback after config changes, updates position and re-runs collision when collision options change

Parameters:

* config `Record<string, any>`

</div>
</details>
