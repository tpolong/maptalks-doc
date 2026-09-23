<details><summary>tileload</summary>
<div>
<br/>

tileload event, fired when tile is loaded.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | tileload |
| target | `Geo3DTilesLayer` | tile layer |
| node | `Object` | 3d tile node |

</div>
</details>

<details><summary>tileerror</summary>
<div>
<br/>

tileerror event, fired when tile loading has error.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | tileerror |
| target | `Geo3DTilesLayer` | tile layer |
| node | `Object` | 3d tile node |
| error | `Error` | error message |

</div>
</details>

<details><summary>rootready</summary>
<div>
<br/>

Fired after the root tiles of all services are created.

</div>
</details>

<details><summary>loadtileset</summary>
<div>
<br/>

Fired when a tileset is loaded and parsed, carrying tileset, index and url.

</div>
</details>

<details><summary>drawtiles</summary>
<div>
<br/>

Fired after the tiles are drawn each frame, carrying the drawn tile count.

</div>
</details>

<details><summary>canvasisdirty</summary>
<div>
<br/>

Fired when 3dtiles tiles are drawn in the frame and the canvas becomes dirty.

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
