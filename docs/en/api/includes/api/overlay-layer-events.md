<details><summary>addgeo</summary>
<div>
<br/>

addgeo event.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | addgeo |
| target | `OverlayLayer` | layer |
| geometries | `Geometry[]` | the geometries to add |

</div>
</details>

<details><summary>clear</summary>
<div>
<br/>

clear event.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | clear |
| target | `OverlayLayer` | layer |

</div>
</details>

<details><summary>setstyle</summary>
<div>
<br/>

setstyle event.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | setstyle |
| target | `OverlayLayer` | layer |
| style | `Object|Object[]` | style to set |

</div>
</details>

<details><summary>removestyle</summary>
<div>
<br/>

removestyle event.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | removestyle |
| target | `OverlayLayer` | layer |

</div>
</details>

<details><summary>removegeo</summary>
<div>
<br/>

removegeo event.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | removegeo |
| target | `OverlayLayer` | layer |
| geometries | `Geometry[]` | the geometries to remove |

</div>
</details>

<details><summary>add</summary>
<div>
<br/>

Fired when a geometry is added to the layer.

</div>
</details>
