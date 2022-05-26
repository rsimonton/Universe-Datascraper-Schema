/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare class NFTErc1155TokenOwner {
    contractAddress: string;
    tokenId: string;
    address: string;
    blockNum: number;
    logIndex: number;
    transactionHash: string;
    value: string;
    tokenType: string;
    tokenName: string;
}
declare type NFTErc1155TokenOwnerDocument = NFTErc1155TokenOwner & Document;
declare const NFTErc1155TokenOwnerSchema: import("mongoose").Schema<NFTErc1155TokenOwner, import("mongoose").Model<NFTErc1155TokenOwner, any, any, any>, {}, {}>;
export { NFTErc1155TokenOwnerDocument, NFTErc1155TokenOwnerSchema, };
