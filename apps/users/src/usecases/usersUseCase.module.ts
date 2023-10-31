import { Module } from '@nestjs/common';
import { FindUserUseCase } from './findUser/findUser.useCase';
import { CreateUserUseCase } from './createUser/createUser.useCase';
import { UpdateUserUseCase } from './updateUser/updateUser.useCase';
import { DeleteUserUseCase } from './deleteUser/deleteUser.useCase';
import { PrismaService } from '@/libs/utils/database/PrismaService';

@Module({
    providers: [FindUserUseCase, CreateUserUseCase, UpdateUserUseCase, DeleteUserUseCase, PrismaService],
    exports: [FindUserUseCase, CreateUserUseCase, UpdateUserUseCase, DeleteUserUseCase]
})
export class UsersUseCaseModule {}