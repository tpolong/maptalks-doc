| Option               |   Type   |  Description                     | Default |
|  ------             | :----:  | ----                      |   :-----------:  |
|url               | String  | The model url; when unset, the built-in pyramid model is used                   | 'pyramid' |
|visible           | Boolean | Whether the model is visible                 | true |
|translation       | Number[]| The translation of the model along the xyz axes of its local coordinate system        | [0, 0, 0] |
|translationX / Y / Z | Number | The translation of the model along a single axis of its local coordinate system (supplemented from 2026 source code) | 0 |
|rotation          | Number[]| The rotation angles of the model around the xyz axes of its local coordinate system, in degrees | [0, 0, 0] |
|rotationX / Y / Z | Number  | The rotation angle of the model around a single axis of its local coordinate system (supplemented from 2026 source code) | 0 |
|scale             | Number[]| The scale factors of the model along the xyz axes of its local coordinate system       | [1, 1, 1] |
|scaleX / Y / Z    | Number  | The scale factor of the model along a single axis of its local coordinate system (supplemented from 2026 source code) | 1 |
|modelHeight       | Number  | Adaptive scaling by model height (meters) (supplemented from 2026 source code) | — |
|markerPixelHeight | Number  | A fixed pixel height for the model; once set, it no longer changes with map zoom (supplemented from 2026 source code) | — |
|animation         | Boolean | Whether to enable the animation (requires the model to contain animation data) | false |
|animationName     | String/Number | The animation sequence name  | 0 |
|loop              | Boolean | Whether to enable the animation loop    | false |
|speed             | Number  | The animation speed multiplier    | 1 |
|anchorZ           | String  | The anchor or alignment point of the model on the z axis; possible values: center, top, bottom  | center |
|shadow            | Boolean | Whether shadow is enabled  | true |
|bloom             | Boolean | Whether bloom is enabled  | false |
|doubleSided       | Boolean | Whether to render double-sided (supplemented from 2026 source code) | false |
|animationNodes    | Number[]| An array of node indices to which the animation is restricted (supplemented from 2026 source code) | null |
|shader            | String  | The shader used to draw the model; possible values: pbr, pbr-lite, phong, wireframe  | pbr |
|uniforms          | Object  | Material parameters of the selected shader; refer to the documentation for details.  | null |

> Note (verified against 2026 source code): `symbol` has no default value object in the source code; `animation`/`loop` take effect only when explicitly set. Model opacity is controlled via `uniforms.polygonOpacity` (pbr/phong) or `uniforms.lineOpacity` (wireframe). The legacy `fixSizeOnZoom` option has been removed; use `modelHeight` / `markerPixelHeight` instead.
