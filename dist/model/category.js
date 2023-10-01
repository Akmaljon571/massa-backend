"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = (0, mongoose_1.model)('category', new mongoose_1.Schema({
    title: String,
    product: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'product',
        },
    ],
}));
//# sourceMappingURL=category.js.map