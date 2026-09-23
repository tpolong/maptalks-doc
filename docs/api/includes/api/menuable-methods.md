<details><summary>setMenu(options)</summary>
<div>
<br/>

设置右键菜单选项，并绑定默认的 contextmenu 打开行为

参数：

* options `MenuOptionsType` menu options

返回：

* `*` this

</div>
</details>

<details><summary>getMenu()</summary>
<div>
<br/>

获取当前右键菜单对象，尚未创建时返回 undefined

返回：

* `*` ui.Menu

</div>
</details>

<details><summary>openMenu(coordinate?)</summary>
<div>
<br/>

在指定 coordinate 处打开右键菜单，省略时取 geometry 或 map 中心

参数：

* coordinate（可选） `Coordinate` =null] - coordinate to open the context menu

返回：

* `*` this

</div>
</details>

<details><summary>setMenuItems(items)</summary>
<div>
<br/>

设置右键菜单的菜单项列表

参数：

* items `Array<MenuItem>` menu items

返回：

* `*` this

</div>
</details>

<details><summary>getMenuItems()</summary>
<div>
<br/>

获取右键菜单的菜单项，未设置时返回空数组

返回：

* `Object[]`

</div>
</details>

<details><summary>closeMenu()</summary>
<div>
<br/>

关闭右键菜单并触发 closemenu 事件

返回：

* `*` this

</div>
</details>

<details><summary>removeMenu()</summary>
<div>
<br/>

移除右键菜单及其选项并解绑事件，同时触发 removemenu 事件

返回：

* `*` this

</div>
</details>
