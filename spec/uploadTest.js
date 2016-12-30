//  *  Jasmine Test File - Upload
//  *
//  *  Tests upload capability of library
//  *

global.__baseDir = __dirname;

const owo = new (require(`${__baseDir}/src/OwO.js`))("YOUR-KEY-HERE");
const Promise = require('bluebird');

describe('upload_test', () => {
    it('upload', () => {

        return new Promise((resolve,reject) => {
            owo.upload(`${posixdir}/examples/icon.png`, (err,res) => {
                if(err){
                    return false;
                } else if (res === 300) {
                    return true;
                }
            }).then(()=> resolve()).catch(err => ([err]));
            //conditionals
            expect(true).toBe('pass');
            expect(false).toBe('fail');
            //I need to explicitly add this lol
            expect(err).toBe('fail');
        });
    });
});
