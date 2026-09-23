<details><summary>isLoaded()</summary>
<div>
<br/>

Whether the map is loaded or not.

Returns:

* `Boolean`

</div>
</details>

<details><summary>getContainer()</summary>
<div>
<br/>

Get map's container

Returns:

* `HTMLElement`

</div>
</details>

<details><summary>getSpatialReference()</summary>
<div>
<br/>

Get the spatial reference of the Map.

Returns:

* `SpatialReference` map's spatial reference

</div>
</details>

<details><summary>setSpatialReference(ref)</summary>
<div>
<br/>

Change the spatial reference of the map. <br/>
A SpatialReference is a series of settings to decide the map presentation:<br/>
1. the projection.<br/>
2. zoom levels and resolutions. <br/>
3. full extent.<br/>
There are some [predefined spatial references](http://www.foo.com), and surely you can [define a custom one.](http://www.foo.com).<br/>
SpatialReference can also be updated by map.config('spatialReference', spatialReference);

Parameters:

* ref `SpatialReferenceType` spatial reference

Returns:

* `Map` this

Fires:

* `Map#spatialreferencechange`

</div>
</details>

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

<details><summary>getProjection()</summary>
<div>
<br/>

Get the projection of the map. <br/>
Projection is an algorithm for map projection, e.g. well-known [Mercator Projection](https://en.wikipedia.org/wiki/Mercator_projection) <br/>
A projection must have 2 methods: <br/>
1. project(coordinate) - project the input coordinate <br/>
2. unproject(coordinate) - unproject the input coordinate <br/>
Projection also contains measuring method usually extended from a measurer: <br/>
1. measureLength(coord1, coord2) - compute length between 2 coordinates.  <br/>
2. measureArea(coords[]) - compute area of the input coordinates. <br/>
3. locate(coord, distx, disty) - compute the coordinate from the coord with xdist on axis x and ydist on axis y.

Returns:

* `Object`

</div>
</details>

<details><summary>getFullExtent()</summary>
<div>
<br/>

Get map's full extent, which is defined in map's spatial reference. <br/>
eg: &#123;'left': -180, 'right' : 180, 'top' : 90, 'bottom' : -90&#125;

Returns:

* `Extent`

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

<details><summary>getCenter()</summary>
<div>
<br/>

Get center of the map.

Returns:

* `Coordinate`

</div>
</details>

<details><summary>setCenter(center, padding?)</summary>
<div>
<br/>

Set a new center to the map.

Parameters:

* center `Coordinate`
* padding (optional) `MapPaddingType`

Returns:

* `Map` this

</div>
</details>

<details><summary>getSize()</summary>
<div>
<br/>

Get map's size (width and height) in pixel.

Returns:

* `Size`

</div>
</details>

<details><summary>getContainerExtent()</summary>
<div>
<br/>

Get container extent of the map

Returns:

* `PointExtent`

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

<details><summary>getExtent()</summary>
<div>
<br/>

Get the geographical extent of map's current view extent.

Returns:

* `Extent`

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

<details><summary>getMaxExtent()</summary>
<div>
<br/>

Get the max extent that the map is restricted to.

Returns:

* `Extent`

</div>
</details>

<details><summary>setMaxExtent(extent)</summary>
<div>
<br/>

Sets the max extent that the map is restricted to.

Parameters:

* extent `Extent`

Returns:

* `Map` this

</div>
</details>

<details><summary>getZoom()</summary>
<div>
<br/>

Get map's current zoom.

Returns:

* `Number`

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

<details><summary>setZoom(zoom, options = { 'animation': true })</summary>
<div>
<br/>

Sets zoom of the map

Parameters:

* zoom `number`
* options = { 'animation': true } `Any`

Returns:

* `Map` this

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

<details><summary>zoomIn()</summary>
<div>
<br/>

zoom in

Returns:

* `Map` this

</div>
</details>

<details><summary>zoomOut()</summary>
<div>
<br/>

zoom out

Returns:

* `Map` this

</div>
</details>

<details><summary>isZooming()</summary>
<div>
<br/>

Whether the map is zooming

Returns:

* `Boolean`

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

<details><summary>setCenterAndZoom(center, zoom?, padding?)</summary>
<div>
<br/>

Sets the center and zoom at the same time.

Parameters:

* center `Coordinate`
* zoom (optional) `number`
* padding (optional) `MapPaddingType`

Returns:

* `Map` this

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

<details><summary>getView()</summary>
<div>
<br/>

Get map's current view (center/zoom/pitch/bearing)

Returns:

* `Object` &#123; center : *, zoom : *, pitch : *, bearing : * &#125;

</div>
</details>

<details><summary>stringifyView()</summary>
<div>
<br/>

Serialize the current map view into a JSON string

</div>
</details>

<details><summary>setView(view)</summary>
<div>
<br/>

Set map's center/zoom/pitch/bearing at one time

Parameters:

* view `MapViewType` a object containing center/zoom/pitch/bearing return &#123;Map&#125; this

</div>
</details>

<details><summary>getResolution(zoom?)</summary>
<div>
<br/>

Get map's resolution

Parameters:

* zoom (optional) `number` zoom or current zoom if not given

Returns:

* `Number` resolution

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

<details><summary>getBaseLayer()</summary>
<div>
<br/>

Get the base layer of the map.

Returns:

* `Layer`

</div>
</details>

<details><summary>setBaseLayer(baseLayer)</summary>
<div>
<br/>

Sets a new base layer to the map.<br/>
Some events will be thrown such as baselayerchangestart, baselayerload, baselayerchangeend.

Parameters:

* baseLayer `Layer` new base layer

Returns:

* `Map` this

Fires:

* `Map#setbaselayer`
* `Map#baselayerchangestart`
* `Map#baselayerchangeend`

</div>
</details>

<details><summary>removeBaseLayer()</summary>
<div>
<br/>

Remove the base layer from the map

Returns:

* `Map` this

Fires:

* `Map#baselayerremove`

</div>
</details>

<details><summary>getLayers(filter?)</summary>
<div>
<br/>

Get the layers of the map, except base layer (which should be by getBaseLayer). <br/>
A filter function can be given to filter layers, e.g. exclude all the VectorLayers.

Parameters:

* filter (optional) `(layer: Layer) => boolean` =undefined] - a filter function of layers, return false to exclude the given layer.

Returns:

* `Layer[]`

</div>
</details>

<details><summary>getLayer(id)</summary>
<div>
<br/>

Get the layer with the given id.

Parameters:

* id `string` layer id

Returns:

* `Layer`

</div>
</details>

<details><summary>addLayer(layers, otherLayers)</summary>
<div>
<br/>

Add a new layer on the top of the map.

Parameters:

* layers `Layer | Array<Layer>`
* otherLayers `Array<Layer>`

Returns:

* `Map` this

Fires:

* `Map#addlayer`

</div>
</details>

<details><summary>removeLayer(layers)</summary>
<div>
<br/>

Remove a layer from the map

Parameters:

* layers `Layer | Array<Layer>` one or more layers or layer ids

Returns:

* `Map` this

Fires:

* `Map#removelayer`

</div>
</details>

<details><summary>sortLayers(layers)</summary>
<div>
<br/>

Sort layers according to the order provided, the last will be on the top.

Parameters:

* layers `Array<Layer>` layers or layer ids to sort

Returns:

* `Map` this

</div>
</details>

<details><summary>toDataURL(options?)</summary>
<div>
<br/>

Exports image from the map's canvas.

Parameters:

* options (optional) `MapDataURLType` =undefined] - options

Returns:

* `String` image of base64 format.

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

<details><summary>checkSize(force?)</summary>
<div>
<br/>

Checks if the map container size changed and updates the map if so.

Parameters:

* force (optional) `boolean`

Returns:

* `Map` this

Fires:

* `Map#resize`

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

<details><summary>remove()</summary>
<div>
<br/>

Remove the map

Returns:

* `Map` this

</div>
</details>

<details><summary>isRemoved()</summary>
<div>
<br/>

whether the map is removed

Returns:

* `Boolean`

</div>
</details>

<details><summary>isMoving()</summary>
<div>
<br/>

Whether the map is moving

Returns:

* `Boolean`

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

<details><summary>getRenderer()</summary>
<div>
<br/>

Returns the renderer instance of the map.

</div>
</details>

<details><summary>getDevicePixelRatio()</summary>
<div>
<br/>

Get map's devicePixelRatio, you can override it by setting devicePixelRatio in options.

Returns:

* `Number`

</div>
</details>

<details><summary>setDevicePixelRatio(dpr)</summary>
<div>
<br/>

Set map's devicePixelRatio

Parameters:

* dpr `number`

Returns:

* `Map` this

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

<details><summary>toJSON(options?)</summary>
<div>
<br/>

Export the map's json, a snapshot of the map in JSON format.<br/>
It can be used to reproduce the instance by fromJSON method

Parameters:

* options (optional) `MapOptionsType` =null] - export options

Returns:

* `Object` layer's JSON

</div>
</details>
