import { Model } from 'mongoose';
import { Manufacturer, ManufacturerDocument } from './schemas/manufacturer.schema';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
export declare class ManufacturersService {
    private readonly ManufacturerModel;
    constructor(ManufacturerModel: Model<ManufacturerDocument>);
    create(createManufacturerDto: CreateManufacturerDto): Promise<Manufacturer>;
    findAll(): Promise<Manufacturer[]>;
    findOne(id: string): Promise<Manufacturer>;
    update(id: string, createManufacturerDto: CreateManufacturerDto): Promise<void>;
    delete(id: string): Promise<void>;
}
