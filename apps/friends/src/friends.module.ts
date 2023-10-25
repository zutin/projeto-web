import { Module } from '@nestjs/common';
import { FriendsController } from './friends.controller';
import { FriendsService } from './friends.service';

@Module({
  imports: [],
  controllers: [FriendsController],
  providers: [FriendsService],
})
export class FriendsModule {}
