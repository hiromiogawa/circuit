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
