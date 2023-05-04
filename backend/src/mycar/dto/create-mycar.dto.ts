import { IsNotEmpty, IsString, IsMongoId } from 'class-validator'

export class CreateMyCarDto {
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  carId: string
}
