<details><summary>update(name, value)</summary>
<div>
<br/>

更新裁剪分析的参数并同步渲染选项

参数：

* name `Any`
* value `Any`

</div>
</details>

<details><summary>renderAnalysis(meshes)</summary>
<div>
<br/>

渲染 cut 分析，返回 meshesMap 与 invisibleMap uniform

参数：

* meshes `Any`

</div>
</details>

<details><summary>getDefines()</summary>
<div>
<br/>

返回 shader define，开启 HAS_CUT 宏

</div>
</details>

<details><summary>addTo(layer)</summary>
<div>
<br/>

把裁剪分析添加到 layer，layer 未在 map 上时等待其 add 事件

参数：

* layer `Any`

</div>
</details>

<details><summary>enable()</summary>
<div>
<br/>

启用裁剪分析并请求 layer 重绘

</div>
</details>

<details><summary>disable()</summary>
<div>
<br/>

禁用裁剪分析并请求 layer 重绘

</div>
</details>

<details><summary>isEnable()</summary>
<div>
<br/>

是否已启用裁剪分析

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

从 layer 移除分析并销毁对应的 pass、mesh 与 picking 资源

</div>
</details>

<details><summary>update(name, value)</summary>
<div>
<br/>

更新裁剪分析的参数并同步渲染选项

参数：

* name `Any`
* value `Any`

</div>
</details>

<details><summary>getExcludeLayers()</summary>
<div>
<br/>

获取不参与裁剪分析的 layer id 列表

</div>
</details>

<details><summary>setExcludeLayers(layerIds)</summary>
<div>
<br/>

设置不参与裁剪分析的 layer id 列表

参数：

* layerIds `Any`

</div>
</details>

<details><summary>exportAnalysisMap(meshes)</summary>
<div>
<br/>

把分析结果渲染到帧缓冲并读取为像素数组，未启用时返回 null

参数：

* meshes `Any`

</div>
</details>

<details><summary>getAnalysisType()</summary>
<div>
<br/>

获取分析类型，裁剪分析返回 cut

</div>
</details>
