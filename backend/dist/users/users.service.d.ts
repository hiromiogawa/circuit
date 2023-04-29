/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CarDocument } from '../cars/schemas/car.schema';
import { MyCarService } from 'src/mycar/mycar.service';
export declare class UsersService {
    private readonly userModel;
    private carModel;
    private readonly myCarService;
    constructor(userModel: Model<UserDocument>, carModel: Model<CarDocument>, myCarService: MyCarService);
    users: CreateUserDto[];
    create(user: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, UserDocument> & Omit<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, UserDocument> & Omit<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    findOne(_id: string): Promise<import("mongoose").Document<unknown, {}, UserDocument> & Omit<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findByEmail(email: string): Promise<import("mongoose").Document<unknown, {}, UserDocument> & Omit<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    getMyCarsByUserId(userId: string): Promise<import("../mycar/schemas/mycar.schema").MyCar[]>;
    updateImagePath(id: string, imagePath: string): Promise<void>;
    updateUsername(_id: string, newUsername: string): Promise<User>;
    updatePassword(_id: string, newPassword: string): Promise<User>;
    updateEmail(_id: string, newEmail: string): Promise<User>;
    delete(_id: string): Promise<User>;
}
