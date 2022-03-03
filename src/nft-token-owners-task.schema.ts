import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//ERC721 and Cryptopunks only have 1 owner
//ERC1155 can have multiple owners
@Schema({ timestamps: true, collection: 'nft-token-owners-tasks' })
export class NFTTokenOwnersTask {
  @Prop({ trim: true, index: true, required: true })
  public contractAddress: string;

  @Prop({ trim: true, index: true, required: true })
  public tokenId: string;

  @Prop({ trim: true, index: true, required: true })
  priority: number;

  @Prop({ trim: true, index: true, required: true })
  isProcessing: boolean;
}

export type NFTTokenOwnersTaskDocument = NFTTokenOwnersTask & Document;

export const NFTTokenOwnersTaskSchema =
  SchemaFactory.createForClass(NFTTokenOwnersTask);

NFTTokenOwnersTaskSchema.index({ contractAddress: 1, tokenId: 1 });