//                    _     
//  ___ _ _ _ ___    |_|___ 
// | . | | | | . |_  | |_ -|
// |___|_____|___|_|_| |___|
//                 |___|    
// 

// Import OwO.JS for use.
var owo = require('owo.js');

// Tell the url to shorten to OwO.
owo.setKey("YOUR-KEY-HERE");
owo.shortenURL('https://jakeoid.com/').then(data => console.log(data)).catch(err => console.log(err));