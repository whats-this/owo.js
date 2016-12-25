//                    _     
//  ___ _ _ _ ___    |_|___ 
// | . | | | | . |_  | |_ -|
// |___|_____|___|_|_| |___|
//                 |___|    
// 

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

		const fs = require("fs");
		const request = require("request");

		var options = { method: 'POST',
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