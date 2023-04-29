"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircuitsModule = void 0;
const common_1 = require("@nestjs/common");
const circuits_service_1 = require("./circuits.service");
const circuits_controller_1 = require("./circuits.controller");
const mongoose_1 = require("@nestjs/mongoose");
const circuit_schema_1 = require("./schemas/circuit.schema");
let CircuitsModule = class CircuitsModule {
};
CircuitsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: circuit_schema_1.Circuit.name, schema: circuit_schema_1.CircuitSchema }]),
        ],
        providers: [circuits_service_1.CircuitsService],
        controllers: [circuits_controller_1.CircuitsController],
    })
], CircuitsModule);
exports.CircuitsModule = CircuitsModule;
//# sourceMappingURL=circuits.module.js.map