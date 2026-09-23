<details><summary>update(name, value)</summary>
<div>
<br/>

更新分析参数，cutLine 变化时重建范围并刷新拾取

参数：

* name `Any`
* value `Any`

</div>
</details>

<details><summary>renderAnalysis(meshes)</summary>
<div>
<br/>

渲染剖面分析，返回含 cutLineColor 与 crosscutMap 的 uniform

参数：

* meshes `Any`

</div>
</details>

<details><summary>getDefines()</summary>
<div>
<br/>

返回 shader define，开启 HAS_CROSSCUT 宏

</div>
</details>

<details><summary>addTo(layer)</summary>
<div>
<br/>

将分析添加到 layer，在 layer 就绪后初始化分析渲染 pass

参数：

* layer `Any`

</div>
</details>

<details><summary>enable()</summary>
<div>
<br/>

开启该分析效果并请求图层重绘

</div>
</details>

<details><summary>disable()</summary>
<div>
<br/>

关闭该分析效果并请求图层重绘

</div>
</details>

<details><summary>isEnable()</summary>
<div>
<br/>

是否启用该分析，默认启用

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

从 layer 移除该分析并释放其渲染与拾取资源

</div>
</details>

<details><summary>update(name, value)</summary>
<div>
<br/>

更新分析参数，cutLine 变化时重建范围并刷新拾取

参数：

* name `Any`
* value `Any`

</div>
</details>

<details><summary>getExcludeLayers()</summary>
<div>
<br/>

获取不参与该分析的 layer id 列表，未设置时为空数组

</div>
</details>

<details><summary>setExcludeLayers(layerIds)</summary>
<div>
<br/>

设置不参与该分析的 layer id 列表

参数：

* layerIds `Any`

</div>
</details>

<details><summary>exportAnalysisMap(meshes)</summary>
<div>
<br/>

渲染分析结果并读回像素，返回 RGBA 字节数组，未启用时返回 null

参数：

* meshes `Any`

</div>
</details>

<details><summary>getAnalysisType()</summary>
<div>
<br/>

获取分析类型标识，本类为 crosscutAnalysis

</div>
</details>
