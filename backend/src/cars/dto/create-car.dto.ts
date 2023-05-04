import { IsString, MinLength, IsNumber, MaxLength } from 'class-validator'

export class CreateCarDto {
  @IsString()
  @MinLength(1)
  readonly name: string
  @IsString()
  @MinLength(1)
  readonly modelName: string
  @IsString()
  @MinLength(1)
  readonly manufacturer: string
  @IsString()
  @MinLength(1)
  readonly drivetrains: string
  @IsNumber()
  @MinLength(3)
  @MaxLength(4)
  readonly displacement: number
}
