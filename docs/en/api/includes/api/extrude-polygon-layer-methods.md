<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

Get the polygonOffset count the layer needs, which is always 0 for this layer.

Returns:

* `0 | 1`

</div>
</details>

<details><summary>getPolygonOffset()</summary>
<div>
<br/>

Get the layer polygonOffset value, which is always 0 for this layer.

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

Applies the changed options and forwards the config to the layer renderer.

Parameters:

* conf `Record<string, any>`

</div>
</details>

<details><summary>updateMaterial(matInfo)</summary>
<div>
<br/>

Merges the material options and updates the renderer; null clears the material.

Parameters:

* matInfo `LitMaterial`

</div>
</details>

<details><summary>updateSideMaterial(matInfo)</summary>
<div>
<br/>

Merges the side material options and updates the renderer; null clears the side material.

Parameters:

* matInfo `LitMaterial`

</div>
</details>

<details><summary>updateDataConfig(dataConfig)</summary>
<div>
<br/>

Merges the new dataConfig into options and updates the renderer data config.

Parameters:

* dataConfig `LitDataConfig`

</div>
</details>
