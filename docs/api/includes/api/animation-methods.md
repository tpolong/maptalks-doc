<details><summary>speed()</summary>
<div>
<br/>

预定义的动画速度档位 slow normal fast，单位为毫秒

</div>
</details>

<details><summary>framing(styles, options?)</summary>
<div>
<br/>

生成 framing 函数，按 styles 与 easing 计算每一动画帧

参数：

* styles `any[]` animation style group
* options（可选） `Object` =null]  - options

返回：

* `Function` framing function helps to generate animation frames.

</div>
</details>

<details><summary>animate(styles, options, step, target?)</summary>
<div>
<br/>

创建动画 player，按 styles 与 options 逐帧回调 step

参数：

* styles `Object` styles to animate
* options `AnimationOptionsType` animation options
* step `AnimationCallback` callback function for animation steps
* target（可选） `any`

返回：

* `Player` player

</div>
</details>
