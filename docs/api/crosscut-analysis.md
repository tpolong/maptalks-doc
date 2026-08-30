---
title: CrossCutAnalysis
---

# CrossCutAnalysis

剖面（横切）空间分析对象，用于对三维场景实现剖面分析。

沿一条 cutLine 对模型做横切并显示切面（断面），并可沿切线等距取点查询各点高程（getAltitudes）。

## 构造函数

```js
import { CrossCutAnalysis } from '@maptalks/gl-layers';

const crosscutAnalysis = new CrossCutAnalysis({
  cutLine: [
    [108.95943151743995, 34.220773839751956],
    [108.95942615302192, 34.21846280188899]
  ],
  cutLineColor: [0.0, 1.0, 0.0, 1.0]
});

crosscutAnalysis.addTo(groupGLLayer);
```

<details><summary>详细信息</summary>
<div>
参数：

* options\* **Object** 配置参数，可选的配置项如下：

| 配置名   |  类型    |  描述                     | 默认值 |
|  ------ | :----:   | ----                      |   :-----------:  |
|cutLine* | Array\<Array\> | 切割线坐标数组，构成一条折线 | null |
|cutLineColor | Number[] | 切面填充色（源码默认值 DEFAULT_WATER_COLOR，2026 核对） | [0.8451, 0.2588, 0.4863] |
|textureUrl| String   | 切面纹理 url（README 提及） | null |

</div>
</details>

## 成员方法

<details><summary>getAltitudes(count)</summary>
<div>
<br/>

沿切割线等距采样 count 个点，返回每个采样点的坐标与沿线距离，可用来绘制剖面线或量测断面高程（2026 源码核对补充）。

参数：

* count **Number** 采样点数

返回：

* Object[] 数组元素为 `{ coordinate: Coordinate(x, y, z), distance }`，其中 coordinate.z 为采样点的高程

</div>
</details>

## 继承自Analysis的方法

<!--@include: ./includes/analysis-methods.md-->

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-others.md / api-notes-vt-gl.md）
