<details><summary>buildOn()</summary>
<div>
<br/>

Create the tooltip DOM element, calling content with the dom when it is a function

</div>
</details>

<details><summary>onMouseOut()</summary>
<div>
<br/>

Clears the show timer, removes the tooltip DOM and unbinds map events on mouse out

</div>
</details>

<details><summary>onMouseMove(e)</summary>
<div>
<br/>

Shows the tooltip after the showTimeout delay when the mouse moves over the geometry

Parameters:

* e `Any`

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Clears pending timers and unbinds the mouse events on the owner geometry when the tooltip is removed.

</div>
</details>

<details><summary>hideDom()</summary>
<div>
<br/>

Hide the DOM element of the tooltip

</div>
</details>

<details><summary>onEvent()</summary>
<div>
<br/>

Update the position and hide the tooltip while the map zooms, rotates or pitches

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Optional callback hook invoked after the UI component is added, implemented by subclasses

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Clears pending timers and unbinds the mouse events on the owner geometry when the tooltip is removed.

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

Optional callback hook invoked when the UI dom node is removed, implemented by subclasses

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

Return the event map the component listens to on the map, overridden by subclasses

</div>
</details>

<details><summary>getOwnerEvents()</summary>
<div>
<br/>

Return the event map to bind on the owner, overridden by subclasses

</div>
</details>

<details><summary>buildOn()</summary>
<div>
<br/>

Create the tooltip DOM element, calling content with the dom when it is a function

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

Get the owner the UI component is added to, either a map or a geometry

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

Get the UI pixel position relative to the map container, including the getOffset shift

</div>
</details>

<details><summary>onGeometryPositionChange(param)</summary>
<div>
<br/>

Refreshes the tooltip at the owner geometry's new center when its position changes

Parameters:

* param `Any`

</div>
</details>

<details><summary>onMoving()</summary>
<div>
<br/>

Updates the tooltip position while the map is moving and after moveend

</div>
</details>

<details><summary>onEvent()</summary>
<div>
<br/>

Update the position and hide the tooltip while the map zooms, rotates or pitches

</div>
</details>

<details><summary>onZoomEnd()</summary>
<div>
<br/>

Resets the tooltip DOM position immediately when map zooming ends

</div>
</details>

<details><summary>onResize()</summary>
<div>
<br/>

Resets the tooltip DOM position when the map container is resized

</div>
</details>

<details><summary>onDomSizeChange()</summary>
<div>
<br/>

Callback when the dom size changes, it resets the position and recomputes the collision

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

Callback on option change that updates the position and re-sorts on collision changes

Parameters:

* config `Record<string, any>`

</div>
</details>
