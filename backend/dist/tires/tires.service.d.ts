import { Model } from 'mongoose';
import { Tire, TireDocument } from './schemas/tire.schema';
import { CreateTireDto } from './dto/create-tire.dto';
export declare class TiresService {
    private readonly tireModel;
    constructor(tireModel: Model<TireDocument>);
    create(createTireDto: CreateTireDto): Promise<Tire>;
    findAll(): Promise<Tire[]>;
    findOne(id: string): Promise<Tire>;
    update(id: string, updateTireDto: CreateTireDto): Promise<void>;
    delete(id: string): Promise<void>;
}
