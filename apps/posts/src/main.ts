import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts.module';
import { SwaggerConfig } from './configuration/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);

  const port = process.env.PORT || 3000;
  
  SwaggerConfig(app);
  
  await app.listen(port, "0.0.0.0");
}
bootstrap();
