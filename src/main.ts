import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  console.log(process.env.DATABASE_URL);
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
