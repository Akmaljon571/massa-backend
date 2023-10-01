"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenUserMiddleWare = void 0;
const common_1 = require("@nestjs/common");
const user_1 = require("../model/user");
const jwt_1 = require("../utils/jwt");
let TokenUserMiddleWare = class TokenUserMiddleWare {
    async use(req, _, next) {
        const { headers } = req;
        if (!headers.autharization) {
            throw new common_1.HttpException('Bad Request in Token', common_1.HttpStatus.BAD_REQUEST);
        }
        const { name, password } = jwt_1.default.verify(headers.autharization);
        if (!name || !password) {
            throw new common_1.HttpException('Bad Request in Token', common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await user_1.default.findOne({ name, password });
        if (!user) {
            throw new common_1.HttpException('Invalid Token', common_1.HttpStatus.BAD_REQUEST);
        }
        req.user_id = user._id;
        next();
    }
};
exports.TokenUserMiddleWare = TokenUserMiddleWare;
exports.TokenUserMiddleWare = TokenUserMiddleWare = __decorate([
    (0, common_1.Injectable)()
], TokenUserMiddleWare);
//# sourceMappingURL=tokenUser.js.map