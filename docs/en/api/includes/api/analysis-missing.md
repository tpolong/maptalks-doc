<details><summary>addTo(layer)</summary>
<div>
<br/>

Adds the analysis to a layer, creating its render pass once the layer is on a map.

Parameters:

* layer `Any`

</div>
</details>

<details><summary>enable()</summary>
<div>
<br/>

Enables the analysis and requests a redraw of its layer.

</div>
</details>

<details><summary>disable()</summary>
<div>
<br/>

Disables the analysis and requests a redraw of its layer.

</div>
</details>

<details><summary>isEnable()</summary>
<div>
<br/>

Returns whether the analysis is currently enabled.

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

Removes the analysis from its layer and disposes its passes, meshes and picking resources.

</div>
</details>

<details><summary>update(name, value)</summary>
<div>
<br/>

Updates the named analysis option and requests a redraw of its layer.

Parameters:

* name `Any`
* value `Any`

</div>
</details>

<details><summary>getExcludeLayers()</summary>
<div>
<br/>

Returns the ids of the layers excluded from the analysis.

</div>
</details>

<details><summary>setExcludeLayers(layerIds)</summary>
<div>
<br/>

Sets the ids of the layers to be excluded from the analysis.

Parameters:

* layerIds `Any`

</div>
</details>

<details><summary>exportAnalysisMap(meshes)</summary>
<div>
<br/>

Renders the analysis pass for the given meshes and reads back its RGBA pixels, null when disabled.

Parameters:

* meshes `Any`

</div>
</details>

<details><summary>getAnalysisType()</summary>
<div>
<br/>

Returns the analysis type identifier, such as cut or viewshed.

</div>
</details>
