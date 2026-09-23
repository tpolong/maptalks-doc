<details><summary>update(name, value)</summary>
<div>
<br/>

按属性名更新，lines 走 setLines，其余存为渲染选项

参数：

* name `Any`
* value `Any`

</div>
</details>

<details><summary>addLine(inSightLine)</summary>
<div>
<br/>

添加一条带 from 与 to 的 inSight 射线

参数：

* inSightLine `Any`

</div>
</details>

<details><summary>removeLine(inSightLine)</summary>
<div>
<br/>

从分析中移除指定的 inSight 射线

参数：

* inSightLine `Any`

</div>
</details>

<details><summary>getLines()</summary>
<div>
<br/>

获取当前所有 inSight 射线

</div>
</details>

<details><summary>setLines(lines)</summary>
<div>
<br/>

替换全部 inSight 射线并触发重绘

参数：

* lines `Any`

</div>
</details>

<details><summary>clearLines()</summary>
<div>
<br/>

清空所有 inSight 射线

</div>
</details>

<details><summary>getIntersetction()</summary>
<div>
<br/>

获取与各射线相交的对象及其交点 coordinate

返回：

* `Object`

</div>
</details>

<details><summary>renderAnalysis(meshes)</summary>
<div>
<br/>

用 meshes 做可见性分析，返回 shader 的 uniform 集合

参数：

* meshes `Any`

</div>
</details>

<details><summary>getDefines()</summary>
<div>
<br/>

返回分析所用的 shader 宏定义

</div>
</details>
