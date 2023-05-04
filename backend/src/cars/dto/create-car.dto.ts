import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsMongoId,
  Min,
  Max
} from 'class-validator'

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string
  @IsString()
  @IsNotEmpty()
  readonly modelName: string
  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  readonly manufacturer: string
  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  readonly drivetrains: string
  @IsNumber()
  @Min(99)
  @Max(9999)
  @IsNotEmpty()
  readonly displacement: number
}
