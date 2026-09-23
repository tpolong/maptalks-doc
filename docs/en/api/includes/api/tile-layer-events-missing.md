<details><summary>setzindex</summary>
<div>
<br/>

setzindex event.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | setzindex |
| target | `Layer` | the layer fires the event |
| zIndex | `Number` | value of the zIndex |

</div>
</details>

<details><summary>renderercreate</summary>
<div>
<br/>

renderercreate event, fired when renderer is created.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | renderercreate |
| target | `Layer` | the layer fires the event |
| renderer | `Any` | renderer of the layer |

</div>
</details>

<details><summary>visiblechange</summary>
<div>
<br/>

visiblechange event.

Event properties:

| Property | Type | Value |
| --- | :-: | --- |
| type | `String` | visiblechange |
| target | `Layer` | the layer fires the event |
| visible | `Boolean` | value of visible |

</div>
</details>

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
