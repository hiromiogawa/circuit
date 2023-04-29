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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt_1 = require("bcrypt");
let AuthService = class AuthService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async validateUser(email, password) {
        const foundUser = await this.usersService.findByEmail(email);
        if (foundUser && (await (0, bcrypt_1.compare)(password, foundUser.password))) {
            return true;
        }
        else {
            return false;
        }
    }
    async login(loginUser, req) {
        const foundUser = await this.usersService.findByEmail(loginUser.email);
        if (await this.validateUser(loginUser.email, loginUser.password)) {
            return {
                user: {
                    _id: foundUser._id,
                    username: foundUser.username,
                    imagePath: foundUser.imagePath
                }
            };
        }
        else {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map