import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Environment } from './common/conf/environment';
import * as fs from 'fs';
import orval from 'orval';
import {
  INestApplication,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const configureSwagger = (app: INestApplication): void => {
  const swaggerOptions: SwaggerDocumentOptions = {};
  const swaggerDocumentConfig = new DocumentBuilder()
    .setTitle('REST Api')
    .setDescription('Monolithic SaaS endpoints')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(
    app,
    swaggerDocumentConfig,
    swaggerOptions,
  );

  SwaggerModule.setup('api', app, document);

  // Generate client code from Swagger specification
  if (process.env.NODE_ENV === Environment.DEV) {
    fs.writeFileSync('./swagger.json', JSON.stringify(document, null, 2));

    orval('./orval.config.js');
  }
};

export const configureREST = (app: INestApplication): void => {
  const validationPipeOpts: ValidationPipeOptions = {
    whitelist: true,
    transform: true,
  };

  app.useGlobalPipes(new ValidationPipe(validationPipeOpts));
};

/**
 * Entrypoint to the NestJS application
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configureSwagger(app);
  configureREST(app);

  await app.listen(process.env.PORT);
}

bootstrap();
