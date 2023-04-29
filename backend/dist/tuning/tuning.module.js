"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TuningModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const tuning_schema_1 = require("./schemas/tuning.schema");
const tuning_controller_1 = require("./tuning.controller");
const tuning_service_1 = require("./tuning.service");
const mycar_module_1 = require("../mycar/mycar.module");
let TuningModule = class TuningModule {
};
TuningModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: tuning_schema_1.Tuning.name, schema: tuning_schema_1.TuningSchema }]),
            mycar_module_1.MyCarModule,
        ],
        controllers: [tuning_controller_1.TuningController],
        providers: [tuning_service_1.TuningService],
        exports: [tuning_service_1.TuningService],
    })
], TuningModule);
exports.TuningModule = TuningModule;
//# sourceMappingURL=tuning.module.js.map