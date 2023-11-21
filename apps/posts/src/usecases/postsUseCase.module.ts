import { Module } from '@nestjs/common';
import { FindPostUseCase } from './findPost/findPost.useCase';
import { CreatePostUseCase } from './createPost/createPost.useCase';
import { UpdatePostUseCase } from './updatePost/updatePost.useCase';
import { DeletePostUseCase } from './deletePost/deletePost.useCase';
import { PrismaService } from '@/libs/utils/database/PrismaService';

@Module({
    providers: [FindPostUseCase, CreatePostUseCase, UpdatePostUseCase, DeletePostUseCase, PrismaService],
    exports: [FindPostUseCase, CreatePostUseCase, UpdatePostUseCase, DeletePostUseCase]
})
export class PostsUseCaseModule {}