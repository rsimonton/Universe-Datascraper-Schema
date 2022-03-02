import { Document } from 'mongoose';
export declare class NFTCollection {
    contractAddress: string;
    tokenType: string;
    createdAtBlock: number;
    firstProcessedBlock: number;
    lastProcessedBlock: number;
    sentAt: Date;
    isProcessing: boolean;
    name: string;
    symbol: string;
    totalSupply: number;
}
export declare type NFTCollectionDocument = NFTCollection & Document;
export declare const NFTCollectionSchema: import("mongoose").Schema<Document<NFTCollection, any, any>, import("mongoose").Model<Document<NFTCollection, any, any>, any, any, any>, any, any>;
