---
title: GeometryEditor
---

# GeometryEditor

GeometryEditor 是 maptalks 内部使用的几何编辑器，继承自 `Eventable(Class)`。它为几何的编辑过程提供手柄（handle）管理：根据几何类型创建不同编辑手柄、维护编辑历史（撤销/重做）、在编辑时用影子几何（shadow）承载中间状态以提升性能，并在开始/停止编辑时切换几何事件。

```js
import { GeometryEditor } from "maptalks";

const editor = new GeometryEditor(polygon);
editor.start();          // 开始编辑
editor.undo();           // 撤销上一次编辑
editor.stop();           // 停止编辑
```

## 构造函数

```js
new GeometryEditor(geometry, options?)
```

参数：

* `geometry` — 待编辑的 [Geometry](/api/geometry) 对象。
* `options` — （可选）编辑配置项，见下表。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `fixAspectRatio` | `boolean` | 缩放时是否锁定长宽比 | `false` |
| `symbol` | `object` | 编辑时几何使用的符号 | `null` |
| `removeVertexOn` | `string` | 触发删除顶点的事件名，如 `contextmenu` | `'contextmenu'` |
| `centerHandleSymbol` | `object` | 中心手柄的符号 | 椭圆、不透明度 `1` |
| `vertexHandleSymbol` | `object` | 顶点手柄的符号 | 方块、不透明度 `1` |
| `newVertexHandleSymbol` | `object` | 新增顶点手柄的符号 | 方块、不透明度 `0.4` |
| `collision` | `boolean` | 手柄是否参与碰撞检测 | `false` |
| `vertexZIndex` | `number` | 顶点手柄的层级 | `0` |

## 成员方法

- `prepare(): void` — 准备编辑，注册地图 `drawtopstart` 刷新钩子并预留原始符号。
- `start(): void` — 开始编辑，创建影子几何、外围轮廓与对应类型的手柄。
- `stop(): void` — 停止编辑，移除临时图层并触发 `remove` 事件。
- `isEditing(): boolean` — 判断编辑器当前是否在编辑中。
- `createHandle(containerPoint, opts): EditHandle` — 创建一个编辑手柄并绑定拖拽事件。
- `createMarkerEditor(): void` — 为 Marker/TextBox 创建可缩放手柄。
- `createCircleEditor(): void` — 为 Circle 创建缩放手柄。
- `createEllipseOrRectEditor(): void` — 为 Ellipse/Rectangle 创建缩放手柄。
- `createPolygonEditor(): void` — 为 Polygon/LineString 创建顶点编辑手柄。
- `cancel(): GeometryEditor` — 取消全部编辑，恢复到历史起点。
- `undo(): any` — 撤销上一步编辑。
- `redo(): any` — 重做下一步编辑。

## 事件

- `remove` —（编辑器触发）当 `stop()` 停止编辑时 fired。

编辑过程中被编辑的 [Geometry](/api/geometry) 上会触发以下事件：

- `handledragstart` / `handledragging` / `handledragend` — 拖拽手柄改变几何形状的开始 / 进行 / 结束。
- `handleremove` — 移除编辑控制顶点时。
- `editrecord` — 发生编辑并被记录时。
- `resizing` — 缩放手柄拖动时。
