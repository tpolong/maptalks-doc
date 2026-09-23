<details><summary>setzindex</summary>
<div>
<br/>

setzindex 事件

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | setzindex |
| target | `Layer` | the layer fires the event |
| zIndex | `Number` | value of the zIndex |

</div>
</details>

<details><summary>renderercreate</summary>
<div>
<br/>

renderercreate 事件, 当 renderer 创建完成后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | renderercreate |
| target | `Layer` | the layer fires the event |
| renderer | `Any` | renderer of the layer |

</div>
</details>

<details><summary>visiblechange</summary>
<div>
<br/>

visiblechange 事件

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | visiblechange |
| target | `Layer` | the layer fires the event |
| visible | `Boolean` | value of visible |

</div>
</details>

<details><summary>canvascreate</summary>
<div>
<br/>

layer 的 canvas 创建后触发

参数属性：

| 属性名 | 类型 | 值 |
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

图层开始渲染时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | renderstart |
| target | `Layer` | layer |
| context | `CanvasRenderingContext2D` | canvas's context |

</div>
</details>

<details><summary>resourceload</summary>
<div>
<br/>

layer 的外部资源加载完成时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | resourceload |
| target | `Layer` | layer |

</div>
</details>

<details><summary>renderend</summary>
<div>
<br/>

图层渲染结束时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | renderend |
| target | `Layer` | layer |
| context | `CanvasRenderingContext2D` | canvas's context |

</div>
</details>
