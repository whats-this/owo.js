/* 
* owo.js  
* 
* Copyright (c) 2017 by the whats-th.is Development Team. Licensed under MIT
*/

const HOST = exports.HOST = 'https://api.awau.moe';

module.exports = {
  shorten: (key, url) => `${HOST}/shorten/polr?action=shorten&url=${url}&key=${key}`,
  upload: key => `${HOST}/upload/pomf?key=${key}`
};
