import { ApiProperty } from '@nestjs/swagger'

export type UserEntity = {
    id: string
    firstName: string
    lastName: string
    username: string
    email: string
    status?: string
    pfp?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string
}

export class LoginAttemptRequest {
    @ApiProperty({ example: 'bettocarrero' })
    username: string

    @ApiProperty({ example: 'coxinha123' })
    password: string
}

export class LoginAttemptResponse {
    code: number
    message: string
    user?: UserEntity
}