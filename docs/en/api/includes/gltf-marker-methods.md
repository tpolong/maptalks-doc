<details><summary>setUrl(url)</summary>
<div>
<br/>

Updates the model url.

Returns:

* this

</div>
</details>

<details><summary>getUrl()</summary>
<div>
<br/>

Gets the model url.

Returns:

* String

</div>
</details>

<details><summary>setBloom(isBloom)</summary>
<div>
<br/>

Sets whether bloom is enabled for the model.

Parameters:

* isBloom **Boolean** Whether to enable bloom

Returns:

* this

</div>
</details>

<details><summary>isBloom()</summary>
<div>
<br/>

Whether bloom is enabled for the model.

Returns:

* Boolean

</div>
</details>

<details><summary>setCastShadow(isCastShadow)</summary>
<div>
<br/>

Sets whether shadow casting is enabled for the model.

Parameters:

* isCastShadow **Boolean** Whether to enable shadow casting

Returns:

* this

</div>
</details>

<details><summary>isCastShadow()</summary>
<div>
<br/>

Whether shadow casting is enabled for the model.

Returns:

* Boolean

</div>
</details>

<details><summary>outline()</summary>
<div>
<br/>

Outlines the model.

Because the outline effect is implemented with post-processing, the layer needs to be added to a GroupGLLayer, and the outline post-processing effect must be enabled.

```js
gltfMarker.outline();
```

Returns:

* this

</div>
</details>

<details><summary>cancelOutline()</summary>
<div>
<br/>

Cancels the outline.

Returns:

* this

</div>
</details>

<details><summary>isOutline()</summary>
<div>
<br/>

Whether the model is outlined.

Returns:

* Boolean

</div>
</details>

<details><summary>setShader(shader)</summary>
<div>
<br/>

Sets the shader used to draw the model.

Parameters:

* shader **String** The shader to use, one of: pbr, phong, wireframe; default is pbr

Returns:

* this

</div>
</details>

<details><summary>getShader()</summary>
<div>
<br/>

Returns the shader used to draw the model.

Returns:

* String

</div>
</details>

<details><summary>setUniforms(uniforms)</summary>
<div>
<br/>

Sets the symbol.uniforms of the model.

Parameters:

* uniforms **Object** The symbol.uniforms value

Returns:

* this

</div>
</details>

<details><summary>getUniform(key)</summary>
<div>
<br/>

Returns the value of a property in the model's symbol.uniforms.

Parameters:

* key **String** The uniform property name

Returns:

* any

</div>
</details>

<details><summary>setUniform(key, value, nodeIndex)</summary>
<div>
<br/>

Sets a single property value in the model's symbol.uniforms; nodeIndex can be specified to apply the uniform only to the given node (supplemented from 2026 source code).

Parameters:

* key **String** The uniform property name
* value **any** The property value
* nodeIndex **Number** Optional node index

Returns:

* this

</div>
</details>

<details><summary>getUniforms()</summary>
<div>
<br/>

Returns the symbol.uniforms object of the model (supplemented from 2026 source code).

Returns:

* Object

</div>
</details>

<details><summary>setAnimation(isAnimated)</summary>
<div>
<br/>

Sets whether the model animation is enabled, enabled by default.

Parameters:

* isAnimated **Boolean** Whether to enable the animation.

Returns:

* this

</div>
</details>

<details><summary>isAnimated()</summary>
<div>
<br/>

Whether the model animation is enabled.

Returns:

* Boolean

</div>
</details>

<details><summary>isDashAnimated()</summary>
<div>
<br/>

Whether dash animation is enabled when the model is drawn with the wireframe shader.

Returns:

* Boolean

</div>
</details>

<details><summary>setAnimationLoop(looped)</summary>
<div>
<br/>

Sets whether the model animation loops, enabled by default.

Parameters:

* looped **Boolean** Whether to enable looped animation.

Returns:

* this

</div>
</details>

<details><summary>isAnimationLooped()</summary>
<div>
<br/>

Whether the model animation loop is enabled.

Returns:

* Boolean

</div>
</details>

<details><summary>setAnimationSpeed(speed)</summary>
<div>
<br/>

Sets the animation speed of the model.

Parameters:

* speed **Number** The animation speed, as a multiple of the original speed, default 1.

Returns:

* this

</div>
</details>

<details><summary>getAnimationSpeed()</summary>
<div>
<br/>

Returns the animation speed of the model.

Returns:

* Number

</div>
</details>

<details><summary>getAnimations()</summary>
<div>
<br/>

Gets the names of all animation sequences in the model.

Returns:

* String|Number[]

</div>
</details>

<details><summary>getCurrentAnimation()</summary>
<div>
<br/>

Gets the name of the current animation sequence of the model.

Returns:

* String|Number

</div>
</details>

<details><summary>setCurrentAnimation(animationName)</summary>
<div>
<br/>

Sets the name of the current animation sequence of the model.

Parameters:

* animationName **String|Number** The animation sequence name

Returns:

* this

</div>
</details>

<details><summary>setAnimationTimeframe(timestamp)</summary>
<div>
<br/>

Sets the current animation timeframe.

Parameters:

* timestamp **Number** The animation timeframe, in ms

Returns:

* this

</div>
</details>

<details><summary>setTranslation(translationX, translationY, translationZ)</summary>
<div>
<br/>

Sets the translation of the model in its local coordinate system.

Parameters:

* translationX **Number** The translation along the x axis of the local coordinate system
* translationY **Number** The translation along the y axis of the local coordinate system
* translationZ **Number** The translation along the z axis of the local coordinate system

Returns:

* this

</div>
</details>

<details><summary>getTranslation()</summary>
<div>
<br/>

Gets the translation of the model.

Returns:

* Number[] A three-element array

</div>
</details>

<details><summary>setRotation(rotationX, rotationY, rotationZ)</summary>
<div>
<br/>

rotationX, rotationY, and rotationZ are the rotation angles of the model around the x, y, and z axes of its local coordinate system.

Parameters:

* rotationX **Number** The rotation angle of the model around the x axis of the local coordinate system
* rotationY **Number** The rotation angle of the model around the y axis of the local coordinate system
* rotationZ **Number** The rotation angle of the model around the z axis of the local coordinate system

Returns:

* this

</div>
</details>

<details><summary>getRotation()</summary>
<div>
<br/>

Gets the rotation of the model.

Returns:

* Number[] A three-element array

</div>
</details>

<details><summary>setScale(scaleX, scaleY, scaleZ)</summary>
<div>
<br/>

scaleX, scaleY, and scaleZ are the scale factors of the model along the x, y, and z axes of its local coordinate system.

Parameters:

* scaleX **Number** The scale factor of the model along the x axis of the local coordinate system
* scaleY **Number** The scale factor of the model along the y axis of the local coordinate system
* scaleZ **Number** The scale factor of the model along the z axis of the local coordinate system

Returns:

* this

</div>
</details>

<details><summary>getScale()</summary>
<div>
<br/>

Gets the scale of the model.

Returns:

* Number[] A three-element array

</div>
</details>

<details><summary>setTRS(translation, rotation, scale)</summary>
<div>
<br/>

Sets the translation, rotation, and scale of the model.

translation is a three-element array of offsets in the model's local coordinates.
rotation is a three-element array of rotation angles around the x, y, and z axes of the local coordinate system.
scale is a three-element array of scale factors along the x, y, and z axes of the local coordinate system.

Parameters:

* translation **Number[]** A three-element array of offsets in the local coordinate system.
* rotation **Number[]** A three-element array of rotation angles around the x, y, and z axes of the local coordinate system.
* scale **Number[]** A three-element array of scale factors along the x, y, and z axes of the local coordinate system.

Returns:

* this

</div>
</details>

<details><summary>setModelMatrix(modelMatrix)</summary>
<div>
<br/>

Sets the local transform matrix of the model; the matrix is decomposed into translation, rotation, and scale.

Parameters:

* modelMatrix **Number[]** A 16-element transform matrix

Returns:

* this

</div>
</details>

<details><summary>getModelMatrix()</summary>
<div>
<br/>

Gets the 16-element transform matrix of the model in local coordinates.

Returns:

* Number[]

</div>
</details>

<details><summary>setAnchorZ(anchorZ)</summary>
<div>
<br/>

Sets the anchor or alignment point of the model on the z axis, i.e. whether to align to the top or the bottom.

Parameters:

* anchorZ **String** The z-axis anchor; possible values are center, top, or bottom (verified against 2026 source code; when unset, the model center is aligned with the coordinate)

Returns:

* this

</div>
</details>

<details><summary>getAnchorZ()</summary>
<div>
<br/>

Gets the z-axis anchor of the model.

Returns:

* String

</div>
</details>
