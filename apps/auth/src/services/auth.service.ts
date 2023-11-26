import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity, LoginAttemptRequest } from './auth.dto';

@Injectable()

export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) {}

    async login(loginAttemptRequest: LoginAttemptRequest): Promise<AuthEntity> {
        // Step 1: Fetch a user with the given email
        const user = await this.prisma.user.findUnique({ where: { username: loginAttemptRequest.username } });

        // If no user is found, throw an error
        if (!user) {
            throw new NotFoundException(`No user with username '${loginAttemptRequest.username}' found.`);
        }

        // Step 2: Check if the password is correct
        const isPasswordValid = user.password === loginAttemptRequest.password;

        // If password does not match, throw an error
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        // Step 3: Generate a JWT containing the user's ID and return it
        return {
            token: this.jwtService.sign({ userId: user.id }),
        };
    }
}