---
title: UIComponent
---

# UIComponent

UIComponent 是基于 DOM 的 UI 组件抽象基类，继承自 `Class` 和 `Eventable`。UIMarker、InfoWindow、Menu、ToolTip 等都继承自它。它将一组 DOM 元素附加到地图或几何对象上，并提供显示/隐藏、定位、碰撞检测等通用能力。静态方法 `isSupport` 可判断某个对象是否支持挂载 UI。

```js
import { UIComponent } from "maptalks";
// UIComponent 为抽象基类，通常使用其子类
const marker = new UIMarker(coordinate, { content: "<div>Hello</div>" }).addTo(map);
```

## 构造函数

```js
new UIComponent(options)
```

参数：

* `options` — UI 组件配置项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `animation` | `String` | 显示/隐藏时的动画效果，取值 `fade`、`scale` 或 `fade,scale` | `'scale'` |
| `animationDuration` | `Number` | 动画持续时间（毫秒） | `500` |
| `single` | `Boolean` | 在同一对象上是否保持唯一 | `true` |
| `eventsPropagation` | `Boolean` | 是否传播 UI 事件 | `false` |
| `eventsToStop` | `Array` | 需要阻断冒泡的事件列表（在 `eventsPropagation` 为 true 时生效） | `null` |
| `autoPan` | `Boolean` | 显示时是否自动平移地图以容纳组件 | `false` |
| `dx` | `Number` | 水平偏移 | `0` |
| `dy` | `Number` | 垂直偏移 | `0` |
| `collision` | `Boolean` | 是否参与碰撞检测 | `false` |
| `zIndex` | `Number` | 组件的层级 | `0` |
| `visible` | `Boolean` | 组件是否可见 | `true` |

## 成员方法

- `addTo(owner): UIComponent` — 将组件挂载到 `owner`（地图或几何对象）上。
- `getMap(): Map` — 获取组件所在的地图。
- `show(coordinate): UIComponent` — 在指定坐标处显示组件。
- `hide(): UIComponent` — 隐藏组件。
- `isVisible(): boolean` — 判断组件是否可见。
- `remove(): UIComponent` — 从宿主上移除组件。
- `getSize(): Size` — 获取组件尺寸。
- `getDOM(): HTMLElement` — 获取组件的 DOM 元素。
- `setZIndex(z): UIComponent` — 设置组件层级。
- `getPosition(): Point` — 获取组件当前位置。
- `getOwner(): Object` — 获取组件的宿主对象。

## 静态方法

- `isSupport(owner): boolean` — 判断 `owner` 是否支持挂载 UI 组件。

## 事件

- `add` — 组件被挂载时触发。
- `showstart` — 组件开始显示时触发。
- `showend` — 组件显示完成时触发。
- `hide` — 组件隐藏时触发。
- `remove` — 组件被移除时触发。
- `mouseover` — 鼠标移入组件时触发。
- `mouseout` — 鼠标移出组件时触发。
