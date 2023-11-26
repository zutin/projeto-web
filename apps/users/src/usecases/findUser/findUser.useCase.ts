import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { FindUserResponse } from './findUser.dto';

@Injectable()
export class FindUserUseCase {

    constructor(private prisma: PrismaService) {}

    async execute(id?: string): Promise<FindUserResponse> {
        if(id != undefined){
            const checkUser = await this.prisma.user.findFirst({
                where: {
                    id: id,
                }
            })

            if(checkUser == null){
                return {
                    code: 400,
                    message: "User not found",
                    data: null
                }
            }
            
            try {
                const user = await this.prisma.user.findFirst({
                    where: {
                        id: id,
                    },
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        username: true,
                        email: true,
                        status: true,
                        pfp: true,
                        createdAt: true,
                        updatedAt: true,
                        deletedAt: true
                    }
                })

                if (user == null) {
                    return {
                        code: 500,
                        message: "Internal server error",
                        data: null
                    }
                } else {
                    return {
                        code: 200,
                        message: "User retrieved successfully",
                        data: user
                    }
                }
            } catch (error) {
                console.log(error)
                return {
                    code: 500,
                    message: "Internal server error",
                    data: null
                }
            }
        } else {
            try {
                const users = await this.prisma.user.findMany({
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        username: true,
                        email: true,
                        status: true,
                        pfp: true,
                        createdAt: true,
                        updatedAt: true,
                        deletedAt: true
                    }
                })

                if (users == null) {
                    return {
                        code: 500,
                        message: "Internal server error",
                        data: null
                    }
                } else {
                    return {
                        code: 200,
                        message: "Users retrieved successfully",
                        data: users
                    }
                }
            } catch (error) {
                console.log(error)
                return {
                    code: 500,
                    message: "Internal server error",
                    data: null
                }
            }
        }
    }
    
}
