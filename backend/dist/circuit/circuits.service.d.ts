import { Model } from 'mongoose';
import { CreateCircuitDto, UpdateCircuitDto } from './dto/create-circuit.dto';
import { Circuit, CircuitDocument } from './schemas/circuit.schema';
export declare class CircuitsService {
    private readonly circuitModel;
    constructor(circuitModel: Model<CircuitDocument>);
    create(createCircuitDto: CreateCircuitDto): Promise<Circuit>;
    findAll(): Promise<Circuit[]>;
    findOne(id: string): Promise<Circuit>;
    update(id: string, updateCircuitDto: UpdateCircuitDto): Promise<void>;
    delete(id: string): Promise<void>;
}
