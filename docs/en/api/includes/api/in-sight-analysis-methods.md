<details><summary>update(name, value)</summary>
<div>
<br/>

Update an option by name; lines goes to setLines, others are stored as render options

Parameters:

* name `Any`
* value `Any`

</div>
</details>

<details><summary>addLine(inSightLine)</summary>
<div>
<br/>

Adds an inSight line with from and to coordinates and requests a redraw.

Parameters:

* inSightLine `Any`

</div>
</details>

<details><summary>removeLine(inSightLine)</summary>
<div>
<br/>

Removes the given inSight line from the analysis and requests a redraw.

Parameters:

* inSightLine `Any`

</div>
</details>

<details><summary>getLines()</summary>
<div>
<br/>

Gets the array of current inSight lines.

</div>
</details>

<details><summary>setLines(lines)</summary>
<div>
<br/>

Replaces all inSight lines and requests a redraw.

Parameters:

* lines `Any`

</div>
</details>

<details><summary>clearLines()</summary>
<div>
<br/>

Clears all inSight lines and requests a redraw.

</div>
</details>

<details><summary>getIntersetction()</summary>
<div>
<br/>

Get objects intersecting with all inSight lines
The structure of data bellow here:
[&#123;
   intersects: [&#123;
       data: maptalks object, like gltfmarker、polygon...,
       coordinates: [&#123;
           coordinate: maptalks.Coordinate,
           indices: [0, 1, 2]
       &#125;,]
   &#125;],
   inSightLine
&#125;]

Returns:

* `Object`

</div>
</details>

<details><summary>renderAnalysis(meshes)</summary>
<div>
<br/>

Runs the visibility analysis with the meshes and returns shader uniforms

Parameters:

* meshes `Any`

</div>
</details>

<details><summary>getDefines()</summary>
<div>
<br/>

Returns the shader macro defines used by the analysis

</div>
</details>
