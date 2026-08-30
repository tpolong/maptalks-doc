---
title: MultiGLTFMarker
---

# MultiGLTFMarker

MultiGLTFMarker是[GLTFMarker](./gltf-marker)的子类，用于将一个GLTF模型绘制在多个坐标上，能设置不同的偏移/缩放/旋转系统，并能进行交互。

MultiGLTFMarker能够用symbol设置模型的状态，例如缩放比例，透明度，旋转角度等，同时提供了方法用于更新模型，更新模型状态，开启暂停动画等。

MultiGLTFMarker利用了WebGL的instancing技术绘制，以提升批量绘制模型时的WebGL渲染性能。

> 注：2026 源码确认继承关系为 `class MultiGLTFMarker extends GLTFMarker`（2026 核对）

## 构造函数

```js
import { MultiGLTFMarker } from '@maptalks/gl-layers';

const multiGLTFMarker = new MultiGLTFMarker([
  {
    coordinates: [0, 0],
    translation: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    color: [1, 0, 0, 1]
  },
  {
    coordinates: [0, 0],
    translation: [0, 2, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    color: [1, 1, 0, 1]
  },
], {
  symbol: {
    url: 'path/to/gltf1.gltf'
  }
});
```
<details><summary>详细信息</summary>
<div>
参数：

* data\* **Object[]** Marker数据，其中每个数据对象包含的属性如下：

<!--@include: ./includes/multi-gltf-marker-data.md-->

* options\* **Object** 配置参数，可选的配置项如下：

| 配置名               |  类型   |  描述                     | 默认值 |
|  ------             | :----:  | ----                      |   :-----------:  |
<!--@include: ./includes/gltf-marker-options.md-->
<!--@include: ./includes/geometry-options.md-->

</div>
</details>

> [!NOTE] data 字段补充（2026 源码核对）
> 2026 源码中每个数据项还支持：`visible`（是否可见）、`outline`（描边）、`bloom`（泛光）、`highlightColor`（高亮色）、`modelHeight`（按模型高度自适应缩放）、`markerPixelHeight`（固定像素高度）

## 样式说明

MultiGLTFMarker的options.symbol和GLTFMarker一样，包含以下的设置和属性。

<!--@include: ./includes/gltf-marker-symbols.md-->

> 注：symbol 字段与 [GLTFMarker](./gltf-marker) 相同，2026 源码的字段核对见该页说明（2026 核对）

## 成员函数

<details><summary>addData(data)</summary>
<div>
<br/>

增加一个数据项，数据项的属性如下：

<!--@include: ./includes/multi-gltf-marker-data.md-->

参数：

* data **Object** 数据项

返回：

* this

</div>
</details>

<details><summary>removeData(idx)</summary>
<div>
<br/>

删除一个数据项。

参数：

* idx **Number** 数据项的序号

返回：

* this

</div>
</details>

<details><summary>getData(idx)</summary>
<div>
<br/>

获取一个数据项。

参数：

* idx **Number** 数据项的序号

返回：

* Object

</div>
</details>

<details><summary>updateData(idx, name, value)</summary>
<div>
<br/>

更新一个数据项。

```js
const multiGLTFMarker = new MultiGLTFMarker([
  {
    coordinates: [0, 0],
    translation: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    color: [1, 0, 0, 1]
  },
  {
    coordinates: [0, 0],
    translation: [0, 2, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    color: [1, 1, 0, 1]
  },
], {
  symbol: {
    url: 'path/to/gltf1.gltf'
  }
});

multiGLTFMarker.updateData(0, 'color', [0, 1, 0, 1]);
```

参数：

* idx **Number** 数据项的序号
* name **String** 要更新的属性
* value **Object** 属性的新值

返回：

* this

</div>
</details>

<details><summary>updateAllData(name, value)</summary>
<div>
<br/>

更新所有数据项的属性值。

value 是数组，value[i] 为第 i 个数据项的新值（2026 源码核对：`updateAllData` 内部按数据项索引取 value[i]）。

```js
const multiGLTFMarker = new MultiGLTFMarker([
  {
    coordinates: [0, 0],
    translation: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    color: [1, 0, 0, 1]
  },
  {
    coordinates: [0, 0],
    translation: [0, 2, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    color: [1, 1, 0, 1]
  },
], {
  symbol: {
    url: 'path/to/gltf1.gltf'
  }
});

multiGLTFMarker.updateAllData('color', [[0, 1, 0, 1], [0, 1, 0, 1]]);
```

参数：

* name **String** 要更新的属性
* value **Array** 每个数据项对应值的数组，value[i] 为第 i 个数据项的新值

返回：

* this

</div>
</details>

<details><summary>getCount()</summary>
<div>
<br/>

获取数据项的数量。

返回：

* Number

</div>
</details>

<details><summary>getIndexByPickingId(pickingId)</summary>
<div>
<br/>

用pickingId获取数据的序号。

pickingId是用identify或identifyAtPoint方法选取出的数据中，标识数据的一个内部id值。

返回：

* Number

</div>
</details>

> [!NOTE] 方法补充（2026 源码核对）
> - `getAllData()`：读取所有实例数据
> - `removeAllData()`：清空所有实例数据
> - `openInfoWindow(index?)`：打开信息窗口（默认在中心，可指定实例索引）
> - `outline(idx?)` / `cancelOutline(idx?)` / `isOutline()`：对指定实例描边 / 取消 / 查询
> - `highlight(index, {color, opacity, bloom})` / `highlightNodes(index, [{nodeIndex, ...}])` / `cancelHighlight(index, nodes?)`：高亮指定实例 / 高亮指定实例的节点 / 取消高亮
> - `zoomAt(index, options={animation: true, zoomOffset: 0}, step?)`：缩放到指定实例坐标
> - `setCoordinates(coords)` / `getCoordinates()`：设置/获取坐标（setCoordinates 支持整体平移或传坐标数组）
> - `getCenter()`：所有实例坐标的平均中心
> - `toJSON()` / `static fromJSON(json)`：JSON 序列化 / 反序列化

## 继承自GLTFMarker的方法

<!--@include: ./includes/gltf-marker-methods.md-->

<!--@include: ./includes/geometry-methods.md-->

## 静态方法

<!--@include: ./includes/geometry-static-methods.md-->

## 事件

<!--@include: ./includes/js-events-example.md-->

### 继承自GLTFMarker的事件

<!--@include: ./includes/gltf-marker-events.md-->

### 继承自Geometry的事件

<!--@include: ./includes/geometry-events.md-->

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-others.md）
