//  *  Jasmine Test File - Upload
//  *
//  *  Tests upload capability of library
//  *

const owo = new (require(require('path').resolve('../owo.js/src/owo.js')))('YOUR-KEY-HERE');
const Promise = require('bluebird');

describe('upload_test', () => {
    it('upload', () => {

        return new Promise((resolve, reject) => {
            //find the File
            owo.upload(require('path').resolve("../owo.js/examples/icon.png"), (err, res) => {
                if (err) {
                    return console.log(err);
                } else if (res === 300) {
                    return console.log(res);
                }
            }).then(() => resolve()).catch(err => ([err]));
            //conditionals
            expect(res).toBe(300);
            expect(err).toBe(false);
        });
    });
});
