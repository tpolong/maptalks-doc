---
title: CutAnalysis
---

# CutAnalysis

剖切空间分析对象，用于对三维场景实现剖切分析。

通过 position、rotation、scale 定义一个切割平面（长方体区域），将位于切割区域之外的部分隐藏，从而查看模型内部结构。通常配合 TransformControl 交互调整切割平面（源码核对补充）。

## 构造函数

```js
import { CutAnalysis } from '@maptalks/analysis';

const cutAnalysis = new CutAnalysis({
  position: [center.x, center.y, 10],
  rotation: [45, 0, 0],
  scale: [8, 8, 8]
});

cutAnalysis.addTo(groupGLLayer);
```

<details><summary>详细信息</summary>
<div>
参数：

* options\* **Object** 配置参数，可选的配置项如下：

| 配置名   |  类型    |  描述                     | 默认值 |
|  ------ | :----:   | ----                      |   :-----------:  |
|position*| Number[] | 切割区域位置，[x, y, h]，x和y是经纬度，h是海拔高度 | null |
|rotation | Number[] | 切割区域的欧拉角 | [0, 0, 0] |
|scale    | Number[] | 切割区域的缩放 | [1, 1, 1] |

</div>
</details>

## 成员方法

<details><summary>reset()</summary>
<div>
<br/>

将切割平面重置为初始的 position、rotation、scale（源码核对补充）。

返回：

* void

</div>
</details>

<!-- api-gen:start -->
### CutAnalysis 的其他公开方法

<!--@include: ./includes/api/cut-analysis-missing.md-->

### 继承自 Analysis 的方法

下列方法由父类 [Analysis](/api/analysis) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/analysis-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Handlerable](/api/handlerable)。
<!-- api-gen:end -->

## 继承自Analysis的方法

> 本文档已与 maptalks-gl 0.124.4 源码核对
