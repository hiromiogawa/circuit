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
exports.TuningService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const tuning_schema_1 = require("./schemas/tuning.schema");
const mycar_schema_1 = require("../mycar/schemas/mycar.schema");
let TuningService = class TuningService {
    constructor(tuningModel, mycarModel) {
        this.tuningModel = tuningModel;
        this.mycarModel = mycarModel;
    }
    async create(createTuningDto) {
        const createdTuning = new this.tuningModel(createTuningDto);
        return createdTuning.save();
    }
    async findAllByMyCarId(mycarId) {
        return await this.tuningModel.find({ mycarId }).exec();
    }
    async findOne(id) {
        return this.tuningModel.findById(id).exec();
    }
    async update(id, updateTuningDto) {
        await this.tuningModel.findByIdAndUpdate(id, updateTuningDto).exec();
    }
    async delete(id) {
        await this.tuningModel.findByIdAndDelete(id).exec();
    }
    async isUserRelatedToTuning(userId, tuningId) {
        const tuning = await this.tuningModel.findById(tuningId).exec();
        const mycar = await this.mycarModel
            .findOne({ userId, _id: tuning.mycarId })
            .exec();
        return !!mycar;
    }
};
TuningService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tuning_schema_1.Tuning.name)),
    __param(1, (0, mongoose_1.InjectModel)(mycar_schema_1.MyCar.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], TuningService);
exports.TuningService = TuningService;
//# sourceMappingURL=tuning.service.js.map