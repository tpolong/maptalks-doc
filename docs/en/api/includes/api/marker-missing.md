<details><summary>getFirstCoordinate()</summary>
<div>
<br/>

Returns the first coordinate of the geometry.

Returns:

* `Coordinate` First Coordinate

</div>
</details>

<details><summary>getLastCoordinate()</summary>
<div>
<br/>

Returns the last coordinate of the geometry.

Returns:

* `Coordinate` Last Coordinate

</div>
</details>

<details><summary>getLayer()</summary>
<div>
<br/>

Get the layer which this geometry added to.

Returns:

* `Layer` - layer added to

</div>
</details>

<details><summary>getType()</summary>
<div>
<br/>

Get type of the geometry, e.g. "Point", "LineString"

Returns:

* `String` type of the geometry

</div>
</details>

<details><summary>getSymbolHash()</summary>
<div>
<br/>

Get symbol's hash code

Returns:

* `String`

</div>
</details>

<details><summary>updateSymbol(props)</summary>
<div>
<br/>

Update geometry's current symbol.

Parameters:

* props `any` symbol properties to update

Returns:

* `Geometry` this

Fires:

* `Geometry#symbolchange`

</div>
</details>

<details><summary>getTextContent()</summary>
<div>
<br/>

Get geometry's text content if it has

Returns:

* `String`

</div>
</details>

<details><summary>getTextDesc()</summary>
<div>
<br/>

Returns the cached text description computed from the text content and sizeSymbol.

Returns:

* `any`

</div>
</details>

<details><summary>getContainerExtent(out?)</summary>
<div>
<br/>

Get geometry's screen extent in pixel

Parameters:

* out (optional) `PointExtent`

Returns:

* `PointExtent`

</div>
</details>

<details><summary>get2DExtent()</summary>
<div>
<br/>

Returns the geometry's 2D extent at the current zoom, or null when there is no map.

Returns:

* `PointExtent`

</div>
</details>

<details><summary>getSize()</summary>
<div>
<br/>

Get pixel size of the geometry, which may vary in different zoom levels.

Returns:

* `Size`

</div>
</details>

<details><summary>containsPoint(containerPoint, t?)</summary>
<div>
<br/>

Whehter the geometry contains the input container point.

Parameters:

* containerPoint `Point` input container point or coordinate
* t (optional) `number` =undefined] - tolerance in pixel

Returns:

* `Boolean`

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

Whether the geometry is visible

Returns:

* `Boolean`

</div>
</details>

<details><summary>symbolIsVisible()</summary>
<div>
<br/>

Whether the geometry symbol is visible

Returns:

* `Boolean`

</div>
</details>

<details><summary>getZIndex()</summary>
<div>
<br/>

Get zIndex of the geometry, default is 0

Returns:

* `Number` zIndex

</div>
</details>

<details><summary>setZIndex(zIndex)</summary>
<div>
<br/>

Set a new zIndex to Geometry and fire zindexchange event (will cause layer to sort geometries and render)

Parameters:

* zIndex `number` new zIndex

Returns:

* `Geometry` this

Fires:

* `Geometry#zindexchange`

</div>
</details>

<details><summary>setZIndexSilently(zIndex)</summary>
<div>
<br/>

Only set a new zIndex to Geometry without firing zindexchange event. <br/>
Can be useful to improve perf when a lot of geometries' zIndex need to be updated. <br/>
When updated N geometries, You can use setZIndexSilently with (N-1) geometries and use setZIndex with the last geometry for layer to sort and render.

Parameters:

* zIndex `number` new zIndex

Returns:

* `Geometry` this

</div>
</details>

<details><summary>bringToFront()</summary>
<div>
<br/>

Bring the geometry on the top

Returns:

* `Geometry` this

Fires:

* `Geometry#zindexchange`

</div>
</details>

<details><summary>bringToBack()</summary>
<div>
<br/>

Bring the geometry to the back

Returns:

* `Geometry` this

Fires:

* `Geometry#zindexchange`

</div>
</details>

<details><summary>flash(interval?, count?, cb?)</summary>
<div>
<br/>

Flash the geometry, show and hide by certain internal for times of count.

Parameters:

* interval (optional) `number` =100]     - interval of flash, in millisecond (ms)
* count (optional) `number` =4]          - flash times
* cb (optional) `() => void, context: any` =null]        - callback function when flash ended

Returns:

* `Geometry` this

</div>
</details>

<details><summary>copy()</summary>
<div>
<br/>

Returns a copy of the geometry without the event listeners.

Returns:

* `Geometry` copy

</div>
</details>

<details><summary>toGeoJSONGeometry()</summary>
<div>
<br/>

Exports [geometry](http://geojson.org/geojson-spec.html#feature-objects) out of a GeoJSON feature.

Returns:

* `Object` GeoJSON Geometry

</div>
</details>

<details><summary>getLength()</summary>
<div>
<br/>

Get the geographic length of the geometry.

Returns:

* `Number` geographic length, unit is meter

</div>
</details>

<details><summary>getArea()</summary>
<div>
<br/>

Get the geographic area of the geometry.

Returns:

* `Number` geographic area, unit is sq.meter

</div>
</details>

<details><summary>rotate(angle, pivot?)</summary>
<div>
<br/>

Rotate the geometry of given angle around a pivot point

Parameters:

* angle `number` angle to rotate in degree
* pivot (optional) `Coordinate` =null]  - optional, will be the geometry's center by default

Returns:

* `Geometry` this

</div>
</details>

<details><summary>isRotated()</summary>
<div>
<br/>

Whether both a rotation angle and a rotation center are set on the geometry.

Returns:

* `boolean`

</div>
</details>

<details><summary>onHide()</summary>
<div>
<br/>

Lifecycle callback when the geometry is hidden; it closes any open menu and infoWindow.

</div>
</details>

<details><summary>onShapeChanged()</summary>
<div>
<br/>

Lifecycle callback on shape change; it clears caches, repaints and fires shapechange.

</div>
</details>

<details><summary>onSymbolChanged()</summary>
<div>
<br/>

Lifecycle callback on symbol change; it refreshes symbols, rebuilds sizeSymbol and fires events.

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Lifecycle callback after config updates options; it syncs properties and repaints when needed.

Parameters:

* conf `any`

</div>
</details>

<details><summary>getAltitude()</summary>
<div>
<br/>

Returns the geometry altitude from properties or coordinate z, or 0 when unset.

Returns:

* `number | number[] | number[][]`

</div>
</details>

<details><summary>hasAltitude()</summary>
<div>
<br/>

Whether the geometry has any altitude in its coordinates or properties.

Returns:

* `boolean`

</div>
</details>

<details><summary>setAltitude(alt)</summary>
<div>
<br/>

Sets the geometry altitude and updates the z value of its coordinates.

Parameters:

* alt `number`

Returns:

* `this`

</div>
</details>

<details><summary>getMinAltitude()</summary>
<div>
<br/>

Returns the minimum altitude among all coordinates of the geometry.

Returns:

* `number`

</div>
</details>

<details><summary>getMaxAltitude()</summary>
<div>
<br/>

Returns the maximum altitude among all coordinates of the geometry.

Returns:

* `number`

</div>
</details>

<details><summary>getHoles()</summary>
<div>
<br/>

Returns the hole coordinate arrays of a polygon, implemented by polygon geometries only.

Returns:

* `Array<Array<Coordinate>>`

</div>
</details>

<details><summary>getShell()</summary>
<div>
<br/>

Returns the coordinate ring of the geometry's outer shell, implemented by some subclasses only.

Returns:

* `Array<Coordinate>`

</div>
</details>

<details><summary>getGeometries()</summary>
<div>
<br/>

Returns the child geometries of a collection, implemented by collection classes only.

Returns:

* `Geometry[]`

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Lifecycle callback invoked when the geometry is removed from its layer, called internally.

</div>
</details>

<details><summary>getRotateOffsetAngle()</summary>
<div>
<br/>

Returns the angle offset used when rotating around the center, implemented only by Sector.

Returns:

* `number`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Lifecycle callback invoked after the geometry is added to a layer, called internally.

</div>
</details>
