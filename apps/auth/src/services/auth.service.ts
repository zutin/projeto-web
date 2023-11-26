import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity, LoginAttemptRequest } from './auth.dto';

@Injectable()

export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) {}

    async login(loginAttemptRequest: LoginAttemptRequest): Promise<AuthEntity> {
        const user = await this.prisma.user.findUnique({ where: { username: loginAttemptRequest.username } });

        if (!user) {
            throw new NotFoundException(`No user with username '${loginAttemptRequest.username}' found.`);
        }

        const isPasswordValid = user.password === loginAttemptRequest.password;

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return {
            token: this.jwtService.sign({ userId: user.id }),
        };
    }
}