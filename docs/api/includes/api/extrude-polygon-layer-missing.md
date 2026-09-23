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

<details><summary>setURLModifier(modifier)</summary>
<div>
<br/>

设置用于改写资源 URL 的函数

参数：

* modifier `Function`

</div>
</details>

<details><summary>getURLModifier()</summary>
<div>
<br/>

获取图层当前的 URL 修改函数

</div>
</details>

<details><summary>getEvents()</summary>
<div>
<br/>

获取图层监听的 map 事件表，含 spatialreferencechange

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

更新指定样式索引上的 symbol 属性

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

设置图层 polygonOffset 及全局累计值

参数：

* offset `number`
* total `number`

</div>
</details>

<details><summary>getTotalPolygonOffset()</summary>
<div>
<br/>

获取全局分配的 polygonOffset 总数

</div>
</details>

<details><summary>identify(coordinate, options?, options.tolerance?, options.count?)</summary>
<div>
<br/>

拾取指定 coordinate 处的 geometry，返回 geometry 数组

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

拾取容器坐标点处的 geometry，可按容差与数量过滤

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

获取图层样式对象，以 style 字段包装图层样式

</div>
</details>

<details><summary>outlineAll()</summary>
<div>
<br/>

高亮图层内全部 geometry 的轮廓

</div>
</details>

<details><summary>outline(geoIds)</summary>
<div>
<br/>

高亮指定 id 的 geometry 轮廓

参数：

* geoIds `string[]`

</div>
</details>

<details><summary>cancelOutline()</summary>
<div>
<br/>

取消图层上全部描边高亮，返回图层本身

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

导出图层 JSON，包含配置与全部 geometry

返回：

* `Object` layer's JSON

</div>
</details>

<details><summary>getTileSize()</summary>
<div>
<br/>

获取 painter 使用的默认 tile size，固定为 1 乘 1

</div>
</details>

<details><summary>getAltitude()</summary>
<div>
<br/>

获取图层的高度值，OverlayLayer 实现固定返回 0

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

向图层添加 geometry 时回调，并按图层样式设置其 symbol

参数：

* geo `Geometry`

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

隐藏图层及其全部 geometry，返回图层本身

返回：

* `this`

</div>
</details>

<details><summary>onGeometryEvent(param?)</summary>
<div>
<br/>

处理 geometry 的 id、zIndex、位置与 symbol 变化事件

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

隐藏图层及其全部 geometry，返回图层本身

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

图层加载完成后的生命周期回调

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

获取图层的 renderer 实例，未创建时返回 undefined

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

图层添加到地图后的生命周期回调

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

图层 renderer 创建完成后的生命周期回调

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

canvas 创建完成后的生命周期回调

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

图层从地图移除时的生命周期回调

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

获取图层实际使用的 renderer 名称，WebGL 为 gl，WebGPU 为 gpu

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

导出图层 JSON，包含配置与全部 geometry

参数：

* options（可选） `any`

返回：

* `LayerJSONType`

</div>
</details>

<details><summary>identify(_coordinate, _options)</summary>
<div>
<br/>

拾取指定 coordinate 处的 geometry，返回 geometry 数组

参数：

* _coordinate `Coordinate`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>identifyAtPoint(_containerPoint, _options)</summary>
<div>
<br/>

拾取容器坐标点处的 geometry，可按容差与数量过滤

参数：

* _containerPoint `Point`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

获取子图层数组，仅容器型图层实现该可选成员

返回：

* `Layer[]`

</div>
</details>
