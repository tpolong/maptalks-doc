<details><summary>addOnLoadHook(fn)</summary>
<div>
<br/>

Add hooks for additional codes when map's loading complete, useful for plugin developping.
Note that it can only be called before the map is created.

Parameters:

* fn `string | ((...args) => void), ...args`

</div>
</details>

<details><summary>fromJSON(container, profile, options?)</summary>
<div>
<br/>

Reproduce a map from map's profile JSON.

Parameters:

* container `MapContainerType`
* profile `{ [key: string]: any }`
* options (optional) `MapOptionsType`

</div>
</details>
