<details><summary>addTo(groupGLLayer)</summary>
<div>
<br/>

添加到GroupGLLayer上。

空间分析对象只支持添加到GroupGLLayer上，无法添加到其他WebGL图层。

参数：

* groupGLLayer **GroupGLLayer** GroupGLLayer图层

返回：

* this

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

从图层上移除空间分析对象。


返回：

* void

</div>
</details>

<details><summary>update(name, value)</summary>
<div>
<br/>

更新options数据。

参数：

* name **String** 设置名称
* value **any** 设置的值

返回：

* void

</div>
</details>

<details><summary>getAnalysisType()</summary>
<div>
<br/>

获取Analysis的类型。

返回：

* String

</div>
</details>

<details><summary>getDefines()</summary>
<div>
<br/>

内部调用方法。

返回Analysis绘制时在shader中添加的defines。

返回：

* Object

</div>
</details>

<details><summary>renderAnalysis(meshes)</summary>
<div>
<br/>

内部调用方法。

绘制空间分析场景（各分析子类实现），返回渲染所需的 uniform 变量。

参数：

* meshes **Mesh[]** 场景网格

返回：

* Object

</div>
</details>
<details><summary>enable()</summary>
<div>
<br/>

启用分析。

返回：

* void

</div>
</details>

<details><summary>disable()</summary>
<div>
<br/>

禁用分析。

返回：

* void

</div>
</details>

<details><summary>isEnable()</summary>
<div>
<br/>

分析是否已启用。

返回：

* Boolean

</div>
</details>

<details><summary>getExcludeLayers()</summary>
<div>
<br/>

获取分析时排除的图层id列表（分析时忽略这些图层）。

返回：

* String[]

</div>
</details>

<details><summary>setExcludeLayers(layerIds)</summary>
<div>
<br/>

设置分析时排除的图层id列表。

参数：

* layerIds **String[]** 图层id列表

返回：

* void

</div>
</details>

<details><summary>exportAnalysisMap(meshes)</summary>
<div>
<br/>

导出分析结果图（RGBA像素数据），分析未启用时返回 null。

参数：

* meshes **Mesh[]** 场景网格

返回：

* Uint8Array

</div>
</details>
