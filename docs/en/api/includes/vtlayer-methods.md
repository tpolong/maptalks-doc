<details><summary>setStyle(layerStyle)</summary>
<div>
<br/>

Sets the style of the layer. See this link for the style documentation.

```js
const style = {
  style: [
    {
      filter : true,            // 数据的过滤条件
      renderPlugin: {           // 渲染插件
        type : 'native-point',
        dataConfig : {
          type : 'native-point'
        }
      },
      symbol: {                 // 样式定义
        markerSize: 6,
        markerType: 'circle',
        markerFill: '#0f0'
      }
    }
  ]
};
layer.setStyle(style);
```

Parameters:
* style **Object** the layer style object, with the following optional properties:

| Property | Type | Description | Default |
|  ------         | :----:  | ----  |   :-----------:  |
| style        | Object[] | The render plugin array | [] |
| featureStyle | Object[] | The render plugin list of a single feature | [] |
| $root         | String   | The root path of the resource directory | null |

Returns:

* this

</div>
</details>


<details><summary>getStyle()</summary>
<div>
<br/> 

Gets the layer style.

Returns:

* Object

</div>
</details>


<details><summary>getComputedStyle()</summary>
<div>
<br/>

Gets the processed layer style. The main differences from style are:
* If $root is defined in the style, all resource paths in computedStyle are the merged paths
* The style definitions in style may be compressed, while those in computedStyle are uncompressed

Returns:

* Object

</div>
</details>


<details><summary>outlineAll()</summary>
<div>
<br/>

Highlights all data on the layer.

Because highlighting is implemented with post-processing, the layer must be added to a GroupGLLayer with the outline post-processing enabled.

```js
layer.addTo(groupGLLayer);
layer.outlineAll();
```

Returns:

* this

</div>
</details>



<details><summary>outlineBatch(idx)</summary>
<div>
<br/>

Highlights the data rendered by the render plugin with index idx in the style.

Same as outlineAll: the layer must be added to a GroupGLLayer with the outline post-processing enabled.

```js
layer.addTo(groupGLLayer);
layer.outlineBatch(0);
```

Parameters:

* idx **Number** the index in the style

Returns:

* this

</div>
</details>


<details><summary>outline(idx, featureIds)</summary>
<div>
<br/>

Highlights the specified features among the data rendered by the render plugin with index idx.

```js
layer.addTo(groupGLLayer);
layer.outline(0, [0]);
```

Parameters:

* idx **Number** the index in the style
* featureIds **Number[] | String[]** an array of feature ids

Returns:

* this

</div>
</details>


<details><summary>cancelOutline()</summary>
<div>
<br/>

Cancels the highlight.

Returns:

* this

</div>
</details>


<details><summary>updateSymbol(idx, symbol)</summary>
<div>
<br/>

Updates the symbol of the render plugin with index idx.

```js
layer.updateSymbol(0, { polygonFill: '#0f0' });
```

Parameters:

* idx **Number** the render plugin index
* symbol **Object** the symbol properties to update

Returns:

* this

</div>
</details>


<details><summary>updateFeatureSymbol(idx, styleIdx, symbol)</summary>
<div>
<br/>

Updates the symbol of the render plugin with index styleIdx in the feature style with index idx.

```js
const style = {
  featureStyle: [
    {
      id: 16,
      style: [
        {
          renderPlugin: {
            dataConfig: {
              type: 'fill'
            },
            sceneConfig: {
              antialias: false
            },
            type: 'fill'
          },
          symbol: {
            polygonFill: '#f00'
          }
        }
      ]
    }
  ]
}
layer.updateFeatureSymbol(0, 0, { polygonFill: '#0f0' });
```

Parameters:

* idx **Number** the index of the feature style in featureStyle
* styleIdx **Number** the style index
* symbol **Object** the symbol properties to update

Returns:

* this

</div>
</details>


<details><summary>updateSceneConfig(idx, sceneConfig)</summary>
<div>
<br/>

Updates the sceneConfig of the render plugin with index idx.

```js
layer.updateSceneConfig(0, { collision: false });
```

Parameters:

* idx **Number** the render plugin index
* sceneConfig **Object** the sceneConfig properties to update

Returns:

* this

</div>
</details>


<details><summary>updateFeatureSceneConfig(idx, styleIdx, sceneConfig)</summary>
<div>
<br/>

Updates the sceneConfig of the render plugin with index styleIdx in the feature style with index idx.

```js
const style = {
  featureStyle: [
    {
      id: 16,
      style: [
        {
          renderPlugin: {
            dataConfig: {
              type: 'fill'
            },
            sceneConfig: {
              antialias: false
            },
            type: 'fill'
          },
          symbol: {
            polygonFill: '#f00'
          }
        }
      ]
    }
  ]
}
layer.updateFeatureSceneConfig(0, 0, { antialias: true });
```

Parameters:

* idx **Number** the index of the feature style in featureStyle
* styleIdx **Number** the render plugin index
* sceneConfig **Object** the sceneConfig properties to update

Returns:

* this

</div>
</details>


<details><summary>updateDataConfig(idx, dataConfig)</summary>
<div>
<br/>

Updates the dataConfig of the render plugin with index idx.

```js
layer.updateDataConfig(0, { altitudeProperty: 'height' });
```

Parameters:

* idx **Number** the render plugin index
* dataConfig **Object** the dataConfig properties to update

Returns:

* this

</div>
</details>


<details><summary>updateFeatureDataConfig(idx, styleIdx, dataConfig)</summary>
<div>
<br/>

Updates the dataConfig of the render plugin with index styleIdx in the feature style with index idx.

```js
const style = {
  featureStyle: [
    {
      id: 16,
      style: [
        {
          renderPlugin: {
            dataConfig: {
              type: 'fill'
            },
            sceneConfig: {
              antialias: false
            },
            type: 'fill'
          },
          symbol: {
            polygonFill: '#f00'
          }
        }
      ]
    }
  ]
}
layer.updateFeatureDataConfig(0, 0, { foo: 1 });
```

Parameters:

* idx **Number** the index of the feature style in featureStyle
* styleIdx **Number** the render plugin index
* dataConfig **Object** the dataConfig properties to update

Returns:

* this

</div>
</details>


<details><summary>identify(coordinates, options)</summary>
<div>
<br/>

Queries data at the given coordinate on the layer.
Note that only rendered data can be queried.

```js
layer.identify([121.23, 39.34], { tolerance: 2 })
```

Parameters:

* coordinates **Number[]** the coordinate value
* options **Object** options, the possible properties are:
| Property | Type | Description | Default |
|  ------         | :----:  | ----  |   :-----------:  |
| tolerance       | Number  | The pixel tolerance for the query | 3 |

Returns:

* Object[]

</div>
</details>


<details><summary>identifyAtPoint(containerPoint, options)</summary>
<div>
<br/>

Queries data at the given container point on the layer.

```js
layer.identifyAtPoint([400, 300], { tolerance: 2 })
```

Parameters:

* coordinates **Number[]** the coordinate value
* options **Object** options, the possible properties are:

| Property | Type | Description | Default |
|  ------         | :----:  | ----  |   :-----------:  |
| tolerance       | Number  | The pixel tolerance for the query | 3 |

Returns:

* Object[]

</div>
</details>


<details><summary>getDataSchema(zoom)</summary>
<div>
<br/>

Gets the layer definition and property definition at the given zoom level.

Note that the schema of a zoom level can only be fetched after tiles of that level have been loaded; the data schema of a zoom level whose tiles have never been loaded cannot be fetched.

```js
const schema = layer.getDataSchema(8);
```

Parameters:

* zoom **Number** the tile zoom level

Returns:

* Object[]

</div>
</details>
