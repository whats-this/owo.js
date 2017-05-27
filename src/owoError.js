/* 
* owo.js  
* 
* Copyright (c) 2017 by the whats-th.is Development Team. Licensed under MIT
*/

class OwOError extends Error {
  constructor (message, request, response) {
    super(message);

    this.request = this.req = request;
    this.response = this.res = response;
  }
}

module.exports = OwOError;
