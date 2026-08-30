## Methods Inherited from Marker

<details><summary>getCoordinates()</summary>
<div>
<br/>

Gets the coordinates.

Returns:

* Coordinate

</div>
</details>

<details><summary>setCoordinates(coordinates)</summary>
<div>
<br/>

Sets the coordinates.

Parameters:

* coordinates **Number[]** | **Coordinate** The new coordinates

Returns:

* this

</div>
</details>

<details><summary>getFirstCoordinate()</summary>
<div>
<br/>

Gets the first coordinate.

Returns:

* Coordinate

</div>
</details>

<details><summary>getLastCoordinate()</summary>
<div>
<br/>

Gets the last coordinate.

Returns:

* Coordinate

</div>
</details>

<details><summary>addTo(layer)</summary>
<div>
<br/>

Adds the geometry to a layer.

Parameters:
* layer **Layer** The layer

Returns:

* this

</div>
</details>

<details><summary>getLayer()</summary>
<div>
<br/>

Gets the layer the geometry was added to.

Returns:

* Layer

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

Gets the map the geometry was added to.

Returns:

* Map

</div>
</details>

<details><summary>getId()</summary>
<div>
<br/>

Gets the id of the Geometry.

Returns:

* String | Number

</div>
</details>

<details><summary>setId(id)</summary>
<div>
<br/>

Sets a new id.

Parameters:

* id **Number** | **String** The new id

Returns:

* this

</div>
</details>

<details><summary>getProperties()</summary>
<div>
<br/>

Gets the properties data of the Geometry.

Returns:

* Object

</div>
</details>

<details><summary>setProperties(properties)</summary>
<div>
<br/>

Sets the properties data of the Geometry.

Parameters:

* properties **Object** The new properties data

Returns:

* this

</div>
</details>

<details><summary>getType()</summary>
<div>
<br/>

Gets the type of the Geometry.

Returns:

* String

</div>
</details>

<details><summary>getSymbol()</summary>
<div>
<br/>

Gets the symbol style of the Geometry.

Returns:

* Object

</div>
</details>

<details><summary>setSymbol(symbol)</summary>
<div>
<br/>

Sets a new symbol style for the Geometry.

Parameters:

* symbol **Object** The new style object

Returns:

* Object

</div>
</details>

<details><summary>updateSymbol(symbol)</summary>
<div>
<br/>

Updates the symbol style of the Geometry.

Parameters:

* symbol **Object** The symbol properties to update

Returns:

* Object

</div>
</details>

<details><summary>getCenter()</summary>
<div>
<br/>

Gets the geographic center of the Geometry.

Returns:

* Coordinate

</div>
</details>

<details><summary>getExtent()</summary>
<div>
<br/>

Gets the geographic extent of the Geometry.

Returns:

* Extent

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

Shows the Geometry.

Returns:

* this

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

Hides the Geometry.

Returns:

* this

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

Whether the Geometry is visible.

Returns:

* Boolean

</div>
</details>

<details><summary>getZIndex()</summary>
<div>
<br/>

Returns the zIndex of the Geometry.

Returns:

* Number

</div>
</details>

<details><summary>setZIndex(zIndex)</summary>
<div>
<br/>

Sets the zIndex of the Geometry.

Parameters:

* zIndex **Number** The zIndex of the Geometry

Returns:

* this

</div>
</details>

<details><summary>setZIndexSilently(zIndex)</summary>
<div>
<br/>

Sets the zIndex of the Geometry without triggering a redraw of the layer.
If the zIndex of many geometries needs to be updated, call setZIndexSilently to update them and call setZIndex on the last Geometry to trigger the layer redraw, which improves performance.

Parameters:

* zIndex **Number** The zIndex of the Geometry

Returns:

* this

</div>
</details>

<details><summary>translate(x, y)</summary>
<div>
<br/>

Moves the Geometry by the given x and y offsets.

Parameters:

* x **Number** The offset along the x axis
* y **Number** The offset along the y axis

Returns:

* this

</div>
</details>

<details><summary>flash(interval, count, cb, context)</summary>
<div>
<br/>

Flashes the Geometry by hiding and showing it at the given interval.

Parameters:

* interval **Number** The interval
* count **Number** The number of times
* cb **Function** The callback invoked after flashing ends
* context **Object** The this value used when the callback runs

Returns:

* this

</div>
</details>

<details><summary>copy()</summary>
<div>
<br/>

Copies a Geometry.

Returns:

* Geometry

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

Removes the Geometry from its layer.

Returns:

* this

</div>
</details>

<details><summary>toGeoJSONGeometry()</summary>
<div>
<br/>

Converts the Geometry to a GeoJSON geometry object.

Returns:

* Object

</div>
</details>

<details><summary>toGeoJSON(options)</summary>
<div>
<br/>

Converts the Geometry to a GeoJSON object.

Parameters:

* options **Object** Export options
* options.geometry **Boolean** Whether to export geometry, default is true
* options.properties **Boolean** Whether to export properties, default is true

Returns:

* Object

</div>
</details>

<details><summary>toJSON(options)</summary>
<div>
<br/>

Converts the Geometry to a JSON object.

The object can be used with Geometry.fromJSON(json) to create a Geometry object.

Parameters:

* options **Object** Export options
* options.geometry **Boolean** Whether to export geometry, default is true
* options.properties **Boolean** Whether to export properties, default is true
* options.options **Boolean** Whether to export the constructor options, default is true
* options.symbol **Boolean** Whether to export the symbol, default is true
* options.infoWindow **Boolean** Whether to export the InfoWindow settings, default is true

Returns:

* Object

</div>
</details>

<details><summary>getLength()</summary>
<div>
<br/>

Returns the geographic length of the Geometry.

Returns:

* Number

</div>
</details>

<details><summary>getArea()</summary>
<div>
<br/>

Returns the geographic area of the Geometry.

Returns:

* Number

</div>
</details>

<details><summary>rotate(angle, pivot)</summary>
<div>
<br/>

Rotates the Geometry by angle degrees around the pivot coordinate.

Parameters:

* angle* **Number** The rotation angle, in degrees
* pivot  **Coordinate** The center point of rotation

Returns:

* this

</div>
</details>

<details><summary>startEdit(options)</summary>
<div>
<br/>

Starts editing the geometry.

Parameters:

* options **Object** Edit options
* options.symbol **Object** The geometry style in the editing state
* options.fixAspectRatio  **Boolean** Whether to fix the aspect ratio of the geometry if it has a width and height
* options.centerHandleSymbol **Object** The style of the center drag handle (if any)
* options.vertexHandleSymbol **Object** The style of the vertex drag handle (if any)
* options.newVertexHandleSymbol **Object** The style of the new vertex handle (if any)
* options.centerHandleSymbol **Object** The style of the center drag handle (if any)

Returns:

* this

</div>
</details>

<details><summary>endEdit()</summary>
<div>
<br/>

Stops editing.

Returns:

* this

</div>
</details>

<details><summary>redoEdit()</summary>
<div>
<br/>

Redoes the last edit operation.

Returns:

* this

</div>
</details>

<details><summary>undoEdit()</summary>
<div>
<br/>

Undoes the last edit operation.

Returns:

* this

</div>
</details>

<details><summary>cancelEdit()</summary>
<div>
<br/>

Cancels editing and restores the geometry to its initial state.

Returns:

* this

</div>
</details>

<details><summary>isEditing()</summary>
<div>
<br/>

Whether the geometry is in the editing state.

Returns:

* this

</div>
</details>

<details><summary>isDragging()</summary>
<div>
<br/>

Whether the geometry is in the dragging state.

Returns:

* this

</div>
</details>

<details><summary>animate(styles, options, step)</summary>
<div>
<br/>

Runs an animation on the geometry with the given parameters.

Parameters:

* styles* **Object** The properties to animate, e.g. symbol or translate
* options **Object** Animation settings
* options.duration **Number** Duration in ms, default 1000
* options.startTime **Number** The time to start the animation
* options.easing **String** The animation easing type; see [animation-easings](https://github.com/fuzhenn/animation-easings) for details.
* options.repeat **Boolean** Whether to repeat after the animation ends

Returns:

* this

</div>
</details>

<details><summary>setInfoWindow(options)</summary>
<div>
<br/>

Sets an info window for the geometry.

Parameters:

* options **Object** Info window settings
* options.title **String** The info window title
* options.content **String** The info window content

For other settings, see the [InfoWindow](https://maptalks.org/maptalks.js/api/0.x/ui.InfoWindow.html) documentation and [examples](https://maptalks.org/examples/cn/ui-control/ui-custom-infownd/#ui-control_ui-custom-infownd)

Returns:

* this

</div>
</details>

<details><summary>getInfoWindow()</summary>
<div>
<br/>

Returns the InfoWindow instance of the Geometry.

Returns:

* InfoWindow

</div>
</details>

<details><summary>openInfoWindow(coordinates)</summary>
<div>
<br/>

Opens the info window of the geometry.

Parameters:

* coordinates **Coordiante | Number[]** Optional coordinates of the info window.

Returns:

* this

</div>
</details>

<details><summary>closeInfoWindow()</summary>
<div>
<br/>

Closes the InfoWindow.

Returns:

* this

</div>
</details>

<details><summary>removeInfoWindow()</summary>
<div>
<br/>

Removes the InfoWindow of the geometry.

Returns:

* this

</div>
</details>

<details><summary>setMenu(options)</summary>
<div>
<br/>

Sets a context menu for the geometry.

Parameters:

* options **Object** Menu settings
* options.width **Number** The menu width
* options.items **Object[]** The menu items
* options.items.item **String** The menu item title
* options.items.click **Function** The click handler

For other settings, see the [Menu](https://maptalks.org/maptalks.js/api/0.x/ui.Menu.html) documentation and [examples](https://maptalks.org/examples/cn/ui-control/ui-custom-menu/#ui-control_ui-custom-menu)

Returns:

* this

</div>
</details>

<details><summary>openMenu(coordinates)</summary>
<div>
<br/>

Opens the context menu of the geometry.

Parameters:

* coordinates **Coordiante | Number[]** Optional coordinates of the menu.

Returns:

* this

</div>
</details>

<details><summary>setMenuItems(items)</summary>
<div>
<br/>

Sets the menu items of the geometry's context menu.

Parameters:

* items **Object[]** The menu items
* items.item **String** The menu item title
* items.click **Function** The click handler

Returns:

* this

</div>
</details>

<details><summary>getMenuItems()</summary>
<div>
<br/>

Returns the menu items of the geometry's context menu.

Returns:

* Object[]

</div>
</details>

<details><summary>closeMenu()</summary>
<div>
<br/>

Closes the context menu.

Returns:

* this

</div>
</details>

<details><summary>removeMenu()</summary>
<div>
<br/>

Removes the context menu.

Returns:

* this

</div>
</details>


<details><summary>on(events, handler, context)</summary>
<div>
<br/>

Registers event listeners on the geometry.

Returns:

* this

</div>
</details>


<details><summary>addEventListener(events, handler, context)</summary>
<div>
<br/>

Same as the on method.

Returns:

* this

</div>
</details>


<details><summary>once(events, handler, context)</summary>
<div>
<br/>

Registers an event listener on the geometry that is removed after it responds once.

Returns:

* this

</div>
</details>


<details><summary>off(events, handler, context)</summary>
<div>
<br/>

Removes the registered event listeners of the geometry.

Returns:

* this

</div>
</details>


<details><summary>removeEventListener(events, handler, context)</summary>
<div>
<br/>

Same as the off method.

Returns:

* this

</div>
</details>


<details><summary>listens(events, handler, context)</summary>
<div>
<br/>

Whether the geometry listens to the given events.

Returns:

* Boolean

</div>
</details>


<details><summary>fire(event, params)</summary>
<div>
<br/>

Fires an event manually; params are the event parameters.

Returns:

* this

</div>
</details>


<details><summary>setOptions(options)</summary>
<div>
<br/>

Sets the geometry options.

Returns:

* this

</div>
</details>


<details><summary>config(key, value)</summary>
<div>
<br/>

Updates a geometry option.

Returns:

* this

</div>
</details>

<details><summary>getJSONType()</summary>
<div>
<br/>

Returns the JSON type registered by the geometry class.


Returns:

* String

</div>
</details>
