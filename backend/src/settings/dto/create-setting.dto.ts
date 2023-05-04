import {
  IsString,
  IsNumber,
  MinLength,
  IsNotEmpty,
  IsMongoId,
  IsOptional,
  Min,
  Max
} from 'class-validator'

export class CreateSettingDto {
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  @IsMongoId()
  readonly mycarId: string
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  @IsMongoId()
  readonly tireId: string
  @IsNotEmpty()
  readonly active: boolean = true
  @IsOptional()
  @IsNumber()
  readonly airPressureFrontLeft: number
  @IsOptional()
  @IsNumber()
  readonly airPressureFrontRight: number
  @IsOptional()
  @IsNumber()
  readonly airPressureRearLeft: number
  @IsOptional()
  @IsNumber()
  readonly airPressureRearRight: number
  @IsOptional()
  @IsNumber()
  readonly springRateFront: number
  @IsOptional()
  @IsNumber()
  readonly springRateRear: number
  @IsOptional()
  @IsNumber()
  readonly rideHeightFront: number
  @IsOptional()
  @IsNumber()
  readonly rideHeightRear: number
  @IsOptional()
  @IsNumber()
  readonly damperAdjustmentFront: number
  @IsOptional()
  @IsNumber()
  readonly damperAdjustmentRear: number
  @IsOptional()
  @IsNumber()
  readonly camberAngleFront: number
  @IsOptional()
  @IsNumber()
  readonly camberAngleRear: number
  @IsOptional()
  @IsString()
  readonly rearSpoiler: string
  @IsOptional()
  @IsNumber()
  readonly boostPressure: number
  @IsOptional()
  @IsString()
  readonly tireSizeFront: string
  @IsOptional()
  @IsString()
  readonly tireSizeRear: string
  @IsOptional()
  @IsNumber()
  readonly toeAngleFront: number
  @IsOptional()
  @IsNumber()
  readonly toeAngleRear: number
  @IsString()
  @IsOptional()
  readonly freeText: string
}
