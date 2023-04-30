import MyCar from '@/pages/mycar/[mycarId]'

export type UserType = {
  _id: string
  username: string
  email?: string
  password?: string
  imagePath: string
}

export type ManufacturerType = {
  _id: string
  name: string
}

type DrivetrainType = {
  _id: string
  system: string
}

export type CarType = {
  _id: string
  name: string
  modelName: string
  manufacturer: ManufacturerType
  drivetrains: DrivetrainType
  displacement: number
}

export type MyCarType = {
  carId: CarType['_id']
  userId: UserType['_id']
  _id: string
  imagePath: string
}
