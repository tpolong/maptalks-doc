---
title: Renderable
---

# Renderable

`Renderable` 是 maptalks 的渲染器注册/查找混入（mixin）工厂，为宿主类（如 Map、Layer、Geometry）提供按名称注册和获取渲染器类的能力。渲染器类通过 `registerRenderer` 以名称注册，宿主类再通过 `getRendererClass` 在运行时按名称查找并创建对应的渲染器。

```js
import { Class, Renderable } from "maptalks";

const MyRenderer = /* 某个渲染器类 */;
Renderable.registerRenderer("my-renderer", MyRenderer);

const RenderableClass = Class.extend({ /* ... */ }).include(Renderable);
const RendererClass = RenderableClass.getRendererClass("my-renderer");
```

## 构造函数

混入工厂，无独立构造。宿主类构造后自动获得渲染器注册/查找能力。

## options 配置项

无独立配置项。

## 成员方法

无独立实例方法，核心能力由静态方法提供。

## 静态方法

- `Renderable.registerRenderer(name, clazz)` — 以名称 `name` 注册渲染器类 `clazz`。
- `Renderable.getRendererClass(name)` — 根据名称 `name` 返回已注册的渲染器类。

## 事件

无。
