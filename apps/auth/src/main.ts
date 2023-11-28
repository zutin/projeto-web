import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { SwaggerConfig } from './configuration/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  
  SwaggerConfig(app);
  
  await app.listen(3000);
}
bootstrap();
