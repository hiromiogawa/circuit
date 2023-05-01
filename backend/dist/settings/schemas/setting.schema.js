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
exports.SettingSchema = exports.Setting = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const tire_schema_1 = require("../../tires/schemas/tire.schema");
const mycar_schema_1 = require("../../mycar/schemas/mycar.schema");
let Setting = class Setting extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: mycar_schema_1.MyCar.name }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Setting.prototype, "mycarId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: tire_schema_1.Tire.name }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Setting.prototype, "tireId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Setting.prototype, "freeText", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Setting.prototype, "active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "airPressureFront", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "airPressureRear", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "springRateFront", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "springRateRear", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "rideHeightFront", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "rideHeightRear", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "damperAdjustmentFront", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "damperAdjustmentRear", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "camberAngleFront", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "camberAngleRear", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "rearSpoiler", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "boostPressure", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "tireSizeFront", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "tireSizeRear", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "toeAngleFront", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '-' }),
    __metadata("design:type", String)
], Setting.prototype, "toeAngleRear", void 0);
Setting = __decorate([
    (0, mongoose_1.Schema)()
], Setting);
exports.Setting = Setting;
exports.SettingSchema = mongoose_1.SchemaFactory.createForClass(Setting);
//# sourceMappingURL=setting.schema.js.map