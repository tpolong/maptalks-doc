<details><summary>jsonp(url, callback)</summary>
<div>
<br/>

以 jsonp 方式请求 JSON，动态插入 script 并回收

参数：

* url `string` resource url
* callback `Callback` callback function when completed

</div>
</details>

<details><summary>get(url, options?, cb?)</summary>
<div>
<br/>

以 HTTP GET 请求远程资源，回调返回响应文本或错误

参数：

* url `string` resource url
* options（可选） `any` =null] - request options
* cb（可选） `any` callback function when completed

返回：

* `Ajax` Ajax

</div>
</details>

<details><summary>post(url, options?, cb?)</summary>
<div>
<br/>

以 HTTP POST 提交数据，postData 非字符串时序列化为 JSON

参数：

* url `string` resource url
* options（可选） `any` request options
* cb（可选） `Callback` callback function when completed

返回：

* `Ajax` Ajax

</div>
</details>

<details><summary>getArrayBuffer(url, options?, cb)</summary>
<div>
<br/>

以 arraybuffer 形式请求二进制资源

参数：

* url `string` url
* options（可选） `any` =null] - options, same as Ajax.get
* cb `Callback` callback function when completed.

</div>
</details>

<details><summary>getImage(img, url, options)</summary>
<div>
<br/>

拉取图片二进制并转成 blob URL 赋给图像对象

参数：

* img `any`
* url `string`
* options `any`

</div>
</details>

<details><summary>getJSON(url, options?, cb?)</summary>
<div>
<br/>

请求并解析 JSON，传 jsonp 选项时改用 jsonp 方式

参数：

* url `string`
* options（可选） `any`
* cb（可选） `Callback`

返回：

* `any =>`

</div>
</details>

<details><summary>getArrayBuffer(url, cb)</summary>
<div>
<br/>

以 arraybuffer 形式请求二进制资源

参数：

* url `Any`
* cb `Any`

</div>
</details>

<details><summary>get(url, options, cb)</summary>
<div>
<br/>

以 HTTP GET 请求远程资源，回调返回响应文本或错误

参数：

* url `Any`
* options `Any`
* cb `Any`

</div>
</details>

<details><summary>get(url, options = {}, urlModifier)</summary>
<div>
<br/>

以 HTTP GET 请求远程资源，回调返回响应文本或错误

参数：

* url `String` resource url
* options = {} `Any`
* urlModifier `Any`

返回：

* `Ajax` Ajax

</div>
</details>

<details><summary>getArrayBuffer(url, options = {}?, urlModifier)</summary>
<div>
<br/>

以 arraybuffer 形式请求二进制资源

参数：

* url `String` url
* options = {}（可选） `Object` =null] - options, same as Ajax.get
* urlModifier `Function` callback function when completed.

</div>
</details>

<details><summary>jsonp(url, callback)</summary>
<div>
<br/>

以 jsonp 方式请求 JSON，动态插入 script 并回收

参数：

* url `String` resource url
* callback `Function` callback function when completed

</div>
</details>

<details><summary>get(url, options?, cb)</summary>
<div>
<br/>

以 HTTP GET 请求远程资源，回调返回响应文本或错误

参数：

* url `String` resource url
* options（可选） `Object` =null] - request options
* cb `Function` callback function when completed

返回：

* `Ajax` Ajax

</div>
</details>

<details><summary>getArrayBuffer(url, options?, cb)</summary>
<div>
<br/>

以 arraybuffer 形式请求二进制资源

参数：

* url `String` url
* options（可选） `Object` =null] - options, same as Ajax.get
* cb `Function` callback function when completed.

</div>
</details>
