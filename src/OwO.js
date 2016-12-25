const { resolve } = require("path");
const { createReadStream } = require("fs");
const Endpoints = require("./Endpoints");
const OwOError = require("./OwOError");
const request = require("superagent");
const Promise = require("bluebird");

class OwOClient {
  constructor(key) {
    this.key = key;
  }

  upload(path) {
    return new Promise((resolve, reject) => {
      const req = request.post(Endpoints.upload(this.key))
        .field("files[]", createReadStream(resolve(path)))
        .end((err, res) => {
          if (err) return void reject(new OwOError(err.message, req, res));
          resolve(res.body);
        });
    });
  }

  shorten(url) {
    return new Promise((resolve, reject) => {
      const req = requesr.get(Endpoints.shorten(this.key, url))
        .end((err, res) => {
          if (err) return void reject(new OwOError(err.message, req, res));
          resolve(res.text);
        });
    });
  }
}

module.exports = OwOClient;
