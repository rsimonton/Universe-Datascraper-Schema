import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MessageStatus } from './types';
export declare class NFTCollectionTask {
    messageId: string;
    contractAddress: string;
    startBlock: number;
    endBlock: number;
    tokenType: string;
    status: MessageStatus;
}
export declare type NFTCollectionTaskDocument = NFTCollectionTask & Document;
export declare const NFTCollectionTaskSchema: SchemaFactory;
