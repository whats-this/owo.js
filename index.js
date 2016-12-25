//                    _
//  ___ _ _ _ ___    |_|___
// | . | | | | . |_  | |_ -|
// |___|_____|___|_|_| |___|
//                 |___|
//

const fs = require("fs");
const request = require("request");

key = "";

exports.setKey = function(userkey) {
	key = userkey;
}

exports.uploadFile = function(file, userkey) {
	return new Promise((resolve, reject) => {
		if(key != "") {
			userkey = key
		} else {
			if(userkey == undefined){
				reject('OwO : ERROR : Userkey undefined.');
				return;
			}
		}

		let options = { method: 'POST',
			url: 'https://api.awau.moe/upload/pomf',
			headers: {
				authorization: userkey
			},
			formData: { 'files[]':
				{
					value: fs.createReadStream(file),
					options: {
						filename: file, contentType: null
					}
				}
			}
		};

		/** BEGIN REQUEST**/
		request(options, function (error, response, body) {
			if(error) reject(error)
			resolve(body);
			response.on('data', function (chunk) {
				body += chunk;
			});
			response.on('end', function () {
				/*console.log("BODY LATER"+body);*/
			});
		});
	});
};

exports.shortenURL = function(url, userkey){
	return new Promise((resolve, reject) => {
		if(key != "") {
			userkey = key
		} else {
			if(userkey == undefined){
				reject('OwO : ERROR : Userkey undefined.');
				return;
			}
		}

		if(url == undefined || url == ""){
			reject('OwO : ERROR : URL is not specified.');
			return;
		}

		let options = {
			url: "https://api.awau.moe/shorten/polr",
			headers: {
				authorization: userkey
			},
			qs: {
				action: "shorten",
				url: url
			}
		}

		request(options, (error, response, body) => {
			if(error) reject(error);
			resolve(body);
		});
	});
}