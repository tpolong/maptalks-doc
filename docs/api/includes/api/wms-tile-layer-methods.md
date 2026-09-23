<details><summary>onAdd()</summary>
<div>
<br/>

layer 加入地图时的回调，按设备像素比与 wms 版本初始化请求参数

</div>
</details>

<details><summary>getTileUrl(x, y, z)</summary>
<div>
<br/>

获取 tile 的 WMS 请求 url，拼接 wms 参数与 bbox

参数：

* x `number`
* y `number`
* z `number`

返回：

* `string`

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

导出该 WMS 图层的 JSON 描述，可用于 fromJSON 重建实例

返回：

* `Any` layer's JSON

</div>
</details>
