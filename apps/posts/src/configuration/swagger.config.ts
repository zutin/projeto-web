import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const SwaggerConfig = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .setTitle('Posts Module (Desenvolvimento Web II)')
        .setDescription('API para o módulo de posts do projeto de Desenvolvimento Web II')
        .setVersion('1.0')
        .addServer('/', 'Local environment')
        .addServer('/dev/', 'Development environment')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
};