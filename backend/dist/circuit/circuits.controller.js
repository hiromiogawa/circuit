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
exports.CircuitsController = void 0;
const common_1 = require("@nestjs/common");
const create_circuit_dto_1 = require("./dto/create-circuit.dto");
const circuits_service_1 = require("./circuits.service");
let CircuitsController = class CircuitsController {
    constructor(circuitsService) {
        this.circuitsService = circuitsService;
    }
    async create(createCircuitDto) {
        return this.circuitsService.create(createCircuitDto);
    }
    async findAll() {
        return this.circuitsService.findAll();
    }
    async findOne(id) {
        return this.circuitsService.findOne(id);
    }
    async update(id, updateCircuitDto) {
        await this.circuitsService.update(id, updateCircuitDto);
    }
    async delete(id) {
        await this.circuitsService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_circuit_dto_1.CreateCircuitDto]),
    __metadata("design:returntype", Promise)
], CircuitsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CircuitsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CircuitsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_circuit_dto_1.UpdateCircuitDto]),
    __metadata("design:returntype", Promise)
], CircuitsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CircuitsController.prototype, "delete", null);
CircuitsController = __decorate([
    (0, common_1.Controller)('circuits'),
    __metadata("design:paramtypes", [circuits_service_1.CircuitsService])
], CircuitsController);
exports.CircuitsController = CircuitsController;
//# sourceMappingURL=circuits.controller.js.map