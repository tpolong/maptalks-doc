<details><summary>updatesymbol</summary>
<div>
<br/>

Fired when the symbol at index in the Layer's style is updated.

Event properties:

| Property           |   Type           |   Value |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesymbol"  |
|target   | GLTFLayer       |   this            |
|index    | Number          |   The style index        |
|symbol   | Object          |   The symbol object      |

</div>
</details>

<details><summary>setstyle</summary>
<div>
<br/>

Fired after the Layer's style is set (supplemented from 2026 source code).

Event properties:

| Property           |   Type           |   Value |
|  ------         | :----:  | ----  |
|type     | String          |   "setstyle"  |
|target   | GLTFLayer       |   this            |
|style    | Object          |   The layer style after it is set (a filter-symbol array or object)      |

</div>
</details>

<details><summary>workerready</summary>
<div>
<br/>

Fired when the worker is ready.

Event properties:

| Property           |   Type           |   Value |
|  ------         | :----:  | ----  |
|type     | String          |   "workerready"  |
|target   | GLTFLayer |   this     |

</div>
</details>

<details><summary>modelerror</summary>
<div>
<br/>

Fired when a model fails to load.

Event properties:

| Property           |   Type           |   Value |
|  ------         | :----:  | ----  |
|type     | String     |   "modelerror"  |
|target   | GLTFLayer  |   this     |
|url      | String     |   The url of the model that failed to load   |
|info     | Object     |   The error info   |

</div>
</details>

<details><summary>modelload</summary>
<div>
<br/>

Fired when models are loaded successfully.

Event properties:

| Property           |   Type           |   Value |
|  ------         | :----:  | ----  |
|type     | String          |   "modelload"  |
|target   | GLTFLayer   |   this     |
|models   | String[]    | The urls of the models loaded successfully   |

</div>
</details>
