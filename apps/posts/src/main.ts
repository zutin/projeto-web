import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts.module';
import { SwaggerConfig } from './configuration/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);

  // Starts listening for shutdown hooks
  SwaggerConfig(app);
  
  await app.listen(3000);
}
bootstrap();
