import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Req,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
  UnauthorizedException
} from '@nestjs/common'
import { SettingsService } from './settings.service'
import { MyCarService } from 'src/mycar/mycar.service'
import { CreateSettingDto } from './dto/create-setting.dto'
import { Setting } from './schemas/setting.schema'
import { SessionGuard } from '../auth/session.guard'

@Controller('settings')
export class SettingsController {
  constructor(
    private readonly settingsService: SettingsService,
    private readonly myCarsService: MyCarService
  ) {}

  // settingの作成
  @Post('/mycar/:mycarId')
  @UseGuards(SessionGuard)
  @HttpCode(201)
  async create(
    @Req() req,
    @Param('mycarId') mycarId: string,
    @Body() createSettingDto: CreateSettingDto
  ): Promise<Setting> {
    const userId = req.session.user._id
    if (await this.myCarsService.isUserRelatedToMyCar(userId, mycarId)) {
      await this.settingsService.deactivatePreviousSetting(mycarId)
      return this.settingsService.create({ ...createSettingDto, mycarId })
    } else {
      throw new UnauthorizedException("You don't have access to this car.")
    }
  }

  // activeがtrueに設定されたデータを取得
  @Get('/active/mycar/:mycarId')
  async findActive(@Param('mycarId') mycarId: string): Promise<Setting[]> {
    return this.settingsService.findActive(mycarId)
  }

  // 指定したセッティングidのデータのactiveをtrueにする
  @Put(':id/activate')
  @UseGuards(SessionGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async activate(@Req() req, @Param('id') id: string): Promise<void> {
    const userId = req.session.user._id
    if (await this.settingsService.isUserRelatedToSetting(userId, id)) {
      const setting = await this.settingsService.findOne(id)
      await this.settingsService.deactivatePreviousSetting(setting.mycarId)
      await this.settingsService.activateSetting(id)
    } else {
      throw new UnauthorizedException("You don't have access to this setting.")
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Setting> {
    return this.settingsService.findOne(id)
  }

  // マイカー別セッティングの取得
  @Get('mycar/:mycarId')
  async findAllByMyCarId(
    @Param('mycarId') mycarId: string
  ): Promise<Setting[]> {
    return this.settingsService.findAllByMyCarId(mycarId)
  }

  @Put(':id')
  @UseGuards(SessionGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Req() req,
    @Param('id') id: string,
    @Body() updateSettingDto: CreateSettingDto
  ): Promise<void> {
    const userId = req.session.user._id
    if (await this.settingsService.isUserRelatedToSetting(userId, id)) {
      await this.settingsService.update(id, updateSettingDto)
    } else {
      throw new UnauthorizedException("You don't have access to this setting.")
    }
  }

  @Delete(':id')
  @UseGuards(SessionGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Req() req, @Param('id') id: string): Promise<void> {
    const userId = req.session.user._id
    if (await this.settingsService.isUserRelatedToSetting(userId, id)) {
      await this.settingsService.delete(id)
    } else {
      throw new UnauthorizedException("You don't have access to this setting.")
    }
  }
}
