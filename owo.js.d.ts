// * Typings for owo.js
// *
// * Contributed by Capuccino


declare module owo.js {
    
    export class Client (){
        constructor (key) {
            this.key = key
        }
    };
    
    export function upload (file) {
        file : ['Buffer']
   };
   export function shorten (url) {
       url : 'string'
   };
    