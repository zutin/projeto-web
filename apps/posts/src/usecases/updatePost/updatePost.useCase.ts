import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { UpdatePostRequest, UpdatePostResponse } from './updatePost.dto';

@Injectable()
export class UpdatePostUseCase{
    
    constructor(private prisma: PrismaService) {}

    async execute(id: string, data: UpdatePostRequest): Promise<UpdatePostResponse> {
        const checkPost = await this.prisma.post.findFirst({
            where: {
                id: id,
            }
        })

        if(checkPost == null){
            return {
                code: 400,
                message: "Post does not exist"
            }
        }

        try {
            const post = await this.prisma.post.update({
                where: {
                id: id,
                },
                data
            })

            if (post == null) {
                return {
                    code: 500,
                    message: "Internal server error",
                }
            } else {
                return {
                    code: 200,
                    message: "Post updated successfully",
                }
            }
        } catch (error) {
            return {
                code: 500,
                message: "Internal server error",
            }
        }
    }
}