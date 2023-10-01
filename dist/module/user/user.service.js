"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_1 = require("../../model/user");
const jwt_1 = require("../../utils/jwt");
let UserService = class UserService {
    async findOne(_id) {
        return await user_1.default.findOne({ _id });
    }
    async update(_id, { name, password, gender, age }) {
        const findOne = await this.findOne(_id);
        if (name && !password) {
            const allReady = await user_1.default.findOne({ name, password: findOne.password });
            if (allReady) {
                throw new common_1.HttpException('Name Already exists', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        else if (!name && password) {
            const allReady = await user_1.default.findOne({ name: findOne.name, password });
            if (allReady) {
                throw new common_1.HttpException('Already exists', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        else if (name && password) {
            const allReady = await user_1.default.findOne({ name, password });
            if (allReady) {
                throw new common_1.HttpException('User Already exists', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        findOne.name = name || findOne.name;
        findOne.password = password || findOne.password;
        findOne.gender = gender ? true : false;
        findOne.age = age || findOne.age;
        await user_1.default.findByIdAndUpdate(findOne._id, findOne);
        const newUser = await this.findOne(_id);
        return {
            token: jwt_1.default.sign({ name: newUser.name, password: newUser.password }),
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map