"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriveTrainsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const drivetrains_controller_1 = require("./drivetrains.controller");
const drivetrains_service_1 = require("./drivetrains.service");
const drivetrain_schema_1 = require("./schemas/drivetrain.schema");
let DriveTrainsModule = class DriveTrainsModule {
};
DriveTrainsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: drivetrain_schema_1.DriveTrain.name, schema: drivetrain_schema_1.DriveTrainSchema },
            ]),
        ],
        controllers: [drivetrains_controller_1.DriveTrainsController],
        providers: [drivetrains_service_1.DriveTrainsService],
        exports: [drivetrains_service_1.DriveTrainsService, mongoose_1.MongooseModule],
    })
], DriveTrainsModule);
exports.DriveTrainsModule = DriveTrainsModule;
//# sourceMappingURL=drivetrains.module.js.map