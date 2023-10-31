import { ApiProperty } from "@nestjs/swagger"

export class UpdateUserRequest {
    @ApiProperty({ example: 'Betto' })
    firstName?: string

    @ApiProperty({ example: 'Atualizado V2' })
    lastName?: string

    @ApiProperty({ example: 'mendigoazul' })
    username?: string

    @ApiProperty({ example: 'betto@atualizei.com.br' })
    email?: string

    @ApiProperty({ example: 'senha123' })
    password?: string

    @ApiProperty({ example: '2001-05-16' })
    dob?: Date | string

    @ApiProperty({ example: 'Atualizei' })
    status?: string

    @ApiProperty({ example: 'https://i.imgur.com/VvIkd6i' })
    pfp?: string

    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string

    @ApiProperty({ example: false })
    allowPublicName?: boolean

    @ApiProperty({ example: false })
    allowPublicDob?: boolean
}

export class UpdateUserResponse {
    code: number
    message: string
}