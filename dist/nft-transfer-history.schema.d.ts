/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare class NFTTransferHistory {
    contractAddress: string;
    blockNum: number;
    hash: string;
    logIndex: number;
    from: string;
    to: string;
    tokenId: string;
    value: string;
    erc721TokenId: string;
    erc1155Metadata: any;
    cryptopunks: any;
    category: string;
    timeLastUpdated: string;
}
declare type NFTTransferHistoryDocument = NFTTransferHistory & Document;
declare const NFTTransferHistorySchema: import("mongoose").Schema<NFTTransferHistory, import("mongoose").Model<NFTTransferHistory, any, any, any>, {}, {}>;
export { NFTTransferHistoryDocument, NFTTransferHistorySchema, };
