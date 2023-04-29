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
exports.TireManufacturersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const tire_manufacturer_schema_1 = require("./schemas/tire_manufacturer.schema");
let TireManufacturersService = class TireManufacturersService {
    constructor(TireManufacturerModel) {
        this.TireManufacturerModel = TireManufacturerModel;
    }
    async create(createTireManufacturerDto) {
        const createdTireManufacturer = new this.TireManufacturerModel(createTireManufacturerDto);
        return createdTireManufacturer.save();
    }
    async findAll() {
        return this.TireManufacturerModel.find().exec();
    }
    async findOne(id) {
        return this.TireManufacturerModel.findById(id).exec();
    }
    async update(id, createTireManufacturerDto) {
        const updatedTireManufacturer = await this.TireManufacturerModel.findByIdAndUpdate(id, createTireManufacturerDto, { new: true }).exec();
        if (!updatedTireManufacturer) {
            throw new common_1.NotFoundException('Could not find TireManufacturer');
        }
    }
    async delete(id) {
        const deletedTireManufacturer = await this.TireManufacturerModel.findByIdAndDelete(id).exec();
        if (!deletedTireManufacturer) {
            throw new common_1.NotFoundException('Could not find TireManufacturer');
        }
    }
};
TireManufacturersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tire_manufacturer_schema_1.TireManufacturer.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TireManufacturersService);
exports.TireManufacturersService = TireManufacturersService;
//# sourceMappingURL=tire_manufacturers.service.js.map