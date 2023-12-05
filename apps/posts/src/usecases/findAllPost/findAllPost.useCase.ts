import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { FindAllPostResponse } from './findAllPost.dto';

@Injectable()
export class FindAllPostUseCase{
    constructor(private prisma: PrismaService) {}

    async execute(): Promise<FindAllPostResponse> {
            try {
                const post = await this.prisma.post.findMany({
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
                        data: null,
                        user: null
                    }
                } else {
                    const user = await this.prisma.user.findFirst({
                        where: {
                            id: post[0].userId
                        }
                    })

                    return {
                        code: 200,
                        message: "Post retrieved successfully",
                        data: post,
                        user: user
                    }
                }
            } catch (error) {
                return {
                    code: 500,
                    message: "Internal server error",
                    data: null,
                    user: null
                }
            }
        } 
    }