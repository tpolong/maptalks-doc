<details><summary>canvascreate</summary>
<div>
<br/>

canvascreate event, fired when canvas created.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | canvascreate |
| target | `Layer` | layer |
| context | `CanvasRenderingContext2D` | canvas's context |
| gl | `WebGLRenderingContext2D` | canvas's webgl context |

</div>
</details>

<details><summary>renderstart</summary>
<div>
<br/>

renderstart event, fired when layer starts to render.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | renderstart |
| target | `Layer` | layer |
| context | `CanvasRenderingContext2D` | canvas's context |

</div>
</details>

<details><summary>resourceload</summary>
<div>
<br/>

resourceload event, fired when external resources of the layer complete loading.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | resourceload |
| target | `Layer` | layer |

</div>
</details>

<details><summary>renderend</summary>
<div>
<br/>

renderend event, fired when layer ends rendering.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | renderend |
| target | `Layer` | layer |
| context | `CanvasRenderingContext2D` | canvas's context |

</div>
</details>
