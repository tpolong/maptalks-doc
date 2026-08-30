---
title: SkylineAnalysis
---

# SkylineAnalysis

天际线空间分析对象，用于对三维场景实现天际线分析。

## 构造函数

```js
import { SkylineAnalysis } from '@maptalks/gl-layers';

const skylineAnalysis = new SkylineAnalysis({
  lineColor: [1, 0, 0],
  lineWidth: 1
});

skylineAnalysis.addTo(groupGLLayer);
```

<details><summary>详细信息</summary>
<div>
参数：

* options\* **Object** 配置参数，可选的配置项如下：

| 配置名               |  类型    |  描述                     | 默认值 |
|  ------              | :----:   | ----                      |   :-----------:  |
|lineColor             | Number[] | 三位归一化数组，天际线轮廓颜色   | [1, 0, 0] |
|lineWidth             | Number   | 轮廓线宽度       | 1 |
</div>
</details>

## 成员方法

<details><summary>exportSkylineMap(options)</summary>
<div>
<br/>

导出天际线图片（透明背景），返回 dataURL（2026 源码核对补充）。

参数：

* options **Object** 导出选项，可选的属性：
| 属性名           |  类型           |  描述                 | 默认值 |
|  ------         | :----:  | ----  |   :-----------:  |
| save            | Boolean | 是否弹出下载框 | false |
| filename        | String  | 下载文件名 | 'export' |

返回：

* String dataURL（分析未启用时返回 null）

</div>
</details>

## 继承自Analysis的方法

<!--@include: ./includes/analysis-methods.md-->

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-others.md / api-notes-vt-gl.md）
