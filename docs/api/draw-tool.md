---
title: DrawTool
---

# DrawTool

DrawTool 是 maptalks 的核心绘图工具，继承自 `MapTool`。它让用户在地图上通过点击交互绘制点、线、面等几何要素，是距离测量、面积测量等上层工具的基础。绘制完成后会触发 `drawend` 事件并返回当前绘制的几何对象。

```js
import { DrawTool } from "maptalks";

const drawTool = new DrawTool({
  mode: "Polygon",
  symbol: {
    lineColor: "#1bc8f8"
  }
}).addTo(map);
```

## 构造函数

```js
new DrawTool(options)
```

参数：

* `options` — 绘图工具配置项，其大部分属性同 `DrawTool.options` 配置项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `mode` | `String` | 绘图模式名称，对应已注册的绘图模式 | `null` |
| `symbol` | `Object` | 绘图符号样式 | `null` |
| `once` | `Boolean` | 绘制完成后是否自动禁用工具 | `false` |
| `autoPanAtEdge` | `Boolean` | 拖到地图边缘时是否自动平移地图 | `false` |
| `blockGeometryEvents` | `Boolean` | 绘制时是否阻断几何事件 | `false` |
| `zIndex` | `Number` | 工具的图层层级 | `Number.MAX_VALUE` |
| `doubleClickZoom` | `Boolean` | 绘制过程中是否允许双击缩放 | `false` |
| `enableAltitude` | `Boolean` | 是否启用高度 | `true` |
| `interactive` | `Boolean` | 工具是否响应交互 | `true` |

## 成员方法

- `getMode(): String` — 获取当前绘图模式。
- `setMode(mode): DrawTool` — 设置绘图模式。
- `getSymbol(): Object` — 获取当前绘图符号。
- `setSymbol(symbol): DrawTool` — 设置绘图符号。
- `getCurrentGeometry(): Geometry` — 获取当前正在绘制的几何对象。
- `undo()` — 撤销上一步操作。
- `redo()` — 重做上一步操作。
- `endDraw(param): DrawTool` — 结束当前绘制，`param` 为结束参数。
- `addCoordinate(coordinate): DrawTool` — 向当前绘制添加一个坐标。
- `setLayerZIndex(z): DrawTool` — 设置工具所在图层的层级。

## 静态方法

- `registerMode(name, modeAction)` — 注册一个自定义绘图模式。
- `getRegisterMode(name): Object` — 获取已注册的绘图模式。
- `getAllRegisterMode(): Object` — 获取所有已注册的绘图模式。

## 事件

- `drawprepare` — 开始绘制前触发。
- `drawstart` — 开始绘制时触发。
- `drawvertex` — 绘制过程中新增顶点时触发。
- `drawend` — 绘制完成时触发。
- `mousemove` — 绘制过程中鼠标移动时触发。
