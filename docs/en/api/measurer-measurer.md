---
title: measurer.Measurer
---

# measurer.Measurer

measurer.Measurer is the static utility object for measurers, providing the ability to obtain a measurer instance by its code. It is never instantiated; the `Identity`, `WGS84Sphere`, and `BaiduSphere` measurers are registered internally, and calling it without an argument returns the default measurer `WGS84Sphere`.

```js
import { measurer } from "maptalks";

const m = measurer.Measurer.getInstance("EPSG:4326"); // WGS84Sphere
const d = measurer.Measurer.getInstance();            // the default WGS84Sphere
```

## Properties / Static Methods

- `getInstance(name?): measurer` — Return a measurer object by code. `name` can be `'EPSG:4326'`, `'IDENTITY'`, or `'BAIDU'`; without an argument the default measurer (`WGS84Sphere`) is returned, and `null` is returned for an invalid code.

## Methods

(No standalone instance methods; measurers are object mixins. Use the returned instance's `measureLength` / `measureArea` / `locate` / `rotate` methods.)
