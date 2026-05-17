import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';

@Injectable()
export class LoggerProvider implements LoggerService {
    private logger: winston.Logger;

    constructor() {
        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            transports: [
                new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
                new winston.transports.File({ filename: 'logs/combined.log' }),
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.simple()
                    )
                })
            ]
        });
    }

    info(message: string, ...meta: any[]) {
        this.logger.info(message, ...meta);
    }

    warn(message: string, ...meta: any[]) {
        this.logger.warn(message, ...meta);
    }

    error(message: string, trace?: any, context?: string) {
        this.logger.error(message, { trace, context });
    }

    debug(message: string, ...meta: any[]) {
        this.logger.debug(message, ...meta);
    }

    // NestJS LoggerService interface — required methods
    log(message: any, ...optionalParams: any[]) {
        this.info(message, ...optionalParams);
    }

    verbose(message: any, ...optionalParams: any[]) {
        this.logger.verbose(message, ...optionalParams);
    }
}
