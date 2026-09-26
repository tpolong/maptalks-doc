<details><summary>jsonp(url, callback)</summary>
<div>
<br/>

Get JSON data by jsonp
from https://gist.github.com/gf3/132080/110d1b68d7328d7bfe7e36617f7df85679a08968

Parameters:

* url `string` resource url
* callback `Callback` callback function when completed

</div>
</details>

<details><summary>get(url, options?, cb?)</summary>
<div>
<br/>

Performs an HTTP GET request and returns the response text or an error through the callback.

Parameters:

* url `string` resource url
* options (optional) `any` =null] - request options
* cb (optional) `any` callback function when completed

Returns:

* `Ajax` Ajax

</div>
</details>

<details><summary>post(url, options?, cb?)</summary>
<div>
<br/>

Fetch remote resource by HTTP "POST" method

Parameters:

* url `string` resource url
* options (optional) `any` request options
* cb (optional) `Callback` callback function when completed

Returns:

* `Ajax` Ajax

</div>
</details>

<details><summary>getArrayBuffer(url, options?, cb)</summary>
<div>
<br/>

Requests a binary resource as an array buffer.

Parameters:

* url `string` url
* options (optional) `any` =null] - options, same as Ajax.get
* cb `Callback` callback function when completed.

</div>
</details>

<details><summary>getImage(img, url, options)</summary>
<div>
<br/>

Fetches the image as a blob and assigns its object URL to img.src, calling img.onerror on failure.

Parameters:

* img `any`
* url `string`
* options `any`

</div>
</details>

<details><summary>getJSON(url, options?, cb?)</summary>
<div>
<br/>

Fetches and parses a JSON resource, using jsonp when the jsonp option is true.

Parameters:

* url `string`
* options (optional) `any`
* cb (optional) `Callback`

Returns:

* `any =>`

</div>
</details>

<details><summary>getArrayBuffer(url, cb)</summary>
<div>
<br/>

Requests a binary resource as an array buffer.

Parameters:

* url `Any`
* cb `Any`

</div>
</details>

<details><summary>get(url, options, cb)</summary>
<div>
<br/>

Performs an HTTP GET request and returns the response text or an error through the callback.

Parameters:

* url `Any`
* options `Any`
* cb `Any`

</div>
</details>

<details><summary>get(url, options = {}, urlModifier)</summary>
<div>
<br/>

Performs an HTTP GET request and returns the response text or an error through the callback.

Parameters:

* url `String` resource url
* options = {} `Any`
* urlModifier `Any`

Returns:

* `Ajax` Ajax

</div>
</details>

<details><summary>getArrayBuffer(url, options = {}?, urlModifier)</summary>
<div>
<br/>

Requests a binary resource as an array buffer.

Parameters:

* url `String` url
* options = {} (optional) `Object` =null] - options, same as Ajax.get
* urlModifier `Function` callback function when completed.

</div>
</details>

<details><summary>jsonp(url, callback)</summary>
<div>
<br/>

Get JSON data by jsonp
from https://gist.github.com/gf3/132080/110d1b68d7328d7bfe7e36617f7df85679a08968

Parameters:

* url `String` resource url
* callback `Function` callback function when completed

</div>
</details>

<details><summary>get(url, options?, cb)</summary>
<div>
<br/>

Performs an HTTP GET request and returns the response text or an error through the callback.

Parameters:

* url `String` resource url
* options (optional) `Object` =null] - request options
* cb `Function` callback function when completed

Returns:

* `Ajax` Ajax

</div>
</details>

<details><summary>getArrayBuffer(url, options?, cb)</summary>
<div>
<br/>

Requests a binary resource as an array buffer.

Parameters:

* url `String` url
* options (optional) `Object` =null] - options, same as Ajax.get
* cb `Function` callback function when completed.

</div>
</details>
