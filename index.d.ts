// * Typings for owo.js
// *
// * Contributed by Capuccino & noud02

export module "owo.js" {
    export interface IUploadResponseFile {
        hash: string;
        name: string;
        url: string;
        size: number;
    }

    export class Client {
        public constructor (key: string);
        public upload (path: string): Promise<{
            files: IUploadResponseFile[];
            success: boolean;
        }>;
        public shorten (url: string): Promise<string>;
    }
}
