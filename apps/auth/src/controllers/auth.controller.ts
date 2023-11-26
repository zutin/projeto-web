import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity, LoginAttemptRequest} from '../services/auth.dto';

@Controller('auth')

@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() LoginAttemptRequest: LoginAttemptRequest) {
    return this.authService.login(LoginAttemptRequest);
  }
}