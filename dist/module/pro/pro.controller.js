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
exports.ProController = void 0;
const common_1 = require("@nestjs/common");
const pro_service_1 = require("./pro.service");
const swagger_1 = require("@nestjs/swagger");
let ProController = class ProController {
    constructor(proService) {
        this.proService = proService;
    }
    post() {
        return this.proService.post();
    }
    async findOne(id) {
        return await this.proService.findOne(id);
    }
};
exports.ProController = ProController;
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProController.prototype, "post", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProController.prototype, "findOne", null);
exports.ProController = ProController = __decorate([
    (0, common_1.Controller)('pro'),
    (0, swagger_1.ApiTags)('Pro'),
    __metadata("design:paramtypes", [pro_service_1.ProService])
], ProController);
//# sourceMappingURL=pro.controller.js.map