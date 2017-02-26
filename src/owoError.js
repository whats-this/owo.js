class OwOError extends Error {
  constructor (message, request, response) {
    super(message);

    this.request = this.req = request;
    this.response = this.res = response;
  }
}

module.exports = OwOError;
