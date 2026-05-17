import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerProvider } from './providers/LoggerProvider';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = app.get(LoggerProvider);
  app.useLogger(logger);
  app.useGlobalFilters(new AllExceptionsFilter(logger));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // --- Security ---
  // Helmet sets secure HTTP response headers (XSS, clickjacking, sniffing, etc.)
  // contentSecurityPolicy is relaxed to allow Swagger UI assets in development.
  app.use(
    helmet({
      contentSecurityPolicy: process.env.NODE_ENV === 'production',
      crossOriginEmbedderPolicy: false,
    }),
  );

  // CORS: restrict which origins, methods, and headers are permitted
  app.enableCors({
    origin: process.env.CORS_ORIGINS
      ? process.env.CORS_ORIGINS.split(',')
      : '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
  });

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('File Watcher Data Pipeline API')
    .setDescription(
      'REST API for querying and manually correcting data ingested by the automated JSON file watcher pipeline.'
    )
    .setVersion('1.0')
    .addTag('departments', 'Hospital department records')
    .addTag('clients', 'Client (pet owner) records')
    .addTag('patients', 'Patient (pet) records')
    .addTag('appointments', 'Appointment records')
    .addTag('appointment-types', 'Appointment type catalogue')
    .addTag('appointment-reasons', 'Appointment reason records')
    .addTag('appointment-status-audits', 'Status change audit trail')
    .addTag('file-processing-records', 'File ingestion audit log')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.enableCors();
  await app.listen(3000);
  logger.log(`NestJS Application is running on: ${await app.getUrl()}`);
  logger.log('Swagger UI available at: http://localhost:3000/api/docs');
}
bootstrap();
