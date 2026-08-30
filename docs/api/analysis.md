---
title: Analysis
---

# Analysis

Analysis是三维空间分析的父类，定义了各种三维空间分析共同的方法。

Analysis只支持添加到GroupGLLayer上，无法添加到其他WebGL图层。

> 注：2026 源码中 Analysis 的子类包括 CutAnalysis（剖切）、ViewshedAnalysis（可视域）、SkylineAnalysis（天际线）、FloodAnalysis（水淹）、InSightAnalysis（通视）、CrossCutAnalysis（剖面）、HeightLimitAnalysis（限高，继承自 FloodAnalysis）。ExcavateAnalysis（挖方）不继承 Analysis，而是继承 `@maptalks/vt` 的 ExtrudePolygonLayer，不属于本页范围（2026 核对）。

## 成员方法

<!--@include: ./includes/analysis-methods.md-->

> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-others.md / api-notes-vt-gl.md）
