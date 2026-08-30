---
title: measurer.Measurer
---

# measurer.Measurer

measurer.Measurer 是测量器（Measurer）的静态工具对象，提供按代码获取测量器实例的能力。它不会被实例化，内部已注册 `Identity`、`WGS84Sphere`、`BaiduSphere` 三种测量器；无参调用时返回默认测量器 `WGS84Sphere`。

```js
import { measurer } from "maptalks";

const m = measurer.Measurer.getInstance("EPSG:4326"); // WGS84Sphere
const d = measurer.Measurer.getInstance();            // 默认 WGS84Sphere
```

## 属性 / 静态方法

- `getInstance(name?): measurer` — 按测量器代码返回测量器对象。`name` 可为 `'EPSG:4326'`、`'IDENTITY'`、`'BAIDU'`；无参时返回默认测量器（`WGS84Sphere`），代码无效时返回 `null`。

## 方法

（无独立实例方法，测量器为对象 mixin，日常使用其返回实例的 `measureLength` / `measureArea` / `locate` / `rotate` 等方法。）
