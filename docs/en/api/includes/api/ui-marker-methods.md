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

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>getAltitude()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Returns:

* `number`

</div>
</details>

<details><summary>setAltitude(alt)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

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

No prose description in source; parameters and return type come from the type signature.

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

No prose description in source; parameters and return type come from the type signature.

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

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>

<details><summary>isSupportZoomFilter()</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

</div>
</details>
