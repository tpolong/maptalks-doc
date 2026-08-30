<details><summary>iblupdated</summary>
<div>
<br/>

Fired when the ambient light is updated.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "iblupdated"  |
|target   | VectorTileLayer |   this     |

</div>
</details>


<details><summary>canvasisdirty</summary>
<div>
<br/>

Fired when the layer canvas is redrawn.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "canvasisdirty"  |
|target   | VectorTileLayer |   this     |

</div>
</details>


<details><summary>workerready</summary>
<div>
<br/>

Fired when the worker is ready.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "workerready"  |
|target   | VectorTileLayer |   this     |

</div>
</details>


<details><summary>datareceived</summary>
<div>
<br/>

Fired when tile data is received.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "datareceived"  |
|target   | VectorTileLayer |   this     |
|url      | String          |   the URL of the tile data     |

</div>
</details>


<details><summary>pluginsinited</summary>
<div>
<br/>

Fired when the render plugins finish initialization.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "pluginsinited"  |
|target   | VectorTileLayer |   this     |

</div>
</details>


<details><summary>setstyle</summary>
<div>
<br/>

Fired when the style is set.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "setstyle"  |
|target   | VectorTileLayer |   this     |
|style    | Object[] |   the style object     |
|computedStyle    | Object[] |   the processed style object     |

</div>
</details>


<details><summary>updatesceneconfig</summary>
<div>
<br/>

Fired on updatesceneconfig.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesceneconfig"  |
|target   | VectorTileLayer |   this                  |
|index    | Number          |   the style index              |
|sceneConfig | Object          |   the sceneConfig object     |

</div>
</details>


<details><summary>updatefeaturesceneconfig</summary>
<div>
<br/>

Fired on updatefeaturesceneconfig.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "updatefeaturesceneconfig"  |
|target   | VectorTileLayer |   this                  |
|index    | Number          |   the feature style index        |
|styleIdx | Number          |   the feature render plugin index    |
|sceneConfig | Object          |   the sceneConfig object     |

</div>
</details>


<details><summary>updatedataconfig</summary>
<div>
<br/>

Fired on updatedataconfig.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "updatedataconfig"  |
|target   | VectorTileLayer |   this                  |
|index    | Number          |   the style index              |
|dataConfig | Object        |   the dataConfig object     |

</div>
</details>


<details><summary>updatefeaturedataconfig</summary>
<div>
<br/>

Fired on updatefeaturedataconfig.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "updatefeaturedataconfig"  |
|target   | VectorTileLayer |   this                  |
|index    | Number          |   the feature style index        |
|styleIdx | Number          |   the feature render plugin index    |
|dataConfig | Object        |   the dataConfig object     |

</div>
</details>


<details><summary>updatesymbol</summary>
<div>
<br/>

Fired on updatesymbol.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesymbol"  |
|target   | VectorTileLayer |   this            |
|index    | Number          |   the style index        |
|symbol   | Object          |   the symbol object      |

</div>
</details>

<details><summary>updatefeaturesymbol</summary>
<div>
<br/>

Fired on updatefeaturesymbol.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "updatefeaturesymbol"  |
|target   | VectorTileLayer |   this                  |
|index    | Number          |   the feature style index        |
|featureStyleIndex | Number  |   the feature render plugin index    |
|symbol   | Object          |     the symbol object     |

</div>
</details>
