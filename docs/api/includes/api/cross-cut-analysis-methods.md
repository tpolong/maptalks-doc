<details><summary>getAltitudes(count)</summary>
<div>
<br/>

沿剖面线等距取点拾取高程，返回各点 coordinate 与 distance 数组

参数：

* count `Any`

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
