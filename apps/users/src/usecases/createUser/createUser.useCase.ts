import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { CreateUserRequest, CreateUserResponse } from './createUser.dto';

@Injectable()
export class CreateUserUseCase {

    constructor(private prisma: PrismaService) {}

    async execute(data: CreateUserRequest): Promise<CreateUserResponse> {
        if(data.password == undefined || data.username == undefined || data.email == undefined){
            return {
                code: 400,
                message: "Username, Password and/or Email is missing"
            }
        }

        if (data.username != undefined) {
            const checkUsername = await this.prisma.user.findFirst({
                where: {
                username: data.username,
                }
            })

            if(checkUsername != null){
                return {
                    code: 409,
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

            if(checkEmail != null){
                return {
                    code: 409,
                    message: "Email already exists"
                }
            }
        }

        try {
            const user = await this.prisma.user.create({
                data
            });

            if (user == null) {
                return {
                    code: 500,
                    message: "Internal server error"
                }
            } else {
                return {
                    code: 201,
                    message: "User created successfully"
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
