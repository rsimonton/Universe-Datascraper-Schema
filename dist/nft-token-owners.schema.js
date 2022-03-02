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
exports.NFTTokenOwnersSchema = exports.NFTTokenOwners = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let NFTTokenOwners = class NFTTokenOwners {
};
__decorate([
    (0, mongoose_1.Prop)({ trim: true, index: true, required: true }),
    __metadata("design:type", String)
], NFTTokenOwners.prototype, "contractAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, index: true, required: true }),
    __metadata("design:type", String)
], NFTTokenOwners.prototype, "tokenId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, index: true, required: true }),
    __metadata("design:type", String)
], NFTTokenOwners.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, index: true, required: true }),
    __metadata("design:type", String)
], NFTTokenOwners.prototype, "transactionHash", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], NFTTokenOwners.prototype, "value", void 0);
NFTTokenOwners = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'nft-token-owners' })
], NFTTokenOwners);
exports.NFTTokenOwners = NFTTokenOwners;
exports.NFTTokenOwnersSchema = mongoose_1.SchemaFactory.createForClass(NFTTokenOwners);
exports.NFTTokenOwnersSchema.index({ contractAddress: 1, tokenId: 1, address: 1 }, { unique: true });
exports.NFTTokenOwnersSchema.index({ address: 1, transactionHash: 1 }, { unique: true });
//# sourceMappingURL=nft-token-owners.schema.js.map