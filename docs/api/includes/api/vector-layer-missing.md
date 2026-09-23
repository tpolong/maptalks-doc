<details><summary>onConfig(conf)</summary>
<div>
<br/>

配置变更时清理几何的 altitude 缓存并按需重绘

参数：

* conf `Record<string, any>`

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

<details><summary>onAddGeometry(geo)</summary>
<div>
<br/>

添加 geometry 到 layer 时的回调，按 layer 样式为其设置样式

参数：

* geo `Geometry`

</div>
</details>

<details><summary>onGeometryEvent(param?)</summary>
<div>
<br/>

处理图层内 geometry 事件，同步 layer 内的缓存与索引

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

<details><summary>getProjection()</summary>
<div>
<br/>

获取 layer 所在map 的 projection

返回：

* `CommonProjectionType`

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

移除图层 mask 并触发重绘

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

获取图层使用的 canvas renderer

</div>
</details>

<details><summary>onConfig(conf)</summary>
<div>
<br/>

配置变更时清理几何的 altitude 缓存并按需重绘

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

按 map 的 renderer 类型返回 layer 使用的 renderer 名

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
