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
exports.NFTTransferHistorySchema = exports.NFTTransferHistory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("./types");
let NFTTransferHistory = class NFTTransferHistory {
};
__decorate([
    (0, mongoose_1.Prop)({ trim: true, index: true, required: true }),
    __metadata("design:type", String)
], NFTTransferHistory.prototype, "contractAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], NFTTransferHistory.prototype, "blockNum", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", String)
], NFTTransferHistory.prototype, "hash", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], NFTTransferHistory.prototype, "from", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], NFTTransferHistory.prototype, "to", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true }),
    __metadata("design:type", String)
], NFTTransferHistory.prototype, "tokenId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTTransferHistory.prototype, "value", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTTransferHistory.prototype, "erc721TokenId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'object' }),
    __metadata("design:type", Object)
], NFTTransferHistory.prototype, "erc1155Metadata", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'object' }),
    __metadata("design:type", Object)
], NFTTransferHistory.prototype, "cryptopunks", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true, enum: types_1.SupportedTokenTypes }),
    __metadata("design:type", String)
], NFTTransferHistory.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTTransferHistory.prototype, "timeLastUpdated", void 0);
NFTTransferHistory = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'nft-transfer-histories' })
], NFTTransferHistory);
exports.NFTTransferHistory = NFTTransferHistory;
exports.NFTTransferHistorySchema = mongoose_1.SchemaFactory.createForClass(NFTTransferHistory);
//# sourceMappingURL=nft-transfer-history.schema.js.map