import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts.module';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();
  
  await app.listen(3000);
}
bootstrap();
