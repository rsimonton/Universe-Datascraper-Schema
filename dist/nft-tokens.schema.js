"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTTokensSchema = exports.NFTToken = exports.AlternativeMediaFile = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("./types");
class AlternativeMediaFile {
}
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], AlternativeMediaFile.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true, enum: types_1.MediaFileType }),
    __metadata("design:type", String)
], AlternativeMediaFile.prototype, "type", void 0);
exports.AlternativeMediaFile = AlternativeMediaFile;
let NFTToken = class NFTToken {
};
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], NFTToken.prototype, "contractAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], NFTToken.prototype, "tokenId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: types_1.SupportedTokenTypes }),
    __metadata("design:type", String)
], NFTToken.prototype, "tokenType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTToken.prototype, "externalDomainViewUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], NFTToken.prototype, "metadata", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTToken.prototype, "firstOwner", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTToken.prototype, "metadataFetchError", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], NFTToken.prototype, "processingSentAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], NFTToken.prototype, "sentAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], NFTToken.prototype, "sentForMediaAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], NFTToken.prototype, "alternativeMediaFiles", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], NFTToken.prototype, "needToRefresh", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], NFTToken.prototype, "needToRefreshMediaFiles", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, enum: types_1.SourceTypes, default: types_1.SourceTypes.ARCHIVE }),
    __metadata("design:type", String)
], NFTToken.prototype, "source", void 0);
NFTToken = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'nft-tokens' })
], NFTToken);
exports.NFTToken = NFTToken;
const NFTTokensSchema = mongoose_1.SchemaFactory.createForClass(NFTToken);
exports.NFTTokensSchema = NFTTokensSchema;
NFTTokensSchema.index({
    contractAddress: 1,
    tokenId: 1
}, {
    unique: true
});
//# sourceMappingURL=nft-tokens.schema.js.map