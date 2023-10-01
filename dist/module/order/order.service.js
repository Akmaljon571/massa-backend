"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const product_1 = require("../../model/product");
const user_1 = require("../../model/user");
const order_1 = require("../../model/order");
const pro_1 = require("../../model/pro");
let OrderService = class OrderService {
    async create(body, _id) {
        const product = await product_1.default.findOne({ _id: body.product });
        const pro = await pro_1.default.findOne({ _id: body.pro_id });
        const user = await user_1.default.findOne({ _id });
        const already = await order_1.default.findOne({
            product: product._id,
            pro: pro._id,
            user: user._id,
        });
        if (already) {
            already.count += 1;
            await order_1.default.updateOne({ _id: already._id }, already);
        }
        else {
            const newOrder = new order_1.default({
                product,
                user,
                pro,
                count: 1,
            });
            await newOrder.save();
            product.order.push(newOrder._id);
            await product_1.default.updateOne({ _id: product._id }, product);
            user.order.push(newOrder._id);
            await user_1.default.updateOne({ _id: user._id }, user);
        }
        return {
            message: 'Add Database',
        };
    }
    async findAll(_id) {
        const findUser = await user_1.default.findOne({ _id }).populate('order');
        const orders = findUser.order;
        const product = [];
        let jami = 0;
        for (let i = 0; i < orders.length; i++) {
            const a = await product_1.default.findOne({ _id: orders[i].product }).lean();
            const findPro = await pro_1.default.findOne({ _id: orders[i].pro }).lean();
            a.order = [];
            a.pro = findPro;
            for (let j = 0; j < orders[i].count; j++) {
                a.order.push(orders[i]._id);
                jami += a.price;
            }
            product.push(a);
        }
        return {
            jami,
            data: product,
        };
    }
    async remove(_id) {
        try {
            const findOrder = await order_1.default.findOne({ _id });
            const product = await product_1.default.findOne({ _id: findOrder === null || findOrder === void 0 ? void 0 : findOrder.product });
            product.order = product.order.filter((e) => String(e) !== String(_id));
            await product_1.default.updateOne({ _id: product._id }, product);
            const user = await user_1.default.findOne({ _id: findOrder.user }).lean();
            user.order = user.order.filter((e) => String(e) !== String(_id));
            await user_1.default.updateOne({ _id: user._id }, user);
            await order_1.default.findByIdAndDelete(_id);
            return {
                message: 'Delete Database',
            };
        }
        catch (error) {
            throw new common_1.HttpException('Order Not', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async minus(_id) {
        try {
            const findOrder = await order_1.default.findOne({ _id });
            findOrder.count = findOrder.count - 1;
            await order_1.default.updateOne({ _id }, findOrder);
            return {
                message: 'Delete Database',
            };
        }
        catch (error) {
            throw new common_1.HttpException('Order Not', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async clear(_id) {
        var _a;
        const findUser = await user_1.default.findOne({ _id }).populate('order');
        const orders = findUser === null || findUser === void 0 ? void 0 : findUser.order;
        for (let i = 0; i < orders.length; i++) {
            const product = await product_1.default.findOne({ _id: (_a = orders[i]) === null || _a === void 0 ? void 0 : _a.product });
            product.order = product.order.filter((e) => String(e) !== String(orders[i]._id));
            await product_1.default.updateOne({ _id: product._id }, product);
            await order_1.default.deleteMany({ _id: orders[i] });
        }
        findUser.order = [];
        await user_1.default.updateOne({ _id: findUser._id }, findUser);
        return {
            message: 'Clear',
        };
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)()
], OrderService);
//# sourceMappingURL=order.service.js.map