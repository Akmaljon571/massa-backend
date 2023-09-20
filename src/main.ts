import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './config/swagger';
import { ErrorHandle } from './filter/custom.exetepsion.filter';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    cors({
      origin: '*',
      credentials: true,
    }),
  );
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ErrorHandle());

  await mongoose
    .connect(process.env.DB)
    .then(() => console.log('Mongoose Run'))
    .catch((error) => console.log(error));

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen('1000');
}
bootstrap();
