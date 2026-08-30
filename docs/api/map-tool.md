---
title: MapTool
---

# MapTool

MapTool 是地图工具的抽象基类，继承自 `Class` 和 `Eventable`。它是所有地图交互工具（如 DrawTool、DistanceTool 等）的父类，提供启用/禁用工具以及将工具添加到地图的通用能力。典型用法是先创建具体的工具子类，再调用 `addTo(map)` 挂载到地图上使用。

```js
import { MapTool } from "maptalks";
// MapTool 为抽象基类，通常使用其子类
const tool = new DrawTool();
tool.addTo(map);
```

## 构造函数

```js
new MapTool(options)
```

参数：

* `options` — 工具配置项。

## 成员方法

- `addTo(map): MapTool` — 将工具添加到地图，返回自身以便链式调用。
- `getMap(): Map` — 获取工具所在的地图。
- `enable()` — 启用工具。
- `disable()` — 禁用工具。
- `isEnabled(): boolean` — 判断工具当前是否已启用。
- `remove()` — 从地图上移除工具。

## 事件

- `add` — 工具添加到地图时触发。
- `enable` — 工具启用时触发。
- `disable` — 工具禁用时触发。
- `remove` — 工具被移除时触发。
