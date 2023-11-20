import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { LoginAttemptRequest, LoginAttemptResponse } from './auth.dto';
import { UserEntity } from './auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) {}

    async validateUser(loginAttemptRequest: LoginAttemptRequest): Promise<LoginAttemptResponse> {
        const user = await this.prisma.user.findFirst({
            where: {
                username: loginAttemptRequest.username,
            }
        })

        if(user != null){
            // const passwordMatch = await bcrypt.compare(loginAttemptRequest.password, user.password);
            const passwordMatch = loginAttemptRequest.password == user.password;

            console.log(passwordMatch)

            if(passwordMatch){
                return {
                    code: 200,
                    message: "Login successful",
                    user: { ...user }
                }
            } else {
                return {
                    code: 400,
                    message: "Incorrect password",
                }
            }
        } else {
            return {
                code: 404,
                message: "User not found",
            }
        }
    }

    async login(user: UserEntity) {
        const payload = { sub: user.id, username: user.username };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
