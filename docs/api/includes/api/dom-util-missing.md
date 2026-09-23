<details><summary>createElOn(tagName, style, container)</summary>
<div>
<br/>

创建 html 元素并设置 css 样式，挂载到指定容器上

参数：

* tagName `string`
* style `string` css styles
* container `HTMLElement`

</div>
</details>

<details><summary>doRemove(type, callback?)</summary>
<div>
<br/>

移除 dom 元素上指定事件类型的监听回调

参数：

* type `Any`
* callback（可选） `Any`

</div>
</details>

<details><summary>listensDomEvent(obj, type, handler)</summary>
<div>
<br/>

检查 dom 是否已注册该事件类型的监听函数，返回索引，未注册返回 -1

参数：

* obj `HTMLElement | Document` dom element to check
* type `string` event
* handler `Function` the listening function

返回：

* `Number` - the handler's index in the listener chain, returns -1 if not.

</div>
</details>

<details><summary>preventSelection(dom)</summary>
<div>
<br/>

禁止 dom 元素的文本选中与拖拽选择

参数：

* dom `Any`

</div>
</details>

<details><summary>getEventContainerPoint(ev, dom)</summary>
<div>
<br/>

把鼠标或触摸事件坐标换算成 dom 容器内的点

参数：

* ev `MouseEvent | TouchEvent` event
* dom `HTMLElement`

</div>
</details>

<details><summary>getClass(el)</summary>
<div>
<br/>

获取 dom 元素的 css class 字符串

参数：

* el `HTMLElement` css class

返回：

* `string`

</div>
</details>

<details><summary>setTransformMatrix(el, m)</summary>
<div>
<br/>

把矩阵文本写入 dom 的 css transform，相同则跳过

参数：

* el `Any`
* m `Any`

</div>
</details>

<details><summary>removeTransform(el)</summary>
<div>
<br/>

清除 dom 元素上已设置的 css transform

参数：

* el `Any`

</div>
</details>

<details><summary>isHTML(str)</summary>
<div>
<br/>

是否为含标签的 HTML 字符串

参数：

* str `string`

</div>
</details>

<details><summary>getDomRuler(tag)</summary>
<div>
<br/>

创建一个位于屏幕外的隐藏元素作为测量标尺

参数：

* tag `any`

</div>
</details>

<details><summary>isMoveEvent(type?)</summary>
<div>
<br/>

是否为移动类事件，即 mousemove 或 touchmove

参数：

* type（可选） `string`

</div>
</details>

<details><summary>isMousemoveEventBlocked(target, mousemoveThrottleTime)</summary>
<div>
<br/>

是否为需忽略的 mousemove，按节流时间判断并记录时间

参数：

* target `HTMLElement | any`
* mousemoveThrottleTime `number`

</div>
</details>
