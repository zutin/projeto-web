import { Module } from '@nestjs/common';
import { PrismaService } from '../../projeto-web/src/database/PrismaService';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
