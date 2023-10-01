"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeService = void 0;
const common_1 = require("@nestjs/common");
const user_1 = require("../../model/user");
const product_1 = require("../../model/product");
const like_1 = require("../../model/like");
let LikeService = class LikeService {
    async create({ pro_id }, _id) {
        const product = await product_1.default.findOne({ _id: pro_id });
        const user = await user_1.default.findOne({ _id });
        const newLike = new like_1.default({
            product,
            user,
        });
        await newLike.save();
        product.like.push(newLike._id);
        await product_1.default.updateOne({ _id: product._id }, product);
        user.like.push(newLike._id);
        await user_1.default.updateOne({ _id: user._id }, user);
        return {
            message: 'Add Database',
        };
    }
    async findAll(_id) {
        const findUser = await user_1.default.findOne({ _id }).populate('like');
        const likes = findUser.like;
        const product = [];
        for (let i = 0; i < likes.length; i++) {
            const a = await product_1.default.findOne({ _id: likes[i].product }).lean();
            delete a.like;
            a.like_id = likes[i]._id;
            product.push(a);
        }
        return product;
    }
    async remove(_id) {
        try {
            const findLike = await like_1.default.findOne({ _id });
            const product = await product_1.default.findOne({ _id: findLike === null || findLike === void 0 ? void 0 : findLike.product });
            product.like = product.like.filter((e) => String(e) !== String(_id));
            await product_1.default.updateOne({ _id: product._id }, product);
            const user = await user_1.default.findOne({ _id: findLike.user }).lean();
            user.like = user.like.filter((e) => String(e) !== String(_id));
            await user_1.default.updateOne({ _id: user._id }, user);
            await like_1.default.findByIdAndDelete(_id);
            return {
                message: 'Delete Database',
            };
        }
        catch (error) {
            throw new common_1.HttpException('Like Not', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.LikeService = LikeService;
exports.LikeService = LikeService = __decorate([
    (0, common_1.Injectable)()
], LikeService);
//# sourceMappingURL=like.service.js.map