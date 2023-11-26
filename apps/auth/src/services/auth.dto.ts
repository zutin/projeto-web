import { ApiProperty } from '@nestjs/swagger'

export class AuthEntity {
    token: string
}

export class LoginAttemptRequest {
    @ApiProperty({ example: 'bettocarrero' })
    username: string

    @ApiProperty({ example: 'coxinha123' })
    password: string
}