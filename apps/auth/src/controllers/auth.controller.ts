import { Controller, Post, Get } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from '../configuration/local.guard';
import { JwtAuthGuard } from '../configuration/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.validateUser(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // @Post('login')
  // @HttpCode(200)
  // async login(@Body() loginAttemptRequest: LoginAttemptRequest) {
  //   try {
  //     const result = await this.authService.validateUser(loginAttemptRequest);
      
  //     if (result.code != 200) {
  //       return result;
  //     }

  //     const token = await this.authService.login(result.user);

  //     return { ...result, token };
  //   } catch (error) {
  //     return { code: 500, message: 'Internal Server Error' };
  //   }
  // }
}
