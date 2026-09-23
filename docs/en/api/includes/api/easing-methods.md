<details><summary>outExpo(x)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* x `number`

</div>
</details>

<details><summary>outQuint(x)</summary>
<div>
<br/>

No prose description in source; parameters and return type come from the type signature.

Parameters:

* x `number`

</div>
</details>

<details><summary>in(t)</summary>
<div>
<br/>

Start slow and speed up.

Parameters:

* t `number`

Returns:

* `number` Output between 0 and 1.

</div>
</details>

<details><summary>out(t)</summary>
<div>
<br/>

Start fast and slow down.

Parameters:

* t `number`

Returns:

* `number` Output between 0 and 1.

</div>
</details>

<details><summary>inAndOut(t)</summary>
<div>
<br/>

Start slow, speed up, and then slow down again.

Parameters:

* t `number`

Returns:

* `number` Output between 0 and 1.

</div>
</details>

<details><summary>linear(t)</summary>
<div>
<br/>

Maintain a constant speed over time.

Parameters:

* t `number`

Returns:

* `number` Output between 0 and 1.

</div>
</details>

<details><summary>upAndDown(t)</summary>
<div>
<br/>

Start slow, speed up, and at the very end slow down again.  This has the
same general behavior as inAndOut, but the final slowdown
is delayed.

Parameters:

* t `number`

Returns:

* `number` Output between 0 and 1.

</div>
</details>
