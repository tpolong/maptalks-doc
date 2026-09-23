<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

获取图层需要的 polygonOffset 数量，拉伸多边形图层固定返回 0

返回：

* `0 | 1`

</div>
</details>

<details><summary>getPolygonOffset()</summary>
<div>
<br/>

获取图层的 polygonOffset 值，拉伸多边形图层固定返回 0

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

图层配置变更时应用新配置并同步给渲染器

参数：

* conf `Record<string, any>`

</div>
</details>

<details><summary>updateMaterial(matInfo)</summary>
<div>
<br/>

更新拉伸多边形顶面的 material 并同步渲染器，传空则清除

参数：

* matInfo `LitMaterial`

</div>
</details>

<details><summary>updateSideMaterial(matInfo)</summary>
<div>
<br/>

更新拉伸多边形侧面的 material 并同步渲染器，传空则清除

参数：

* matInfo `LitMaterial`

</div>
</details>

<details><summary>updateDataConfig(dataConfig)</summary>
<div>
<br/>

合并新的 dataConfig 并通知渲染器更新图层数据配置

参数：

* dataConfig `LitDataConfig`

</div>
</details>
