/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from "mongoose";
export declare class NFTCollection {
    contractAddress: string;
    tokenType: string;
    createdAtBlock: number;
    ignoreForRetrieveCreatedAtBlock: boolean;
    firstProcessedBlock: number;
    lastProcessedBlock: number;
    targetBlock: number;
    sentAt: Date;
    isProcessing: boolean;
    name: string;
    symbol: string;
    owner: string;
    vip: boolean;
}
declare type NFTCollectionDocument = NFTCollection & Document;
declare const NFTCollectionSchema: import("mongoose").Schema<NFTCollection, import("mongoose").Model<NFTCollection, any, any, any>, {}, {}>;
export { NFTCollectionDocument, NFTCollectionSchema, };
