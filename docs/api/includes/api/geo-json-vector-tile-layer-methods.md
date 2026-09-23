<details><summary>getWorkerOptions()</summary>
<div>
<br/>

获取传给 worker 的选项，含数据、extent、投影与简化容差

</div>
</details>

<details><summary>setData(data)</summary>
<div>
<br/>

设置数据，可为 GeoJSON 对象或数据 url

参数：

* data `any`

</div>
</details>

<details><summary>getExtent()</summary>
<div>
<br/>

获取数据中解析出的 extent

</div>
</details>

<details><summary>onWorkerReady(err?, params?)</summary>
<div>
<br/>

worker 数据处理完成或出错时的回调

参数：

* err（可选） `any`
* params（可选） `any`

</div>
</details>

<details><summary>getData(callback?)</summary>
<div>
<br/>

获取数据，未就绪时按 url 拉取后回调

参数：

* callback（可选） `(geojson: any) => void`

</div>
</details>

<details><summary>getTileUrl(x, y, z)</summary>
<div>
<br/>

按瓦片编号拼接出该瓦片的 url 标识

参数：

* x `number`
* y `number`
* z `number`

</div>
</details>

<details><summary>getFeature(id)</summary>
<div>
<br/>

按 id 获取对应的 feature

参数：

* id `number | string`

</div>
</details>

<details><summary>getGeometryById(id)</summary>
<div>
<br/>

按 id 获取对应的 feature

参数：

* id `number`

</div>
</details>
