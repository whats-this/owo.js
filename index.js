//                    _     
//  ___ _ _ _ ___    |_|___ 
// | . | | | | . |_  | |_ -|
// |___|_____|___|_|_| |___|
//                 |___|    
// 

key = '';


const fs = require('fs');
const request = require('request');

//this is the option immutable
let options = { method: 'POST',
    url: 'https://api.awau.moe/upload/pomf',
    headers:
        { authorization: userKey },
    formData:
        { 'files[]':
            { value: 'fs.createReadStream("' + file + '")',
                options: { filename: file, contentType: null } } } };

function setKey(userKey) {
    key = userKey
} else {
    if (userkey === undefined){
        console.log('ERROR: no key defined');
        return;
    }
}

function uploadFile(file,userKey){
    if(key != '') {
        userkey = key
    } else {
        if(userkey == undefined){
            console.log('ERROR : Userkey undefined.');
            return;
        }
    }
}


    /** BEGIN REQUEST**/
    request(options, function (error, response, body) {
        response.on('data', function (chunk) {
            body += chunk;
        });
        res.on('end', function () {
            console.log(body)
        });


//export functions
exports.uploadFile();
exports.setKey();
