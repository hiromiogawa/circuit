import { SettingsService } from './settings.service';
import { MyCarService } from 'src/mycar/mycar.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { Setting } from './schemas/setting.schema';
export declare class SettingsController {
    private readonly settingsService;
    private readonly myCarsService;
    constructor(settingsService: SettingsService, myCarsService: MyCarService);
    create(req: any, mycarId: string, createSettingDto: CreateSettingDto): Promise<Setting>;
    findActive(mycarId: string): Promise<Setting[]>;
    activate(req: any, id: string): Promise<void>;
    findOne(id: string): Promise<Setting>;
    findAllByMyCarId(mycarId: string): Promise<Setting[]>;
    update(req: any, id: string, updateSettingDto: CreateSettingDto): Promise<void>;
    delete(req: any, id: string): Promise<void>;
}
