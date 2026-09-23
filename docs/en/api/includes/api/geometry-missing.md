<details><summary>getType()</summary>
<div>
<br/>

Get type of the geometry, e.g. "Point", "LineString"

Returns:

* `String` type of the geometry

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

<details><summary>toGeoJSONGeometry()</summary>
<div>
<br/>

Exports [geometry](http://geojson.org/geojson-spec.html#feature-objects) out of a GeoJSON feature.

Returns:

* `Object` GeoJSON Geometry

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

Lifecycle callback on shape change; it clears caches, redraws and fires shapechange.

</div>
</details>

<details><summary>onPositionChanged()</summary>
<div>
<br/>

Lifecycle callback on position change; it clears caches, redraws and fires positionchange.

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

Lifecycle callback after config updates options; it syncs properties and redraws when needed.

Parameters:

* conf `any`

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

Returns the hole coordinate rings of the geometry, implemented by some subclasses only.

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

Returns the child geometries of a collection, implemented only by collection subclasses.

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

Returns the angle offset used when rotating around the center, currently implemented only by Sector.

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
