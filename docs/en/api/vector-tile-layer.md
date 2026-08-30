---
title: VectorTileLayer
---

# VectorTileLayer

VectorTileLayer is a vector tile layer used to load and render [vector tile](/en/guide/vector-tile) data on the map, and provides the necessary methods for data interaction.

The style of VectorTileLayer is defined in `options.style` in JSON format. The style definition adopts a plugin-based architecture: in the style, you can select data with different filter conditions and render it with the specified render plugin and its corresponding style.

For the available render plugins and the style definition of each plugin, refer to the style manual.

Because VectorTileLayer has a rich set of style properties, you can use the [MapTalks IDE](https://studio.maptalks.com) to customize the style of VectorTileLayer in a WYSIWYG way, and then load it in your program.

It is a subclass of [TileLayer](https://maptalks.org/maptalks.js/api/0.x/TileLayer.html) of the core [maptalks](https://maptalks.org) library, inheriting the methods and options of TileLayer.

> [!NOTE]
> A \* on a parameter or option name means the parameter or option is required. For example, the \* after id below means the parameter id is required:
>
> * id* **String** the layer id

<!--@include: ./includes/vector-tile-layer-style.md-->

## Constructor

```js
import { VectorTileLayer } from '@maptalks/gl-layers';

new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt'
});
```
<details><summary>Details</summary>
<div>

Parameters:

* id\* **String** the layer id
* options\* **Object** options, the available options are as follows:

| Option | Type | Description | Default |
|  ------         | :----:  | ----  |   :-----------:  |
|urlTemplate\*    | String          | URL template               |  null  |
<!--@include: ./includes/vtlayer-options.md-->
|cascadeTiles     | Boolean         | Whether to cascade-load tiles of lower zoom levels | true |
|enableAltitude   | Boolean         | Whether to enable feature altitude        | true |
|awareOfTerrain   | Boolean         | Whether to be aware of terrain (render draped on the terrain) | true |
|fadeAnimation    | Boolean         | Whether to enable fade in/out animation | false |
|featureIdProperty| String          | The property name used as the feature id (for feature state, similar to mapbox's promoteId) | null |
|altitudeProperty | String          | The property name in feature attributes that represents altitude | "altitude" |
|tileLimitPerFrame| Number          | The maximum number of tiles processed per frame | 1 |
|loadingLimit     | Number          | The maximum number of tiles loaded per frame in normal state (0 means unlimited) | 0 |
|glyphSdfLimitPerFrame | Number     | The maximum number of SDF glyphs drawn per tile per frame | 15 |
|sdfURL           | String          | The URL of the SDF font texture | null |
|workerGlyph      | Boolean         | Whether to process glyphs in the worker (automatically disabled when a urlModifier is set) | true |
<!--@include: ./includes/layer-options.md-->

</div>
</details>

## Methods

<!--@include: ./includes/vtlayer-methods.md-->

<details><summary>getCurrentRenderedFeatures()</summary>
<div>
<br/>

Gets the features currently rendered on screen (coordinates are converted to GeoJSON format).

Returns:

* Object[]

</div>
</details>

<details><summary>getRenderedFeatures()</summary>
<div>
<br/>

Gets all rendered features.

Returns:

* Object[]

</div>
</details>

<details><summary>getRenderedFeaturesAsync(options)</summary>
<div>
<br/>

Asynchronously fetches the rendered features in pages.

```js
const features = await layer.getRenderedFeaturesAsync({ countPerTime: 10000 });
```

Parameters:

* options **Object** options, the possible properties are:
| Property | Type | Description | Default |
|  ------      | :----:  | ----  |   :-----------:  |
| countPerTime | Number  | The maximum number of features fetched per page | 10000 |

Returns:

* Promise

</div>
</details>

<details><summary>highlight(highlights)</summary>
<div>
<br/>

Highlights the specified features. `highlights` supports either `{ id }` or `{ filter, name }` (the filter form requires `options.features` to be enabled).

```js
layer.highlight({ id: 'feature-1' });
```

Parameters:

* highlights **Object** highlight options, the possible properties are:
| Property | Type | Description |
|  ------ | :----: | ----  |
| id     | String \| Number | the feature id |
| filter | Object | the feature filter |
| name   | String | the highlight style name |

Returns:

* this

</div>
</details>

<details><summary>cancelHighlight(ids)</summary>
<div>
<br/>

Cancels the highlight of the specified features.

Parameters:

* ids **Number[] | String[]** an array of feature ids

Returns:

* this

</div>
</details>

<details><summary>cancelAllHighlight()</summary>
<div>
<br/>

Cancels the highlight of all features.

Returns:

* this

</div>
</details>

<details><summary>outlineFeatures(featureIds)</summary>
<div>
<br/>

Highlights the features with the specified ids (one of the outline series of methods; the layer must be added to a GroupGLLayer with the outline post-processing enabled).

Parameters:

* featureIds **Number[] | String[]** an array of feature ids

Returns:

* this

</div>
</details>

<details><summary>setFeatureState(source, state)</summary>
<div>
<br/>

Sets the state of a feature (feature state).

```js
layer.setFeatureState({ id: 'feature-1', layer: 'layer-name' }, { hot: true });
```

Parameters:

* source **Object** the feature source, `{ id, layer }`
* state **Object** the feature state to set

Returns:

* this

</div>
</details>

<details><summary>getFeatureState(source)</summary>
<div>
<br/>

Gets the state of a feature.

Parameters:

* source **Object** the feature source, `{ id, layer }`

Returns:

* Object

</div>
</details>

<details><summary>removeFeatureState(source, key)</summary>
<div>
<br/>

Removes the specified property from the feature state.

Parameters:

* source **Object** the feature source, `{ id, layer }`
* key **String** the name of the state property to remove

Returns:

* this

</div>
</details>

<details><summary>validateStyle()</summary>
<div>
<br/>

Validates the style (the filter must be 'default', true, an array, or an object with a condition).

Returns:

* Boolean

</div>
</details>

<details><summary>forceReload()</summary>
<div>
<br/>

Forcibly reloads tiles and invalidates the tile cache in the worker.

Returns:

* this

</div>
</details>

<details><summary>setURLModifier(modifier)</summary>
<div>
<br/>

Sets the tile URL processing function.

Parameters:

* modifier **Function** the URL processing function

Returns:

* this

</div>
</details>

<details><summary>getURLModifier()</summary>
<div>
<br/>

Gets the tile URL processing function.

Returns:

* Function

</div>
</details>

<details><summary>getGroundConfig()</summary>
<div>
<br/>

Gets the layer background config, used for the ground rendering of the GroupGLLayer.

Returns:

* Object

</div>
</details>

<details><summary>isDefaultRender()</summary>
<div>
<br/>

Whether the layer is in the default rendering state without a style.

Returns:

* Boolean

</div>
</details>

<details><summary>clearData()</summary>
<div>
<br/>

Clears the tile data.

</div>
</details>

<!--@include: ./includes/tilelayer-methods.md-->

<!--@include: ./includes/layer-methods.md-->

## Static Methods

<details><summary>compressStyleJSON(style)</summary>
<div>
<br/>

Compresses the style JSON into a smaller JSON object by merging render plugins with identical definitions.

```js
const compressedStyle = VectorTileLayer.compressStyleJSON(style);
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
VectorTileLayer.registerPlugin(PluginClazz);
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
const pluginClasses = VectorTileLayer.getPlugins();
```

Returns:

* PainterPlugin[]

</div>
</details>

<details><summary>fromJSON(json)</summary>
<div>
<br/>

Creates a VectorTileLayer object from the layer's JSON object.

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
```

Returns:

* VectorTileLayer

</div>
</details>

<details><summary>loadFrom(url, fetchOptions)</summary>
<div>
<br/>

Loads a style JSON file and creates a layer instance from it (asynchronous).

```js
const layer = await VectorTileLayer.loadFrom(url, {});
```

Parameters:

* url **String** the URL of the style JSON file
* fetchOptions **Object** optional fetch options

Returns:

* Promise&lt;VectorTileLayer&gt;

</div>
</details>

## Events

<!--@include: ./includes/js-events-example.md-->

### Layer Events

<!--@include: ./includes/vtlayer-events.md-->

<details><summary>cleardata</summary>
<div>
<br/>

Fired when the renderer clears the tile data.

Properties:

| Property | Type | Value |
|  ------ | :----: | ----  |
|type     | String          |   "cleardata"  |
|target   | VectorTileLayer |   this     |

</div>
</details>

<details><summary>refreshstyle</summary>
<div>
<br/>

Fired when the style is refreshed.

Properties:

| Property | Type | Value |
|  ------ | :----: | ----  |
|type     | String          |   "refreshstyle"  |
|target   | VectorTileLayer |   this     |

</div>
</details>

<details><summary>contextcreate</summary>
<div>
<br/>

Fired when the GL context is created.

Properties:

| Property | Type | Value |
|  ------ | :----: | ----  |
|type     | String          |   "contextcreate"  |
|target   | VectorTileLayer |   this     |
|regl     | Object          |   the regl instance   |
|device   | Object          |   the GPU device (WebGPU mode) |

</div>
</details>

### Events Inherited from TileLayer

<!--@include: ./includes/tilelayer-events.md-->

### Events Inherited from Layer

<!--@include: ./includes/layer-events.md-->

> This document has been cross-checked against the @maptalks/gl-layers 2026 source code (api-notes-vt-gl.md)
