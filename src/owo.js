/* 
* owo.js  
* 
* Copyright (c) 2017 by the whats-th.is Development Team. Licensed under MIT
*/

const { createReadStream } = require('fs');
const Endpoints = require('./Endpoints');
const request = require('superagent');
const OwOError = require('./owoError');

/**
  * OwO Client
  * @prop {String} key your whats-th.is API Key.
  */
class OwOClient {
  /**
    * Construct a new Client
    * @param {String} key OwO key
    */
  constructor (key) {
    this.key = key;
  }
  /**
    * Uploads to OWO
    * @param {String} path the file directory name.
    */
  upload (path) {
    let files = (path instanceof Array) ? path : new Array(path);
    for (const index in files) files[index] = createReadStream(files[index]);
    return request.post(Endpoints.upload(this.key))
      .field('files[]', files)
      .then(res => res.body)
      .catch(err => new OwOError(err.message, err.response.req, err.response));
  }
  /**
    * shortens your desired URL.
    * @param {String} url your URL you desire to shorten.
    */
  shorten (url) {
    return request.get(Endpoints.shorten(this.key, url))
      .then((res) => res.text)
      .catch((err) => new OwOError(err.message, err.response.req, err.response));
  }
}

module.exports = OwOClient;
