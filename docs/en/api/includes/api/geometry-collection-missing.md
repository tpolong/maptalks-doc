<details><summary>getContainerExtent(out?)</summary>
<div>
<br/>

Returns the union of the container extents of all geometries in the collection.

Parameters:

* out (optional) `PointExtent`

Returns:

* `PointExtent`

</div>
</details>

<details><summary>onConfig(config?)</summary>
<div>
<br/>

Applies the config change to every geometry in the collection.

Parameters:

* config (optional) `string | Record<string, any>`

</div>
</details>

<details><summary>undoEditcheck()</summary>
<div>
<br/>

Whether the edits of all child geometries have been fully undone.

Returns:

* `boolean`

</div>
</details>

<details><summary>redoEditcheck()</summary>
<div>
<br/>

Whether the edits of all child geometries have been fully redone.

Returns:

* `boolean`

</div>
</details>

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

<details><summary>addTo(layer, fitview?)</summary>
<div>
<br/>

Adds the geometry to a layer

Parameters:

* layer `OverlayLayer` layer add to
* fitview (optional) `boolean | addGeometryFitViewOptions` =false] - automatically set the map to a fit center and zoom for the geometry

Returns:

* `Geometry` this

Fires:

* `Geometry#add`

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

<details><summary>getMap()</summary>
<div>
<br/>

Get the map which this geometry added to

Returns:

* `Map` - map added to

</div>
</details>

<details><summary>getId()</summary>
<div>
<br/>

Gets geometry's id. Id is set by setId or constructor options.

Returns:

* `String|Number` geometry的id

</div>
</details>

<details><summary>setId(id)</summary>
<div>
<br/>

Set geometry's id.

Parameters:

* id `string` new id

Returns:

* `Geometry` this

Fires:

* `Geometry#idchange`

</div>
</details>

<details><summary>getProperties()</summary>
<div>
<br/>

Get geometry's properties. Defined by GeoJSON as [feature's properties](http://geojson.org/geojson-spec.html#feature-objects).

Returns:

* `Object` properties

</div>
</details>

<details><summary>setProperties(properties)</summary>
<div>
<br/>

Set a new properties to geometry.

Parameters:

* properties `{ [key: string]: any }` new properties

Returns:

* `Geometry` this

Fires:

* `Geometry#propertieschange`

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

Returns the cached text description built from symbol textName and properties

Returns:

* `any`

</div>
</details>

<details><summary>getCenter()</summary>
<div>
<br/>

Get the geographical center of the geometry.

Returns:

* `Coordinate`

</div>
</details>

<details><summary>getExtent()</summary>
<div>
<br/>

Get the geometry's geographical extent

Returns:

* `Extent` geometry's extent

</div>
</details>

<details><summary>getContainerExtent(out?)</summary>
<div>
<br/>

Returns the union of the container extents of all geometries in the collection.

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

<details><summary>toGeoJSON(opts?)</summary>
<div>
<br/>

Exports a GeoJSON feature.

Parameters:

* opts (optional) `{ [key: string]: any }` =null]              - export options

Returns:

* `Object` GeoJSON Feature

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

Export a profile json out of the geometry. <br/>
Besides exporting the feature object, a profile json also contains symbol, construct options and infowindow info.<br/>
The profile json can be stored somewhere else and be used to reproduce the geometry later.<br/>
Due to the problem of serialization for functions, event listeners and contextmenu are not included in profile json.

Parameters:

* options (optional) `{ [key: string]: any }` =null]          - export options

Returns:

* `Object` profile json object

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

Whether the geometry has been rotated with both an angle and a pivot

Returns:

* `boolean`

</div>
</details>

<details><summary>onHide()</summary>
<div>
<br/>

Lifecycle callback when the geometry is hidden; it closes any open menu and info window.

</div>
</details>

<details><summary>onShapeChanged()</summary>
<div>
<br/>

Lifecycle callback on shape change; it clears caches, repaints and fires shapechange.

</div>
</details>

<details><summary>onPositionChanged()</summary>
<div>
<br/>

Lifecycle callback on position change; it clears caches, repaints and fires positionchange.

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

Applies the config change to every geometry in the collection.

Parameters:

* conf `any`

</div>
</details>

<details><summary>getAltitude()</summary>
<div>
<br/>

Returns the geometry altitude from properties or coordinate z, 0 when absent

Returns:

* `number | number[] | number[][]`

</div>
</details>

<details><summary>hasAltitude()</summary>
<div>
<br/>

Whether the geometry has a non-zero altitude

Returns:

* `boolean`

</div>
</details>

<details><summary>setAltitude(alt)</summary>
<div>
<br/>

Sets the geometry altitude and updates the z value of its coordinates

Parameters:

* alt `number`

Returns:

* `this`

</div>
</details>

<details><summary>getMinAltitude()</summary>
<div>
<br/>

Returns the minimum altitude among the geometry coordinates

Returns:

* `number`

</div>
</details>

<details><summary>getMaxAltitude()</summary>
<div>
<br/>

Returns the maximum altitude among the geometry coordinates

Returns:

* `number`

</div>
</details>

<details><summary>getHoles()</summary>
<div>
<br/>

Returns hole ring coordinates of the geometry; optional member implemented by polygon-like subclasses only.

Returns:

* `Array<Array<Coordinate>>`

</div>
</details>

<details><summary>getShell()</summary>
<div>
<br/>

Returns the shell ring coordinates of the geometry; optional member implemented by polygon-like subclasses only.

Returns:

* `Array<Coordinate>`

</div>
</details>

<details><summary>getCoordinates()</summary>
<div>
<br/>

Returns the geometry coordinates; optional member implemented by point, line and polygon subclasses only.

Returns:

* `Coordinate | Array<Coordinate> | Array<Array<Coordinate>> | Array<Array<Array<Coordinate>>>`

</div>
</details>

<details><summary>setCoordinates(coordinate)</summary>
<div>
<br/>

Sets geometry coordinates and fires shapechange; point, line and polygon subclasses implement it.

Parameters:

* coordinate `any`

Returns:

* `this`

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Optional lifecycle callback when the geometry is removed from a layer; not implemented by collections.

</div>
</details>

<details><summary>getRotateOffsetAngle()</summary>
<div>
<br/>

Returns the rotation offset angle; optional member implemented only by shapes like sector

Returns:

* `number`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Optional lifecycle callback when the geometry is added to a layer; not implemented by collections.

</div>
</details>
