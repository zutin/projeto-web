import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { UpdateUserNameRequest, UpdateUserStatusRequest, UpdateUserPfpRequest, UpdateUserPasswordRequest, UpdateUserEmailRequest, UpdateUserResponse } from './updateUser.dto';

@Injectable()
export class UpdateUserNameUseCase {

    constructor(private prisma: PrismaService) {}

    async execute(id: string, data: UpdateUserNameRequest): Promise<UpdateUserResponse> {
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

@Injectable()
export class UpdateUserStatusUseCase {

    constructor(private prisma: PrismaService) {}

    async execute(id: string, data: UpdateUserStatusRequest): Promise<UpdateUserResponse> {
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

@Injectable()
export class UpdateUserPfpUseCase {

    constructor(private prisma: PrismaService) {}

    async execute(id: string, data: UpdateUserPfpRequest): Promise<UpdateUserResponse> {
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

@Injectable()
export class UpdateUserPasswordUseCase {

    constructor(private prisma: PrismaService) {}

    async execute(id: string, data: UpdateUserPasswordRequest): Promise<UpdateUserResponse> {
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

@Injectable()
export class UpdateUserEmailUseCase {

    constructor(private prisma: PrismaService) {}

    async execute(id: string, data: UpdateUserEmailRequest): Promise<UpdateUserResponse> {
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