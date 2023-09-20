"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = (0, mongoose_1.model)('product', new mongoose_1.Schema({
    title: String,
    price: Number,
    chegirma: String,
    oldPrice: Number,
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'category',
    },
    order: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'order',
        },
    ],
    pro: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'pro',
        },
    ],
    like: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'like',
        },
    ],
}));
//# sourceMappingURL=product.js.map