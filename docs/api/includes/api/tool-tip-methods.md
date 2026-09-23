<details><summary>addTo(owner)</summary>
<div>
<br/>

把 tooltip 添加到 geometry 或 UIMarker 并绑定鼠标显示事件

参数：

* owner `Geometry` geometry to add.

返回：

* `UIComponent` this

触发事件：

* `UIComponent#add`

</div>
</details>

<details><summary>setStyle(cssName)</summary>
<div>
<br/>

设置 tooltip 内容的 css 类名

参数：

* cssName `string` set for ToolTip's content.

</div>
</details>

<details><summary>getStyle()</summary>
<div>
<br/>

获取 tooltip 内容的 css 类名

返回：

* `String` css class name - set for ToolTip's content.

</div>
</details>

<details><summary>getContent()</summary>
<div>
<br/>

获取 tooltip 的内容

返回：

* `String` tooltip's content

</div>
</details>

<details><summary>buildOn()</summary>
<div>
<br/>

创建 tooltip 的 DOM 容器，content 为函数时调用它生成内容

</div>
</details>

<details><summary>onMouseOut()</summary>
<div>
<br/>

鼠标移出时清除显示延时并移除 tooltip 的 DOM，解绑地图事件

</div>
</details>

<details><summary>onMouseMove(e)</summary>
<div>
<br/>

鼠标在图形上移动时按 showTimeout 延时显示提示框

参数：

* e `Any`

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

移除提示框时清理定时器并解绑宿主图形上的鼠标事件

</div>
</details>

<details><summary>hideDom()</summary>
<div>
<br/>

隐藏提示框的 DOM 元素

</div>
</details>

<details><summary>onEvent()</summary>
<div>
<br/>

地图缩放旋转倾斜时更新位置并隐藏提示框

</div>
</details>
