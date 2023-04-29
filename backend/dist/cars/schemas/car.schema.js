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
exports.CarSchema = exports.Car = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const manufacturer_schema_1 = require("../../manufacturers/schemas/manufacturer.schema");
const drivetrain_schema_1 = require("../../drivetrains/schemas/drivetrain.schema");
let Car = class Car extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Car.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Car.prototype, "modelName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: manufacturer_schema_1.Manufacturer.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Car.prototype, "manufacturer", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: drivetrain_schema_1.DriveTrain.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Car.prototype, "drivetrains", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Car.prototype, "displacement", void 0);
Car = __decorate([
    (0, mongoose_1.Schema)()
], Car);
exports.Car = Car;
const CarSchema = mongoose_1.SchemaFactory.createForClass(Car);
exports.CarSchema = CarSchema;
CarSchema.index({ name: 1, modelName: 1 }, { unique: true });
//# sourceMappingURL=car.schema.js.map