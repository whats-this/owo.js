
const { createReadStream } = require('fs');
const Endpoints = require('./Endpoints');
const request = require('superagent');
const OwOError = require('./owoError');

class OwOClient {
  constructor (key) {
    this.key = key;
  }

  upload (path) {
    let files = (path instanceof Array) ? path : new Array(path);
    for (let index in files) files[index] = createReadStream(files[index]);
    return request.post(Endpoints.upload(this.key))
      .field('files[]', files)
      .then((res) => res.body)
      .catch((err) => new OwOError(err.message, err.response.req, err.response));
  }

  shorten (url) {
    return request.get(Endpoints.shorten(this.key, url))
      .then((res) => res.text)
      .catch((err) => new OwOError(err.message, err.response.req, err.response));
  }
}

module.exports = OwOClient;
