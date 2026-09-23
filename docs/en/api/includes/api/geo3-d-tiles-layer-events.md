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
