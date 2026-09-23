<details><summary>addGeometry(geometries, fitView)</summary>
<div>
<br/>

Adds gltf markers or GeoJSON features to the layer, validating their types first.

Parameters:

* geometries `Any`
* fitView `Any`

</div>
</details>

<details><summary>addMarker(markers)</summary>
<div>
<br/>

Registers markers into the layer's picking table, fires add and loads their gltf data.

Parameters:

* markers `Any`

</div>
</details>

<details><summary>toJSON(options)</summary>
<div>
<br/>

Exports the layer as JSON, optionally including its style and geometries.

Parameters:

* options `Any`

</div>
</details>

<details><summary>setStyle(layerStyle)</summary>
<div>
<br/>

Sets the layer style and re-matches markers, restoring the default style on falsy input.

Parameters:

* layerStyle `Any`

</div>
</details>

<details><summary>getStyle()</summary>
<div>
<br/>

Returns the raw style currently set on the layer.

</div>
</details>

<details><summary>updateSymbol(idx, symbolProperties)</summary>
<div>
<br/>

Updates the symbol at index idx in the layer style and its copy, then re-matches markers.

Parameters:

* idx `Any`
* symbolProperties `Any`

</div>
</details>

<details><summary>getGLTFUrls()</summary>
<div>
<br/>

Returns the urls of all gltf models registered on the layer.

</div>
</details>

<details><summary>clear()</summary>
<div>
<br/>

Clears all gltf markers in the layer and resets the marker id maps.

</div>
</details>

<details><summary>outlineBatch(filterIndex)</summary>
<div>
<br/>

Enables outline on the style at filterIndex and outlines the matched geometries.

Parameters:

* filterIndex `Any`

</div>
</details>

<details><summary>outlineAll()</summary>
<div>
<br/>

Enables outline for every geometry in the layer.

</div>
</details>

<details><summary>cancelOutline()</summary>
<div>
<br/>

Cancels outlines of all markers and removes outline from the layer style.

</div>
</details>
