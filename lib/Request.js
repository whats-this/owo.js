/*
* owo.js
*
* Copyright (c) 2017 by the whats-th.is Development Team. Licensed under MIT
*/
const https = require('https');
const URL = require('url');
// simple request function for creating a Promisified HTTP/S request.
/**
 * Simple Function to handle Promisified HTTP/S requests.
 * @param {String} method the HTTP method to perform to a specified remote service
 * @param {String} url the URL to perform the request
 * @param {Object} options other options to pass to the URL, Authentication and such can be passed here.
 * @param {JSON<Object>} payload the JSON payload to pass to the remote.
 */
function request (method, url, options = {}, payload) {
  return new Promise((resolve, reject) => {
    let req = https.request(Object.assign(URL.parse(url), options, {method}), res => {
      let chunked = '';

      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));

      res.setEncoding('utf8');
      res.on('data', chunk => chunked += chunk);
      res.on('error', reject);
      res.on('end', () => {
        let val;

        try {
          val = JSON.parse(chunked);
        } catch (e) {
          return resolve(chunked);
        }

        if (val.error) return reject(new Error(val.error));
        else return resolve(val);
      });
    });

    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

module.exports = request;
