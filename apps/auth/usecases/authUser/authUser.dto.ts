import { 
    ApiProperty
} from '@nestjs/swagger';

export class AuthUserRequest {
    @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NDBmYzM1NC1mNGZiLTQ4ODUtOTk1YS0wYTEwOTllZTMwOWYiLCJpYXQiOjE3MDA5NzMzNTAsImV4cCI6MTcwMDk3Njk1MH0.hpo1qIXBiLEFOLQ4Ohyb60E4Hry8JU_uP4-V9SXl7Hg' })
    token: string;
}

export class AuthUserResponse {
    @ApiProperty({ example: '840fc354-f4fb-4885-995a-0a1099ee309f' })
    userId: string;
    @ApiProperty({ example: 1610000000 })
    iat: number;
    @ApiProperty({ example: 1610000000 })
    exp: number;
}