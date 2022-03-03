import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//ERC721 and Cryptopunks only have 1 owner
//ERC1155 can have multiple owners
@Schema({ timestamps: true, collection: 'nft-token-owners-tasks' })
export class NFTTokenOwnerTask {
  @Prop({ trim: true, index: true, required: true })
  public contractAddress: string;

  @Prop({ trim: true, index: true, required: true })
  public tokenId: string;

  @Prop({ trim: true, index: true, required: true })
  priority: number;

  @Prop({ trim: true, index: true, required: true })
  isProcessing: boolean;
}

export type NFTTokenOwnerTaskDocument = NFTTokenOwnerTask & Document;

export const NFTTokenOwnerTaskSchema =
  SchemaFactory.createForClass(NFTTokenOwnerTask);

NFTTokenOwnerTaskSchema.index({ contractAddress: 1, tokenId: 1 });