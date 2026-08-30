---
title: PointLayer
---

# PointLayer

PointLayer是基于WebGL图形技术的的点数据绘制图层。 PointLayer和[VectorTileLayer](/api/vector-tile-layer)采用同样的绘制逻辑，共享同样的Symbol样式。

PointLayer的用法和maptalks核心库中[VectorLayer](https://maptalks.org/maptalks.js/api/0.x/VectorLayer.html)完全一样，但得益于WebGL技术，性能有着显著提升。

PointLayer仅支持添加[Marker](https://maptalks.org/maptalks.js/api/0.x/Marker.html) 和 [MultiPoint](https://maptalks.org/maptalks.js/api/0.x/MultiPoint.html)，添加其他数据时会报错。

PointLayer支持Symbol样式中的所有marker和text样式。

它是[maptalks.OverlayLayer](https://maptalks.org/maptalks.js/api/0.x/OverlayLayer.html)的间接子类（直接继承自 Vector3DLayer），继承了 Vector3DLayer 上所有的方法。

> [!INFO]
> PointLayer默认把所有Marker拼装成一个三维Mesh进行绘制，Marker部分样式的更新会导致图层重新构造Mesh，频繁操作会出现性能问题，具体说明请见[矢量图层的性能优化](/api/vt-performance)文档。

## 构造函数

```js
import { PointLayer } from '@maptalks/gl-layers';

const layer = new PointLayer('point0');
```
<details><summary>详细信息</summary>
<div>
参数：

* id\* **String** 图层id
* options\* **Object** 配置参数，可选的配置项如下：

| 配置名               |  类型   |  描述                     | 默认值 |
|  ------             | :----:  | ----                      |   :-----------:  |
|iconErrorUrl         | String  | 出现错误的图标替代图标       | null |
|collision            | Boolean | 是否开启碰撞检测            | false |
|collisionFrameLimit  | Number  | 每帧参与碰撞检测计算的时间限制，单位ms | 1 |
|sceneConfig          | Object  | 点渲染程序的sceneConfig     | 默认配置 |
|sceneConfig.collision | Boolean | 点渲染程序的碰撞检测开关 | true |
|sceneConfig.fading   | Boolean | 是否开启碰撞检测的渐隐渐变   | false |
|sceneConfig.fadingDuration | Number | 碰撞检测渐隐渐变持续时间，单位ms | 16 * 14 |
|sceneConfig.fadeInDelay    | Number | 通过碰撞检测后，显示前的延迟时间，单位ms | 600 |
|sceneConfig.fadeOutDelay   | Number | 未通过碰撞检测，隐藏前的延迟时间，单位ms | 100 |
|sceneConfig.uniquePlacement | Boolean | 是否避免重复注记（唯一位置标记） | false |
|sceneConfig.depthFunc| String  | 深度测试函数，可选的值有:'always', '<=', '<', '>=', '>', '=', '!=', 'never' | 'always' |
|glyphSdfLimitPerFrame | Number | 每帧每瓦片最多绘制的SDF字形数量 | 15 |
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

从图层的json对象创建一个PointLayer对象。

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
```

返回：

* PointLayer

</div>
</details>

## 事件

<!--@include: ./includes/js-events-example.md-->

### 图层事件

<!--@include: ./includes/vector3d-layer-events.md-->

> 注：渲染器还会触发 `buildmarkermesh`、`updatemesh`、`partialupdate`、`removegeo`、`iblupdated` 等渲染事件（2026 核对）。

### 继承自OverlayLayer的事件

<!--@include: ./includes/overlay-layer-events.md-->

### 继承自Layer的事件

<!--@include: ./includes/layer-events.md-->

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-vt-gl.md）
