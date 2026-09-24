---
title: ViewshedAnalysis
---

# ViewshedAnalysis

可视域分析空间分析对象，用于对三维场景实现可视域分析。

## 构造函数

```js
import { ViewshedAnalysis } from '@maptalks/analysis';

const viewshedAnalysis = new ViewshedAnalysis({
  eyePos: [121, 39, 100],
  lookPoint: [121, 39, 0],
  verticalAngle: 90,
  horizontalAngle: 90,
  visibleColor: [0.0, 1.0, 0.0, 1.0],
  invisibleColor: [1.0, 0.0, 0.0, 1.0]
});

viewshedAnalysis.addTo(groupGLLayer);
```

<details><summary>详细信息</summary>
<div>
参数：

* options\* **Object** 配置参数，可选的配置项如下：

| 配置名               |  类型    |  描述                     | 默认值 |
|  ------              | :----:   | ----                      |   :-----------:  |
|eyePos*               | Number[] | 观察者位置，[x, y, h]，x和y是经纬度，h是海拔高度  | null |
|lookPoint*            | Number[] | 观察目标位置，[x, y, h]，x和y是经纬度，h是海拔高度  | null |
|verticalAngle         | Number  | 垂直视角，单位角度          | 90 |
|horizontalAngle       | Number  | 水平视角，单位角度          | 90 |
|visibleColor          | Number[] | 四位归一化数组，可视区域颜色   | [0, 1, 0, 0.3] |
|invisibleColor        | Number[] | 四位归一化数组，不可视区域颜色 | [1, 0, 0, 0.3] |

> 注：visibleColor / invisibleColor 的默认透明度已在新版本中调整为 0.3（源码 renderAnalysis 默认值 [0.0, 1.0, 0.0, 0.3] / [1.0, 0.0, 0.0, 0.3]）。

</div>
</details>

## 成员方法

<details><summary>getVertexCoordinates()</summary>
<div>
<br/>

获取viewshed棱锥的4个顶点的坐标（源码核对补充）。

返回：

* Array

</div>
</details>

<!-- api-gen:start -->
### ViewshedAnalysis 的其他公开方法

<!--@include: ./includes/api/viewshed-analysis-missing.md-->

### 继承自 Analysis 的方法

下列方法由父类 [Analysis](/api/analysis) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/analysis-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/api/handlerable)。
<!-- api-gen:end -->

## 继承自Analysis的方法

> 本文档已与 maptalks-gl 0.124.4 源码核对
