import { ManufacturersService } from './manufacturers.service';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { Manufacturer } from './schemas/manufacturer.schema';
export declare class ManufacturersController {
    private readonly ManufacturersService;
    constructor(ManufacturersService: ManufacturersService);
    create(createManufacturerDto: CreateManufacturerDto): Promise<Manufacturer>;
    findAll(): Promise<Manufacturer[]>;
    findOne(id: string): Promise<Manufacturer>;
    update(id: string, createManufacturerDto: CreateManufacturerDto): Promise<void>;
    delete(id: string): Promise<void>;
}
