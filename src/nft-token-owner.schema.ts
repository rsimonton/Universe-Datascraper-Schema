import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//ERC721 and Cryptopunks only have 1 owner
//ERC1155 can have multiple owners
@Schema({ timestamps: true, collection: 'nft-token-owners' })
export class NFTTokenOwner {
  @Prop({ trim: true, index: true, required: true })
  public contractAddress: string;

  @Prop({ trim: true, index: true, required: true })
  public tokenId: string;

  @Prop({ trim: true, index: true, required: true })
  address: string;

  @Prop({ trim: true, index: true, required: true })
  transactionHash: string;

  @Prop({ required: true })
  value: number;
}

export type NFTTokenOwnerDocument = NFTTokenOwner & Document;

export const NFTTokenOwnerSchema =
  SchemaFactory.createForClass(NFTTokenOwner);

NFTTokenOwnerSchema.index({ contractAddress: 1, tokenId: 1, address: 1, transactionHash: 1 }, { unique: true });