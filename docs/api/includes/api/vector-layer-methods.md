<details><summary>onConfig(conf)</summary>
<div>
<br/>

配置变更时清理几何的 altitude 缓存并按需重绘

参数：

* conf `Record<string, any>`

</div>
</details>

<details><summary>identify(coordinate, options?)</summary>
<div>
<br/>

通过给定 coordinate 识别 geometries

参数：

* coordinate `Coordinate` coordinate to identify
* options（可选） `LayerIdentifyOptionsType` =null]  - options

返回：

* `Geometry[]` geometries identified

</div>
</details>

<details><summary>identifyAtPoint(point, options?)</summary>
<div>
<br/>

通过给定 point 识别 geometries

参数：

* point `Point` container point to identify
* options（可选） `LayerIdentifyOptionsType` =null]  - options

返回：

* `Geometry[]` geometries identified

</div>
</details>

<details><summary>getAltitude()</summary>
<div>
<br/>

获取图层的 altitude 值，未配置时为 0

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

输出 VectorLayer 的 json

参数：

* options（可选） `VectorLayerToJSONOptions` =null] - export options

返回：

* `Any` layer's JSON

</div>
</details>

<details><summary>getRenderer()</summary>
<div>
<br/>

获取图层使用的 canvas renderer

返回：

* `VectorLayerCanvasRenderer`

</div>
</details>
