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

<details><summary>cleardata</summary>
<div>
<br/>

清除瓦片数据与缓存完成时触发

</div>
</details>

<details><summary>refreshstyle</summary>
<div>
<br/>

图层样式更新并重新应用到瓦片时触发

</div>
</details>

<details><summary>contextcreate</summary>
<div>
<br/>

图层 webgl 渲染上下文创建完成时触发

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
