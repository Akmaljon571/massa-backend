"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeController = void 0;
const common_1 = require("@nestjs/common");
const like_service_1 = require("./like.service");
const create_like_dto_1 = require("./dto/create-like.dto");
const mongoose_1 = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
let LikeController = class LikeController {
    constructor(likeService) {
        this.likeService = likeService;
    }
    create(createLikeDto, req) {
        const _id = req.user_id;
        return this.likeService.create(createLikeDto, _id);
    }
    async findAll(req) {
        const _id = req.user_id;
        return this.likeService.findAll(_id);
    }
    async remove(id) {
        return await this.likeService.remove(id);
    }
};
exports.LikeController = LikeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiHeader)({
        name: 'autharization',
        required: true,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_like_dto_1.CreateLikeDto, Object]),
    __metadata("design:returntype", void 0)
], LikeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiHeader)({
        name: 'autharization',
        required: true,
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({
        type: String,
        name: 'id',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'autharization',
        required: true,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "remove", null);
exports.LikeController = LikeController = __decorate([
    (0, common_1.Controller)('user/like'),
    (0, swagger_1.ApiTags)('Like'),
    __metadata("design:paramtypes", [like_service_1.LikeService])
], LikeController);
//# sourceMappingURL=like.controller.js.map