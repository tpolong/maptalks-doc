|fetchOptions     | Object          | [fetch options](https://developer.mozilla.org/zh-CN/docs/Web/API/fetch) | null |
|style            | Object          | The style object of the layer |  null  |
|subdomains       | String[]        | subdomains, used to replace {s} in the URL template | null |
|tileSize         | Number[]        | The tile width and height, in pixels | [512, 512] |
|offset           | Number[]/Function | The tile offset in pixels. A two-element array or a function; the function takes zoom (the tile zoom level) as its argument, offset(zoom) {} | [0, 0] |
|features         | Boolean         | Whether tiles return feature data | true |
|schema           | Boolean         | Whether tiles return the attribute schema of the data | false |
|collision        | Boolean         | Whether to enable collision detection for points and text | true |
|picking          | Boolean         | Whether the layer is allowed to query data with the identify or identifyAtPoint methods | true |
|pickingPoint     | Boolean         | Whether the query results of identify or identifyAtPoint include the 3D spatial coordinates of the query point | true |
|pickingGeometry  | Boolean         | Whether the query results of identify or identifyAtPoint include Geometry | false |
|iconErrorUrl     | String          | The fallback image URL for failed icon requests | null |
|collisionFrameLimit | Number       | The time limit for collision computation per frame, in ms | 1.5  |
|defaultRendering | Boolean         | Whether to enable default style rendering when there is no style | true |
|textGamma        | Number          | The gamma value of text, which can be used to adjust text sharpness | 1   |
|maxIconSize      | Number          | The maximum icon size limit | 254  |
|styleScale       | Number          | The overall scale factor of the layer's icons and text | 1    |
|spatialReference | String / Object | The spatial reference of the layer | "preset-vt-3857" |
|tileSystem       | Number[]        | A four-element array describing the TileSystem. The TileSystem defines the origin coordinate of tiles and the numbering rule on the X/Y axes. See this [link](https://github.com/maptalks/maptalks.js/wiki/Tile-System) for details | null |
|maxAvailableZoom | Number          | The maximum available zoom level. When the map zoom level exceeds maxAvailableZoom, tiles of the maxAvailableZoom level are displayed. | null |
|repeatWorld      | Boolean         | Whether to repeat the world when the whole world does not fill the screen at low zoom levels | true |
|crossOrigin      | String          | The [cross origin](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS) setting of the tile data | null |
|debug            | Boolean         | Whether to enable debug info; when enabled, tile indices and extents are drawn on the map | false |
|maxCacheSize     | Number          | The maximum number of cached tiles | 256 |
|zoomOffset       | Number          | The offset between the tile zoom level and the map zoom level | 0 |
|errorUrl         | String          | The fallback URL for failed tile requests | null |
|token            | String          | Used to replace {token} in the URL template, e.g. http://foo/bar/{z}/{x}/{y}?token={token} | null |
