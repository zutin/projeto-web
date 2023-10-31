import { Module } from '@nestjs/common';
import { PrismaService } from '@/libs/utils/database/PrismaService';
import { UsersController } from './controllers/users.controller';
import { UsersUseCaseModule } from './usecases/usersUseCase.module';

@Module({
  imports: [UsersUseCaseModule],
  controllers: [UsersController],
  providers: [PrismaService]
})
export class UsersModule {}
