import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: 'chavesuperfoda123bettovcehfodamaseutocommuitosonopqp0318damanhaja', // A mesma chave do AuthModule
        });
    }

    async validate(payload: any) {
        const user = await this.authService.validateUser(payload.sub);
        
        if (user.code != 200) {
            throw new UnauthorizedException();
        }

        return user;
    }
}
