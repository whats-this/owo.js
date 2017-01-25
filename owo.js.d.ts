// * Typings for owo.js
// *
// * Contributed by Capuccino

export module owo.js {
     namespace Client {
         export interface Client {
             key : 'string'
         }
        export interface upload {
            files : ['path'],
        }
        export interface shorten {
             url : 'string'
        }
    }
}