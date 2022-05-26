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
exports.NFTTokenOwnersTaskSchema = exports.NFTTokenOwnersTask = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("./types");
let NFTTokenOwnersTask = class NFTTokenOwnersTask {
};
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], NFTTokenOwnersTask.prototype, "contractAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], NFTTokenOwnersTask.prototype, "tokenId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", Number)
], NFTTokenOwnersTask.prototype, "priority", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", Boolean)
], NFTTokenOwnersTask.prototype, "isProcessing", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], NFTTokenOwnersTask.prototype, "taskId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTTokenOwnersTask.prototype, "tokenType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], NFTTokenOwnersTask.prototype, "sentAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTTokenOwnersTask.prototype, "errorMessage", void 0);
NFTTokenOwnersTask = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'nft-token-owners-tasks' })
], NFTTokenOwnersTask);
exports.NFTTokenOwnersTask = NFTTokenOwnersTask;
const NFTTokenOwnersTaskSchema = mongoose_1.SchemaFactory.createForClass(NFTTokenOwnersTask);
exports.NFTTokenOwnersTaskSchema = NFTTokenOwnersTaskSchema;
//# sourceMappingURL=nft-token-owners-task.schema.js.map