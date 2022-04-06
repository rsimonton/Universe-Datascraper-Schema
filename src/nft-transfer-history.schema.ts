import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SupportedTokenTypes } from './types';

@Schema({ timestamps: true, collection: 'nft-transfer-histories' })
export class NFTTransferHistory {
  @Prop({ trim: true, required: true })
  public contractAddress: string;

  @Prop()
  public blockNum: number;

  @Prop({ required: true })
  public hash: string;

  @Prop()
  public logIndex: number;

  @Prop({ required: true })
  public from: string;

  @Prop({ required: true })
  public to: string;

  @Prop({ required: true })
  public tokenId: string;

  @Prop()
  public value: string;

  //Original data: only for ERC721
  @Prop()
  public erc721TokenId: string;

  //Original data: only for erc1155 { tokenId, value }
  @Prop({ type: 'object' })
  public erc1155Metadata: any;

  //Original data: only for CryptoPunks { punkIndex }
  @Prop({ type: 'object' })
  public cryptopunks: any;

  @Prop({ required: true, enum: SupportedTokenTypes })
  public category: string;

  @Prop()
  public timeLastUpdated: string;
}

type NFTTransferHistoryDocument = NFTTransferHistory & Document;

const NFTTransferHistorySchema =
  SchemaFactory.createForClass(NFTTransferHistory);

NFTTransferHistorySchema.index({ 
  contractAddress: 1, 
  tokenId: 1, 
  hash: 1 
});
NFTTransferHistorySchema.index(
  { 
    contractAddress: 1, 
    tokenId: 1, 
    hash: 1, 
    logIndex: 1 
  }, 
  { 
    unique: true 
  }
);

export {
  NFTTransferHistoryDocument,
  NFTTransferHistorySchema,
}
