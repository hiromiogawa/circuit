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
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const setting_schema_1 = require("./schemas/setting.schema");
const mycar_schema_1 = require("../mycar/schemas/mycar.schema");
let SettingsService = class SettingsService {
    constructor(settingModel, mycarModel) {
        this.settingModel = settingModel;
        this.mycarModel = mycarModel;
    }
    async create(createSettingDto) {
        const createdSetting = new this.settingModel(createSettingDto);
        return createdSetting.save();
    }
    async deactivatePreviousSetting(mycarId) {
        await this.settingModel.updateMany({ mycarId, active: true }, { $set: { active: false } });
    }
    async activateSetting(id) {
        const setting = await this.settingModel.findById(id);
        if (setting) {
            await this.settingModel.updateMany({ mycarId: setting.mycarId, active: true }, { $set: { active: false } });
            setting.active = true;
            await setting.save();
        }
        else {
            throw new common_1.NotFoundException('Setting not found');
        }
    }
    async findActive(mycarId) {
        return this.settingModel
            .find({ mycarId, active: true })
            .populate({
            path: 'mycarId'
        })
            .populate({
            path: 'tireId',
            populate: [{ path: 'manufacturer' }]
        })
            .exec();
    }
    async findAllByMyCarId(mycarId) {
        return await this.settingModel.find({ mycarId }).exec();
    }
    async findOne(id) {
        const setting = await this.settingModel
            .findById(id)
            .populate({
            path: 'mycarId',
            populate: [{ path: 'userId' }, { path: 'carId' }]
        })
            .populate({
            path: 'tireId',
            populate: [{ path: 'manufacturer' }]
        })
            .exec();
        if (!setting) {
            throw new common_1.NotFoundException('Setting not found');
        }
        return setting;
    }
    async update(id, updateSettingDto) {
        const updatedSetting = await this.settingModel
            .findByIdAndUpdate(id, updateSettingDto, { new: true })
            .exec();
        if (!updatedSetting) {
            throw new common_1.NotFoundException('Setting not found');
        }
        return updatedSetting;
    }
    async delete(id) {
        const deletedSetting = await this.settingModel.findByIdAndDelete(id).exec();
        if (!deletedSetting) {
            throw new common_1.NotFoundException('Setting not found');
        }
    }
    async isUserRelatedToSetting(userId, settingId) {
        const setting = await this.settingModel.findById(settingId).exec();
        const mycar = await this.mycarModel
            .findOne({ userId, _id: setting.mycarId })
            .exec();
        return !!mycar;
    }
};
SettingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(setting_schema_1.Setting.name)),
    __param(1, (0, mongoose_1.InjectModel)(mycar_schema_1.MyCar.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], SettingsService);
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map