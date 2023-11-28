import { Module } from '@nestjs/common';
import { FindUserUseCase } from './findUser/findUser.useCase';
import { CreateUserUseCase } from './createUser/createUser.useCase';
import { UpdateUserNameUseCase, UpdateUserStatusUseCase, UpdateUserPfpUseCase, UpdateUserPasswordUseCase, UpdateUserEmailUseCase } from './updateUser/updateUser.useCase';
import { DeleteUserUseCase } from './deleteUser/deleteUser.useCase';
import { PrismaService } from '@/libs/utils/database/PrismaService';

@Module({
    providers: [FindUserUseCase, CreateUserUseCase, UpdateUserNameUseCase, UpdateUserStatusUseCase, UpdateUserPfpUseCase, UpdateUserPasswordUseCase, UpdateUserEmailUseCase, DeleteUserUseCase, PrismaService],
    exports: [FindUserUseCase, CreateUserUseCase, UpdateUserNameUseCase, UpdateUserStatusUseCase, UpdateUserPfpUseCase, UpdateUserPasswordUseCase, UpdateUserEmailUseCase, DeleteUserUseCase]
})
export class UsersUseCaseModule {}