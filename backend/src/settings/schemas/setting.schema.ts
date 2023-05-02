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
  airPressureFrontLeft: string

  @Prop()
  airPressureFrontRight: string

  @Prop()
  airPressureRearLeft: string

  @Prop()
  airPressureRearRight: string

  @Prop()
  springRateFront: string

  @Prop()
  springRateRear: string

  @Prop()
  rideHeightFront: string

  @Prop()
  rideHeightRear: string

  @Prop()
  damperAdjustmentFront: string

  @Prop()
  damperAdjustmentRear: string

  @Prop()
  camberAngleFront: string

  @Prop()
  camberAngleRear: string

  @Prop()
  rearSpoiler: string

  @Prop()
  boostPressure: string

  @Prop()
  tireSizeFront: string

  @Prop()
  tireSizeRear: string

  @Prop()
  toeAngleFront: string

  @Prop()
  toeAngleRear: string
}

export const SettingSchema = SchemaFactory.createForClass(Setting)
export type SettingDocument = Setting & Document
