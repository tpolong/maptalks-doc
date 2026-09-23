<details><summary>registerPainter(name, clazz)</summary>
<div>
<br/>

注册指定名称的 3D painter 类，供 get3DPainterClass 取用

参数：

* name `string`
* clazz `unknown`

</div>
</details>

<details><summary>get3DPainterClass(name)</summary>
<div>
<br/>

按名字获取已注册的 3D painter 类

参数：

* name `string`

</div>
</details>

<details><summary>fromJSON(layerJSON)</summary>
<div>
<br/>

Reproduce a Layer from layer's JSON.

参数：

* layerJSON `{ [key: string]: any }`

返回：

* `Layer | null`

</div>
</details>
