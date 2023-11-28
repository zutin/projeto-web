import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtSecret } from '../auth.module';
import { PrismaService } from '@/libs/utils/database/PrismaService';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtSecret,
        });
    }

    async validate(payload: { userId: string }) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: payload.userId,
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true,
                email: true,
                status: true,
                pfp: true,
                createdAt: true,
                updatedAt: true,
                deletedAt: true,
            }
        });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return user;
    }

}