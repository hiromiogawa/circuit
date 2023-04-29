import { DriveTrainsService } from './drivetrains.service';
import { CreateDriveTrainDto } from './dto/create-drivetrain.dto';
import { DriveTrain } from './schemas/drivetrain.schema';
export declare class DriveTrainsController {
    private readonly DriveTrainsService;
    constructor(DriveTrainsService: DriveTrainsService);
    create(createDriveTrainDto: CreateDriveTrainDto): Promise<DriveTrain>;
    findAll(): Promise<DriveTrain[]>;
    findOne(id: string): Promise<DriveTrain>;
    update(id: string, createDriveTrainDto: CreateDriveTrainDto): Promise<void>;
    delete(id: string): Promise<void>;
}
