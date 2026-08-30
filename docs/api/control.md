---
title: Control
---

# Control

Control 是地图控件的抽象基类，是所有面板式控件（如 Attribution、Zoom、Scale、Overview 等）的父类。它管理一个 DOM 容器在地图上的定位与显示，并提供控件生命周期（添加、更新、移除、显示/隐藏）的通用能力。静态属性 `positions` 列出所有可用的定位位置。

```js
import { Control } from "maptalks";
// Control 为抽象基类，通常使用其子类
const control = new Zoom().addTo(map);
```

## 构造函数

```js
new Control(options)
```

参数：

* `options` — 控件配置项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `position` | `String` | 控件在地图上的位置，基类无默认值，由各子类提供 | `—` |
| `cssName` | `String` | 控件的 CSS 类名 | `null` |

## 成员方法

- `addTo(map): Control` — 将控件添加到地图。
- `update()...` — 更新控件。
- `getMap(): Map` — 获取控件所在的地图。
- `getPosition(): Object` — 获取控件位置，返回一个定位对象（如 `{ top: 20, left: 20 }`）。
- `setPosition(position): Control` — 设置控件位置。
- `getContainerPoint(): Point` — 获取控件在地图容器中的像素坐标。
- `getContainer(): HTMLElement` — 获取控件的父容器。
- `getDOM(): HTMLElement` — 获取控件的 DOM 元素。
- `show(): Control` — 显示控件。
- `hide(): Control` — 隐藏控件。
- `isVisible(): boolean` — 判断控件是否可见。
- `remove(): Control` — 从地图上移除控件。

## 静态方法

- `positions: Object` — 控件定位位置的对象映射，键为 `top-left`/`top-right`/`bottom-left`/`bottom-right`，值为定位对象（如 `{ top: 20, left: 20 }`）。

## 事件

- `add` — 控件添加到地图时触发。
- `remove` — 控件被移除时触发。
- `positionchange` — 控件位置改变时触发。
