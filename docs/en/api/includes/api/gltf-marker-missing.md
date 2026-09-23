<details><summary>translation()</summary>
<div>
<br/>

Get the model's default translation, 0, 0, 0 when the symbol is not set.

</div>
</details>

<details><summary>rotation()</summary>
<div>
<br/>

Gets the default model rotation, which is 0, 0, 0 when the symbol does not set it.

</div>
</details>

<details><summary>scale()</summary>
<div>
<br/>

Gets the default model scale, which is 1, 1, 1 when the symbol does not set it.

</div>
</details>

<details><summary>setTransformOrigin(coordinate)</summary>
<div>
<br/>

Set the coordinate that serves as the origin of the model transformation.

Parameters:

* coordinate `Any`

</div>
</details>

<details><summary>getTransformOrigin()</summary>
<div>
<br/>

Get the model transform origin, defaulting to the marker center when not set.

</div>
</details>

<details><summary>getMeshes(gltfManager, regl, timestamp)</summary>
<div>
<br/>

Get the meshes to render this frame, culled by frustum with matrix and uniforms updated.

Parameters:

* gltfManager `Any`
* regl `Any`
* timestamp `Any`

</div>
</details>

<details><summary>setUrl(url)</summary>
<div>
<br/>

Set the model resource url, which triggers a symbol update.

Parameters:

* url `Any`

</div>
</details>

<details><summary>setSymbol(symbol)</summary>
<div>
<br/>

Set the marker symbol and rebuild the mesh when url or shader changes.

Parameters:

* symbol `Any`

</div>
</details>

<details><summary>getPointZ()</summary>
<div>
<br/>

Convert the coordinate z altitude into the point height of the GL world.

</div>
</details>

<details><summary>getUrl()</summary>
<div>
<br/>

Get the model resource url, returning pyramid when not set.

</div>
</details>

<details><summary>addTo(layer)</summary>
<div>
<br/>

Add the marker to the given layer; throws if the marker already belongs to a layer.

Parameters:

* layer `Any`

</div>
</details>

<details><summary>getAxisXWidth()</summary>
<div>
<br/>

Get the width of the model bounding box along the X axis.

</div>
</details>

<details><summary>getAxisYWidth()</summary>
<div>
<br/>

Get the model bounding box width along the Y axis, read from the Z value internally.

</div>
</details>

<details><summary>getAxisZWidth()</summary>
<div>
<br/>

Get the model bounding box width along the Z axis, read from the Y value internally.

</div>
</details>

<details><summary>getFitTranslate(out)</summary>
<div>
<br/>

Get the translation that moves the model bounding box center to the origin.

Parameters:

* out `Any`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Records the map zoom when the marker is added, used for auto sizing.

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Clears bounding box and zoom helper fields when the marker is removed.

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

Show the marker by setting the symbol's visible to true.

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

Hide the marker by setting the symbol's visible property to false.

</div>
</details>

<details><summary>setBloom(bloom)</summary>
<div>
<br/>

Sets whether the bloom effect is enabled on the marker.

Parameters:

* bloom `Any`

</div>
</details>

<details><summary>isBloom()</summary>
<div>
<br/>

Check whether the bloom effect is enabled for the marker.

</div>
</details>

<details><summary>setCastShadow(shadow)</summary>
<div>
<br/>

Sets whether the marker casts shadow.

Parameters:

* shadow `Any`

</div>
</details>

<details><summary>isCastShadow()</summary>
<div>
<br/>

Check whether the marker casts shadow, enabled by default when not set explicitly.

</div>
</details>

<details><summary>outline()</summary>
<div>
<br/>

Adds outline to every mesh of the model and turns on the symbol outline.

</div>
</details>

<details><summary>isOutline()</summary>
<div>
<br/>

Returns whether the marker is in outlined state.

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

Returns whether the marker is visible, defaulting to visible when unset.

</div>
</details>

<details><summary>setShader(shader)</summary>
<div>
<br/>

Set the shader name used by the marker, pbr by default.

Parameters:

* shader `Any`

</div>
</details>

<details><summary>getShader()</summary>
<div>
<br/>

Get the marker's current shader name, returning pbr when not set.

</div>
</details>

<details><summary>setUniforms(uniforms)</summary>
<div>
<br/>

Set the whole key value map of the shader's uniforms.

Parameters:

* uniforms `Any`

</div>
</details>

<details><summary>getUniform(key)</summary>
<div>
<br/>

Get the uniform value of the given key from the marker symbol.

Parameters:

* key `Any`

</div>
</details>

<details><summary>isAnimated()</summary>
<div>
<br/>

Check whether animation plays, requiring model animations and an enabling symbol.

</div>
</details>

<details><summary>isDashAnimated()</summary>
<div>
<br/>

Check whether dash animation is on, requiring both dashEnabled and dashAnimate.

</div>
</details>

<details><summary>setAnimation(isAnimation)</summary>
<div>
<br/>

Sets whether the animations bundled with the model are played.

Parameters:

* isAnimation `Any`

</div>
</details>

<details><summary>setAnimationLoop(looped)</summary>
<div>
<br/>

Sets whether the animation loops, resetting the animation start time.

Parameters:

* looped `Any`

</div>
</details>

<details><summary>isAnimationLooped()</summary>
<div>
<br/>

Check whether the animation plays in a loop.

</div>
</details>

<details><summary>getAnimationSpeed()</summary>
<div>
<br/>

Get the animation playback speed, defaulting to 1 when it is not set.

</div>
</details>

<details><summary>setAnimationSpeed(speed)</summary>
<div>
<br/>

Sets the playback speed multiplier of the animation.

Parameters:

* speed `Any`

</div>
</details>

<details><summary>setTRS(translation, rotation, scale)</summary>
<div>
<br/>

Set translation, rotation and scale together with arrays.

Parameters:

* translation `Any`
* rotation `Any`
* scale `Any`

</div>
</details>

<details><summary>updateSymbol(symbol)</summary>
<div>
<br/>

Update the marker's symbol and handle bloom and effect attributes.

Parameters:

* symbol `Any`

</div>
</details>

<details><summary>setTranslation(translationX, translationY, translationZ)</summary>
<div>
<br/>

Set the marker's translation offsets on the x, y and z axes.

Parameters:

* translationX `Any`
* translationY `Any`
* translationZ `Any`

</div>
</details>

<details><summary>setRotation(rotationX, rotationY, rotationZ)</summary>
<div>
<br/>

Set the marker's rotation angles around the x, y and z axes.

Parameters:

* rotationX `Any`
* rotationY `Any`
* rotationZ `Any`

</div>
</details>

<details><summary>setScale(scaleX, scaleY, scaleZ)</summary>
<div>
<br/>

Set the model scale factors on the x, y and z axes.

Parameters:

* scaleX `Any`
* scaleY `Any`
* scaleZ `Any`

</div>
</details>

<details><summary>getTranslation()</summary>
<div>
<br/>

Get the marker's current translation as a 3D vector, 0 for axes not set.

</div>
</details>

<details><summary>getRotation()</summary>
<div>
<br/>

Get the marker's rotation angles on the three axes, 0 for axes not set.

</div>
</details>

<details><summary>getScale()</summary>
<div>
<br/>

Get the model's scale factors on the three axes, 1 for axes not set.

</div>
</details>

<details><summary>setAnchorZ(anchorZ)</summary>
<div>
<br/>

Sets the Z axis anchor of the model, accepting bottom, top or center.

Parameters:

* anchorZ `Any`

</div>
</details>

<details><summary>getAnchorZ()</summary>
<div>
<br/>

Get the model Z axis anchor, defaulting to bottom when it is not set.

</div>
</details>

<details><summary>hasFunctionDefinition()</summary>
<div>
<br/>

Check whether the symbol or its uniforms contain function-type definitions.

</div>
</details>

<details><summary>setModelMatrix(matrix)</summary>
<div>
<br/>

Set the model matrix by decomposing it into translation, rotation and scale.

Parameters:

* matrix `Any`

</div>
</details>

<details><summary>getModelMatrix()</summary>
<div>
<br/>

Get the marker's current model transform matrix.

</div>
</details>

<details><summary>isDirty()</summary>
<div>
<br/>

Check whether the marker needs updating, reset once the meshes are updated.

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

Serialize the marker to JSON, including its coordinates and symbol.

</div>
</details>

<details><summary>setZoomOnAdded(zoom)</summary>
<div>
<br/>

Set the zoom value recorded when the marker is added to the map.

Parameters:

* zoom `Any`

</div>
</details>

<details><summary>getZoomOnAdded()</summary>
<div>
<br/>

Get the zoom level recorded when the marker was added to the map.

</div>
</details>

<details><summary>getGLTFMarkerType()</summary>
<div>
<br/>

Get the marker type identifier, which is gltfmarker.

</div>
</details>

<details><summary>getCount()</summary>
<div>
<br/>

Get the feature count, which is always 1 for a GLTFMarker.

</div>
</details>

<details><summary>getContainerExtent()</summary>
<div>
<br/>

Get the model extent in container coordinates, or null without a layer or map.

</div>
</details>

<details><summary>getGLTFAsset()</summary>
<div>
<br/>

Get the asset metadata of the loaded GLTF data, such as version and generator.

</div>
</details>

<details><summary>openInfoWindow(coordinate)</summary>
<div>
<br/>

Opens the info window, waiting for the load event when the model is not loaded yet.

Parameters:

* coordinate `Any`

</div>
</details>

<details><summary>getAnimations()</summary>
<div>
<br/>

Get the names of all model animations, or null when the model has none.

</div>
</details>

<details><summary>getCurrentAnimation()</summary>
<div>
<br/>

Get the current animationName from symbol, or undefined when it is not set.

</div>
</details>

<details><summary>setCurrentAnimation(animationName)</summary>
<div>
<br/>

Sets the name of the current animation, an array of names is also accepted.

Parameters:

* animationName `Any`

</div>
</details>

<details><summary>setAnimationTimeframe(timestamp)</summary>
<div>
<br/>

Updates the model animation progress to the given timestamp.

Parameters:

* timestamp `Any`

</div>
</details>

<details><summary>getOutline()</summary>
<div>
<br/>

Get a square outline marker built from the marker's container extent, used for editing.

Returns:

* `Marker`

</div>
</details>

<details><summary>setSymbol(symbol)</summary>
<div>
<br/>

Set the marker symbol and rebuild the mesh when url or shader changes.

Parameters:

* symbol `AnyMarkerSymbol | Array<AnyMarkerSymbol>`

Returns:

* `this`

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

Add the marker to the given layer; throws if the marker already belongs to a layer.

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

<details><summary>getSymbol()</summary>
<div>
<br/>

Get symbol of the geometry

Returns:

* `Object` geometry's symbol

</div>
</details>

<details><summary>setSymbol(symbol)</summary>
<div>
<br/>

Set the marker symbol and rebuild the mesh when url or shader changes.

Parameters:

* symbol `any` new symbol

Returns:

* `Geometry` this

Fires:

* `Geometry#symbolchange`

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

Update the marker's symbol and handle bloom and effect attributes.

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

Get the text symbol's layout description, including size and row information.

Returns:

* `any`

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

Get the model extent in container coordinates, or null without a layer or map.

Parameters:

* out (optional) `PointExtent`

Returns:

* `PointExtent`

</div>
</details>

<details><summary>get2DExtent()</summary>
<div>
<br/>

Get the geometry 2D pixel extent at the current zoom, or null when it has no map.

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

<details><summary>show()</summary>
<div>
<br/>

Show the marker by setting the symbol's visible to true.

Returns:

* `Geometry` this

Fires:

* `Geometry#show`

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

Hide the marker by setting the symbol's visible property to false.

Returns:

* `Geometry` this

Fires:

* `Geometry#hide`

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

Returns whether the marker is visible, defaulting to visible when unset.

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

<details><summary>translate(x, y?, z?)</summary>
<div>
<br/>

Translate or move the geometry by the given offset.

Parameters:

* x `number | Coordinate` x offset
* y (optional) `number` y offset
* z (optional) `number` z offset

Returns:

* `Geometry` this

Fires:

* `Geometry#positionchange`
* `Geometry#shapechange`

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

Serialize the marker to JSON, including its coordinates and symbol.

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

Returns whether a rotation angle and a pivot are set on the geometry.

Returns:

* `boolean`

</div>
</details>

<details><summary>onHide()</summary>
<div>
<br/>

Lifecycle callback when hidden, closing the menu and the info window.

</div>
</details>

<details><summary>onShapeChanged()</summary>
<div>
<br/>

Lifecycle callback when the shape changes, clearing cache, repainting and firing shapechange.

</div>
</details>

<details><summary>onSymbolChanged()</summary>
<div>
<br/>

Lifecycle callback when the symbol changes, refreshing it and firing symbolchange.

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Lifecycle callback when options change, applying properties and repainting when needed.

Parameters:

* conf `any`

</div>
</details>

<details><summary>getAltitude()</summary>
<div>
<br/>

Get the geometry altitude from its properties or coordinate z, returning 0 when unset.

Returns:

* `number | number[] | number[][]`

</div>
</details>

<details><summary>hasAltitude()</summary>
<div>
<br/>

Check whether the geometry has any altitude in its coordinates or properties.

Returns:

* `boolean`

</div>
</details>

<details><summary>setAltitude(alt)</summary>
<div>
<br/>

Sets the altitude value of the geometry.

Parameters:

* alt `number`

Returns:

* `this`

</div>
</details>

<details><summary>getMinAltitude()</summary>
<div>
<br/>

Get the minimum altitude of the geometry's coordinates and properties.

Returns:

* `number`

</div>
</details>

<details><summary>getMaxAltitude()</summary>
<div>
<br/>

Get the maximum altitude among all of the geometry coordinates.

Returns:

* `number`

</div>
</details>

<details><summary>getHoles()</summary>
<div>
<br/>

Get the hole coordinate arrays of a polygon geometry, implemented only by polygon geometries.

Returns:

* `Array<Array<Coordinate>>`

</div>
</details>

<details><summary>getShell()</summary>
<div>
<br/>

Get the shell coordinates of a polygon geometry.

Returns:

* `Array<Coordinate>`

</div>
</details>

<details><summary>getGeometries()</summary>
<div>
<br/>

Get the child geometries of a collection, implemented only by collection geometries.

Returns:

* `Geometry[]`

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Clears bounding box and zoom helper fields when the marker is removed.

</div>
</details>

<details><summary>getRotateOffsetAngle()</summary>
<div>
<br/>

Get the angle offset used when rotating coordinates, implemented only by special geometries such as sector.

Returns:

* `number`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Records the map zoom when the marker is added, used for auto sizing.

</div>
</details>
