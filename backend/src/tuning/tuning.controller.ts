import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpStatus,
  HttpCode,
  Req,
  UseGuards,
  UnauthorizedException
} from '@nestjs/common'
import { CreateTuningDto } from './dto/create-tuning.dto'
import { TuningService } from './tuning.service'
import { MyCarService } from 'src/mycar/mycar.service'
import { Tuning } from './schemas/tuning.schema'
import { SessionGuard } from '../auth/session.guard'

@Controller('tuning')
export class TuningController {
  constructor(
    private readonly tuningService: TuningService,
    private readonly myCarsService: MyCarService
  ) {}

  @Post()
  @UseGuards(SessionGuard)
  @HttpCode(201)
  async create(
    @Req() req,
    @Body() createTuningDto: CreateTuningDto
  ): Promise<Tuning> {
    const userId = req.session.user._id
    const mycarId = createTuningDto.mycarId
    if (await this.myCarsService.isUserRelatedToMyCar(userId, mycarId)) {
      return this.tuningService.create(createTuningDto)
    } else {
      throw new UnauthorizedException("You don't have access to this car.")
    }
  }

  @Get(':id')
  @UseGuards(SessionGuard)
  async findOne(@Req() req, @Param('id') id: string): Promise<Tuning> {
    const user = req.session.user
    if (!(await this.tuningService.isUserRelatedToTuning(user._id, id))) {
      throw new UnauthorizedException()
    }
    return this.tuningService.findOne(id)
  }

  @Get('mycar/:mycarId')
  async findAllByMyCarId(@Param('mycarId') mycarId: string): Promise<Tuning[]> {
    return this.tuningService.findAllByMyCarId(mycarId)
  }

  @Put(':id')
  @UseGuards(SessionGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Req() req,
    @Param('id') id: string,
    @Body() updateTuningDto: CreateTuningDto
  ): Promise<void> {
    const userId = req.session.user._id

    if (await this.tuningService.isUserRelatedToTuning(userId, id)) {
      await this.tuningService.update(id, updateTuningDto)
    } else {
      throw new UnauthorizedException()
    }
  }

  @Delete(':id')
  @UseGuards(SessionGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Req() req, @Param('id') id: string): Promise<void> {
    const userId = req.session.user._id
    if (await this.tuningService.isUserRelatedToTuning(userId, id)) {
      throw new UnauthorizedException()
    } else {
    }
    await this.tuningService.delete(id)
  }
}
