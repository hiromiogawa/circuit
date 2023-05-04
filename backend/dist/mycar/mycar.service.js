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
exports.MyCarService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mycar_schema_1 = require("./schemas/mycar.schema");
let MyCarService = class MyCarService {
    constructor(myCarModel) {
        this.myCarModel = myCarModel;
    }
    async create(createMyCarDto, userId) {
        const myCarData = Object.assign(Object.assign({}, createMyCarDto), { userId });
        const newMyCar = new this.myCarModel(myCarData);
        return newMyCar.save();
    }
    async findByUserId(userId) {
        return this.myCarModel
            .find({ userId })
            .populate({ path: 'carId' })
            .populate({ path: 'userId' })
            .exec();
    }
    async findOne(id) {
        return this.myCarModel
            .findById(id)
            .populate({
            path: 'carId',
            populate: [{ path: 'manufacturer' }, { path: 'drivetrains' }]
        })
            .populate({ path: 'userId' })
            .exec();
    }
    async update(id, userId, updateMyCarDto) {
        const updatedMyCar = await this.myCarModel
            .findOneAndUpdate({ _id: id, userId }, updateMyCarDto)
            .exec();
        if (!updatedMyCar) {
            throw new common_1.NotFoundException('Could not find mycar');
        }
    }
    async updateImagePath(id, userId, imagePath) {
        await this.myCarModel
            .updateOne({ _id: id, userId: userId }, { $set: { imagePath: imagePath } })
            .exec();
    }
    async delete(id, userId) {
        const deletedMyCar = await this.myCarModel
            .findOneAndDelete({ _id: id, userId })
            .exec();
        if (!deletedMyCar) {
            throw new common_1.NotFoundException('Could not find mycar');
        }
    }
    async isUserRelatedToMyCar(userId, mycarId) {
        const mycar = await this.myCarModel.findOne({ _id: mycarId }).exec();
        if (mycar.userId && mycar.userId.toString() === userId) {
            return true;
        }
        else {
            return false;
        }
    }
};
MyCarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(mycar_schema_1.MyCar.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MyCarService);
exports.MyCarService = MyCarService;
//# sourceMappingURL=mycar.service.js.map