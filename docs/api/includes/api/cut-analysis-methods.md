<details><summary>update(name, value)</summary>
<div>
<br/>

更新裁剪分析的参数并同步渲染选项

参数：

* name `Any`
* value `Any`

</div>
</details>

<details><summary>reset()</summary>
<div>
<br/>

按配置的 position、rotation、scale 重置裁剪框

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
