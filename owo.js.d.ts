// * Typings for owo.js
// *
// * Contributed by Capuccino

import 'bluebird' as 'Promise' from 'bluebird';

declare module owo.js {
    export interface Client {
        key : key
    };
    
    export function upload (file) {
        file : ['Buffer']
   };
   export function shorten (url) {
       url : 'string'
   }
    