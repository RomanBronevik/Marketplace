import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  handleRequest(err, user, info: Error) {
    if (err || info || !user) {
      throw err || info || new UnauthorizedException('Необходимо войти');
    }
    return user;
  }
}
