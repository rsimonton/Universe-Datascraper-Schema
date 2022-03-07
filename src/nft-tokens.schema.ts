import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MediaFileType, SourceTypes, SupportedTokenTypes } from './types';

export class AlternativeMediaFile {
  @Prop({ trim: true, required: true })
  url: string;

  @Prop({ trim: true, required: true, enum: MediaFileType })
  type: string;
}

@Schema({ timestamps: true, collection: 'nft-tokens' })
export class NFTToken {
  @Prop({ trim: true, required: true })
  public contractAddress: string;

  @Prop({ trim: true, required: true })
  public tokenId: string;

  @Prop({ index: true, enum: SupportedTokenTypes })
  public tokenType: string;

  @Prop()
  public externalDomainViewUrl: string;

  @Prop({ type: Object })
  public metadata: any;

  @Prop()
  public firstOwner: string;

  @Prop()
  public metadataFetchError: string;

  @Prop()
  public processingSentAt: Date;

  @Prop()
  public sentAt: Date;

  @Prop()
  public sentForMediaAt: Date;

  @Prop()
  public alternativeMediaFiles: AlternativeMediaFile[];

  @Prop({ default: false })
  public needToRefresh: boolean;

  @Prop({ trim: true, enum: SourceTypes, default: SourceTypes.ARCHIVE })
  public source: string;
}

export type NFTTokensDocument = NFTToken & Document;


export const NFTTokensSchema =
  SchemaFactory.createForClass(NFTToken);

NFTTokensSchema.index({ contractAddress: 1, tokenId: 1 }, { unique: true });
NFTTokensSchema.index({ source: 1 });

