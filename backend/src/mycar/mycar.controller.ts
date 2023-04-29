import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
  Put,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus
} from '@nestjs/common'
import { MyCarService } from './mycar.service'
import { CreateMyCarDto } from './dto/create-mycar.dto'
import { MyCar } from './schemas/mycar.schema'
import { SessionGuard } from '../auth/session.guard'

@Controller('mycar')
export class MyCarController {
  constructor(private readonly myCarService: MyCarService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(SessionGuard)
  async create(
    @Req() req,
    @Body() createMyCarDto: CreateMyCarDto
  ): Promise<MyCar> {
    const userId = req.session.user._id
    createMyCarDto.userId = userId
    return this.myCarService.create(createMyCarDto)
  }

  @Get()
  @UseGuards(SessionGuard)
  async findMyCars(@Req() req): Promise<MyCar[]> {
    const userId = req.session.user._id
    return this.myCarService.findByUserId(userId)
  }

  @Put(':id/imagePath')
  @UseGuards(SessionGuard)
  @HttpCode(204)
  async updateImagePath(
    @Req() req,
    @Param('id') id: string,
    @Body('imagePath') imagePath: string
  ) {
    const userId = req.session.user._id
    const isRelated = await this.myCarService.isUserRelatedToMyCar(userId, id)

    if (isRelated) {
      await this.myCarService.updateImagePath(id, userId, imagePath)
    } else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }

  @Get('user/:id')
  async findByUserId(@Param('id') userId: string): Promise<MyCar[]> {
    return this.myCarService.findByUserId(userId)
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MyCar> {
    return this.myCarService.findOne(id)
  }

  @Put(':id')
  @UseGuards(SessionGuard)
  @HttpCode(204)
  async update(
    @Req() req,
    @Param('id') id: string,
    @Body() updateMyCarDto: CreateMyCarDto
  ) {
    const userId = req.session.user._id
    await this.myCarService.update(id, userId, updateMyCarDto)
  }

  @Delete(':id')
  @UseGuards(SessionGuard)
  @HttpCode(204)
  async delete(@Req() req, @Param('id') id: string) {
    const userId = req.session.user._id
    await this.myCarService.delete(id, userId)
  }
}
