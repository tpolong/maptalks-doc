<details><summary>clear</summary>
<div>
<br/>

Fired when the layer is cleared.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "clear"  |
|target   | VectorTileLayer |   this     |

</div>
</details>


<details><summary>idchange</summary>
<div>
<br/>

Fired when the layer id changes.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "idchange"  |
|target   | VectorTileLayer |   this     |
|old      | String          |   the old id     |
|new      | String          |   the new id     |

</div>
</details>


<details><summary>renderercreate</summary>
<div>
<br/>

Fired when the renderer is created.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type       | String          |   "renderercreate"  |
|target     | VectorTileLayer |   this     |
|renderer   | VectorTileLayerRenderer |      |

</div>
</details>


<details><summary>canvascreate</summary>
<div>
<br/>

Fired when the canvas is created.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "canvascreate"  |
|target   | VectorTileLayer |   this     |
|gl       | WebGLRenderingContext2D |      |

</div>
</details>


<details><summary>renderstart</summary>
<div>
<br/>

Fired when rendering starts.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "renderstart"  |
|target   | VectorTileLayer |   this     |

</div>
</details>


<details><summary>renderend</summary>
<div>
<br/>

Fired when rendering ends.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "renderend"  |
|target   | VectorTileLayer |   this     |

</div>
</details>
