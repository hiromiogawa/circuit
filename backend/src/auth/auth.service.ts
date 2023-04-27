import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import { compare } from 'bcrypt'
import { LoginUserDto } from './dto/login-user.dto'

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, password: string) {
    // ユーザーを検索 (emailで検索)
    const foundUser = await this.usersService.findByEmail(email)
    // ユーザーが存在し、パスワードが一致する場合
    if (foundUser && (await compare(password, foundUser.password))) {
      return true
    } else {
      return false
    }
  }

  async login(loginUser: LoginUserDto, req: any) {
    // ユーザーを検索 (emailで検索)
    const foundUser = await this.usersService.findByEmail(loginUser.email)

    // ユーザーが存在し、パスワードが一致する場合
    if (await this.validateUser(loginUser.email, loginUser.password)) {
      return {
        user: {
          _id: foundUser._id,
          username: foundUser.username
        }
      }
    } else {
      // ユーザーが存在しないか、パスワードが一致しない場合はエラーをスロー
      throw new UnauthorizedException('Invalid email or password')
    }
  }
}
