import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const user = request.session.user

    if (!user) {
      return false
    }

    return user._id === process.env.ADMIN_ID
  }
}
