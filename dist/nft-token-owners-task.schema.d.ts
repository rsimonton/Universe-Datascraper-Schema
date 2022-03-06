import { Document } from 'mongoose';
import { SupportedTokenTypes } from './types';
export declare class NFTTokenOwnersTask {
    contractAddress: string;
    tokenId: string;
    priority: number;
    isProcessing: boolean;
    tokenType: SupportedTokenTypes;
    sentAt: Date;
    errorMessage: string;
}
export declare type NFTTokenOwnersTaskDocument = NFTTokenOwnersTask & Document;
export declare const NFTTokenOwnersTaskSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
