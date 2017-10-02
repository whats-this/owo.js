// * Typings for owo.js
// *
// * Contributed by Capuccino & noud02

export module "owo.js" {
    export class Client {
        public constructor (key: string);
        public upload (path: string): Promise<any>;
        public shorten (url: string): Promise<any>;
    }
}
