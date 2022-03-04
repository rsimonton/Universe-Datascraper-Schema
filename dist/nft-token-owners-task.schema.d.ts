import { Document } from 'mongoose';
export declare class NFTTokenOwnersTask {
    contractAddress: string;
    tokenId: string;
    priority: number;
    isProcessing: boolean;
    errorMessage: string;
}
export declare type NFTTokenOwnersTaskDocument = NFTTokenOwnersTask & Document;
export declare const NFTTokenOwnersTaskSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
