---
title: Geometry
---

# Geometry

Geometry是所有几何图形（Point、LineString、Polygon、MultiPoint、MultiLineString、MultiPolygon、Marker、Circle、Ellipse、Rectangle、Sector、GeometryCollection 等）的抽象基类。它本身不直接实例化（`@abstract`），定义了所有几何共享的能力：坐标、范围、样式（symbol）、属性、图层/地图、层级、交互、序列化、事件等。

Geometry的继承链为 `Geometry → JSONAble(Eventable(Handlerable(Class)))`，并混入了 `Geometry.InfoWindow`、`Geometry.Edit`、`ui.Menuable`，因此实例还具备信息窗、编辑、菜单能力。

```js
import { VectorLayer, Marker } from "maptalks";

const layer = new VectorLayer("vector");
const marker = new Marker([0, 0], { symbol: { markerType: "pin" } });
marker.addTo(layer);
```

## 构造函数

```js
new Geometry(options)
```

参数：

* **options** `Object` 几何配置项。其中 `symbol`、`properties`、`id` 会被单独取出处理；坐标等几何参数由各子类构造函数单独传入（如 `new Point(coordinates, options)`）。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `id` | String\|Number | 几何id | `null` |
| `visible` | Boolean | 几何是否可见 | `true` |
| `interactive` | Boolean | 几何是否可交互 | `true` |
| `editable` | Boolean | 几何是否可编辑 | `true` |
| `cursor` | String | 鼠标悬停光标样式 | `null` |
| `measure` | String | 测量代码 | `'EPSG:4326'` |
| `draggable` | Boolean | 几何是否可拖拽 | `false` |
| `dragShadow` | Boolean | 拖拽时是否拖出影子 | `true` |
| `dragOnAxis` | String | 限定拖拽轴向（x/y） | `null` |
| `zIndex` | Number | 初始层级 | `undefined` |
| `antiMeridian` | Boolean | 是否按反子午线处理 | `false` |
| `symbol` | Object | 几何样式 | — |
| `properties` | Object | 几何属性 | — |

## 成员方法

### 添加与移除

- `addTo(layer, fitView?): this` — 将几何添加到图层
- `getLayer(): OverlayLayer` — 获取所在图层
- `getMap(): Map | null` — 获取所在地图
- `remove(): this` — 从图层移除自身

### id 与属性

- `getId(): string` / `setId(id): this` — 获取/设置id
- `getProperties(): Object` / `setProperties(properties): this` — 获取/设置属性

### 坐标与范围

- `getFirstCoordinate(): Coordinate` / `getLastCoordinate(): Coordinate` — 第一个/最后一个坐标
- `getCoordinates()` — 获取几何坐标（由子类实现）
- `setCoordinates(coordinate): this` — 设置几何坐标（由子类实现）
- `getCenter(): Coordinate` — 获取地理中心
- `getExtent(): Extent` — 获取地理范围
- `getContainerExtent(): PointExtent` — 获取容器像素范围
- `get2DExtent(): PointExtent` — 获取2D像素范围
- `getSize(): Size` — 获取像素尺寸
- `containsPoint(containerPoint, t?): boolean` — 是否包含容器点

### 样式（symbol）

- `getSymbol(): any` / `setSymbol(symbol): this` — 获取/设置样式
- `updateSymbol(props): this` — 增量更新样式
- `getSymbolHash(): string` — 获取样式哈希
- `symbolIsVisible(): boolean` — 样式是否可见

### 可见性与层级

- `show(): this` / `hide(): this` — 显示/隐藏
- `isVisible(): boolean` — 是否可见
- `getZIndex(): number` / `setZIndex(zIndex): this` — 获取/设置层级
- `bringToFront(): this` / `bringToBack(): this` — 置顶/置底

### 变换与交互

- `translate(x, y?, z?): this` — 平移几何
- `rotate(angle, pivot?): this` — 旋转几何
- `flash(interval?, count?, cb?, context?): this` — 闪烁几何

### 测量与海拔

- `getLength(): number` — 获取地理长度（米）
- `getArea(): number` — 获取地理面积（平方米）
- `getAltitude()` / `setAltitude(alt): this` — 获取/设置海拔
- `hasAltitude(): boolean` — 是否设置了海拔

### 序列化与复制

- `copy(): Geometry` — 返回副本
- `toGeoJSON(opts?): Object` — 导出GeoJSON Feature
- `toJSON(options?): Object` — 导出profile json

## 静态方法

- `Geometry.fromJSON(json): Geometry | Geometry[]` — 从JSON还原几何

## 事件

| 事件 | 触发时机 |
| --- | --- |
| `idchange` | 设置id |
| `propertieschange` | 设置属性 |
| `symbolchange` | 设置/更新样式 |
| `zindexchange` | 设置层级 |
| `positionchange` | 坐标位置改变 |
| `shapechange` | 形状改变 |
| `show` / `hide` | 显示/隐藏 |
| `removestart` / `removeend` / `remove` | 移除过程 |

```js
marker.on("positionchange", () => {
  console.log("marker moved to", marker.getCoordinates());
});
```
