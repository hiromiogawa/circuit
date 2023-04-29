import { CreateTuningDto } from './dto/create-tuning.dto';
import { TuningService } from './tuning.service';
import { MyCarService } from 'src/mycar/mycar.service';
import { Tuning } from './schemas/tuning.schema';
export declare class TuningController {
    private readonly tuningService;
    private readonly myCarsService;
    constructor(tuningService: TuningService, myCarsService: MyCarService);
    create(req: any, createTuningDto: CreateTuningDto): Promise<Tuning>;
    findOne(req: any, id: string): Promise<Tuning>;
    findAllByMyCarId(mycarId: string): Promise<Tuning[]>;
    update(req: any, id: string, updateTuningDto: CreateTuningDto): Promise<void>;
    delete(req: any, id: string): Promise<void>;
}
