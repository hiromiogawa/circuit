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
exports.SettingsController = void 0;
const common_1 = require("@nestjs/common");
const settings_service_1 = require("./settings.service");
const mycar_service_1 = require("../mycar/mycar.service");
const create_setting_dto_1 = require("./dto/create-setting.dto");
const session_guard_1 = require("../auth/session.guard");
let SettingsController = class SettingsController {
    constructor(settingsService, myCarsService) {
        this.settingsService = settingsService;
        this.myCarsService = myCarsService;
    }
    async create(req, createSettingDto) {
        const userId = req.session.user._id;
        const mycarId = createSettingDto.mycarId;
        if (await this.myCarsService.isUserRelatedToMyCar(userId, mycarId)) {
            return this.settingsService.create(createSettingDto);
        }
        else {
            throw new common_1.UnauthorizedException("You don't have access to this car.");
        }
    }
    async findOne(id) {
        return this.settingsService.findOne(id);
    }
    async findAllByMyCarId(mycarId) {
        return this.settingsService.findAllByMyCarId(mycarId);
    }
    async update(req, id, updateSettingDto) {
        const userId = req.session.user._id;
        if (await this.settingsService.isUserRelatedToSetting(userId, id)) {
            await this.settingsService.update(id, updateSettingDto);
        }
        else {
            throw new common_1.UnauthorizedException("You don't have access to this setting.");
        }
    }
    async delete(req, id) {
        const userId = req.session.user._id;
        if (await this.settingsService.isUserRelatedToSetting(userId, id)) {
            await this.settingsService.delete(id);
        }
        else {
            throw new common_1.UnauthorizedException("You don't have access to this setting.");
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_setting_dto_1.CreateSettingDto]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('mycar/:mycarId'),
    __param(0, (0, common_1.Param)('mycarId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "findAllByMyCarId", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_setting_dto_1.CreateSettingDto]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "delete", null);
SettingsController = __decorate([
    (0, common_1.Controller)('settings'),
    __metadata("design:paramtypes", [settings_service_1.SettingsService,
        mycar_service_1.MyCarService])
], SettingsController);
exports.SettingsController = SettingsController;
//# sourceMappingURL=settings.controller.js.map