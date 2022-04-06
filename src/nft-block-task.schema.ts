import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MessageStatus } from './types';

@Schema({ timestamps: true, collection: 'nft-block-tasks' })
export class NFTBlockTask {
  @Prop({ require: true })
  public messageId: string;

  @Prop({ required: true })
  public blockNum: number;

  @Prop({
    required: true,
  })
  public status: MessageStatus;

  @Prop({trim: true})
  public errorMessage: string;
}

type NFTBlockTaskDocument = NFTBlockTask & Document;

const NFTBlockTaskSchema =
  SchemaFactory.createForClass(NFTBlockTask);

// NFTBlockTaskSchema.index({ messageId: 1 });
// NFTBlockTaskSchema.index({ blockNum: 1 });
// NFTBlockTaskSchema.index({ status: 1 });

export {
  NFTBlockTaskDocument,
  NFTBlockTaskSchema,
}