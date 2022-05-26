/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
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
declare type NFTCollectionTaskDocument = NFTCollectionTask & Document;
declare const NFTCollectionTaskSchema: import("mongoose").Schema<NFTCollectionTask, import("mongoose").Model<NFTCollectionTask, any, any, any>, {}, {}>;
export { NFTCollectionTaskDocument, NFTCollectionTaskSchema, };
