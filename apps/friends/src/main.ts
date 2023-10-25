import { NestFactory } from '@nestjs/core';
import { FriendsModule } from './friends.module';

async function bootstrap() {
  const app = await NestFactory.create(FriendsModule);
  await app.listen(3000);
}
bootstrap();
