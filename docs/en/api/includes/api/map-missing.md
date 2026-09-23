<details><summary>onConfig(conf)</summary>
<div>
<br/>

Callback when any option is updated

Parameters:

* conf `{ [key: string]: any }` options to update

Returns:

* `Map` this

</div>
</details>

<details><summary>setCursor(cursor)</summary>
<div>
<br/>

Set map's cursor style, cursor style is same with CSS.

Parameters:

* cursor `string` cursor style

Returns:

* `Map` this

</div>
</details>

<details><summary>resetCursor()</summary>
<div>
<br/>

Reset map's cursor style.

Returns:

* `Map` this

</div>
</details>

<details><summary>getGroundExtent()</summary>
<div>
<br/>

get Ground Extent for sky ,line ,polygon 2d render clip etc

Returns:

* `PointExtent`

</div>
</details>

<details><summary>getProjExtent()</summary>
<div>
<br/>

Get the projected geographical extent of map's current view extent.

Returns:

* `Extent`

</div>
</details>

<details><summary>getPrjExtent()</summary>
<div>
<br/>

Alias for getProjExtent

Returns:

* `Extent`

</div>
</details>

<details><summary>getZoomForScale(scale, fromZoom?, isFraction?)</summary>
<div>
<br/>

Caculate the target zoom if scaling from "fromZoom" by "scale"

Parameters:

* scale `number`
* fromZoom (optional) `number`
* isFraction (optional) `boolean` can return fractional zoom

Returns:

* `Number` zoom fit for scale starting from fromZoom

</div>
</details>

<details><summary>getZoomFromRes(res)</summary>
<div>
<br/>

Get the zoom for a resolution, clamped to minZoom and maxZoom

Parameters:

* res `number`

Returns:

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

Get the max zoom that the map can be zoom to.

Returns:

* `Number`

</div>
</details>

<details><summary>setMaxZoom(maxZoom)</summary>
<div>
<br/>

Sets the max zoom that the map can be zoom to.

Parameters:

* maxZoom `number`

Returns:

* `Map` this

</div>
</details>

<details><summary>getMinZoom()</summary>
<div>
<br/>

Get the min zoom that the map can be zoom to.

Returns:

* `Number`

</div>
</details>

<details><summary>setMinZoom(minZoom)</summary>
<div>
<br/>

Sets the min zoom that the map can be zoom to.

Parameters:

* minZoom `number`

Returns:

* `Map` this

</div>
</details>

<details><summary>getMaxNativeZoom()</summary>
<div>
<br/>

Maximum zoom the map has

Returns:

* `Number`

</div>
</details>

<details><summary>getGLRes()</summary>
<div>
<br/>

Resolution for world point in WebGL context

Returns:

* `Number`

</div>
</details>

<details><summary>getGLScale(zoom?)</summary>
<div>
<br/>

Caculate scale from gl zoom to given zoom (default by current zoom)

Parameters:

* zoom (optional) `number` =undefined] target zoom, current zoom by default

Returns:

* `Number`

</div>
</details>

<details><summary>isInteracting()</summary>
<div>
<br/>

Whether the map is being interacted

Returns:

* `Boolean`

</div>
</details>

<details><summary>getFitZoom(extent, isFraction?, padding?)</summary>
<div>
<br/>

Caculate the zoom level that contains the given extent with the maximum zoom level possible.

Parameters:

* extent `Extent`
* isFraction (optional) `boolean` can return fractional zoom
* padding (optional) `MapPaddingType` [padding] - padding

Returns:

* `Number` zoom fit for scale starting from fromZoom

</div>
</details>

<details><summary>stringifyView()</summary>
<div>
<br/>

Serialize the current map view into a JSON string

</div>
</details>

<details><summary>getScale(zoom?)</summary>
<div>
<br/>

Get scale of resolutions from zoom to max zoom

Parameters:

* zoom (optional) `number` zoom or current zoom if not given

Returns:

* `Number` scale

</div>
</details>

<details><summary>fitExtent(extent, zoomOffset?, options?, step?)</summary>
<div>
<br/>

Set the map to be fit for the given extent with the max zoom level possible.

Parameters:

* extent `ExtentLike` extent
* zoomOffset (optional) `number` zoom offset
* options (optional) `MapFitType` =&#123;&#125;] - options
* step (optional) `(frame) => void` step function for animation

Returns:

* `Map | player` - this

</div>
</details>

<details><summary>coordToPoint(coordinate, zoom?, out?)</summary>
<div>
<br/>

shorter alias for coordinateToPoint

Parameters:

* coordinate `Coordinate`
* zoom (optional) `number`
* out (optional) `Point`

</div>
</details>

<details><summary>coordToPointAtRes(coordinate, res?, out?)</summary>
<div>
<br/>

shorter alias for coordinateToPointAtRes

Parameters:

* coordinate `Coordinate`
* res (optional) `number`
* out (optional) `Point`

</div>
</details>

<details><summary>pointToCoord(point, zoom?, out?)</summary>
<div>
<br/>

shorter alias for pointToCoordinate

Parameters:

* point `Point`
* zoom (optional) `number`
* out (optional) `Coordinate`

</div>
</details>

<details><summary>pointAtResToCoord(point, res?, out?)</summary>
<div>
<br/>

shorter alias for pointAtResToCoordinate

Parameters:

* point `Point`
* res (optional) `number`
* out (optional) `Coordinate`

</div>
</details>

<details><summary>coordToViewPoint(coordinate, out?, altitude?)</summary>
<div>
<br/>

shorter alias for coordinateToViewPoint

Parameters:

* coordinate `Coordinate`
* out (optional) `Point`
* altitude (optional) `number`

</div>
</details>

<details><summary>viewPointToCoord(viewPoint, out?)</summary>
<div>
<br/>

shorter alias for viewPointToCoordinate

Parameters:

* viewPoint `Point`
* out (optional) `Coordinate`

</div>
</details>

<details><summary>coordToContainerPoint(coordinate, zoom?, out?)</summary>
<div>
<br/>

shorter alias for coordinateToContainerPoint

Parameters:

* coordinate `Coordinate`
* zoom (optional) `number`
* out (optional) `Point`

</div>
</details>

<details><summary>containerPointToCoord(containerPoint, out?)</summary>
<div>
<br/>

shorter alias for containerPointToCoordinate

Parameters:

* containerPoint `Point`
* out (optional) `Coordinate`

</div>
</details>

<details><summary>containerPointToViewPoint(containerPoint, out?)</summary>
<div>
<br/>

Converts a container point to the view point.
Usually used in plugin development.

Parameters:

* containerPoint `Point`
* out (optional) `Point` =undefined]    - optional point to receive result

Returns:

* `Point`

</div>
</details>

<details><summary>viewPointToContainerPoint(viewPoint, out?)</summary>
<div>
<br/>

Converts a view point to the container point.
Usually used in plugin development.

Parameters:

* viewPoint `Point`
* out (optional) `Point` =undefined]    - optional point to receive result

Returns:

* `Point`

</div>
</details>

<details><summary>locate(coordinate, dx, dy)</summary>
<div>
<br/>

Computes the coordinate from the given meter distance.

Parameters:

* coordinate `Coordinate` source coordinate
* dx `number` meter distance on X axis
* dy `number` meter distance on Y axis

Returns:

* `Coordinate` Result coordinate

</div>
</details>

<details><summary>getMainPanel()</summary>
<div>
<br/>

Return map's main panel

Returns:

* `HTMLElement`

</div>
</details>

<details><summary>getPanels()</summary>
<div>
<br/>

Returns map panels.

Returns:

* `Object`

</div>
</details>

<details><summary>onMoving(param)</summary>
<div>
<br/>

Moving callback firing the moving event and limiting max extent

Parameters:

* param `Any`

</div>
</details>

<details><summary>onMoveEnd(param)</summary>
<div>
<br/>

Move end callback firing moveend and resetting cursor and center

Parameters:

* param `Any`

</div>
</details>

<details><summary>onDragRotateStart(param)</summary>
<div>
<br/>

Set the drag rotating flag and fire the dragrotatestart event

Parameters:

* param `Any`

</div>
</details>

<details><summary>onDragRotating(param)</summary>
<div>
<br/>

Fire the dragrotating event while the map is drag rotated

Parameters:

* param `Any`

</div>
</details>

<details><summary>onDragRotateEnd(param)</summary>
<div>
<br/>

Clear the drag rotating flag and fire the dragrotateend event

Parameters:

* param `Any`

</div>
</details>

<details><summary>isDragRotating()</summary>
<div>
<br/>

Whether the map is currently being drag rotated

</div>
</details>

<details><summary>isOffscreen(box, viewportPadding = 0)</summary>
<div>
<br/>

Test if given box is out of current screen

Parameters:

* box `PointExtent | Array<number>` [minx, miny, maxx, maxy]
* viewportPadding = 0 `Number` test padding

Returns:

* `Boolean`

</div>
</details>

<details><summary>setContainerDomRect(domRect)</summary>
<div>
<br/>

Set the container DOM content rect used to compute the map size

Parameters:

* domRect `DOMRect`

</div>
</details>

<details><summary>offsetPlatform(offset?)</summary>
<div>
<br/>

Gets map panel's current view point.

Parameters:

* offset (optional) `Point`

Returns:

* `Point`

</div>
</details>

<details><summary>getViewPoint()</summary>
<div>
<br/>

Get map's view point, adding in frame offset

Returns:

* `Point` map view point

</div>
</details>
