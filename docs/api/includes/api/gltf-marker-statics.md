<details><summary>parseJSONData(json)</summary>
<div>
<br/>

由 JSON 反序列化 GLTFMarker 并恢复 zoomOnAdded 配置

参数：

* json `Any`

</div>
</details>

<details><summary>fromJSON(json)</summary>
<div>
<br/>

由 JSON 创建 GLTFMarker 实例

参数：

* json `Any`

</div>
</details>

<details><summary>getGLTFAnchorsAlongLineString(coordinates, bboxWidth, map, options)</summary>
<div>
<br/>

沿线计算 gltf 模型的锚点位置与朝向，支持间距、数量与端点对齐

参数：

* coordinates `Any`
* bboxWidth `Any`
* map `Any`
* options `Any`

</div>
</details>

<details><summary>combineGLTFBoundingBox(markers)</summary>
<div>
<br/>

合并多个 GLTFMarker 的 boundingBox 并返回 min 与 max，无 marker 时返回 null

参数：

* markers `Any`

</div>
</details>
