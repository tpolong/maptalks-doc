---
title: LayerSwitcher
---

# LayerSwitcher

LayerSwitcher 是图层开关控件，继承自 `Control`。它在地图上提供一组复选框，用于切换地图的底图图层与覆盖图层的可见性。默认显示在右上角。

```js
import { LayerSwitcher } from "maptalks";

const layerSwitcher = new LayerSwitcher({
  baseTitle: "Base",
  overlayTitle: "Overlay"
}).addTo(map);
```

## 构造函数

```js
new LayerSwitcher(options)
```

参数：

* `options` — 图层开关控件配置项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `position` | `String` | 控件位置 | `"top-right"` |
| `baseTitle` | `String` | 底图图层分组标题 | `'Base Layers'` |
| `overlayTitle` | `String` | 覆盖图层分组标题 | `'Layers'` |
| `excludeLayers` | `Array` | 需要排除的图层列表 | `[]` |
| `containerClass` | `String` | 容器 CSS 类名 | `'maptalks-layer-switcher'` |

## 成员方法

<!-- api-gen:start -->
### LayerSwitcher 的其他公开方法

<!--@include: ./includes/api/control-layer-switcher-missing.md-->

### 继承自 Control 的方法

下列方法由父类 [Control](/api/control) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/control-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）。
<!-- api-gen:end -->

## 事件

- `layerchange` — 图层可见性改变时触发。

<!-- api-gen:start -->
### LayerSwitcher 的其他事件

以下事件源码里有定义，本类（或其父类）会触发：

<!--@include: ./includes/api/control-layer-switcher-events-missing.md-->

### 继承自 Control 的事件

<!--@include: ./includes/api/control-events.md-->
<!-- api-gen:end -->
