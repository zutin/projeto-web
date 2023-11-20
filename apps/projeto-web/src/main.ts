import { NestFactory } from '@nestjs/core';
import { ProjetoWebModule } from './projeto-web.module';

async function bootstrap() {
  const app = await NestFactory.create(ProjetoWebModule);
  await app.listen(3000);
}
bootstrap();
