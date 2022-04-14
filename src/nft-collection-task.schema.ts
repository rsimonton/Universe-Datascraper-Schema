import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MessageStatus, SupportedTokenTypes } from './types';


@Schema({ timestamps: true, collection: 'nft-collection-tasks' })
export class NFTCollectionTask {
  @Prop({ require: true })
  public messageId: string;

  @Prop({ trim: true, required: true })
  public contractAddress: string;

  @Prop({ required: true })
  public startBlock: number;

  @Prop({ required: true })
  public endBlock: number;

  @Prop({ trim: true, required: true, enum: SupportedTokenTypes })
  public tokenType: string;

  @Prop({
    required: true,
  })
  public status: MessageStatus;

  @Prop({trim: true})
  public errorMessage: string;
}

type NFTCollectionTaskDocument = NFTCollectionTask & Document;

const NFTCollectionTaskSchema =
  SchemaFactory.createForClass(NFTCollectionTask);

// NFTCollectionTaskSchema.index({ messageId: 1 });
// NFTCollectionTaskSchema.index({ contractAddress: 1 });
// NFTCollectionTaskSchema.index({ startBlock: 1 });
// NFTCollectionTaskSchema.index({ endBlock: 1 });
// NFTCollectionTaskSchema.index({ tokenType: 1 });
// NFTCollectionTaskSchema.index({ status: 1 });

export {
  NFTCollectionTaskDocument,
  NFTCollectionTaskSchema,
}
