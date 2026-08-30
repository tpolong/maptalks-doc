---
title: DomUtil
---

# DomUtil

DomUtil 是 maptalks 的 DOM 操作工具函数集合（位于 `core/util/dom.ts`），提供元素创建/移除、类名操作、样式设置、事件绑定、位置/尺寸测量等 DOM 能力。它是静态函数集合，不会被实例化，通过 `import { DomUtil } from "maptalks"` 使用。

```js
import { DomUtil } from "maptalks";

const el = DomUtil.createEl("div", "marker");
DomUtil.addClass(el, "active");
```

## 主要函数

- `createEl(tagName, className?): HTMLElement` — 创建元素，可指定类名。
- `removeDomNode(node?): void` — 移除 DOM 节点。
- `hasClass(el, name): boolean` — 判断元素是否包含指定类名。
- `addClass(el, name): void` — 为元素添加类名。
- `setClass(el, name): void` — 设置元素的类名。
- `setStyle(dom, strCss): void` — 批量设置元素样式。
- `setOpacity(el, value): void` — 设置元素透明度。
- `setTransform(el, offset): void` — 设置元素 transform（位移）。
- `offsetDom(dom, offset?): Point` — 获取或设置元素的偏移。
- `computeDomPosition(dom): number[]` — 计算元素在页面中的位置 `[x, y]`。
- `addDomEvent(obj, typeArr, handler, context?): void` — 为元素/文档绑定事件。
- `removeDomEvent(obj, typeArr, handler): void` — 移除事件（`off` 为别名）。
- `preventDefault(event): void` — 阻止默认行为。
- `stopPropagation(e): void` — 阻止事件冒泡。
- `measureDom(parentTag, dom): Size` — 在指定父标签下测量 dom 的尺寸。
