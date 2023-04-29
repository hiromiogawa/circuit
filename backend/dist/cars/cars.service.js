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
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const car_schema_1 = require("./schemas/car.schema");
const manufacturer_schema_1 = require("../manufacturers/schemas/manufacturer.schema");
const drivetrain_schema_1 = require("../drivetrains/schemas/drivetrain.schema");
let CarsService = class CarsService {
    constructor(carModel, ManufacturerModel, driveTrainModel) {
        this.carModel = carModel;
        this.ManufacturerModel = ManufacturerModel;
        this.driveTrainModel = driveTrainModel;
    }
    async create(createCarDto) {
        const createdCar = new this.carModel(createCarDto);
        return await createdCar.save();
    }
    async findAll() {
        return await this.carModel
            .find()
            .populate({ path: 'manufacturer' })
            .populate({ path: 'drivetrains' })
            .exec();
    }
    async findOne(carId) {
        const car = await this.carModel
            .findById(carId)
            .populate({ path: 'manufacturer' })
            .populate({ path: 'drivetrains' })
            .exec();
        if (!car) {
            throw new common_1.NotFoundException('Car not found');
        }
        return car;
    }
    async update(carId, updateCarDto) {
        const updatedCar = await this.carModel.findByIdAndUpdate(carId, updateCarDto, { new: true });
        if (!updatedCar) {
            throw new common_1.NotFoundException('Car not found');
        }
    }
    async delete(carId) {
        const deletedCar = await this.carModel.findByIdAndDelete(carId).exec();
        if (!deletedCar) {
            throw new common_1.NotFoundException('Car not found');
        }
    }
    async findByManufacturer(manufacturerId) {
        const Manufacturer = await this.ManufacturerModel.findById(manufacturerId).exec();
        if (!Manufacturer) {
            throw new common_1.NotFoundException('Manufacturer not found');
        }
        return this.carModel.find({ manufacturer: manufacturerId }).exec();
    }
    async findByDraiveTrain(driveTrainId) {
        const driveTrain = await this.driveTrainModel.findById(driveTrainId).exec();
        if (!driveTrain) {
            throw new common_1.NotFoundException('Manufacturer not found');
        }
        return this.carModel.find({ driveTrain: driveTrainId }).exec();
    }
};
CarsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(car_schema_1.Car.name)),
    __param(1, (0, mongoose_1.InjectModel)(manufacturer_schema_1.Manufacturer.name)),
    __param(2, (0, mongoose_1.InjectModel)(drivetrain_schema_1.DriveTrain.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map