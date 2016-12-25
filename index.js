//                    _
//  ___ _ _ _ ___    |_|___
// | . | | | | . |_  | |_ -|
// |___|_____|___|_|_| |___|
//                 |___|
//
const fs = require("fs");
const request = require("request");

class owo {
  constructor(key) {
    this.key = key;
  }

  shortenURL(url) {
    return new Promise((resolve, reject) => {
      if(this.key == undefined || this.key == "") {
        reject('OwO : ERROR : Userkey undefined.');
        return;
      }

      if(url == undefined || url == "") {
        reject('OwO : ERROR : URL is not specified.');
        return;
      }

      let options = {
        url: "https://api.awau.moe/shorten/polr",
        headers: {
          authorization: this.key
        },
        qs: {
          action: "shorten",
          url: url
        }
      }

      request(options, (error, response, body) => {
        if(error) reject(error);
        resolve(body);
      });
    });
  }

  uploadFile(file) {
    return new Promise((resolve, reject) => {
      if(this.key == undefined || this.key == "") {
        reject('OwO : ERROR : Userkey undefined.');
        return;
      }

      if(file == undefined || file == "") {
        reject('OwO : ERROR : File undefined.');
        return;
      }

      let options = {
        method: 'POST',
        url: 'https://api.awau.moe/upload/pomf',
        headers: {
          authorization: this.key
        },
        formData: {
          'files[]': {
            value: fs.createReadStream(file),
            options: {
              filename: file,
              contentType: null
            }
          }
        }
      };

      /** BEGIN REQUEST**/
      request(options, function(error, response, body) {
        if(error) reject(error)
        resolve(body);
      });
    });
  };
}

module.exports = owo;
