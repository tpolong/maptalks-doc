<details><summary>setURLModifier(modifier)</summary>
<div>
<br/>

设置改写资源加载 url 的修饰函数并返回图层

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

配置项更新时的回调，把 bloom 开关同步给 renderer

参数：

* conf `unknown`

</div>
</details>

<details><summary>updateSymbol(idx, symbol)</summary>
<div>
<br/>

把 symbol 属性合并进样式数组第 idx 项并刷新图层样式

参数：

* idx `number`
* symbol `Record<string, any>`

</div>
</details>

<details><summary>getPolygonOffsetCount()</summary>
<div>
<br/>

获取图层的polygonOffsetCount
用于GroupGLLayer全局管理polygonOffset

</div>
</details>

<details><summary>getPolygonOffset()</summary>
<div>
<br/>

获取图层的polygonOffset
用于GroupGLLayer全局管理polygonOffset

</div>
</details>

<details><summary>setPolygonOffset(offset, total)</summary>
<div>
<br/>

设置图层 polygonOffset 及全局总数供 GroupGLLayer 统一管理

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

为图层内全部 geometry 添加描边高亮

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

导出图层的 JSON，含 type id options 与全部 geometry

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
