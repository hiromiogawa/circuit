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
exports.DriveTrainSchema = exports.DriveTrain = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var Drivetrain;
(function (Drivetrain) {
    Drivetrain["FF"] = "FF";
    Drivetrain["FR"] = "FR";
    Drivetrain["WD4"] = "4WD";
    Drivetrain["MR"] = "MR";
})(Drivetrain || (Drivetrain = {}));
let DriveTrain = class DriveTrain extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String, enum: Drivetrain, unique: true }),
    __metadata("design:type", String)
], DriveTrain.prototype, "system", void 0);
DriveTrain = __decorate([
    (0, mongoose_1.Schema)()
], DriveTrain);
exports.DriveTrain = DriveTrain;
exports.DriveTrainSchema = mongoose_1.SchemaFactory.createForClass(DriveTrain);
//# sourceMappingURL=drivetrain.schema.js.map