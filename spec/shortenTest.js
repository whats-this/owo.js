// * Shorten URL tester
// * 
// * tests the URL Shorten function.

const owo = new (require(require('path').resolve('../owo.js/src/owo.js')))('FAKE-TOKEN');
const Promise = require('bluebird');

describe('shorten_test', () => {
    it('shorten', () => {
        //let's try to shorten osu.ppy.sh using this
        owo.shorten('https://osu.ppy.sh')
            .then(data => {
                console.log(data)
                expect(data).toBe('string');
            })
            .catch(err => {
                ([err])
                expect(err).toBe(undefined);
            });
    })
})