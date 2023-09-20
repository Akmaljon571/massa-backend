"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = (0, mongoose_1.model)('user', new mongoose_1.Schema({
    name: String,
    password: String,
    gender: Boolean,
    age: Number,
    order: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'order',
        },
    ],
    like: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'like',
        },
    ],
}));
//# sourceMappingURL=user.js.map