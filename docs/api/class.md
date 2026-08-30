---
title: Class
---

# Class

`Class` 是 maptalks 库的根基类，所有对象（如 Map、Layer、几何图形等）都直接或间接继承自它。它提供统一的 options 合并与配置机制：任何子类通过构造函数传入配置项，内部会与类的默认配置合并，并触发子类通过 `addInitHook` 注册的初始化钩子。

子类通过 ES class 语法 `extends Class` 派生（而非 `extend` 方法），需要自定义默认配置时用静态 `mergeOptions`。

```js
import { Class } from "maptalks";

class Foo extends Class {
  // 自定义逻辑
}
Foo.mergeOptions({ color: "red" }); // 为 Foo 设置默认配置

const foo = new Foo({ color: "blue" });
foo.config("color", "green"); // 更新配置，返回 foo
```

## 构造函数

```js
new Class(options?)
```

参数：

* `options` — `Object`，可选。传入的配置项对象，会被合并到实例的 `options` 中。

## options 配置项

`Class` 本身不定义配置项。子类可通过静态 `mergeOptions` 声明默认配置，这些配置可通过 `config()` 读取或更新。

## 成员方法

- `config(conf?, value?)` — 无参时返回整个 options 对象；传字符串 + value 或对象时更新配置并返回 `this`，同时触发 `onConfig` 回调。
- `proxyOptions()` — 将 `options` 用 Proxy 包裹，使写入键时自动走 `config`。
- `onConfig(conf)` — 配置变化时的回调钩子，子类可覆写；`conf` 为发生变化的配置项。

## 静态方法

- `Class.addInitHook(fn, ...args)` — 在类初始化时注册一个钩子（`fn`），构造时会以 `args` 为参数调用。
- `Class.include(...sources)` — 将源对象中的方法批量混入类的原型中。
- `Class.mergeOptions(options)` — 将传入的 options 合并为类的默认配置，返回类本身（`this`）。

## 事件

`Class` 本身不触发事件。若需要事件能力，请混入 `Eventable`。
