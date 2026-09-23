<details><summary>getLayer()</summary>
<div>
<br/>

Returns the layer the marker belongs to.

</div>
</details>

<details><summary>translation()</summary>
<div>
<br/>

Get the model translation offset, zeros when not set in symbol

</div>
</details>

<details><summary>rotation()</summary>
<div>
<br/>

Returns the default model rotation, 0 0 0 when the symbol sets none.

</div>
</details>

<details><summary>scale()</summary>
<div>
<br/>

Returns the default model scale, 1 1 1 when the symbol sets none.

</div>
</details>

<details><summary>setTransformOrigin(coordinate)</summary>
<div>
<br/>

Sets the coordinate used as the origin of the model transform.

Parameters:

* coordinate `Any`

</div>
</details>

<details><summary>getTransformOrigin()</summary>
<div>
<br/>

Returns the model transform origin, defaulting to the marker center.

</div>
</details>

<details><summary>getMeshes(gltfManager, regl, timestamp)</summary>
<div>
<br/>

Returns the meshes to render this frame, frustum culled after matrix and uniform updates.

Parameters:

* gltfManager `Any`
* regl `Any`
* timestamp `Any`

</div>
</details>

<details><summary>getGLTFJSON()</summary>
<div>
<br/>

Returns the raw json data of the loaded glTF model.

</div>
</details>

<details><summary>getAllMeshes()</summary>
<div>
<br/>

Get all meshes created for the marker, without frustum culling.

</div>
</details>

<details><summary>setUrl(url)</summary>
<div>
<br/>

Set the gltf model url and update the symbol

Parameters:

* url `Any`

</div>
</details>

<details><summary>setSymbol(symbol)</summary>
<div>
<br/>

Sets the marker symbol and rebuilds meshes when url or shader changes.

Parameters:

* symbol `Any`

</div>
</details>

<details><summary>getPointZ()</summary>
<div>
<br/>

Converts the coordinate z altitude into a GL world point height.

</div>
</details>

<details><summary>getUrl()</summary>
<div>
<br/>

Returns the model resource url, defaulting to pyramid when not set.

</div>
</details>

<details><summary>addTo(layer)</summary>
<div>
<br/>

Add the marker to the given layer, throws if it is already added to one

Parameters:

* layer `Any`

</div>
</details>

<details><summary>getBoundingBoxCenter()</summary>
<div>
<br/>

Get the coordinate at the center of the model bounding box, or null before it is loaded.

</div>
</details>

<details><summary>getBoundingBoxWidth(axis)</summary>
<div>
<br/>

Get the model bounding box width for the given axis times scale; y and z are swapped.

Parameters:

* axis `Any`

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

<details><summary>getCurrentPixelHeight()</summary>
<div>
<br/>

Get the pixel height the model currently occupies on the screen.

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

<details><summary>showBoundingBox(options)</summary>
<div>
<br/>

Show the model bounding box, options set line color and opacity

Parameters:

* options `Any`

</div>
</details>

<details><summary>hideBoundingBox()</summary>
<div>
<br/>

Hide the debug bounding box of the model

</div>
</details>

<details><summary>getBoundingBox()</summary>
<div>
<br/>

Get the model bounding box merged from all meshes, or null when there is no mesh.

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Lifecycle callback when added, records the map zoom for fixed size

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Lifecycle callback when removed, clears bounding box and zoom fields

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

Releases glTF resources and disposes meshes and textures, then removes the marker.

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

Set symbol visible to true to show the marker

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

Hide the marker by setting the symbol visible to false

</div>
</details>

<details><summary>setBloom(bloom)</summary>
<div>
<br/>

Sets whether the marker uses the bloom effect.

Parameters:

* bloom `Any`

</div>
</details>

<details><summary>isBloom()</summary>
<div>
<br/>

Check whether the bloom effect is enabled for the marker

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

Check whether the marker casts shadow, enabled by default

</div>
</details>

<details><summary>outlineNodes(nodes)</summary>
<div>
<br/>

Adds outline to the meshes whose node index is in the given list.

Parameters:

* nodes `Any`

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

Check whether the marker is visible, visible by default

</div>
</details>

<details><summary>copy()</summary>
<div>
<br/>

Create a new marker instance copied from the JSON of the current marker.

</div>
</details>

<details><summary>setShader(shader)</summary>
<div>
<br/>

Sets the shader name used by the marker, pbr by default.

Parameters:

* shader `Any`

</div>
</details>

<details><summary>getShader()</summary>
<div>
<br/>

Returns the current shader name of the marker, pbr when not set.

</div>
</details>

<details><summary>setUniforms(uniforms)</summary>
<div>
<br/>

Set the whole shader uniforms key-value map at once

Parameters:

* uniforms `Any`

</div>
</details>

<details><summary>getUniforms()</summary>
<div>
<br/>

Returns the current uniform key value pairs of the marker.

</div>
</details>

<details><summary>setUniform(key, value, nodeIndex)</summary>
<div>
<br/>

Set one uniform value, optional nodeIndex limits it to that node

Parameters:

* key `Any`
* value `Any`
* nodeIndex `Any`

</div>
</details>

<details><summary>getUniform(key)</summary>
<div>
<br/>

Returns the uniform value for the given key.

Parameters:

* key `Any`

</div>
</details>

<details><summary>isAnimated()</summary>
<div>
<br/>

Check whether the model animation plays, needs animations and symbol on

</div>
</details>

<details><summary>isDashAnimated()</summary>
<div>
<br/>

Check whether dash animation is on, needs dashEnabled and dashAnimate

</div>
</details>

<details><summary>setAnimation(isAnimation)</summary>
<div>
<br/>

Sets whether the animation embedded in the glTF model is played.

Parameters:

* isAnimation `Any`

</div>
</details>

<details><summary>setAnimationLoop(looped)</summary>
<div>
<br/>

Sets whether the animation loops and resets its start time.

Parameters:

* looped `Any`

</div>
</details>

<details><summary>isAnimationLooped()</summary>
<div>
<br/>

Check whether the animation is played in a loop

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

Sets translation, rotation and scale together from three arrays.

Parameters:

* translation `Any`
* rotation `Any`
* scale `Any`

</div>
</details>

<details><summary>updateSymbol(symbol)</summary>
<div>
<br/>

Update the marker symbol and handle bloom and effect properties

Parameters:

* symbol `Any`

</div>
</details>

<details><summary>setTranslation(translationX, translationY, translationZ)</summary>
<div>
<br/>

Sets the marker translation offsets along the three axes.

Parameters:

* translationX `Any`
* translationY `Any`
* translationZ `Any`

</div>
</details>

<details><summary>setRotation(rotationX, rotationY, rotationZ)</summary>
<div>
<br/>

Sets the marker rotation angles around the three axes.

Parameters:

* rotationX `Any`
* rotationY `Any`
* rotationZ `Any`

</div>
</details>

<details><summary>rotateAround(coordinate, degree)</summary>
<div>
<br/>

Rotates the marker around the given coordinate and updates its heading.

Parameters:

* coordinate `Any`
* degree `Any`

</div>
</details>

<details><summary>setScale(scaleX, scaleY, scaleZ)</summary>
<div>
<br/>

Sets the model scale factors along the three axes.

Parameters:

* scaleX `Any`
* scaleY `Any`
* scaleZ `Any`

</div>
</details>

<details><summary>getTranslation()</summary>
<div>
<br/>

Returns the current three dimensional translation vector of the marker.

</div>
</details>

<details><summary>getRotation()</summary>
<div>
<br/>

Returns the marker rotation on the three axes, 0 when not set.

</div>
</details>

<details><summary>getScale()</summary>
<div>
<br/>

Returns the model scale on the three axes, 1 when not set.

</div>
</details>

<details><summary>cancelMarkerPixelHeight()</summary>
<div>
<br/>

Cancel the model pixel height set by markerPixelHeight

</div>
</details>

<details><summary>setAnchorZ(anchorZ)</summary>
<div>
<br/>

Sets the model anchor on the Z axis, one of bottom, top or center.

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

Check whether the symbol or its uniforms contain a function-type definition

</div>
</details>

<details><summary>setModelMatrix(matrix)</summary>
<div>
<br/>

Sets the model matrix and applies the translation rotation scale it holds.

Parameters:

* matrix `Any`

</div>
</details>

<details><summary>getModelMatrix()</summary>
<div>
<br/>

Returns the current model transform matrix of the marker.

</div>
</details>

<details><summary>isDirty()</summary>
<div>
<br/>

Check whether the marker is dirty and waits for a mesh update

</div>
</details>

<details><summary>setZoomOnAdded(zoom)</summary>
<div>
<br/>

Set the zoom recorded when the marker is added to the map

Parameters:

* zoom `Any`

</div>
</details>

<details><summary>getZoomOnAdded()</summary>
<div>
<br/>

Returns the zoom recorded when the marker was added to the map.

</div>
</details>

<details><summary>isLoaded()</summary>
<div>
<br/>

Check whether the gltf model is loaded and its meshes are created

</div>
</details>

<details><summary>getGLTFMarkerType()</summary>
<div>
<br/>

Returns the marker type identifier, which is multigltfmarker for this class.

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

Returns the glTF asset metadata of the loaded model, such as version and generator.

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

Sets the current animation name, an array of names plays them together.

Parameters:

* animationName `Any`

</div>
</details>

<details><summary>setModelHeight(modelHeight)</summary>
<div>
<br/>

Sets the model height and scales the model to match it.

Parameters:

* modelHeight `Any`

</div>
</details>

<details><summary>getModelHeight()</summary>
<div>
<br/>

Returns the currently set model height.

</div>
</details>

<details><summary>getGLTFBBox()</summary>
<div>
<br/>

Returns the original bounding box of the glTF model itself.

</div>
</details>

<details><summary>zoomTo(options = { animation: true }, step)</summary>
<div>
<br/>

set transltion, rotation and scale for specific node

Parameters:

* options = { animation: true } `Any`
* step `Any`

Returns:

* `Any` this

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

<details><summary>setNodeTRS(nodeIndex, trs = {}?)</summary>
<div>
<br/>

set transltion, rotation and scale for specific node

Parameters:

* nodeIndex `Number` specific node index for gltf
* trs = {} (optional) `Object` = &#123;&#125;]  - includes transltion, rotation, scale

Returns:

* `Any` this

</div>
</details>

<details><summary>getOutline()</summary>
<div>
<br/>

Returns a square outline marker whose size comes from the container extent.

Returns:

* `Marker`

</div>
</details>

<details><summary>setSymbol(symbol)</summary>
<div>
<br/>

Sets the marker symbol and rebuilds meshes when url or shader changes.

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

Add the marker to the given layer, throws if it is already added to one

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

Returns the layer the marker belongs to.

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

Sets the marker symbol and rebuilds meshes when url or shader changes.

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

Update the marker symbol and handle bloom and effect properties

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

Returns the text description computed from text content and sizeSymbol, then cached.

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

Set symbol visible to true to show the marker

Returns:

* `Geometry` this

Fires:

* `Geometry#show`

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

Hide the marker by setting the symbol visible to false

Returns:

* `Geometry` this

Fires:

* `Geometry#hide`

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

Check whether the marker is visible, visible by default

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

<details><summary>copy()</summary>
<div>
<br/>

Create a new marker instance copied from the JSON of the current marker.

Returns:

* `Geometry` copy

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

Releases glTF resources and disposes meshes and textures, then removes the marker.

Returns:

* `Geometry` this

Fires:

* `Geometry#removestart`
* `Geometry#remove`

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

Check whether the geometry has rotation angle and rotation center

Returns:

* `boolean`

</div>
</details>

<details><summary>onHide()</summary>
<div>
<br/>

Lifecycle callback when hidden, closes the opened menu and infoWindow

</div>
</details>

<details><summary>onShapeChanged()</summary>
<div>
<br/>

Lifecycle callback when shape changes, clears cache and redraws

</div>
</details>

<details><summary>onSymbolChanged()</summary>
<div>
<br/>

Lifecycle callback when symbol changes, refreshes symbol and rebuilds

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Lifecycle callback after options update, syncs properties and redraws

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

Check whether the geometry has a non-zero altitude

Returns:

* `boolean`

</div>
</details>

<details><summary>setAltitude(alt)</summary>
<div>
<br/>

Sets the geometry altitude and rewrites the z value of its coordinates.

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

Returns the hole ring coordinates of a polygon geometry; only some subclasses implement it.

Returns:

* `Array<Array<Coordinate>>`

</div>
</details>

<details><summary>getShell()</summary>
<div>
<br/>

Returns the outer ring coordinates of the geometry; only some subclasses implement it.

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

Lifecycle callback when removed, clears bounding box and zoom fields

</div>
</details>

<details><summary>getRotateOffsetAngle()</summary>
<div>
<br/>

Returns the angle offset used when rotating about the center; only Sector implements it.

Returns:

* `number`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

Lifecycle callback when added, records the map zoom for fixed size

</div>
</details>
