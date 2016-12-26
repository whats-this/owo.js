//                    _
//  ___ _ _ _ ___    |_|___
// | . | | | | . |_  | |_ -|
// |___|_____|___|_|_| |___|
//                 |___|
//

// Import OwO.JS for use.
const owo = new (require("owo.js"))("YOUR-KEY-HERE");

// Upload the file to OwO.
owo.upload('icon.png')
    .then(data => console.log(data))
    .catch(err => console.log(err));
