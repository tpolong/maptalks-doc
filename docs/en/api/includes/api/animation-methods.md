<details><summary>speed()</summary>
<div>
<br/>

Predefined animation speeds in milliseconds: slow 2000, normal 1000, fast 500.

</div>
</details>

<details><summary>framing(styles, options?)</summary>
<div>
<br/>

Generate a framing function

Parameters:

* styles `any[]` animation style group
* options (optional) `Object` =null]  - options

Returns:

* `Function` framing function helps to generate animation frames.

</div>
</details>

<details><summary>animate(styles, options, step, target?)</summary>
<div>
<br/>

Create an animation player

Parameters:

* styles `Object` styles to animate
* options `AnimationOptionsType` animation options
* step `AnimationCallback` callback function for animation steps
* target (optional) `any`

Returns:

* `Player` player

</div>
</details>
