import { Module } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { PostsController } from './controllers/posts.controller';
import { PostsUseCaseModule } from './usecases/postsUseCase.module';
import { AuthService } from '@/apps/auth/src/services/auth.service';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from '@/apps/auth/src/configuration/jwt.strategy';

@Module({
  imports: [PostsUseCaseModule],
  controllers: [PostsController],
  providers: [PrismaService, AuthService, JwtService, JwtStrategy],
  exports: [PostsUseCaseModule],
})
export class PostsModule {}
