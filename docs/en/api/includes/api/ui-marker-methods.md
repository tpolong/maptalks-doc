<details><summary>setCoordinates(coordinates)</summary>
<div>
<br/>

Sets the coordinates

Parameters:

* coordinates `Coordinate` UIMarker's coordinate

Returns:

* `UIMarker` this

Fires:

* `UIMarker#positionchange`

</div>
</details>

<details><summary>getCoordinates()</summary>
<div>
<br/>

Gets the coordinates

Returns:

* `Coordinate` coordinates

</div>
</details>

<details><summary>getCenter()</summary>
<div>
<br/>

Get the UIMarker center coordinate, the same as getCoordinates

</div>
</details>

<details><summary>getAltitude()</summary>
<div>
<br/>

Get the UIMarker altitude from the coordinate z, falling back to options.altitude

Returns:

* `number`

</div>
</details>

<details><summary>setAltitude(alt)</summary>
<div>
<br/>

Set the UIMarker altitude and update its position

Parameters:

* alt `number`

</div>
</details>

<details><summary>setContent(content)</summary>
<div>
<br/>

Sets the content of the UIMarker

Parameters:

* content `string | HTMLElement` UIMarker's content

Returns:

* `UIMarker` this

Fires:

* `UIMarker#contentchange`

</div>
</details>

<details><summary>getContent()</summary>
<div>
<br/>

Gets the content of the UIMarker

Returns:

* `String|HTMLElement` content

</div>
</details>

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

<details><summary>flash(interval?, count?, cb?)</summary>
<div>
<br/>

Flash the UIMarker, show and hide by certain internal for times of count.

Parameters:

* interval (optional) `number` =100]     - interval of flash, in millisecond (ms)
* count (optional) `number` =4]          - flash times
* cb (optional) `(arg: any) => void, context?: any` =null]        - callback function when flash ended

Returns:

* `UIMarker` this

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

Called when the DOM is removed, unbinds the DOM events registered on the marker

</div>
</details>

<details><summary>isDragging()</summary>
<div>
<br/>

Whether the uimarker is being dragged.

Returns:

* `Boolean`

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
