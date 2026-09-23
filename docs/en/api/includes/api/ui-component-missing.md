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
