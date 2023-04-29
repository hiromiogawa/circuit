import { Model } from 'mongoose';
import { Car, CarDocument } from './schemas/car.schema';
import { CreateCarDto } from './dto/create-car.dto';
import { Manufacturer } from '../manufacturers/schemas/manufacturer.schema';
import { DriveTrain } from '../drivetrains/schemas/drivetrain.schema';
export declare class CarsService {
    private carModel;
    private readonly ManufacturerModel;
    private readonly driveTrainModel;
    constructor(carModel: Model<CarDocument>, ManufacturerModel: Model<Manufacturer>, driveTrainModel: Model<DriveTrain>);
    create(createCarDto: CreateCarDto): Promise<Car>;
    findAll(): Promise<Car[]>;
    findOne(carId: string): Promise<Car>;
    update(carId: string, updateCarDto: CreateCarDto): Promise<void>;
    delete(carId: string): Promise<void>;
    findByManufacturer(manufacturerId: string): Promise<Car[]>;
    findByDraiveTrain(driveTrainId: string): Promise<Car[]>;
}
