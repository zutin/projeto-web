import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { CreatePostRequest, CreatePostResponse } from './createPost.dto';

@Injectable()
export class CreatePostUseCase{
    constructor(private prisma: PrismaService) {}

    async execute(data: CreatePostRequest): Promise<CreatePostResponse> {
        if(data.content == undefined || data.userId == undefined){
            return {
                code: 400,
                message: "Content and/or UserId is missing"
            }
        }

        try {
            const post = await this.prisma.post.create({
                data
            });

            console.log(post)

            if (post == null) {
                return {
                    code: 500,
                    message: "Internal server error"
                }
            } else {
                return {
                    code: 201,
                    message: "Post created successfully"
                }
            }
        } catch (error) {
            return {
                code: 500,
                message: "Internal server error"
            }
        }
    }
}