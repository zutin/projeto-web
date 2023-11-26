import { Module } from '@nestjs/common';
import { FindPostUseCase } from './findPost/findPost.useCase';
import { CreatePostUseCase } from './createPost/createPost.useCase';
import { UpdatePostUseCase } from './updatePost/updatePost.useCase';
import { DeletePostUseCase } from './deletePost/deletePost.useCase';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { FindAllPostUseCase } from './findAllPost/findAllPost.useCase';

@Module({
    providers: [FindPostUseCase, CreatePostUseCase, UpdatePostUseCase, DeletePostUseCase, PrismaService, FindAllPostUseCase],
    exports: [FindPostUseCase, CreatePostUseCase, UpdatePostUseCase, DeletePostUseCase, FindAllPostUseCase]
})
export class PostsUseCaseModule {}