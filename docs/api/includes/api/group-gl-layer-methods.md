<details><summary>sortLayersByZIndex()</summary>
<div>
<br/>

按 zIndex 升序重新排列组内的子图层

</div>
</details>

<details><summary>setSceneConfig(sceneConfig)</summary>
<div>
<br/>

设置场景配置并通知渲染器立即更新场景

参数：

* sceneConfig `GroupGLLayerSceneConfig`

返回：

* `this`

</div>
</details>

<details><summary>getSceneConfig()</summary>
<div>
<br/>

获取场景配置的深拷贝副本

返回：

* `GroupGLLayerSceneConfig`

</div>
</details>

<details><summary>getGroundConfig()</summary>
<div>
<br/>

获取场景配置中的地面 ground 配置

返回：

* `SceneGround`

</div>
</details>

<details><summary>getWeatherConfig()</summary>
<div>
<br/>

获取场景配置中的天气 weather 配置

返回：

* `SceneWeather`

</div>
</details>

<details><summary>getScanEffectConfig()</summary>
<div>
<br/>

获取后期处理中的扫描特效 scanEffect 配置

返回：

* `ScanEffect`

</div>
</details>

<details><summary>addLayer(layer, index?)</summary>
<div>
<br/>

向组内添加 gl 渲染的子图层，可指定插入位置

参数：

* layer `maptalks.Layer` new layer
* index（可选） `number` index to insert

返回：

* `GroupGLLayer` this

</div>
</details>

<details><summary>removeLayer(layer)</summary>
<div>
<br/>

从组内移除指定子图层并解绑其事件监听

参数：

* layer `maptalks.Layer`

返回：

* `this`

</div>
</details>

<details><summary>clearLayers()</summary>
<div>
<br/>

移除组内全部子图层

返回：

* `this`

</div>
</details>

<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

获取子图层累计占用的 polygon offset 数量

返回：

* `number`

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

获取组内所有子图层，返回数组副本

返回：

* `TileLayer[]`

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

导出GroupGLLayer的序列化JSON对象，可以用于反序列化为一个GroupGLLayer对象。

返回：

* `Any` layer's profile JSON

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

加载完成回调，准备各子图层并初始化地形图层

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

图层移除时卸载子图层、分析对象并清理地形

</div>
</details>

<details><summary>getChildLayer(id)</summary>
<div>
<br/>

按 id 获取组内的子图层，不存在时返回 null

参数：

* id `string`

返回：

* `maptalks.Layer | null`

</div>
</details>

<details><summary>getLayer(id)</summary>
<div>
<br/>

按 id 获取子图层，与 getChildLayer 等价

参数：

* id `string`

返回：

* `maptalks.Layer | null`

</div>
</details>

<details><summary>addAnalysis(analysis)</summary>
<div>
<br/>

向图层添加 analysis 分析对象并触发重绘

参数：

* analysis `Analysis`

</div>
</details>

<details><summary>removeAnalysis(analysis)</summary>
<div>
<br/>

从图层移除指定 analysis 对象并停止其分析

参数：

* analysis `Analysis`

</div>
</details>

<details><summary>clearAnalysis()</summary>
<div>
<br/>

移除图层上全部 analysis 对象并清空列表

</div>
</details>

<details><summary>identify(coordinate, options)</summary>
<div>
<br/>

查询给定坐标上的数据要素

参数：

* coordinate `maptalks.Coordinate` coordinate to identify
* options `object` options

返回：

* `any[]`

</div>
</details>

<details><summary>identifyAtPoint(point, options)</summary>
<div>
<br/>

查询给定容器坐标（containerPoint）上的数据要素

参数：

* point `maptalks.Point` container point to identify
* options `any = {}` the identify options

返回：

* `any[]`

</div>
</details>

<details><summary>getTerrain()</summary>
<div>
<br/>

获取当前地形配置，未设置时为 undefined

返回：

* `TerrainOptions | undefined | null`

</div>
</details>

<details><summary>setTerrain(info)</summary>
<div>
<br/>

设置地形配置并重建地形图层、更新中心海拔

参数：

* info `TerrainOptions | null`

</div>
</details>

<details><summary>removeTerrain()</summary>
<div>
<br/>

移除地形，等同于 setTerrain 传入 null

</div>
</details>

<details><summary>updateTerrainMaterial(mat)</summary>
<div>
<br/>

合并更新地形材质参数并刷新地形图层

参数：

* mat `object`

</div>
</details>

<details><summary>queryTerrain(coord, out)</summary>
<div>
<br/>

查询坐标处地形高度，返回高度与是否命中同级瓦片

参数：

* coord `maptalks.Coordinate`
* out `QueryHitResult`

返回：

* `QueryHitResult`

</div>
</details>

<details><summary>queryTerrainAtPoint(containerPoint)</summary>
<div>
<br/>

以容器坐标射线拾取地形网格，返回命中坐标

参数：

* containerPoint `maptalks.Point`

</div>
</details>

<details><summary>query3DTilesAtPoint(containerPoint)</summary>
<div>
<br/>

查询容器坐标下首个 3D Tiles 命中的坐标

参数：

* containerPoint `maptalks.Point`

</div>
</details>

<details><summary>queryTerrainByProjCoord(projCoord, out)</summary>
<div>
<br/>

按投影坐标查询地形高度，返回高度与是否命中同级瓦片

参数：

* projCoord `maptalks.Coordinate`
* out `QueryHitResult`

返回：

* `QueryHitResult`

</div>
</details>

<details><summary>getTerrainLayer()</summary>
<div>
<br/>

获取内部创建的地形图层，未启用时为 undefined

返回：

* `TerrainLayer | undefined`

</div>
</details>

<details><summary>fire(args)</summary>
<div>
<br/>

派发事件，layerload 时先让渲染完成的子图层也派发

参数：

* args `Any`

</div>
</details>
