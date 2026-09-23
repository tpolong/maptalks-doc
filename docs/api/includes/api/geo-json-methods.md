<details><summary>toGeometry(geoJSON, foreachFn?)</summary>
<div>
<br/>

把 GeoJSON 对象或字符串转换为几何图形

参数：

* geoJSON `any` GeoJSON objects or GeoJSON string
* foreachFn（可选） `(geo: Geometry) => void, filterFn?: (geo: Geometry) => boolean` =undefined] - callback function for each geometry

返回：

* `Geometry|Geometry[]` a geometry array when input is a FeatureCollection

</div>
</details>

<details><summary>toGeometryAsync(geoJSON, foreachFn?)</summary>
<div>
<br/>

async将一个或多个GeoJSON对象转换为几何体

参数：

* geoJSON `any` GeoJSON objects or GeoJSON string
* foreachFn（可选） `(geo: Geometry) => void, countPerTime?: number, filterFn?: (geo: Geometry) => boolean` =undefined] - callback function for each geometry

返回：

* `Promise`

</div>
</details>

<details><summary>fetch(url, countPerTime?)</summary>
<div>
<br/>

正在请求一个大容量的geojson文件。解决主线程阻塞问题

参数：

* url `any` GeoJSON file path
* countPerTime（可选） `number = 2000` =2000] - Number of graphics converted per time

返回：

* `Promise`

</div>
</details>

<details><summary>toGeometry(geoJSON, layerType)</summary>
<div>
<br/>

把 GeoJSON 对象或字符串转换为几何图形

参数：

* geoJSON `Any`
* layerType `Any`

</div>
</details>

<details><summary>isGeoJSON(geoJSON)</summary>
<div>
<br/>

判断给定对象是否为合法的 GeoJSON 数据

参数：

* geoJSON `Any`

</div>
</details>
