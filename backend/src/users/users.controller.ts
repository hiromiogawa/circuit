import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  ValidationPipe,
  UseGuards,
  HttpCode
} from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
import { SessionGuard } from '../auth/session.guard'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 新規登録
  @Post()
  @HttpCode(201)
  async create(@Body(ValidationPipe) createUser: CreateUserDto) {
    return await this.usersService.create(createUser)
  }

  // このまま使うのはまずいパスワード丸見え
  @Get('all')
  async findAll() {
    return await this.usersService.findAll()
  }

  @Get()
  @UseGuards(SessionGuard)
  async findMy(@Req() req) {
    const _id = req.session.user._id
    return await this.usersService.findOne(_id)
  }

  @Get(':id')
  async findOne(@Param('id') _id: string) {
    return await this.usersService.findOne(_id)
  }

  @Put('imagePath')
  @UseGuards(SessionGuard)
  @HttpCode(204)
  async updateImagePath(@Req() req, @Body('imagePath') imagePath: string) {
    const id = req.session.user._id
    await this.usersService.updateImagePath(id, imagePath)
  }

  // Update username
  @Put('update-name')
  @UseGuards(SessionGuard)
  @HttpCode(204)
  async updateUsername(@Req() req, @Body('username') newUsername: string) {
    const userId = req.user.id
    await this.usersService.updateUsername(userId, newUsername)
  }

  // Update password
  @Put('update-password')
  @UseGuards(SessionGuard)
  @HttpCode(204)
  async updatePassword(@Req() req, @Body('password') newPassword: string) {
    const _id = req.session.user._id
    await this.usersService.updatePassword(_id, newPassword)
  }

  // Update email
  @Put('update-email')
  @UseGuards(SessionGuard)
  @HttpCode(204) // 追加
  async updateEmail(@Req() req, @Body('email') newEmail: string) {
    const _id = req.session.user._id
    await this.usersService.updateEmail(_id, newEmail)
  }

  @Delete()
  @UseGuards(SessionGuard)
  @HttpCode(204) // 追加
  async delete(@Req() req) {
    const _id = req.session.user._id
    await this.usersService.delete(_id)
  }
}
