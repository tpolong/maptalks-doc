<details><summary>isCanvasRender()</summary>
<div>
<br/>

是否为 HTML5 Canvas 渲染的 layer，本类固定返回 true

</div>
</details>

<details><summary>prepareToDraw(context)</summary>
<div>
<br/>

准备画布的接口函数，首次绘制前调用一次

参数：

* context `CanvasRenderingContext2D` CanvasRenderingContext2D of the layer canvas.

返回：

* `Object[]` objects that will be passed to function draw(context, ..) as parameters.

</div>
</details>

<details><summary>redraw()</summary>
<div>
<br/>

重绘

返回：

* `Any` this

</div>
</details>

<details><summary>play()</summary>
<div>
<br/>

播放

返回：

* `Any` this

</div>
</details>

<details><summary>pause()</summary>
<div>
<br/>

暂停

返回：

* `Any` this

</div>
</details>

<details><summary>isPlaying()</summary>
<div>
<br/>

是否正在播放

返回：

* `boolean`

</div>
</details>

<details><summary>clearCanvas()</summary>
<div>
<br/>

清空画布

返回：

* `Any` this

</div>
</details>

<details><summary>requestMapToRender()</summary>
<div>
<br/>

要求map不触发任何事件下重绘canvas

返回：

* `Any` this

</div>
</details>

<details><summary>completeRender()</summary>
<div>
<br/>

要求map触发layerload事件重绘canvas

返回：

* `Any` this

</div>
</details>

<details><summary>onCanvasCreate()</summary>
<div>
<br/>

canvas 创建完成后的回调，子类可重写

</div>
</details>

<details><summary>onZoomStart(param)</summary>
<div>
<br/>

map zoomstart 事件回调

参数：

* param `Object` event parameter

</div>
</details>

<details><summary>onZooming(param)</summary>
<div>
<br/>

map zooming 事件回调

参数：

* param `Object` event parameter

</div>
</details>

<details><summary>onZoomEnd(param)</summary>
<div>
<br/>

map zoomend 事件回调

参数：

* param `Object` event parameter

</div>
</details>

<details><summary>onMoveStart(param)</summary>
<div>
<br/>

map movestart 事件回调

参数：

* param `Object` event parameter

</div>
</details>

<details><summary>onMoving(param)</summary>
<div>
<br/>

map moving 事件回调

参数：

* param `Object` event parameter

</div>
</details>

<details><summary>onMoveEnd(param)</summary>
<div>
<br/>

map moveend 事件回调

参数：

* param `Object` event parameter

</div>
</details>

<details><summary>onResize(param)</summary>
<div>
<br/>

map resize 事件回调

参数：

* param `Object` event parameter

</div>
</details>

<details><summary>doubleBuffer(bufferContext, context?)</summary>
<div>
<br/>

double buffer 回调，默认清空缓冲画布后返回自身

参数：

* bufferContext `CanvasRenderingContext2D/*`
* context（可选） `CanvasRenderingContext2D*/`

返回：

* `CanvasLayer`

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

设置图层的 zIndex，并同步 options、图层顺序与渲染器

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

隐藏图层

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

移除图层的 mask 配置并请求重绘

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

options 变更后的回调，触发重绘与 attribution 更新

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

layer 从 map 移除时的回调，子类可重写

</div>
</details>

<details><summary>getRendererOption()</summary>
<div>
<br/>

获取 layer 实际使用的 renderer 名称，按 map 渲染器取 gl 或 gpu

</div>
</details>

<details><summary>toJSON(options?)</summary>
<div>
<br/>

导出 layer 的 JSON 描述，含 type、id 与 options；粒子图层不支持反序列化

参数：

* options（可选） `any`

返回：

* `LayerJSONType`

</div>
</details>

<details><summary>identify(_coordinate, _options)</summary>
<div>
<br/>

按 coordinate 识别 layer 上的 geometry，由子类实现

参数：

* _coordinate `Coordinate`
* _options `LayerIdentifyOptionsType`

</div>
</details>

<details><summary>identifyAtPoint(_containerPoint, _options)</summary>
<div>
<br/>

按 container point 识别 layer 上的 geometry，由子类实现

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
