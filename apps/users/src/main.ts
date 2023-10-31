import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { SwaggerConfig } from './configuration/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  // Starts listening for shutdown hooks
  // app.enableShutdownHooks();
  SwaggerConfig(app);
  
  await app.listen(3000);
}
bootstrap();
