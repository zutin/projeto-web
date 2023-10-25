import { NestFactory } from '@nestjs/core';
import { FriendsModule } from './friends.module';

async function bootstrap() {
  const app = await NestFactory.create(FriendsModule);

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();
  
  await app.listen(3000);
}
bootstrap();
