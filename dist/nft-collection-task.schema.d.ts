import { Document } from 'mongoose';
import { MessageStatus } from './types';
export declare class NFTCollectionTask {
    messageId: string;
    contractAddress: string;
    startBlock: number;
    endBlock: number;
    tokenType: string;
    status: MessageStatus;
    errorMessage: string;
}
export declare type NFTCollectionTaskDocument = NFTCollectionTask & Document;
export declare const NFTCollectionTaskSchema: import("mongoose").Schema<Document<NFTCollectionTask, any, any>, import("mongoose").Model<Document<NFTCollectionTask, any, any>, any, any, any>, any, any>;
