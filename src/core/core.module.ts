import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerProvider } from '../providers/LoggerProvider';
import { AppConfigService } from '../config/app-config.service';

/**
 * CoreModule — @Global singleton module.
 * Provides LoggerProvider and AppConfigService to every module in both
 * the API and Worker process trees without requiring explicit imports.
 * ConfigModule is registered here as the single source of truth for env config.
 */
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  providers: [LoggerProvider, AppConfigService],
  exports: [LoggerProvider, AppConfigService],
})
export class CoreModule {}
