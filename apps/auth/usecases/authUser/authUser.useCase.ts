import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthUserRequest, AuthUserResponse } from './authUser.dto';

@Injectable()
export class AuthUserUseCase {
    constructor(private readonly jwt: JwtService) {}
    async execute(authUserRequest: AuthUserRequest): Promise<AuthUserResponse> {
        try {
            const decodedToken = this.jwt.verify(authUserRequest.token);
            return decodedToken as AuthUserResponse;
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}
