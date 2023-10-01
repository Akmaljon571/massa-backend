"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("../../utils/cloudinary");
const pro_1 = require("../../model/pro");
const product_1 = require("../../model/product");
let ProService = class ProService {
    async post() {
        const img = 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp';
        const uploadResponse = await cloudinary_1.cloudinary.uploader.upload(img, {
            upload_preset: 'Akmal',
        });
        console.log(uploadResponse === null || uploadResponse === void 0 ? void 0 : uploadResponse.secure_url);
    }
    async findOne(_id) {
        const a = await product_1.default.findOne({ _id });
        const oldPro = a.pro;
        const newPro = [];
        for (let i = 0; i < oldPro.length; i++) {
            const b = await pro_1.default.findOne({ _id: oldPro[i] });
            newPro.push(b);
        }
        delete a.pro;
        a.pro = newPro;
        return a;
    }
};
exports.ProService = ProService;
exports.ProService = ProService = __decorate([
    (0, common_1.Injectable)()
], ProService);
//# sourceMappingURL=pro.service.js.map