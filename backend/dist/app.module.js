"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const cars_module_1 = require("./cars/cars.module");
const tires_module_1 = require("./tires/tires.module");
const tire_manufacturers_module_1 = require("./tire_manufacturers/tire_manufacturers.module");
const circuits_module_1 = require("./circuit/circuits.module");
const tuning_module_1 = require("./tuning/tuning.module");
const settings_module_1 = require("./settings/settings.module");
const upload_module_1 = require("./upload/upload.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                ignoreEnvFile: false,
                envFilePath: '.env.local'
            }),
            users_module_1.UsersModule,
            mongoose_1.MongooseModule.forRoot(process.env.DATABASE_URL),
            auth_module_1.AuthModule,
            cars_module_1.CarsModule,
            tires_module_1.TiresModule,
            tire_manufacturers_module_1.TireManufacturersModule,
            circuits_module_1.CircuitsModule,
            tuning_module_1.TuningModule,
            settings_module_1.SettingsModule,
            upload_module_1.UploadModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map