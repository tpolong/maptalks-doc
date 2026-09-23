<details><summary>setstyle</summary>
<div>
<br/>

setstyle event.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | setstyle |
| target | `VectorTileLayer` | layer |
| style | `Object|Object[]` | style to set |

</div>
</details>

<details><summary>updatesceneconfig</summary>
<div>
<br/>

Fired after the sceneConfig of a layer style is updated.

</div>
</details>

<details><summary>updatefeaturesceneconfig</summary>
<div>
<br/>

Fired after the sceneConfig of a feature style is updated.

</div>
</details>

<details><summary>updatedataconfig</summary>
<div>
<br/>

Fired after the dataConfig of a layer style is updated.

</div>
</details>

<details><summary>updatefeaturedataconfig</summary>
<div>
<br/>

Fired after the dataConfig of a feature style is updated.

</div>
</details>

<details><summary>updatesymbol</summary>
<div>
<br/>

Fired after the symbol of a layer style is updated.

</div>
</details>

<details><summary>updatefeaturesymbol</summary>
<div>
<br/>

Fired after the symbol of a feature style is updated.

</div>
</details>

<details><summary>cleardata</summary>
<div>
<br/>

Fired after the layer tile data and caches are cleared.

</div>
</details>

<details><summary>refreshstyle</summary>
<div>
<br/>

Fired when the layer style is updated and reapplied to tiles.

</div>
</details>

<details><summary>contextcreate</summary>
<div>
<br/>

Fired when the webgl rendering context of the layer is created.

</div>
</details>

<details><summary>workerready</summary>
<div>
<br/>

Fired when the layer worker connection is ready.

</div>
</details>

<details><summary>datareceived</summary>
<div>
<br/>

Fired when tile data returned by the worker is received and parsed, carrying the url.

</div>
</details>

<details><summary>canvasisdirty</summary>
<div>
<br/>

Fired when a render plugin draws content and marks the canvas dirty.

</div>
</details>

<details><summary>pluginsinited</summary>
<div>
<br/>

Fired after the render plugins of the layer and feature styles are initialized.

</div>
</details>
