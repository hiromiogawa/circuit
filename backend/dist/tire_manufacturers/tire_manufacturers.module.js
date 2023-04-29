"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TireManufacturersModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const tire_manufacturer_schema_1 = require("./schemas/tire_manufacturer.schema");
const tire_manufacturers_service_1 = require("./tire_manufacturers.service");
const tire_manufacturers_controller_1 = require("./tire_manufacturers.controller");
let TireManufacturersModule = class TireManufacturersModule {
};
TireManufacturersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: tire_manufacturer_schema_1.TireManufacturer.name, schema: tire_manufacturer_schema_1.TireManufacturerSchema },
            ]),
        ],
        providers: [tire_manufacturers_service_1.TireManufacturersService],
        controllers: [tire_manufacturers_controller_1.TireManufacturersController],
        exports: [tire_manufacturers_service_1.TireManufacturersService, mongoose_1.MongooseModule],
    })
], TireManufacturersModule);
exports.TireManufacturersModule = TireManufacturersModule;
//# sourceMappingURL=tire_manufacturers.module.js.map