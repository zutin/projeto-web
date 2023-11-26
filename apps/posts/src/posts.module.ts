import { Module } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { PostsController } from './controllers/posts.controller';
import { PostsUseCaseModule } from './usecases/postsUseCase.module';

@Module({
  imports: [PostsUseCaseModule],
  controllers: [PostsController],
  providers: [PrismaService]
})
export class PostsModule {}
