import { Model } from 'mongoose';
import { TireManufacturer, TireManufacturerDocument } from './schemas/tire_manufacturer.schema';
import { CreateTireManufacturerDto } from './dto/create-tire_manufacturer.dto';
export declare class TireManufacturersService {
    private readonly TireManufacturerModel;
    constructor(TireManufacturerModel: Model<TireManufacturerDocument>);
    create(createTireManufacturerDto: CreateTireManufacturerDto): Promise<TireManufacturer>;
    findAll(): Promise<TireManufacturer[]>;
    findOne(id: string): Promise<TireManufacturer>;
    update(id: string, createTireManufacturerDto: CreateTireManufacturerDto): Promise<void>;
    delete(id: string): Promise<void>;
}
