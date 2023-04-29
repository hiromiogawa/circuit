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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schemas/user.schema");
const car_schema_1 = require("../cars/schemas/car.schema");
const bcrypt_1 = require("bcrypt");
const mycar_service_1 = require("../mycar/mycar.service");
let UsersService = class UsersService {
    constructor(userModel, carModel, myCarService) {
        this.userModel = userModel;
        this.carModel = carModel;
        this.myCarService = myCarService;
        this.users = [];
    }
    async create(user) {
        const hashedPassword = await (0, bcrypt_1.hash)(user.password, 10);
        const createdUser = new this.userModel({
            username: user.username,
            password: hashedPassword,
            email: user.email
        });
        return await createdUser.save();
    }
    async findAll() {
        return await this.userModel.find().exec();
    }
    async findOne(_id) {
        const user = await this.userModel.findById(_id).exec();
        if (!user) {
            throw new common_1.NotFoundException('Could not find user');
        }
        return user;
    }
    async findByEmail(email) {
        const user = await this.userModel
            .findOne({ email })
            .select('+password +email')
            .exec();
        if (!user) {
            throw new common_1.NotFoundException('Could not find user');
        }
        return user;
    }
    async getMyCarsByUserId(userId) {
        return this.myCarService.findByUserId(userId);
    }
    async updateImagePath(id, imagePath) {
        await this.userModel
            .updateOne({ _id: id }, { $set: { imagePath: imagePath } })
            .exec();
    }
    async updateUsername(_id, newUsername) {
        return await this.userModel
            .findOneAndUpdate({ _id }, { username: newUsername })
            .exec();
    }
    async updatePassword(_id, newPassword) {
        return await this.userModel
            .findOneAndUpdate({ _id }, { password: newPassword })
            .select('+password')
            .exec();
    }
    async updateEmail(_id, newEmail) {
        return await this.userModel
            .findOneAndUpdate({ _id }, { email: newEmail })
            .select('+email')
            .exec();
    }
    async delete(_id) {
        return await this.userModel.findOneAndDelete({ _id }).exec();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(car_schema_1.Car.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mycar_service_1.MyCarService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map