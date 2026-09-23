<details><summary>touchactstart</summary>
<div>
<br/>

双指触摸手势在 map 上开始时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | touchactstart |
| target | `Map` | the map fires event |

</div>
</details>

<details><summary>touchacting</summary>
<div>
<br/>

双指触摸缩放或旋转进行时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | touchacting |
| target | `Map` | the map fires event |

</div>
</details>

<details><summary>touchactend</summary>
<div>
<br/>

双指触摸操作结束时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | touchactend |
| target | `Map` | the map fires event |

</div>
</details>

<details><summary>animating</summary>
<div>
<br/>

map 动画播放时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | animating |
| target | `Map` | the map fires the event |

</div>
</details>

<details><summary>animateinterrupted</summary>
<div>
<br/>

map 动画被鼠标操作打断后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | animateinterrupted |
| target | `Map` | the map fires the event |

</div>
</details>

<details><summary>animateend</summary>
<div>
<br/>

map 动画正常播放结束时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | animateend |
| target | `Map` | the map fires the event |

</div>
</details>

<details><summary>animatestart</summary>
<div>
<br/>

map 开始播放动画时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | animatestart |
| target | `Map` | the map fires the event |

</div>
</details>

<details><summary>fovchange</summary>
<div>
<br/>

map 的 fov 改变后触发

</div>
</details>

<details><summary>rotatestart</summary>
<div>
<br/>

地图开始旋转时触发

</div>
</details>

<details><summary>rotate</summary>
<div>
<br/>

已废弃的 rotateend 别名，map 旋转角度改变时触发

</div>
</details>

<details><summary>rotateend</summary>
<div>
<br/>

地图旋转结束时触发

</div>
</details>

<details><summary>pitchstart</summary>
<div>
<br/>

map 开始改变 pitch 时触发

</div>
</details>

<details><summary>pitch</summary>
<div>
<br/>

已废弃的 pitchend 别名，map 的 pitch 改变后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | pitch |
| target | `Map` | the map fires event |
| from | `Number` | pitch from |
| to | `Number` | pitch to |

</div>
</details>

<details><summary>pitchend</summary>
<div>
<br/>

map 的 pitch 改变后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | pitchend |
| target | `Map` | the map fires event |
| from | `Number` | pitchend from |
| to | `Number` | pitchend to |

</div>
</details>

<details><summary>mousedown</summary>
<div>
<br/>

鼠标在地图上按下时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | mousedown |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>mouseup</summary>
<div>
<br/>

鼠标在地图上松开时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | mouseup |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>mouseover</summary>
<div>
<br/>

鼠标移到地图上方时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | mouseover |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>mouseout</summary>
<div>
<br/>

鼠标移出地图时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | mouseout |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>mouseenter</summary>
<div>
<br/>

鼠标进入地图容器时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | mouseenter |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>mouseleave</summary>
<div>
<br/>

鼠标离开地图容器时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | mouseleave |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>mousemove</summary>
<div>
<br/>

鼠标在地图上移动时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | mousemove |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>click</summary>
<div>
<br/>

鼠标点击 map 时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | click |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>dblclick</summary>
<div>
<br/>

鼠标双击 map 时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | dblclick |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>contextmenu</summary>
<div>
<br/>

在 map 上点右键时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | contextmenu |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>keypress</summary>
<div>
<br/>

在已获得焦点的 map 上按下按键时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | keypress |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>touchstart</summary>
<div>
<br/>

手指触摸 map 时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | touchstart |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>touchmove</summary>
<div>
<br/>

手指在 map 上滑动时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | touchmove |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>touchend</summary>
<div>
<br/>

手指离开 map 屏幕时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | touchend |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>drop</summary>
<div>
<br/>

拖入的内容在 map 容器上放下时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | drop |
| target | `Map` | the map fires event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>fullscreenstart</summary>
<div>
<br/>

map 开始请求进入全屏时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | fullscreenstart |
| target | `Map` | the map fires event |

</div>
</details>

<details><summary>fullscreenend</summary>
<div>
<br/>

map 全屏请求发出后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | fullscreenend |
| target | `Map` | the map fires event |

</div>
</details>

<details><summary>cancelfullscreen</summary>
<div>
<br/>

map 取消全屏后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | cancelfullscreen |
| target | `Map` | the map fires event |

</div>
</details>

<details><summary>spatialreferencechange</summary>
<div>
<br/>

地图的空间参考系更新后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | spatialreferencechange |
| target | `Map` | map |
| old | `Map` | the old spatial reference |
| new | `Map` | the new spatial reference changed to |

</div>
</details>

<details><summary>setbaselayer</summary>
<div>
<br/>

map 设置底图 layer 后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | setbaselayer |
| target | `Map` | map |

</div>
</details>

<details><summary>baselayerchangestart</summary>
<div>
<br/>

map 开始更换底图 layer 时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | baselayerchangestart |
| target | `Map` | map |

</div>
</details>

<details><summary>baselayerchangeend</summary>
<div>
<br/>

map 底图 layer 切换完成后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | baselayerchangeend |
| target | `Map` | map |

</div>
</details>

<details><summary>baselayerload</summary>
<div>
<br/>

底图 layer 加载完成时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | baselayerload |
| target | `Map` | map |

</div>
</details>

<details><summary>baselayerremove</summary>
<div>
<br/>

底图 layer 被移除时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | baselayerremove |
| target | `Map` | map |

</div>
</details>

<details><summary>addlayer</summary>
<div>
<br/>

地图添加图层后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | addlayer |
| target | `Map` | map |
| layers | `Layer[]` | layers to add |

</div>
</details>

<details><summary>removelayer</summary>
<div>
<br/>

地图移除图层后触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | removelayer |
| target | `Map` | map |
| layers | `Layer[]` | layers to remove |

</div>
</details>

<details><summary>resize</summary>
<div>
<br/>

map 容器尺寸变化时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | resize |
| target | `Map` | map fires the event |

</div>
</details>

<details><summary>movestart</summary>
<div>
<br/>

map 开始移动时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | movestart |
| target | `Map` | map fires the event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>moving</summary>
<div>
<br/>

map 正在移动时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | moving |
| target | `Map` | map fires the event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>moveend</summary>
<div>
<br/>

map 移动结束时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | moveend |
| target | `Map` | map fires the event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>dragrotatestart</summary>
<div>
<br/>

拖拽旋转或倾斜 map 开始时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | dragrotatestart |
| target | `Map` | map fires the event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>dragrotating</summary>
<div>
<br/>

拖拽改变 map 方位角或倾角时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | dragrotating |
| target | `Map` | map fires the event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>dragrotateend</summary>
<div>
<br/>

拖拽旋转或倾斜 map 结束时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | dragrotateend |
| target | `Map` | map fires the event |
| coordinate | `Coordinate` | coordinate of the event |
| containerPoint | `Point` | container point of the event |
| viewPoint | `Point` | view point of the event |
| domEvent | `Event` | dom event |

</div>
</details>

<details><summary>viewchange</summary>
<div>
<br/>

地图视图变化并记录到视图历史时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | viewchange |
| target | `Map` | map fires the event |
| old | `Object` | old view |
| new | `Point` | new view |

</div>
</details>

<details><summary>zoomstart</summary>
<div>
<br/>

地图开始缩放时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | zoomstart |
| target | `Map` | the map fires event |
| from | `Number` | zoom level zooming from |
| to | `Number` | zoom level zooming to |

</div>
</details>

<details><summary>zooming</summary>
<div>
<br/>

地图正在缩放时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | zooming |
| target | `Map` | the map fires event |
| from | `Number` | zoom level zooming from |
| to | `Number` | zoom level zooming to |

</div>
</details>

<details><summary>zoomend</summary>
<div>
<br/>

地图缩放结束时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | zoomend |
| target | `Map` | the map fires event |
| from | `Number` | zoom level zooming from |
| to | `Number` | zoom level zooming to |

</div>
</details>

<details><summary>renderend</summary>
<div>
<br/>

地图渲染结束时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | renderend |
| target | `Map` | the map fires event |
| context | `CanvasRenderingContext2D` | canvas context |

</div>
</details>

<details><summary>renderstart</summary>
<div>
<br/>

地图开始渲染时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | renderstart |
| target | `Map` | the map fires event |
| context | `CanvasRenderingContext2D` | canvas context |

</div>
</details>

<details><summary>openmenu</summary>
<div>
<br/>

在 map 上打开右键菜单时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | openmenu |
| target | `Map` | the Map fires the event |

</div>
</details>

<details><summary>closemenu</summary>
<div>
<br/>

map 的右键菜单关闭时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | closemenu |
| target | `Map` | the Map fires the event |

</div>
</details>

<details><summary>removemenu</summary>
<div>
<br/>

map 的右键菜单被移除时触发

参数属性：

| 属性名 | 类型 | 值 |
| --- | :-: | --- |
| type | `String` | removemenu |
| target | `Map` | the Map fires the event |

</div>
</details>
