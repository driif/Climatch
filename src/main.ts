import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'localhost:3000',
      'localhost:4200',
      'http://climatch.herokuapp.com',
      'climatch-api.herokuapp.com',
      'http://climatch.herokuapp.com/',
      '0.0.0.0:3000',
      '127.0.0.1:3000',
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
