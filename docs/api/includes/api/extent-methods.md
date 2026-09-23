<details><summary>add(p)</summary>
<div>
<br/>

与 coordinate、point 或 extent 相加，返回新的 extent

参数：

* p `any`

</div>
</details>

<details><summary>sub(p)</summary>
<div>
<br/>

减去 coordinate、point 或 extent，返回新的 extent

参数：

* p `any`

</div>
</details>

<details><summary>substract(p)</summary>
<div>
<br/>

减去 coordinate、point 或 extent，sub 的别名

参数：

* p `any`

</div>
</details>

<details><summary>round()</summary>
<div>
<br/>

对 Extent 边界值进行四舍五入，返回一个新的 Extent

返回：

* `Any` rounded extent

</div>
</details>

<details><summary>getMin(out?)</summary>
<div>
<br/>

获取 extent 的最小点，可传入 out 复用对象

参数：

* out（可选） `PositionType`

返回：

* `PositionType`

</div>
</details>

<details><summary>getMax(out?)</summary>
<div>
<br/>

获取 extent 的最大点，可传入 out 复用对象

参数：

* out（可选） `PositionType`

</div>
</details>

<details><summary>getCenter(out?)</summary>
<div>
<br/>

获取 Extent 的中心点

参数：

* out（可选） `PositionType`

</div>
</details>

<details><summary>equals(ext2)</summary>
<div>
<br/>

与另一个 extent 进行比较它们是否相等

参数：

* ext2 `Extent | PointExtent` extent to compare

返回：

* `boolean`

</div>
</details>

<details><summary>intersects(ext2)</summary>
<div>
<br/>

是否与另一个范围相交

参数：

* ext2 `Extent | PointExtent` another extent

返回：

* `boolean`

</div>
</details>

<details><summary>within(extent)</summary>
<div>
<br/>

判断当前 extent 是否在其他 extent 范围内

参数：

* extent `Extent | PointExtent` another extent

返回：

* `boolean`

</div>
</details>

<details><summary>contains(c)</summary>
<div>
<br/>

判断 extent 是否包含传入的 coordinate 或 extent

参数：

* c `any`

返回：

* `boolean`

</div>
</details>

<details><summary>getWidth()</summary>
<div>
<br/>

获取Extent的宽度

返回：

* `number`

</div>
</details>

<details><summary>getHeight()</summary>
<div>
<br/>

获取Extent的高度

返回：

* `number`

</div>
</details>

<details><summary>getSize()</summary>
<div>
<br/>

获取Extent的大小 - 高度和宽度构造的 Size 对象

</div>
</details>

<details><summary>set(xmin, ymin, xmax, ymax)</summary>
<div>
<br/>

设置 extent 的边界值

参数：

* xmin `WithNull<number>`
* ymin `WithNull<number>`
* xmax `WithNull<number>`
* ymax `WithNull<number>`

</div>
</details>

<details><summary>combine(extent)</summary>
<div>
<br/>

与其他 extent 合并到一个更大的 extent，返回一个新 extent

参数：

* extent `PositionType | Extent | PointExtent` extent/coordinate/point to combine into

返回：

* `Any` extent combined

</div>
</details>

<details><summary>intersection(extent)</summary>
<div>
<br/>

获取当前 extent 与另一个 extent 的交集范围

参数：

* extent `Extent | PointExtent` another extent

返回：

* `Any` intersection extent

</div>
</details>

<details><summary>expand(distance)</summary>
<div>
<br/>

扩大 extent，返回一个新 Extent

参数：

* distance `number | Size` distance to expand

返回：

* `Any` a new extent expanded from

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

获取 extent 的 JSON 对象。

返回：

* `Any` jsonObject

</div>
</details>

<details><summary>toArray(out?)</summary>
<div>
<br/>

获取extent矩形区域的坐标数组，包含5个坐标，第一个坐标与最后一个坐标相等。

参数：

* out（可选） `PositionType[]`

返回：

* `Any` coordinates array

</div>
</details>

<details><summary>toBBOX()</summary>
<div>
<br/>

以数组返回 extent 的 xmin ymin xmax ymax

</div>
</details>

<details><summary>toString()</summary>
<div>
<br/>

获取 extent 的 xmin、ymin、xmax、ymax 组成的字符串

返回：

* `string`

</div>
</details>

<details><summary>copy()</summary>
<div>
<br/>

复制 extent

返回：

* `Any` copy

</div>
</details>

<details><summary>convertTo(fn)</summary>
<div>
<br/>

按给定函数转换 extent 的角点，返回新 extent，out 可复用

参数：

* fn `(p: any) => any, out?: Extent | PointExtent`

返回：

* `Extent | PointExtent`

</div>
</details>

<details><summary>add(p)</summary>
<div>
<br/>

与 coordinate、point 或 extent 相加，返回新的 extent

参数：

* p `Extent`

返回：

* `Any` a new extent

</div>
</details>

<details><summary>add(p)</summary>
<div>
<br/>

与 coordinate、point 或 extent 相加，返回新的 extent

参数：

* p `PointExtent`

返回：

* `this`

</div>
</details>

<details><summary>add(p)</summary>
<div>
<br/>

与 coordinate、point 或 extent 相加，返回新的 extent

参数：

* p `PositionType`

返回：

* `this`

</div>
</details>

<details><summary>add(p)</summary>
<div>
<br/>

与 coordinate、point 或 extent 相加，返回新的 extent

参数：

* p `number[]`

返回：

* `this`

</div>
</details>

<details><summary>sub(p)</summary>
<div>
<br/>

减去 coordinate、point 或 extent，返回新的 extent

参数：

* p `[number, number]`

返回：

* `Any` a new extent

</div>
</details>

<details><summary>sub(p)</summary>
<div>
<br/>

减去 coordinate、point 或 extent，返回新的 extent

参数：

* p `PositionType`

返回：

* `this`

</div>
</details>

<details><summary>sub(p)</summary>
<div>
<br/>

减去 coordinate、point 或 extent，返回新的 extent

参数：

* p `Extent | PointExtent`

返回：

* `this`

</div>
</details>

<details><summary>substract(p)</summary>
<div>
<br/>

减去 coordinate、point 或 extent，sub 的别名

参数：

* p `[number, number]`

返回：

* `Any` a new extent

</div>
</details>

<details><summary>substract(p)</summary>
<div>
<br/>

减去 coordinate、point 或 extent，sub 的别名

参数：

* p `PositionType`

返回：

* `this`

</div>
</details>

<details><summary>substract(p)</summary>
<div>
<br/>

减去 coordinate、point 或 extent，sub 的别名

参数：

* p `Extent | PointExtent`

返回：

* `this`

</div>
</details>

<details><summary>getMin(out?)</summary>
<div>
<br/>

获取 extent 的最小点，可传入 out 复用对象

参数：

* out（可选） `Point`

返回：

* `Point`

</div>
</details>

<details><summary>getMin(out?)</summary>
<div>
<br/>

获取 extent 的最小点，可传入 out 复用对象

参数：

* out（可选） `Coordinate`

返回：

* `Coordinate`

</div>
</details>

<details><summary>getMax(out?)</summary>
<div>
<br/>

获取 extent 的最大点，可传入 out 复用对象

参数：

* out（可选） `Point`

返回：

* `Point`

</div>
</details>

<details><summary>getMax(out?)</summary>
<div>
<br/>

获取 extent 的最大点，可传入 out 复用对象

参数：

* out（可选） `Coordinate`

返回：

* `Coordinate`

</div>
</details>

<details><summary>contains(c)</summary>
<div>
<br/>

判断 extent 是否包含传入的 coordinate 或 extent

参数：

* c `CoordinateLike` input point

返回：

* `boolean`

</div>
</details>

<details><summary>convertTo(fn)</summary>
<div>
<br/>

按给定函数转换 extent 的角点，返回新 extent，out 可复用

参数：

* fn `(p: Point) => Point, out?: Extent | PointExtent` convert function on each point

返回：

* `Extent | PointExtent`

</div>
</details>

<details><summary>convertTo(fn)</summary>
<div>
<br/>

按给定函数转换 extent 的角点，返回新 extent，out 可复用

参数：

* fn `(p: Coordinate) => Coordinate, out?: Extent | PointExtent`

返回：

* `Extent | PointExtent`

</div>
</details>
