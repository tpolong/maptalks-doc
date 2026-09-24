---
title: GeoJSONVectorTileLayer
---

# GeoJSONVectorTileLayer

GeoJSONVectorTileLayer is a vector tile layer for rendering GeoJSON data on the map.

The layer is based on the open-source [geojson-vt](https://github.com/mapbox/geojson-vt) library. It slices the GeoJSON data into tiles in a worker in real time and returns the result to the main thread for rendering.

Advantages of loading GeoJSON data with the vector tile mechanism:

* High performance: easily parses and renders GeoJSON files of hundreds of megabytes
* Good experience: all data processing runs in the worker and does not block the main thread

It is a subclass of [VectorTileLayer](/en/api/vector-tile-layer) and inherits the methods and options of VectorTileLayer.

Likewise, styles written for VectorTileLayer can be applied to GeoJSONVectorTileLayer without modification, unifying server-side vector tile data and local GeoJSON data.

> [!NOTE]
> A \* on a parameter or option name means the parameter or option is required. For example, the \* after id below means the parameter id is required:
>
> * id* **String** the layer id

<!--@include: ./includes/vector-tile-layer-style.md-->

## Constructor

```js
import { GeoJSONVectorTileLayer } from 'maptalks-gl';

new GeoJSONVectorTileLayer('geojson0', {
  data: 'path/to/example.geojson'
});
```
<details><summary>Details</summary>
<div>

Parameters:

* id\* **String** the layer id
* options\* **Object** options, the available options are as follows:

| Option | Type | Description | Default |
|  ------         | :----:  | ----  |   :-----------:  |
|data\*           | Object/String   | A GeoJSON data object or a URL | null |
|features         | Boolean         | Whether tiles return feature data; for a GeoJSON layer, only the feature id is returned | true |
|tileBuffer       | Number          | The tile buffer size | 64 |
|extent           | Number          | The tile coordinate extent (the encoding precision of geometries) | 8192 |
|simplifyTolerance| Number          | The tile simplification tolerance (a larger value means more simplification) | 3 |
|generateOMBB     | Boolean         | Whether to generate the oriented minimum bounding box (OMBB, to speed up picking) | true |
|convertFn        | String          | The data conversion function string (executed as convert(data) in the worker) | null |
<!--@include: ./includes/vtlayer-options.md-->
<!--@include: ./includes/layer-options.md-->

</div>
</details>

## Methods

<details><summary>getData()</summary>
<div>
<br/>

Gets the GeoJSON data.

```js
const layer = new GeoJSONVectorTileLayer('vt0', {
  data: 'path/to/example.geojson'
});
const data = layer.getData();
```

Returns:

* String | Object

</div>
</details>

<details><summary>setData(data)</summary>
<div>
<br/>

Updates the layer data.

```js
const layer = new GeoJSONVectorTileLayer('vt0', {
  data: 'path/to/example.geojson'
});
layer.setData('path/to/another.geojson');
```

Parameters:
* data **String | Object** GeoJSON data or a remote URL of the data.

Returns:

* this

</div>
</details>

<details><summary>getExtent()</summary>
<div>
<br/>

Gets the extent of the GeoJSON data.

```js
const layer = new GeoJSONVectorTileLayer('vt0', {
  data: 'path/to/example.geojson'
});
const extent = layer.getExtent();
```

Returns:

* maptalks.Extent

</div>
</details>

<details><summary>getFeature(id)</summary>
<div>
<br/>

Gets the feature with the given id.

```js
const layer = new GeoJSONVectorTileLayer('vt0', {
  data: 'path/to/example.geojson'
});
const feature = layer.getFeature(id);
```

Returns:

* Object

</div>
</details>

<details><summary>getGeometryById(id)</summary>
<div>
<br/>

Gets the feature by id (an alias of getFeature).

```js
const layer = new GeoJSONVectorTileLayer('vt0', {
  data: 'path/to/example.geojson'
});
const feature = layer.getGeometryById(id);
```

Parameters:

* id **Number | String** the feature id

Returns:

* Object

</div>
</details>

<!-- api-gen:start -->
### Other Public Methods of GeoJSONVectorTileLayer

<!--@include: ./includes/api/geojson-vector-tile-layer-missing.md-->

### Methods Inherited from VectorTileLayer

The following methods are provided by the parent class [VectorTileLayer](/en/api/vector-tile-layer) and are available on instances of this class.

<!--@include: ./includes/api/vector-tile-layer-methods.md-->

### Methods Inherited from TileLayer

The following methods are provided by the parent class [TileLayer](/en/api/tile-layer) and are available on instances of this class.

<!--@include: ./includes/api/tile-layer-methods.md-->

### Methods Inherited from Layer

The following methods are provided by the parent class [Layer](/en/api/layer) and are available on instances of this class.

<!--@include: ./includes/api/layer-methods.md-->

### Mixed-in Methods

This class gains the following method groups from mixins; see the linked pages for details: [JSONAble](/en/api/json-able)（`getJSONType`…）；[Eventable](/en/api/eventable)（`on`、`addEventListener`、`once`、`off`、`removeEventListener`、`listens`、`getListeningEvents`、`copyEventListeners`…）；[Renderable](/en/api/renderable).
<!-- api-gen:end -->

## Methods Inherited from VectorTileLayer

## Static Methods

<details><summary>compressStyleJSON(style)</summary>
<div>
<br/>

Compresses the style JSON into a smaller JSON object by merging render plugins with identical definitions.

```js
const compressedStyle = GeoJSONVectorTileLayer.compressStyleJSON(style);
```

Parameters:

* style **Object** the style object

Returns:

* **Object**

</div>
</details>

<details><summary>registerPlugin(Plugin)</summary>
<div>
<br/>

Registers a new render plugin.

```js
GeoJSONVectorTileLayer.registerPlugin(PluginClazz);
```

Parameters:

* PluginClazz **PainterPlugin** the render plugin class to register

</div>
</details>

<details><summary>getPlugins()</summary>
<div>
<br/>

Gets all registered render plugins.

```js
const pluginClasses = GeoJSONVectorTileLayer.getPlugins();
```

Returns:

* PainterPlugin[]

</div>
</details>

<details><summary>fromJSON(json)</summary>
<div>
<br/>

Creates a GeoJSONVectorTileLayer object from the layer's JSON object.

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
```

Returns:

* GeoJSONVectorTileLayer

</div>
</details>

<!-- api-gen:start -->
### Other Static Methods of GeoJSONVectorTileLayer

<!--@include: ./includes/api/geojson-vector-tile-layer-statics-missing.md-->

### Static Methods Inherited from VectorTileLayer

The following methods are provided by the parent class [VectorTileLayer](/en/api/vector-tile-layer) and are available on instances of this class.

<!--@include: ./includes/api/vector-tile-layer-statics.md-->

### Static Methods Inherited from Layer

The following methods are provided by the parent class [Layer](/en/api/layer) and are available on instances of this class.

<!--@include: ./includes/api/layer-statics.md-->
<!-- api-gen:end -->

## Events

<!--@include: ./includes/js-events-example.md-->

### Layer Events

<details><summary>dataload</summary>
<div>
<br/>

Fired when data is loaded successfully.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "dataload"  |
|target   | GeoJSONVectorTileLayer |   this     |
|extent   | Number[] |   the extent range of the data     |

</div>
</details>

<details><summary>dataerror</summary>
<div>
<br/>

Fired when a data loading error occurs.

Properties:

| Property | Type | Value |
|  ------         | :----:  | ----  |
|type     | String          |   "dataerror"  |
|target   | GeoJSONVectorTileLayer |   this     |
|error    | String |   the error message     |

</div>
</details>

> This document has been cross-checked against the maptalks-gl 0.124.4 source code

<!-- api-gen:start -->
### Other Events of GeoJSONVectorTileLayer

The following events are defined in the source and are fired by this class (or its ancestors):

<!--@include: ./includes/api/geojson-vector-tile-layer-events-missing.md-->

### Events Inherited from VectorTileLayer

<!--@include: ./includes/api/vector-tile-layer-events.md-->

### Events Inherited from TileLayer

<!--@include: ./includes/api/tile-layer-events.md-->

### Events Inherited from Layer

<!--@include: ./includes/api/layer-events.md-->
<!-- api-gen:end -->
