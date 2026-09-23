<details><summary>loadFrom(url, fetchOptions)</summary>
<div>
<br/>

从 url 拉取 JSON 并创建 VectorTileLayer 实例

参数：

* url `string`
* fetchOptions `Record<string, any>`

</div>
</details>

<details><summary>fromJSON(layerJSON)</summary>
<div>
<br/>

由 JSON 反序列化创建 VectorTileLayer，类型不匹配返回 null

参数：

* layerJSON `object`

</div>
</details>

<details><summary>registerPlugin(Plugin)</summary>
<div>
<br/>

按 type 注册 VectorTileLayer 插件

参数：

* Plugin `{ type: string;[key: string]: unknown }`

</div>
</details>

<details><summary>getPlugins()</summary>
<div>
<br/>

获取已注册的 VectorTileLayer 插件集合

</div>
</details>

<details><summary>compressStyleJSON(json)</summary>
<div>
<br/>

把样式数组压缩为 plugins 与 styles 结构，非数组或空数组原样返回

参数：

* json `object | object[]`

</div>
</details>
