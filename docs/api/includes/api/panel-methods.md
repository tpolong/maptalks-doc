<details><summary>buildOn(map map to build on)</summary>
<div>
<br/>

构建 Panel 的 DOM 容器并按配置绑定拖拽

参数：

* map map to build on `Map`

返回：

* `HTMLDOMElement`

</div>
</details>

<details><summary>update()</summary>
<div>
<br/>

重建 Panel 容器，重建前先销毁拖拽处理

返回：

* `control.Panel` this

</div>
</details>

<details><summary>setContent(content)</summary>
<div>
<br/>

设置 Panel 内容并触发 contentchange 事件

参数：

* content `string | HTMLElement` content of the infowindow. return &#123;control.Panel&#125; this

触发事件：

* `Panel#contentchange`

</div>
</details>

<details><summary>getContent()</summary>
<div>
<br/>

获取 Panel 当前的内容

返回：

* `String|HTMLElement` - content of the infowindow

</div>
</details>
