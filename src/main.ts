import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'localhost:3333',
      'https://climatch.herokuapp.com',
      'https://climatch-api.herokuapp.com',
      'https://climatch.herokuapp.com/',
      'https://climatch-api.herokuapp.com/',
      'localhost:4200',
      'localhost:4300',
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
