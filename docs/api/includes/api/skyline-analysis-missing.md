<details><summary>renderAnalysis(meshes)</summary>
<div>
<br/>

渲染天际线分析并返回含 skylineMap 的 uniform

参数：

* meshes `Any`

</div>
</details>

<details><summary>update(name, value)</summary>
<div>
<br/>

更新分析参数并触发图层重绘

参数：

* name `Any`
* value `Any`

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

从 layer 移除分析并销毁地面 mesh 等资源

</div>
</details>

<details><summary>getDefines()</summary>
<div>
<br/>

返回 shader 的 HAS_SKYLINE 宏定义

</div>
</details>

<details><summary>addTo(layer)</summary>
<div>
<br/>

将天际线分析添加到 layer，layer 未就绪时等其加载完成再创建 pass

参数：

* layer `Any`

</div>
</details>

<details><summary>enable()</summary>
<div>
<br/>

启用天际线分析并请求图层重绘

</div>
</details>

<details><summary>disable()</summary>
<div>
<br/>

禁用天际线分析并请求图层重绘

</div>
</details>

<details><summary>isEnable()</summary>
<div>
<br/>

返回天际线分析当前是否启用

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

从 layer 移除分析并销毁地面 mesh 等资源

</div>
</details>

<details><summary>update(name, value)</summary>
<div>
<br/>

更新分析参数并触发图层重绘

参数：

* name `Any`
* value `Any`

</div>
</details>

<details><summary>getExcludeLayers()</summary>
<div>
<br/>

获取不参与天际线分析的 layer id 数组，未设置时为空数组

</div>
</details>

<details><summary>setExcludeLayers(layerIds)</summary>
<div>
<br/>

设置不参与天际线分析的 layer id 数组

参数：

* layerIds `Any`

</div>
</details>

<details><summary>exportAnalysisMap(meshes)</summary>
<div>
<br/>

按传入 meshes 渲染分析结果并返回像素数据，未启用时返回 null

参数：

* meshes `Any`

</div>
</details>

<details><summary>getAnalysisType()</summary>
<div>
<br/>

获取分析类型标识，天际线分析为 skyline

</div>
</details>
