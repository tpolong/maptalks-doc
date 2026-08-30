---
title: StringUtil
---

# StringUtil

StringUtil 是 maptalks 的字符串处理工具函数集合（位于 `core/util/strings.ts`），提供字符串裁剪、替换、拆分、哈希、文本宽度测量、换行等能力。它是静态函数集合，不会被实例化，通过 `import { StringUtil } from "maptalks"` 使用。

```js
import { StringUtil } from "maptalks";

console.log(StringUtil.trim("  a  ")); // "a"
console.log(StringUtil.replaceVariable("{foo} is awesome", { foo: "John" })); // "John is awesome"
```

## 主要函数

- `trim(str): string` — 去除字符串两端的空白。
- `replaceAll(str, key, value): string` — 将字符串中所有 `key` 替换为 `value`。
- `splitWords(chr): string[]` — 按空白字符拆分字符串。
- `hashCode(s): number` — 计算字符串的 32 位哈希码。
- `stringWidth(text, font?): number` — 测量文本的像素宽度。
- `splitContent(content, font, wrapWidth, textWidth): Object[]` — 按宽度将文本拆成多行。
- `replaceVariable(str, props): string` — 用 `props` 值替换 `{foo}` 形式的变量。
- `getFont(style): string` — 从文本样式 symbol 生成 CSS font 字符串。
