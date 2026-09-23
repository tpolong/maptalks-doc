<details><summary>onRemove()</summary>
<div>
<br/>

图层移除时清空 geometry 并销毁三个子图层及其事件绑定

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

图层加入 map 时按 polygon、line、marker 顺序添加子图层并绑定 removegeo 事件

</div>
</details>

<details><summary>getRenderer()</summary>
<div>
<br/>

获取 marker 子图层的 renderer

</div>
</details>

<details><summary>getAltitude()</summary>
<div>
<br/>

获取图层高度，OverlayLayer 固定返回 0

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

向图层添加 geometry 时，若图层设置了 style 则套用该样式

参数：

* geo `Geometry`

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

隐藏图层，并通知所有 geometry 执行 onHide

返回：

* `this`

</div>
</details>

<details><summary>onGeometryEvent(param?)</summary>
<div>
<br/>

子 geometry 事件回调，按事件类型更新图层缓存

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

设置图层的 zIndex 并重新排序地图图层

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

隐藏图层，并通知所有 geometry 执行 onHide

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

图层加载完成后的回调，基类为空实现

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

获取 marker 子图层的 renderer

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

图层配置变更时的回调，执行 options hook 并让 renderer 重绘

参数：

* conf `{ [key: string]: any }`

</div>
</details>

<details><summary>onAdd()</summary>
<div>
<br/>

图层加入 map 时按 polygon、line、marker 顺序添加子图层并绑定 removegeo 事件

</div>
</details>

<details><summary>onRendererCreate()</summary>
<div>
<br/>

renderer 创建完成后的回调，基类为空实现

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

图层 canvas 创建完成后的回调，基类为空实现

</div>
</details>

<details><summary>onRemove()</summary>
<div>
<br/>

图层移除时清空 geometry 并销毁三个子图层及其事件绑定

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

按地图 renderer 返回图层应使用的 renderer 类型名

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

将 layer 导出为 JSON 对象，含 type、id 与 options

参数：

* options（可选） `any`

返回：

* `LayerJSONType`

</div>
</details>

<details><summary>identify(_coordinate, _options)</summary>
<div>
<br/>

按 coordinate 查询命中的 geometry，为接口方法

参数：

* _coordinate `Coordinate`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>identifyAtPoint(_containerPoint, _options)</summary>
<div>
<br/>

按容器像素点查询命中的 geometry，为接口方法

参数：

* _containerPoint `Point`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

获取子图层数组，为可选接口方法，由分组型图层实现

返回：

* `Layer[]`

</div>
</details>
