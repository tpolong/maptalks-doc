<details><summary>setCoordinates(coordinates)</summary>
<div>
<br/>

Sets coordinates of all child markers; a single Coordinate shifts them together.

Parameters:

* coordinates `Any`

</div>
</details>

<details><summary>getCoordinates(e)</summary>
<div>
<br/>

Get the coordinates of the child marker at the event index, or null without a valid event.

Parameters:

* e `Any`

</div>
</details>

<details><summary>addData(item)</summary>
<div>
<br/>

Adds a data item for a child marker and refreshes the layer marker map.

Parameters:

* item `Any`

</div>
</details>

<details><summary>removeData(index)</summary>
<div>
<br/>

Remove the data item at the given index and refresh the layer marker map.

Parameters:

* index `Any`

</div>
</details>

<details><summary>getData(idx)</summary>
<div>
<br/>

Returns the data item of the child marker at the given index.

Parameters:

* idx `Any`

</div>
</details>

<details><summary>updateData(idx, name, value)</summary>
<div>
<br/>

Set the named property of the data item at the given index and mark it dirty.

Parameters:

* idx `Any`
* name `Any`
* value `Any`

</div>
</details>

<details><summary>getAllData()</summary>
<div>
<br/>

Returns the data item array of all child markers.

</div>
</details>

<details><summary>updateAllData(name, value)</summary>
<div>
<br/>

Set one property for all child markers, taking each value from the given array.

Parameters:

* name `Any`
* value `Any`

</div>
</details>

<details><summary>removeAllData()</summary>
<div>
<br/>

Remove all data items of the child markers and mark the marker dirty.

</div>
</details>

<details><summary>openInfoWindow(index)</summary>
<div>
<br/>

Open the infoWindow at the coordinate of the given data item, else center

Parameters:

* index `Any`

</div>
</details>

<details><summary>getCenter()</summary>
<div>
<br/>

Compute the center by averaging the coordinates of all child markers.

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

Get the map the marker belongs to, falling back to the map of its layer.

</div>
</details>

<details><summary>getLayer()</summary>
<div>
<br/>

Returns the layer the marker belongs to.

</div>
</details>

<details><summary>getCount()</summary>
<div>
<br/>

Get the number of data items held by the marker.

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

Export to JSON with data, options and properties

</div>
</details>

<details><summary>getIndexByPickingId(pickingId)</summary>
<div>
<br/>

Returns the data item index by subtracting the base picking id from the picking id.

Parameters:

* pickingId `Any`

</div>
</details>

<details><summary>outline(idx)</summary>
<div>
<br/>

Enable outline for the data item at the given index

Parameters:

* idx `Any`

</div>
</details>

<details><summary>cancelOutline(idx)</summary>
<div>
<br/>

Turn off the outline of the data item at the given index.

Parameters:

* idx `Any`

</div>
</details>

<details><summary>isOutline()</summary>
<div>
<br/>

Check whether any data item has outline enabled

</div>
</details>

<details><summary>highlightNodes(index, highlights)</summary>
<div>
<br/>

Highlight the given nodes of a data item by nodeIndex

Parameters:

* index `Any`
* highlights `Any`

</div>
</details>

<details><summary>highlight(index, highlight)</summary>
<div>
<br/>

Highlight the data item at the given index with color and opacity

Parameters:

* index `Any`
* highlight `Any`

</div>
</details>

<details><summary>cancelHighlight(index, nodes)</summary>
<div>
<br/>

Cancel the highlight of a data item, optionally limited to the given node

Parameters:

* index `Any`
* nodes `Any`

</div>
</details>

<details><summary>zoomAt(index, options = { animation: true, zoomOffset: 0 }, step)</summary>
<div>
<br/>

set transltion, rotation and scale for specific node

Parameters:

* index `Any`
* options = { animation: true, zoomOffset: 0 } `Any`
* step `Any`

Returns:

* `Any` this

</div>
</details>
