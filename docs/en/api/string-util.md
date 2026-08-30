---
title: StringUtil
---

# StringUtil

StringUtil is maptalks' collection of string-processing utility functions (located in `core/util/strings.ts`), providing trimming, replacement, splitting, hashing, text-width measurement, and line wrapping. It is a static function collection that is never instantiated; import it with `import { StringUtil } from "maptalks"`.

```js
import { StringUtil } from "maptalks";

console.log(StringUtil.trim("  a  ")); // "a"
console.log(StringUtil.replaceVariable("{foo} is awesome", { foo: "John" })); // "John is awesome"
```

## Main Functions

- `trim(str): string` — Trim whitespace from both ends of a string.
- `replaceAll(str, key, value): string` — Replace every occurrence of `key` with `value`.
- `splitWords(chr): string[]` — Split a string by whitespace characters.
- `hashCode(s): number` — Compute the 32-bit hash code of a string.
- `stringWidth(text, font?): number` — Measure the pixel width of text.
- `splitContent(content, font, wrapWidth, textWidth): Object[]` — Split text into multiple lines by width.
- `replaceVariable(str, props): string` — Replace `{foo}`-style variables with values from `props`.
- `getFont(style): string` — Generate a CSS font string from a text-style symbol.
