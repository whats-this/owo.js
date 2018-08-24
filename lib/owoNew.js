/*
* owo.js
*
* Copyright (c) 2017 by the whats-th.is Development Team. Licensed under MIT
*/
const {sendForm} = require('./Handlers');
const fs = require('fs');
const FormData = require('form-data');
const EndpointError = require('./EndpointError');

class OwOClient {
    /**
     * Constructs a new Client
     * @param {String} key your API key for the owo pomf service.
     */
  constructor (key) {
    this.key = key;

    if (typeof key !== 'string') {
      return new Error('key is not a string');
    }
  }

    /**
     *
     * Uploads to the OwO Cloud Service.
     * @param {String} path the target file's path.
     * @returns {Promise} the URL of the file the resulting query.
     */
  uploadFile (path) {
    return new Promise((resolve, reject) => {
      if (!fs.existsSync(path)) reject(new Error('path does not exist.'));
      // create a new Array from path
      let files = (path instanceof Array) ? path : new Array(path);
      let form = new FormData();

      // push whatever was in path paramter to index
      for (const index in files) files[index] = fs.createReadStream(files[index]);

      form.append('files[]', files);

      sendForm(form).then(data => resolve(data)).catch(err => new EndpointError(err.message, err.response.req, err.response));
    });
  }
}

module.exports = OwOClient;
