import { Model } from 'mongoose';
import { CreateTuningDto } from './dto/create-tuning.dto';
import { Tuning, TuningDocument } from './schemas/tuning.schema';
import { MyCarDocument } from '../mycar/schemas/mycar.schema';
export declare class TuningService {
    private tuningModel;
    private mycarModel;
    constructor(tuningModel: Model<TuningDocument>, mycarModel: Model<MyCarDocument>);
    create(createTuningDto: CreateTuningDto): Promise<Tuning>;
    findAllByMyCarId(mycarId: string): Promise<Tuning[]>;
    findOne(id: string): Promise<Tuning>;
    update(id: string, updateTuningDto: CreateTuningDto): Promise<void>;
    delete(id: string): Promise<void>;
    isUserRelatedToTuning(userId: string, tuningId: string): Promise<boolean>;
}
