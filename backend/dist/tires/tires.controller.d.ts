import { TiresService } from './tires.service';
import { Tire } from './schemas/tire.schema';
import { CreateTireDto } from './dto/create-tire.dto';
export declare class TiresController {
    private readonly tiresService;
    constructor(tiresService: TiresService);
    create(createTireDto: CreateTireDto): Promise<Tire>;
    findAll(): Promise<Tire[]>;
    findOne(id: string): Promise<Tire>;
    update(id: string, updateTireDto: CreateTireDto): Promise<void>;
    delete(id: string): Promise<void>;
}
