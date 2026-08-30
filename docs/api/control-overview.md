---
title: Overview
---

# Overview

Overview 是鹰眼控件，继承自 `Control`。它在地图上显示一个小缩略图，用于概览大范围地图并指示当前视口位置，支持最大化/最小化切换。

```js
import { Overview } from "maptalks";

const overview = new Overview({
  size: [300, 200],
  maximize: false
}).addTo(map);
```

## 构造函数

```js
new Overview(options)
```

参数：

* `options` — 鹰眼控件配置项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `level` | `Number` | 鹰眼地图的缩放级别 | `4` |
| `size` | `Number[]` | 鹰眼控件尺寸 `[width, height]` | `[300, 200]` |
| `maximize` | `Boolean` | 是否默认最大化 | `true` |
| `symbol` | `Object` | 鹰眼视图框符号 | `null` |
| `containerClass` | `String` | 容器 CSS 类名 | `'maptalks-overview'` |

## 成员方法

- `maxmize(): Overview` — 最大化鹰眼控件。
- `minimize(): Overview` — 最小化鹰眼控件。
- `getOverviewMap(): Map` — 获取鹰眼地图对象。

## 事件

- `load` — 鹰眼地图加载完成时触发。
