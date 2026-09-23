<details><summary>clear()</summary>
<div>
<br/>

清空本层及内部 marker、line、polygon 子图层

</div>
</details>

<details><summary>bringToFront()</summary>
<div>
<br/>

将 polygon、line、marker 三个子图层依次置顶

</div>
</details>

<details><summary>addGeometry(geometries)</summary>
<div>
<br/>

添加 geometry 并按类型分发到 marker、line 或 polygon 子图层

参数：

* geometries `Geometry | Array<Geometry>`

</div>
</details>

<details><summary>getGeometryById(id)</summary>
<div>
<br/>

按 id 在 marker、line、polygon 子图层中查找 geometry，未找到返回 null

参数：

* id `string | number`

返回：

* `Geometry`

</div>
</details>

<details><summary>removeGeometry(geometries)</summary>
<div>
<br/>

从图层列表和对应子图层中移除指定 geometry

参数：

* geometries `Geometry | Geometry[]`

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

图层移除时清空 geometry 并销毁三个子图层及其事件绑定

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

图层加入 map 时按 polygon、line、marker 顺序添加子图层并绑定 removegeo 事件

</div>
</details>

<details><summary>getRenderer()</summary>
<div>
<br/>

获取 marker 子图层的 renderer

</div>
</details>
