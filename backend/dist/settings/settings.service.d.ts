import { Model, Types } from 'mongoose';
import { Setting, SettingDocument } from './schemas/setting.schema';
import { CreateSettingDto } from './dto/create-setting.dto';
import { MyCarDocument } from '../mycar/schemas/mycar.schema';
export declare class SettingsService {
    private readonly settingModel;
    private readonly mycarModel;
    constructor(settingModel: Model<SettingDocument>, mycarModel: Model<MyCarDocument>);
    create(createSettingDto: CreateSettingDto): Promise<Setting>;
    deactivatePreviousSetting(mycarId: string | Types.ObjectId): Promise<void>;
    activateSetting(id: string): Promise<void>;
    findActive(mycarId: string): Promise<Setting[]>;
    findAllByMyCarId(mycarId: string): Promise<Setting[]>;
    findOne(id: string): Promise<Setting>;
    update(id: string, updateSettingDto: CreateSettingDto): Promise<void>;
    delete(id: string): Promise<void>;
    isUserRelatedToSetting(userId: string, settingId: string): Promise<boolean>;
}
