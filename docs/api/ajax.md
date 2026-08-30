---
title: Ajax
---

# Ajax

`Ajax` 是 maptalks 的 HTTP 请求静态工具类，封装了 `get`/`post`/`getJSON`/`getArrayBuffer`/`getImage`/`jsonp` 等常用的网络请求方法。它不实例化，所有方法都通过类本身调用，用于加载瓦片、GeoJSON 数据、图片等远程资源。

```js
import { Ajax } from "maptalks";

Ajax.getJSON("https://example.com/data.json", (json) => {
  console.log(json);
});

Ajax.get("https://example.com/data.txt", { mimeType: "text/plain" }, (text) => {
  console.log(text);
});
```

## 构造函数

无。`Ajax` 为纯静态工具类，不可实例化。

## options 配置项

无独立配置项。各方法通过 `options` 参数传入请求选项（如 `mimeType`、`timeout`、`headers` 等）。

## 成员方法

- `Ajax.get(url, options?, cb?)` — 发起 GET 请求，`options` 可选请求配置，`cb` 可选回调接收响应结果。
- `Ajax.post(url, options?, cb?)` — 发起 POST 请求，`options` 可包含要提交的数据，`cb` 可选回调。
- `Ajax.getJSON(url, options?, cb?)` — 发起 GET 请求并解析 JSON 结果，`cb` 接收经过解析的数据。
- `Ajax.getArrayBuffer(url, options?, cb?)` — 发起 GET 请求并以 ArrayBuffer 形式获取响应，用于二进制数据。
- `Ajax.getImage(img, url, options?)` — 将 `url` 处的图片加载到给定的 `img`（HTMLImageElement）中，加载成功或失败时触发图片自身的 `onload`/`onerror`。
- `Ajax.jsonp(url, callback)` — 发起 JSONP 请求，`callback` 为全局回调，用于跨域数据获取。

## 静态方法

`Ajax` 的方法本身即静态方法（见上方成员方法）。

## 事件

无。
