<details><summary>getContainerExtent(out?)</summary>
<div>
<br/>

获取集合内所有 geometry 的 container extent 并集

参数：

* out（可选） `PointExtent`

返回：

* `PointExtent`

</div>
</details>

<details><summary>setGeometries(_geometries)</summary>
<div>
<br/>

将多个几何图形设置到几何图形集合

参数：

* _geometries `Geometry[]`

返回：

* `GeometryCollection` this

触发事件：

* `GeometryCollection#shapechange`

</div>
</details>

<details><summary>getGeometries()</summary>
<div>
<br/>

获取几何集合中的几何图形们

返回：

* `Geometry[]` geometries

</div>
</details>

<details><summary>forEach(fn)</summary>
<div>
<br/>

按顺序对集合中存在的每个几何体执行一次提供的回调。

参数：

* fn `(geo: Geometry, index: number) => void, context?: any` a callback function

返回：

* `GeometryCollection` this

</div>
</details>

<details><summary>filter(fn?)</summary>
<div>
<br/>

创建一个几何集合类，这个集合类的所有元素都通过所提供的函数实现的测试

参数：

* fn（可选） `(geo: Geometry) => boolean, context?: any` Function to test each geometry

返回：

* `GeometryCollection` A GeometryCollection with all elements that pass the test

</div>
</details>

<details><summary>translate(offset)</summary>
<div>
<br/>

按给定偏移平移或移动几何体集合。

参数：

* offset `Coordinate` translate offset

返回：

* `GeometryCollection` this

</div>
</details>

<details><summary>isEmpty()</summary>
<div>
<br/>

几何图形集合是否为空

返回：

* `Boolean`

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

移除本身，如果图层含有的话

返回：

* `Geometry` this

触发事件：

* `GeometryCollection#removestart`
* `GeometryCollection#remove`
* `GeometryCollection#removeend`

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

显示几何集合

返回：

* `GeometryCollection` this

触发事件：

* `GeometryCollection#show`

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

隐藏几何集合

返回：

* `GeometryCollection` this

触发事件：

* `GeometryCollection#hide`

</div>
</details>

<details><summary>onConfig(config?)</summary>
<div>
<br/>

把配置变更应用到集合内的每个 geometry

参数：

* config（可选） `string | Record<string, any>`

</div>
</details>

<details><summary>getSymbol()</summary>
<div>
<br/>

获取 symbol，无自身 symbol 时返回子 geometry 的 children 数组

返回：

* `any`

</div>
</details>

<details><summary>setSymbol(s?)</summary>
<div>
<br/>

设置 symbol，传含 children 的对象时按序分给各子 geometry，否则统一设置

参数：

* s（可选） `any`

返回：

* `this`

</div>
</details>

<details><summary>startEdit(opts?)</summary>
<div>
<br/>

开始编辑集合内全部 geometry，可用 symbol 指定编辑时的样式

参数：

* opts（可选） `GeometryEditOptionsType`

返回：

* `this`

</div>
</details>

<details><summary>endEdit()</summary>
<div>
<br/>

结束编辑，恢复编辑前的 symbol 与可见性并触发 editend

返回：

* `this`

</div>
</details>

<details><summary>isEditing()</summary>
<div>
<br/>

集合是否处于编辑状态

返回：

* `boolean`

</div>
</details>

<details><summary>undoEdit()</summary>
<div>
<br/>

从上次位置起撤销一个子 geometry 的编辑并触发 undoedit

返回：

* `this`

</div>
</details>

<details><summary>redoEdit()</summary>
<div>
<br/>

从上次位置起重做一个子 geometry 的编辑并触发 redoedit

返回：

* `this`

</div>
</details>

<details><summary>undoEditcheck()</summary>
<div>
<br/>

是否所有子 geometry 的编辑都已全部撤回

返回：

* `boolean`

</div>
</details>

<details><summary>redoEditcheck()</summary>
<div>
<br/>

是否所有子 geometry 的编辑都已全部重做

返回：

* `boolean`

</div>
</details>
