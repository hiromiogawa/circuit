// setting.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { Tire } from '../../tires/schemas/tire.schema'
import { MyCar } from '../../mycar/schemas/mycar.schema'

@Schema()
export class Setting extends Document {
  @Prop({ required: true, type: Types.ObjectId, ref: MyCar.name })
  mycarId: Types.ObjectId

  @Prop({ required: true, type: Types.ObjectId, ref: Tire.name })
  tireId: Types.ObjectId

  @Prop()
  freeText: string

  @Prop({ default: true })
  active: boolean

  @Prop()
  airPressureFrontLeft: number

  @Prop()
  airPressureFrontRight: number

  @Prop()
  airPressureRearLeft: number

  @Prop()
  airPressureRearRight: number

  @Prop()
  springRateFront: number

  @Prop()
  springRateRear: number

  @Prop()
  rideHeightFront: number

  @Prop()
  rideHeightRear: number

  @Prop()
  damperAdjustmentFront: number

  @Prop()
  damperAdjustmentRear: number

  @Prop()
  camberAngleFront: number

  @Prop()
  camberAngleRear: number

  @Prop()
  rearSpoiler: string

  @Prop()
  boostPressure: number

  @Prop()
  tireSizeFront: string

  @Prop()
  tireSizeRear: string

  @Prop()
  toeAngleFront: number

  @Prop()
  toeAngleRear: number
}

export const SettingSchema = SchemaFactory.createForClass(Setting)
export type SettingDocument = Setting & Document
