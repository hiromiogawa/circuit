import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  UnauthorizedException
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { SessionGuard } from './session.guard'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Request() req) {
    const loginUser = req.body
    const user = await this.authService.login(loginUser, req)
    if (user) {
      req.session.user = user.user
      return user
    } else {
      throw new UnauthorizedException('Invalid email or password')
    }
  }

  @UseGuards(SessionGuard)
  @Post('logout')
  async logout(@Request() req) {
    req.session.destroy((err) => {
      if (err) {
        throw err
      }
    })
    return { message: 'Logged out successfully' }
  }

  @Get('check-auth')
  @UseGuards(SessionGuard)
  checkAuth(@Request() req) {
    return { isAuthenticated: true, user: req.session.user }
  }
}
