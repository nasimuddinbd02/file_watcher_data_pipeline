import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Typed configuration provider — wraps NestJS ConfigService so all
 * config values are strongly-typed and injectable via the DI container.
 * Replaces the old static EnvConfig class.
 */
@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get watchDir(): string {
    return this.configService.get<string>('WATCH_DIR', './watch');
  }

  get dbFilePath(): string {
    return this.configService.get<string>('DB_FILE_PATH', './data/appointments.db');
  }

  get allowedExtension(): string {
    return this.configService.get<string>('ALLOWED_EXTENSION', '.json');
  }

  get pollIntervalMs(): number {
    return parseInt(this.configService.get<string>('POLL_INTERVAL_MS', '5000'), 10);
  }

  get nodeEnv(): string {
    return this.configService.get<string>('NODE_ENV', 'development');
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  get corsOrigins(): string[] | string {
    const raw = this.configService.get<string>('CORS_ORIGINS', '');
    return raw ? raw.split(',').map((s) => s.trim()) : '*';
  }

  get jwtSecret(): string {
    return this.configService.get<string>(
      'JWT_SECRET',
      'change_me_in_production',
    );
  }

  get jwtExpiresIn(): string {
    return this.configService.get<string>('JWT_EXPIRES_IN', '1d');
  }
}
