import { MyCarService } from './mycar.service';
import { CreateMyCarDto } from './dto/create-mycar.dto';
import { MyCar } from './schemas/mycar.schema';
export declare class MyCarController {
    private readonly myCarService;
    constructor(myCarService: MyCarService);
    create(req: any, createMyCarDto: CreateMyCarDto): Promise<MyCar>;
    findMyCars(req: any): Promise<MyCar[]>;
    updateImagePath(req: any, id: string, imagePath: string): Promise<void>;
    findByUserId(userId: string): Promise<MyCar[]>;
    findOne(id: string): Promise<MyCar>;
    update(req: any, id: string, updateMyCarDto: CreateMyCarDto): Promise<void>;
    delete(req: any, id: string): Promise<void>;
}
