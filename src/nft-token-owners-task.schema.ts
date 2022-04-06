import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SupportedTokenTypes } from './types';

//ERC721 and Cryptopunks only have 1 owner
//ERC1155 can have multiple owners
@Schema({ timestamps: true, collection: 'nft-token-owners-tasks' })
export class NFTTokenOwnersTask {
  @Prop({ trim: true, required: true })
  public contractAddress: string;

  @Prop({ trim: true, required: true })
  public tokenId: string;

  @Prop({ trim: true, required: true })
  public priority: number;

  @Prop({ trim: true, required: true })
  public isProcessing: boolean;

  @Prop({ trim: true, required: true })
  public taskId: string

  @Prop()
  public tokenType: SupportedTokenTypes;
  
  @Prop()
  public sentAt: Date;

  @Prop()
  public errorMessage: string;
}

type NFTTokenOwnersTaskDocument = NFTTokenOwnersTask & Document;

const NFTTokenOwnersTaskSchema =
  SchemaFactory.createForClass(NFTTokenOwnersTask);

// NFTTokenOwnersTaskSchema.index({ contractAddress: 1, tokenId: 1, taskId: 1 });
// NFTTokenOwnersTaskSchema.index({ contractAddress: 1 });
// NFTTokenOwnersTaskSchema.index({ tokenId: 1 });
// NFTTokenOwnersTaskSchema.index({ priority: 1 });
// NFTTokenOwnersTaskSchema.index({ isProcessing: 1 });
// NFTTokenOwnersTaskSchema.index({ taskId: 1 });

export {
  NFTTokenOwnersTaskDocument,
  NFTTokenOwnersTaskSchema,
}
