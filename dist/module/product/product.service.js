"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const category_1 = require("../../model/category");
const product_1 = require("../../model/product");
let ProductService = class ProductService {
    async findAll(son, page) {
        const findPage = (Number(page) - 1) * Number(son);
        const findSon = Number(son) + findPage;
        const all = await product_1.default.find();
        return all.slice(findPage, findSon);
    }
    async findOne(id, son, page) {
        const findPage = (Number(page) - 1) * Number(son);
        const findSon = Number(son) + findPage;
        const category = await category_1.default.findOne({ _id: id }).populate('product');
        const all = category.product;
        return all.slice(findPage, findSon);
    }
    async find(_id) {
        return await product_1.default.findOne({ _id }).populate('pro');
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
//# sourceMappingURL=product.service.js.map