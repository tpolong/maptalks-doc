---
title: ConnectorLine
---

# ConnectorLine

ConnectorLine 是连接线几何类，继承自 Connectable(LineString)。它用于在两个对象之间绘制一条连接线，源与目标可以是几何对象、控件或 UI 组件，常用于标注引线、关系连线等可视化场景。

```js
import { ConnectorLine } from "maptalks";

const source = map.addMarker([100, 0]);
const target = map.addMarker([101, 1]);
const connector = new ConnectorLine(source, target);
layer.addGeometry(connector);
```

## 构造函数

```js
new ConnectorLine(src, target, options?)
```

参数：

* `src` — 连接源，可为几何对象、控件或 UI 组件。
* `target` — 连接目标，可为几何对象、控件或 UI 组件。
* `options` — （可选）几何配置项，见 LineString 的 options。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `showOn` | `String` | 显示条件，可为 `'always'`、`'moving'`、`'click'`、`'mouseover'`。 | `'always'` |

## 成员方法

- `getConnectSource()` — 获取连接源。
- `setConnectSource(src): this` — 设置连接源。
- `getConnectTarget()` — 获取连接目标。
- `setConnectTarget(target): this` — 设置连接目标。

## 静态方法

- `ConnectorLine._hasConnectors(geometry): boolean` — 判断 `geometry` 是否关联了连接线。
- `ConnectorLine._getConnectors(geometry): ConnectorLine[]` — 获取与 `geometry` 关联的所有连接线。

## 事件

无特有事件。
