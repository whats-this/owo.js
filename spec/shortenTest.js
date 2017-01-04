// * Shorten URL tester
// * 
// * tests the URL Shorten function.

const owo = new (require(require('path').resolve('../src/owo.js')));

describe('shorten_test', () => {
    it('upload', () => {
        //I hadn't came up with a link to shorten but soon
        owo.shorten('', (err, res) => {
            if (err) {
                return false;
            } if (res) {
                return res;
                return true;
            }
        });
        expect(true).toBe('pass');
        expect(false).toBe('fail');
    })
});