// * Shorten URL tester
// *
// * tests the URL Shorten function.
// *
// * This cannot be run inside a Node Session, use Jasmine for this tests.

const config = require('./config');
const owo = new (require(require('path').resolve('../owo.js/index.js')))(config.token);

describe('shorten_test', () => {
  it('shorten', () => {
        // shorten owo's homepage as a test
    owo.shorten('https://owo.whats-th.is')
            .then(data => {
              console.log(data);
              expect(data).toBe('string');
            })
            .catch(err => {
                // should expect error to be not there.
              reject(err);
              expect(err).toBe(undefined);
            });
  });
});
