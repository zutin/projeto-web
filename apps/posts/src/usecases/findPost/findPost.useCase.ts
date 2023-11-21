import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { FindPostResponse,} from './findPost.dto';

@Injectable()
export class FindPostUseCase{
    constructor(private prisma: PrismaService) {}

    async execute(id?: string): Promise<FindPostResponse> {
        if(id != undefined){
            const checkPost = await this.prisma.post.findFirst({
                where: {
                    id: id,
                }
            })

            if(checkPost == null){
                return {
                    code: 400,
                    message: "Post not found",
                    data: null
                }
            }
            
            try {
                const post = await this.prisma.post.findFirst({
                    where: {
                        id: id,
                    },
                    select: {
                        id: true,
                        userId: true,
                        content: true,
                    }
                })

                if (post == null) {
                    return {
                        code: 500,
                        message: "Internal server error",
                        data: null
                    }
                } else {
                    return {
                        code: 200,
                        message: "Post retrieved successfully",
                        data: post
                    }
                }
            } catch (error) {
                return {
                    code: 500,
                    message: "Internal server error",
                    data: null
                }
            }
        } else {
            try {
                const posts = await this.prisma.post.findMany({
                    select: {
                        id: true,
                        userId: true,
                        content: true,
                    }
                })

                if (posts == null) {
                    return {
                        code: 500,
                        message: "Internal server error",
                        data: null
                    }
                } else {
                    return {
                        code: 200,
                        message: "Posts retrieved successfully",
                        data: posts
                    }
                }
            } catch (error) {
                return {
                    code: 500,
                    message: "Internal server error",
                    data: null
                }
            }
        }
    }
}