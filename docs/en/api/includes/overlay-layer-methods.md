## Methods Inherited from OverlayLayer

See the [API documentation of the parent class OverlayLayer](https://maptalks.org/maptalks.js/api/0.x/OverlayLayer.html) for details.

<details><summary>getGeometryById(id)</summary>
<div>
<br/>

Gets the geometry with the given id.

Parameters:

* id **Number** | **String** the id of the geometry

Returns:

* Geometry

</div>
</details>

<details><summary>getGeometries(filter, context)</summary>
<div>
<br/>

Gets all geometries matching the given condition.

Parameters:

* filter **Function** the filter function
* context **Object** the this value used when the function runs

Returns:

* Geometry[]

</div>
</details>

<details><summary>getFirstGeometry()</summary>
<div>
<br/>

Gets the first geometry.

Returns:

* Geometry

</div>
</details>

<details><summary>getLastGeometry()</summary>
<div>
<br/>

Gets the last geometry.

Returns:

* Geometry

</div>
</details>

<details><summary>getCount()</summary>
<div>
<br/>

Gets the number of geometries.

Returns:

* Number

</div>
</details>

<details><summary>getExtent()</summary>
<div>
<br/>

Gets the geographic extent of all geometries on the layer.

Returns:

* Extent

</div>
</details>

<details><summary>forEach(fn, context)</summary>
<div>
<br/>

Iterates over the geometries and executes the function.

Parameters:

* fn **Function** the function applied to each geometry, function(geometry) {}
* context **Object** the this value used when the function runs

Returns:

* this

</div>
</details>

<details><summary>isEmpty()</summary>
<div>
<br/>

Checks whether the layer is empty.

Returns:

* Boolean

</div>
</details>

<details><summary>addGeometry(geometries, fitView)</summary>
<div>
<br/>

Adds geometries to the layer.

Parameters:

* geometries **Geometry** | **Geometry[]** a geometry or an array of geometries
* fitView **Boolean** 

Returns:

* this

</div>
</details>

<details><summary>removeGeometry(geometries)</summary>
<div>
<br/>

Removes geometries from the layer.

Parameters:

* geometries **Geometry** | **Geometry[]**

Returns:

* this

</div>
</details>

<details><summary>clear()</summary>
<div>
<br/>

Clears the layer and removes all geometries.

Returns:

* this

</div>
</details>

<details><summary>setStyle(style)</summary>
<div>
<br/>

Sets the style of the layer. See this link for the style documentation.

```js
const style = [
  {
    filter : true,            // 数据的过滤条件
    symbol: {                 // 样式定义
      markerWidth: 6,
      markerHeight: 6,
      markerType: 'ellipse',
      markerFill: '#0f0'
    }
  }
];
layer.setStyle(style);
```

Parameters:
* style **Object[]** the layer style object. Each style object contains two properties, filter and symbol: filter is a filter condition of the [feature-filter type](https://github.com/maptalks/feature-filter), and symbol is a style object.

Returns:

* this

</div>
</details>

<details><summary>getStyle()</summary>
<div>
<br/> 

Gets the layer style.

Returns:

* Object[]

</div>
</details>

<details><summary>removeStyle()</summary>
<div>
<br/> 

Removes the layer style.

Returns:

* this

</div>
</details>
