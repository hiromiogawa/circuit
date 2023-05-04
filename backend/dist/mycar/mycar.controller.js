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
exports.MyCarController = void 0;
const common_1 = require("@nestjs/common");
const mycar_service_1 = require("./mycar.service");
const create_mycar_dto_1 = require("./dto/create-mycar.dto");
const session_guard_1 = require("../auth/session.guard");
let MyCarController = class MyCarController {
    constructor(myCarService) {
        this.myCarService = myCarService;
    }
    async create(req, createMyCarDto) {
        const userId = req.session.user._id;
        return this.myCarService.create(createMyCarDto, userId);
    }
    async findMyCars(req) {
        const userId = req.session.user._id;
        return this.myCarService.findByUserId(userId);
    }
    async updateImagePath(req, id, imagePath) {
        const userId = req.session.user._id;
        const isRelated = await this.myCarService.isUserRelatedToMyCar(userId, id);
        if (isRelated) {
            await this.myCarService.updateImagePath(id, userId, imagePath);
        }
        else {
            throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async findByUserId(userId) {
        return this.myCarService.findByUserId(userId);
    }
    async findOne(id) {
        return this.myCarService.findOne(id);
    }
    async update(req, id, updateMyCarDto) {
        const userId = req.session.user._id;
        await this.myCarService.update(id, userId, updateMyCarDto);
    }
    async delete(req, id) {
        const userId = req.session.user._id;
        await this.myCarService.delete(id, userId);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_mycar_dto_1.CreateMyCarDto]),
    __metadata("design:returntype", Promise)
], MyCarController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyCarController.prototype, "findMyCars", null);
__decorate([
    (0, common_1.Put)(':id/imagePath'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)('imagePath')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], MyCarController.prototype, "updateImagePath", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MyCarController.prototype, "findByUserId", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MyCarController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_mycar_dto_1.CreateMyCarDto]),
    __metadata("design:returntype", Promise)
], MyCarController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MyCarController.prototype, "delete", null);
MyCarController = __decorate([
    (0, common_1.Controller)('mycar'),
    __metadata("design:paramtypes", [mycar_service_1.MyCarService])
], MyCarController);
exports.MyCarController = MyCarController;
//# sourceMappingURL=mycar.controller.js.map