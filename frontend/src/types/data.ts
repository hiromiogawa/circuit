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

export type DrivetrainType = {
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
  carId: CarType
  userId: UserType
  _id: string
  imagePath: string
}

export type TireManufacturerType = {
  _id: string
  name: string
}

export type TireType = {
  _id: string
  name: string
  manufacturer: TireManufacturerType
}

export type SettingType = {
  _id: string
  mycarId: MyCarType
  tireId: TireType
  airPressureFrontLeft: number | null
  airPressureFrontRight: number | null
  airPressureRearLeft: number | null
  airPressureRearRight: number | null
  springRateFront: number | null
  springRateRear: number | null
  rideHeightFront: number | null
  rideHeightRear: number | null
  damperAdjustmentFront: number | null
  damperAdjustmentRear: number | null
  camberAngleFront: number | null
  camberAngleRear: number | null
  rearSpoiler: string
  boostPressure: number | null
  tireSizeFront: string
  tireSizeRear: string
  toeAngleFront: number | null
  toeAngleRear: number | null
  freeText: string
  active: boolean
}
