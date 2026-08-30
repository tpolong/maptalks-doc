---
title: PolygonLayer
---

# PolygonLayer

PolygonLayer是基于WebGL图形技术的的线数据绘制图层。 PolygonLayer和[VectorTileLayer](/api/vector-tile-layer)采用同样的绘制逻辑，共享同样的Symbol样式。

PolygonLayer的用法和maptalks核心库中[VectorLayer](https://maptalks.org/maptalks.js/api/0.x/VectorLayer.html)完全一样，但得益于WebGL技术，性能有着显著提升。

PolygonLayer仅支持添加[Polygon](https://maptalks.org/maptalks.js/api/0.x/Polygon.html) 和 [MultiPolygon](https://maptalks.org/maptalks.js/api/0.x/MultiPolygon.html)，添加其他数据时会报错。

PolygonLayer支持Symbol样式中的所有marker，text，line和polygon样式。 line样式用于指定面边框的样式，marker和text样式主要用于在面的可达性极点绘制图标或沿线文字。

它是[maptalks.OverlayLayer](https://maptalks.org/maptalks.js/api/0.x/OverlayLayer.html)的间接子类（直接继承自 Vector3DLayer），继承了 Vector3DLayer 上所有的方法。

> [!INFO]
> PolygonLayer默认把所有Polygon拼装成一个三维Mesh进行绘制，Marker部分样式的更新会导致图层重新构造Mesh，频繁操作会出现性能问题，具体说明请见[矢量图层的性能优化](/api/vt-performance)文档。

## 构造函数

```js
import { PolygonLayer } from '@maptalks/gl-layers';

const layer = new PolygonLayer('polygon0');
```
<details><summary>详细信息</summary>
<div>
参数：

* id\* **String** 图层id
* options\* **Object** 配置参数，可选的配置项如下：

| 配置名               |  类型   |  描述                     | 默认值 |
|  ------             | :----:  | ----                      |   :-----------:  |
<!--@include: ./includes/vector3d-layer-options.md-->
<!--@include: ./includes/layer-options.md-->

</div>
</details>

## 成员方法

<!--@include: ./includes/vector3d-layer-methods.md-->

<details><summary>identify(coordinate, options)</summary>
<div>
<br/>

在图层上查询给定坐标处的要素（只有绘制出来的数据才能被查询到）。

```js
layer.identify([121.23, 39.34], { tolerance: 2 });
```

参数：

* coordinate **Number[]** 坐标值
* options **Object** 设置，可能的属性：
| 属性名        |  类型   |  描述                 | 默认值 |
|  ------      | :----:  | ----  |   :-----------:  |
| tolerance    | Number  | 查询时的像素冗余值 | 3 |

返回：

* Geometry[]

</div>
</details>

<details><summary>identifyAtPoint(containerPoint, options)</summary>
<div>
<br/>

在图层上查询给定屏幕坐标处的要素。

```js
layer.identifyAtPoint([400, 300], { tolerance: 2 });
```

参数：

* containerPoint **Number[]** 容器坐标（屏幕像素）
* options **Object** 设置，可能的属性：
| 属性名        |  类型   |  描述                 | 默认值 |
|  ------      | :----:  | ----  |   :-----------:  |
| tolerance    | Number  | 查询时的像素冗余值 | 3 |

返回：

* Object[]

</div>
</details>

<!--@include: ./includes/overlay-layer-methods.md-->

<!--@include: ./includes/layer-methods.md-->

## 静态方法

<details><summary>fromJSON(json)</summary>
<div>
<br/>

从图层的json对象创建一个PolygonLayer对象。

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
```

返回：

* PolygonLayer

</div>
</details>

## 事件

<!--@include: ./includes/js-events-example.md-->

### 图层事件

<!--@include: ./includes/vector3d-layer-events.md-->

> 注：渲染器还会触发 `buildmesh`、`updatemesh`、`partialupdate`、`removegeo`、`iblupdated` 等渲染事件（2026 核对）。

### 继承自OverlayLayer的事件

<!--@include: ./includes/overlay-layer-events.md-->

### 继承自Layer的事件

<!--@include: ./includes/layer-events.md-->

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-vt-gl.md）
