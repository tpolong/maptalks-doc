<details><summary>addTo(groupGLLayer)</summary>
<div>
<br/>

Adds the analysis object to a GroupGLLayer.

Spatial analysis objects can only be added to a GroupGLLayer; they cannot be added to other WebGL layers.

Parameters:

* groupGLLayer **GroupGLLayer** the GroupGLLayer

Returns:

* this

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

Removes the spatial analysis object from the layer.


Returns:

* void

</div>
</details>

<details><summary>update(name, value)</summary>
<div>
<br/>

Updates options data.

Parameters:

* name **String** the setting name
* value **any** the setting value

Returns:

* void

</div>
</details>

<details><summary>getAnalysisType()</summary>
<div>
<br/>

Gets the type of the Analysis.

Returns:

* String

</div>
</details>

<details><summary>getDefines()</summary>
<div>
<br/>

Internal method.

Returns the defines added to the shader when the Analysis is rendered.

Returns:

* Object

</div>
</details>

<details><summary>renderAnalysis(meshes)</summary>
<div>
<br/>

Internal method.

Renders the spatial analysis scene (implemented by each analysis subclass) and returns the uniform variables required for rendering.

Parameters:

* meshes **Mesh[]** the scene meshes

Returns:

* Object

</div>
</details>
<details><summary>enable()</summary>
<div>
<br/>

Enables the analysis.

Returns:

* void

</div>
</details>

<details><summary>disable()</summary>
<div>
<br/>

Disables the analysis.

Returns:

* void

</div>
</details>

<details><summary>isEnable()</summary>
<div>
<br/>

Whether the analysis is enabled.

Returns:

* Boolean

</div>
</details>

<details><summary>getExcludeLayers()</summary>
<div>
<br/>

Gets the list of layer ids excluded from the analysis (these layers are ignored during the analysis).

Returns:

* String[]

</div>
</details>

<details><summary>setExcludeLayers(layerIds)</summary>
<div>
<br/>

Sets the list of layer ids excluded from the analysis.

Parameters:

* layerIds **String[]** list of layer ids

Returns:

* void

</div>
</details>

<details><summary>exportAnalysisMap(meshes)</summary>
<div>
<br/>

Exports the analysis result image (RGBA pixel data); returns null when the analysis is not enabled.

Parameters:

* meshes **Mesh[]** the scene meshes

Returns:

* Uint8Array

</div>
</details>
