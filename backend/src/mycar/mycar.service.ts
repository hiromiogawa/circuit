import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateMyCarDto } from './dto/create-mycar.dto'
import { MyCar, MyCarDocument } from './schemas/mycar.schema'

@Injectable()
export class MyCarService {
  constructor(
    @InjectModel(MyCar.name) private myCarModel: Model<MyCarDocument>
  ) {}

  async create(createMyCarDto: CreateMyCarDto, userId: string): Promise<MyCar> {
    const myCarData = {
      ...createMyCarDto,
      userId
    }
    const newMyCar = new this.myCarModel(myCarData)
    return newMyCar.save()
  }

  async findByUserId(userId: string): Promise<MyCar[]> {
    return this.myCarModel
      .find({ userId })
      .populate({ path: 'carId' })
      .populate({ path: 'userId' })
      .exec()
  }

  async findOne(id: string): Promise<MyCar> {
    return this.myCarModel
      .findById(id)
      .populate({
        path: 'carId',
        populate: [{ path: 'manufacturer' }, { path: 'drivetrains' }]
      })
      .populate({ path: 'userId' })
      .exec()
  }

  async update(
    id: string,
    userId: string,
    updateMyCarDto: CreateMyCarDto
  ): Promise<void> {
    const updatedMyCar = await this.myCarModel
      .findOneAndUpdate({ _id: id, userId }, updateMyCarDto)
      .exec()
    if (!updatedMyCar) {
      throw new NotFoundException('Could not find mycar')
    }
  }

  async updateImagePath(
    id: string,
    userId: string,
    imagePath: string
  ): Promise<void> {
    await this.myCarModel
      .updateOne(
        { _id: id, userId: userId },
        { $set: { imagePath: imagePath } }
      )
      .exec()
  }

  async delete(id: string, userId: string): Promise<void> {
    const deletedMyCar = await this.myCarModel
      .findOneAndDelete({ _id: id, userId })
      .exec()
    if (!deletedMyCar) {
      throw new NotFoundException('Could not find mycar')
    }
  }

  // myCarIDに対しセッションから取得したuserIdに対しリレーションされているデータかどうか判別
  async isUserRelatedToMyCar(
    userId: string,
    mycarId: string
  ): Promise<boolean> {
    const mycar = await this.myCarModel.findOne({ _id: mycarId }).exec()

    if (mycar.userId && mycar.userId.toString() === userId) {
      return true
    } else {
      return false
    }
  }
}
