import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginAttemptRequest, LoginAttemptResponse } from '../services/auth.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(loginAttemptRequest: LoginAttemptRequest): Promise<LoginAttemptResponse> {
        const user = await this.authService.validateUser(loginAttemptRequest);

        if (user.code != 200) {
            throw new UnauthorizedException();
        }

        return user;
    }

}
