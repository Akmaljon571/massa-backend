"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = (0, mongoose_1.model)('pro', new mongoose_1.Schema({
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'product',
    },
    image: String,
    color: String,
    razmer: String,
}));
//# sourceMappingURL=pro.js.map