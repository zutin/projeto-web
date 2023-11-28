import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { ApiOkResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthEntity, LoginAttemptRequest} from '../services/auth.dto';
import { AuthUserUseCase } from '../../usecases/authUser/authUser.useCase';
import { AuthUserRequest } from '../../usecases/authUser/authUser.dto';
import { JwtAuthGuard } from '../configuration/jwt-auth.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly authUserUseCase: AuthUserUseCase
    ) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  async login(@Body() loginAttemptRequest: LoginAttemptRequest) {
    return this.authService.login(loginAttemptRequest);
  }

  @Post('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async me(@Body() authUserRequest: AuthUserRequest) {
    return this.authUserUseCase.execute(authUserRequest);
  }
}