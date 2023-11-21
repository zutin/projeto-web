import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { DeletePostResponse } from './deletePost.dto';
@Injectable()
export class DeletePostUseCase{
    constructor(private prisma: PrismaService) {}

    async execute(id: string): Promise<DeletePostResponse> {
        const checkPost = await this.prisma.post.findFirst({
            where: {
                id: id,
            }
        })

        if(checkPost == null){
            return {
                code: 400,
                message: "Post not found"
            }
        }

        try {
            const post = await this.prisma.post.delete({
                where: {
                    id: id,
                },
            })

            if (post == null) {
                return {
                    code: 500,
                    message: "Internal server error"
                }
            } else {
                return {
                    code: 204,
                    message: "Post deleted successfully"
                }
            }
        } catch (error) {
            console.log(error)
            return {
                code: 500,
                message: "Internal server error"
            }
        }
    }
}