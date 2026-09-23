<details><summary>clear</summary>
<div>
<br/>

clear event, fired when tile layer is cleared.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | clear |
| target | `TileLayer` | tile layer |

</div>
</details>

<details><summary>tileload</summary>
<div>
<br/>

tileload event, fired when tile is loaded.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | tileload |
| target | `TileLayer` | tile layer |
| tileInfo | `Object` | tile info |
| tileImage | `Image` | tile image |

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
| target | `TileLayer` | tile layer |
| tileInfo | `Object` | tile info |

</div>
</details>

<details><summary>tiledelete</summary>
<div>
<br/>

tiledelete event, fired when tile is delete.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | tiledelete |
| target | `TileLayer` | tile layer |
| tileInfo | `Object` | tile info |
| tileImage | `Image` | tile image |

</div>
</details>

<details><summary>forcereloadstart</summary>
<div>
<br/>

Fired when forceReload starts clearing and reloading all cached tiles.

</div>
</details>

<details><summary>forcereloadend</summary>
<div>
<br/>

Fired when forceReload finishes clearing and reloading all cached tiles.

</div>
</details>
