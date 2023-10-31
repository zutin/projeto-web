import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { UpdateUserRequest, UpdateUserResponse } from './updateUser.dto';

@Injectable()
export class UpdateUserUseCase {

    constructor(private prisma: PrismaService) {}

    async execute(id: string, data: UpdateUserRequest): Promise<UpdateUserResponse> {
        const checkUser = await this.prisma.user.findFirst({
            where: {
                id: id,
            }
        })

        if(checkUser == null){
            return {
                code: 400,
                message: "User does not exist"
            }
        }

        if (data.username != undefined) {
            const checkUsername = await this.prisma.user.findFirst({
                where: {
                username: data.username,
                },
            })

            if(checkUsername != null && checkUsername.id != id){
                return {
                    code: 400,
                    message: "Username already exists"
                }
            }
        }

        if (data.email != undefined) {
            const checkEmail = await this.prisma.user.findFirst({
                where: {
                email: data.email,
                }
            })

            if(checkEmail != null && checkEmail.id != id){
                return {
                    code: 400,
                    message: "Email already exists"
                }
            }
        }

        try {
            const user = await this.prisma.user.update({
                where: {
                id: id,
                },
                data
            })

            if (user == null) {
                return {
                    code: 500,
                    message: "Internal server error"
                }
            } else {
                return {
                    code: 200,
                    message: "User updated successfully"
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
