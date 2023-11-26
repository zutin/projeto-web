import { Module } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { UsersController } from './controllers/users.controller';
import { UsersUseCaseModule } from './usecases/usersUseCase.module';
import { AuthService } from '@/apps/auth/src/services/auth.service';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from '@/apps/auth/src/configuration/jwt.strategy';

@Module({
  imports: [UsersUseCaseModule],
  controllers: [UsersController],
  providers: [PrismaService, AuthService, JwtService, JwtStrategy],
  exports: [UsersUseCaseModule],
})
export class UsersModule {}
