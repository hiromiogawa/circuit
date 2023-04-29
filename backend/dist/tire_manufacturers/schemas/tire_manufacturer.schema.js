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
exports.TireManufacturerSchema = exports.TireManufacturer = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var TireManufacturers;
(function (TireManufacturers) {
    TireManufacturers["BRIDGESTONE"] = "BRIDGESTONE";
    TireManufacturers["DUNLOP"] = "DUNLOP";
    TireManufacturers["YOKOHAMA"] = "YOKOHAMA";
    TireManufacturers["TOYOTIRE"] = "TOYOTIRE";
    TireManufacturers["GOODYEAR"] = "GOODYEAR";
    TireManufacturers["Continental"] = "Continental";
    TireManufacturers["HANKOOK"] = "HANKOOK";
    TireManufacturers["MICHELIN"] = "MICHELIN";
})(TireManufacturers || (TireManufacturers = {}));
let TireManufacturer = class TireManufacturer extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String, enum: TireManufacturers, unique: true }),
    __metadata("design:type", String)
], TireManufacturer.prototype, "name", void 0);
TireManufacturer = __decorate([
    (0, mongoose_1.Schema)()
], TireManufacturer);
exports.TireManufacturer = TireManufacturer;
exports.TireManufacturerSchema = mongoose_1.SchemaFactory.createForClass(TireManufacturer);
//# sourceMappingURL=tire_manufacturer.schema.js.map