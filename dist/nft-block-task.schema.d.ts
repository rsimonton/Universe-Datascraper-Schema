import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MessageStatus } from './types';
export declare class NFTBlockTask {
    messageId: string;
    blockNum: number;
    status: MessageStatus;
}
export declare type NFTBlockTaskDocument = NFTBlockTask & Document;
export declare const NFTBlockTaskSchema: SchemaFactory;
