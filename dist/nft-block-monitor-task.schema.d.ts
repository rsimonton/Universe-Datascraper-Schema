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
export declare class NFTBlockMonitorTask {
    messageId: string;
    blockNum: number;
    status: MessageStatus;
    errorMessage: string;
}
declare type NFTBlockMonitorTaskDocument = NFTBlockMonitorTask & Document;
declare const NFTBlockMonitorTaskSchema: import("mongoose").Schema<NFTBlockMonitorTask, import("mongoose").Model<NFTBlockMonitorTask, any, any, any>, {}, {}>;
export { NFTBlockMonitorTaskDocument, NFTBlockMonitorTaskSchema, };
