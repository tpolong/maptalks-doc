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

合入主材质参数并更新渲染器，传空则清除材质

参数：

* matInfo `LitMaterial`

</div>
</details>

<details><summary>updateSideMaterial(matInfo)</summary>
<div>
<br/>

合入侧面材质参数并更新渲染器，传空则回退到主材质

参数：

* matInfo `LitMaterial`

</div>
</details>

<details><summary>updateDataConfig(dataConfig)</summary>
<div>
<br/>

合入新的 dataConfig 并更新渲染器，返回图层本身

参数：

* dataConfig `LitDataConfig`

</div>
</details>

<details><summary>setURLModifier(modifier)</summary>
<div>
<br/>

设置改写资源请求 URL 的函数，返回图层本身

参数：

* modifier `Function`

</div>
</details>

<details><summary>getURLModifier()</summary>
<div>
<br/>

获取改写资源加载 url 的修饰函数

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

返回图层监听的事件映射，含空间参考变化事件

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

图层配置变更时应用新配置并同步给渲染器

参数：

* conf `unknown`

</div>
</details>

<details><summary>updateSymbol(idx, symbol)</summary>
<div>
<br/>

合入指定序号样式的 symbol 并重设图层样式

参数：

* idx `number`
* symbol `Record<string, any>`

</div>
</details>

<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

获取图层需要的 polygonOffset 数量，拉伸多边形图层固定返回 0

</div>
</details>

<details><summary>getPolygonOffset()</summary>
<div>
<br/>

获取图层的 polygonOffset 值，拉伸多边形图层固定返回 0

</div>
</details>

<details><summary>setPolygonOffset(offset, total)</summary>
<div>
<br/>

设置图层在全局 polygonOffset 管理中的偏移值与总数

参数：

* offset `number`
* total `number`

</div>
</details>

<details><summary>getTotalPolygonOffset()</summary>
<div>
<br/>

获取 GroupGLLayer 分配的 polygonOffset 总数

</div>
</details>

<details><summary>identify(coordinate, options?, options.tolerance?, options.count?)</summary>
<div>
<br/>

查询给定 coordinate 处命中的 geometry 数组

参数：

* coordinate `maptalks.Coordinate` coordinate to identify
* options（可选） `Object` =null]  - options
* options.tolerance（可选） `Object` =0] - identify tolerance in pixel
* options.count（可选） `Object` =null]  - result count

返回：

* `Geometry[]` geometries identified

</div>
</details>

<details><summary>identifyAtPoint(point, options?, options.tolerance?, options.count?)</summary>
<div>
<br/>

查询给定容器坐标点命中的 geometry，可设容差与数量

参数：

* point `Any` point to identify
* options（可选） `Any` =null]  - options
* options.tolerance（可选） `Any` =0] - identify tolerance in pixel
* options.count（可选） `Any` =null]  - result count

返回：

* `Any` geometries identified

</div>
</details>

<details><summary>getComputedStyle()</summary>
<div>
<br/>

获取图层计算后样式并以 style 字段返回

</div>
</details>

<details><summary>outlineAll()</summary>
<div>
<br/>

高亮图层内全部 geometry 的描边

</div>
</details>

<details><summary>outline(geoIds)</summary>
<div>
<br/>

为指定 id 数组的 geometry 添加描边高亮

参数：

* geoIds `string[]`

</div>
</details>

<details><summary>cancelOutline()</summary>
<div>
<br/>

取消图层内 geometry 的描边高亮

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

导出图层的 JSON，含 type、id、options 与全部 geometry

返回：

* `Object` layer's JSON

</div>
</details>

<details><summary>getTileSize()</summary>
<div>
<br/>

返回 painter 内部使用的默认 tile 尺寸 1x1

</div>
</details>

<details><summary>getAltitude()</summary>
<div>
<br/>

获取图层高程，OverlayLayer 固定返回 0

</div>
</details>

<details><summary>getGeometryById(id)</summary>
<div>
<br/>

通过 id 获取 geometry

参数：

* id `string | number` id of the geometry

返回：

* `Geometry`

</div>
</details>

<details><summary>getGeometries(filter?)</summary>
<div>
<br/>

获取所有geometries，如果提供 filter() 方法,则根据方法返回

参数：

* filter（可选） `(geo: Geometry) => boolean, context?: any` =undefined   - a function to filter the geometries

返回：

* `Array<Geometry>`

</div>
</details>

<details><summary>getFirstGeometry()</summary>
<div>
<br/>

获取第一个geometry, geometry 位于底部

返回：

* `Any` first geometry

</div>
</details>

<details><summary>getLastGeometry()</summary>
<div>
<br/>

获取最后一个geometry, geometry 位于上部

返回：

* `Any` last geometry

</div>
</details>

<details><summary>getCount()</summary>
<div>
<br/>

获取 geometries 个数

返回：

* `Any` count

</div>
</details>

<details><summary>getExtent()</summary>
<div>
<br/>

获取 geometries 的 extent, 如果 layer 为空,返回 null

返回：

* `Extent` - extent of the layer

</div>
</details>

<details><summary>forEach(fn)</summary>
<div>
<br/>

按顺序为图层中的每个 geometry 执行一次提供的回调。

参数：

* fn `(geo: Geometry, index: number) => void, context?: any` a callback function

返回：

* `Any` this

</div>
</details>

<details><summary>filter(fn)</summary>
<div>
<br/>

创建一个包含所有通过由提供的函数实现的测试的 geometries 的 GeometryCollection。

参数：

* fn `(geo: Geometry) => boolean, context?: any` Function to test each geometry

返回：

* `Any` A GeometryCollection with all the geometries that pass the test

</div>
</details>

<details><summary>isEmpty()</summary>
<div>
<br/>

layer 是否为空

返回：

* `Boolean`

</div>
</details>

<details><summary>addGeometry(geometries, fitView?)</summary>
<div>
<br/>

为 layer 添加 geometries

参数：

* geometries `Geometry | Array<Geometry>` one or more geometries
* fitView（可选） `boolean | addGeometryFitViewOptions` =false                                         - automatically set the map to a fit center and zoom for the geometries

返回：

* `Any` this

</div>
</details>

<details><summary>getGeoMinZIndex()</summary>
<div>
<br/>

所有 geometries 最小的 zIndex

</div>
</details>

<details><summary>getGeoMaxZIndex()</summary>
<div>
<br/>

所有 geometries 最大的 zIndex

</div>
</details>

<details><summary>removeGeometry(geometries)</summary>
<div>
<br/>

移除一个或多个geometries

参数：

* geometries `Geometry | Geometry[]` geometry ids or geometries to remove

返回：

* `Any` this

</div>
</details>

<details><summary>clear()</summary>
<div>
<br/>

清除 layer

返回：

* `Any` this

</div>
</details>

<details><summary>getStyle()</summary>
<div>
<br/>

获取 layer 的 style

返回：

* `Any` layer's style

</div>
</details>

<details><summary>setStyle(style)</summary>
<div>
<br/>

layer 设置 style, 用样式符号对满足条件的 geometries进行样式修改
基于[mapbox-gl-js's style specification]， &#123;https://www.mapbox.com/mapbox-gl-js/style-spec/#types-filter&#125;.

参数：

* style `any | any[]` layer's style

返回：

* `Any` this

触发事件：

* `OverlayLayer#setstyle`

</div>
</details>

<details><summary>removeStyle()</summary>
<div>
<br/>

移除 style

返回：

* `Any` this

触发事件：

* `OverlayLayer#removestyle`

</div>
</details>

<details><summary>onAddGeometry(geo)</summary>
<div>
<br/>

几何体加入图层时按图层 style 设置其 symbol

参数：

* geo `Geometry`

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

隐藏图层并通知图层内所有几何体隐藏

返回：

* `this`

</div>
</details>

<details><summary>onGeometryEvent(param?)</summary>
<div>
<br/>

响应几何体变化事件，同步图层缓存与 renderer

参数：

* param（可选） `HandlerFnResultType`

</div>
</details>

<details><summary>load()</summary>
<div>
<br/>

加载tile layer,不能被子类重写

</div>
</details>

<details><summary>getId()</summary>
<div>
<br/>

获取layer Id

返回：

* `Any` id

</div>
</details>

<details><summary>setId(id)</summary>
<div>
<br/>

为layer新设一个 Id

参数：

* id `string` new layer id

返回：

* `Any` this

触发事件：

* `Layer#idchange`

</div>
</details>

<details><summary>addTo(map)</summary>
<div>
<br/>

将图层添加至 map

参数：

* map `Map` map added to

返回：

* `Any` this

</div>
</details>

<details><summary>setZIndex(zIndex)</summary>
<div>
<br/>

设置图层的 zIndex 并重排地图上的图层顺序

参数：

* zIndex `number` layer's z-index

返回：

* `Any` this

</div>
</details>

<details><summary>getZIndex()</summary>
<div>
<br/>

获取layer 的 zIndex

返回：

* `number`

</div>
</details>

<details><summary>getMinZoom()</summary>
<div>
<br/>

获取 layer 的 minZoom

返回：

* `number`

</div>
</details>

<details><summary>getMaxZoom()</summary>
<div>
<br/>

获取layer 的 maxZoom

返回：

* `number`

</div>
</details>

<details><summary>getOpacity()</summary>
<div>
<br/>

获取 layer 的 opacity

返回：

* `Number`

</div>
</details>

<details><summary>setOpacity(op)</summary>
<div>
<br/>

设置 layer 的 opacity

参数：

* op `number` layer's opacity

返回：

* `Any` this

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

获取图层所在 map

返回：

* `Map`

</div>
</details>

<details><summary>getProjection()</summary>
<div>
<br/>

获取 layer 所在map 的 projection

返回：

* `CommonProjectionType`

</div>
</details>

<details><summary>bringToFront()</summary>
<div>
<br/>

将图层置顶

返回：

* `Any` this

</div>
</details>

<details><summary>bringToBack()</summary>
<div>
<br/>

将图层置底

返回：

* `Layer` this

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

显示图层

返回：

* `Any` this

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

隐藏图层并通知图层内所有几何体隐藏

返回：

* `Any` this

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

layer 的当前 visible 状态

返回：

* `boolean`

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

移除图层

返回：

* `Any` this

</div>
</details>

<details><summary>getMask()</summary>
<div>
<br/>

获取 mask geometry

返回：

* `Geometry`

</div>
</details>

<details><summary>setMask(mask)</summary>
<div>
<br/>

设置mask geometry, 只显示掩码的区域

参数：

* mask `Polygon | MultiPolygon | Marker` mask geometry, can only be a Marker with vector symbol, a Polygon or a MultiPolygon

返回：

* `Layer` this

</div>
</details>

<details><summary>removeMask()</summary>
<div>
<br/>

移除图层的 mask 并请求重绘

返回：

* `Layer` this

</div>
</details>

<details><summary>onLoadEnd()</summary>
<div>
<br/>

layer 加载完成后的钩子，由子类重写，默认空实现

</div>
</details>

<details><summary>isLoaded()</summary>
<div>
<br/>

是否加载layer

返回：

* `boolean`

</div>
</details>

<details><summary>getCollisionIndex()</summary>
<div>
<br/>

获取collision index

返回：

* `CollisionIndex`

</div>
</details>

<details><summary>clearCollisionIndex()</summary>
<div>
<br/>

清除 layer 的 collision index。
如果 collisionScope !== 'layer' 将忽略

</div>
</details>

<details><summary>getRenderer()</summary>
<div>
<br/>

获取 layer 的 renderer 实例

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

图层配置变更时应用新配置并同步给渲染器

参数：

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

layer 绑定到 map 后的回调，子类可重写

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

renderer 创建完成后的回调，子类可重写

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

canvas 创建完成后的回调，子类可重写

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

layer 从 map 移除时的回调，释放侧边 painter 资源

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

按 map 的 renderer 类型返回 layer 使用的 renderer 名

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

导出图层的 JSON，含 type、id、options 与全部 geometry

参数：

* options（可选） `any`

返回：

* `LayerJSONType`

</div>
</details>

<details><summary>identify(_coordinate, _options)</summary>
<div>
<br/>

查询给定 coordinate 处命中的 geometry 数组

参数：

* _coordinate `Coordinate`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>identifyAtPoint(_containerPoint, _options)</summary>
<div>
<br/>

查询给定容器坐标点命中的 geometry，可设容差与数量

参数：

* _containerPoint `Point`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

获取子 layer 列表，仅分组类型 layer 实现

返回：

* `Layer[]`

</div>
</details>
