| 配置名               |  类型   |  描述                     | 默认值 |
|  ------             | :----:  | ----                      |   :-----------:  |
|url               | String  | 模型的url，不设置时使用内置模型pyramid                   | 'pyramid' |
|visible           | Boolean | 模型是否可见                 | true |
|translation       | Number[]| 模型在本地坐标系xyz轴上的偏移量        | [0, 0, 0] |
|translationX / Y / Z | Number | 模型在本地坐标系单轴上的偏移量（2026 源码补充） | 0 |
|rotation          | Number[]| 模型在本地坐标系xyz轴上的旋转角度，单位角度 | [0, 0, 0] |
|rotationX / Y / Z | Number  | 模型在本地坐标系单轴上的旋转角度（2026 源码补充） | 0 |
|scale             | Number[]| 模型在本地坐标系xyz轴上的缩放倍数       | [1, 1, 1] |
|scaleX / Y / Z    | Number  | 模型在本地坐标系单轴上的缩放倍数（2026 源码补充） | 1 |
|modelHeight       | Number  | 按模型高度（米）自适应缩放（2026 源码补充） | — |
|markerPixelHeight | Number  | 固定模型的像素高度，设置后不再随地图缩放改变（2026 源码补充） | — |
|animation         | Boolean | 是否开启动画（需模型含动画数据） | false |
|animationName     | String/Number | 动画序列名称  | 0 |
|loop              | Boolean | 是否开启动画循环    | false |
|speed             | Number  | 动画速度倍数    | 1 |
|anchorZ           | String  | 模型在z轴上的锚点或对齐点，可选的值： center， top， bottom  | center |
|shadow            | Boolean | 是否开启阴影  | true |
|bloom             | Boolean | 是否开启泛光  | false |
|doubleSided       | Boolean | 是否双面渲染（2026 源码补充） | false |
|animationNodes    | Number[]| 限定动画作用的节点索引数组（2026 源码补充） | null |
|shader            | String  | 模型绘制的shader，可选值：pbr, pbr-lite, phong, wireframe  | pbr |
|uniforms          | Object  | 选择的shader的材质参数，具体参数说明可以参考这篇文档。  | null |

> 注（2026 源码核对）：`symbol` 在源码中没有默认值对象，`animation`/`loop` 需显式设置才会生效；模型透明度通过 `uniforms.polygonOpacity`（pbr/phong）或 `uniforms.lineOpacity`（wireframe）控制；旧版 `fixSizeOnZoom` 选项已移除，改用 `modelHeight` / `markerPixelHeight`。
