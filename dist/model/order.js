"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = (0, mongoose_1.model)('order', new mongoose_1.Schema({
    count: Number,
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user',
    },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'product',
    },
    pro: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'pro',
    },
}));
//# sourceMappingURL=order.js.map