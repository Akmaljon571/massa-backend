"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_1 = require("../../model/user");
const jwt_1 = require("../../utils/jwt");
let AuthService = class AuthService {
    async login({ name, password }) {
        const already = await user_1.default.findOne({ name, password });
        if (already) {
            return { token: jwt_1.default.sign({ name, password }) };
        }
        else {
            const newUser = new user_1.default({
                name,
                password,
            });
            await newUser.save();
            return { token: jwt_1.default.sign({ name, password }) };
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map