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

<details><summary>getGLTFJSON()</summary>
<div>
<br/>

Get the raw json data of the loaded glTF model.

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

<details><summary>getCenter()</summary>
<div>
<br/>

Get the geographic coordinate of the model center including translation and altitude.

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

Show the model bounding box, options set line color and opacity.

Parameters:

* options `Any`

</div>
</details>

<details><summary>hideBoundingBox()</summary>
<div>
<br/>

Hide the debug bounding box of the model.

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

Records the map zoom when the marker is added, used for auto sizing.

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

Clears bounding box and zoom helper fields when the marker is removed.

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

<details><summary>outlineNodes(nodes)</summary>
<div>
<br/>

Add outline to the meshes whose nodeIndex is in the given list.

Parameters:

* nodes `Any`

</div>
</details>

<details><summary>outline()</summary>
<div>
<br/>

Adds outline to every mesh of the model and turns on the symbol outline.

</div>
</details>

<details><summary>cancelOutline(nodes)</summary>
<div>
<br/>

Cancel the outline of the marker, only the given nodes when nodes is passed

Parameters:

* nodes `Any`

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

<details><summary>setCoordinates(coordinates)</summary>
<div>
<br/>

Sets the marker coordinate, accepting an array or a Coordinate.

Parameters:

* coordinates `Any`

</div>
</details>

<details><summary>copy()</summary>
<div>
<br/>

Create an identical GLTFMarker from its JSON, keeping the recorded zoom

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

<details><summary>getUniforms()</summary>
<div>
<br/>

Get the current uniform key value pairs of the marker.

</div>
</details>

<details><summary>setUniform(key, value, nodeIndex)</summary>
<div>
<br/>

Set one uniform value, optional nodeIndex limits it to that node.

Parameters:

* key `Any`
* value `Any`
* nodeIndex `Any`

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

<details><summary>rotateAround(coordinate, degree)</summary>
<div>
<br/>

Rotate the marker around the given coordinate and update its heading.

Parameters:

* coordinate `Any`
* degree `Any`

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

<details><summary>cancelMarkerPixelHeight()</summary>
<div>
<br/>

Cancel the model pixel height set by markerPixelHeight

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

<details><summary>isLoaded()</summary>
<div>
<br/>

Check whether the glTF model is loaded and its meshes are created.

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

<details><summary>setModelHeight(modelHeight)</summary>
<div>
<br/>

Set the model height and scale the model to match it.

Parameters:

* modelHeight `Any`

</div>
</details>

<details><summary>getModelHeight()</summary>
<div>
<br/>

Get the currently set model height.

</div>
</details>

<details><summary>getGLTFBBox()</summary>
<div>
<br/>

Get the original bounding box of the glTF model itself.

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

<details><summary>highlightNodes(highlights)</summary>
<div>
<br/>

Highlight the model nodes whose nodeIndex is in the given list.

Parameters:

* highlights `Any`

</div>
</details>

<details><summary>highlight(highlight)</summary>
<div>
<br/>

Highlight the whole model, with optional color, opacity and bloom.

Parameters:

* highlight `Any`

</div>
</details>

<details><summary>cancelHighlight(nodes)</summary>
<div>
<br/>

Cancel the highlight and restore the original colors, optionally limited to the given nodes

Parameters:

* nodes `Any`

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
