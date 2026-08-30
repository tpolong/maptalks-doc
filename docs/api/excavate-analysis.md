---
title: ExcavateAnalysis
---

# ExcavateAnalysis

挖方空间分析对象，用于对三维场景实现挖方分析。

用多边形边界（boundary）框定区域"挖"掉模型的一部分，露出底面（贴 textureUrl 纹理、指定 height）。

> 注：ExcavateAnalysis **不继承 Analysis**，而是继承 `@maptalks/vt` 的 ExtrudePolygonLayer（注册了 gl / gpu 两个渲染器 ExcavateRenderer），因此它本身是一个 WebGL 图层，通过 `addTo(groupGLLayer)` 添加到 GroupGLLayer，并用 `excavate(layers)` 指定被挖方的图层（2026 源码核对）。

## 构造函数

```js
import { ExcavateAnalysis } from '@maptalks/gl-layers';

const excavateAnalysis = new ExcavateAnalysis('excavate', {
  boundary: [
    [121.10, 39.20],
    [121.11, 39.20],
    [121.11, 39.21],
    [121.10, 39.21],
    [121.10, 39.20]
  ],
  textureUrl: './textures/ground.jpg',
  height: 10
});

excavateAnalysis.addTo(groupGLLayer);
```

<details><summary>详细信息</summary>
<div>
参数：

* id\* **String** 图层id
* options\* **Object** 配置参数，可选的配置项如下：

| 配置名   |  类型    |  描述                     | 默认值 |
|  ------ | :----:   | ----                      |   :-----------:  |
|boundary*| Array\<Array\> | 挖方边界的坐标环（2026 源码核对补充） | null |
|textureUrl| String   | 挖方底面的纹理 url（README 提及） | null |
|height   | Number   | 挖方高度（米，源码 altitudeToDistance 中 z \|\| 0） | 0 |

</div>
</details>

## 成员方法

<details><summary>excavate(layers)</summary>
<div>
<br/>

指定被挖方的图层，更新高度图并重绘。

参数：

* layers **Layer[] | Layer** 被挖方的图层或图层数组

返回：

* void

</div>
</details>

<details><summary>getExcavatedLayers()</summary>
<div>
<br/>

获取被挖方的图层。

返回：

* Layer[]

</div>
</details>

<details><summary>enable()</summary>
<div>
<br/>

启用挖方效果。

返回：

* void

</div>
</details>

<details><summary>disable()</summary>
<div>
<br/>

禁用挖方效果。

返回：

* void

</div>
</details>

<details><summary>isEnable()</summary>
<div>
<br/>

挖方效果是否已启用。

返回：

* Boolean

</div>
</details>

## 继承自ExtrudePolygonLayer的方法

ExcavateAnalysis 继承 [ExtrudePolygonLayer](./extrude-polygon-layer)（进而继承 [PolygonLayer](./polygon-layer)）的所有图层方法与选项。

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-others.md / api-notes-vt-gl.md）
