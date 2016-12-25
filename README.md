# owo.js

A wrapper that was written inside of Javascript that allows for you to upload images to the owo.whats-th.is and shorten URLs through uwu.whats-th.is. Allows for both methods through Async and Non-Async. Currently only supported inside of Python 3 (3.5+ recommended).

# Instructions

1. Gain a API key in order to be actually able to use the service.
2. Run the command `npm install owo.py`.
3. Check the usage below to find some basic examples of how to use the script.

# Usage

**Image Uploading**
```js
// Import OwO.JS for use.
var owo = require('owo.js');

// Upload the file to OwO.
owo.setKey("YOUR-KEY-HERE");
owo.uploadFile('file.png')
	.then(data => console.log(data))
    .catch(err => console.log(err));
```

**URL Shortening**
```js
// Import OwO.JS for use.
var owo = require('owo.js');

// Shorten the url to OwO.
owo.setKey("YOUR-KEY-HERE");
owo.shortenURL("http://whats-th.is/")
	.then(data => console.log(data))
    .catch(err => console.log(err));
```

# Todo

- Add JSON Parsing.
- Take over the world.

# Contribute

1. Fork repo.
2. Edit code.
3. Make a PR.
4. Submit said PR.

# License

A copy of the MIT license can be found in `LICENSE.md`.