---
title: control.Reset
---

# control.Reset

control.Reset 是地图视图重置控件，继承自 [control.Control](/api/control)。它显示一个可点击的重置按钮，点击后恢复地图到初始视图（或指定视图）。

```js
import { control } from "maptalks";

const reset = new control.Reset({
  position: { top: 156, left: 20 },
}).addTo(map);
```

## 构造函数

```js
new control.Reset(options?)
```

参数：

* `options` — `Object`，可选。配置项见下表。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `position` | `String \| Object` | 控件位置 | `{ top: 156, left: 20 }` |
| `view` | `Object` | 重置时恢复的视图（`{center, zoom, pitch, bearing}`）；不设则用加入地图时的视图 | `null` |

继承自 [control.Control](/api/control) 的通用配置同样适用。

## 成员方法

- `buildOn(): HTMLElement` — 构建控件DOM（重置按钮），并绑定点击事件。
- `onAdd()` — 控件加入地图时调用，记录要恢复的视图。
- `setView(view)` — 设置重置时要恢复的视图。
- `onRemove()` — 控件移除时调用，解绑事件。

> 重置按钮为 `<div class="maptalks-reset">`，点击调用 `map.setView(this._view)` 恢复视图。

## 事件

无特有事件（继承自 [control.Control](/api/control) 的 `add`、`remove`、`positionchange`）。

## 使用说明

```js
const map = new Map("map", { center: [0, 0], zoom: 2 });
map.addControl(new control.Reset());
// 用户拖动/缩放后，点击 Reset 恢复到此初始视图
```
