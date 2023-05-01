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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSettingDto = void 0;
const class_validator_1 = require("class-validator");
class CreateSettingDto {
    constructor() {
        this.active = true;
        this.airPressureFront = '-';
        this.airPressureRear = '-';
        this.springRateFront = '-';
        this.springRateRear = '-';
        this.rideHeightFront = '-';
        this.rideHeightRear = '-';
        this.damperAdjustmentFront = '-';
        this.damperAdjustmentRear = '-';
        this.camberAngleFront = '-';
        this.camberAngleRear = '-';
        this.rearSpoiler = '-';
        this.boostPressure = '-';
        this.tireSizeFront = '-';
        this.tireSizeRear = '-';
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "mycarId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "tireId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "freeText", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], CreateSettingDto.prototype, "active", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "airPressureFront", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "airPressureRear", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "springRateFront", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "springRateRear", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "rideHeightFront", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "rideHeightRear", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "damperAdjustmentFront", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "damperAdjustmentRear", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "camberAngleFront", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "camberAngleRear", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "rearSpoiler", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "boostPressure", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "tireSizeFront", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "tireSizeRear", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "toeAngleFront", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSettingDto.prototype, "toeAngleRear", void 0);
exports.CreateSettingDto = CreateSettingDto;
//# sourceMappingURL=create-setting.dto.js.map