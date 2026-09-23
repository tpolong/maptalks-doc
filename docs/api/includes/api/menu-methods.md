<details><summary>addTo(owner)</summary>
<div>
<br/>

把菜单添加到 geometry 或 map 并替换其原有菜单

参数：

* owner `Geometry | Map`

</div>
</details>

<details><summary>setItems(items)</summary>
<div>
<br/>

设置菜单的菜单项数组，减号项表示分隔线

参数：

* items `Array<MenuItem>` items of the menu return &#123;ui.Menu&#125; this

</div>
</details>

<details><summary>getItems()</summary>
<div>
<br/>

获取菜单当前的菜单项数组

返回：

* `Object[]|String|HTMLElement` - items of the menu

</div>
</details>

<details><summary>getTransformOrigin()</summary>
<div>
<br/>

获取菜单 CSS 变换原点的像素坐标字符串

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

返回菜单监听的地图事件，移动缩放或点击时移除菜单 DOM

</div>
</details>
