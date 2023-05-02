import { IsString, MinLength, IsNotEmpty } from 'class-validator'

export class CreateSettingDto {
  @IsString()
  @MinLength(1)
  readonly mycarId: string
  @IsString()
  @MinLength(1)
  readonly tireId: string
  @IsString()
  @MinLength(1)
  readonly freeText: string
  @IsNotEmpty()
  readonly active: boolean = true
  @IsString()
  readonly airPressureFrontLeft: string
  @IsString()
  readonly airPressureFrontRight: string
  @IsString()
  readonly airPressureRearLeft: string
  @IsString()
  readonly airPressureRearRight: string
  @IsString()
  readonly springRateFront: string
  @IsString()
  readonly springRateRear: string
  @IsString()
  readonly rideHeightFront: string
  @IsString()
  readonly rideHeightRear: string
  @IsString()
  readonly damperAdjustmentFront: string
  @IsString()
  readonly damperAdjustmentRear: string
  @IsString()
  readonly camberAngleFront: string
  @IsString()
  readonly camberAngleRear: string
  @IsString()
  readonly rearSpoiler: string
  @IsString()
  readonly boostPressure: string
  @IsString()
  readonly tireSizeFront: string
  @IsString()
  readonly tireSizeRear: string
  @IsString()
  readonly toeAngleFront: string
  @IsString()
  readonly toeAngleRear: string
}
