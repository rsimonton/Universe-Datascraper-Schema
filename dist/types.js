"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaFileType = exports.SupportedTokenTypes = exports.MessageStatus = void 0;
var MessageStatus;
(function (MessageStatus) {
    MessageStatus["sent"] = "sent";
    MessageStatus["processing"] = "processing";
    MessageStatus["done"] = "done";
    MessageStatus["error"] = "error";
    MessageStatus["split"] = "split";
})(MessageStatus = exports.MessageStatus || (exports.MessageStatus = {}));
var SupportedTokenTypes;
(function (SupportedTokenTypes) {
    SupportedTokenTypes["ERC721"] = "ERC721";
    SupportedTokenTypes["ERC1155"] = "ERC1155";
    SupportedTokenTypes["CryptoPunks"] = "CryptoPunks";
})(SupportedTokenTypes = exports.SupportedTokenTypes || (exports.SupportedTokenTypes = {}));
var MediaFileType;
(function (MediaFileType) {
    MediaFileType["Image"] = "image";
    MediaFileType["Video"] = "video";
    MediaFileType["Audio"] = "audio";
    MediaFileType["Model"] = "model";
    MediaFileType["Misc"] = "misc";
})(MediaFileType = exports.MediaFileType || (exports.MediaFileType = {}));
//# sourceMappingURL=types.js.map