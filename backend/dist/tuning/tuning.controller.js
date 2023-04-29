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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TuningController = void 0;
const common_1 = require("@nestjs/common");
const create_tuning_dto_1 = require("./dto/create-tuning.dto");
const tuning_service_1 = require("./tuning.service");
const mycar_service_1 = require("../mycar/mycar.service");
const session_guard_1 = require("../auth/session.guard");
let TuningController = class TuningController {
    constructor(tuningService, myCarsService) {
        this.tuningService = tuningService;
        this.myCarsService = myCarsService;
    }
    async create(req, createTuningDto) {
        const userId = req.session.user._id;
        const mycarId = createTuningDto.mycarId;
        if (await this.myCarsService.isUserRelatedToMyCar(userId, mycarId)) {
            return this.tuningService.create(createTuningDto);
        }
        else {
            throw new common_1.UnauthorizedException("You don't have access to this car.");
        }
    }
    async findOne(req, id) {
        const user = req.session.user;
        if (!(await this.tuningService.isUserRelatedToTuning(user._id, id))) {
            throw new common_1.UnauthorizedException();
        }
        return this.tuningService.findOne(id);
    }
    async findAllByMyCarId(mycarId) {
        return this.tuningService.findAllByMyCarId(mycarId);
    }
    async update(req, id, updateTuningDto) {
        const userId = req.session.user._id;
        if (await this.tuningService.isUserRelatedToTuning(userId, id)) {
            await this.tuningService.update(id, updateTuningDto);
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
    async delete(req, id) {
        const userId = req.session.user._id;
        if (await this.tuningService.isUserRelatedToTuning(userId, id)) {
            throw new common_1.UnauthorizedException();
        }
        else {
        }
        await this.tuningService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_tuning_dto_1.CreateTuningDto]),
    __metadata("design:returntype", Promise)
], TuningController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TuningController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('mycar/:mycarId'),
    __param(0, (0, common_1.Param)('mycarId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TuningController.prototype, "findAllByMyCarId", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_tuning_dto_1.CreateTuningDto]),
    __metadata("design:returntype", Promise)
], TuningController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TuningController.prototype, "delete", null);
TuningController = __decorate([
    (0, common_1.Controller)('tuning'),
    __metadata("design:paramtypes", [tuning_service_1.TuningService,
        mycar_service_1.MyCarService])
], TuningController);
exports.TuningController = TuningController;
//# sourceMappingURL=tuning.controller.js.map