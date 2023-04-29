import { CarsService } from './cars.service';
import { Car } from './schemas/car.schema';
import { CreateCarDto } from './dto/create-car.dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    create(createCarDto: CreateCarDto): Promise<Car>;
    findAll(): Promise<Car[]>;
    findOne(carId: string): Promise<Car>;
    findByManufacturer(manufacturerId: string): Promise<Car[]>;
    findByDraiveTrain(driveTrainId: string): Promise<Car[]>;
    update(carId: string, updateCarDto: CreateCarDto): Promise<void>;
    delete(carId: string): Promise<void>;
}
