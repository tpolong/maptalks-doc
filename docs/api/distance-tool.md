---
title: DistanceTool
---

# DistanceTool

DistanceTool 是距离测量工具，继承自 `DrawTool`。用户在地图上依次点击绘制折线后，工具会计算并显示各段及总长度。它支持公制/英制切换、可配置标签格式，并可测量多个折线。

```js
import { DistanceTool } from "maptalks";

const distanceTool = new DistanceTool({
  metric: true,
  imperial: false
}).addTo(map);
```

## 构造函数

```js
new DistanceTool(options)
```

参数：

* `options` — 距离测量工具配置项，其部分属性同 `DistanceTool.options` 配置项，其余属性继承自 DrawTool。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `language` | `String` | 测量提示语的语言 | `'zh-CN'` |
| `metric` | `Boolean` | 是否启用公制单位 | `true` |
| `imperial` | `Boolean` | 是否启用英制单位 | `false` |
| `vertexSymbol` | `Object` | 顶点标注符号 | `null` |
| `labelOptions` | `Object` | 测量标签的配置项 | `null` |
| `decimalPlaces` | `Number` | 测量结果保留的小数位数 | `2` |
| `formatLabelContent` | `Function` | 自定义标签内容格式化函数 | `null` |
| `clearButtonSymbol` | `Object` | 清除按钮的符号样式 | `null` |

## 成员方法

- `clear()` — 清除当前所有测量结果。
- `getMeasureLayers(): Layer[]` — 获取用于显示测量结果的图层。
- `getLastMeasure(): number` — 获取最近一次的测量结果。
- `undo()` — 撤销上一步操作。
- `redo()` — 重做上一步操作。
