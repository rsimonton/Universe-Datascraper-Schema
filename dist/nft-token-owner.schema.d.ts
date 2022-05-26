/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare class NFTTokenOwner {
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
declare type NFTTokenOwnerDocument = NFTTokenOwner & Document;
declare const NFTTokenOwnerSchema: import("mongoose").Schema<NFTTokenOwner, import("mongoose").Model<NFTTokenOwner, any, any, any>, {}, {}>;
export { NFTTokenOwnerDocument, NFTTokenOwnerSchema, };
