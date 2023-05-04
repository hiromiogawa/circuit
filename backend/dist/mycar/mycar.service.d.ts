import { Model } from 'mongoose';
import { CreateMyCarDto } from './dto/create-mycar.dto';
import { MyCar, MyCarDocument } from './schemas/mycar.schema';
export declare class MyCarService {
    private myCarModel;
    constructor(myCarModel: Model<MyCarDocument>);
    create(createMyCarDto: CreateMyCarDto, userId: string): Promise<MyCar>;
    findByUserId(userId: string): Promise<MyCar[]>;
    findOne(id: string): Promise<MyCar>;
    update(id: string, userId: string, updateMyCarDto: CreateMyCarDto): Promise<void>;
    updateImagePath(id: string, userId: string, imagePath: string): Promise<void>;
    delete(id: string, userId: string): Promise<void>;
    isUserRelatedToMyCar(userId: string, mycarId: string): Promise<boolean>;
}
