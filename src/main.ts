import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';

async function bootstrap() {
  const logger = new Logger('Paymets-ms');

  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  // pipe options
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(envs.port);

  logger.log(`Payments-ms is running on port ${envs.port}`);
}
bootstrap();
