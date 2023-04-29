import { Model } from 'mongoose';
import { DriveTrain, DriveTrainDocument } from './schemas/drivetrain.schema';
import { CreateDriveTrainDto } from './dto/create-drivetrain.dto';
export declare class DriveTrainsService {
    private readonly driveTrainModel;
    constructor(driveTrainModel: Model<DriveTrainDocument>);
    create(createDriveTrainDto: CreateDriveTrainDto): Promise<DriveTrain>;
    findAll(): Promise<DriveTrain[]>;
    findOne(id: string): Promise<DriveTrain>;
    update(id: string, createDriveTrainDto: CreateDriveTrainDto): Promise<void>;
    delete(id: string): Promise<void>;
}
