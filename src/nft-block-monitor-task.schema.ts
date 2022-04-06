import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MessageStatus } from './types';

@Schema({ timestamps: true, collection: 'nft-block-monitor-tasks' })
export class NFTBlockMonitorTask {
  @Prop({ require: true })
  public messageId: string;

  @Prop({ required: true })
  public blockNum: number;

  @Prop({
    index: true,
    required: true,
  })
  public status: MessageStatus;

  @Prop({trim: true})
  public errorMessage: string;
}

type NFTBlockMonitorTaskDocument = NFTBlockMonitorTask & Document;

const NFTBlockMonitorTaskSchema =
  SchemaFactory.createForClass(NFTBlockMonitorTask);

// NFTBlockMonitorTaskSchema.index({ messageId: 1 });
// NFTBlockMonitorTaskSchema.index({ blockNum: 1 });

export {
  NFTBlockMonitorTaskDocument,
  NFTBlockMonitorTaskSchema,
}