| Property            |   Type   |  Description                     | Default |
|  ------             | :----:  | ----                      |   :-----------:  |
| coordinates*        | Number[] | The longitude and latitude            | null |
| translation         | Number[] | The translation in the model's local coordinate system, a three-element array               | [0, 0, 0] |
| rotation            | Number[] | The rotation angles in the model's local coordinate system, in degrees, a three-element array      | [0, 0, 0] |
| scale               | Number[] | The scale factors in the model's local coordinate system, a three-element array             | [1, 1, 1] |
| color               | Number[] | The base color of the model, a four-element normalized array; the color is multiplied with the model's own color when drawn    | [1, 1, 1, 1] |
| visible             | Boolean  | Whether this instance is visible (supplemented from 2026 source code) | true |
| outline             | Boolean  | Whether this instance is outlined (supplemented from 2026 source code) | false |
| bloom               | Boolean  | Whether bloom is enabled for this instance (supplemented from 2026 source code) | false |
| highlightColor      | Number[] | The highlight color of this instance, a four-element normalized array (supplemented from 2026 source code) | [1, 1, 1, 1] |
| modelHeight         | Number   | Adaptive scaling of this instance by model height (meters) (supplemented from 2026 source code) | — |
| markerPixelHeight   | Number   | A fixed pixel height for this instance (supplemented from 2026 source code) | — |
