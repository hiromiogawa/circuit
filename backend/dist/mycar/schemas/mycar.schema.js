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
exports.MyCarSchema = exports.MyCar = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../users/schemas/user.schema");
const car_schema_1 = require("../../cars/schemas/car.schema");
let MyCar = class MyCar extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ default: 'noimage.png' }),
    __metadata("design:type", String)
], MyCar.prototype, "imagePath", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: user_schema_1.User.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], MyCar.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: car_schema_1.Car.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], MyCar.prototype, "carId", void 0);
MyCar = __decorate([
    (0, mongoose_1.Schema)()
], MyCar);
exports.MyCar = MyCar;
exports.MyCarSchema = mongoose_1.SchemaFactory.createForClass(MyCar);
//# sourceMappingURL=mycar.schema.js.map