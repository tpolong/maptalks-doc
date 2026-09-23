<details><summary>proxyOptions()</summary>
<div>
<br/>

用 Proxy 包装 options，使直接赋值也触发 config 更新

</div>
</details>

<details><summary>callInitHooks()</summary>
<div>
<br/>

遍历并执行该类或父类用 addInitHook 添加的 init hooks

</div>
</details>

<details><summary>setOptions(options)</summary>
<div>
<br/>

已废弃的私有方法，直接写入 options 并提示改用 config

参数：

* options `ClassOptions`

</div>
</details>

<details><summary>config(conf?, value?)</summary>
<div>
<br/>

更新options中指定的配置项。
1. 如果没有提供参数，则返回options配置对象
2. 如果配置项有对应的handler，handler会被启用或停用，例如draggable

参数：

* conf（可选） `string | ClassOptions` config to update
* value（可选） `any`

返回：

* `ClassOptions | this`

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

options被更新时的回调函数

参数：

* conf `ClassOptions` updated options

</div>
</details>
