---
title: HeightLimitAnalysis
---

# HeightLimitAnalysis

限高（超高检测）空间分析对象，用于对三维场景实现限高分析。

超过 limitHeight 的部分用 limitColor 着色标出，复用 FloodAnalysis 的水面渲染机制（分析类型 analysisType = 2）。

## 构造函数

```js
import { HeightLimitAnalysis } from '@maptalks/gl-layers';

const heightLimitAnalysis = new HeightLimitAnalysis({
  limitHeight: 25,
  limitColor: [1, 0.2, 0.2]
});

heightLimitAnalysis.addTo(groupGLLayer);
```

<details><summary>详细信息</summary>
<div>
参数：

* options\* **Object** 配置参数，可选的配置项如下：

| 配置名   |  类型    |  描述                     | 默认值 |
|  ------ | :----:   | ----                      |   :-----------:  |
|limitHeight* | Number | 限高值（米） | null |
|limitColor | Number[] | 三位归一化数组，超高部分的着色（源码默认值 DEFAULT_LIMIT_COLOR） | [0.8, 0.1, 0.1] |
|boundary | Number[] | 分析范围边界坐标环（可选，不设则全图分析，继承自 FloodAnalysis） | null |

</div>
</details>

## 继承自FloodAnalysis的方法

HeightLimitAnalysis 继承 [FloodAnalysis](./flood-analysis)（包括 waterHeight、waterColor、waterOpacity 等选项与 update、renderAnalysis 等方法，2026 源码核对）。

## 继承自Analysis的方法

<!--@include: ./includes/analysis-methods.md-->

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-others.md / api-notes-vt-gl.md）
