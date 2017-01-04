// * Shorten URL tester
// * 
// * tests the URL Shorten function.

const owo = new (require(require('path').resolve('../owo.js/src/owo.js')));

describe('shorten_test', () => {
    it('upload', () => {
        //I hadn't came up with a link to shorten but soon
        owo.shorten('', (err, res) => {
            if (err) {
                return console.log(err);
            } if (res) {
                return console.log(res);
            }
        });
        expect(res).toBe('string');
        expect(err).toBe(0);
    })
});