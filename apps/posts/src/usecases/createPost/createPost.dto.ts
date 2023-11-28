import { ApiProperty } from "@nestjs/swagger"

export class CreatePostRequest {
    @ApiProperty({ example: 'Betto' })
    userId: string
    
    @ApiProperty({ example: 'KSDJASDSUHGUTASDSDSNCWNFUNUH VUY WBUHBF' })
    content: string
    
}

export class CreatePostResponse {
    code: number
    message: string
} 