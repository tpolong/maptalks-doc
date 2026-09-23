<details><summary>addGeometry(geometries, fitView)</summary>
<div>
<br/>

添加 geometry，GeoJSON 会先转换并同步注册为 marker

参数：

* geometries `Any`
* fitView `Any`

</div>
</details>

<details><summary>addMarker(markers)</summary>
<div>
<br/>

登记 marker 并分配 pickingId，同时触发 add 与 load 事件

参数：

* markers `Any`

</div>
</details>

<details><summary>toJSON(options)</summary>
<div>
<br/>

把图层序列化为 JSON，可选是否导出 style 与 geometries

参数：

* options `Any`

</div>
</details>

<details><summary>setStyle(layerStyle)</summary>
<div>
<br/>

设置图层样式并重新匹配 marker，传空则恢复默认样式

参数：

* layerStyle `Any`

</div>
</details>

<details><summary>getStyle()</summary>
<div>
<br/>

获取图层当前设置的原始样式

</div>
</details>

<details><summary>updateSymbol(idx, symbolProperties)</summary>
<div>
<br/>

同时更新图层样式与内部副本中第 idx 项 symbol 并重匹配 marker

参数：

* idx `Any`
* symbolProperties `Any`

</div>
</details>

<details><summary>getGLTFUrls()</summary>
<div>
<br/>

获取图层已登记的 gltf 模型 url 列表

</div>
</details>

<details><summary>clear()</summary>
<div>
<br/>

清空 layer 内所有 gltf marker 并重置 marker 映射缓存

</div>
</details>

<details><summary>outlineBatch(filterIndex)</summary>
<div>
<br/>

按样式索引开启该样式的 outline 并给命中的 geometry 描边

参数：

* filterIndex `Any`

</div>
</details>

<details><summary>outlineAll()</summary>
<div>
<br/>

对 layer 内所有 geometry 开启 outline 描边

</div>
</details>

<details><summary>cancelOutline()</summary>
<div>
<br/>

清除样式中的 outline 配置并取消所有 geometry 描边

</div>
</details>
