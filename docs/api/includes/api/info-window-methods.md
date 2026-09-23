<details><summary>addTo(owner)</summary>
<div>
<br/>

把信息窗口添加到 geometry 或 map，原窗口会先移除

参数：

* owner `Geometry | Map` geometry or map to addto.

返回：

* `UIComponent` this

触发事件：

* `UIComponent#add`

</div>
</details>

<details><summary>setContent(content)</summary>
<div>
<br/>

设置信息窗口内容，触发 contentchange 并在显示时重绘

参数：

* content `string | HTMLElement` content of the infowindow. return &#123;InfoWindow&#125; this

触发事件：

* `InfoWindow#contentchange`

</div>
</details>

<details><summary>getContent()</summary>
<div>
<br/>

获取信息窗口当前的内容

返回：

* `String|HTMLElement` - content of the infowindow

</div>
</details>

<details><summary>setTitle(title)</summary>
<div>
<br/>

设置信息窗口标题，显示中会重绘并触发 contentchange

参数：

* title `string` title of the infowindow. return &#123;InfoWindow&#125; this

触发事件：

* `InfoWindow#titlechange`

</div>
</details>

<details><summary>getTitle()</summary>
<div>
<br/>

获取信息窗口当前的标题

返回：

* `String|HTMLElement` - content of the infowindow

</div>
</details>

<details><summary>buildOn()</summary>
<div>
<br/>

创建信息窗口 DOM，含标题、关闭按钮与内容容器

返回：

* `HTMLElement`

</div>
</details>

<details><summary>getOffset()</summary>
<div>
<br/>

按对齐方式与 marker 尺寸计算信息窗口的像素偏移

</div>
</details>

<details><summary>show(coordinate)</summary>
<div>
<br/>

在指定 coordinate 显示信息窗口，无 map 或禁用时不显示

参数：

* coordinate `Coordinate`

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

返回 autoCloseOn 对应的 map 事件映射，用于自动关闭

</div>
</details>

<details><summary>getOwnerEvents()</summary>
<div>
<br/>

返回 autoOpenOn 对应的 owner 事件映射，用于自动打开

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

信息窗口移除时处理鼠标移出并解绑 DOM 事件

</div>
</details>

<details><summary>onDomRemove()</summary>
<div>
<br/>

解绑关闭按钮上的 click 与 touchend 事件监听

</div>
</details>
