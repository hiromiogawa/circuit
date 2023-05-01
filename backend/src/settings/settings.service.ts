import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { Setting, SettingDocument } from './schemas/setting.schema'
import { CreateSettingDto } from './dto/create-setting.dto'
import { MyCar, MyCarDocument } from '../mycar/schemas/mycar.schema'

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel(Setting.name)
    private readonly settingModel: Model<SettingDocument>,
    @InjectModel(MyCar.name)
    private readonly mycarModel: Model<MyCarDocument>
  ) {}

  // セッティングデータの作成
  async create(createSettingDto: CreateSettingDto): Promise<Setting> {
    const createdSetting = new this.settingModel(createSettingDto)
    return createdSetting.save()
  }

  // activeの値をfalseにする
  async deactivatePreviousSetting(
    mycarId: string | Types.ObjectId
  ): Promise<void> {
    await this.settingModel.updateMany(
      { mycarId, active: true },
      { $set: { active: false } }
    )
  }

  // 特定のデータのactiveをtrueにする
  async activateSetting(id: string): Promise<void> {
    const setting = await this.settingModel.findById(id)
    if (setting) {
      await this.settingModel.updateMany(
        { mycarId: setting.mycarId, active: true },
        { $set: { active: false } }
      )
      setting.active = true
      await setting.save()
    } else {
      throw new NotFoundException('Setting not found')
    }
  }

  // mycarIdに関連するactiveがtrueのデータを取得する
  async findActive(mycarId: string): Promise<Setting[]> {
    return this.settingModel
      .find({ mycarId, active: true })
      .populate({
        path: 'mycarId'
      })
      .populate({
        path: 'tireId',
        populate: [{ path: 'manufacturer' }]
      })
      .exec()
  }

  async findAllByMyCarId(mycarId: string): Promise<Setting[]> {
    return await this.settingModel.find({ mycarId }).exec()
  }

  async findOne(id: string): Promise<Setting> {
    const setting = await this.settingModel
      .findById(id)
      .populate({
        path: 'mycarId',
        populate: [{ path: 'userId' }, { path: 'carId' }]
      })
      .populate({
        path: 'tireId',
        populate: [{ path: 'manufacturer' }]
      })
      .exec()
    if (!setting) {
      throw new NotFoundException('Setting not found')
    }
    return setting
  }

  async update(
    id: string,
    updateSettingDto: CreateSettingDto
  ): Promise<Setting> {
    const updatedSetting = await this.settingModel
      .findByIdAndUpdate(id, updateSettingDto, { new: true })
      .exec()
    if (!updatedSetting) {
      throw new NotFoundException('Setting not found')
    }
    return updatedSetting
  }

  async delete(id: string): Promise<void> {
    const deletedSetting = await this.settingModel.findByIdAndDelete(id).exec()
    if (!deletedSetting) {
      throw new NotFoundException('Setting not found')
    }
  }

  async isUserRelatedToSetting(
    userId: string,
    settingId: string
  ): Promise<boolean> {
    const setting = await this.settingModel.findById(settingId).exec()
    const mycar = await this.mycarModel
      .findOne({ userId, _id: setting.mycarId })
      .exec()
    return !!mycar
  }
}
