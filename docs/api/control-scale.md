---
title: Scale
---

# Scale

Scale 是比例尺控件，继承自 `Control`。它在地图上根据当前缩放级别显示对应的地图比例尺，支持公制与英制单位。默认显示在左下角。

```js
import { Scale } from "maptalks";

const scale = new Scale({
  metric: true,
  imperial: false
}).addTo(map);
```

## 构造函数

```js
new Scale(options)
```

参数：

* `options` — 比例尺控件配置项。

## options 配置项

| 配置名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| `position` | `String` | 控件位置 | `"bottom-left"` |
| `maxWidth` | `Number` | 比例尺最大宽度（像素） | `100` |
| `metric` | `Boolean` | 是否显示公制单位 | `true` |
| `imperial` | `Boolean` | 是否显示英制单位 | `false` |
| `containerClass` | `String` | 容器 CSS 类名 | `null` |
