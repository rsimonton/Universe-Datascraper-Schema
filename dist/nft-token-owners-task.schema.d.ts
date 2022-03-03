import { Document } from 'mongoose';
export declare class NFTTokenOwnerTask {
    contractAddress: string;
    tokenId: string;
    priority: number;
    isProcessing: boolean;
}
export declare type NFTTokenOwnerTaskDocument = NFTTokenOwnerTask & Document;
export declare const NFTTokenOwnerTaskSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
