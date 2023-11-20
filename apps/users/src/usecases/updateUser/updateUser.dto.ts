import { ApiProperty } from "@nestjs/swagger"

export class UpdateUserResponse {
    code: number
    message: string
}

export class UpdateUserNameRequest {
    @ApiProperty({ example: 'Betto' })
    firstName?: string

    @ApiProperty({ example: 'Atualizado V2' })
    lastName?: string
}

export class UpdateUserStatusRequest {
    @ApiProperty({ example: 'Atualizei' })
    status: string
}

export class UpdateUserPfpRequest {
    @ApiProperty({ example: 'https://i.imgur.com/VvIkd6i' })
    pfp: string
}

export class UpdateUserPasswordRequest {
    @ApiProperty({ example: 'senha123' })
    password: string
}

export class UpdateUserEmailRequest {
    @ApiProperty({ example: 'betto@carrero.com' })
    email: string
}