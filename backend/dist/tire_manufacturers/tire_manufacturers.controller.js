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
exports.TireManufacturersController = void 0;
const common_1 = require("@nestjs/common");
const tire_manufacturers_service_1 = require("./tire_manufacturers.service");
const create_tire_manufacturer_dto_1 = require("./dto/create-tire_manufacturer.dto");
let TireManufacturersController = class TireManufacturersController {
    constructor(TireManufacturersService) {
        this.TireManufacturersService = TireManufacturersService;
    }
    async create(createTireManufacturerDto) {
        return this.TireManufacturersService.create(createTireManufacturerDto);
    }
    async findAll() {
        return this.TireManufacturersService.findAll();
    }
    async findOne(id) {
        return this.TireManufacturersService.findOne(id);
    }
    async update(id, createTireManufacturerDto) {
        await this.TireManufacturersService.update(id, createTireManufacturerDto);
    }
    async delete(id) {
        await this.TireManufacturersService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tire_manufacturer_dto_1.CreateTireManufacturerDto]),
    __metadata("design:returntype", Promise)
], TireManufacturersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TireManufacturersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TireManufacturersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_tire_manufacturer_dto_1.CreateTireManufacturerDto]),
    __metadata("design:returntype", Promise)
], TireManufacturersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TireManufacturersController.prototype, "delete", null);
TireManufacturersController = __decorate([
    (0, common_1.Controller)('tire_manufacturers'),
    __metadata("design:paramtypes", [tire_manufacturers_service_1.TireManufacturersService])
], TireManufacturersController);
exports.TireManufacturersController = TireManufacturersController;
//# sourceMappingURL=tire_manufacturers.controller.js.map