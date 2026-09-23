<details><summary>update(name, value)</summary>
<div>
<br/>

更新可视域参数，eyePos 与 lookPoint 转为世界坐标

参数：

* name `Any`
* value `Any`

</div>
</details>

<details><summary>renderAnalysis(meshes)</summary>
<div>
<br/>

渲染 viewshed 分析，返回 viewshedMap 等 uniform

参数：

* meshes `Any`

</div>
</details>

<details><summary>getDefines()</summary>
<div>
<br/>

返回 shader define，开启 HAS_VIEWSHED 宏

</div>
</details>

<details><summary>addTo(layer)</summary>
<div>
<br/>

将分析添加到图层，图层就绪后创建分析 pass

参数：

* layer `Any`

</div>
</details>

<details><summary>enable()</summary>
<div>
<br/>

启用分析并请求图层重绘

</div>
</details>

<details><summary>disable()</summary>
<div>
<br/>

禁用分析并请求图层重绘

</div>
</details>

<details><summary>isEnable()</summary>
<div>
<br/>

返回分析当前是否启用

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

从图层移除分析并销毁 pass、mesh 等资源

</div>
</details>

<details><summary>update(name, value)</summary>
<div>
<br/>

更新可视域参数，eyePos 与 lookPoint 转为世界坐标

参数：

* name `Any`
* value `Any`

</div>
</details>

<details><summary>getExcludeLayers()</summary>
<div>
<br/>

获取不参与分析的 layer id 数组

</div>
</details>

<details><summary>setExcludeLayers(layerIds)</summary>
<div>
<br/>

设置不参与分析的 layer id 数组

参数：

* layerIds `Any`

</div>
</details>

<details><summary>exportAnalysisMap(meshes)</summary>
<div>
<br/>

渲染分析结果并读出 RGBA 像素数据，未启用时返回 null

参数：

* meshes `Any`

</div>
</details>

<details><summary>getAnalysisType()</summary>
<div>
<br/>

获取分析类型标识，如 cut 或 viewshed

</div>
</details>
