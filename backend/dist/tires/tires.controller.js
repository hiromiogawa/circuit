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
exports.TiresController = void 0;
const common_1 = require("@nestjs/common");
const tires_service_1 = require("./tires.service");
const create_tire_dto_1 = require("./dto/create-tire.dto");
let TiresController = class TiresController {
    constructor(tiresService) {
        this.tiresService = tiresService;
    }
    async create(createTireDto) {
        return this.tiresService.create(createTireDto);
    }
    async findAll() {
        return this.tiresService.findAll();
    }
    async findOne(id) {
        return this.tiresService.findOne(id);
    }
    async update(id, updateTireDto) {
        return this.tiresService.update(id, updateTireDto);
    }
    async delete(id) {
        return this.tiresService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tire_dto_1.CreateTireDto]),
    __metadata("design:returntype", Promise)
], TiresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TiresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TiresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_tire_dto_1.CreateTireDto]),
    __metadata("design:returntype", Promise)
], TiresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TiresController.prototype, "delete", null);
TiresController = __decorate([
    (0, common_1.Controller)('tires'),
    __metadata("design:paramtypes", [tires_service_1.TiresService])
], TiresController);
exports.TiresController = TiresController;
//# sourceMappingURL=tires.controller.js.map