# owo.js

**DISCLAIMER:** I am not experienced in Node, fullstop. This library was my first attempt ever at writing a library for node and as such will reflect that, heavily. Please bare with and feel free to Git Pull if you find anything wrong with the library. Thanks [Jakeoid](https://github.com/jakeoid).

# Instructions

1. Gain a API key in order to be actually able to use the service.
2. Run the command `npm install owo.py`.
3. Check the usage below to find some basic examples of how to use the script.

# Usage

**Image Uploading**

```js
/** Import OwO.JS for use. **/
var owo = require('owo.js');

/** Upload the file to OwO. **/
owo.setKey("YOUR-KEY-HERE");
owo.uploadFile('file.png')
```

# Todo

- Make URL Shortening happen.
- Add JSON Parsing.
- Take over the world.

# Contribute

1. Fork repo.
2. Edit code.
3. Make a PR.
4. Submit said PR.

# License

A copy of the MIT license can be found in `LICENSE.md`.
