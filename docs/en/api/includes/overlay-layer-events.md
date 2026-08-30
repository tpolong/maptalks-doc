<details><summary>addgeo</summary>
<div>
<br/>

Fired when a geometry is added.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "addgeo"  |
|target   | Layer           |   this     |
|geometries | Geometry[]    |   the added geometries |

</div>
</details>

<details><summary>removegeo</summary>
<div>
<br/>

Fired when a geometry is removed.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "removegeo"  |
|target   | Layer           |   this     |
|geometries | Geometry[]    |   the removed geometries |

</div>
</details>

<details><summary>setstyle</summary>
<div>
<br/>

Fired after the layer style is set with setStyle.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "setstyle" |
|target   | Layer           |   this       |
|style    | Object[]        |   the style array    |

</div>
</details>

<details><summary>removestyle</summary>
<div>
<br/>

Fired after the layer style is cleared with removeStyle.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "removestyle" |
|target   | Layer           |   this       |

</div>
</details>
