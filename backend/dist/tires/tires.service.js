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
exports.TiresService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const tire_schema_1 = require("./schemas/tire.schema");
let TiresService = class TiresService {
    constructor(tireModel) {
        this.tireModel = tireModel;
    }
    async create(createTireDto) {
        const createdTire = new this.tireModel(createTireDto);
        return createdTire.save();
    }
    async findAll() {
        return this.tireModel.find().populate({ path: 'manufacturer' }).exec();
    }
    async findOne(id) {
        const tire = await this.tireModel
            .findById(id)
            .populate({ path: 'manufacturer' })
            .exec();
        if (!tire) {
            throw new common_1.NotFoundException('Tire not found');
        }
        return tire;
    }
    async update(id, updateTireDto) {
        const updatedTire = await this.tireModel
            .findByIdAndUpdate(id, updateTireDto)
            .exec();
        if (!updatedTire) {
            throw new common_1.NotFoundException('Tire not found');
        }
    }
    async delete(id) {
        const deletedTire = await this.tireModel.findByIdAndDelete(id).exec();
        if (!deletedTire) {
            throw new common_1.NotFoundException('Tire not found');
        }
    }
};
TiresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tire_schema_1.Tire.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TiresService);
exports.TiresService = TiresService;
//# sourceMappingURL=tires.service.js.map