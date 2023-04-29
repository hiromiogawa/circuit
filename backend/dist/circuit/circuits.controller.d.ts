import { CreateCircuitDto, UpdateCircuitDto } from './dto/create-circuit.dto';
import { CircuitsService } from './circuits.service';
import { Circuit } from './schemas/circuit.schema';
export declare class CircuitsController {
    private readonly circuitsService;
    constructor(circuitsService: CircuitsService);
    create(createCircuitDto: CreateCircuitDto): Promise<Circuit>;
    findAll(): Promise<Circuit[]>;
    findOne(id: string): Promise<Circuit>;
    update(id: string, updateCircuitDto: UpdateCircuitDto): Promise<void>;
    delete(id: string): Promise<void>;
}
