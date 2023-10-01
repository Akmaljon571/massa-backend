"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const category_module_1 = require("./module/category/category.module");
const product_module_1 = require("./module/product/product.module");
const pro_module_1 = require("./module/pro/pro.module");
const auth_module_1 = require("./module/auth/auth.module");
const tokenUser_1 = require("./middleware/tokenUser");
const order_module_1 = require("./module/order/order.module");
const like_module_1 = require("./module/like/like.module");
const user_module_1 = require("./module/user/user.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(tokenUser_1.TokenUserMiddleWare)
            .forRoutes({ path: '/user/*', method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            pro_module_1.ProModule,
            auth_module_1.AuthModule,
            order_module_1.OrderModule,
            like_module_1.LikeModule,
            user_module_1.UserModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map