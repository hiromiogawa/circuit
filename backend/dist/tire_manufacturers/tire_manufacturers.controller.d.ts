import { TireManufacturersService } from './tire_manufacturers.service';
import { CreateTireManufacturerDto } from './dto/create-tire_manufacturer.dto';
import { TireManufacturer } from './schemas/tire_manufacturer.schema';
export declare class TireManufacturersController {
    private readonly TireManufacturersService;
    constructor(TireManufacturersService: TireManufacturersService);
    create(createTireManufacturerDto: CreateTireManufacturerDto): Promise<TireManufacturer>;
    findAll(): Promise<TireManufacturer[]>;
    findOne(id: string): Promise<TireManufacturer>;
    update(id: string, createTireManufacturerDto: CreateTireManufacturerDto): Promise<void>;
    delete(id: string): Promise<void>;
}
