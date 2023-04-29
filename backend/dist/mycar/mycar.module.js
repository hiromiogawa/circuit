"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCarModule = void 0;
const common_1 = require("@nestjs/common");
const mycar_service_1 = require("./mycar.service");
const mycar_controller_1 = require("./mycar.controller");
const mongoose_1 = require("@nestjs/mongoose");
const mycar_schema_1 = require("./schemas/mycar.schema");
let MyCarModule = class MyCarModule {
};
MyCarModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'MyCar', schema: mycar_schema_1.MyCarSchema }]),
        ],
        providers: [mycar_service_1.MyCarService],
        controllers: [mycar_controller_1.MyCarController],
        exports: [mycar_service_1.MyCarService, mongoose_1.MongooseModule],
    })
], MyCarModule);
exports.MyCarModule = MyCarModule;
//# sourceMappingURL=mycar.module.js.map