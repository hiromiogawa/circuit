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
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const cars_service_1 = require("./cars.service");
const create_car_dto_1 = require("./dto/create-car.dto");
const session_guard_1 = require("../auth/session.guard");
const admin_guard_1 = require("../auth/admin.guard");
let CarsController = class CarsController {
    constructor(carsService) {
        this.carsService = carsService;
    }
    async create(createCarDto) {
        console.log(createCarDto);
        return this.carsService.create(createCarDto);
    }
    async findAll() {
        return this.carsService.findAll();
    }
    async findOne(carId) {
        return this.carsService.findOne(carId);
    }
    async findByManufacturer(manufacturerId) {
        return this.carsService.findByManufacturer(manufacturerId);
    }
    async findByDraiveTrain(driveTrainId) {
        return this.carsService.findByDraiveTrain(driveTrainId);
    }
    async update(carId, updateCarDto) {
        await this.carsService.update(carId, updateCarDto);
    }
    async delete(carId) {
        await this.carsService.delete(carId);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard, admin_guard_1.AdminGuard),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_car_dto_1.CreateCarDto]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/manufacturer/:manufacturerId'),
    __param(0, (0, common_1.Param)('manufacturerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "findByManufacturer", null);
__decorate([
    (0, common_1.Get)('/driveTrain/:driveTrainId'),
    __param(0, (0, common_1.Param)('driveTrainId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "findByDraiveTrain", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard, admin_guard_1.AdminGuard),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_car_dto_1.CreateCarDto]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard, admin_guard_1.AdminGuard),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "delete", null);
CarsController = __decorate([
    (0, common_1.Controller)('cars'),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsController);
exports.CarsController = CarsController;
//# sourceMappingURL=cars.controller.js.map