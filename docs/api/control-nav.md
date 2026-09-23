---
title: control.Nav
---

# control.Nav

control.Nav 是地图导航控件基类，继承自 [control.Control](/api/control)。它用于承载导航相关 UI，避免重复实现。当前源码中 `buildOn` 返回 `null`，本身不渲染具体内容，具体导航按钮由子类/扩展实现。

```js
import { control } from "maptalks";

const nav = new control.Nav({
  position: "top-left",
}).addTo(map);
```

## 构造函数

```js
new control.Nav(options?)
```

参数：

* `options` — `Object`，可选。配置项见下表。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `position` | `String \| Object` | 控件位置 | `'top-left'` |

继承自 [control.Control](/api/control) 的通用配置同样适用。

## 成员方法

- `buildOn(): null` — 构建控件DOM，当前返回 `null`（不渲染内容）。

<!-- api-gen:start -->
### Nav 的其他公开方法

<!--@include: ./includes/api/control-nav-missing.md-->

### 继承自 Control 的方法

下列方法由父类 [Control](/api/control) 提供，本类的实例同样可以调用。

<!--@include: ./includes/api/control-methods.md-->

### 混入的方法

本类通过混入获得以下能力的方法，详见对应页面：[Eventable](/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）。
<!-- api-gen:end -->

## 事件

无特有事件（继承自 [control.Control](/api/control)）。

<!-- api-gen:start -->
### 继承自 Control 的事件

<!--@include: ./includes/api/control-events.md-->
<!-- api-gen:end -->
