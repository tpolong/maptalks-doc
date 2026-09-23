<details><summary>buildOn()</summary>
<div>
<br/>

method to build DOM of the control

Returns:

* `HTMLDOMElement`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Bind button mouseover to show and panel mouseleave to hide when added

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Unbind the events and remove the panel and button DOM nodes with their references

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Bind button mouseover to show and panel mouseleave to hide when added

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Unbind the events and remove the panel and button DOM nodes with their references

</div>
</details>

<details><summary>addTo(map)</summary>
<div>
<br/>

Adds the control to a map.

Parameters:

* map `Map`

Returns:

* `control.Control` this

Fires:

* `control.Control#add`

</div>
</details>

<details><summary>update()</summary>
<div>
<br/>

update control container

Returns:

* `control.Control` this

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

Get the map that the control is added to.

Returns:

* `Map`

</div>
</details>

<details><summary>getPosition()</summary>
<div>
<br/>

Get the position of the control

Returns:

* `Object`

</div>
</details>

<details><summary>setPosition(position)</summary>
<div>
<br/>

update the control's position

Parameters:

* position `ControlPositionType` can be one of 'top-left', 'top-right', 'bottom-left', 'bottom-right' or a position object like &#123;'top': 40,'left': 60&#125;

Returns:

* `control.Control` this

Fires:

* `control.Control#positionchange`

</div>
</details>

<details><summary>getContainerPoint()</summary>
<div>
<br/>

Get the container point of the control.

Returns:

* `Point`

</div>
</details>

<details><summary>getContainer()</summary>
<div>
<br/>

Get the control's container.
Container is a div element wrapping the control's dom and decides the control's position and display.

Returns:

* `HTMLElement`

</div>
</details>

<details><summary>getDOM()</summary>
<div>
<br/>

Get html dom element of the control

Returns:

* `HTMLElement`

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

Show

Returns:

* `control.Control` this

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

Hide

Returns:

* `control.Control` this

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

Whether the control is visible

Returns:

* `Boolean`

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

Remove itself from the map

Returns:

* `control.Control` this

Fires:

* `control.Control#remove`

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Inherited from Control, it updates the control position when position changes

Parameters:

* conf `ClassOptions`

</div>
</details>
