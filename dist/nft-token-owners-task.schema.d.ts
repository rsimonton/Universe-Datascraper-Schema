/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
import { SupportedTokenTypes } from './types';
export declare class NFTTokenOwnersTask {
    contractAddress: string;
    tokenId: string;
    priority: number;
    isProcessing: boolean;
    taskId: string;
    tokenType: SupportedTokenTypes;
    sentAt: Date;
    errorMessage: string;
}
declare type NFTTokenOwnersTaskDocument = NFTTokenOwnersTask & Document;
declare const NFTTokenOwnersTaskSchema: import("mongoose").Schema<NFTTokenOwnersTask, import("mongoose").Model<NFTTokenOwnersTask, any, any, any>, {}, {}>;
export { NFTTokenOwnersTaskDocument, NFTTokenOwnersTaskSchema, };
