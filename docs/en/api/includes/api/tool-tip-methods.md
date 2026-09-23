<details><summary>addTo(owner)</summary>
<div>
<br/>

Adds the UI Component to a geometry UIMarker Other graphic elements

Parameters:

* owner `Geometry` geometry to add.

Returns:

* `UIComponent` this

Fires:

* `UIComponent#add`

</div>
</details>

<details><summary>setStyle(cssName)</summary>
<div>
<br/>

set ToolTip's content's css class name.

Parameters:

* cssName `string` set for ToolTip's content.

</div>
</details>

<details><summary>getStyle()</summary>
<div>
<br/>

get ToolTip's  content's css class name

Returns:

* `String` css class name - set for ToolTip's content.

</div>
</details>

<details><summary>getContent()</summary>
<div>
<br/>

get the UI Component's content

Returns:

* `String` tooltip's content

</div>
</details>

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
