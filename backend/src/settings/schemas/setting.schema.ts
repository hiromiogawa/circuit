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

  @Prop({ default: '-' })
  airPressureFront: string

  @Prop({ default: '-' })
  airPressureRear: string

  @Prop({ default: '-' })
  springRateFront: string

  @Prop({ default: '-' })
  springRateRear: string

  @Prop({ default: '-' })
  rideHeightFront: string

  @Prop({ default: '-' })
  rideHeightRear: string

  @Prop({ default: '-' })
  damperAdjustmentFront: string

  @Prop({ default: '-' })
  damperAdjustmentRear: string

  @Prop({ default: '-' })
  camberAngleFront: string

  @Prop({ default: '-' })
  camberAngleRear: string

  @Prop({ default: '-' })
  rearSpoiler: string

  @Prop({ default: '-' })
  boostPressure: string

  @Prop({ default: '-' })
  tireSizeFront: string

  @Prop({ default: '-' })
  tireSizeRear: string

  @Prop({ default: '-' })
  toeAngleFront: string

  @Prop({ default: '-' })
  toeAngleRear: string
}

export const SettingSchema = SchemaFactory.createForClass(Setting)
export type SettingDocument = Setting & Document
