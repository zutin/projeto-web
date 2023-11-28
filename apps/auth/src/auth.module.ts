import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { JwtStrategy } from './configuration/jwt.strategy';
import { AuthUserUseCase } from '../usecases/authUser/authUser.useCase';

import { UsersModule } from '@/apps/users/src/users.module';
import { PostsModule } from '@/apps/posts/src/posts.module';

export const jwtSecret = 'zjP9h6ZI5LoSKCRj';

@Module({
  imports: [PassportModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '1h' },
    }),
    UsersModule, PostsModule
  ],
  controllers: [AuthController],
  providers: [PrismaService, AuthService, JwtStrategy, AuthUserUseCase],
})
export class AuthModule {}