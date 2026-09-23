<details><summary>setstyle</summary>
<div>
<br/>

VectorTileLayer 的 style 设置后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | setstyle |
| target | `VectorTileLayer` | layer |
| style | `Object|Object[]` | style to set |

</div>
</details>

<details><summary>updatesceneconfig</summary>
<div>
<br/>

layer 级 style 的 sceneConfig 更新后触发

</div>
</details>

<details><summary>updatefeaturesceneconfig</summary>
<div>
<br/>

要素级 style 的 sceneConfig 更新后触发

</div>
</details>

<details><summary>updatedataconfig</summary>
<div>
<br/>

layer 级 style 的 dataConfig 更新后触发

</div>
</details>

<details><summary>updatefeaturedataconfig</summary>
<div>
<br/>

要素级 style 的 dataConfig 更新后触发

</div>
</details>

<details><summary>updatesymbol</summary>
<div>
<br/>

layer 级 style 的 symbol 更新后触发

</div>
</details>

<details><summary>updatefeaturesymbol</summary>
<div>
<br/>

要素级 style 的 symbol 更新后触发

</div>
</details>

<details><summary>workerready</summary>
<div>
<br/>

图层 worker 连接就绪时触发

</div>
</details>

<details><summary>datareceived</summary>
<div>
<br/>

worker 返回的瓦片数据收到并解析完成时触发

</div>
</details>

<details><summary>canvasisdirty</summary>
<div>
<br/>

渲染插件绘制出内容时触发

</div>
</details>

<details><summary>pluginsinited</summary>
<div>
<br/>

图层与要素样式的渲染插件初始化完成时触发

</div>
</details>

<details><summary>clear</summary>
<div>
<br/>

tile layer 被清空时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | clear |
| target | `TileLayer` | tile layer |

</div>
</details>

<details><summary>tileload</summary>
<div>
<br/>

图层瓦片加载完成时触发

参数属性：

| 属性名 | 类型 | 值 |
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

tile 加载出错时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | tileerror |
| target | `TileLayer` | tile layer |
| tileInfo | `Object` | tile info |

</div>
</details>

<details><summary>tiledelete</summary>
<div>
<br/>

图层瓦片从缓存中删除时触发

参数属性：

| 属性名 | 类型 | 值 |
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

forceReload 清除并重载全部缓存 tile 开始时触发

</div>
</details>

<details><summary>forcereloadend</summary>
<div>
<br/>

forceReload 清除并重载全部缓存 tile 结束时触发

</div>
</details>

<details><summary>idchange</summary>
<div>
<br/>

idchange 事件

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | idchange |
| target | `Layer` | the layer fires the event |
| old | `String` | value of the old id |
| new | `String` | value of the new id |

</div>
</details>

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

<details><summary>setopacity</summary>
<div>
<br/>

setopacity 事件

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | setopacity |
| target | `Layer` | the layer fires the event |
| opacity | `Number` | value of the opacity |

</div>
</details>

<details><summary>show</summary>
<div>
<br/>

layer 由隐藏变为可见后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | show |
| target | `Layer` | the layer fires the event |

</div>
</details>

<details><summary>hide</summary>
<div>
<br/>

hide事件

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | hide |
| target | `Layer` | the layer fires the event |

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

<details><summary>layerload</summary>
<div>
<br/>

layer 瓦片加载完成时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | layerload |
| target | `Layer` | layer |

</div>
</details>

<details><summary>remove</summary>
<div>
<br/>

layer 从 map 上移除后触发

</div>
</details>

<details><summary>add</summary>
<div>
<br/>

layer 添加到 map 上后触发

</div>
</details>
