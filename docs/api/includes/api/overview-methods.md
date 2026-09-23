<details><summary>buildOn(map map to build on)</summary>
<div>
<br/>

构建 overview 控件的 DOM，包含地图容器与折叠按钮

参数：

* map map to build on `Map`

返回：

* `HTMLDOMElement`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

控件加入地图时创建概览地图并监听地图事件

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

控件移除时解绑地图事件并销毁概览地图

</div>
</details>

<details><summary>maxmize()</summary>
<div>
<br/>

展开概览控件到配置尺寸并创建概览地图

返回：

* `control.Overview`

</div>
</details>

<details><summary>minimize()</summary>
<div>
<br/>

收起概览控件，移除概览地图并把容器尺寸置零

返回：

* `control.Overview`

</div>
</details>

<details><summary>getOverviewMap()</summary>
<div>
<br/>

获取概览控件内部的概览地图对象

返回：

* `Map`

</div>
</details>
