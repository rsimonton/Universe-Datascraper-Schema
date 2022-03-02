import { Document } from 'mongoose';
export declare class NFTTokenOwners {
    contractAddress: string;
    tokenId: string;
    address: string;
    transactionHash: string;
    value: number;
}
export declare type NFTTokensDocument = NFTTokenOwners & Document;
export declare const NFTTokenOwnersSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
