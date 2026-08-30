---
title: MultiLineString
---

# MultiLineString

MultiLineString 是多线字符串几何类，继承自 MultiPath。它表示多条折线的集合，常用于道路、河流或轨迹数据的批量展示，可传入坐标数组或 LineString 数组进行构造。

```js
import { MultiLineString } from "maptalks";

const lines = new MultiLineString([
  [[100, 0], [101, 1], [102, 2]],
  [[103, 3], [104, 4]]
]);
// 或传 LineString[]：
const lineGeoms = [new LineString([[100, 0], [101, 1]])];
const lines2 = new MultiLineString(lineGeoms);

layer.addGeometry(lines);
```

## 构造函数

```js
new MultiLineString(data, options?)
```

参数：

* `data` — 坐标数组（线坐标数组的数组）或 `LineString[]`。
* `options` — （可选）几何配置项，见 Path / Geometry 的 options。

## options 配置项

MultiLineString 无特有 options，继承自 Path。

## 成员方法

无特有方法，继承自 MultiPath。

## 静态方法

- `MultiLineString.fromJSON(json): MultiLineString` — 从 JSON 对象创建 MultiLineString 实例。

## 事件

无特有事件。
