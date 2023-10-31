import { ApiProperty } from "@nestjs/swagger"

export class CreateUserRequest {
  @ApiProperty({ example: 'Betto' })
  firstName: string

  @ApiProperty({ example: 'Carrero' })
  lastName: string

  @ApiProperty({ example: 'bettocarrero' })
  username: string

  @ApiProperty({ example: 'betto@carrero.com' })
  email: string

  @ApiProperty({ example: 'coxinha123' })
  password: string

  @ApiProperty({ example: '2002-10-21' })
  dob?: Date | string

  @ApiProperty({ example: 'Minha nossa cenoura' })
  status?: string

  @ApiProperty({ example: 'https://i.imgur.com/7x0QAPV.png' })
  pfp?: string

  createdAt?: Date | string
  updatedAt?: Date | string
  deletedAt?: Date | string

  @ApiProperty({ example: true })
  allowPublicName?: boolean

  @ApiProperty({ example: true })
  allowPublicDob?: boolean
}

export class CreateUserResponse {
  code: number
  message: string
}