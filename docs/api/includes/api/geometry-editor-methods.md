<details><summary>getMap()</summary>
<div>
<br/>

获取地图对象

返回：

* `Map` map

</div>
</details>

<details><summary>prepare()</summary>
<div>
<br/>

准备编辑

</div>
</details>

<details><summary>start()</summary>
<div>
<br/>

开始编辑

</div>
</details>

<details><summary>stop()</summary>
<div>
<br/>

停止编辑

</div>
</details>

<details><summary>isEditing()</summary>
<div>
<br/>

编辑器是否在编辑

返回：

* `Boolean`

</div>
</details>

<details><summary>createHandle(containerPoint, opts)</summary>
<div>
<br/>

在给定容器坐标处创建编辑 handle 并绑定拖拽事件

参数：

* containerPoint `any`
* opts `any`

返回：

* `EditHandle`

</div>
</details>

<details><summary>cancel()</summary>
<div>
<br/>

取消本次编辑，回退到编辑历史的第一条记录

返回：

* `GeometryEditor`

</div>
</details>

<details><summary>undo()</summary>
<div>
<br/>

获取视图历史记录中的上一个地图视图

返回：

* `Object` map view

</div>
</details>

<details><summary>redo()</summary>
<div>
<br/>

获取视图历史记录中的下一个地图视图

返回：

* `Object` map view

</div>
</details>
