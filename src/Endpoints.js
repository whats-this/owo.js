/*
* owo.js
*
* Copyright (c) 2017 by the whats-th.is Development Team. Licensed under MIT
*/

const DEFAULT_HOST = exports.DEFAULT_HOST = 'https://api.awau.moe';

module.exports = {
  shorten: (key, url) => `${DEFAULT_HOST}/shorten/polr?action=shorten&url=${url}&key=${key}`,
  upload: key => `${DEFAULT_HOST}/upload/pomf?key=${key}`
};
