<details><summary>addOnLoadHook(fn)</summary>
<div>
<br/>

注册 map 加载完成后执行的回调，只能在 map 创建之前调用

参数：

* fn `string | ((...args) => void), ...args`

</div>
</details>

<details><summary>fromJSON(container, profile, options?)</summary>
<div>
<br/>

由 profile JSON 重建 map，可选择是否导入 baseLayer 与 layers

参数：

* container `MapContainerType`
* profile `{ [key: string]: any }`
* options（可选） `MapOptionsType`

</div>
</details>
