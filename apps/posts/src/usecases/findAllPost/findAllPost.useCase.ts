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
        } 
    }