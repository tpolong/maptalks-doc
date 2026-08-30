## Style

Vector tiles support styles for vector features (points, lines and polygons), and also have the ability to build lines and polygons into 3D lines and 3D faces and render them with 3D PBR materials.

Vector tiles integrate feature-filter and function-type to support data filtering and dynamic styling, making it easy to categorize the data in vector tiles and render them with different styles, levels and material magic for stunning effects.

Vector tiles are therefore well suited to categorized data rendering in large scenes, such as city building clusters. Compared with static data like 3dtiles, vector tiles benefit from a better ecosystem and the separation of style and data, which eliminates data update costs while providing styling capabilities that are hard to achieve with 3dtiles.

The vector tile style adopts a plugin-based design: styles are defined by render plugins. For the details of the render plugins, refer to the style manual. Here is a simple style example:

<details><summary>Style Example</summary>
<div>

```json
{
  "style": [
    {
      "renderPlugin": {
        "type": "fill",
        "dataConfig": {
          "type": "fill",
          "only2D": true
        },
        "sceneConfig": {
          "depthFunc": "always",
          "blendSrc": "one"
        }
      },
      "symbol": {
        "visible": true,
        "polygonFill": "rgba(0,0,0,1)",
        "polygonOpacity": 1
      },
      "filter": {
        "title": "desert",
        "value": [
          "all",
          [
            "==",
            "$layer",
            "desert"
          ],
          [
            "==",
            "$type",
            "Polygon"
          ]
        ]
      }
    },
    {
      "renderPlugin": {
        "type": "line",
        "dataConfig": {
          "type": "line",
          "only2D": true
        },
        "sceneConfig": {
          "blendSrc": "one"
        }
      },
      "symbol": {
        "visible": true,
        "lineOpacity": 1,
        "lineWidth": 1,
        "lineColor": "rgba(0,0,0,1)",
        "lineJoin": "miter",
        "lineCap": "butt",
        "lineDx": 0,
        "lineDy": 0,
        "lineDasharray": [
          0,
          0,
          0,
          0
        ],
        "lineDashColor": "rgba(0,0,0,1)",
        "lineStrokeWidth": 0,
        "lineStrokeColor": "rgba(0,0,0,1)"
      },
      "detail": {
        "layer": "desert-outline",
        "enable": {
          "lineWidth": false,
          "lineColor": false,
          "lineStrokeWidth": false,
          "lineStrokeColor": false
        }
      },
      "filter": {
        "title": "desert-outline",
        "value": [
          "all",
          [
            "==",
            "$layer",
            "desert"
          ],
          [
            "==",
            "$type",
            "Polygon"
          ]
        ]
      }
    }
  ]
}
```

</div>
</details>
