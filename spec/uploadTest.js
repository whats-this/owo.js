//  *  Jasmine Test File - Upload
//  *
//  *  Tests upload capability of library
//  *
//  *
//  * This cannot be run inside a Node Session, use Jasmine for this tests. 

const owo = new(require(require('path').resolve('../owo.js/src/owo.js')))('FAKE-TOKEN');
const Promise = require('bluebird');

describe('upload_test', () => {
    it('upload', () => {

        // Upload the file to OwO.
        owo.upload(require('path').resolve('../owo.js/examples/file.png'))
            .then(data => console.log(data))
            .catch(err => {
                ([err])
                expect(err).toBe(undefined);
            });
    });
});
