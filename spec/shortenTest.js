// * Shorten URL tester
// * 
// * tests the URL Shorten function.

const owo = new (require(require('path').resolve('../owo.js/src/owo.js')))('FAKE-TOKEN');
const Promise = require('bluebird');

describe('shorten_test', () => {
    it('shorten', () => {
        return new Promise((resolve, reject) => {
            //shorten linku owo
            owo.shorten('https://osu.ppy.sh'), (err, data) => {
                if (err) {
                    return console.log(err);
                } else if (data) {
                    return console.log(data);
                }
            }
            expect(data).toBe('string');
            expect(err).toBe(null);
        }).then(() => resolve()).catch(err => ([err]));
    })
})