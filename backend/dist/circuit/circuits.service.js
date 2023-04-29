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
exports.CircuitsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const circuit_schema_1 = require("./schemas/circuit.schema");
let CircuitsService = class CircuitsService {
    constructor(circuitModel) {
        this.circuitModel = circuitModel;
    }
    async create(createCircuitDto) {
        const createdCircuit = new this.circuitModel(createCircuitDto);
        return createdCircuit.save();
    }
    async findAll() {
        return this.circuitModel.find().exec();
    }
    async findOne(id) {
        return this.circuitModel.findById(id).exec();
    }
    async update(id, updateCircuitDto) {
        const updatedCircuit = await this.circuitModel
            .findByIdAndUpdate(id, updateCircuitDto, { new: true })
            .exec();
        if (!updatedCircuit) {
            throw new common_1.NotFoundException('Could not find circuit');
        }
    }
    async delete(id) {
        const deletedCircuit = await this.circuitModel.findByIdAndDelete(id).exec();
        if (!deletedCircuit) {
            throw new common_1.NotFoundException('Could not find circuit');
        }
    }
};
CircuitsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(circuit_schema_1.Circuit.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CircuitsService);
exports.CircuitsService = CircuitsService;
//# sourceMappingURL=circuits.service.js.map