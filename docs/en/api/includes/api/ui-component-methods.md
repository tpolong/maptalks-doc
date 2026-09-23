<details><summary>onAdd()</summary>
<div>
<br/>

Callback hook invoked when the UI component is added, implemented by subclasses

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Callback hook invoked when the UI component is removed, implemented by subclasses

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

Callback hook invoked when the UI's DOM element is removed, implemented by subclasses

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

Returns the event map the component itself listens to, subclasses may override it

</div>
</details>

<details><summary>getOwnerEvents()</summary>
<div>
<br/>

Returns the event map to be bound on the owner, subclasses may override it

</div>
</details>

<details><summary>buildOn()</summary>
<div>
<br/>

Creates and returns the UI's DOM element, must be implemented by subclasses

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

Get the owner the UI component is mounted on, a map or a geometry

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

Get the UI pixel position in the map container, including the getOffset shift

</div>
</details>

<details><summary>onGeometryPositionChange(param)</summary>
<div>
<br/>

Callback when the owner geometry moves, refreshes the UI at its new center

Parameters:

* param `Any`

</div>
</details>

<details><summary>onMoving()</summary>
<div>
<br/>

Callback on map moving and moveend, updates the UI position

</div>
</details>

<details><summary>onEvent()</summary>
<div>
<br/>

Callback during map zooming, rotating and pitching, updates the UI position

</div>
</details>

<details><summary>onZoomEnd()</summary>
<div>
<br/>

Callback when map zooming ends, resets the UI's DOM position immediately

</div>
</details>

<details><summary>onResize()</summary>
<div>
<br/>

Callback when the map container is resized, resets the UI's DOM position

</div>
</details>

<details><summary>onDomSizeChange()</summary>
<div>
<br/>

Callback when the DOM size changes, resets the position and recalculates collision

</div>
</details>

<details><summary>isSupportZoomFilter()</summary>
<div>
<br/>

Whether DOM display can be filtered by zoom, the base class returns false

</div>
</details>

<details><summary>onConfig(config)</summary>
<div>
<br/>

Callback after options change, refreshes position and re-sorts on collision state change

Parameters:

* config `Record<string, any>`

</div>
</details>
