import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    const data = this.authService.signup(dto);
    return data;
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    const data = this.authService.signin(dto);
    return data;
  }
}
