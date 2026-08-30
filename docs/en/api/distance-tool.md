---
title: DistanceTool
---

# DistanceTool

DistanceTool is the distance measurement tool. It extends `DrawTool`. After the user clicks to draw a polyline on the map, the tool calculates and displays the length of each segment and the total length. It supports metric/imperial unit switching, configurable label formatting, and measuring multiple polylines.

```js
import { DistanceTool } from "maptalks";

const distanceTool = new DistanceTool({
  metric: true,
  imperial: false
}).addTo(map);
```

## Constructor

```js
new DistanceTool(options)
```

Parameters:

* `options` — DistanceTool options. Some properties match the `DistanceTool.options` table below; the rest are inherited from DrawTool.

## options

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `language` | `String` | The language of measurement hints | `'zh-CN'` |
| `metric` | `Boolean` | Whether metric units are enabled | `true` |
| `imperial` | `Boolean` | Whether imperial units are enabled | `false` |
| `vertexSymbol` | `Object` | The symbol for vertex labels | `null` |
| `labelOptions` | `Object` | Options for measurement labels | `null` |
| `decimalPlaces` | `Number` | The number of decimal places in the result | `2` |
| `formatLabelContent` | `Function` | A custom formatter for the label content | `null` |
| `clearButtonSymbol` | `Object` | The symbol of the clear button | `null` |

## Member Methods

- `clear()` — Clears all current measurement results.
- `getMeasureLayers(): Layer[]` — Gets the layers used to render measurement results.
- `getLastMeasure(): number` — Gets the last measurement result.
- `undo()` — Undoes the last step.
- `redo()` — Redoes the last step.
