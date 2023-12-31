"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = (0, mongoose_1.model)('like', new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user',
    },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'product',
    },
}));
//# sourceMappingURL=like.js.map