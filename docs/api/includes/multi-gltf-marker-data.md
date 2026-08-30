| 属性名               |  类型   |  描述                     | 默认值 |
|  ------             | :----:  | ----                      |   :-----------:  |
| coordinates*        | Number[] | 经纬度            | null |
| translation         | Number[] | 模型本地坐标系的偏移量，三位数组               | [0, 0, 0] |
| rotation            | Number[] | 模型本地坐标系的旋转角度，单位度，三位数组      | [0, 0, 0] |
| scale               | Number[] | 模型本地坐标系的缩放系数，三位数组             | [1, 1, 1] |
| color               | Number[] | 模型的基础色，四位归一化数组，颜色会与模型本身颜色相乘后绘制    | [1, 1, 1, 1] |
| visible             | Boolean  | 该实例是否可见（2026 源码补充） | true |
| outline             | Boolean  | 该实例是否描边（2026 源码补充） | false |
| bloom               | Boolean  | 该实例是否开启泛光（2026 源码补充） | false |
| highlightColor      | Number[] | 该实例的高亮颜色，四位归一化数组（2026 源码补充） | [1, 1, 1, 1] |
| modelHeight         | Number   | 该实例按模型高度（米）自适应缩放（2026 源码补充） | — |
| markerPixelHeight   | Number   | 该实例固定像素高度（2026 源码补充） | — |
