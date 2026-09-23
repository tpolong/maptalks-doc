<details><summary>addTo(owner)</summary>
<div>
<br/>

Adds the UI Component to a geometry or a map

Parameters:

* owner `Geometry | Map` geometry or map to addto.

Returns:

* `UIComponent` this

Fires:

* `UIComponent#add`

</div>
</details>

<details><summary>setContent(content)</summary>
<div>
<br/>

Set the content of the infowindow.

Parameters:

* content `string | HTMLElement` content of the infowindow. return &#123;InfoWindow&#125; this

Fires:

* `InfoWindow#contentchange`

</div>
</details>

<details><summary>getContent()</summary>
<div>
<br/>

Get content of  the infowindow.

Returns:

* `String|HTMLElement` - content of the infowindow

</div>
</details>

<details><summary>setTitle(title)</summary>
<div>
<br/>

Set the title of the infowindow.

Parameters:

* title `string` title of the infowindow. return &#123;InfoWindow&#125; this

Fires:

* `InfoWindow#titlechange`

</div>
</details>

<details><summary>getTitle()</summary>
<div>
<br/>

Get title of  the infowindow.

Returns:

* `String|HTMLElement` - content of the infowindow

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

<details><summary>getOffset()</summary>
<div>
<br/>

Gets the info window pixel offset from its alignment options and marker size.

</div>
</details>

<details><summary>show(coordinate)</summary>
<div>
<br/>

Shows the info window at the given coordinate, skipped without a map or when info windows are disabled.

Parameters:

* coordinate `Coordinate`

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
