"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiresModule = void 0;
const common_1 = require("@nestjs/common");
const tires_controller_1 = require("./tires.controller");
const tires_service_1 = require("./tires.service");
const mongoose_1 = require("@nestjs/mongoose");
const tire_schema_1 = require("./schemas/tire.schema");
let TiresModule = class TiresModule {
};
TiresModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: tire_schema_1.Tire.name, schema: tire_schema_1.TireSchema }]),
        ],
        controllers: [tires_controller_1.TiresController],
        providers: [tires_service_1.TiresService],
    })
], TiresModule);
exports.TiresModule = TiresModule;
//# sourceMappingURL=tires.module.js.map