---
title: InSightAnalysis
---

# InSightAnalysis

通视空间分析对象，用于对三维场景实现通视分析。

在视点（from）与目标点（to）之间连线，判断连线是否被模型遮挡：可见段用 visibleColor 着色，不可见段用 invisibleColor 着色，并可返回与通视线相交的对象（基于 RayCaster 射线检测，2026 源码核对补充）。

## 构造函数

```js
import { InSightAnalysis } from '@maptalks/gl-layers';

const insightAnalysis = new InSightAnalysis({
  lines: [
    {
      from: [center.x + 0.003, center.y + 0.002, 50],
      to: [center.x - 0.001, center.y - 0.0005, 100]
    }
  ],
  visibleColor: [0, 1, 0, 1],
  invisibleColor: [1, 0, 0, 1]
});

insightAnalysis.addTo(groupGLLayer);
```

<details><summary>详细信息</summary>
<div>
参数：

* options\* **Object** 配置参数，可选的配置项如下：

| 配置名   |  类型    |  描述                     | 默认值 |
|  ------ | :----:   | ----                      |   :-----------:  |
|lines    | Object[] | 通视线数组，每项为 `{ from, to }`（坐标数组或 Coordinate，2026 源码核对补充） | [] |
|visibleColor | Number[] | 四位归一化数组，可见段颜色（绿） | [0, 1, 0, 1] |
|invisibleColor | Number[] | 四位归一化数组，不可见段颜色（红） | [1, 0, 0, 1] |
|excludeLayers | String[] | 忽略的图层id列表（不参与遮挡判断） | null |

</div>
</details>

## 成员方法

<details><summary>addLine(inSightLine)</summary>
<div>
<br/>

添加一条通视线。

参数：

* inSightLine **Object** 通视线，结构为 `{ from, to }`

返回：

* void

</div>
</details>

<details><summary>removeLine(inSightLine)</summary>
<div>
<br/>

移除一条通视线。

参数：

* inSightLine **Object** 要移除的通视线

返回：

* void

</div>
</details>

<details><summary>getLines()</summary>
<div>
<br/>

获取所有通视线。

返回：

* Object[]

</div>
</details>

<details><summary>setLines(lines)</summary>
<div>
<br/>

设置通视线数组。

参数：

* lines **Object[]** 通视线数组，每项为 `{ from, to }`

返回：

* void

</div>
</details>

<details><summary>clearLines()</summary>
<div>
<br/>

清空所有通视线。

返回：

* void

</div>
</details>

<details><summary>getIntersetction()</summary>
<div>
<br/>

获取所有与通视线相交的对象，结构为 `[{ inSightLine, intersects: [{ data: maptalks 对象（如 gltfmarker、polygon）, coordinates: [{ coordinate, indices }] }] }]`。

> 注：方法名为源码中的拼写 `getIntersetction`（2026 源码核对）。

返回：

* Object[]

</div>
</details>

## 继承自Analysis的方法

<!--@include: ./includes/analysis-methods.md-->

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-others.md / api-notes-vt-gl.md）
