import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { DeleteUserResponse } from './deleteUser.dto';

@Injectable()
export class DeleteUserUseCase {

    constructor(private prisma: PrismaService) {}

    async execute(id: string): Promise<DeleteUserResponse> {
        const checkUser = await this.prisma.user.findFirst({
            where: {
                id: id,
            }
        })

        if(checkUser == null){
            return {
                code: 400,
                message: "User not found"
            }
        }

        try {
            const user = await this.prisma.user.delete({
                where: {
                    id: id,
                },
            })

            if (user == null) {
                return {
                    code: 500,
                    message: "Internal server error"
                }
            } else {
                return {
                    code: 204,
                    message: "User deleted successfully"
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
