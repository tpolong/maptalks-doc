<details><summary>tileload</summary>
<div>
<br/>

Fired when a tile is loaded.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "tileload"  |
|target   | VectorTileLayer |   this            |
|tile     | Object          |   the tile object          |
|tileImage| Object          |   the tile image data     |

</div>
</details>


<details><summary>tileerror</summary>
<div>
<br/>

Fired when a tile fails to load.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "tileerror"  |
|target   | VectorTileLayer |   this            |
|error    | String          |   the error message          |
|tile     | Object          |   the tile object          |

</div>
</details>
