import {ApiProperty} from "@nestjs/swagger"

export class UpdatePostRequest {
    @ApiProperty({ example: 'Atualizei' })
    userId?: string

    @ApiProperty({ example: 'hhttps://imgur.com/gallery/fM0heYS' })
    content?: string
}

export class UpdatePostResponse {
    code: number
    message: string
}