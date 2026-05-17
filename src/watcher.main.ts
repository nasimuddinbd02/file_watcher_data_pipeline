import { NestFactory } from '@nestjs/core';
import { IngestionModule } from './ingestion.module';
import { LoggerProvider } from './providers/LoggerProvider';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(IngestionModule);

  const logger = app.get(LoggerProvider);
  app.useLogger(logger);

  logger.log('NestJS Background Worker started successfully');
}
bootstrap();
