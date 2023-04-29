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
exports.DriveTrainsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const drivetrain_schema_1 = require("./schemas/drivetrain.schema");
let DriveTrainsService = class DriveTrainsService {
    constructor(driveTrainModel) {
        this.driveTrainModel = driveTrainModel;
    }
    async create(createDriveTrainDto) {
        const createdMaker = new this.driveTrainModel(createDriveTrainDto);
        return createdMaker.save();
    }
    async findAll() {
        return this.driveTrainModel.find().exec();
    }
    async findOne(id) {
        return this.driveTrainModel.findById(id).exec();
    }
    async update(id, createDriveTrainDto) {
        const updatedDriveTrain = await this.driveTrainModel
            .findByIdAndUpdate(id, createDriveTrainDto, { new: true })
            .exec();
        if (!updatedDriveTrain) {
            throw new common_1.NotFoundException('Could not find drive train');
        }
    }
    async delete(id) {
        const deletedDriveTrain = await this.driveTrainModel
            .findByIdAndDelete(id)
            .exec();
        if (!deletedDriveTrain) {
            throw new common_1.NotFoundException('Could not find drive train');
        }
    }
};
DriveTrainsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(drivetrain_schema_1.DriveTrain.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DriveTrainsService);
exports.DriveTrainsService = DriveTrainsService;
//# sourceMappingURL=drivetrains.service.js.map