<details><summary>onConfig(conf)</summary>
<div>
<br/>

选项更新时的回调，同步 spatial reference 并重绘

参数：

* conf `{ [key: string]: any }` options to update

返回：

* `Map` this

</div>
</details>

<details><summary>setCursor(cursor)</summary>
<div>
<br/>

按 CSS 语法设置地图容器的鼠标指针样式

参数：

* cursor `string` cursor style

返回：

* `Map` this

</div>
</details>

<details><summary>resetCursor()</summary>
<div>
<br/>

重置鼠标指针样式为默认值

返回：

* `Map` this

</div>
</details>

<details><summary>getGroundExtent()</summary>
<div>
<br/>

计算天空、线、多边形等二维裁剪用的地面 extent

返回：

* `PointExtent`

</div>
</details>

<details><summary>getProjExtent()</summary>
<div>
<br/>

获取当前视图范围投影后的 extent

返回：

* `Extent`

</div>
</details>

<details><summary>getPrjExtent()</summary>
<div>
<br/>

getProjExtent 的别名，获取投影后的 extent

返回：

* `Extent`

</div>
</details>

<details><summary>getZoomForScale(scale, fromZoom?, isFraction?)</summary>
<div>
<br/>

按缩放比例算目标 zoom，isFraction 决定是否允许小数

参数：

* scale `number`
* fromZoom（可选） `number`
* isFraction（可选） `boolean` can return fractional zoom

返回：

* `Number` zoom fit for scale starting from fromZoom

</div>
</details>

<details><summary>getZoomFromRes(res)</summary>
<div>
<br/>

按分辨率反算 zoom，超出 minZoom 与 maxZoom 时截断

参数：

* res `number`

返回：

* `number`

</div>
</details>

<details><summary>getMaxNativeZoom()</summary>
<div>
<br/>

获取空间参考所能支持的最大 native zoom

返回：

* `Number`

</div>
</details>

<details><summary>getGLRes()</summary>
<div>
<br/>

获取 WebGL 世界坐标的 resolution

返回：

* `Number`

</div>
</details>

<details><summary>getGLScale(zoom?)</summary>
<div>
<br/>

计算指定 zoom 到 GL resolution 的缩放比，默认用当前 zoom

参数：

* zoom（可选） `number` =undefined] target zoom, current zoom by default

返回：

* `Number`

</div>
</details>

<details><summary>isInteracting()</summary>
<div>
<br/>

是否正在交互中，含缩放、移动、旋转

返回：

* `Boolean`

</div>
</details>

<details><summary>getFitZoom(extent, isFraction?, padding?)</summary>
<div>
<br/>

计算能完整容纳指定 extent 的最大 zoom，可返回小数

参数：

* extent `Extent`
* isFraction（可选） `boolean` can return fractional zoom
* padding（可选） `MapPaddingType` [padding] - padding

返回：

* `Number` zoom fit for scale starting from fromZoom

</div>
</details>

<details><summary>stringifyView()</summary>
<div>
<br/>

将当前视图序列化为 JSON 字符串

</div>
</details>

<details><summary>fitExtent(extent, zoomOffset?, options?, step?)</summary>
<div>
<br/>

将地图缩放到恰好容纳指定 extent，默认带动画

参数：

* extent `ExtentLike` extent
* zoomOffset（可选） `number` zoom offset
* options（可选） `MapFitType` =&#123;&#125;] - options
* step（可选） `(frame) => void` step function for animation

返回：

* `Map | player` - this

</div>
</details>

<details><summary>coordToPoint(coordinate, zoom?, out?)</summary>
<div>
<br/>

将 coordinate 转为二维点，coordinateToPoint 的简写别名

参数：

* coordinate `Coordinate`
* zoom（可选） `number`
* out（可选） `Point`

</div>
</details>

<details><summary>coordToPointAtRes(coordinate, res?, out?)</summary>
<div>
<br/>

按指定 resolution 将 coordinate 转为二维点，coordinateToPointAtRes 的简写别名

参数：

* coordinate `Coordinate`
* res（可选） `number`
* out（可选） `Point`

</div>
</details>

<details><summary>pointToCoord(point, zoom?, out?)</summary>
<div>
<br/>

将二维点转为 coordinate，pointToCoordinate 的简写别名

参数：

* point `Point`
* zoom（可选） `number`
* out（可选） `Coordinate`

</div>
</details>

<details><summary>pointAtResToCoord(point, res?, out?)</summary>
<div>
<br/>

按指定 resolution 将二维点转为 coordinate，pointAtResToCoordinate 的简写别名

参数：

* point `Point`
* res（可选） `number`
* out（可选） `Coordinate`

</div>
</details>

<details><summary>coordToViewPoint(coordinate, out?, altitude?)</summary>
<div>
<br/>

将 coordinate 转为 view point，可传 altitude，coordinateToViewPoint 的简写别名

参数：

* coordinate `Coordinate`
* out（可选） `Point`
* altitude（可选） `number`

</div>
</details>

<details><summary>viewPointToCoord(viewPoint, out?)</summary>
<div>
<br/>

将 view point 转为 coordinate，viewPointToCoordinate 的简写别名

参数：

* viewPoint `Point`
* out（可选） `Coordinate`

</div>
</details>

<details><summary>coordToContainerPoint(coordinate, zoom?, out?)</summary>
<div>
<br/>

将 coordinate 转为 container point，coordinateToContainerPoint 的简写别名

参数：

* coordinate `Coordinate`
* zoom（可选） `number`
* out（可选） `Point`

</div>
</details>

<details><summary>containerPointToCoord(containerPoint, out?)</summary>
<div>
<br/>

将 container point 转为 coordinate，containerPointToCoordinate 的简写别名

参数：

* containerPoint `Point`
* out（可选） `Coordinate`

</div>
</details>

<details><summary>containerPointToViewPoint(containerPoint, out?)</summary>
<div>
<br/>

按地图 view point 偏移把 container point 转为 view point，多用于插件开发

参数：

* containerPoint `Point`
* out（可选） `Point` =undefined]    - optional point to receive result

返回：

* `Point`

</div>
</details>

<details><summary>viewPointToContainerPoint(viewPoint, out?)</summary>
<div>
<br/>

把 view point 加上地图 view point 偏移转为 container point，多用于插件开发

参数：

* viewPoint `Point`
* out（可选） `Point` =undefined]    - optional point to receive result

返回：

* `Point`

</div>
</details>

<details><summary>locate(coordinate, dx, dy)</summary>
<div>
<br/>

按 X 轴与 Y 轴的米制距离计算新的 coordinate

参数：

* coordinate `Coordinate` source coordinate
* dx `number` meter distance on X axis
* dy `number` meter distance on Y axis

返回：

* `Coordinate` Result coordinate

</div>
</details>

<details><summary>getMainPanel()</summary>
<div>
<br/>

获取地图主面板的 DOM 元素，无 renderer 时返回 null

返回：

* `HTMLElement`

</div>
</details>

<details><summary>getPanels()</summary>
<div>
<br/>

获取地图的面板对象集合

返回：

* `Object`

</div>
</details>

<details><summary>onMoving(param)</summary>
<div>
<br/>

地图移动中的回调，触发 moving 事件并限制最大 extent

参数：

* param `Any`

</div>
</details>

<details><summary>onMoveEnd(param)</summary>
<div>
<br/>

地图移动结束的回调，触发 moveend 事件并复位光标与中心

参数：

* param `Any`

</div>
</details>

<details><summary>onDragRotateStart(param)</summary>
<div>
<br/>

开始拖拽旋转地图时置位状态并触发 dragrotatestart 事件

参数：

* param `Any`

</div>
</details>

<details><summary>onDragRotating(param)</summary>
<div>
<br/>

拖拽旋转地图过程中触发 dragrotating 事件

参数：

* param `Any`

</div>
</details>

<details><summary>onDragRotateEnd(param)</summary>
<div>
<br/>

结束拖拽旋转时清除状态并触发 dragrotateend 事件

参数：

* param `Any`

</div>
</details>

<details><summary>isDragRotating()</summary>
<div>
<br/>

是否正在拖拽旋转地图

</div>
</details>

<details><summary>isOffscreen(box, viewportPadding = 0)</summary>
<div>
<br/>

判断给定 box 是否超出当前屏幕范围，可指定 padding

参数：

* box `PointExtent | Array<number>` [minx, miny, maxx, maxy]
* viewportPadding = 0 `Number` test padding

返回：

* `Boolean`

</div>
</details>

<details><summary>setContainerDomRect(domRect)</summary>
<div>
<br/>

设置容器 DOM 的内容矩形，用于计算地图尺寸

参数：

* domRect `DOMRect`

</div>
</details>

<details><summary>offsetPlatform(offset?)</summary>
<div>
<br/>

不传偏移量返回视图点，传入则按像素平移地图面板

参数：

* offset（可选） `Point`

返回：

* `Point`

</div>
</details>

<details><summary>getViewPoint()</summary>
<div>
<br/>

获取地图的视图点，已叠加当前帧偏移

返回：

* `Point` map view point

</div>
</details>
